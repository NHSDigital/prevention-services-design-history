---
title: "Improving uptake"
description: "Redesigning invites, reminders, and the journey from invite to start."
date: 2025-12-19
---

The NHS Health Check online service is currently in private beta. As users of the service increased, we began to observe how they interacted with the service and where drop-off occurred across the early stages of the journey.

Early data showed that uptake from the initial invite was lower than expected. At the same time, we had limited visibility of user behaviour prior to accepting the terms and conditions, which made it difficult to understand where and why users were dropping out.

This design iteration focused on improving:

- the effectiveness of invites and reminders
- the clarity of what the NHS Health Check involves
- the journey from receiving an invite to starting the service
- the quality of data available to measure engagement and drop-off

## Problem definition

We identified 3 issues:

1. Low uptake from the initial invite

Fewer people than expected were starting the service after receiving an invite. We hypothesised that this was because the service was hard to find because we could not link directly to the service.

2. Limited journey insight

We were only capturing data once users reached the terms and conditions page (approximately three screens into the journey). We could not see:

- whether users were opening the invite link
- where drop-off was occurring prior to service start

3. Friction between invite and service start

Due to technical constraints, we were unable to deep link directly to the service start page as we had initially hoped. Users had to navigate from the NHS App home screen to find the service.

## Research and discovery

### Understanding user needs and motivations

To understand why people were not starting the service, we:

- interviewed 6 users who had received an invite but not started the journey
- ran a survey with 56 panel members
- explored attitudes to invites, reminders, nudges, and motivations for completing a health check

### Findings

The most common reason for not starting was "life getting in the way", rather than lack of interest.

Reminders were seen as essential to prompt action.

A key motivator was "keeping on top of my health".

Users wanted:

- a clear indication of how long the health check would take
- a deadline, which helped create a sense of priority (6 weeks to 3 months felt appropriate)
- reassurance that the check did not need to be completed in one sitting

We also identified opportunities to improve clarity on the early pages of the journey, particularly around expectations and commitment.

## Designing and testing improvements

We worked with the behavioural science team to design several invite and reminder options, informed by the research findings. These explored:

- different framings of the NHS Health Check
- varying degrees of personalisation
- reminder timing and tone

We tested these using mock-ups with 8 users, asking them to compare options and explain their preferences.

### Constraints

Invite and reminder messages needed to remain within two SMS fragments to manage costs. This significantly constrained content and required careful prioritisation of language — often described by the team as "playing word Jenga".

### What we took into research

#### Revised invite message options

![Invite options](invites.png '3 invites, 2 on an phone screen and letter')

#### Two reminder message variants

![Reminder options](reminders.png '3 reminders on phone screens')

#### Updates to the first pages of the service start journey

![Starting flow](starting-flow.png 'Pages a users sees after clicking the invite link')

## Learnings

From user research and interviews with GP staff, we learned that:

A sequence of one invite, followed by a reminder after 5 days, and a final reminder 5 days later felt appropriate and aligned with patterns seen in other services.

Wording matters:

- "Your free NHS Health Check is due" felt too broad and unclear
- "Check your heart health" felt too narrow for some users
- Users responded most positively to language that explained what the check helps identify, which they saw on the service start page

Referencing "Your GP has asked you" felt more personal and trustworthy.

The tone of the final reminder initially felt too threatening and was softened based on feedback.

## Deep linking and journey tracking

Previously, technical constraints with local GP messaging service providers meant we could not deep link from the invite directly to the service start page. This required us to use valuable message space to explain how to navigate via the NHS App home screen.

At the same time as deploying the updated invites and reminders, we:

- implemented deep linking directly to the service start page
- introduced improved journey tracking, allowing us to measure:
  - invite link opens
  - drop-off prior to terms and conditions

This allowed us to test our hypothesis about early journey friction and significantly improved our ability to understand uptake.

## Early insights

The updated invite, reminder sequence, journey improvements, deep linking, and enhanced tracking are now live.

Early indicators suggest:

- increased uptake compared to the previous approach
- improved visibility of user behaviour from invite click through to service start

We are continuing to monitor uptake and engagement as more data becomes available.
