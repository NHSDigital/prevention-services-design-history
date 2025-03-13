---
title: What we learned about sharing breast and bowel results with GPs
description: Findings from the first burst of work
date: 2025-03-12
---

In this update we focus on the learnings of our first burst of work (December 2024 - February 2025) and the first 2 outcomes:

* describe what we already know internally about sharing results with GPs
* size the problem and the opportunity

## How results are actually shared with GPs

Screening programmes differ in the degree to which GP ingestion of results is automated:

* from fully automated in bowel cancer screening (albeit using an old technology)
* to completely not automated in breast screening

![Breast screening is completely not automated, while bowel screening is almost completely automated](spectrum-of-automation-of-screening-results.png "Spectrum of automation of screening results")

We haven’t looked at the remaining programmes in detail yet.

## How results are shared: breast screening

### Variations depend on who processes results

Most breast screening offices (BSOs) outsource the management of invites and results to third parties. Synertec by far has the largest share of the market with 66%.

![A pie chart showing how results and invites are produced](printing-services-BSOs-use.png "Printing services that BSOs use")

Source: BSO using outsourcing companies (2024)

Of 77 BSOs:

* 66% or 51 use Synertec for invites and results
* 7.8% or 6 use Civica - all 6 are based in London
* 15.6% or 12 use 'unknown'
* 10.4% or 8 use 'other'

