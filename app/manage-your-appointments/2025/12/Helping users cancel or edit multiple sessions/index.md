This post is about some (relatively) fast and furious work we did to design a new feature for MYA so that users can edit or cancel multiple sessions in one go. 
  
### The problem 
Currently, users can create multiple sessions in one go, but if they want to cancel or edit those sessions they have to go through one by one. This means that if a site makes a mistake when setting up their schedule, or needs to make a change to it during the campaign, they are faced with a time consuming and repetitive task. For example, if a site has set up sessions running 9.30 - 5pm every weekday from October 1st to December 31st, and needs to change them all, they currently have to repeat the same process 66 times. 
 
### What we wanted to achieve 
 
The goal of this work was to make just as easy to edit or delete multiple sessions as it is to create them. 
 
This should have three main benefits: 
 
1. Saving time – users should be able to edit or delete multiple sessions in minutes instead of hours 
2. Increasing flexibility – one MYA’s goals is to be flexible so users can shape their appointment availability to their specific needs. Making it quick and easy to edit multiple session is an important part of this because it enables users to tweak and tinker with their schedule in response to how the seasonal vaccination campaign is playing out 
3. Fewer wasted trips for the public – some of the feedback we’ve seen this season suggests that sometimes there is mismatch between the availability a site has published and the appointments they are actually offering. That means that some people book an appointment only to be turned away on arrival. We think that the difficulty MYA users encounter trying to change multiple sessions is contributing to this. 
 
### Design constraints 
Copy from Jon’s post 
 
 
## Iteration 1 
 
### Approach  
 
Our first attempt introduced 3 key changes to MYA: 
 
Sub navigation and manage availability tab
 
![Screenshot of a MYA webpage that shows a Manage availability tab with ](iteration-1-manage-availability.png)
 
Manage availability gives users an overview of all their availability. Each row is a group a sessions with the same start and end times, services and capacity. The date filter was intended to allow users to select a subset of sessions to edit.  
 
Group overview screen 

![Screenshot of a MYA webpage that shows the details about a group of sessions including the start time, end time, capacity and appointment length](iteration-1-group-overview.png)

This screen gives users more detail about the group of sessions and actions links for making changes. 
 
### What we tested 
 
We set participants the following tasks:  
 Correcting a mistake – forgotten lunch break You’ve created your appointments for the autumn campaign but you’ve forgotten to add a lunch break. You need to update MYA so you’ve got a break between 12 – 1pm. 
 
Making a change – run out of flu vaccine stock You’ve been busier than expected and will run out of flu vaccines next Tuesday, you need to stop people booking appointments and cancel the ones after Tuesday 
 
During the session we also asked user to talk us through how they expected the Manage availability screen to change once they added new availability. This helped us dig into how they thought the service worked.  
 
### What we found 
 
Users successfully completed the first task but quickly ran into trouble when making more complex changes. 
 
During the research sessions it became clear that what users thought they were viewing on the Manage availability screen was the ‘blob’ of repeating sessions they’d originally created. What they were actually viewing was groups of sessions with the same characteristics, which sounds similar but actually works quite differently.  
 
Participants were generally able to complete task 1 relatively easily, but when faced with task 2 they quickly became confused. Rather than using the date filter to select all the sessions from next Tuesday, participants opened up the group overview screen and looked for a way of changing the dates there. Even when prompted, users struggled to see how the date filter would help them. And, in some cases, they thought the filter was a way to edit the start or end dates of the groups showing on the Manage availability screen. 
 
## Iteration 2 
 
### Approach 
 
Our first attempt taught us that users think about Manage Your Appointments as a calendar like tool where they can create a ‘schedule’ of sessions for the public book into. In iteration 2 we took inspiration from that and created a route into editing multiple sessions that mirrored the way managing a meeting series works.  
 
Here’s how it worked  
 
The current route into editing a single session: 
 
![Screenshot of a MYA webpage with the title 'Manage availability'](iteration-2-week-view.png)

![Screenshot of a MYA webpage with the title 'Manage availability'](iteration-2-change-session.png)

A new follow up question, borrowing from the way calendars work, where users have the option to change the individual meeting or the series 
 
![Screenshot of a MYA webpage with the title 'Manage availability'](iteration-2-one-or-multiple.png)
 
