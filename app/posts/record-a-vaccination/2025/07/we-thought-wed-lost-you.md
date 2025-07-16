---
title: "Phew, we thought we’d lost you?!"
description: Reactivating users after 90 days of inactivity 
date: 2025-07-16
---


In RAVS we let our organisations control who uses their service and what permissions they have. They do this via a manage users section in RAVS. 

 

## Challenge  


Although we allow lead administrators to deactivate users in RAVS, sometimes they may be missed. 


To prevent such users keeping access to RAVS and potential sensitive information, we are mandated by NHS security to automatically deactivate users after 90 days of inactivity. 


The problem is that inactivity is common in RAVS, given that vaccines are often given seasonally. So between the end of March to the start of October we could reasonably have 6 months of inactivity were clinicians should still be allowed to use RAVS, but will be automatically deactivated. Moreover, this could happen at a large scale. 



## Solution  

To solve the problem we needed a way to allow lead admins to reactivate other users and preferably more than one at a time, whilst creating a minimum viable solution.  


Firstly, we needed users to have the status of active or deactivated. We created two tabs to quickly draw this distinction and numbered how many where in each list.  

We included a ‘last login’ attribute for each active user, spanning from “Today” up to “89 days ago” to inform lead admins who was nearing deactivation. 

The deactivated tab includes a column for the attribute of “Reason deactivated”, which is either by the name of the person who deactivated them, for example “By John Smith” or “90 days since log in” for users who were inactive. Each users also has a link to “Reactivate” if the admin requires. 


When it comes to reactivating in bulk, we’ve created an MVP shortcut. move the tabs we now display “For security, we deactivate users who have not logged in for 90 days.” followed by the link “Reactivate users” and the number of affected users.  


Following the link will take them to a separate page to “Check and reactivate users”. This is specifically for Users deactivated because they have not logged in for 90 days and will greatly reduce the admin burden at the start of each season.  

Should any of the bulk users need to remain deactivated, then the lead admin can select them individually. 

![organisation closed](org-closed.png)

## Next steps  

We did consider the use of sortable tables and the use of checkboxes to select individual or multiple users. But as this has not made its way to the design system yet and wanting to do this in other areas of RAVS at the same time, which would require more time and focus to get right, we decided to go with our MVP solution. As always we will monitor its use and make any changes needed to improve the experience further for users. 

 
