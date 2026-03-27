---
title: Antenatal Screening Data Discovery
description: Investigating the screening pathways and their complexities, to improve the end-to-end antenatal journey.
date: 2026-03-27
tags:
  - antenatal screening
  - Digital Child Health
  - antenatal
author:
 - Dani Turner
---


## Antenatal Screening Data Issues 

### The Problem

Antenatal data is currently collected and reported through multiple systems and processes, which means national oversight is largely based on aggregate rather than personal level views. The data today is fragmented across various local systems and rooted in heavy reliance on manual processes. As a result, the process of producing reports which provide an oversight of screening activities and enable programme teams to monitor standards and trends, is very manual and time consuming for both maternity teams and analytics teams.  

This discovery hopes to establish a clear, evidence-based understanding of how antenatal screening data is currently captured, reported and used, and where improvements could be realised, to help the analytics teams produce their reports in more efficient ways. The discovery will identify where data breaks down, what drives delay and duplication, and where common pain points are found within the workflows.  

The overall approach comprises three related stands of work, of which this discovery is one. The discovery focuses on building evidence to assess the potential value of a failsafe-type approach, rather than assuming a solution upfront. To address the issues outlined above, the three focus areas are: 

- First, Immediate Improvements: What immediate improvements could be made to the current processes used to collect data and create reports. 

- Second, Medium Term Improvements: How might the data required, to monitor antenatal screening, be collected using the Maternity Data Set? 

- Third, Long Term Solution - Discovery to understand the value of developing a solution dedicated to collecting the relevant data, supporting the management of antenatal screening and resulting in more consistent and automated ways of collecting data and reporting on the programme's delivery.  

The intent is to build an evidence-based understanding of feasibility, value and risk, to ensure decisions about changes are informed, appropriate and future proofed. 



## Discovery so far

This is our current‑state learning from early antenatal screening data discovery work. Right now, we are focused on the near term and immediate improvement phase, but these valuable insights will help support later stages of this work. 

It brings together evidence from workshops, existing documentation and early mapping to describe how data is currently captured, reported and used for the antenatal pathways.

### Why now:

Continued service pressure and workforce fragility mean the risks of poor data visibility are growing, all while decisions on future investments and commissioning require a solid evidence base.

### If we don’t do this:

There is a high risk of investing in the wrong solutions and increasing the burden on maternity and analytics teams without resolving the underlying problems.

### The scope for our discovery to date

- Data captured across maternity services, laboratories, ultrasound and supporting systems
- Data reporting for quarterly and annual programme standards
- Data usage for programme assurance, analytics and insights

### What we have not scoped for initial discovery, but what will be investigated going forward

- Defining short and mid-term solutions
- Long-term design or commissioning of a specific digital solution or failsafe system (how we future proof a solution)
- End‑to‑end maternity transformation
- Redefinition of national clinical standards
- Patient‑facing product design


## Our Methods

### Evidence has been gathered through

- Antenatal Screening Systems Workshop (04 Feb 2026), including SWOT capture and group discussion
- Review of antenatal screening data landscape and analytics insight documentation
- Interviews with NCARDRs team and Data Architecture team
- ACE discovery commissioning requirements
- Early discovery planning, stakeholder identification and mapping activity

