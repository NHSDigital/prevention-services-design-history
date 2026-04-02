---
title: Antenatal screening data discovery
description: Investigating the screening pathways and their complexities, to improve the end-to-end antenatal journey.
date: 2026-03-31
tags:
  - antenatal screening
  - Digital Child Health
  - antenatal
author:
 - Dani Turner
---
 

Every year, thousands of pregnant women undergo antenatal screening, including tests for infectious diseases, sickle cell and thalassaemia, and fetal anomalies. While these pathways largely function well in practice, the data that supports national oversight is fragmented. 

Screening data is captured across multiple systems used by maternity services, laboratories, ultrasound and child health teams, which do not reliably share information. As a result, monitoring screening activity and standards is heavily reliant on manual processes and aggregate reporting. 

This discovery seeks to understand how antenatal screening data is currently captured, reported and used, and where improvements could reduce manual effort and improve the way national reporting is produced. 

### What we wanted to learn 

This discovery has set out to establish a clear, evidence‑based understanding of the current state of antenatal screening data, in order to inform future decisions and investment appropriately. 

Specifically, we wanted to understand: 

- How antenatal screening data is currently captured, reported and used across fetal anomaly screening programme (FASP), infectious diseases in pregnancy screening (IDPS) and sickle cell and thalassaemia screening pathways 
- How current screening pathways operate end‑to‑end, including key decision points, handovers and dependencies 
- Where data breaks down across capture, transfer, reconciliation and reporting 
- What drives delay, duplication and manual effort, and which issues are systemic rather than local 
- Which problems are primarily rooted in process design, data standards, technology constraints, governance or workforce capacity 

The overall approach to addressing these issues includes three related strands of work, of which this discovery is one. The discovery focuses on building the evidence needed to assess the potential long‑term value of a failsafe‑type approach, rather than assuming a solution upfront. Alongside this, we also sought to identify opportunities for: 

1. Immediate improvements to existing processes 
2. Medium‑term improvements in how data could be collected using the Maternity Data Set 
3. Longer‑term options for more automated and interoperable data collection to support screening delivery and reporting 

### What we have learnt so far 

Evidence to date has been gathered through: 

- Antenatal Screening Systems Workshop (04 Feb 2026), including strengths, weaknesses, opportunities and threats (SWOT) capture and group discussion
- Review of antenatal screening data landscape and analytics insight documentation
- Interviews with NCARDRs team and Data Architecture team
- ACE discovery commissioning requirements
- Early discovery planning, stakeholder identification and mapping activity

### Current state and flows

Across the antenatal screening pathways mapped so far, we observe a broadly consistent journey: 

1. entry into maternity care and pathway 
2. offer of screening 
3. sample or test collection 
4. laboratory processing and result generation 
5. result receipt and interpretation 
6. follow‑up actions and referrals 
7. aggregate reporting and submission 
8. national analysis and publication 

High‑level workflows have been mapped for IDPS, Sickle Cell and Thalassaemia, and FASP, demonstrating the complexity of each pathway, the volume of decisions involved, and the number of handovers between teams.  

[View infectious diseases in pregnancy screening process (PDF)](IDPS.pdf)

[View sickle cell and thalassaemia screening process (PDF)](SCT.pdf)

[View fetal anomaly screening programme process (PDF)](FASP.pdf)

Even when considering the “happiest of happy paths”, where all processes occur as expected for a standard full‑term pregnancy, the end‑to‑end journey relies on multiple systems and manual coordination to appear simple to the expectant parent. 

[View happy path process (PDF)](HappiestofHappyPaths.pdf)

 

### What we know about the data 

At present, there is no single source of truth for antenatal screening data. Data is distributed across: 

- maternity EPRs 
- laboratory Information Management Systems (LIMS) 
- ultrasound systems 
- child Health Information Systems (CHIS) 
- spreadsheets and reporting templates 

Key data objects include patient identifiers, pregnancy episodes, screening offers, samples, results, follow‑up actions and reporting aggregates. Data movement relies on manual email submissions, file exports and partial feeds, with limited automation and validation. 

This creates known data quality risks, including missing fields, inconsistent SNOMED capture, delayed availability and duplication. The overall dataset reflects a significant volume of testing, diagnostics, interventions and referrals across a single pregnancy journey. 

 
### Findings so far and known truths 

The facts:

- reporting relies heavily on manual Excel templates and email submissions 
- data is predominantly collected at aggregate rather than person level 
- systems do not interoperate reliably end‑to‑end 
- screening SNOMED codes and MSDS screening fields are inconsistently populated 
- analytics capacity is dominated by data collection and cleansing activities 

The impacts:

- significant manual reconciliation effort across maternity and national teams 
- delays to insight, assurance and response 
- limited ability to reliably track individual screening journeys or transfers between services 
- reduced confidence in the timeliness and completeness of national reporting 

 

### The causes of what is happening 

Initial root cause hypotheses are grouped below. The understanding levels indicate the maturity of our understanding, not the importance of an issue. They will be refined as discovery progresses: 

- people: workforce fragility and varying confidence in digital solutions (our understanding - high–medium) 
- process: manual submission model and multiple data entry points (our understanding - high) 
- technology: multi‑system landscape with limited interoperability (our understanding - high) 
- data: aggregate reporting and inconsistent coding (our understanding - medium–high) 
- governance: unclear ownership and slow dataset change cycles (our understanding - medium) 

### What we are doing next 

The next phase of discovery will focus on strengthening and validating our understanding through further evidence gathering and analysis. Planned activities include: 

- Validating key failure points through interviews and service shadowing with maternity, screening, laboratory and analytics teams 
- Profiling sample data extracts to quantify data quality, completeness and timeliness issues 
- Confirming the minimum dataset required to support programme assurance and standards reporting 
- Testing non‑technical improvements, including process changes, reporting templates and validation rules 
- Continuing weekly discovery playbacks and fortnightly steering to review evidence, manage risks and maintain governance 

This approach will allow us to build a more robust, evidence‑based understanding of feasibility, value and risk, ensuring that any future decisions are proportionate, appropriate and focused on addressing the real underlying causes of the issues observed. 
 

### Further reading 

The full picture known by us to date is captured in the Mural below. This covered the key screening pathways detailed earlier in this page, as well as a breakdown per trimester of what tests and screening is conducted at each stage. 

[Full view of the antenatal screening pathways, including a breakdown by trimester](AntenatalPathwaybyTrimesterFull View.pdf) 

You can also review the outputs from our SWOT workshop either through the links below or on this Mural board. This incredibly insightful session allowed us to understand the breadth of the issues at hand. 

[Full view of the data captured during the SWOT analysis workshop](SWOTAnalysis.pdf)