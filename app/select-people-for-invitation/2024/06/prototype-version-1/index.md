---
title: Prototype version 1
description: A summary of feedback on our initial design
date: 2024-06-24
screenshots:
  items:
    - text: Campaign dates
      src: 01-confirmation-1.png
      caption: |
        1 Users enter some basic parameters for the invitation campaign
    - text: Confirm campaign details (summary screen)
      src: 02-confirmation-2.png
      caption: |
        2 Periodically throughout the data entry process we show a summary screen for users to check they've entered details correctly. The feedback we gathered about this was very positive with users commenting it is "Good to have a summary to make sure you've done everything" 
    - text: Choose cohorts (Task list)
      src: 03-task-list-1.png
      caption: |
        We have based the invitation campaign configuration process around a modified "task list" type component. This allows us to break down the overall task into smaller sub tasks. This seemed to fit with the users mental model and the concept worked well. 
    - text: Add filter and suppression rules (Task list)
      src: 04-task-list-2.png
    - text: Library of pre-configured exclusion rules
      src: 05-library.png
      caption: |
        The idea of having a library of exclusion rules that users could pick from was very well recieved. This is similar to how users work now, in that they have documented some common rules on Confluence which they can copy and paste. They saw opportunities for this new service to improve on that process by allowing common rules to be specified per campaign type (e.g. Covid, MMR, etc.) There was less confidence about the concept of a "commonly used" section. User weren't certain how this would be populated, whether it was different per user, per campaign type, or some other combination. It wasn't clear that this idea would make it easier to find the right selections over a sensibly ordered and well structured list.
    - text: Long lists of options
      src: 06-lists.png
      caption: |
        Throughout the process of configuring an invitation campaign it is necessary to make selections from lists, sometimes with many options. A number of concepts were present in the prototype for grouping options: recently added, commonly used and grouping by type. The research indicated that the idea of breaking up long lists into sections is better than just having very long lists, but there was less confidence in the ideas of recently added and commonly used, with users unsure how these sections would be populated and how useful they would be in practice. Grouping by type (e.g. age filters, location filters) was better understood by users but we have work to do to make sure we have the right groups for the different types of data. "Recently added - Don't really know what that means", "grouping by immunosuppressed, at risk and age based would be useful"
    - text: Terminology
      src: 07-terminology.png
      caption: |
        Some of the terminology used in the prototype was inherited from technical documents. Users didn't always have a strong understanding of what certain terms meant, "iteration" being a good example: "not sure it's understood by a lot of people", "Not sure about the word iteration - not sure people will understand what we're talking about", "not clear at all".
tags:
  - service
  - prototype
  - user research
---

## What did we prototype?

In our first prototype we didn't design the complete user journey, but significant parts of:

- how the parameters required for the initial set up of an invitation campaign could be gathered
- how base cohorts could be selected for the campaign
- how filter and suppresion rules could be added to prevent certain people from being invited

## What did we learn?

This allowed us to test and learn about some important concepts:

- Do users find summary / checking screens useful? **yes**
- In general did the way we'd structured the user journey around the idea of a "task list" make sense to users? **yes**
- Is the concept of a library of pre-configured rules useful? **yes**
- Is the way that we present long lists of options usable? **not always**
- Is the terminolgy easy to understand? **not always**
