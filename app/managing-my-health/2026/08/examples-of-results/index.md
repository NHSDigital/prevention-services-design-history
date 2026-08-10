--- 
title: How the NHS App presents different prevention service results
description: There isn’t a consistent pattern for how results from prevention services are presented in the NHS App. We’ve taken a look at the different ways.  
date: 2026-08-10 
tags:
  - GP results
  - NHS App
  - research
  - results
  - test results
author:
  - Alistair Ruff
opengraphImage:
  src: /managing-my-health/2026/08/examples-of-results/cervical-emis-results-opengraph.png
  alt: Cervical screening results as they appear for users whose GP practice uses the EMIS IT system.
---

As part of our discovery into [helping users do more with test results](/managing-my-health/2026/07/helping-users-do-more-with-results/), we mapped out how results for prevention services appear in the NHS App. 

We focused on two areas: adult screening and NHS Health Check Online. Looking at several examples highlights how different services approach results and some of the challenges and opportunities that remain. 

To help visualise the results we looked for examples, whether anonymised real results or example results which contain no real data. For some services this wasn’t possible, or it was only possible for a small number of the possible result types. 

The fact that it's not practically possible to replicate how a test result will appear for every service, for every user of the NHS App reflects the many variables involved in how a result is presented, for example, which lab processed the test results or which IT system someone’s GP uses.

## Cervical screening test results 

Cervical screening results include a test for high-risk HPV and, if positive, an examination for abnormal cells (cytology). Both tests are completed by the same lab using the same sample taken at the cervical screening appointment. 

Results fall into four categories:

* Inconclusive result 
* HPV negative – No cytology 
* HPV positive – Normal cytology 
* HPV positive – Abnormal cytology 

The interrelation between HPV and cytology, plus any additional risk factors for an individual person being screened means that there are 20 different results possible. To help users understand the relationship between these two results and what their next steps will be, results are provided via a message in the NHS App, with a fallback of a letter if someone doesn’t use the app or hasn’t read the message within 72 hours. 

The message they receive provides a lot of detail and is almost identical to the letter that the user would receive if they’re not an app user. You can [read the research](/hpv-self-testing/2025/09/ur-results-content-testing/) which informed the content in these messages.

In addition to a message at least one result will show up in the Test results section of the NHS App. Even where two results are the same, there is lots of variation possible in how those results can be presented because it is a result of:

* how humans record the data
* how systems transfer that data from the lab to the GP
* how systems transfer that data from the GP to the NHS App. 

Three examples are presented here to demonstrate the differences that are possible for users all receiving the same test result. 

