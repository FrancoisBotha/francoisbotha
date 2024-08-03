---
title: Setting up Jenkins on your local machine
description: Tutorial on to install and configure Jenkins locally
date: 2024-07-06
cover: SettingUpJenkinsOnYourLocalMachine/image1.jpg
tags:
  - CICD
---
**Setting up Jenkins on your local machine**

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image1.jpg){ width=221 height=228 }

Jenkins is a popular tool for implementing Continuous Integration /
Continuous Delivery workflows. It can also be useful to automate build
tasks on your local development machine. In this write-up I will discuss
the basics of setting up a Jenkins server on your local machine. There
are many excellent tutorials available, and this document uses the
official Jenkins tutorial "Build a Java app with Maven" (available here:
<https://jenkins.io/doc/tutorials/build-a-java-app-with-maven/#stopping-and-restarting-jenkins>
) as its base.

To start off with, I will be using an Ubuntu 19.04 Virtual Machine
hosted on Virtual Box. 

**Docker**

Docker goes hand-in-hand with any CI/CI Jenkins workflow, and here I
will also use Docker to get an instance of Jenkins up and running.

See this
(<https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04>)
link for installing Docker on Ubuntu.

In this tutorial we will be installing Jenkins using a Docker image. It
is very useful for CI/CD workflows for this Docker image to itself have
access to Docker. In order to achieve this, we will map the Docker
socket on the host to the container. (Note: This has some security
implications, so be sure you fully understand the implications of this
before deploying this configuration to a production environment.)

In order to map the socket to the container, we will need to be able to
configure the group ownership that the socket is created with. See this
post (LINK) for more information.

As a quick reference, the following is a table of useful Docker
commands:

- Get general info of your Docker Machine:         
docker info
- Get a list of currently installed Docker Images: 
docker images
- Get a list of running Docker containers:   
      *docker ps* 
- Stop a running container: 
  docker stop <container-name> 
-Start a Docker image from a Docker
 docker-compose up  <Compose file> (add -d to start it in the background)   
- Shut the Docker container that the docker-compose file in the current 
  working directory points to: 
  docker-compose down 
- View the logs for a specific container:
docker logs -f <container-name> 
- Enter the shell of the Docker container:
   docker exec -ti <container name> bash
- Copy a file from the host to a container:
   docker cp <source> <container>:<target>

In your Linux Virtual Machine, create a working folder for your Jenkins
installation. I have created /home/jenkins/jenkins_wrk for this purpose.
In this folder create another folder called volumes, and within it, a
folder called jenkins_home. The purpose of this is to create a
persistent data volume that will be accessible from the Jenkins Docker
image.

**Docker Compose**

Inside this folder create a Dockerfile that will be used to pull in a
Jenkins image configured with Blue Ocean and Docker. We will extend it
by installing Docker Compose:

```dockerfile
FROM jenkinsci/blueocean

USER root

# Compose

RUN apk add py-pip && \\

    apk add python-dev libffi-dev openssl-dev gcc libc-dev make && \\

    pip install docker-compose
```

Inside the same folder create a Docker Compose file (docker-compose.yml)
that will be used to spin up your Jenkins service:

```dockerfile
version: '3'
services:
  jenkins:
    container_name: jenkins
    image: jenkinsblueocean/compose
    ports:
      - "2000:8080"                                                                                                                                                                 volumes:
      - /home/jenkins/jenkins_wrk/volumes/jenkins_home:/var/jenkins_home
      - "/var/run/docker.sock:/var/run/docker.sock"
    networks:
      - net
networks:
  net:
```

This Docker Compose file:

1.  Uses the Dockerfile with jenkinsci/blueocean image as its base --
    This is a jenkins image that comes bundled with the Blue Ocean UI

2.  Exposes the internal port 8080 to the outside world at port 2000

3.  Creates a volume that maps /var/jenkins_home inside the container to
    /home/jenkins/volumes/jenkins_home on the host. (Tip: Don't use
    variables here such as \$PWD, or the Systemd scripts discussed later
    will fail)

4.  The Jenkins image included above also contains Docker within itself.
    A volume mapping is included to link the docker process within the
    container to that of the host.

5.  Sets up an internal network called 'net'

To start the container, type the following:

```bash
docker-compose up -d
```

If you hit up localhost:2000 you should see the following screen:

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image2.png){ width=386 height=225 }

Obtain and enter the secret key as instructed in the image above.
Remember that /ver/jenkins_home is mapped to the host as described
above.

On the next screen select the option to install suggested plugins:

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image3.png){ width=450 height=263 }

Next, enter your user details:

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image4.png){ width=452 height=264 }

