---
title: Consent for an HPV vaccine – Iteration
date: 2023-03-23
screenshots:
  items:
    - Email asking for consent
    - Reminder email asking for consent
    - Email to student informing them about the HPV vaccine
    - Email confirming consent
    - Email confirming vaccination
    - Start page
    - What is your child’s name?
    - What is your child’s date of birth?
    - Confirm your child’s school
    - About you
    - Do you agree to them getting vaccine?
    - "If they do not agree: Why do they not agree?"
    - "If they do agree: Is your child registered with a GP?"
    - Home address
    - Any severe allergies?
    - Any existing medical conditions?
    - Any regular medication?
    - Anything else?
    - Check answers and confirm
    - Confirmation page
tags:
  - prototype
  - HPV vaccine
---

Based on user research, we iterated [our initial consent journey for parents](/manage-vaccinations-in-schools/2023/03/consent-for-an-hpv-vaccine/).

## Shortening the journey

Parents told us they had the impression the journey was longer than previous services they had used, and that there were lots of questions.

We pruned the journey to make it shorter.

We have:

- removed email and email code pages at the start
- removed the NHS number page
- removed the MMR questions

We might later remove the GP question too, depending on how important the data is.

### Removing the NHS number page

No parent we tested with told us they would fill this in, no one would bother to find it.

### Removing email codes

We might already have their email address, depending on who and how they were initially contacted.

We will show users the email they have entered at multiple points during the journey, which will help with spotting typos:

- on the check your answers page
- on the confirmation page

The email field has been moved to the ‘About you’ page, where we already ask for telephone number.

### Removing MMR

SAIS nurses told us they could not rely on parent’s responses, and parents couldn’t easily remember – MMR vaccines would have been 10 years ago.

A vaccination record should be used by SAIS teams instead.

## Content improvements

We’ve added two new emails:

- confirmation of consent
- confirmation of vaccination

We also iterated content within the journey.

### When the vaccine should be given

We had not made it clear that the best time for the HPV vaccine to be given is before someone is sexually active. Without this we saw parents making incorrect assumptions that they could delay the vaccine until their children were much older.

### Request for consent email

Parents told us they wanted to know more about HPV before we ask them to refuse or give consent for vaccination.

We rebalanced the email by:

- putting the key points about HPV first
- asking for consent
- giving further details after the consent link

### A shortened start page

Our start page and request email were repeating the same details about HPV. We’ve favoured keeping that content in the email and made the start page much shorter.

Both pages had been written in isolation, and when seen together in the journey the repetition was clear.

### Guidance text when asking for child’s name

We tweaked the hint text for ‘Official name’ to ask for what’s on a passport rather than a birth certificate. This way we take into account any changes to their name since birth.

This is more relevant when thinking about 14 year olds, as opposed to 5 year olds for flu.

‘Are they known by another name?’ was also a question that confused parents. We saw some give their full name with middle names, and then a shortened name in this box. Others gave name abbreviations. Without changes, this question would get a lot of false positives.

We are trying a new label, ‘Do they use a different name in school?’

We are looking to capture scenarios like:

- going by a different surname to their official name
- going by a different first name, for example children going through transition
- using their middle name rather than their first name

### Asking for telephone number

We now tell users that we may use this number to contact parents about their child’s vaccination.

### Removing contraception

In our question about regular medication we asked, ‘Does your child take any regular medication, excluding contraception?’.

We excluded contraception because nurses do not need to know about it. However, by highlighting this in the question, we were giving parents undue reason to pause and think.

They questioned why it was there. We’ve chosen to remove this to make the question easier to answer.
