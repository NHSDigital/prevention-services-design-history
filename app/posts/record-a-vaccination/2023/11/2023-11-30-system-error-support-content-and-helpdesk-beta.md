---
title: "System error support content and helpdesk (beta)"
date: 2023-11-30
---
### Our approach to supporting users

Building on our [initial research into support content](https://record-a-vaccination-service-design-history.designhistory.app/editing-records-support-and-help-content-beta) — we explored how and when users might need to escalate issues to a human (or helpdesk). This formed part of our overall support approach:

1. **Proactive support**: provide users with contextual and timely inline content to coach them through a process or introduce them to a new feature.
2. **Self-serve support**: direct users to the in-built help section to answer any common concerns or frequently asked questions they may have.
3. **Human support**: direct users to the helpdesk team with complex questions or issues the team can only answer or resolve.

### System errors
To test our approach, we focused on a scenario where unexpected system errors occurred — designing a journey that supported users in taking the right action when encountering an error.

1. Firstly, to resolve the issue by themselves.
2. Escalate the issue to a person who can help.

**Error screen**

While the user was recording a patient's vaccination, we presented an error screen midway through the process.

We used an existing [GDS pattern](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/) that had already been tested with users.

During testing, when users encountered the error page, they acknowledged the message and expected to take the outlined steps to fix it — highlighting the content was constructive and offered potential actionable remedies.

Users also expected to navigate to the help section by clicking the hyperlink in step 2 of the message and acknowledged there was an alternative way to record data offline while the system was down.

![Error screen](q3d9nctj0yd63a82d05591y1xmpr.png)

**Help section**

As outlined in [editing records support and help content (beta)] (https://record-a-vaccination-service-design-history.designhistory.app/editing-records-support-and-help-content-beta), we used an existing NHS service pattern to create the help section — accompanied by error screen content to support our users.

During testing, users identified the escalation process if they could not resolve the issue independently and an alternative way to record vaccination data offline.

User feedback also suggested they would need a team (more than one named contact) to resolve errors quickly to cover absences or annual leave.

Some users suggested an electronic version of the data capture form would be better (instead of a paper version) since some delivery settings do not have printers.

If, for any reason, an internal contact could not resolve the issue or was unresponsive, we offered users the ability to contact the RAVS helpdesk at the foot of the page. However, this message wasn't immediately apparent to users and suggested the content header should communicate it's a way to contact RAVS to be recognised.

Users also added that displaying the opening hours and days for the phoneline would be helpful, along with standard response times for email enquiries.

![Help section](v8p82jo46zgnetr50o4egbtxgmyi.png)

### Usability score and summary

> It's very good at explaining what to do next.

Overall, **users scored the recovery from a system error journey 6 out of 7 (confident)**, finding the information logical and ordered. Users valued that help was within easy reach in the app. However, it wasn't immediately apparent that the support number was at the foot of the page, and we need to clearly label this for it to be recognised, aligning with adding further information about the contact channel opening and response times.

> Make it clear it's the RAVS helpdesk team (contact details).
