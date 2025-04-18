---
title: Exploring how checking and approval workflows could work 
description: Looking beyond MVP
date: 2025-01-15
tags:
  - service
  - workflows
  - service design
---

The current version of the Select people for invitation (SPI) service is just beyond Minimum Viable Product (MVP). The very high-level (and rough) service map below shows the extent of the SPI front end currently, in the context of the wider end-to-end service (click the image for a bigger version): 

[![high level service map of SPI](workflows-1.png)](workflows-1.png)

It's important to note that this isn't a complete service map, there are some significant omissions, but its purpose was to explore specific aspects of the service which we wish to consider soon. In particluar the 2 checking and approval steps:

- iteration configurations are checked
- summary report reviewed

Currently, these steps happen "offline" outside of SPI, but we want to explore how we could create an approval workflow within SPI in order to make the process safer, more joined up and more auditable.

## Quick explanation of "Summary report reviewed" 

As shown in the diagram, the configuration to select a group of people for invitation is done in the SPI front end and submitted into the "Invitation Processor" which executes the configuration to find people matching the specified criteria.

Once the iteration has been executed, the invitation processor issues a "summary report" which gives a breakdown of:
- the number of people excluded from the initial base cohorts
- exclusions broken down by by business rules e.g. too old, too young, too recently vaccinated etc.
- how many people will be contacted as a result, broken down by [routing plan](/select-people-for-invitation/routing-ids), ICB and cohort

The summary report is reviewed to check that the invitations to be sent are in line with expectations. If the numbers look right then approval is given and the invitation file is released to NHS Notify for invitations to be sent. 

## Workshop

We held a face-to-face workshop to explore some ideas around how the checking and approval processes could be brought into the SPI front end, and white-boarded the steps involved in different scenarios:

[![Whiteboard showing notes from a workshop](workflows-2.png)](workflows-2.png)

This allowed us to agree 3 principles for the approval workflows in SPI:

### 1. Iteration configurations should be approved before they are submitted to the Invitation Processor
	
This is in part because of the procesing time and cost overhead. We want to minimise processing by ensuring we get the configuration right first time.
	
### 2. Summary reports must be approved before we allow the release of the invitations via NHS Notify

This is to ensure accuracy, have we set up the configuration as intended – is it providing the expected output?
	
### 3. A user should not be able to approve an iteration configuration they created, or be the sole approver of the resulting summary report

This is consistent with current ways of working (outside SPI), where there is a peer review of the configuration and the summary report is checked by a number of people.

These principles align with our product metrics for Q4 2024/25:

| Theme      | Metric for success |
| ----------- | ----------- |
| Safety     | Does this reduce risk, simplify things or make something easier to do or understand?       |
| Accuracy   | Does this reduce the number of errors produced between business rules and configuration files? Does this help enable the right person to be invited at the right time with the correct invitation?        |
| Robustness   | Is SPI readily available and responsive when needed by users?        |
| Auditability   | Does this allow for better auditability to track who made changes, with appropriate safe-guards to prevent duplication and unintended harm?         |
| Reliability   | Consistently performs across multiple vaccination types when required, and enables the user to safely and accurately select the right person at the right time and send them the right invitation.        |

We highlighted (in blue in the whiteboard photo), the features that don't yet exist in SPI which would be required to enable the desired approval workflows. This allowed us to create a number of Epics in the backlog and start to consider how we might break the work down.

More about how we approached the detailed design in part 2...