On the next screen confirm your URL:

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image5.png){ width=482 height=278 }

On completion of these steps you should be able to log into your Jenkins
server.

**Configure Systemd**

Next, I want to configure the Jenkins Docker Container to run whenever I
start the Virtual Machine. To do this we will use Systemd. Create the
following file: /etc/systemd/system/jenkins.service, and populate it as
follows:

```dockerfile
[Unit]
Description=Docker Compose Application Service - Jenkins
Requires=docker.service
After=docker.service

[Service]
WorkingDirectory=/home/jenkins/jenkins_wrk
ExecStart=/usr/bin/docker-compose up
ExecStop=/usr/bin/docker-compose down
TimeoutStartSec=0
Restart=on-failure
StartLimitIntervalSec=60
StartLimitBurst=3

[Install]
WantedBy=multi-user.target

```

Change the permission of the file as follows:

```bash
sudo chmod 644 jenkins.service
```

Create the service by entering the following command:

```bash
sudo systemctl enable jenkins.service
```

Start it:

```bash
sudo systemctl start jenkins.service
```

View the logs to ensure everything started correctly:

```bash
journalctl -f
```

At this point you can restart your virtual machine to ensure Jenkins
starts up correctly.

**Fork the example repo**

Now we are ready to fork the sample repository
(<https://github.com/jenkins-docs/simple-java-maven-app>) referenced in
the official Jenkins tutorial. I will fork it to my private repositories
on GitHub, in order to demonstrate setting up private key access on
Jenkins.

**Configure SSH Private Key access to Github repo**

First, we need to generate a private/public key pair. We do this by
running the following command on the virtual machine:

```bash
ssh-keygen
```

It generates a key pair in the home folder of the user, in the .ssh sub
folder.

Next, we need to set up the credential in Jenkins: Select 'Credentials'
and then 'System' and 'Global Credentials'. Enter your details in the
following screen:

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image6.png){ width=473 height=315 }

Vi the contents of your private key generated in the step above and
paste it into the space provided in the form above.

In your Github forked repository, enter the public key under the
"Deployed Keys" section, as follows:

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image7.png){ width=519 height=274 }

At this point you have recorded your private key as a credential in
Jenkins, and linked your public key to your repository on Github. Next,
we configure our Pipeline job within Jenkins.

**Pipeline-as-code in Jenkins**

On your Jenkins Dashboard select the "New Item" option to start
configuring your pipeline. Enter a name for your pipeline. Be sure to
select the "Pipeline" as the type and click on OK. Next, scroll to the
Pipeline section and select the "Pipeline script from SCM" option. Enter
Git as your SCM and paste the SSH URL. In the Credentials field select
the SSH credential you have configured in the previous section. If all
worked out as planned you should see no red texted errors here:

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image8.png){ width=496 height=249 }

Note: The configuration above refers to a Jenkinsfile on the root level.
The example repo has the Jenkins file located in a separate Jenkins
folder. After completion of this tutorial you can copy your Jenkins file
there and update the configuration above accordingly.

**Jenkinsfile**

Now we are ready to clone the example repository to our local machine
and open the project using our favourite editor.

In the root of your example project create file named Jenkinsfile and
enter the following text:

```json
pipeline {
    agent {
        docker {
            image 'maven:3-alpine' 
            args '-v /root/.m2:/root/.m2' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'mvn -B -DskipTests clean package' 
            }
        }
    }
}
```

This file describes your entire pipeline, which at this stage uses a
Maven Docker image to create a container which will build your Maven
project.

Save the Jenkins file and commit it to your repository.

```bash
sudo usermod -a -G docker francois
```

**Run the Pipeline in BlueOcean**

Select the 'BlueOcean' option in the menu area of Jenkins to get to this
interface:

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image9.png){ width=602 height=301 }

Click on the "Run" button above. View the details of your pipeline's
execution:

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image10.png){ width=602 height=281 }

After completing the build successfully, the following screen will be
displayed:

![](/images/blog/SettingUpJenkinsOnYourLocalMachine/image11.png){ width=602 height=274 }

Next, add a test stage by modifying the Jenkinsfile and adding the
following stage:

```json
stage('Test') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }
```


Commit the change to your GitHub repo and run the pipeline again. Now
the pipeline will be extended to include a testing stage, as expected.

**Installation Checklist**

Following the steps in this tutorial should enable you to achieve the
following outcomes:

-   Docker Installed

-   Jenkins Installed

-   Docker ps can be executed from within Jenkins Docker image

-   Jenkins starts on boot

-   Docker can access GitHub repo via key
