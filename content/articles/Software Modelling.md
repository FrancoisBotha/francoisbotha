---
title: Software Modelling
description: Software Modelling
date: 2016-07-01
cover: clement-helardot-95YRwf6CNw8-unsplash.jpg
tags:
  - Software Engineering
---

**Software Modelling**

 *November 2016*

Systems Modelling plays an important role, particularly in two phases of the Software Development Life Cycle: The Requirements Analysis phase and the Design phase. Pressman (2010) notes that specification models form the basis of design of the system architecture, interface and system components.

According to Fitzgerald and Larsen (2009), modelling is an accepted and common practice in non-software related engineering fields and is used to test ideas, facilitate communications with customers and to root out errors at an early stage. One important aspect of models emphasized by Fitzgerald and Larsen, is the fact that models can (and should) be validated.

Sommerville (2011), distinguishes between two types of modelling, graphical and formal (mathematical).

A very popular formal method is the Vienna Development Method Specification Language (ISO VDM-SL). Plat and Larsen (1992) note that it originated in the early seventies in an IBM laboratory in Vienna. According to them VDM-SL allows for the creation of unambiguous specifications that can be mathematically proved.

Sommerville (2011), notes several problems with formal methods:

- It is a difficult concept to understand which means that people who understand the problem domain do not typically understand formal specifications and engineers who understand it may not have a good understanding of the problem domain;
- It might be very costly to adopt and estimating the potential benefits to be derived from it could be very difficult;
- Software developers are not typically trained to use it;
- It does not scale to very large systems; and
- It is not well suited to agile approaches.

In spite of the problems listed by Sommerville, the prominence of formal methods may rise in future due to increasing concerns about security. As an example, DARPA recently used formal methods to create “Unhackable” software for a military drone (Atherton, 2016).

Much more popular than formal methods today are graphical models. According to Pressman (2010) the following types of models are used in requirements modeling:

- Scenario-based models, e.g. Use Case diagrams;
- Data models, e.g. E-R diagrams;
- Class models, e.g. Class diagrams and CRC models;
- Flow models, e.g. data flow and control flow models; and
- Behavioural models, e.g. state diagram.

The preceding paragraph points out another problem with modeling – which model to choose between all the available options? This I think ultimately comes down to the expertise and experience of the software engineer. Personally, I like to get the data structures right, therefore I rarely go without specifying data models in a project. When developing systems in an Object-Oriented language it will pay to use Use Case modelling as this can be used as the basis for deriving classes later on.

One scenario where modeling will definitely cause more harm than help is the case where the requirements model is incorrect. According to Young (2002) 85% of software problems arise from incorrect requirements.

Excessive modeling does not seem to be in line with the agile approach to software development. The second tenet of the Agile Manifesto (http://agilemanifesto.org/) reads: “Working Software over comprehensive documentation”. While I do agree with this sentiment I also feel that modeling is a type of planning, and good planning is essential to writing good software within budget.

I guess the secret lies in finding the balance and focussing on exactly those models that actually provides value to the specific project you are working on.

References

Atherton, K.D., (2016) “How Darpa is prepping for the next cyberwar”. Popular Science. Available at: http://www.popsci.com/darpa-is-building-tools-for-next-cyberwar

Fitzgerald, J, & Larsen, P (2009), Modelling Systems. [Electronic Book] : Practical Tools And Techniques In Software Development, n.p.: Cambridge : Cambridge University Press, 2009., University of Liverpool Catalogue, EBSCOhost, viewed 18 November 2016.

Plat, N., & Larsen, P.G., (1992) “An overview of the ISO/VDM-SL standard.” ACM SIGPLAN Notices. 27, 8 (August 1992), 76-82. DOI=http://dx.doi.org.liverpool.idm.oclc.org/10.1145/142137.142153

Pressman R.S., (2010), Software Engineering: A practitioner’s Approach (7th ed.), Singapore, McGraw-Hill.

Sommerville, I. (2011) Software Engineering. 9th edn. Boston: Addison-Wesley

Young R.R. (2002) “Recommended Requirements Gathering Practices”. CrossTalk 15(4), pp 9 – 12.