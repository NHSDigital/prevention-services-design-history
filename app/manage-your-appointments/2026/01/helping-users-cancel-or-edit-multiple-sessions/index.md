---
title: "Helping users cancel or edit multiple sessions"
date: 2026-01-06
tags:
  - pharmacies
  - appointments
---

This post is about some work we did to design a new feature that lets users edit or cancel multiple sessions in one go. 
  
## The problem 
Currently, users can create multiple sessions in one go, but if they want to cancel or edit those sessions they have to go through one by one. 

This means if a site makes a mistake when setting up their schedule, or needs to change it during the campaign, they are faced with a time consuming and repetitive task. 

For example, if a site has set up sessions running from 9.30 - 5pm every weekday from October 1st to December 31st, and needs to change them all, they have to repeat the same process 66 times. 
 
### Fixing this has 3 main benefits 
 
#### Saving time
Once fixed, users should be able to edit or delete multiple sessions in minutes instead of hours. 

#### Increasing flexibility
One of our goals is to provide flexibility so users can shape their appointment schedule to their specific needs. 

Making it quick and easy to edit multiple session is an crucial for this. It means users can tweak and tinker with their schedule in response to how the seasonal vaccination campaign is playing out. 

#### Reducing wasted trips for the public
We've received feedback from the public that sometimes they book an appointment and travel to a site only to be turned away on arrival. 

We think this is explained by a mis-match between the appointments a site has published and the appointments they are actually offering. And this might - in part - be caused by the difficulty users encounter when they try changing multiple sessions.
 
## Iteration 1 
 
### Approach  

Our first attempt at enabling users to edit or delete multiple sessions involved 2 key changes:

1. A new sub navigation and manage availability tab - this gives users an overview of all their sessions. Each row represents a group of sessions with the same start and end times, services and capacity. From here they can select a group to edit and filter the groups by date to select a subset to edit.
2. A group overview screen - this screen gives users more detail about the group of sessions and actions links for making changes.

![Screenshot of a MYA webpage that shows an overview of the different kinds of appointment availability a site has created](iteration-1-manage-availability.png '')

![Screenshot of a MYA webpage that shows the details about a group of sessions including the start time, end time, capacity and appointment length](iteration-1-group-overview.png '')

 
### What we tested 

In our usability testing we asked participants to try completing the following tasks:
 
1. You’ve created your appointments for the autumn campaign but you’ve forgotten to add a lunch break. You need to update MYA so you’ve got a break between 12 – 1pm.
2. You’ve been busier than expected and will run out of flu vaccines next Tuesday, you need to stop people booking appointments and cancel the ones after Tuesday.

During the research we also asked users to talk us through how they expected the manage availability screen to change once they added new availability. This helped us dig into how they thought the service worked.  
 
### What we found 
Users successfully completed the first task but quickly ran into trouble when making more complex changes, like the those involved in task 2. 
 
During the research sessions it became clear that what users thought they were viewing on the manage availability screen was the ‘blob’ of repeating sessions they’d originally created. What they were actually viewing was groups of sessions with the same characteristics, which is similar but actually works quite differently.  
 
As a result when faced with task 2 participants quickly became confused. Rather than using the date filter to select all the sessions from next Tuesday as we’d hoped, participants opened up the group overview screen and looked for a way to change the dates there. Even with assistance, users struggled to see how the date filter would help them. And, in some cases, they thought the filter was a way to edit the start or end dates of the groups showing on the manage availability screen.

## Iteration 2 
 
### Approach 

Our first attempt taught us that users think about MYA as a calendar like tool where they can create a ‘schedule’ of sessions for the public book into. In iteration 2 we took inspiration from that and created a route into editing multiple sessions that mirrored the way managing a meeting series works.

Here's how the approach worked:
- Instead of creating a separate place to manage multiple sessions the feature is accessed via the change link for an individual session
- After that users are asked what change they want to make
- Then we tell users there are other similar sessions and ask them whether they want to change the individual session or all similar sessions
- If a user choose to cancel multiple sessions they then select exactly which sessions from the full list.

![Screenshot of a MYA webpage showing individual sessions as they appear on the week overview](iteration-2-week-view.png '')

![Screenshot of a MYA webpage where users are asked whether they want to change the length or capacity, remove services or cancel the session](iteration-2-change-session.png '')

