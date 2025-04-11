---
title: Design work so far
description: This is a recap of what our design team has done in Q3/Q4 2024-25.
date: 2025-03-31
tags:
  - cervical screening
  - hpv self sampling
  - research
  - workshops
---
> The UKNSC is consulting on introducing self sampling for cervical screening. Find out more: [UK NSC consults on offering HPV self-sampling option to under-screened people in cervical screening programme – UK National Screening Committee.](https://nationalscreening.blog.gov.uk/2024/12/04/uk-nsc-consults-on-offering-hpv-self-sampling-option-to-under-screened-people-in-cervical-screening-programme/)
**We are running discovery and alpha in parallel to this consultation, to prepare for potential implementation in future.**

This post summarises what the HPV Self-Sampling service is about, going into some detail about the design and research work that has been done between November 2024 - March 2025. 

## Overview of HPV Self-Sampling

### The difference between HPV Self-Sampling and Cervical Screening

[Cervical screening](https://www.nhs.uk/conditions/cervical-screening/) detects types of human papillomavirus (HPV) which can cause cells in the cervix to become abnormal. Removing these abnormal cells can prevent cervical cancer developing.​

Cervical screening is where a clinician collects a sample of **cervical cells**, which is sent to the lab and first tested for HPV. ​

- If HPV is **not found**, no further tests are conducted on the sample, and the participant is invited for cervical screening in 3-5 years time.​

- If HPV is **found**, the cervical sample will be tested for abnormal cells.​

![A diagram showing the flow of the HPV self-sampling service in the context of cervical screening](diagramhpvss.png)

In our service design, HPV self-sampling is an **at-home test** to check for the presence of HPV. The participant collects a sample of **vaginal cells**, via a swab and it is sent for analysis of HPV. ​It is not a requirement for the participant to try and reach their cervix.

- If HPV is **not found**, no further tests are conducted on the sample, and the participant is invited for cervical screening in 3-years time. ​

- If HPV is **found**, the participant will be advised to have a traditional cervical screening, where a clinician will collect a sample of cervical cells to be retested for HPV and abnormal cells ​

HPV self-sampling is **not an alternative** to cervical screening and a clinician taken sample is prefered. However, self-sampling provides an indication of whether the participant is at higher risk of developing abnormal cells which may encourage reluctant participants to attend. ​

### YouScreen pilot overview

> *"YouScreen demonstrated that for GPs, being able to offer self-sampling to under-screened women when they attend for other appointments is a pragmatic way to deliver cervical screening to those at risk"* - [King's College London](https://www.kcl.ac.uk/news/self-sampling-hpv-kits-could-screen-an-extra-million-people-for-cervical-cancer)

After the success of the YouScreen pilot in London that enabled people to complete HPV self-testing at home, the NHS wants to scale this service nationally and initially use it to address some of the barriers that non-responders have about cervical screening.​

- The YouScreen trial offered 31,000 HPV self-sampling kits in 133 GP practices across North London from Jan 2021- Nov 2021

- These were offered to women with a cervix, between 25-64 who were at least 6 months overdue for their screening

- Those invited YouScreen kits were offered in two different ways: direct posting of kits or opportunistically at GP practice​

- Self-samples were returned from:​
  - 65.5% (6061/9248) who accepted an opportunistically offered kit ​
  - 12.9% (2777/ 17,604) directly-mailed kits​

- The self-sampling intervention resulted in a 22% increase in non-attenders screened per month​

[The research findings from the YouScreen Nov 2021 Pilot](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(24)00251-7/fulltext)

### What our team will explore during Alpha

The below demonstrates the proposed high-level service we will be exploring throughout alpha, and to be tested during private beta. This is a simplified happy path and does not depict every communication channel or reminder message, as well as unhappy scenarios. 

![Simplified service journey](simplifiedjourney.png)

### Timelines

This is subject to change based on UKNSC decisions and dependencies on procurement of the kit provier, lab logistics and technical development.
​
## Service design and research activities so far
Time period: November 2024 - March 2025

In the past 6 months, we have completed an extensive review of existing medical journals, case studies, articles and more, to understand the ecosystem of cervical screening and barriers people have related to attending these appointments. We have compiled everything into a seconday research report. We have also ran various stakeholder workshops and worked on artefacts for:

- Market research and benchmarking
- User demographics matrix
- Hypotheses and risky assumptions documentation​
- WIP Service blueprints
- Experience Based Maps with OKRs​
- Process flows and high-level user flows​
- Unhappy paths mapping and prioritisation
- COM-B model for behavioural change strategy


**Research done so far:**

- 1 Qualtrics surveys sent out to NHS App panel
     - Aim: To understand user needs surrounding HPV self-sampling and how personalisation within the NHS App, could be used to drive uptake and awareness of HPV self-sampling, alongside traditional cervical screening.
     - 240 participant responses 
- 1 Qualtrics survey sent out to Lived Experience panel and Citizens Panel
     - Aim: To gather more information on how much users understand about HPV in the context of cervical screening, preferences for receiving inivtations and messages about the service and explore user motivations
     - 391 participant responses
- 1 unmoderated research study with 32 participants
- 1 pop-up research study with 27 participants across 5 locations in Leeds

### What we have learned so far and design decisions

#### First iteration of design

In the first iteration, we explored:
- Different ways we can write the invitation to the service, looking at the barriers, myths and misconceptions people have about HPV and cervical screening​
- We looked at all the channels we can use to send the invitations out: App message, SMS, email and letter. We are also collaborating with the CSMS Notify UCD team as they are conducting research into the digitalisation of cervical screening invitation, reminder and result letters.
- The flow of questions and branching in the journey (happy and unhappy paths, NHS App focused)​
- Patterns for verifying someone's address, asking for a new address, confirmation pages​
- Brainstormed the name of the programme and the service (public facing)
- Brainstormed all the content we may have to write for this service

![](Slide26.jpg)


**Design findings and decisions made based on the unmoderated research findings**

To improve the user experience in screening programs, content should clearly communicate age eligibility and the reason for the invitation, ideally in a personalized way. If possible, pre-filling addresses from NHS records could reduce confusion and effort, while clarifying that any delivery address is acceptable and not system-updating. Confirmation pages could benefit from showing an order reference and delivery address, aligning with user expectations. Clear signposting to traditional screening options reassures users, and additional detail about timelines and results can help manage expectations across the process.


#### Pop-up research study - March 2025

With this round of research, we focused solely on invitation content, to better understand which content users engage with and why.  ​

**Research aims**

- To better understand user needs for an invitation to take part in HPV self-sampling​
- To engage with a more diverse participant pool, including non-responders to cervical screening and understand preferences on being invited to take part in HPV self-sampling.​

**What did we test​**

- Invitation options through different channels, such as NHS App, email and SMS.

**Design findings and decisions made based on the unmoderated research findings**

Several content strategies have shown promise and continue to be refined. Clarity around HPV and its link to cervical screening is vital—spelling out "human papillomavirus" and offering supportive visuals or diagrams can aid understanding. Participants value transparency about process steps, timing, and trust indicators (e.g., NHS branding or GP endorsements). Accessibility remains crucial: providing skimmable formats, language support, alternative kit access points (like pharmacies), and upfront information helps diverse user needs. Improving trust, digital usability, and clarity around self-sampling can enhance confidence and engagement with screening invitations.

**What's next**

- Iterate content to better align with user needs and ensure clarity. Insights from the research have guided refinements in language, structure, and tone to improve understanding and engagement.​
- Conduct content concept testing to assess how users respond to different messaging approaches​
- Highlight testing to identify which parts of the content are most effective and engaging.​
- A/B testing on invite content to determine which version drives higher participation and resonates best with users.​
- Accessibility testing, to better understand how longer content performs