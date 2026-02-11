---
title: "Co-designing better diabetic eye screening: insights from frontline providers"
date: 2026-02-11
author: Harleen Kaur Dhillon
tags:
  - discovery
  - cohort manager diabetic eye screening
---

To ensure our emerging ideas were grounded in operational reality and reflected the lived experience of those delivering diabetic eye screening, we worked with Cohorting as a Service (CaaS) to host focused co-design workshops with NEC (OptoMize Software providers). As well as providing valuable insight into day-to-day operational challenges, these sessions helped establish strong foundations for ongoing collaboration with NEC as we design and develop the new pilot process, validating existing assumptions and highlighting where current systems and processes place unnecessary burden on providers.

Across the discussions, diabetic eye screening programme (DESPs) shared practical examples of where data gaps, system limitations, and manual workarounds affect service delivery, patient experience, and compliance with programme requirements. The workshops also helped surface opportunities for improvement that could be explored within current and future delivery phases.

Across the sessions, discussion was structured around three core themes:

1.	operational challenges faced by DESPs
2.	data, system, and information gaps
3.	opportunities to reduce burden and improve delivery


## Key themes from DESP engagement

### 1. Operational challenges faced by DESPs

- DESPs described several operational challenges that introduce friction into everyday service delivery and increase reliance on manual workarounds.

- Technical issues with message excahnge for social care and health (MESH) were highlighted as a significant operational burden. These issues resulted in the need to purchase additional infrastructure, including a server, with CaaS required to investigate and support resolution.

- Limited visibility of patient needs also impacts frontline delivery. DESPs do not consistently know whether a patient has learning disabilities or is wheelchair bound, making it harder to plan reasonable adjustments and deliver accessible screening services.

- Certain patient groups fall outside standard automated pathways. Homeless individuals and asylum seekers require manual handling within DESP processes, increasing administrative effort and creating variation in how cases are managed.

- DESPs also face pressure from time-critical requirements. New patients must be seen within 89 days, but uncertainty around patient status and delayed updates make it difficult to manage this confidently and increase the risk of breaches.

- Exceptional scenarios further complicate workflows. Patients may be banned by their GP due to poor behaviour; however, DESPs felt strongly that if these patients engage appropriately within DESP services, they should not be automatically removed from the screening register.


### 2. Data, system, and information gaps

- Across discussions, DESPs consistently highlighted gaps in data quality, visibility, and system behaviour that undermine confidence in cohort accuracy.

- Key clinical information is often missing or unavailable. This includes diagnosis codes, diagnosis dates, and clarity on whether a patient has Type 1 or Type 2 diabetes. In the absence of this information, staff must spend additional time investigating and validating records manually.

- There is also limited transparency around patient lifecycle events. DESPs do not have visibility of why a patient has been deleted or when a patient has moved, leading teams to investigate missing patients whose records have changed elsewhere in the system.

- Death status and record handling were identified as particularly complex areas. Although a two-stage deceased status already exists within the software, transitions between informal and formal death are not always clearly surfaced or monitored. In some cases, patients marked as deceased in OptoMize reappear as new patients in the subsequent GP2DRS extraction, creating confusion and rework.

- Record supersession presents further challenges. When a record is replaced, it is unclear what information carries forward. While screening history and results are transferred, DESPs would prefer existing records to be updated rather than creating new ones. NHS numbers are not fully locked within OptoMize, meaning amendments often require manual intervention via the helpdesk, increasing administrative burden and the risk of duplication.

- Workshops also highlighted inconsistencies caused by differing patient registration behaviours. Patients may live in one area but attend screening in another, commonly seen with university students who have both home and term-time addresses. In addition, de-registration can take up to three years in some cases, further complicating cohort accuracy.

- An edge case was discussed where demographic details change within DESP systems but not within GP records, creating discrepancies that are difficult to reconcile.


### 3. Opportunities to reduce burden and improve delivery

- DESPs identified several opportunities where improvements could reduce manual effort, increase confidence in data, and improve overall service delivery.

- A key requirement is the ability to clearly identify whether a patient is a genuinely brand-new add who has never previously been part of the cohort, versus a returning patient with a new NHS number. From a programme perspective, improved visibility of NHS number changes is essential to ensure continuity of care and prevent unnecessary duplication.

- There is also strong interest in automating and monitoring key transitions, particularly the movement from informal to formal death. DESPs emphasised the value of understanding what triggers patient adds and deletes, especially following death status changes, to reduce investigation work and improve trust in system behaviour.


## Next steps

- Investigate the exclusion of S-flagged records, recognising that these are currently handled differently across providers (DES team to investigate).
- Confirm whether legal or information governance constraints prevent S-flagged data from flowing into DESP. CaaS cannot identify an S-flagged record, it will continue to be sent as a delete.
- Work with CaaS to assess which pain points can be addressed within the current MVP, identifying:
1. 	Requirements in scope for MVP
2.	Requirements suitable for post-MVP delivery
3. Requirements that may be out of scope due to capacity or constraints

