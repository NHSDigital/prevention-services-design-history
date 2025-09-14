---
title: How staff will access Mavis during private beta
date: 2024-06-27
---

## Authentication

SAIS staff will use the [Care Identity service](https://digital.nhs.uk/services/care-identity-service) (also known as CIS2) to access Mavis. We expect most (but not all) staff to already have [Care Identity smartcards](https://digital.nhs.uk/services/care-identity-service/smartcard-and-authentication-users).

When working from an office, we expect the majority of staff to access Mavis on a smartcard-capable laptop or desktop device, and have a fast internet connection.

In school and community clinics, we expect staff to access Mavis on a combination of laptops, tablets and phones. When issued by their organisation, staff prefer to use tablets and phones during sessions due to those devices’ portability and superior battery life.

## Bank staff and staff without smartcards

We’ve heard in research that SAIS bank staff don’t always have smartcards. CIS2 allows authenticating using authenticator apps, physical dongles and an iPad app instead of smartcards, so the lack of a smartcard shouldn’t prevent Mavis access.

We believe that [authenticator apps](https://digital.nhs.uk/services/care-identity-service/applications-and-services/cis2-authentication/microsoft-authenticator) are likely to provide the most flexibility. CIS2 supports the Microsoft and Google authenticator apps, both of which are available on Android and iOS.

## Authorisation

Mavis will rely on [National role-based access control](https://digital.nhs.uk/developer/guides-and-documentation/security-and-authorisation/national-rbac-for-developers) to ensure that different staff users, such as members of the SAIS or CHIS teams, have access only to parts of Mavis that they need. This access control will be managed by their organisations’ [registration authorities](https://digital.nhs.uk/services/care-identity-service/smartcard-and-authentication-users/find-your-registration-authority).

## Using Mavis offline

It’s common for staff devices to have limited or no connectivity during point-of-care recording. In order to continue using Mavis when that happens, staff will need to:

- log into Mavis on the day of the session, while they still have connectivity
- prepare for offline usage (see previous design work around [offline access](/manage-vaccinations-in-schools/2023/05/protecting-offline-data)).
