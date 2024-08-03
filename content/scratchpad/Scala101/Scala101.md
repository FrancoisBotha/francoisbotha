---
title: Scala 101
description: Very basics of Scala
date: 2024-07-06
cover: Scala101/image1.png
tags:
  - Scala
---

**Scala 101**

![](/images/blog/Scala101/image1.png){ width=300 height=168 }

Scala is a programming language created by Martin Odersky in Switzerland
and released in 2003. It caters for both the Object Oriented and
Functional paradigms. It runs in the JVM and is fully compatible with
Java, meaning you can have both Scala and Java source within the same
project file. It is the language Apache Spark is implemented in. In this
article I will document the basics to get started with Scala.

Below is a list of some of resources consulted for this article:

-   Get Programming with Scala (Daniela Sfregola, Manning Books)

-   Apache Spark 2.0 with Scala (Frank Kane, Udemy)

-   Rock the JVM! Scala and Functional Programming for Beginners (\
    Daniel Ciocîrlan & Andrei Taleanu, Udemy)

I will be using Jupyter Notebooks, configured to use a Scala Kernel, to
illustrate the basics of using Scala.

First up, Hello World:

![](/images/blog/Scala101/image2.png){ width=602 height=142 }

The above expressions already illustrates a few concepts of Scala:
Firstly, although **strongly typed**, Scala uses** type inference** to
deduce types. Also, semi-colons (;) are not required at the end of
expressions.

**Immutability**, although incurring some performance penalties, makes
code easier to reason about. In addition, it sidesteps problems such as
deadlock and starvation when writing concurrent code. Scala separates
immutable and mutable structures, and encourages the use of immutable
structures wherever possible. The keyword **val** is used to define
immutable values in Scala:

![](/images/blog/Scala101/image3.png){ width=347 height=115 }

Types:

![](/images/blog/Scala101/image4.png){ width=521 height=169 }

(Notice types are capitalized, e.g. Int, v.s. int in Java)

Scala has a feature called **Lazy Evaluation**, where the interpreter
delays the initialization of lazy values until they are used. This is
illustrated in the following example:

Conditional execution:

![](/images/blog/Scala101/image5.png){ width=602 height=124 }

Scala's version of the Case statement:

![](/images/blog/Scala101/image6.png){ width=500 height=387 }

The use of **For and While loops** are discouraged in Scala. Functional
constructs such as foreach and map should be used instead.

Scala caters for outputting formatted text using **printf**:

![](/images/blog/Scala101/image7.png){ width=602 height=104 }

Variables can be substituted in a string by prefixing the string with an
s, and prefixing variables with the \$ sign:

![](/images/blog/Scala101/image8.png){ width=602 height=80 }

Scala caters for **placeholders** with the characters **???**:

![](/images/blog/Scala101/image9.png){ width=602 height=108 }

Due to the functional nature of Scala, **expressions can be passed as
values**.

**Function** are first class citizens in Scala. They can be passed in as
parameters to functions. Functions can also return other functions. The
following is an example of a function definition:

![](/images/blog/Scala101/image10.png){ width=382 height=118 }

Lambda (anonymous) functions are also supported:

![](/images/blog/Scala101/image11.png){ width=390 height=117 }

**Tuples** are immutable lists in Scala:

![](/images/blog/Scala101/image12.png){ width=448 height=145 }

(Notice, tuples are ONE-BASED indexed)

Tuples can contain different types, but are limited to 22 elements.

Map:

![](/images/blog/Scala101/image13.png){ width=602 height=86 }

If you are not sure the key exists you can use this:

![](/images/blog/Scala101/image14.png){ width=602 height=99 }

Maps can be created by passing in tuples.

**Sequences, **derived from the **collection object**, are data
structures that have a well defined order and can be indexed. The
following operations can be applied to them:

-   Apply,iterator,length,reverse

-   Concatenate, append, prepend

-   Group, sort, zip, search, slice

-   Map, flatmap, filter

**List** are a type of sequence, implemented as a singly-linked list.
Head, tail and isEmpty are fast: O(1), with other operations O(n).

![](/images/blog/Scala101/image15.png){ width=602 height=219 }

![](/images/blog/Scala101/image16.png){ width=602 height=165 }

Lists methods:

-   *++ To concatenate*

-   *.reverse*

-   *.sorted*

-   *.distinct*

-   *.max*

-   *.sum*

-   *.contains*

Array:

![](/images/blog/Scala101/image17.png){ width=501 height=147 }

Notice, Arrays are ZERO-INDEXED.

Arrays can be mutated:

![](/images/blog/Scala101/image18.png){ width=504 height=116 }

Arrays also have access to all the sequence methods above.

Vector:

Used for immutable sequences. Effectively constant time indexed read and
write: O(logn). Fast append and prepend. It offers good performance for
large data sizes.

The following example (taken from Get Programming with Scala),
illustrates the implementation of a **class** in Scala. It also shows
access modifiers (i.e. private):

![](/images/blog/Scala101/image19.png){ width=602 height=619 }
