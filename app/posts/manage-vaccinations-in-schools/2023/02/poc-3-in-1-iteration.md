---
title: Recording complex vaccinations more quickly
date: 2023-02-03
related:
  items:
    - text: Prototype pull request
      href: https://github.com/nhsuk-archive/manage-childrens-vaccinations-prototype/pull/35
screenshots:
  items:
    - Which vaccines given?
    - Which vaccines given, with warning
    - Where was vaccine given?
    - Check and confirm details
    - None selected
    - Give reason vaccine not given
    - Check and confirm details – no vaccines given
    - Check and confirm details – single consent
---

The 3-in-1 teenage booster and MenACWY vaccinations are the most complex of those offered by SAIS teams. Two different vaccines are usually administered in the same session. Consent can be for either, both or none.

[We previously used a page-per-thing pattern](/manage-vaccinations-in-schools/2023/01/poc-3-in-1-campaign/) to record these vaccinations, asking which was given first, checking the vaccine type, recording the site, and whether it was given or not.

This was a long journey that would need be repeated many times over. We needed to simplify it and shorten it to save nurses’ time.

<video src="https://user-images.githubusercontent.com/319055/216582582-0bc3a31a-3fde-4bf1-9343-af65e35a3e2a.mov" controls muted></video>

## What we changed

Like flu and HPV, we added the question about whether the vaccines were given to the child page. We now ask about both vaccines together:

![Screenshot of form asking for vaccines given.](which-vaccines-given.png)

When a vaccine has been given we ask where it was given:

![Screenshot of form asking for vaccines given, showing conditional options for where given.](where-was-vaccine-given.png)

By asking about both vaccines we:

- do not need to ask which was given first (so can drop the ‘which first’ page)
- can compare the sites for each vaccine

This revised design lets us then jump straight to the confirmation page in the most common scenario (ie vaccination given where consent was given).

## Shorter site options

We’ve shortened the list of sites from:

- Left arm
- Right arm
- Left thigh
- Right thigh
- Left buttock
- Right buttock

To simply:

- Left arm
- Right arm
- Other

Our hypothesis is that in school-based vaccination anything other than arms is very rare, and can be handled differently should it occur. This will simplify the design for the most common case.

We’ve also applied this to the HPV journey.

## When consent is for one vaccine

We’ve chosen to always show both vaccines, even when consent has only been given for one. Consent might be given at the time of vaccination for the other vaccine, and nurses will still need a way to record it.

We show a warning beforehand indicating that the child must only get one vaccine. We need to research how SAIS teams currently deal with this situation.

If a user tries to record a vaccine that no consent was not given for in advance, then we might need to double-check that’s correct. We probably also need to record what type of consent was given. This is not in the designs at the moment.

## When we ask why a vaccine was not given

We only ask why a vaccine was not given if it was a vaccine that had consent in advance (ie it was expected that they would be getting it).

For example, if consent is given for both and only one is recorded, we would ask for a reason for the other one. If none are recorded, we would ask for a reason for both.

By asking for a reason, we incorporate a check for false-negatives – ie if the nurse accidentally didn’t record one of them, at this point they can realise their mistake.

## Design notes

When the ‘None’ checkbox is checked, the other checkboxes and any site values are removed with javascript. Without javascript we return a validation error. This prevents a user from submitting a form in an ambiguous state.
