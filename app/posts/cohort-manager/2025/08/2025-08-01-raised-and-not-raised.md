---
title: Breast screening - "raised" and "not raised"
description: A look at the labelling feature in our user interface
date: 2025-08-01
tags:
  - prototype
  - alpha
  - cohort manager breast screening
---

This post will look at Cohort Manager's labelling feature, and how it addresses challenges with current processes for tracking the status of data exceptions.

![A simple table in the user interface with a row for each data exception. The final column of the table includes the status label for each exception. In the example, each exception is labelled as "not raised". It’s a slim, rectangular label with a grey background.](status-labels-table-view.png "In the prototype, data exceptions appear in a simple table, with a row for each one. The final column of the table is for the exception status, and this includes a label of either 'raised' or 'not raised'.")

## Background 

A key function of Cohort Manager is to improve data quality within screening.  

When a person’s record enters the screening pathway, Cohort Manager will check for any issues by applying a series of validation rules to it. If any issues are identified, such as missing or incorrectly formatted information, the system will flag them as data exceptions. 

Some exceptions are automatically transformed or routed to the appropriate team for handling. Others require manual intervention. This is where Cohort Manager's user interface (UI) is needed: the UI displays any data exceptions that need to be picked up manually, so they can be "raised" with appropriate teams for resolution.

## Early research  

Our labelling feature was initially based on our research with data improvement users from the Participant Index (PI) Bureau team. This is the team that currently manages data quality for routine breast screening cohorts. We know that their process for tracking exceptions involves a mixture of: 

- adding notes in the participant index (PI) system 
- checking for updates to their cases in ServiceNow 
- using a spreadsheet to manually track outstanding work they’ve raised with the National Back Office (NBO) team 

The labels were originally designed to remove this manual, multi-system process and provide a safe and efficient way of updating the status of an exception. 

## Continued research 

Since adding the feature, the team originally planned to access our system changed from the PI team mentioned above, to the National Service Desk (NSD) team.  

The NSD team doesn’t currently raise tickets in the same way as the PI team, but we know from research that their process for tracking would involve manually cross-checking between Cohort Manager and ServiceNow (the system used to raise an exception with another team) to avoid duplicating work. 

From a teamworking perspective, a limitation of this is that users can only see tickets they've raised themselves in ServiceNow, unless they are added as a 'watcher' on another user's ticket. So, if someone forgets to add other team members as a watcher, their colleagues won't be able to see those tickets.  

Along with the process creating more work for the user, it could also rely on them adding exception IDs to ticket titles so they can quickly identify them. 

## Why "raised" and "not raised"? 

![The 2 exception status labels used in cohort manager’s user interface: "not raised" has a grey background and "raised" has a blue background and includes the date it was raised beneath.](status-labels-raised-and-not-raised.png) 

We chose these terms because they align with the natural language of the user's workflow and reflect their mental model: they're "raising" exceptions with the appropriate teams for resolution. The intention is that the language makes it easy for users to understand the action required of them. 

While some users were familiar with terms like "open" or "in progress" from other systems, "raised" and "not raised" tested positively across all groups, with users finding them clear and intuitive. 

## Considering a third status option 

Some users suggested adding a third status label for cases where an exception could not be immediately raised and was being worked on. After further investigation, we found that all exceptions can be raised when following the simple workflow and that a third option was not necessary at this stage. 

We will continue to monitor feedback and can add an additional status option in a future release if needed. 

## Separate tables for "raised" and "not raised" 

To make the workflow clearer for the user, we've created separate tables for "raised" and "not raised" exceptions. When a user updates the status of an exception, it is moved from the not raised table to the raised table, or the other way if needed.  

![Cohort manager's landing page has two cards that allow the user to navigate to either "not raised" or "raised" exceptions.](status-labels-home-page.png) 

From the home screen, the user can navigate to either:  

- "not raised" exceptions, where they will only see exceptions that need to be raised with teams for resolution  
- "raised" exceptions, where they can access and amend exceptions that have previously been raised (until they are removed from the interface following any new activity on that patient record)  

Earlier versions of the interface included a "total" screen, which included both raised and not raised exceptions together. However, from research with the National Service Desk team (our current user group), we learned that there weren’t any scenarios where they would need to see raised and not raised exceptions listed together. The separation helps the user to focus on the specific task at hand, whether that's picking up new exceptions or checking those already in progress. 

## Summary  

The labels help remove the need for users to work across multiple systems or use manual processes to track the status of exceptions. They also support multiple team members to work through the list of outstanding exceptions together.  

As with all functions in the user interface, we had to carefully consider the user need of the labelling feature against the technical effort required to deliver it. Adding status labels means building functionality into Cohort Manager's API (application programming interface) to write statuses to the database, which has an implication on technical timelines.  

The feature was prioritised because it significantly improves user experience and prevents the duplication of work across team members, an essential requirement when multiple staff access the same system. 

## Further information 

If you'd like to learn more about Cohort Manager, [our earlier post](/cohort-manager/2025/06/cohort-manager-our-first-prototype/) introduced the user interface and explored its role in improving the quality of screening data. 