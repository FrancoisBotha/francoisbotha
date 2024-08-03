---
title: Integrating Scala into a Spring Boot Project
description: Tutorial on how to integrate scala in a Java project
date: 2024-07-06
cover: Scala101/image1.png
tags:
  - Spring Boot
---
**Integrating Scala into a Spring Boot Project**

In this tutorial I will demonstrate how to integrate Scala into a Spring
Boot Project.

Click on File-\>New-\>Project. Select 'Spring Initializr' and fill in
the project details as follows:

![](/images/blog/IntegratingScalaIntoSpringBoot/image1.png){ width=602 height=491 }

For this project I have selected DevTools, Lombok, Web and Thymeleaf as
initial dependencies:

![](/images/blog/IntegratingScalaIntoSpringBoot/image2.png){ width=602 height=450 }

Configure your project to support Scala by right-clicking on the project
and selecting 'Add Framework Support'.

![](/images/blog/IntegratingScalaIntoSpringBoot/image3.png){ width=602 height=346 }

Select Scala:

![](/images/blog/IntegratingScalaIntoSpringBoot/image4.png){ width=602 height=518 }

Edit the pom.xml file as follows:

In the properties section, add:

```xml
<scala.version>2.12.0</scala.version>
```

Add the following dependencies:

```xml
<dependency>
  <groupId>org.scala-lang</groupId>
  <artifactId>scala-library</artifactId>
  <version>${scala.version}</version>
</dependency>
<dependency>
  <groupId>org.scala-lang</groupId>
  <artifactId>scala-compiler</artifactId>
  <version>${scala.version}</version>
</dependency>
```

Replace the existing *Build* section in pom.xml with the following code:

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
     </plugin>
    <plugin>
      <groupId>net.alchim31.maven</groupId>
      <artifactId>scala-maven-plugin</artifactId>
      <version>3.2.1</version>
      <executions>
        <execution>
          <id>compile-scala</id>
          <phase>compile</phase>
          <goals>
            <goal>add-source</goal>
            <goal>compile</goal>
          </goals>
        </execution>
        <execution>
          <id>test-compile-scala</id>
          <phase>test-compile</phase>
          <goals>
            <goal>add-source</goal>
            <goal>testCompile</goal>
          </goals>
        </execution>
      </executions>
      <configuration>
        <recompileMode>incremental</recompileMode>
        <scalaVersion>${scala.version}</scalaVersion>
        <args>
          <arg>-deprecation</arg>
        </args>
        <jvmArgs>
          <jvmArg>-Xms64m</jvmArg>
          <jvmArg>-Xmx1024m</jvmArg>
        </jvmArgs>
       </configuration>
    </plugin>
  </plugins>
</build>
```

Create a folder named "scala" under src/main.

Right click on the scala folder, and select 'Mark Directory as...' -\>
'Sources Root'

![](/images/blog/IntegratingScalaIntoSpringBoot/image5.png){ width=602 height=284 }

Right-click on the scala folder to add a package, and within create a
scala class:

```java
package io.francoisbotha.sparkbuilder.sc
 
class GreetingInScala {
  def greet(): String = {
    val greeting = "Hello from SCALA!!!!"
    greeting
  }
}

```
 

Update the SparkBuilderAppliction file as follows:

```java
package io.francoisbotha.sparkbuilder;
 
import io.francoisbotha.sparkbuilder.sc.GreetingInScala;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
 
@SpringBootApplication
public class SparkbuilderApplication {
 
  public static void main(String[] args) {
 
    GreetingInScala greetingInScala = new GreetingInScala();
 
    SpringApplication.run(SparkbuilderApplication.class, args);
 
    System.out.println(greetingInScala.greet());
 
  }
}

```

The code section above demonstrates how Scala classes can be integrated
seamlessly in your Java Spring Boot project. The following is the output
of running the application:

![](/images/blog/IntegratingScalaIntoSpringBoot/image6.png){ width=602 height=330 }
