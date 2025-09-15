---
title: Managing multiple consent responses
date: 2023-11-08
screenshots:
  items:
    - text: Session homepage showing new ‘Check consent responses’ section
      caption: To this view, we also added the number of children in the session cohort, and a brief summary below the link to each section.
    - Check consent responses
    - text: Patient record with consent given
      caption: The ‘Responses to health questions’ expander is closed as all respondents answered ‘No’.
    - text: Patient record needing triage
      caption: In this example, both respondents have given consent and provided differing answers to health questions. Their answers are shown together under an expanded ‘Responses to health questions’ section. This makes it easier to compare responses during triage.
    - Patient record with conflicting consent responses
    - Patient record with consent refused
    - text: Patient record with a confirmed refusal
      caption: In this scenario, both responses appear collapsed as this record now has an overall outcome. Reasons for refusal appear in the summary at the top of the page.
    - Patient record with no consent responses
    - Who are you trying to get consent from?
---

Until now, the design for managing consent has assumed there will only ever be one consent response. However, it is possible for multiple consent responses to be submitted against a child. This can occur because:

- a number of parents or guardians got an email requesting consent and all submitted a response,
- the same person submitted multiple responses,
- consent was given using the online service as well as on a paper form.

Given our current consent model, in which we don’t use NHS Login or confirm that the respondent appears on a list of known parental contacts for a child, we can’t prevent multiple responses being submitted against a patient record.

This presents a number of scenarios that need addressing:

- All respondents have given consent, but provided different answers to health questions or different reasons for refusing consent,
- If no one has responded, we need a way for users of the service to retrieve parental contact information stored in CHIS or SAIS records which they can then use to contact a parent.

When there are conflicting consent responses:

- We need a way to resolve this so that any respondents that have refused can be contacted and change their mind and choose to give consent,
- If one respondent confirms their refusal, then other respondents that have given consent can be notified that their child won’t be getting the vaccination.

## Splitting consent and triage

Previously, we recorded consent outcomes needing follow-up as a reason for triage. As the interface needed to account for managing many more different consent outcomes, this made the triage section more complicated.

We also felt it was important to keep these journeys separate as non-clinical admin users may be responsible for chasing and confirming consent responses whereas SAIS nurses will be responsible for triaging answers to health questions.

Moving consent out from triage meant there was no longer a need to display a reason for triage; a patient will only need triage if a parent answers ‘yes’ to any health question.

## Reviewing consent responses

A new ‘Check consent responses’ section is shown on the session homepage. This view contains a list of patients that can be filtered using the following tabs along the top of the page:

- Consent given
- Consent refused (including confirmed consent refusals)
- Consent conflicts
- No response

The consent panel on a patient record page shows each response in an open [details component](https://service-manual.nhs.uk/design-system/components/details). A summary list displays the respondent’s name, relationship to the child, contact details and their response (with date and method of response shown).

Every time the consent response changes (such as after contacting a parent to confirm their refusal), a new event is added which shows what changed, and which user contacted the parent.

Above the responses, the overall consent outcome is shown.

Below responses, answers to health questions are combined. This makes it easy to compare answers to each health question if respondents have provided different questions (if all respondents answered no, we show ‘All responded: No‘). This uses the [expander component](https://service-manual.nhs.uk/design-system/components/expander), and this appears collapsed when all the answers given are ‘No’.

### Getting consent

Where there has been no response, the ‘Contact parent or guardian’ journey asks the user to choose from a predefined list of contacts that may be available on the service via data uploaded from CHIS or other SAIS records.

Where consent is conflicting, a similar journey is followed, but as we already have a parent’s contact details, we skip over the question that asks the user to choose a parental contact.

## A consistent appearance for the patient record

With the addition of this third section, we took the opportunity to revisit the patient record. Previously there was a slightly different ordering of cards and different labels used for similar sections of the page.

Now the patient record uses the same section ordering and naming:

- **Current status or outcome:** Rather than using a custom banner design, using a variant of the card component with the offset featured heading, the background colour of which reflects the different outcome status
- **Child details:** Name, date of birth, address etc. is shown the same across all sections
- **Consent:** Consent outcome, responses and answers to health questions appear within this one section
- **Triage notes:** where relevant
- **Action:** Where a patient needs triage, a form to enter triage outcome and notes is shown. When a session is in progress, and if a patient is ready to vaccinate, a form to record vaccination outcome is shown.