![Screenshot of a MYA webpage which tells users there are other similar sessions and gives the option to cancel one or multiple sessions](iteration-2-one-or-multiple.png '')


![Screenshot of a MYA webpage with a list of individual sessions that can either be selected in bulk, or individually'](iteration-2-select-sessions.png '')

 
### What we tested 

Our experience in iteration 1 prompted us to scale back our ambitions for round 2. 

Rather than trying to design for editing and cancelling, we decided to focus on nailing down a journey for cancelling multiple sessions first. We set research participants the following task:

Let’s imagine you’ve set up all your sessions in MYA but you realise you’ve made a couple of mistakes. You’ve got the wrong start time and wrong appointment length and you just want to remove what you’ve got and start again. Can you show me how you’d do that?
 
 
### What we found 

#### More intuitive
Taking inspiration from a well established pattern resulted in users appearing much more confident when completing the task. They understood the idea that they were changing all the sessions that matched the one they had originally selected. The long list of matching sessions also made it transparent exactly what they were changing. The list also provided speed for users when selecting all sessions, along with fine grained control for other use cases, like staff being on holiday, or having irregular working patterns. 
 
#### Harder to find
While this iteration worked well once users were in the flow, several participants struggled to find the entry point and needed prompting to try changing an individual session. This is because participants were usually looking for an action that obviously applied to all sessions. For those who did click to change a single session, the absence of anything on the first screen in the flow to indicate they’d be able to select multiple sessions later on, resulted in them backing out and looking elsewhere.

## Iteration 3 
 
### Approach 

This version – aka the Hovis best of both approach - combined elements from iteration 1 and 2:
- We re-introduced a tab in the sub-navigation but called it ‘All availability’ not ‘Manage availability
- Once users select the ‘Remove’ option, they were shown the list of all sessions which we introduced in iteration 2
- As in iterations 1 and 2 users were asked what they wanted to do with the bookings for the sessions they were about to cancel

![Screenshot of a MYA webpage with the title 'Manage availability'](iteration-3-all-availability.png '')

![Screenshot of a MYA webpage with the title 'Manage availability'](iteration-3-select-sessions.png '')

![Screenshot of a MYA webpage with the title 'Manage availability'](iteration-3-keep-bookings.png '')

 
### What we tested 
We used this round to see how participants would respond in scenarios where their goal was to edit, but the service only supported cancelling. We did this to deepen our understanding of thet impact only shipping the cancellation journey might have. 

We set two tasks: 
 
1. Let’s imagine you’ve decided you no longer want to offer appointments after 4pm and you want to change what you’ve set up so people can’t book after this time. Can you show me how you’d do that?
2. Now lets imagine you’re off for Christmas and the locum isn’t trained to vaccinate so you want to remove all your appointments between the 24th of December and the 1st of January. Can you show me how you’d do that? 
 
 
### What we found 
 
#### Editing is significantly more useful than cancelling
This round really emphasised the value of editing over cancelling. Participants translated the task they were set into ‘editing’ and looked for this. Some participants were able to figure out a way to complete the task just using the cancel journey, but it was time consuming. 
 
#### Intuitive and discoverable
Although the mismatch between the task and the feature we were testing meant some users didn’t complete task one, re-introducing the additional tab in the sub-navigation clearly addressed the discoverability problems we had with iteration 2. We also saw the multi-select for sessions perform equally well on second outing.  
  
#### Users were nervous about the 'remove' action
The action on the All availability tab was ‘Remove’, which was accurate but resulted in several participants not selecting this option for fear it would remove the entire group instantly. 
 
#### Keeping appointments but cancelling sessions
This round of research crystallised a problem we’d seen emerging in iteration 2. This was that people struggled to grasp the concept of cancelling a session, but keeping the appointments. To them, the two things were indivisible. 

Exploring this with our participants helped us understand that a more natural framing for them is to either cancel the session (and all the appointments) or stop taking bookings for the session (but keep what’s been booked already). 

MYA users place a high importance on trying to ‘honour’ the appointments that have been booked already, so there are real world benefits to having both options. The challenge is finding a way to do this that’s deliverable and easy to understand for users.
 
## Iteration 4 
 
We paused our design and research here so the developers in the team can investigate how best to implement some of this work, including deciding whether to use grouping logic or the RRULE. The outcome of that investigation will affect how we approach the next iteration.