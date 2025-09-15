---
title: Finding the right solution for sharing breast results with GPs
description: A draft brief for a potential 'alpha' team who would take our learnings forward
date: 2025-04-25
author: Veronika Jermolina
tags:
  - breast screening
  - alpha
  - user needs
  - GP results
---

We are learning how we can improve the sharing of screening results with GPs (see the [outcomes](https://design-history.prevention-services.nhs.uk/explore-team/2025/01/sharing-screening-results-with-gps/) we are working towards described previously). In this update, we will describe what an [alpha team](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works) taking our discovery work forward would need to solve.

## Focus on breast screening results

Having looked at breast and bowel cancer screening services in some detail, we decided to narrow our focus to:

- breast screening over bowel cancer screening
- normal and ‘did not attend’ (DNA) results over abnormal or other result types

We wrote about this in more detail in our previous update on [what we were learning](https://design-history.prevention-services.nhs.uk/explore-team/2025/01/sharing-screening-results-with-gps/).

![A 'breast care unit' sign on a sunny day](humberside-bso.jpeg 'We visited the breast care unit at Humberside to learn more about their work')

## Why breast screening over bowel cancer screening?

- 99% of all normal results in bowel are already sent electronically
- bowel cancer screening results use the ‘pathology’ route and are working well for GPs

One GP practice staff member told us:

> I’d like to see something like bowel coding.

They showed us how easy it was to apply rules to bowel screening results and auto-file them:

> You tick a box that correlates to the pathology screen, apply a really quick rule and it will autofile in 2 minutes.

![Special perforated paper in a printer](perforated-paper-in-printer.jpeg 'Special perforated paper used for breast screening GP reports, kindly sent to us by one BSO')

## Being creative and pragmatic

While bowel pathology route is working well, breast screening results cannot just follow the same route as bowel. [The ‘pathology’ route used by bowel](https://design-history.prevention-services.nhs.uk/explore-team/2025/03/what-we-learned-about-sharing-breast-and-bowel-results-with-gps/#how-results-are-shared%3A-bowel-screening) uses old technology that is marked for deprecation and is in the process of being upgraded.

A technical architect colleague told us:

> You could try to shoehorn it into an [EDIFACT](https://digital.nhs.uk/developer/api-catalogue/pathology-messaging-edifact) pathology message. Even if you can do it, you shouldn't.

A designer colleague working in vaccinations told us:

> Be tactical, find an opening. What we have doesn’t match any diagram.

So, while we used some high-level solutions to encourage ideas, it will be up to the alpha team to decide, creatively and pragmatically, on the short-term solution. They would need to weigh it up against longer-term and adjacent solutions.

## The 3 Alpha team tracks

Because of this complex context, we suggest that the alpha team should work across 3 tracks:

- experiment track: can the team find a usable, viable and feasible solution?
- approvals track: can the team get all the right approvals?
- collaboration track: can the team coordinate with other teams whose work affects this work and vice versa?

## Alpha team problem

We summarised the problem:

3 million breast screening results are sent annually to GP surgeries in paper and PDF formats. This leads to inaccurate screening data, high processing costs and worse patient care.

Some trusts have started implementing their own solutions, but what they can do is limited — data from the 75 instances of the legacy NBSS is not readily available to them.

There is variation in how results are generated in each BSO (breast screening office). GP and patient results are not necessarily processed the same way, but both need to come from the same data source to ensure integrity.

## Alpha team brief

Find the right combination of technologies to make normal and DNA breast screening results available to patients and GPs in a way that allows them to be added to patient records efficiently and accurately.

## Assumptions to invalidate

We say ‘invalidate’ because the goal is to experiment, test, learn and iterate to reduce risk. We have blind spots and the alpha team’s job is to explore them and to find what works.

### GPs, BSOs and NHSE need breast screening results to be automated

- evidence: qualitative feedback from GPs, BSOs and NHSE
- risk type: value
- user or actor: GP, BSO, NHSE
- confidence: high

### GP IT providers will be able to implement a solution within a reasonable timeframe

- evidence: total time to implement by GP IT is 18-24 months (6 months roadmap; 6-18 delivery)
- risk type: feasibility
- user or actor: EMIS, TPP, DSIC
- confidence: medium

### We can obtain patient and GP results within a reasonable timeframe

- evidence: BS Select feedback that it is already possible; Screening working group set up
- risk type: feasibility
- user or actor: DPSP
- confidence: medium

### We can tag results with SNOMED CT codes within a reasonable timeframe

- evidence: several colleagues have done work to create breast screening SNOMED codes
- risk type: feasibility
- user or actor: DPSP
- confidence: medium

### All BSOs will be able to transition to the new result process easily for patients (SMSTA) and GPs (SIL)

- evidence: there are 75 instances of NBSS running locally in 77 BSOs, changes need to be implemented one by one. BSOs will be impacted differently depending on who handles their results (Synertec, Civica, in-house, ‘other’)
- risk type: viability
- user or actor: BSO
- confidence: low

### It is cheaper and quicker to build this short-medium term solution than to build a fundamental solution

- evidence: replacing NBSS with a new system may mean that BSOs are able to access results and find their own solution
- risk type: viability
- user or actor: DPSP, BSOs
- confidence: low

### Breast screening result data would be extracted into a central screening repository before being shared with GPs

- evidence: team MAYS is implementing a digital screening strategy that enables the extraction and centralisation of results data
- risk type: feasibility
- user or actor: MAYS
- confidence: medium

## Hypothesis

**We believe** making normal and DNA breast screening results available to GPs in a structured format

**will result in** cheaper, faster and more accurate result processing, as well as more accurate uptake data

**for** BSOs, GPs, patients and the breast screening programme.

**We will know this is true** when we receive quantitative and qualitative feedback from GPs, BSOs and patients that the new process is working better for them.

## The emergent user needs

There is a wide range of job roles within GP practices and BSOs. We are deliberately using broad user types ('GP administrator' and 'BSO') until we learn more.

### As a GP administrator

- I need an easy way to process and file medical reports so that I can focus on providing care to patients

- I need to identify patients who miss screening appointments so that I can understand their reasons and support them to attend

### As a BSO

- I need breast screening results to be reliably stored so that GPs and patients can access them when needed, rather than having to request this information from us

- I need an easy, cost-effective and reliable way to share screening results with patients so that they feel reassured and know what, if any, action to take

- I need an easy, cost-effective and reliable way to share screening results with GPs so that the patient screening record is accurate for future screening

- I need GPs to help identify people who haven’t attended screening so that GPs can encourage them to attend

## Next steps

We still need to synthesise findings from over 25 conversations with BSO staff, GP staff and internal colleagues.

![Zoomed out view of the mural board showing many post-its](mural-data-zoomed-out.jpg 'Work still needs to be done to synthesise data into insights')

The survey responses from 33 BSOs will help us progress the economic analysis of a potential solution.
