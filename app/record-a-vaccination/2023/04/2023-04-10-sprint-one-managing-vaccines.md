---
title: "Sprint one: managing vaccines"
date: 2023-04-10
---
### Designing a new service to manage vaccines
Managing vaccines is a new service area we’re exploring in alpha. Our initial research highlighted users need to add vaccines and batches in their point-of-care (POC) systems, so they are ready to select and record data. 

However, some systems do not allow users to track vaccine usage and stock levels easily.  

### Building to learn
With limited knowledge of this service area, we considered what stock-related tasks users would want to perform, built prototypes, and tested different ideas — learning more and learning faster this way.  

To manage vaccines, we assume or know from other POC systems, staff typically: 

- Order vaccines from one or multiple stock ordering systems 
- Check-in delivered vaccine stock batches into their POC system 
- Choose and record the type of vaccines, batches and doses they give to patients within their POC system 
- Track and monitor the use of stock outside of a POC system 

During the sprint, we aimed to understand how users: 

- Navigate the main tasks to check in and manage vaccines 
- Use language to describe stock management tasks and units of stock 
- Could track stock more effectively using the system 

### Getting the scope of our service right 
We explored how users order and manage stock using different structures, systems, and processes — mindful that our POC system should join up with, or point to what’s already in place (not replicate or replace it). 

We specifically looked at:

- How is stock currently ordered? What systems, processes or people are involved? What can we do to simplify this? 
- When and how frequently is stock delivered? How is stock checked in and entered within POC systems? What can we do to make this easier? 
- How is used stock recorded within a POC system and tracked by staff? How do staff know they have enough left to cover their planned appointments or when to order more? How can we make this more visible? 

### Prototyping without designers  

At the start of alpha, we had not yet onboarded our designers, so we worked as a team to process our ideas and develop some basic wireframes. This gave us a good starting point for our user research sessions. In future, we'll build prototypes in Figma and make design iterations based on what we learn. Our prototypes supported the following scenarios:
 
**Users set up their systems to record the vaccines they administer**.
  
![Manage your settings prototype](n2o41zl3ml3fctfv5mtjfn9t7jra.png)


**Users view their order history and check in a new stock delivery**.  

![Vaccine order history prototype](gmmfe4za4z1wlf1hqk281g0xlg2h.png)


**Users view vaccine stock levels and future delivery dates**.  

![View vaccine stock levels prototype](8mqb0e4dfc97czphhquosc3jtaup.png)


**Users are notified when stock is low**.  

![Low stock alert prototype](jrpwwdnlyl47f5k86q4kb0abn44q.png)


### What we learnt 

Following testing, we found: 

- Setting the minimum value for stock is helpful to users monitoring stock levels and alerts. The max stock level is of far less value to them.  
- Users order vaccines from several sources like a central team, pharmacy, or network of suppliers, so identifying a single ordering system or allowing users to order through their point-of-care system would be challenging. As such, we agreed supporting users to order directly through a point-of-care system was out of scope. 
- Users expect to manage vaccine stock settings when setting up the system. 
- System administrators should be alerted to low stock, as early in the journey as possible, ideally from the home page.  
- The system would need to be able to track stock donations from other organisations with excess stock close to expiring and split orders.  
