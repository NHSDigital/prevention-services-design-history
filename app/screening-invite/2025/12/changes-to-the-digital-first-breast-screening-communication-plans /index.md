---
title: Changes to the digital-first breast screening communications plan
description: This post outlines the changes to our plans for digital-first communications for breast screening
date: 2025-12-22
author: Mari Wightman
tags:
  - private beta
  - screening
---

The focus for [Team Invite](https://design-history.prevention-services.nhs.uk/screening-invite/) until very recently was on rolling out digital communications in the routine breast screening pathway, using NHS Notify. We were in the Private Beta phase, working with a handful of breast screening offices (BSO) on how we could deliver invitations for the initial screening appointment. We were doing this by ingesting appointment data from National Breast Screening System (NBSS), via a MESH inbox, into the Manage Breast Screening component. We were then applying time-based logic to send out invitations 4 weeks before the appointment (or immediately if the appointment was booked after this point). However because we weren’t fully integrating with NBSS, we learnt during Private Beta that the level of service we could provide BSOs at this stage was limited and we risked introducing something that didn’t fully meet their needs and would be difficult to scale beyond a handful of BSOs.   

Therefore, rather than trying to force it alongside the legacy system, the decision has been made to pause the work on delivering digital comms in breast screening until it can be done in the right way, alongside the new end-to-end digital service replacing NBSS. Although it was a difficult decision to make because of the hard work that has gone into it so far, it is the right one given the renewed focus on replacing legacy breast screening systems, rather than further deepening our reliance on them.  

This post covers what we would have done next after delivering invitations in Private Beta. We hope it’ll help future teams looking at participant engagement in breast screening understand some of the challenges and complexities. 

## Comms types 

There were some obvious next steps that we would have looked to tackle had we continued with the roll-out. Launching with only invitations for the initial screening appointment meant that there were a remaining messages relating to the appointment phase of the participant journey that were not being communicated in a consistent way. Therefore we quickly wanted to investigate how we could support with communicating with participants in the following scenarios.: 

### Reminders 

Text reminders are already prevalent in the service, with the majority of BSOs sending a couple of reminders ahead of the appointment, but at a variety of time intervals. Had we continued, we would have done a short piece of research to understand the most effective timing for reminders, and ratified our assumptions that sending only digital reminders was appropriate. 

### Non-attenders of first appointment 

Participants who don’t attend their first appointment are sent a follow-up appointment invitation. The majority of BSOs send timed appointments as instructed in the service specification. While we were looking at delivering comms to support the current service on NBSS, our initial plan had been to take a similar approach to what’s done today and send a second timed appointment digitally. Now that comms will be delivered alongside the new service, it would be worth looking into what the reasons are for people not attending the first appointment, and whether there is a more effective way of boosting uptake with non-attenders. 

### Rescheduled appointments 

A challenge we had while integrating with NBSS was that we couldn’t easily or accurately identify when an appointment that we were receiving was newly booked or rescheduled, and if the latter, whether it was driven by the participant or the BSO. From research in Private Beta we found out that these distinctions are important: firstly in terms of it being clear which was the relevant appointment time, given the participant may have received multiple invitations. Secondly, the context within the message of who had rescheduled the appointment and why was important, especially if it was BSO-led due to issues such as staff shortages. For teams looking at these scenarios in the new service, it would be worth exploring how this can be better supported, so the messaging is clear, and participants know exactly which timing is relevant after rescheduling. 

### Results 

A significant part of the participant journey that we hadn’t delved into in depth was how results should be communicated. Other screening programmes have led the way in understanding the most appropriate channels for communicating both normal and abnormal results. However this would need to be looked at specifically in the context of breast screening, given the sensitivity of the messages and different service context and demographic group. Equally, learning from how we approached Private Beta, time should be spent on understanding the current process of how BSOs process and send out the results, so that it can inform the solution in the new service.  For example, how much can or should the sending of results be automated? Do BSOs want a level of control over when results are sent so it can be coordinated with other activities they carry out? 

## Beyond specific comms types 

Working with BSOs highlighted some areas that we were not specifically looking at for Private Beta that we would need to consider for wider roll-out, that spanned the participant experience rather than being specific to a comms type. 

### Supporting underserved communities 

Specifically, if we should be providing comms in alternative languages and formats. We found that there isn’t currently a consistent approach to how these groups are supported nationally in breast screening, and while integrating with NBSS, we would struggle to get the information about participant’s needs to drive engagement more tailored to their needs. Research was done to understand the landscape and potential options, but no conclusion was reached on which approach should be taken. Going forwards, this should be thought of at a pathway level, rather than specifically just on how it’s managed through comms, as arguably the approach should be consistent across all participant touchpoints. It’s also worth considering which data informing participants’ needs should be used given there are currently inconsistencies between locally held information (in NBSS) and centralised data (in PDS). 

### Participant actions driven from comms 

Much of the excitement we were getting from BSOs when talking about digital comms wasn’t necessarily about the comms themselves, but the participant actions that could be driven from them that could help BSOs. Some ideas we wanted to explore were: 

* participants being able to confirm if they were attending an appointment or not
* collecting personal information about a participant ahead of the appointment
* whether they had potential for improving clinic management and appointment outcomes.  

### Working with BSOs  

A significant area of focus beyond Private Beta would have been the change management aspects of how we onboard a large number of BSOs, all with slightly different operational processes, internal governance and supplier arrangements. In Private Beta we were hoping to work with 4-5 BSOs that varied in these ways, to understand what support they needed, so that we could develop an onboarding process that would require as little direct input from the Digital Screening team as possible, given the ambitious product roadmap we wanted to focus on.  

## Further information 

A summary of the Private Beta user research activities [can be found in this post](https://design-history.prevention-services.nhs.uk/screening-invite/2025/12/invite-breast-screening-private-beta-user-research/). We hope that these can feed into future work on the participant experience in breast screening pathway and help the clinical programme meet its goals.