We believe that breast results originate in National Breast Screening System ([NBSS](https://digital-prevention-services-27ad71ff2ad9.herokuapp.com/services/national-breast-screening-system)) as a large PDF document. NBSS does not use SNOMED CT codes, but instead uses ‘local' codes specific to NBSS.

What happens to results (or, outcomes) then and how much this costs depends on the party that manages results handling.

### Variations depend on locality

When we started, we believed that all BSOs sent PDFs, however, we heard that actual A4 paper is still used, for example, in London and Greater Manchester.

We heard that Humberside moved away from paper during COVID, and piloted and implemented a process where ‘1 result per page’ PDF is emailed to GPs. This is an improvement from 2 results per page but is still “tedious”.

## How results are shared: bowel screening

We know that almost:

* 99% of all normal results in bowel are sent electronically
* 95% of GPs have electronic communications enabled for bowel results

The technology used for this electronic messaging (‘ecomms’) is EDIFACT Laboratory Service Report, variant NHS004 of MEDRPT.

EDIFACT technology is [marked for deprecation](https://digital.nhs.uk/developer/api-catalogue/pathology-messaging-edifact), it is inflexible and difficult to update. 

We know that some of our colleagues in Digital Services for Integrated Care (DSIC) are working on a more modern technology (FHIR R4) and cervical and bowel results are in their release 2.

However, when we spoke to the head of estates responsible for 5 GP practices in one PCN, they said that the bowel pathology route was broadly working for them. 

It’s important to consider the impact of any changes on GPs to make sure we do not make the experience worse or more burdensome for them. 

![A pie chart showing that 98.8% of results in bowel are sent electronically](normal-results-letters-vs-electronic-bowel.png "The proportion of normal letters that are sent electronically and as letters each year in bowel screening")

There could be an opportunity to understand why the 363 GP practices (5.4% of all) do not accept electronic communications and what we can do to enable those.

![A pie chart showing 94.6% of GPs have electronic messaging on](proportion-of-GPs-with-electronic-comms-enabled.png "How many GP practices have electronic messaging enabled and disabled, expressed in percentages")

This data was provided to us by colleagues in the [bowel cancer screening team](https://design-history.prevention-services.nhs.uk/bowel-screening/). We believe that the bowel team is best placed to investigate and decide where this opportunity sits in their backlog. 

## The size of the opportunity

### The vast majority of results require no further action

* 96.6% or 2.1 million breast screening results are normal
* 98% or 4.1 million bowel cancer screening results are normal (or ‘require no further action’)

### Do not attends / completes represent about a third of all invited

* 35% or 1.08 million do not attend breast screening
* 31% or 1.8 million do not complete their bowel cancer screening FIT test


|          | Breast screening | Bowel screening |
| -------- | ------- | ------- |
| People invited | 3.04 million | 5.9 million |
| People screened | 2.18 million | 4.1 million |
| People that do not attend or complete | 1.08 million | 1.8 million |
| Number of normal results | 2.1 million | 4.1 million |
| Number of abnormal results | 78 thousand | 80 thousand |

Sources:

* [Breast screening figures from 2022-2023](https://digital.nhs.uk/data-and-information/publications/statistical/breast-screening-programme/england---2022-23/mainreport2223)
* [Bowel cancer screening figures from 2021-2022](https://www.gov.uk/government/publications/bowel-cancer-screening-annual-report-2021-to-2022/bowel-cancer-screening-annual-report-2021-to-2022)

### Economic benefit of a potential solution
 
For the 6 BSOs we spoke to, a move to electronic patient invites and GP reports is estimated to save £500k annually.

One primary care network (PCN) told us that they employ 7 clinical coders who work 176 hours a week earning £12.30 per hour processing results and letters (yes, that's right - this is 7 people employed across 5 sites just to process paperwork) across their 5 GP sites. 

From this PCN’s perspective, if breast screening results were automated:

* clinical coders would decrease the current 3-week backlog and feel less stressed
* PCN would save on overtime costs
* patient records would be more complete
* patient safety would improve

A more nuanced economic analysis is needed to:

* separate patient invite prices from GP report prices (the case for and risks of digitising these will be different)
* separate normal results from abnormal (there might be a case for continuing to send paper or PDFs for abnormal results)
* take account of the high-volume discounts by third parties or method used
* include the perspective of GPs

We are working with the transition team to get better data via a survey of BSOs.

## Our assumptions about the solution space

We believe that we should start with the 2.1 annual normal breast screening results, and in parallel understand the opportunities for the 1.08 million annual DNAs (did not attend).


Abnormal results require more research.

### Start with breast screening, but understand where all other programmes stand

* we know that paper is used alongside PDFs in breast screening, so we assume that it will translate to immediate time savings for GPs, increased uptake accuracy as reported locally via the patient record
* we saw no immediate need in bowel cancer screening, although we know that work is happening to replace EDIFACT, so we assume there is an opportunity for collaboration
* we also heard that the pathology route used by bowel could be broadly working, so any ‘re-platforming effort’ should at least offer an equal experience for the GPs
* the economic benefits of going from one electronic solution to another won’t be as pronounced as going from paper to electronic
* we need to understand the technologies used in the other screening programmes (diabetic eye, cervical, AAA)

### Start with normal results

For simplicity we are focusing on normal results because:

* they are the largest proportion (96.6% of breast screening results and 98% of bowel), so give the biggest return on investment
* they require no further action from the GPs, so there are no clinical risks
* abnormal results might be treated differently as they might warrant a ‘bell and braces’ approach where paper is sent alongside electronic messages
* we heard that preference for how abnormal results are processed may differ by each individual GP (even within the same practice), so we’d need to understand what the range of preference is

### Extend the solution to DNAs

* DNAs are the second largest proportion of all results (35% in breast screening and 31% in bowel), so offer the second largest return on investment
* they require no further action from the GP, but practice staff might want to contact people who don’t attend and encourage them to. One PCN told us that knowing someone didn’t attend was especially useful for people with learning difficulties and other vulnerable populations; another BSO told us that DNA data from the patient record is used for reporting, especially on inequalities and uptake by ethnicity

## Some quotes from the last 2 weeks that highlight the need for a solution

> “Wow at last!!! You wouldn’t believe how long it takes us to enter the breast screening results at the minute. It is painfully slow!” (GP admin)

> “It’s really reassuring that something is happening in the background, this is really good. We’re the first front to primary care and we’re the ones getting the barrage all the time about this” (breast screening coordinator)

> “Our average monthly postage costs range £80-90k per month excluding VAT. A potential move to electronic invites/GP reports, has been projected to leave to £500k in savings.” (assistant operations manager)

## There are risks and costs of ‘doing nothing’

### For NHSE doing nothing would result in:

* repeated effort, inefficiencies, inconsistencies and only modest improvement as multiple local teams find their own solutions
* tackling inequalities being more difficult as patient records cannot be relied on for attendance data
* a continued information governance (IG) and GDPR risk due to paper and PDF sending

### For GPs doing nothing would result in:

* continued manual processing
* continued paper storage taking up physical space that could be re-purposed for seeing patients
* continued paper backlog adding to the stress of staff

### For BSOs doing nothing would result in:

Continued major cost printing or processing results, as it’s the “largest admin burden” (according to one BSO).

## The options we are considering

Based on our findings to date, we came up with a high-level 'opportunity solution tree' - 3 ways in which we can meet the outcome of 'sharing results with GPs effectively and efficiently'.

We used these as a prop in our solution space interviews and presentations.

### The options are:

1. Central place: Breast screening send normal and DNA results to a single place. GPs, patients and others access results from the central place (through an interface or API)
2. Automatic store: Normal and abnormal beast screening results are automatically stored in the patient GP record
3. Market incentive: Incentives are provided to the market to find its own solution ('carrot'), along with a policy mandating the storage of screening results by GPs ('stick')

These options are not mutually-exclusive and for now, they are ideas that we use to stimulate discussion and improve our understanding of the range of solutions. 

## Outstanding questions

There is still some work for us to do before we can scope the route to delivery:

* results printing in BSOs: what happens in those BSOs that print in-house and those that use ‘other’ types of outsourcing?
* what are the intended and unintended consequences of a solution (eg for printing service providers) - we are collaborating with the transition team on this
* what are the timeline, cost, complexity of each option - we are collaborating with the transition team and the [manage team](/manage-breast-screening/) on a single survey to BSOs; colleagues mentioned Lucy Jenkins' analysis that we should follow
* who and how will take this work forward, if, as we are learning, there is a benefit to delivering it?

## Next steps

So what can you expect from us next? We will:

* learn more about how results originate in NBSS and how different BSOs process them based on the method or the outsourcing company they use
* learn more about GP practice experience
* refine our options based on the high-level internal feedback and then refine them again based on GP practice insight
* conduct quantitative analysis of the economic benefits 

## Previous notes on this topic

* [what we set out to do and how we kicked this project off](/explore-team/2025/01/sharing-screening-results-with-gps/)
