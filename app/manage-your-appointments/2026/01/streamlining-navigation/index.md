---
title: Streamlining navigation
date: 2026-01-06
tags:
  - navigation
  - appointments
---
During busy periods, such as flu season, vaccinators using Manage Your Appointments (MYA) have two immediate needs:

1. Who is coming today? (Time, patient details, vaccination type).
2. Do we have enough stock for the bookings coming up this week?

## Prioritising the day view
Previously, vaccinators faced an obstacle course to answer their most urgent question: “Who is my next appointment?”

When they signed in, they were presented with the month view. To see today’s list, they had to:
1.  Locate the current week within the month.
2.  Click through to the Week view.
3.  Find the correct day.
4.  Click through to the Day view.

![The old month view](old-month-view.png 'When trying to find daily apointments users have to navigate the maze of month view, then week view before finally finding the day they need')

This workflow was arduous and inefficient. Here are a couple of quotes from users

> It takes so long to find your booking for the day.

> I find it tricky to get to today's appointments quickly […] It takes more time than I would like.

### Calendar navigation is a solved problem
We hypothesised that users are already familiar with standard digital calendars (such as Outlook or Google Calendar), in which switching between day, week, and month views is a single click.

We introduced a secondary navigation component that allows quicker toggling between day, week, and month. Crucially, we also changed the default routing so users now land immediately on the day view.

In testing, this change was validated instantly. Participants understood the navigation without hesitation and accepted the day view as the natural starting point.

### The language of labels
We experimented with the labels for this new navigation. Because the day view shows specific appointments, while week and month views show capacity counts, we worried users might be confused by the changing data types.

We tested descriptive labels like “Daily appointments,” “Weekly availability,” and “Monthly availability.”

However, the testing revealed that we were overthinking it. The descriptive labels actually created *more* cognitive load. We reverted to standard calendar terminology: “Day view”, “Week view”, and “Month view”. These were universally understood, regardless of the underlying data differences.

![The day view page with new secondary navigation](day-view.png 'Secondary navigation now allows users to switch between day, week, and month quickly, mirroring standard calendar systems')

## Fixing the “Create Availability” confusion
We also tackled a long-standing debt in our information architecture: the misleading “Create availability” screen.

![The old create availabilty page](create-availability.png 'The old create availability screen displayed a history of creation events rather than a list of live availability')

Users generally expect a list of items to represent the *current state* (what is currently live). However, our list displayed a *history of events* (when availability was created). If a user later edited a slot, this list would not update, so the interface often contradicted reality. This makes it hard for users to understand precisely which appointment slots were “live” and available to book.

### Unifying the actions
To fix this, we are removing the distinction between “viewing” and “doing” in the top-level navigation:

1. We merged “View availability” and “Create availability” into a single section called “Availability.”
2. We moved the primary action—“Add availability”—into the secondary navigation bar.

This simplifies the mental model: users go to “Availability” to see what is happening, and if they need more slots, the button is right there in context.

![The day view page with updated primary navigation and additional add availability button](day-view-new-primary-nav.png 'We unified the top-level navigation and introduced a “Add availability” button, allowing us to retire the confusing history page')