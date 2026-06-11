---
title: "Making it easier to manage clinics"
author: Joe Julier
date: 2026-06-01
tags:
  - pharmacies
  - appointments
---

In a previous post we documented [some of our early attempts to make it easier to edit multiple sessions](/manage-your-appointments/2026/01/helping-users-cancel-or-edit-multiple-sessions) in Manage Your Appointments (MYA). 

This post picks up the story now the design work is 'done' and the Jira tickets are wending their way across the board on their journey into the live service. 

The problem we're solving remains the same, but the solution has changed significantly. 

This was made possible by the team's decision to implement recurrence rules in MYA. Choosing this approach, which stores the set of repeating clinics users create as a single editable thing, was a big call. But in the usability testing we've run the benefit for users is clear.

## Managing clinics

### Before: no way to change existing availability in bulk

![Screenshot of the Manage Your Appointments (MYA) “Create availability” page. The page shows buttons to create new availability or change availability, and a table listing previously created sessions. Each row includes dates, days of the week, services offered (such as COVID and flu vaccinations), and indicates that the sessions repeat weekly](create-availability.png)

Previously you could set up multiple sessions in one go, but had to edit and delete them one by one. This was really time consuming and a big pain point for our users.

And, although technically users could also see a record of the availability they'd created, the table was a confusing audit log of all create, edit and cancel events. This made it really hard to answer the simple but important question: 'what clinics are open to the public?'.

### After: viewing, changing and cancelling in one place 

![Screenshot of the new MYA “Manage clinics” page showing options to create or cancel clinics and a table of active single clinics and clinic series with details and actions.](manage-clinics.png)

Now users can view, edit and delete the availability they create. 

The old table has also been replaced with an accurate summary of all the single and repeating clinics that are open for bookings.

Although, on the face of it, these are simple changes, making them work for users required some wide-ranging changes to the service.

## Simplified language

![Diagram showing 'Availability' and 'Sessions' combining into a single concept labelled 'Clinics'.](updated-language.png '')

MYA previously used 'availability' and 'sessions' interchangeably to refer to the periods of time that the public could book into.

In research we noticed participants rarely used these words and - when they did - used them in ways that didn't really match how they were used in MYA. 

In response we dedicated some time in research sessions to better understanding how our users talk and think about running vaccination services. It quickly became clear that users almost always think in terms of clinics, not sessions or availability.

We decided to test this change in language alongside everything else and see how it worked for users. We were expecting some of our participants, who were regular MYA users, to comment on the change of language but none did. When prompted this was simply because the change was unremarkable to them and aligned with the way they already thought about things.

## Introducing clinic series

![Diagram showing multiple possible terms for repeating clinics including “Diary”, “Schedule”, “Calendar”, “Block”, “Campaign”, “Repeating”, and “Period” all pointing to a single chosen label, “Clinic series”](clinic-series.png '')

As part of introducing recurrence rules we needed to find a clear way of referring to the repeating set of clinics users create. 

The words and phrases users suggested varied considerably and didn't point towards a single, universally understood name. We think this is because in most calendar systems the distinction between one-off and repeating things is primarily communicated by the way they are arranged on screen, not what they're called.

While we've got ambitions to move towards a calendar style interface, that wasn't deliverable within the time constraints we're working to. But we thought it made sense to borrow from their language so decided to refer to a repeating set of clinics as a 'clinic series'. 

In usability testing this worked well, without being perfect. Users understood it, but also said it didn't match the real world language they use. However, when we assessed the other options available we found clinic series was the clearest option for key parts of the service, such as confirmation pages.

## New navigation

### Before: separate create and view sections

![Screenshot of MYA navigation showing separate top-level sections for “View availability” and “Create availability”, with sub-navigation for Day, Week and Month views.](old-nav.png '')

Previously there were two areas in the top-level navigation: 'Create availability' and 'View availability'. 

'Create availability' was purely for creating clinics and viewing the confusing table of audit events. If you wanted to change those clinics you had to go to 'View availability', navigate to the week, and select the specific clinic that you wanted to change.

### Iteration 1: manage clinics set the wrong expectations

![Screenshot of MYA navigation showing separate top-level sections for “View appointments” and “Manage clinics”, with sub-navigation for Day, Week and Month views.](nav-iteration-1.png '')

In our new approach, where you can edit and delete clinic series, 'Create availability' was no longer accurate. 

We tried replacing is with 'Manage clinics' to capture the wider range of actions now possible. But in our first round of usability testing this resulted in users expecting all clinic management to live in this section. Whereas to change individual clinics users still needed to go to the week view within 'View appointments'.

### Iteration 2: a single clinics section, but 'Clinics list' caused confusion

![Screenshot of MYA navigation showing a single “Clinics” section with sub-navigation options: Day view, Week view, Month view, and “Clinics list”](nav-iteration-2.png '')

