---
title: Getting Started with Progress Application Server Development
description: Tutorial on developing a PAS application with Progress OpenEdge
date: 2024-07-06
cover: GettingStartedPASDevlopment/image1.png
tags:
  - Progress OpenEdge
---

**Getting Started with Progress Application Server Development**

![](/images/blog/GettingStartedPASDevlopment/image1.png){ width=200 height=200 }

The Progress Application Server (PAS) provides Web server support for
Progress applications. In this tutorial I will demonstrate how to create
a very basic PAS application from scratch in version 12.1 of Progress
OpenEdge. This will involve the following steps:

1.  Create a Workspace

2.  Create a Client project

3.  Create a database

4.  Create a database server

5.  Create an App Server Instance

6.  Create a Server project

7.  Link the database to the server project

8.  Link the database to the App Server

9.  Create a server program

10. Publish the server program

11. Create a client program

**Create a Workspace**

Open developer studio -- the next window will display:

![](/images/blog/GettingStartedPASDevlopment/image2.png){ width=602 height=281 }

In the window above I created a new workspace named "OETutorials". Click
on "Launch" to continue. Progress Developer Studio opens to the welcome
screen:

![](/images/blog/GettingStartedPASDevlopment/image3.png){ width=462 height=350 }

**Create a Client Project**

We will be using a basic client/server two-tiered architecture in this
tutorial. First, we create the client project by selecting File -\> New
-\> OpenEdge Project:

![](/images/blog/GettingStartedPASDevlopment/image4.png){ width=602 height=580 }

Enter "clientBasic" as the project name. Select the bottom tab "General"
and select the "OpenEdge Basic" radio button. Click on Finish:

![](/images/blog/GettingStartedPASDevlopment/image5.png){ width=502 height=366 }

**Create a database**

In this section we will create a database. First, change the perspective
to DB Navigator by selecting Window -\> Perspective -\> Open Perspective
-\> DB Navigator. The IDE changes to display the following views:

![](/images/blog/GettingStartedPASDevlopment/image6.png){ width=513 height=329 }

In the Connections view, select the dropdown to the left and click on
"Create OpenEdge Database":

![](/images/blog/GettingStartedPASDevlopment/image7.png){ width=396 height=130 }

On the next window enter a path and file name for the database, and
select the option to start with a copy of the Sports2020 database:

![](/images/blog/GettingStartedPASDevlopment/image8.png){ width=373 height=278 }

**Create a database server**

In this section we will create a database server for the database
created in the previous step. First, open up OpenEdge Explorer, by click
on the icon in the toolbar:

![](/images/blog/GettingStartedPASDevlopment/image9.png){ width=602 height=343 }

Log in, and click on Resources -\> Database to create a new database
server:

![](/images/blog/GettingStartedPASDevlopment/image10.png){ width=535 height=369 }

On the next screen, enter the following details to create the database
server:

![](/images/blog/GettingStartedPASDevlopment/image11.png){ width=394 height=428 }

On the next screen click on the button to start the database.

**Create a PAS OE instance**

The next step is to create an instance of the PAS OE Application server.
First, change perspectives to "Server": Window -\> Perspective -\> Open
Perspective -\> OpenEdge Server. Server views will be added:

![](/images/blog/GettingStartedPASDevlopment/image12.png){ width=502 height=99 }

Click on the hyperlink to create a new server:

![](/images/blog/GettingStartedPASDevlopment/image13.png){ width=411 height=381 }

On the next screen, click on configure to set up the OpenEdge Explorer
Options:

![](/images/blog/GettingStartedPASDevlopment/image14.png){ width=410 height=373 }

Click on Edit to configure OpenEdge Explorer:

![](/images/blog/GettingStartedPASDevlopment/image15.png){ width=437 height=290 }

Enter the correct password and test the connection to make sure it works
as intended:

![](/images/blog/GettingStartedPASDevlopment/image16.png){ width=430 height=349 }

The "Define a new Progress Application Server for OpenEdge" screen will
be updated as follows:

![](/images/blog/GettingStartedPASDevlopment/image17.png){ width=408 height=377 }

Click on finish to add the server to your workspace.

**Create a Server project**

In this section we will create the server-side project. The Application
server will execute code located here and pass the results to the
client. Create the server project by selecting File -\> New -\> OpenEdge
Project:

![](/images/blog/GettingStartedPASDevlopment/image18.png){ width=387 height=375 }

