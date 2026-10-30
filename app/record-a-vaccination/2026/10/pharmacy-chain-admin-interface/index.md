---
title: Creating an admin interface for pharmacy chains
description: How we created a new interface and a new permission level in RAVS for head office teams who work in pharmacy chains.
date: 2026-11-02
tags:
  - onboarding
  - permissions
  - reporting
  - user management
---

In trying to meet the needs of pharmacy chains, we did 2 rounds of [design and user research focusing on bulk onboarding](record-a-vaccination/2026/10/meeting-pharmacy-chain-needs). 

But we then decided to rethink our approach as it became increasingly clear that head office teams also wanted:

- to have a central view of operations after onboarding
- an ongoing ability to manage pharmacies and users
- the functionality to report on vaccination data across their branches


## A new admin interface
We explored creating an interface specifically for pharmacy 'head office' users where they could not only onboard their pharmacies but also manage users and create reports. 
This involved creating a different view of RAVS which we've been calling the 'admin interface', and a new user type or permission level of 'group administrator'.  

In our new designs, a group administrator logging into RAVS for their pharmacy chain has access to 4 sections:

1.	A **Dashboard** showing high-level vaccination data for all the pharmacy branches in their company.

![Screenshot showing ...](dashboard.png)

2.	A **Pharmacies** section listing all their branches using RAVS, and the number of users at each branch with options to add more pharmacies, and to manage users at an individual pharmacy.

![Screenshot showing ...](pharmacies-page.png)

![Screenshot showing ...](add-pharmacies-page.png)

![Screenshot showing ...](manage-pharmacies-page.png)

3.	A **Users** section where they can view and manage all their users, including other group administrators. In this section a user can be added to several pharmacies in 1 go.
   
![Screenshot showing ...](users-page.png)

4.	A **Reports** section, where they can create a report that includes vaccination data from all their branches.

![Screenshot showing ...](create-a-report.png)

## Feedback from user research
Overall, participants from large pharmacy chains were very positive about the new designs. 

-	Being able to run reports across all their branches and manage pharmacies plus users centrally was universally popular and considered a great timesaver. 
-	Adding pharmacies and users (onboarding) was considered intuitive.
-	Participants appreciated having visibility and some control of their pharmacies and users within RAVS – for example the option to add more users or reactivate users.

They suggested several changes that would make the admin interface even more useful.

-	They thought the dashboard could meet all their basic reporting needs instantly if it showed the number and type of vaccinations done by each pharmacy and by timeframe. 
-	They told us that some of the timeframes you can currently select when you create a report are not useful, such as last 7 days, last 14 days and last 31 days. It would be more useful to have last calendar week (previous Monday to Sunday) and last calendar month.
-	As well as being able to reactivate individual users 1 at the time, they'd like a way of reactivating all users across all their branches at the start of a campaign. 
-	A couple of participants observed that there was no way of adding a vaccination programme which is something they'd like to be able to do centrally.

Most participants said they would still want to be able to access RAVS at individual branches, for example to investigate an issue or make a correction to a record. 

## Iterations to the CP admin interface

Following this round of UR, we made some further changes to the designs, including:

-	changes to the timeframes users can select for reports – specifically adding last calendar week and last calendar month and removing the options of last 7 days, last 14 days and last 31 days 
-	adding the functionality for a group admin to access an individual branch directly, as if they were a lead admin at that pharmacy – which would enable them to view and amend vaccination records recorded by that branch 

