---
title: Insights and opportunities for sharing breast screening results with GP surgeries
description: What we learned from speaking to breast screening offices and GP surgeries
date: 2025-06-10
author: Veronika Jermolina, Selina Mahar
tags: 
  - breast screening
  - GP results
  - NBSS
---

In our [previous design history](https://design-history.prevention-services.nhs.uk/explore-team/2025/04/finding-the-right-solution-for-sharing-breast-results-with-GPs/) we described what an alpha team taking our discovery work forward would need to solve. At that point we still needed to synthesise findings from over 40 conversations and emails with breast screening office (BSO) staff, general practice (GP) staff and internal NHSE colleagues.

In this post we'll share:

- what we learned from those conversations
- where we think there are opportunities for improvement
- what we propose to do next

## Accessing data in legacy systems is difficult

Once a participant has been screened, the BSO will send the result both to the participant and their GP. If the participant didn't go to the screening appointment, the BSO will send what is known as a 'did not attend' or 'DNA' result to their GP.

To send these results, 2 separate PDF reports are generated in a legacy system called NBSS. One for screening participants (SMSTA) and one for GP surgeries (SIL). We focused on the GP reports.

Here is an example of PDF results using test data.

![Sample results](sample-normal-and-dna-result.png "Left: A PDF report for a participant showing that they were screened and had a 'normal' result. Right: A PDF report showing that a participant did not attend their appointment")

Because NBSS generates these reports in PDF, BSOs have struggled to find a way to automate the process of sending participant results to GP surgeries. The main problem that BSOs have faced is accessing the data held within NBSS in a format that would allow them to integrate with other digital services.

Some BSOs told us that this leads to them being locked-in to certain printing suppliers. Even when their trust moves on to different ones. Whilst other service communications within trusts have been digitised, breast screening has been unable to.

**Most of the 3 million annual breast screening results are sent to participants and GP surgeries using paper.**

![Printer with paper](printer-in-a-BSO.png "Image description: Results are printed on perforated paper at a BSO")

## BSOs are doing everything they can to avoid human error

We heard that dealing with breast screening results relies on 'triple checking', 'eyeballing' and 'auditing', which is stressful and exhausting for BSO staff who are battling with this manual process to avoid human error.

![Paper trays at a BSO](letter-drop-front-desk.jpeg "A paper tray in a BSO asking participants to leave their invitation letters")

Some BSOs, tired of waiting for a national solution, are creating their own. For example, at University Hospitals Sussex NHS Foundation Trust the breast screening services developed a digital system to share results with GP surgeries using Crystal reports.

## GP surgeries battle with paper piling up on desks

On the other side of this, admin staff in GP surgeries receive an influx of paper results for their eligible breast screening participants every 3 years. We heard that this is unlike bowel cancer screening results that come in 'dribs and drabs' and are easier to handle.

![GP system demo](MESH-demo-4.png "A GP staff member shared their screen with us to show how they receive breast screening results. SystmOne is the GP system on the left, and on the right is a test-data PDF screening result.")

One practice showed us how pathology test results can be auto-filed after having rules applied to them. They said:

> "Bowel and cervical results come through already coded, so there is no burden or responsibility on staff to pick the right code - it just needs filing."

But for breast screening results each letter or PDF result must be individually added to the patient's record and coded with the correct SNOMED code. Adding a SNOMED code means the result is searchable within a patient's record.

Despite their best efforts, GP surgeries simply cannot keep up with the paper and PDFs they receive from breast screening as well as from hospitals and other services. One GP staff member told us that their practice receives 300 letters and emails a day. Some employ clinical coders specifically to deal with them.

We heard:

> "every single service is reporting to us, whether needed or not"

and:

> "As much as everybody is aware of the importance of this, unfortunately what we found is that having dedicated people in practises to sit and manually put that information onto the system, it sometimes gets delayed due to staff absences, other priorities in the practice. Some practices just simply cannot keep up with it."

One BSO told us that they surveyed GP practices and found that many:

- don't know what these reports are
- don't receive the reports
- don't do anything with the information they receive

## Results aren't coded in a consistent way

We heard that there's no national guidance on which SNOMED codes to use for breast screening results. So those GP practices that do attempt to diligently record results create their own coding standards.

> "I think it's the assumption that all practices know what codes should be being used and when they should be being used. But it's not like that."

This local coding is often applied inconsistently, potentially leading to years of inaccurate coding in some practices.

## What this means for screening participants

There's a risk of people being invited to screening when they're not due. For example, one BSO invited everyone who hadn't attended breast screening based on their GP patient records. But they had been screened the year before. The BSO then received a huge number of calls from participants trying to book appointments. But most of these participants didn't need to be screened.

We heard that the system for routine screening, NBSS, doesn't interact with systems for symptomatic services. So a person who is under the care of a different pathway might be invited for a routine screening when they shouldn't be.

There's also a risk that participants who are eligible for additional support might not be receiving it. Some cancer care coordinators rely on pulling reports of patients who have had a recent diagnosis to see who needs support. If a participant's abnormal result wasn't entered on their GP record, for example, they would not appear on those reports.

## National screening uptake data is inaccurate

The inconsistent coding of participant results means that data on screening uptake is inaccurate. This is true on both a regional and national level.

Even where GP surgeries are working hard to code participant results, there's a delay in the data because of the backlogs that staff are working with.

> "We've got a very big practice that's got 20,000 patients, they had just over 1,000 patients to be screened who were eligible in their last round, which was November... They've not yet got through all of that coding just because it's hundreds and hundreds of manual entries to get them in. So our data... isn't up to date. I can't rely on it yet because that data lag is there."

This makes it much harder for BSOs and GP surgeries to design local interventions to target areas or segments of the population who don't attend screening. Unlike other screening services, such as bowel screening, GPs won't always know if a patient has attended their screening appointment.

> "So if Mrs. Jones came and is really reluctant to have [their] breast screening, there's no conversation happening [with a clinician] because it's not on the system"

## There are clear opportunities for improvement

Moving from a largely paper-based process of sending and posting results to GP surgeries to an automated digital service would save on the cost of printing and staff time. It would remove the stressful burden on staff of triple checking paper results and manually coding to patient records.

We estimated that the benefits of a solution will result in:

- 152,000 GP staff hours saved annually, an equivalent of £1.3 million
- £333,000 of reduced letter spend by BSOs or trusts

There is also an opportunity to create more accurate breast screening data on a national level.

Having more accurate data would mean the right people would be invited. We would have better visibility of people who don't attend their screening appointment. And better visibility would allow us to open a dialogue with those people to understand their reasons for non-attendance.

Through targeted interventions we could reduce inequalities and increase screening attendance.

![Main benefit is better patient data](our-focus-on-better-data.png "A diagram showing the anticipated benefits of improving the accuracy of screening data")

Improving our data would also mean improving patient care. Providing primary care networks with accurate and up to date data would enable them to better support participants with a cancer diagnosis.

Through exploring how breast screening results are shared with GP surgeries we saw a clear example of the change needed to support the government's shift "from analogue to digital." In turn, this will drive another shift "from sickness to prevention" through early detection and treatment.

## What's next?

The underlying change needed is not easy.

Participant results and GP results need to come from the same source of data (currently NBSS). If that source changes, it needs to change for both recipients.

There might be more dependencies that we need to be aware of. For example, we heard that BSO communications are entangled with the wider trust communications.

Because the reality on the ground is complex and varied, we are proposing a 'test and learn' approach. We'd work with one or a small number of BSOs to design a solution that works for them.


![Focus on MVP](MVP.png "A chart showing the number of users on one axis, and time on another. The minimum viable product (MVP) starts early on with a small number of users. As time goes on the number of users increases as we learn more and become more confident in our solution. Concept credit: Richard Pope")

## Change is going to take time

We know there's an urgent need for a solution for both BSOs and GP surgeries. Their current processes and systems are frustrating, time-consuming and holding them back from innovations that could improve patient care.

The problems that the PDF reports from NBSS create are just one part of a bigger and more complex picture. The GP IT suppliers, who control data in the patient record, would also need to be involved to fully solve the problem of sharing results with GP surgeries. We are dependent on them to add any potential solution to their roadmaps.

Next, we need to understand if we can design an intermediate solution to this problem. Or if the solution will be found as part of replacing NBSS which NHS England has just announced. Both approaches will have their pros and cons.

## A thank you

Since we started this work, we connected with over 100 people. Face to face, in remote meetings, via email and chat.

We spoke to people who work in breast screening offices and units, general practice and primary care networks. Some of the people we spoke to are internal colleagues - clinicians, policy, digital and design specialists.

If you're one of these people - thank you.

## Take part

We will need input from our users to build a viable solution.

If you want to have a say in this work, email us via [england.digitalscreening@nhs.net](mailto:england.digitalscreening@nhs.net) 