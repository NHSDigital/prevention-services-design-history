---
title: "Designing for change: how we’re managing live updates in our service"
date: 2025-11-17
---

The NHS Digital Health Check online service is currently in its private beta phase. It is at this stage that we are slowly beginning to observe how real users interact with our platform, and how they respond to the information and guidance they receive. This is a critical moment for any digital health product: the transition from static design to dynamic, real-world use. One of the most important challenges we’ve tackled during this phase is how to ‘manage change once live’ - especially when those changes affect users mid-journey.

## The context: evolving risk algorithms 

Our service uses validated algorithms like the General Practice Assessment Questionnaire (GPAQ) and QRisk3 to calculate cardiovascular risk scores and identify key health risk factors. These tools are central to our user experience; they help translate complex clinical data into information that could help users to improve their health.

Shortly after the service went into Private Beta, we received feedback from clinical colleagues about one of these algorithms. It became clear that it would be preferable to include an additional set of questions that were part of QRisk3, but which we were not currently presenting to users. These additions were important for accuracy and compliance, but they posed a design challenge: ‘How do we introduce new mandatory questions to users who are already partway through their health check?’ 

## The challenge: managing change mid-journey 

Unlike our pre-launch design, our live service must account for active users - people who are mid-task, mid-decision, or mid-reflection. Any change we introduce must be: 

- clear and actionable
- not likely to cause stress, frustration or anxiety 
- non-disruptive to progress 
- reusable and repeeatable for potential future changes

We needed a pattern that could alert users to changes without cluttering the task list or causing confusion. Our goal was to guide users to complete new requirements with minimal friction. 

## Our proposal

To meet our MVP scope and support the full QRisk3 requirements, we designed an interrupt page - a temporary screen that appears when users re-enter the service after a change has occurred.

![Figure 1 - the screens a user would see if there have been updates to the journey](journey-update-screens.png "Figure 1 - the screens a user would see if there have been updates to the journey. The App homepage displays an alert that the health check is incomplete. This takes the user the interrupt page described above (second from right). The righmost screen shows the task list with a previously complete section now marked as 'started'")

**Notable features of the interrupt page:**
- **Important summary box:** Clearly outlines what’s new and why it matters. 
- **Checkbox prompt:** Encourages users to read and acknowledge the update before proceeding. 
- **Smart task list integration:** Once users pass through the interrupt page, any newly required sections are marked as incomplete on their task list - guiding them back to where action is needed. 

This pattern allows us to scale future changes (e.g. algorithm updates, new health questions, policy shifts) without overwhelming users or compromising the clarity of their journey.

## User flow overview

Here’s how the flow works: 
1. User re-enters the service after a change has gone live. 
2. They are shown the interrupt page (Screen 3), which: 
    - Summarizes the new requirements. 
    - Includes a checkbox to confirm they’ve read the update. 
3. After acknowledging the update, they return to their task list, where any affected sections are now marked as incomplete. 

Although we have not yet been able to test this particular journey in isolation, our intention is that this approach should ensure users are informed, empowered, and guided.

## Looking ahead 

As we continue to iterate and expand our service, this interrupt pattern will serve as a foundation for managing change in a user-centred way. It’s a small but powerful example of how thoughtful design can support clarity, and continuity in the face of evolving clinical standards.