Name the project "ServerBasic" and on the "Server" tab select "APSV" to
create an App Server transport. Accept the default on the next screen.
On the screen after that the server we created above will be selected:

![](/images/blog/GettingStartedPASDevlopment/image19.png){ width=398 height=388 }

Accept the default PROPATH on the following screen and click on "Next".
On the following screen click on the "Configure database connections"
screen to link the database to the project:

![](/images/blog/GettingStartedPASDevlopment/image20.png){ width=488 height=475 }

**Link the database to the Server Project**

Continuing from the previous step, the database connections screen will
display as follows:

![](/images/blog/GettingStartedPASDevlopment/image21.png){ width=476 height=367 }

Click on "New" and enter the configuration details as per the screen
below. Make sure to test the connection:

![](/images/blog/GettingStartedPASDevlopment/image22.png){ width=478 height=455 }

Click on next and accept the defaults to add a SQL connection:

![](/images/blog/GettingStartedPASDevlopment/image23.png){ width=476 height=444 }

On the following screen uncheck the option to auto-start the database,
as it will already have been started. Click on next and apply. Check the
database connection just created to complete this task.

The DB Structure view will now list the newly added database, and the DB
Details view can be used to obtain additional information on the
database, including functionality to preview table data:

![](/images/blog/GettingStartedPASDevlopment/image24.png){ width=567 height=153 }

**Link the database to the Application Server**

In the previous step, we have connected the database to our project. We
also need to configure our Application Server (PAS) to connect to the
database. In the "Servers" view, double-click on the Application Server
to view the following screen:

![](/images/blog/GettingStartedPASDevlopment/image25.png){ width=602 height=380 }

Under the Publishing heading, be sure to select the option not to
publish automatically. Then click on the "Open launch configuration"
tab:

![](/images/blog/GettingStartedPASDevlopment/image26.png){ width=532 height=505 }

Click on the "Startup" tab, and be sure to enter the database connection
parameters in the "Agent startup parameters" field:

```bash
-T "C:\OpenEdge_12_1\WRK\oepas1/temp" -db "C:\OpenEdge_12_1\WRK\sports2020" -H localhost -S 21002
```

**Create a Server program**

Now we need to create a server program that will expose some
functionality to our client. We will create a program that will return
the name for a given item number. Right click on the server project, and
select New -\> ABL Procedure:

![](/images/blog/GettingStartedPASDevlopment/image27.png){ width=459 height=223 }

Enter the name of the file and click on Finish:

![](/images/blog/GettingStartedPASDevlopment/image28.png){ width=602 height=384 }

Enter the following code and save the program:

```progress
/******************
 * getItemName.p  *
 ******************/

define input parameter pIntItemNum as integer no-undo.

define output parameter pChrName as character no-undo.

find first item no-lock

where Item.ItemNum = pIntItemNum

no-error.

if available item

then pChrName = item.ItemName.

else

pChrName = \"ERROR\". 
```

This code defines an input parameter and uses it
to retrieve an item name from the database. Once retrieved it assigns it
to the output parameter that is returned to the client.


**Publish the Server program**

Next, we will publish the server program we created above. To do this,
select the "Servers" view and right-click on the oepas1 instance, select
"Publish" from the context menu:

![](/images/blog/GettingStartedPASDevlopment/image29.png){ width=377 height=435 }

**Create a Client program**

Here we will create a program to test our App Server. Create a new ABL
procedure following the instructions above, and name it ItemUI.p. Update
it with the following code listing:

```progress
/******************
 * getItemName.p  *
 ******************/

define variable chrConnectionParam as character no-undo.

define variable logIsConnected as logical no-undo.

define variable appHandle as handle.

define variable chrItemName as character no-undo label "Item Name:"
format "x(30)".

define variable intItemNum as integer no-undo.

// Set connection details

assign chrConnectionParam = \"-URL http://localhost:8810/apsv\".

// Set App Server connection

create server appHandle.

logIsConnected = appHandle:connect(chrConnectionParam).

// Set Item Number

assign intItemNum = 2.

run getItemName.p on appHandle

(input intItemNum,

output chrItemName ).

display chrItemName.

```

In this code section we do the following: First, we define connection
parameters that we will use to set up a connection to the App Server.
Then we define a variable to pass into our server application, and
another variable to hold the result. Next, we set up our connection
details, and use it to establish a connection with the App Server. Next,
we call the getItemName program on the AppServer. Finally, we used the
obtained result and display it to our end-users:

![](/images/blog/GettingStartedPASDevlopment/image30.png){ width=214 height=142 }