You can review our initial evidence gathered here: [Discovery Artefacts](https://nhs.sharepoint.com/:f:/r/sites/X26_Digital_Prevention_Service/Shared%20Documents/DPSP%20Children%27s%20Digital%20Health%20Services/ANNB/Antenatal%20Screening/Discovery%20Artefacts?csf=1&web=1&e=lLpb4t)


## Current state & flows

What we know and have observed so far…

1. Entry into maternity care and pathway
2. Offer of screening
3. Sample or test collection
4. Laboratory processing and result generation
5. Result receipt and interpretation
6. Follow‑up actions and referrals
7. Aggregate reporting and submission
8. National analysis and publication

![](IDPS-process.png 'Screenshot of process flow in Mural of Infectious Diseases in Pregnancy Screening') 

![](SCTS-process.png 'Screenshot of process flow in Mural of Sickle Cell and Thalassaemia Screening')

![](FASP-process.png 'Screenshot of process flow in Mural of FASP Screening')

These are the Infectious Diseases in Pregnancy, Sickle Cell and Thalassaemia and FASP Screening top level workflows. These capture, even at a high-level view, the complexities of each pathway, volume of decisions and handovers between teams. Below is what we’ve dubbed ‘the happiest of happy paths’. This shows that if all processes are followed as expected and it’s a standard full-term pregnancy, how simple it should appear for the expectant parent.

![](HappyPath-process.png 'Screenshot of process flow in Mural of Happiest of Happy paths for full pregnancy screening journey')


## What we know

Currently there is no single source of truth for antenatal screening data. Data is distributed across multiple systems and manual artefacts.

### How

- Data sources: Maternity EPRs, laboratory systems (LIMS), ultrasound systems, CHIS, spreadsheets and templates
- Key data objects: patient identifier, pregnancy episode, screening offer, sample, result, follow‑up action, reporting aggregates
- Data movement: manual email submission, file exports, partial feeds or no automated movement
- Data quality risks: missing fields, inconsistent SNOMED capture, delayed availability and duplication

![](DataCollectionVolume.png 'Screenshot of the volume of data collected across the pregnancy journey broken down by screening pathways IDPS, SCT and FASP')

This captures the volume of data collected across testing, diagnostics, interventions, or treatments and referrals during a pregnancy journey.


## Findings so far and known truths

### The Facts

- Reporting relies heavily on manual Excel templates and email submissions
- Data is primarily collected at aggregate rather than person level
- Systems do not interoperate reliably end‑to‑end
- Screening SNOMED codes and MSDS screening fields are inconsistently populated
- Analytics capacity is dominated by collection and cleansing activities 

### The Impacts

- Significant manual reconciliation effort
- Delays in insight, assurance and response
- Inability to reliably track individual screening journeys or transfers
- Reduced confidence in the timeliness and completeness of reporting

### Initial Hypothesis

- Fragmented ownership between data collection and analysis
- Inconsistent adoption of standards and coding practices
- Supplier and interface constraints across systems
- Workflow design and workforce capacity pressures


## Provisional Pain Points and User Needs

The user needs listed below are indicative only and require further validation and prioritisation.

- As a screening coordinator, I need a reliable way to see who is due or overdue for screening, so that women are not lost and can be followed‑up
- As a maternity team member, I need screening information captured once and to be visible across teams to reduce duplication, re-keying and chasing
- As a laboratory team, I need clear linkage between results and maternity services to reduce reconciliation delays
- As an analytics team, I need timely and structured data so efforts can focus on insights rather than data collection


## Root Cause Starting Points

Initial root cause hypotheses are grouped below. The understanding levels indicate the maturity of our understanding, not the importance of an issue. They will be refined as discovery progresses:

- People: workforce fragility and varying confidence in digital solutions (Our Understanding: High–Medium)
- Process: manual submission model and multiple data entry points (Our Understanding: High)
- Technology: multi‑system landscape with limited interoperability (Our Understanding: High)
- Data: aggregate reporting and inconsistent coding (Our Understanding: Medium–High)
- Governance: unclear ownership and slow dataset change cycles (Our Understanding: Medium)


## Decisions Made & Deferred

### Decisions Made:

- Maintain a solution‑agnostic discovery approach
- Use weekly discovery touchpoints and fortnightly steering for governance
- Require evidence and validation before any option selection

### Decisions Deferred:

- Whether a failsafe system is required
- Whether MSDS enhancement, integration or new capability is the preferred route
- Any procurement or build decisions


## Risks, Constraints & Dependencies

- Stakeholder access and capacity constraints across maternity and screening services
- IG and DPIA requirements for ability to share detailed data
- Vendor interoperability and extract limitations
- Workforce change fatigue and organisational uncertainty

Mitigations focus on early engagement, scoped discovery, collaborative evidence gathering and clear governance.


## What we plan to do next

- Validate key failure points through interviews and service shadowing
- Profile sample data extracts to quantify data quality and timeliness issues
- Confirm the minimum dataset required for programme assurance and standards reporting
- Test non‑technical improvements (process changes, templates, validation rules)
- Maintain weekly discovery playbacks and fortnightly steering checkpoints


## Further Reading

The full picture known by us to date is captured in the Mural below. This covered the key screening pathways detailed earlier in this page, as well as a breakdown per trimester of what tests and screening is conducted at each stage.

![](FullPicture-mural.png 'Screenshot of the collection of all screening process flows and additional content captured in Mural showing breadth of fact finding so far')

You can also review the outputs from our SWOT workshop either through the links below or on this Mural board. This incredibly insightful session allowed us to understand the breadth of the issues at hand.

![](SWOTAnalysis-mural.png 'Screenshot of SWOT analysis output, digital sticky notes on a mural board to capture strengths, weaknesses, opportunities and threats')