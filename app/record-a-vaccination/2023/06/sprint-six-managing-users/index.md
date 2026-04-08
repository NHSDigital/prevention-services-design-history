---
title: "Sprint six: managing users"
date: 2023-06-19
tags:
  - users
  - permissions
---

## Solving problems for users

During our initial discovery, we discovered several issues system administrators face when managing user accounts and permissions across their organisation in current point-of-care (POC) systems.

For example, system administrators cannot:

- create, activate and deactivate multiple accounts.
- view and manage system user accounts in one place
- set the duration the user can access their account
- add users who are part of the vaccination event (but do not record data)
- easily reactivate old user accounts, particularly for seasonal staff
- set controls around the location of staff

> ### User management best practices
>
> We looked at other services including the GOV.UK COVID-19 Testing Service to understand how they categorise user management tasks like ‘approving’, ‘denying’ or ‘deactivating’ accounts.

## Making the service simple to use

During prototyping, we explored how we could solve some of the problems system administrators face and make it easier and more efficient for them to manage user accounts and permissions.

We specifically looked at how they can:

- batch upload, activate and deactivate user accounts
- search, sort and filter user account lists to carry out their tasks
- view the last login date of a user account to determine if it’s inactive or unused
- assign permissions for clinical staff and non-clinical staff
- verify clinical staff who are registered healthcare professionals
- set dates to activate or deactivate user accounts
- receive system alerts from seasonal staff to reactivate their accounts
- understand they have successfully performed a task or set of tasks
- set a default location for users

## Importing users in batches

System administrators found the ability to import a list of users into the system valuable, but we’re unclear what information would be required.

For example, what information is captured in the CSV template, versus what information is added to the system once users are imported? We will iterate our prototypes to explore what data users must include in the CSV template.

![Add users in batches screen](6bl2sg6sfmun3bl68dymwzzhu1zw.png)

## Filterable and sortable user management list

System administrators favoured the ability to view users in one place and activate or deactivate users in bulk, and expected a default sort on the username. Additionally, they found system feedback gave them confidence they had completed tasks successfully.

In the screen below, the message shows the system administrator has successfully added multiple users.

![Manage users list](z7wbkx1pm29n6h4hsy2ivpa4e2mc.png)

## Activating users from the home screen

Some current point-of-care systems do not allow system administrators to reactivate user accounts and overall, the process of managing account issues like activation and deactivation is viewed as slow and laborious.

So, allowing system administrators to activate, reactivate, and deactivate accounts in bulk was viewed favourably. However, based on user feedback about reactivation (illustrated in the message below), we need to iterate the prototypes to demonstrate why the user has requested reactivation.

![Activate users from the homescreen](u6j6k1fxjebj62cmmbzh45guiaiv.png)

## Setting system permissions and roles

We learnt that it would be helpful if system administrators could add multiple users with the same permissions and that it was useful to give them the option to activate accounts at the point in which they are added or later for onboarding purposes.

We will need to clarify the different permissions or roles, particularly for clinicians who are registered to administer vaccinations to patients.

![Set permissions screen](me5lj4qufscvj0utlre0rvkt0boi.png)
