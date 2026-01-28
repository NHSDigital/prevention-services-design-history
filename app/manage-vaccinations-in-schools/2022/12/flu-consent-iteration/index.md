---
title: Iteration to parent consent journey for flu
date: 2022-12-13
related:
  items:
    - text: SAIS interviews round 1
      href: https://www.notion.so/SAIS-interviews-round-1-f2dd1af58c8040f7a8c5c34a35d6b70b
    - text: Prototype changes
      href: https://github.com/nhsuk-archive/consent-for-vaccinations-prototype/commit/ce8ad48e24c79cfcffb483c17b0aba6b82f8352f
screenshots:
  items:
    - What is your child’s name?
    - Child’s date of birth
    - Confirm child’s school
    - About you
    - Nasal consent
    - No nasal consent given
    - Injection consent
    - Registered GP
    - Household immunosuppressed
    - Asthma steroids
    - Egg allergy
    - Anything else?
tags:
  - prototype
  - flu vaccine
---

Following research with 4 SAIS team leads, we iterated our initial flu consent journey for parents to incorporate our findings.

## Nasal vs injection

A SAIS team lead told us that it wasn’t clear what flu vaccine a parent was giving consent for. Is it nasal spray or injection? Our only reference to the nasal spray was on the start page.

They told us that without the intra-muscular (IM) option, they’d lose 5% of their flu vaccinations.

We have changed the journey so that:

- we explicitly ask for consent for the nasal spray, and highlight the pork gelatine content of the vaccine
- if they do not agree, in our list of reasons, pork gelatine is now at the top
- if a user gives any reason other than ‘vaccine received already’ or ‘will be given elsewhere’, we now ask if they want to give consent for an injected vaccine instead
- if consent for an injection is given, we ask fewer clinical questions as the contraindications relating to the nasal spray do not apply

## Parental responsibility

We’ve changed the list of options for ‘relationship to child’ – we’ve added ‘Other’ and removed ‘Carer’.

If ‘Other’ is selected, we give guidance that they must have parental responsibility to give consent.

A good example is a step-parent.

[About parental responsibility](https://www.gov.uk/parental-rights-responsibilities)

## Parents can give information for the wrong person

SAIS team leads told us that parents frequently enter information wrong.

Examples include:

- giving their child’s name instead of their own
- giving their own date of birth instead of their child’s

It needs to be clear when we are asking about the child vs the person with parental responsibility.

We made some content changes to clarify this, but we’d typically identify and iterate these sorts of issues based on how frequently they occur in a live system.

## Asking for their child’s name

We have refined the questions to ask for:

- official name first (for example on a birth certificate), rather than just ‘name’
- ‘are they known by another name’ rather than ‘preferred name’

It may not be the child’s preferred name, but it’s what they’re known as.

## Asking for sex or gender

We have been told there is no biological need to know sex information. SAIS users couldn’t point to specific needs for this information. We have removed the question.

We might want to put it back in some form within the HPV journey, where uptake amongst male and female is important to know.

## NHS number

We have removed the page asking for an NHS number.

Some teams ask for it, others do not. When it is asked for most parents do not give the number. It is not frequently used. We do not expect to need to use the NHS number, so have removed for now.

## Refined clinical questions

Our health questions are still not clinically assured, but we have iterated them based on feedback in research.

We:

- made it clear that only severe egg allergies that have led to admission to intensive care are relevant (as per the green book)
- given an example of someone in a household who is immunosuppressed, using the example of a bone marrow transplant from the green book (anecdotally, parents confuse this question with shielding for COVID)
- added a question about oral steroids if a child has been diagnosed with asthma – the dose and type of steroid is relevant to contraindications
- added an ‘anything else?’ question at the end, to capture anything that does not fit into the standard questions – for example when a child has a fear of needles. This is now in line with other vaccine journeys
