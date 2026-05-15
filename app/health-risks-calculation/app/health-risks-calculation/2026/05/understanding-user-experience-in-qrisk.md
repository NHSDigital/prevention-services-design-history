---
title: Understanding user experience in QRISK
description: Insights from user research exploring how QRISK is used in practice, and what this means for designing a safe, sustainable future model.
date: 2026-05-15
tags:
  - QRISK
  - User research
  - Primary care
  - Prevention
  - NHS
author:
  - Michael Watson
---

We are working on the future of QRISK, a cardiovascular risk calculator that predicts a person's risk of developing a heart attack or stroke over the next 10 years. QRISK is used daily by GPs, nurses, pharmacists and practice teams to support prevention. It plays a crucial part in NHS Health Checks, decisions about statins, and conversations about behaviour change.

Although QRISK is critical clinical infrastructure, its current provision is fragile. QRISK2 is embedded across GP systems but is no longer recommended for use by NICE. QRISK3 is recommended but not integrated in GP IT, which leaves clinicians reliant on manual, error prone workarounds. Our work set out to understand how QRISK is actually used in practice today, and whether there is a valuable role for NHS England in enabling safe, sustainable access to risk calculation nationally.

This design history focuses on what we learned about users’ lived experience of QRISK, and how that shaped our approach to designing a future operating model for QRISK3.

## Understanding the users of QRISK

As well as reviewing a large body of existing literature, we conducted in depth qualitative interviews with 8 practising GPs, a clinical pharmacist and a nurse practitioner, supported by live demonstrations of QRISK in GP IT systems (EMIS and SystmOne). We also spoke with risk model creators, including the original author of QRISK, and surveyed 46 GP practice managers to understand operational realities at practice level.

We learned that QRISK is used:

- opportunistically and proactively  
- one by one and in batches during blood and lipid results processing  
- across multiple roles  
- inside practice-managed recall and follow-up processes  
- under medico legal scrutiny  
- in conversations that can influence behaviour change  

![A diagram showing the main use cases for QRISK, including 1) results return from Lipid Profile and check needed for statins, 2) NHS Health Check, 3) Patient presents with symptoms, 4) NHS Health Check online, 5) Checking a cohort.](app/health-risks-calculation/app/health-risks-calculation/2026/05/QRISK-use-cases.png)

To make sense of this complexity without losing richness, we adopted an analysis framework structured around 7 lenses:

- goals  
- behaviours  
- emotions  
- mental models  
- pain points  
- contexts  
- tasks  

We wrote about the benefits of using this approach in [a previous design history](https://design-history.prevention-services.nhs.uk/lung-health-check/2026/03/beyond-user-needs/).

## What we learned about clinicians’ experiences

### Goals: what users are trying to achieve

Clinicians are primarily trying to make safe, defensible prevention decisions under severe time pressure. QRISK is valued because it helps them decide who needs action now, who can safely wait, and who does not warrant follow up. They do this based on [thresholds recommended by NICE](https://www.nice.org.uk/guidance/ng238).

Alongside this, many clinicians are using QRISK proactively. They described using it to identify people earlier, intervene before events occur and reduce future cardiovascular disease, particularly in deprived populations.

Another key goal is supporting behaviour change and shared decision making, especially around statins. QRISK is often used as a way to frame conversations about primary prevention, whether those are centred on lifestyle advice or medication.

### Behaviours: how users act within the ecosystem

QRISK is most commonly run during results processing, particularly when lipid results return. This can happen at scale, often dozens of times in a single session.

Pharmacists, nurses and admin teams absorb much of the manual and follow up work, recalculating scores, sense checking data, managing recalls and coordinating appointments.

Although QRISK can be used opportunistically in consultations, this tends to happen only when clinicians have capacity. Browser based QRISK3 is avoided unless absolutely necessary.

![A screenshot of the browser based QRISK3 calculator, which is currently not embedded in GP IT systems.](app/health-risks-calculation/app/health-risks-calculation/2026/05/QRISK3-calculator.png)

### Emotions: what users feel throughout the journey

We saw a mix of frustration, anxiety and pragmatic acceptance.

Clinicians expressed frustration with inefficiency and duplication, particularly where manual workarounds are required. Some voiced strong anxiety about missed risk, under treatment and future harm to patients.

There was also a recurring sense of discomfort and even shame about using outdated tools that no longer reflect best practice, and about knowing some patients may not be receiving optimal care as a result.

Despite this, clinicians often accept imperfect solutions in order to keep work moving.

### Mental models: how users think the system works

Clinicians consistently frame QRISK as a probabilistic heuristic – a rule of thumb that gives them “good enough guidance”, as opposed to a precise prediction.

Embedding matters deeply. If a tool is embedded in GP IT systems, it is assumed to be safe, legitimate and defensible. If it is not embedded, as is currently the case with QRISK3, it is treated with suspicion, regardless of its theoretical accuracy.

Risk scores are only seen as meaningful if they are linked to action. A percentage without a pathway is considered pointless, and in some cases actively harmful. One GP compared this to the film ‘Gattaca’, where people are told who they are destined to be, without hope or agency.

Clinicians also told us that scores matter most when they can be connected back to underlying, modifiable risk factors, which help them explain what is driving risk and what can realistically be changed.

### Pain points: where things break down

The strongest and most consistent pain point was that QRISK2 underestimates risk for key cohorts, particularly people with serious mental illness.

Manual QRISK3 use was widely seen as unsafe, introducing transcription errors and legal risk.

Many clinicians also struggled with opaque data provenance and inconsistent coding, especially when picking up work started by someone else.

### Contexts: situations shaping experience

QRISK is used in high volume, interruption heavy environments, often while processing large numbers of results. Clinicians work within fixed appointment lengths and across mixed teams with varied roles. They often manage patients who rarely engage with healthcare, using QRISK opportunistically as a re engagement hook.

Admin recalls, searches and local initiatives strongly shape how QRISK is used, sometimes more than clinical preference.

### Tasks: what users are actually trying to do

On a practical level, users are trying to:

- identify patients who may need cardiovascular prevention  
- quickly judge whether risk is high enough to act on  
- decide whether more data is worth collecting  
- translate risk into conversations patients can engage with  
- have nuanced, trust building conversations about statins  
- discussing lifestyle changes with patients  
- move patients into appropriate follow up pathways  
- document decisions clearly so others can pick them up  

## How this research shapes our next steps

Looking across these 7 lenses gave us a much more complete picture of how QRISK functions as real clinical infrastructure, and how it is shaped by compromise, professional judgement and system constraints. This analysis reinforced that providing an improved way of using QRISK is a crucial challenge for design, governance and clinical safety.

This research helped us move from asking whether NHS England should play a role in QRISK, to starting to define what that role might look like in practice. Our immediate next steps are to progress a first QRISK3 use case integrated with NHS Health Check online, engaging GP IT suppliers on a viable integration approach, and preparing the regulatory and safety artefacts required for QRISK to operate as Software as a Medical Device.
