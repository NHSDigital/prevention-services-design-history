---
title: Breast screening pilot design iterations
description: Content and interaction design work for the 2024 breast screening invitations Pilot.
date: 2025-08-13
---
Team Invite is working on inviting people to breast screening appointments using a digital-first communication strategy.  In our first post, we gave a high-level overview of the pilot work [we gave a high-level overview of the pilot work](https://design-history.prevention-services.nhs.uk/screening-invite/2025/06/invite-pilot-overview/). In this one we’d like to explain how we took content and interaction design decisions to address user needs. 


## Designing for new touchpoints

Currently, people are invited to routine breast screening based on their eligibility every 36 months. They are sent a letter by post, usually a couple of weeks before the scheduled appointment. They can contact the breast screening office (BSO) to reschedule if the initial appointment time does not suit them, or cancel if they don’t want to be screened in this round. They should be reminded of the visit by a text message in the lead-up to the appointment.

In our work, we’re expanding the channels we use to contact invitees. We’re introducing invitations through the NHS App message or a text message with the help of NHS Notify cascade. If we cannot use either of them, a letter will be sent.

![A flow diagram showing the message delivery sequence for contacting users. First, an NHS App message is sent. If the message is not read within 24 hours, an SMS message is sent. If the SMS is not delivered within 72 hours, a letter is then sent by post.](fallback-illustration.png "Breast screening pilot NHS Notify cascade")

## Starting point

We began by reviewing existing materials, including invitation letters sent by BSOs, leaflets, and content on NHS.UK and GOV.UK websites. We wanted to understand how live services communicate with participants.  

Other teams had worked in a similar problem space in the past, so we also had access to their user needs logs and previous research findings, which helped us get a head start.  

After mapping user needs for the invitation experience, we made assumptions about the content people would need most. As the breast screening invitation letters had recently been reviewed, we aligned closely with them to ensure consistency.  

However, we needed to adjust the messages so that they fitted well with new digital touchpoints, considered usability and accessibility best practice. Our main objective was to ensure people could access essential information regardless of the channel they’d use. 

### NHS App and SMS invites version 1:

![Left – NHS App message: Message from NHS screening service sent 5 September 2024 at 4:00pm. Addressed to 'Hi Jane'. States: 'We are inviting you for your NHS breast screening appointment. Regular breast screening saves lives. It can find breast cancer before you can see or feel any changes to your breasts and treat it earlier.' Appointment details: Friday 20 September 2024 at 2:30pm, Epping Breast Screening Unit, St Margaret’s Hospital, The Plain, Epping, Essex, CM16 6TN. Advises calling 020 3299 9000 if unable to attend, to reschedule and free the slot for someone else. Includes link: 'Find out more about what happens during NHS breast screening appointments.’ Right – SMS message: Sent from NHS Screening Service on 20 February at 11:00am. Addressed to 'Hi Jane'. States: 'We are inviting you for your NHS breast screening appointment.' Appointment details: Tuesday 16 April 2024 at 2:30pm, Denmark Hill, London, Kings College Hospital. Advises calling 020 3299 9000 to reschedule or cancel. Includes link: 'You can choose to take part in NHS breast screening. Read to help you decide.'](app-and-sms-v1.png "NHS App and SMS invites version 1")

**First versions of the messages incorporated:**

* reusable components from the NHS design system 
* trialled and tested interaction design patterns used across NHS App 
* content best practice as outlined in the NHS content style guidelines.

## Research and iterations

The first version of the messages was taken to user research. We tested with 5 people who were recruited from our ‘breast screening panel’, which is a group of people who volunteered to take part in research using a link they found on the GOV.UK breast screening guidance pages. 

Thanks to usability testing we were able to better understand our users and to make decisions like removing and restructuring content. 

### Content changes from usability testing: 

* **Added ‘Your appointment’ header**: Helps users skim and enables screen reader navigation. 
* **Moved appointment duration**: Placed directly under appointment details to make the appointment duration clearer upfront. 
* **Improved rescheduling visibility**: A dedicated rescheduling header was added to ensure this option is more noticeable. 
* **Added ‘Before your appointment’ section**: Included key reasons participants may need to contact their breast screening office. For example, to request adjustments or inform them of circumstances that could affect their screening. 
* **Adjusted the order of content**: Layout changed to mirror the structure and priority of the existing letter. 
Updated GOV.UK leaflet link: Link text was changed to better reflect the destination page, aligning with content style guidance. 
 

### Content changes from our clinical stakeholders: 

* **Added 'around' to the sentence on appointment length:** Helps manage expectations if appointments run late. 
* **Changed the appointment rescheduling header:** Changed the header from ‘Reschedule or cancel your appointment’ to ‘Changing your appointment’. Better reflects the action and avoids mention of cancelling, aligning with stakeholder preference. 
* **Condensed the benefits of calling to reschedule:** Shortened content to a single paragraph. 
* **Simplified 'Before your appointment' content:** Made easier to read. 
* **Updated bullet formatting:** Now use lowercase and no full stops, in line with NHS content style guide. 
* **Aligned wording with the GOV.UK helping you decide leaflet:** Received stronger positive feedback from stakeholders. 

![Side-by-side screenshots showing the development from version one of the NHS breast screening invite to the content used in the pilot. Left image – Version one sent 5 September 2024 at 4:00pm from NHS screening service greets “Hi Jane” and explains that regular breast screening saves lives by detecting cancer early. Appointment details are: Friday 20 September 2024 at 2:30pm, Epping Breast Screening Unit, St Margaret’s Hospital, Epping, Essex, CM16 6TN. Advises calling 020 3299 9000 if unable to attend so the slot can be reallocated, and includes a link to find out more about what happens during NHS breast screening appointments.Right image – Pilot version sent 19 February 2024 at 9:41am from NHS England – Digital Screening greets “Dear Jane” and provides appointment details: Tuesday 16 April 2024 at 2:30pm, Denmark Hill, London Kings College Hospital. Adds estimated appointment duration 30 minutes, clearer instructions for rescheduling or cancelling, and a new ‘Before your appointment’ section advising when to call ahead for example, if you have mobility needs, breast implants, pacemaker, recent x-ray, are pregnant, or under specialist care. Includes a link to the NHS guidance to help decide about screening.](content-changes.png "App invite version 1 and the App invite used in the pilot.")

Following the changes, we were able to get sign off from our service owner and clinical safety stakeholders. We ensured the newly designed invitation met both user and business needs and posed no clinical risk to the pilot participants.

## Collaboration with NHS Notify and developers:

In the background, we worked with technical colleagues from our multi-disciplinary team and the NHS Notify team to ensure the correct formatting and structure of the message templates. We reviewed data sources, defined the static and dynamic parts of the content, and agreed how to code each of them, so that there would be no doubt when automated processes run. 

**Pilot templates and prototypes:**
![The image shows the NHS Notify template for the NHS App breast screening invite beside a visual of how it would appear to users in the NHS App. The template is a word document which uses double brackets to call out which information is dynamically populated including: the participant's name, appointment date, appointment time, appointment location and the contact telephone number for calling the BSO.](template-and-pilot-app-message.png "NHS Notify template and prototype screen for the NHS App pilot invite.")
![The image shows the NHS Notify template for the SMS breast screening invite beside a visual of how it would appear to users as an iphone message. The template is a word document which uses double brackets to call out which information is dynamically populated including: the participant's name, appointment date, appointment time, appointment location and the contact telephone number for calling the BSO.](template-and-pilot-sms-message.png "NHS Notify template and prototype screen for the SMS pilot invite.")

**Sender Name**: During the pilot, the sender name for NHS App messages was displayed as **‘NHS ENGLAND - DIGITAL SCREENING’**. 

This naming was due to the sender name being linked to an **Organisation Data Service (ODS) code**, which comes with a pre-defined organisation name. These ODS codes are used across the NHS and social care to identify organisations. 

Currently, sender names in the NHS App appear in **capital letters**. 

Following the pilot, we agreed to update the name associated with the ODS code to **‘NHS SCREENING SERVICE’**, as it will be more easily recognised by users. This updated sender name will also be used by Cervical Screening. 

 

## Content findings from the pilot 
After months of preparation, we released the pilot to 150 people across 3 breast screening offices (BSOs).  

On the day of the pilot appointments, we visited the BSOs to interview the pilot participants. Although we mostly heard positive feedback, we gathered insights on how we could make the content better: 

* Some users were not aware they could not wear spray deodorant and talcum powder when going for mammography – we didn’t include this in the core of the message, noted to change it in the future. 
* Some users felt a map would have been beneficial, but their needs differed based on if they used public transport or travelled by car and just needed directions from the parking. There is ongoing work to improve the directions we provide for users particularly for mobile sites that are more difficult to find.
* Most did not click on the link for more information as they felt they already knew everything – which made us realise that:
    * signposting to this guidance might need to be different for first time attendees and returning clients 
    * essential information must be included in the main message 
 
## Interaction and content design beyond the pilot
We are currently in the process of iterating our designs from this feedback. We are exploring whether first-time attenders and people who have been to breast screening before have different information needs. We have also been looking at what information to give people before an appointment to help them feel prepared. We'll share more about this work soon.

If you have any feedback to share, please contact us by email at [magdalena.mips1@nhs.net](mailto:magdalena.mips1@nhs.net).