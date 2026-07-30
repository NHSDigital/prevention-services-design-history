--- 
title: How the NHS App presents different prevention service results
description: There isn't a consistent pattern how results for prevention services are presented in the NHS App, this post describes some of the different ways and why  
date: 2026-07-30 
tags:
  - NHS App
  - results
author:
  - Alistair Ruff
opengraphImage:
  src: /your-service/2025/12/post-title/image-name.png
  alt: Alternative text for the lead image
---

As part of our discovery into [helping users do more with test results](https://design-history.prevention-services.nhs.uk/managing-my-health/2026/07/helping-users-do-more-with-results/),
we mapped out how results for prevention services appear in the NHS App. 

We focused on three areas: adult screening, home testing and health assessments. Looking at four examples highlights how different services approach results and some of the challenges and opportunities that remain. 

To help visualise the results we looked for examples, whether anonymised real results or example results which contain no real data. For some services this wasn’t possible, or it was only possible for a small number of the possible result types. 
The fact that it's not practically possible to replicate how a test result will appear for every service, for every user of the NHS app reflects the many variables involved in how a result is presented e.g. Which lab processed the test results and which IT System someone’s GP uses.

## Cervical Screening test results 

Cervical screening results include a test for High-risk HPV and, if positive, an examination for abnormal cells (cytology). Both tests are completed by the same lab using the same sample taken at the cervical screening appointment. 
Results fall into four categories:

* Inconclusive result 
* HPV Negative – No Cytology 
* HPV Positive - Normal Cytology 
* HPV Positive - Abnormal Cytology 

The interrelation between HPV and Cytology, plus any additional risk factors for an individual person being screened means that there are 20 different results possible. To help users understand the relationship between these two results and what their next steps will be, results are provided via a message in the NHS App, with a fallback of a letter if the someone doesn’t use the app or hasn’t read the message within 72 hours. 

The message they receive provides a lot of detail and is almost identical to the letter that the user would receive if they’re not an app user. 
In addition to a message at least one result will show up in the test results section of the NHS App. Even where two results are the same, there is lots of variation possible in how those results can be presented because it is a result of:

* how humans record the data
* how systems transfer that data from the lab to the GP
* how systems transfer that data from the GP to the NHS App. 

Three examples are presented here to demonstrate the differences that are possible for users all receiving the same test result. 

The first shows an example of how a result may be presented by a user whose GP is using the EMIS IT system. It shows how a HPV result can be presented alongside a cervical cytology result as part of a single ‘Cervical Cytology Screen test’. In both cases the ‘result’ is included as a ‘laboratory comment’ rather than as structured data. 

The second example also shows a result received by a user whose GP uses the EMIS system. In this case though the title of the result has been significantly abbreviated to such an extent that it is unintelligible to a user. The high level result (normal - no action) has been annotated by the GP, with the specific results broken down under each test as a laboratory comment again. 
		
The third example shows how a result can be presented by a user whose GP uses the TPP IT system. The results are presented as two separate tests ‘Pathology - PRIMARY HPV’ and ‘Pathology - FINAL REPORT’. They are presented next to each other because they relate to the same day, but its possible that they may not always be directly next to each other depending on what other test results are presented on that day. Each result contains a long, detailed set of text results. This appears to contain all of the raw data related to the test like who ordered it, the location of the GP practice, the GP’s ID number, the sample ID number - all of which is important data to ensure the accuracy of the result, but is not relevant o a user who wants to know their result. 

The variation in how lab technicians and healthcare professionals describe a cervical screening result makes it harder for users to understand their results, and their experience is significantly impacted based on which IT system their GP uses. 

## Breast Screening

Breast screening (also known as a mammogram) results are presented as a scanned physical document within the ‘documents’ section of the NHS App, they do not appear in the ‘test results’ section of the NHS App because the current National Breast Screening Service does not integrate with GP IT systems. Instead the paper result will be sent to the GP, who then scans and uploads it as a document (Is this true!?) 

People who have had a mammogram will also usually receive the result via an email with the scanned document attached to the email in addition to seeing it within the NHS App. 

There are two types of results 

* Normal 
* Abnormal 


This presentation of the result contains no structured data and relies on the user’s ability to read the scanned document, as well as interpret the different sections. Where there is a necessary next step there would be contact made by the Breast Screening office or GP, but the user may receive the result before this contact happens. 

Whilst cervical and breast screening might operate as similar services in people’s mind because they are national screening services provided by the NHS, the experience of receiving results is very different. 

## HIV Home test

HIV Home test is a service provided entirely by a third-party provider that doesn't provide results that are integrated to GP systems. This is because whilst the HIV Home test doesn’t provide a definitive HIV result, it still relates to sexual health and is not by default shared with people’s GPs. 

Because it is not being shared via an integration with GP IT systems HIV home test result can be presented in a different way. 

A negative result for a HIV self test is available immediately after the sample has been processed and result recorded by the lab. The NHS app sends a notification to alert that the result is ready, and the result is presented as above. 

Reactive results are not available immediately in the app. An SMS is sent to the user to expect a call from a clinician, with five attempts make contact and explain the result with reassurance before the result is then available in the NHS app as shown above. 
These results demonstrate the possibility of presenting results as structured data and giving clear next steps for the person receiving the result.

## NHS Health Check Online

Health Check online is the digital version of an in-person health check provided by GP’s for people over 40. It involves a user answering a range of questions and taking a blood pressure reading as well as two blood tests. The service is currently in private Beta, so is not available nationally yet. 
After the blood samples are processed by a lab, these results are combined with the user’s questionnaire responses to calculate a risk score and provided recommendations. Users are notified of a result by a message in the NHS App, with the full result presented in the test results section of the NHS App. 
Eight different risk results are calculated based on the data entered:

* Body Mass Index
* Alcohol
* Smoking
* Cholesterol
* Blood Pressure
* Physical activity
* Diabetes
* Dementia

The results are presented with visualisations of the results which are designed by the team responsible for the service. There are many possible variations of the results depending on the answers given and the results of individual tests e.g. blood pressure, cholesterol. These results are also shared with the GP IT system and so may then appear as individual results within the ‘test results’ section of the NHS App, presented individually as e.g. blood pressure and cholesterol, separate from the main NHS Health Check Online result. 
If people provide a blood pressure result that is either too high or too low, they will be triaged immediately and asked to contact their GP. 
