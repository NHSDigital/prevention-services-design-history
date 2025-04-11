---
title: Recording consent on the day of the vaccination
date: 2023-03-21
related:
  items:
    - text: Prototype pull request
      href: https://github.com/nhsuk-archive/manage-childrens-vaccinations-prototype/pull/59
screenshots:
  items:
    - A child page when no-one has responded
    - Who are you trying to get consent from?
    - Do they agree?
    - "If they do not agree: Why do they not agree?"
    - "If they do not agree: Check and confirm answers"
    - "If they do agree: Health questions"
    - "If they do agree: Check and confirm answers"
    - Did they get the vaccine?
    - Check and confirm vaccination details
    - Success after consent and vaccination
    - Updated child page
---

Several of the SAIS teams we spoke to early on in our research told us they regularly get consent to vaccinate on the day of the session itself.

While there’s a preference to get parents to consent well in advance of a session (because this allows time for triage and greater accuracy when calculating how many vaccines will be needed), there’s also a clear benefit in allowing consent on the day: it increases uptake.

We’ve learned from research that most nurses getting consent on the day will phone parents or guardians and follow the journey that a parent would go on if completing the consent form provided by the school.

If the nurse gets consent to vaccinate, they’ll run through the health questions that a parent would normally answer if consenting in advance. The nurses need a way to record these responses.

## Updating our designs

<video src="https://user-images.githubusercontent.com/319055/216582582-0bc3a31a-3fde-4bf1-9343-af65e35a3e2a.mov" controls muted></video>

It’s now possible for nurses to record consent on the day through the service. We’ve added the question ‘Are you attempting to get consent?’ to the child information page.

We assume that the nurse is in conversation with the parent as they ask:

- the name of the person giving consent and their relationship to the child
- whether or not they agree to the child receiving the vaccine (including if there’s no response because the parent does not answer the phone)
- the health questions for the vaccine (the nurse has the option to add triage notes if they want to)

If consent is given, we immediately ask if the child has had the vaccine.

At the end of the journey, the triage status and the outcome are both updated.

## Designing the Gillick competence journey

We haven’t yet added the journey for nurses to follow if they’re assessing Gillick competence. We need to do more research before we can design this.