In our second iteration we combined the two sections into a single area called Clinics, and what was previously 'Manage clinics' became 'Clinics list' in the sub-navigation. 

Putting all four views of clinics (from a single day up to a summary of everything) in the same sub-navigation made it easier for users to switch between them. In the second round of testing that people had far less trouble changing individual clinics. 

However, the name 'Clinics list' caused some confusion. Users expected to see every single clinic listed separately when in fact the clinic series users create are shown as a single row. 

### First release: 'Clinics list' becomes 'Create and manage clinics'

![Screenshot of MYA navigation showing a single “Clinics” section with sub-navigation options: Day view, Week view, Month view, and “Create and manage clinics”](nav-first-release.png '')

To resolve this confusion we renamed 'Clinics list' to 'Create and manage clinics'. We think this signals to users what you can do there more clearly, but we will be checking this in future research to make sure.

## Overview screens

### Before: an approach built for limited editing options

![Screenshot of the MYA “Change availability” page for a single day. The page shows clinic time, services and booking status, with options to reduce session length or capacity, cancel the session, or remove services.](old-change.png '')

Previously users who went to update an individual clinic in MYA were presented with this screen.

While this approach made sense when users had limited editing options once it becomes possible to edit any property of a clinic series the pattern starts to break.

### Iteration 1: a hub model that resulted in incompleted journeys

![Screenshot showing overview screens for a clinic series and an individual clinic. Each screen summarises details such as dates, days, times, capacity and services, with links to change each section](clinic-overview.png 'The overview screen for a clinic series and individual clinic')

We introduced overview screens for both individual clinics and each clinic series. In our first iteration, this screen acted as a hub that users could make multiple changes from before applying them:

![Diagram showing an overview screen used as a central hub, with links to multiple edit screens. Users can make several changes from the overview before moving through a sequence of screens to review and confirm all changes together](edit-clinics-1.png '')

 In research we found that users thought changes had been saved and applied after each individual edit was made. They did not realise they needed to click 'Save changes' and continue through some additional screens to confirm the changes.

### First release: each change is its own linear journey

![Diagram showing an overview screen leading to separate, linear edit journeys. Each change is made in its own flow, with users completing and confirming one change before returning to the overview to start another](edit-clinics-2.png '')

In the vast majority of cases users only want to make one change at a time, so in our second iteration we treated the overview screen purely as the entry point into several linear edit journeys.


## Handling conflicts

Introducing the ability to edit a whole clinic series also meant figuring out how to handle the interplay between changes to the whole series, and individual clinics within it. 

Rather than forcing users to decide what they want to do whenever there is a conflict, we worked with the team to come up with some default rules which are applied automatically:

* Start and end times - edits to individual clinics are preserved
* Number of vaccinators - edits to individual clinics are preserved
* Services - edits to individual clinics are preserved but if new services are added to the series these are also applied to the individual clinic
* Closures - changes to the series are applied regardless of existing edits to individual clinics

These rules were based on our understanding of how our users work, but we still sense checked them in research sessions. We found they aligned with our users' expectations and needs. 

## Communicating conflicts

### Iteration 1: interrupting people making changes

![Screenshot of the MYA “Edit clinic series” page showing a warning that some clinics will not be updated because their times were edited individually. The page explains the reason, includes a link to view affected clinics, and provides a button to continue.](affected-clinics.png '')

In our first iteration we tried to communicate a conflict between a change to a clinic series and the individual clinics within it via a screen in the change series flow. 

Although participants did manage (with some concerted effort) to understand what was happening when asked to revisit this screen, almost no one grasped it when in task-completion mode. The message was perceived as a confusing distraction. 

### First release: making conflicts visible without getting in the way

In our second iteration we showed individual clinics in the series with edits in the series overview screen:

![Screenshot of a clinic series overview showing closures and individual clinics with changes. The page lists closure dates and highlights a specific clinic with edited times, with options to change each section.](affected-clinics-1.png '')

We also listed any clinics that hadn't been updated due to a conflict on the success screen:

![Screenshot of a confirmation page showing a clinic series has been updated, with a message explaining that 2 clinics were not updated due to previous changes. The page lists the affected clinic dates and provides options to make another change or return to the clinics list](affected-clinics-2.png '')

This approach was much more successful. Participants grasped why some clinics hadn't been updated and were able to confirm their interpretation by viewing the clinics with changes listed in the clinic series overview.


## Future considerations

This work puts the foundations in place to make MYA even more flexible in future. Potential improvements we discussed but didn't explore as part of this work included:
* allowing users to navigate from the individual clinics shown on the day and week views to the series they are part of
* being able to add breaks to clinics when creating them
* having the option to create a single more complex clinic series with opening times or services that vary day to day