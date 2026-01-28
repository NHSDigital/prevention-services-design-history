---
title: "Point of care: What are you doing today?"
date: 2022-11-23
screenshots:
  items:
    - Start page
    - Sign in
    - You’re signed in
    - What are you doing today?
    - Are you the vaccinator?
    - Which flu vaccines are you using?
    - Which batches?
    - Check and confirm
    - Flu campaign
tags:
  - prototype
---

We want to simplify the data users enter at the point of vaccination. Repeating their own name, location, vaccine used and vaccination site is laborious. They do this hundreds of times.

Our hypothesis is that we can:

- use sensible defaults
- allow users to choose their defaults when they sign in
- infer further defaults from those choices

In this design we show what defaults a user might choose when they sign in, for example at the beginning of a campaign or clinic.

## A worked example

Consider you’re a SAIS nurse at a primary school, and you’re there to administer flu vaccines.

If the system knows about the SAIS team schedule, where they are going and when, and what vaccinations they are giving, then we can present the most likely list of things they will be doing today.

For example, we know that on 22 November this SAIS nurse is in a SAIS organisation that is going to these schools and running these clinics:

- St Mary’s Primary School Flu campaign, 22 November
- Hele’s Secondary School HPV campaign, 22 November
- Catch-up clinic, 22 November

From the campaign they select, we will know that we need to ask which Flu vaccines they will be using, and which batches of those vaccines.

If the system knows what vaccines are in stock, and what batches are available, these choices can be simplified.

By making these choices at the start, the user can reuse them for each vaccine they administer.

## We need to know more

Is this worked example a realistic one?

We need to know more about the vaccines teams take to campaigns – is it always or usually the same batch of the same vaccine. What changes? Do different team members administer different vaccines?

We need to validate our assumptions through research.

## Clinics and change of plans

We don’t know:

- what happens at a clinic – are clinics usually for one vaccine type? All vaccines?
- what happens if plans change

We’ve assumed that the knowledge of what’s happening comes from somewhere, this information will need to be kept up to date.

We don’t expect to design a clinic and campaign scheduling system.