![Two NHS App screenshots side by side, labelled Example 1 and Example 2. Example 1 is titled 'Cervical cytology screen test', dated 27 June 2024. Under a heading 'Your results' are two sections: 'HPV Test', with an opened 'Laboratory comment' reading 'High risk HPV NOT detected'; and 'Cervical cytology test', with an opened 'Laboratory comment' reading 'No Cytology result (HPV Primary Screening)'. A further heading, 'Management', is cut off at the bottom of the screen. Example 2 is titled 'Hum papill vir DNA dtctn assay', dated 27 August 2024. Beneath the title, a 'Healthcare professional's comment' reads '(DSP9886) – Normal – No Action'. Under a heading 'Your results' are three closed 'Laboratory comment' links, headed 'Hum papill vir DNA dtctn assay', 'Recommendations' and 'Cervical cytology test'.](cervical-emis-results.png "Examples 1 and 2: cervical screening results as they appear for users whose GP practice uses the EMIS IT system.")

The first shows an example of how a result may be presented to a user whose GP is using the EMIS IT system. It shows how an HPV result can be presented alongside a cervical cytology result as part of a single ‘Cervical Cytology Screen test’. For both tests the ‘result’ is included as a ‘laboratory comment’ – making it feel like additional information rather than the primary piece of data. This means the result is hidden inside an accordion, not clearly visible. 

The second example also shows a result received by a user whose GP uses the EMIS IT system. In this case though the title of the result has been significantly abbreviated, to such an extent that it is unintelligible to a user. This is a limitation in some GP IT systems using EDIFACT, which has a 30-character limit for some fields. The high-level result (normal – no action) has been annotated by the GP, with the specific results broken down under each test as a laboratory comment again. 

![Five NHS App screenshots in three labelled groups. The first, 'Navigating to individual results', shows a 'Test results' list for November 2023 containing two separate entries, both dated 7 November 2023: 'Pathology – PRIMARY HPV, Read' and 'Pathology – FINAL REPORT, Read'. The second group, 'HPV Results detail', and the third, 'Cytology Results detail', each show the same result page at two scroll positions. Both open with a short summary – clinician viewed 07 Nov 2023, result type Pathology, filed by 'UNKNOWN', result 'Normal', follow-up action 'No Further Action' – followed by long, unbroken blocks of text listing specimen and administrative details, including sample taker ID, GP practice location, reason for sample, specimen type, and collection and received dates. Some details are obscured by black boxes. The result itself appears near the end of each: the HPV report reads 'PRIMARY HPV, SAMPLE RECEIVED 10/11/23'; the cytology report reads 'NO CYTOLOGY RESULT (HPV PRIMARY). INFECTION HR HPV Negative. High Risk HPV not detected. RECALL 36 Months recall.'](cervical-tpp-results.png "Example 3: a cervical screening result for a user whose GP practice uses the TPP IT system – the results list, and each of the two results in full.")
		
The third example shows how a result can be presented to a user whose GP uses the TPP IT system. The results are presented as two separate tests ‘Pathology – PRIMARY HPV’ and ‘Pathology – FINAL REPORT’. They are presented next to each other because they relate to the same day, but it’s possible that they may not always be directly next to each other depending on what other test results are presented on that day. Each result contains a long, detailed set of text results. This appears to contain all of the raw data related to the test like who ordered it, the location of the GP practice, the GP’s ID number, the sample ID number – all of which is important data to ensure the accuracy of the result – but is not relevant to a user who wants to know their result. 

The variation in how lab technicians and healthcare professionals describe a cervical screening result makes it harder for users to understand their results, and their experience is significantly impacted based on which IT system their GP uses. 

## Breast screening

Breast screening (also known as a mammogram) results are presented as a scanned physical document within the Documents section of the NHS App, they do not appear in the Test results section of the NHS App because the current National Breast Screening Service does not integrate with GP IT systems. Instead the paper result will be sent to the GP, who then scans and uploads it as a document. Work on a [breast screening gateway](https://www.digital-prevention-services.nhs.uk/docs/gateway/) could change that in future.

People who have had a mammogram will also usually receive the result via an email – with the scanned document attached to the email – in addition to seeing it within the NHS App.

There are two types of results – normal and abnormal.

![Two NHS App screenshots. The first, 'Documents page', shows a list of documents with generic titles: 'Attachment added on 8 January 2026 (TIF, 11KB)', 'Attachment added on 7 January 2026 (TIF, 2.65MB)', 'Administration of vaccine added on 20 October 2025 (HTML, 5KB)', and two further entries both titled 'Attachment added on 2 September 2025'. The second, 'Breast screening result', shows a page headed 'Your attachment' containing a small scanned image of a typewritten letter from the NHS Breast Screening Programme in Kettering. The letter lists the person's name, screening number, NHS number, address, telephone number, date of birth and age, followed by 'SCREENED – ROUTINE RECALL', the date screened, and 'Opinion: No significant radiological abnormality'. It is marked 'Test data'. Beneath the scan, text reads 'You may see medical abbreviations that you are not familiar with', with a link to 'Help with abbreviations'.](breast-screening-result.png "The breast screening result in the NHS App: listed among other attachments on the Documents page, and opened as a scanned image. This example uses test data.")

This presentation of the result contains no structured data and relies on the user’s ability to read the scanned document – which could be hard on a phone or small screen – as well as interpret the different sections. Where there is a necessary next step there would be contact made by the breast screening office or GP, but the user may receive the result before this contact happens.

Whilst cervical and breast screening might operate as similar services in people’s mind because they are both national screening services provided by NHS England, the experience of receiving results is very different.

## NHS Health Check Online

Health Check Online is the digital version of an in-person health check provided by GPs for people over 40. It involves a user answering a range of questions and taking a blood pressure reading as well as two blood tests. The service is currently in private beta, so is not yet available nationally. 

After the blood samples are processed by a lab, these results are combined with the user’s questionnaire responses to calculate a risk score and provide recommendations. Users are notified of a result by a message in the NHS App, with the full result presented in another section of the NHS App – not the Test results section. 

Eight different risk results are calculated based on the data entered:

* Body mass index
* Alcohol
* Smoking
* Cholesterol
* Blood pressure
* Physical activity
* Diabetes
* Dementia

![Five NHS App screenshots showing the NHS Health Check Online results. The first is a message from NHS Health Check saying the results are ready, listing what the person can now do – view their results, find out their risk of developing cardiovascular disease, compare their heart age to their real age, and explore personalised advice – and noting the results have been added to their health record for their GP to view. The second, 'Your results', leads with a blue panel reading 'Your heart age is about 55, your age is 50', explains that this means their risk of heart disease is similar to that of a healthy 55 year old, and adds that the change is not permanent. The third, 'Your risk factors', lists each result against a colour-coded bar: BMI 27, overweight; blood pressure 140/90, high; diabetes risk, low; cholesterol 4.8mmol/l, normal. The fourth, 'Body mass index (BMI) results', shows a BMI of 27 on a colour-coded scale marked 18.5, 25 and 30, with a cross positioned in the overweight band. The fifth lists tips to help lose weight, each with a green tick, and links to NHS Better Health for weight management services.](results-health-check-online.png "NHS Health Check Online results: the message telling the user their results are ready, the overall heart age, a summary of each risk factor, and the detail and advice behind one of them.")

The results are presented with visualisations of the results which are designed by the team responsible for the service. There are many possible variations of the results depending on the answers given and the results of individual tests e.g. blood pressure, cholesterol.

These results are also shared with the GP IT system and so may then appear as individual results within the Test results section of the NHS App. Each result would be presented individually as, for example, blood pressure or cholesterol. This is separate from the main NHS Health Check Online result, and people may not immediately relate the two.

If people provide a blood pressure result that is either too high or too low, they will be triaged immediately and asked to contact their GP.

## Why seeing examples matters

For a user‑centred service, it’s hard to design and iterate well if the team can’t see realistic examples of the data people will see in the app, such as how test results are structured, labelled and explained. 

The [NHS service standard](https://service-manual.nhs.uk/standards-and-technology/service-standard) expects teams to understand users’ needs in the context of health and care and provide a joined‑up experience. This is much easier when we can work from actual result formats rather than descriptions of them. Teams working on the NHS App and in the Digital Prevention Services portfolio have started collecting these examples as a shared resource.

This also matters for digital ways of working like test‑driven development and smoke testing, which rely on being able to simulate or reproduce realistic data flows. The [NHS software engineering quality framework](https://github.com/NHSDigital/software-engineering-quality-framework) encourages practices like design for testability and shift‑left testing, but these are harder to apply when it’s difficult to access representative examples of test results in the NHS App.

## In summary

Each of these services presents results differently, and in each case the difference reflects the systems available to them rather than the choices the team has made. Where results travel from a lab into a GP IT system, what a user sees is shaped by systems built for clinical use cases. Where there’s no integration at all, the result arrives as a scanned document.

Messaging improves the experience, but the underlying result can still appear separately in clinical language. However, where a service manages its own results, as with NHS Health Check Online, it can provide structured data, plain language and a clear next step.

There is no perfect option for services to choose from, so teams use what's best for them to reach the health outcomes they’re aiming for. As we found in our [discovery](/managing-my-health/2026/07/helping-users-do-more-with-results/), prevention services can’t rely on receiving structured, consistent data, which would enable them to deliver results to users more consistently.

In alpha we are exploring whether more consistency is possible despite that uneven structure – whether the context and the next step can sit within the result itself. Our [recent work at a hackathon](/managing-my-health/2026/08/combining-test-results-from-multiple-sources/) provided early signals that one easy-to-view feed may be possible.