Once users decide they want to change the multiple sessions they then select exactly which sessions  
 
![Screenshot of a MYA webpage with the title 'Manage availability'](iteration-2-select-sessions.png)

 
### What we tested 
 
Our experience in iteration 1 prompted us to scale back our ambitions. Rather than trying to design for both editing and cancelling, we decided to focus on to nailing down a journey for cancelling multiple sessions first. We set research participants the following task: 
 Let’s imagine you’ve set up all your sessions in MYA but you realise you’ve made a couple of mistakes. You’ve got the wrong start time and wrong appointment length and you just want to remove what you’ve got and start again. Can you show me how you’d remove do that? 
 
 
### What we found 
 
Taking inspiration from a well established pattern resulted in users appearing much more confident when completing the task. They understood the idea that they were changing all the sessions that matched the one they had originally selected. The long list of matching sessions also made it transparent exactly what they were changing. It also offers speed when selecting all sessions, along with fine grained control for other use cases, like staff being on holiday, or having irregular working patterns. 
 
While this iteration worked well once users were in the flow, several participants struggled to find the entry point and needed prompting to try changing an individual session. This is because participants were usually looking for an action that obviously applied to all sessions. For those who did click to change a single session, the absence of anything on the first screen in the flow to indicate they’d be able to select multiple sessions later on, resulted in them backing out and looking elsewhere.   
##Iteration 3 
 
### Approach 
 
This version – aka the Hovis best of both approach - combined elements from iteration 1 and 2 
 
All availability 
 
![Screenshot of a MYA webpage with the title 'Manage availability'](iteration-3-all-availability.png)
 
We re-introduced a tab in the sub-navigation but called it ‘All availability’ not ‘Manage availability’ and simplified the table.  
 
Once users selected the ‘Remove’ option, the rest of the journey followed the approach taken in iteration 2 
 
![Screenshot of a MYA webpage with the title 'Manage availability'](iteration-3-select-sessions.png)

![Screenshot of a MYA webpage with the title 'Manage availability'](iteration-3-keep-bookings.png)

 
### What we tested 
We used this round to understand how participants would respond in scenarios where their goal was to edit, but the service only supported cancelling. We did this to deepen our understanding of what impact only shipping the cancellation journey might have. We set two tasks: 
 
End future sessions earlier 
Let’s imagine you’ve decided you no longer want to offer appointments after 4pm and you want to change what you’ve set up so people can’t book after this time. Can you show me how you’d do that? 
 
Away for Christmas 
Now lets imagine you’re off for Christmas and the locum isn’t trained to vaccinate so you want to remove all your appointments between the 24th of December and the 1st of January. Can you show me how you’d do that? 
 
 
### What we found 
 
Editing > cancelling 
This round really emphasised the value of editing over cancelling. Participants translated the task they were set into ‘editing’ and looked for this. Some participants were able to figure out a way to complete the task just using the cancel journey, but it was time consuming. 
 
Intuitive and discoverable 
Although the mismatch between the task and the feature we were testing meant some users didn’t complete task one, re-introducing the additional tab in the sub-navigation clearly addressed the discoverability problems in iteration 2. We also saw the multi-select for sessions perform equally well on second outing.  
 
That said, we did find a couple of issues 
 
Reluctance to remove 
The action on the All availability tab was ‘Remove’, which was accurate but results in several participants not selecting this option for fear it would remove the entire group instantly. 
 
Keeping appointments but cancelling sessions  
This round of research crystallised a problem we’d seen emerging in iteration 2. That people struggled to grasp the concept of cancelling a session, but keeping the appointments. To them, the two things were indivisible. Exploring this with our participants helped us understand that a more natural framing for them is cancel the session (and all the appointments) or stop taking bookings for the session, but keep what’s been booked already. MYA users place a high importance on trying to ‘honour’ the appointments that have been already, so there are real world benefits to having both options. The challenge is finding a way to do this that’s deliverable and easily understandable.
 
Iteration 4 
 
We paused our fast and furious design and research here so the developers can investigate how best to implement some of this work, including deciding whether to use groupings logic or the RRULE. The outcome of that will affect how we approach the next round of design and testing. 
 
 
 
 
