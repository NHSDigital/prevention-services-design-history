---
title: Matching consent responses to children’s records
date: 2023-12-07
---

## The problem

At the start of each vaccination campaign, SAIS teams put together their cohort, which is the complete list of children they know about in their area who are eligible for a vaccination.

It is a list of children (typically several thousand) in a particular academic year group who either live, attend a school or are registered with a GP within the SAIS team’s geographical boundary.

(We’re aware that this means some children are part of more than one SAIS cohort, which causes lots of headaches - this is something we want to look at in our future roadmap.)

SAIS teams use multiple data sources to create the cohort:

- Child Health Information Services (CHIS) are responsible for tracking the home address, school and GP of children in England (amongst other things like their vaccination and screening history). They typically provide an initial version of this list to the SAIS team.

- Some SAIS teams get information about school-aged children and whether they attend a school directly from local authorities, instead of – or in addition to – the CHIS list.

* Most SAIS teams request full class lists from every school in their region, because these provide the most accurate and up to date information for children who go to school. Some schools provide parents’ contact details so that SAIS teams can contact them directly. Others do not feel comfortable doing this and instead prefer to share comms on the SAIS teams’ behalf.

SAIS teams typically have to resolve these disparate sources manually to create their cohort lists.

In our research, none of the SAIS teams we’ve spoken to have a system which allows them to do all of the following in the same place:

- see their entire cohort
- record attempts to contact parents
- view consent responses they’ve received for each child

Most teams have their full cohort either in a patient records system or spreadsheets, and use a different ‘e-consent’ system to manage consent responses they’ve received and record vaccinations they administer. This separation makes chasing up non-responders a time consuming and manual process.

SAIS teams also have to deal with frequently receiving multiple consent responses for one child. This can happen because more than one parent responds for a particular child, or because a parent responds twice by mistake.

Existing SAIS e-consent tools treat each consent response independently. SAIS teams have to identify multiple consent responses for a child as ‘duplicates’ and deactivate one of them, so they don’t see the child twice in their list of children to vaccinate.

This is even more risky when one parent gives consent but another refuses. SAIS teams cannot vaccinate a child if someone with parental responsibility has refused (unless the child is Gillick competent and consents for themselves). But because they have received a ‘yes’ response from one parent, this consent response will appear in the list of children to vaccinate, with no direct link to the refusal.

To ensure the child doesn’t appear in the list, the SAIS team must identify that there are two responses for that child and deactivate the ‘yes’ response, so the only remaining response is a refusal. This is a significant source of manual work and stress for SAIS teams.

## Child-centred records in MAVIS

We think we can solve these problems in MAVIS by linking consent responses together with a child record.

The SAIS team can import their cohort list into MAVIS, and when consent responses come in, we will automatically match them to the right child wherever we can. If we can’t match them automatically, a SAIS team member will be able to manually link the response to the right child.

We will match a consent response to a cohort record automatically if any three of the following values in the consent response match to exactly one cohort record:

- first name OR preferred first name
- last name OR preferred last name
- date of birth
- postcode

This means that acceptable matches include full name + date of birth, full name + postcode or partial name + date of birth + postcode.

To start with we will only accept exact matches, and we’ll look at fuzzy matching in future.

If there is no match or multiple possible matches, we will flag the response to a nurse to link to the right child.

Doing this matching will allow us to show all the consent responses that relate to the same child together, so nurses won’t have to process duplicates and can easily see non-responders to chase consent.

If this approach works, in the future we want to extend the matching further so that SAIS teams, CHIS teams and/or schools can import different cohort lists independently, and MAVIS can use these sources to identify the full list of unique children for vaccination.
