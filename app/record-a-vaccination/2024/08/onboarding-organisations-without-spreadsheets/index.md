---
title: Onboarding organisations without spreadsheets
date: 2024-08-29
tags:
  - onboarding
---

Giving organisations access to point of care systems like Record a vaccination is the responsibility of regional commissioning teams.

Previously, this process was manual and time-consuming, involving spreadsheets that led to errors or confusion.

> During the last campaign, we onboarded 3,000 sites within a month, and spent another month fixing issues.

To improve on this, we designed and built an interface for the regional commissioning teams to allow them to directly invite new organisations to the service.

## Designing the interface

We started the design work by focusing on one of the biggest potential sources of errors: adding organisations to the service requires an accurate organisation code (ODS code). The code is also used for reporting and flowing data.

Instead of asking users to enter this code manually, we integrated with [the ODS API](https://digital.nhs.uk/developer/api-catalogue/organisation-data-service-ord) to build a lookup using autocomplete.

![Screenshot showing a page titled 'Find an organisation to invite' with text field that has three letters entered and is showing 5 matching results](qxky6r64lg4myou4vrg6w002qg7e.png)

This allows users to search and select an organisation using its name, postcode or ODS code.

The search only filters organisations that are NHS trusts or community pharmacies, to ensure that other similar-sounding organisations with a different status are not added by mistake.

Once selected, a confirmation page appears including the organisation's full address to prevent further errors.

## Adding lead users

Once the organisation is selected, the user is asked for the name and email address of someone who'll be invited to be a lead administrator of that organisation.

![Screenshot showing a page titled 'Add a user' with 3 fields: First name, last name, NHS email address](nmen9pfhmnjovpfcmnli5jxgdzep.png)

Before confirming, there's a final page where users can check the details are right.

The page also contains a preview email that's sent to the invited user to help the regional users:

- understand the process of what happens next
- avoid repeating the details in a personal email to that user

![Screenshot of a page titled Check and send which has a preview of an email that will be sent to the invited user](8t5zurkym9uwt9n61wij6r59n0cc.png)

## Adding additional users

Once a lead user is added to an organisation, they can invite other lead users. This means:

- organisations can [manage their own users](/record-a-vaccination/2024/07/designing-an-initial-user-permissions-model)
- regions do not need to invite lots of users for every organisation

## Viewing the onboarding status

As regions add organisations, they can see which organisations change from ‘Invited’ to ‘Active’ as soon as their users have successfully set up their Okta account and signed in for the first time.

![Screenshot of a page which lists organisations added in a table with a status column that shows Invited or Active](azrnvvc0ccg4pgjm4w5zbxnwkj86.png)

We hoped that seeing this status would enable the regional commissioners to follow up with an organisation.

## User research

We tested the interface in remote usability sessions with 14 participants across 4 regions.

The research confirmed that many users did not know their organisation's ODS codes in their regions, so they valued being able to search by name.

Users wanted a bit more clarity on the role of the lead users they invited and reassurance they could invite more than 1 lead user.

We also tested a version of the interface where regions could invite organisations and users, then 'activate' invited organisations, allowing them to start recording vaccinations as a separate step. This felt unnecessary and could delay adding users, especially as the full commissioning and contracting process could be complicated.

We also learned that some regions have informally split their region with different people responsible for the different sub-regions.

## Feedback from the initial launch

We launched this feature to regions on 19 August 2024.

We tweaked the autocomplete to exclude closed organisations and ordered the results so that exact matches based on ODS code appear at the top of the list.

Feedback from users has been positive, with one saying:

> The status column, which allows us to track which users have logged in is useful for monitoring. I plan to send reminders to those who haven’t logged in yet. I also found the email sent to users to be comprehensive and easy to understand. I especially liked that it included the links to training webinars, which I initially thought I would need to send out myself.

## Future considerations

We may need to add features to allow users to correct mistakes, such as inviting the wrong organisation or entering the wrong user email address.

As we move beyond the onboarding phase, we'll need to consider the longer-term role of this interface.
