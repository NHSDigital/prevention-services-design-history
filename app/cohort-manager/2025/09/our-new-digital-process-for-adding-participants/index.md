---
title: Our new digital process for adding participants
description: How we digitised the process for manually adding participants to the breast screening cohort
date: 2025-09-30
tags:
  - beta
  - live
  - breast screening
---

This post discusses how we digitised the process Breast Screening Offices use to add participants to their system who fall outside of the automatic cohort.

## Why do some participants need adding?

Participants in England are automatically added to the breast screening cohort if they meet the following criteria:
- aged between 44 and 73
- registered with a GP practice
- not male

However, breast screening offices (BSOs) sometimes need to screen people who fall outside of this. For example:
- participants who aren’t registered with a GP practice but would still like to be screened
- participants over the age of 71 who are eligible to self-refer for breast screening but haven’t previously been known to the programme
- participants who are eligible for very high risk (VHR) breast screening but are below the routine breast screening age
- participants who have had a bilateral mastectomy before they reach their screening start age and need ceasing so they don’t get invited when they do become eligible

In these cases, BSOs need a way to manually add participants to their system, Breast Screening Select, so they can be screened.

### How participants were added previously

Previously, BSOs would raise requests to add participants by filling in a Word document form (either digitally or by printing it out and scanning it back in again) and sending it by email to the National Service Desk for the request to be actioned manually.

![Screenshot of the Word document form which was used previously to request for participants to be added to BS Select. It contains 3 options for reasons for adding participants, followed by fields for entering the participant's demographic details, as well as space for details of the individual making the request](fm0001-word-document-add-form.png "Word document form which was used previously to request for participants to be added to BS Select")

We heard from users that the previous process was clunky, time-consuming and involved lots of manual steps. We also heard that users faced challenges with tracking requests and monitoring those made by colleagues, meaning BSOs were reliant on manually tracking requests using spreadsheets.

## Digitising the process

To reduce inefficiencies and provide a better experience for users, we converted the Word document mentioned above to a digital form that sits within the NHS National IT Customer Support Portal.

![Screenshot from the homepage of the National IT Customer Support Portal. It contains a search box, as well as the ability to view knowledge articles, submit a case and see a list of recently used case types, and see cases the user has raised previously. There is also a section for service status which allows users to check for services outages and report if they have been affected](national-it-customer-support-portal-homepage.png "Screenshot of the NHS National IT Customer Support Portal homepage")

Benefits of this include: 
- removing manual steps associated with saving and completing a Word form locally, improving clinical safety by reducing risk of user error
- being able to view and track requests directly within the portal, addressing a common user pain point of relying on emails previously
- offering greater tracking and auditability to support with reporting and investigations in response to incidents

Another major benefit of the portal is that it is hosted on ServiceNow, which can integrate directly into Cohort Manager via an API (Application Programming Interface). This enables automated handling of add requests, rather than relying on them being manually actioned by users as they were in the previous process. Automation offers time-saving and efficiency benefits for staff, whilst also reducing risks of user error associated with manual handling.

The design aimed to closely replicate the previous Word document form initially to provide a familiar experience for users, whilst minimising the change impact on BSOs. However, our ambition is to make further enhancements to the form in future releases based on users’ feedback.

![Screenshot of the new registration form within the National IT Customer Support Portal. It features fields containing details of the requester - some of which are pre-populated from their account, space to leave an alternate contact's details so a colleague can be notified about the request, a field to enter the BSO code of the requester, followed by fields for the participant's demographic details and the reason they are being added](new-registration-for-bs-select-form.png "Screenshot of the new digital form for adding participants to BS Select within the National IT Customer Support portal")

## Testing with users

Before the digital form went live, we conducted remote moderated usability testing with users from 7 BSOs to gather feedback on the digital add process and observe users interacting with the portal. Through simulating the process of users adding test participants and monitoring requests, we were able to get feedback on the new process and identify areas for improvement in future releases.

Feedback highlighted that the form was clear, simple, and user friendly, and demonstrated that users were able to easily raise requests for participants to be added. Our findings also gave us confidence that the portal is addressing users’ pain points around viewing raised requests and monitoring them across the BSO team.

Testing also highlighted some elements of the portal which weren’t immediately intuitive to users. These tended to centre around navigating the portal and tracking requests that have already been raised. Whilst users were quick to learn, insights helped to identify topics to be addressed in supporting guidance for the initial rollout, as well as opportunities for improvements in future releases. 

## Piloting the new process

Following usability testing, we ran a pilot with 3 BSOs who used the portal to add real participants for a one-month period. This functioned as a private beta to help us further ensure the solution works for users and capture feedback from real usage. 

During this time, users’ requests raised via the portal continued to be picked up and actioned by the National Service Desk. This meant that if there were any issues with BSOs’ requests, agents from the service desk could respond directly to the BSO

User feedback from the pilot was really positive, with users citing ease of use and speed as particular benefits of the new process:

> It's so much easier. We used to have to complete the document, save it, add it to an email, and now it's like it's just automatic so it's much better.


## Rolling the new process out to all users

Testing and piloting gave us confidence to proceed to public beta and roll the digital form out for all BSOs. As part of this, we kept the legacy process available for users for a period of just over one month to give them time to transition.

### Where are we now?

The new digital process for adding participants has now been live for all BSOs for around 7 weeks and we have seen strong uptake so far:
- 77% of requests in the first month came in via the portal
- 66 (86%) of the 77 English BSOs have used the portal to raise at least one request

In addition to monitoring usage data, we have continued collecting feedback from users during the public beta phase. Insights gathered so far suggest high levels of satisfaction with the digital add process. In particular, users feel the new process is easier than raising requests via email, with feedback frequently citing the simplicity of using the portal to add participants:

>… it is so straightforward and simple, and it takes, like literally a minute, not even that.”

As of 16 September 2025, requests to add participants to BS Select are no longer accepted by email, with users being asked to submit them via the portal instead. 


## Further information

If you'd like to learn more about Cohort Manager, [our earlier post](/cohort-manager/2025/08/raised-and-not-raised/) looks into how introducing a labelling feature in our user interface aims to help users track the status of data exceptions.
