---
title: "Exploring enhanced test results: an early sketch"
description: TODO
date: 2026-07-21
author:
- Frankie Roberto
opengraphImage:
  src: /managing-my-health/2026/08/exploring-enhanced-test-results/todo.png
  alt: TODO
---

As part of our discovery into [helping users do more with test results](/managing-my-health/2026/07/helping-users-do-more-with-results/), we did some initial sketching to explore how this might work.

These sketches are informed by our understanding of the user needs, and existing research and design work by other teams. However they are intended to explore ideas for the overall journey rather than the fine details.

The sketches are built on top of the [native app redesign work](https://design-history.nhsapp.service.nhs.uk/native/) from the NHS App team.

## Starting with a notification

Currently, users of the NHS App can only be notified about new messages. 

In our sketch, a notification is sent about a new test result instead:

The content of this notification would need to be considered carefully. Should it mention the specific test result? Or should it be more vague, not mentioning test results but instead just suggesting that there is some new information to view?

For negative or normal test results, the notification could reveal this straight away, to reassure patients and avoid the anxiety of waiting for the actual result to load.  This would need to be balanced against concerns of privacy and clinical risk.

## Unread statuses for test results

In the messages section of the app, individual messages show up as unread until they are first opened.

Could this behaviour also be adopted for test results? This may have the advantage of drawing attention to new test results for any users who do not have notifications turned on, or who ignore the notification. If a user routinely receives a lot of tests though, this may increase the noise of the app, and the user may not feel they need to read them all, for instance if they are explained in-person by a clinician.

In these screens, a red dot is used to indicate unread test results:

	

## Viewing results by date or by type


Currently in the app, GP-ordered test results are grouped into screens by year. This means that to find previous results, you have to remember which year it was in. 

In our sketch, by default the results are shown as a single list ordered by date. To make it easier to find specific tests, tests can also be grouped by type and then shown in alphabetical order.

The ability to filter or search could be an option too.


## Adding explanations to results


On individual results, content could be added to explain what a the test is. Where relevant, links could also be added to NHS.UK or other sites such as Lab Tests Online.  This builds on the work by the XDX team.

As in the existing app, reference ranges can also be shown.

	

## Adding next steps


Users also need to understand what their next steps are after a test result, if any.

For this, we looked at HPV self-test results, where the result might be negative, unclear or positive.

Where the result is negative, there are no immediate next steps, but some content explains that they will be invited to cervical screening in around 5 years time.

Where the result is unclear, a new self test will be sent to them. The patient is given 2 offline next steps: taking the test and returning it. These are displayed in a reminder or checklist style. As well as being attached to the test result, these might also be surfaced elsewhere in the App in an app-wide view.  The tasks can be marked as done, to help the keep track of which things they still need to do.

Where the result is positive, the next step is to book an appointment for a cervical screening. This might be initiated by the patient, or their GP may phone them to arrange it.

	
For some next steps, it might be possible to let users take the next step directly in the app. For example, booking an appointment for a cervical screening.

If there are multiple ways to book this, the app could guide the user through the various options, and either offer them a way to book the appointment through the app, or link out to a external online booking service, or give them a phone number to call.


## What next for these sketches?


These are just exploratory sketches.

In our alpha we will work with other teams to understand what is feasible and to iterate the detailed design and test it with users.
