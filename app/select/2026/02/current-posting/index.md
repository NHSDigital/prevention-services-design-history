---
title: "Knowing if someone lives in England or Wales matters for breast screening (and figuring that out is harder than you might think)"
date: 2026-02-11
tags:
  - breast screening
  - cohorting
  - PDS
  - residency
  - addresses
---

People are invited to breast screening in England based on a variety of criteria, but they must be resident in England. Wales runs its own breast screening programme, where a person must be resident in Wales to participate.  

There are approximately 50 GPs on the England-Wales border that serve both countries. Someone living in Wales and someone living in England may have the same GP, but need to be invited to separate screening programmes. 

The country responsible for a person’s care is found in a field called ‘Current posting’ in a national electronic database called [the Personal Demographics Service (PDS)](https://digital.nhs.uk/services/personal-demographics-service).

The field in the database has to be populated when someone registers with a GP so that it’s clear which country is responsible for their care. For those without a permanent address, GPs can use the address of the practice, or a dummy address, as the field cannot be left empty. 

The breast screening programmes use the information in this field to know which people to invite for screening. The country in the field infers residency of that country: if the field says Wales, it is assumed the person lives in Wales.  

Both Wales and England agree to use the information in this database, ensuring no one is missed or invited by both countries. 

PDS is used in England, Wales and the Isle of Man, while Scotland uses its own version of PDS. 


## How location information is used to determine country of residence  

The location information in the database currently comes in a variety of formats and from several sources: 

* a postcode from the Office for National Statistics (ONS) postcode directory 
* if a postcode spans a country border (Scotland or Wales) it may need someone to look at council and ONS data to work out which country the person is in 
* a code denoting a region (e.g. OX = Oxfordshire) from a now-retired NHS IT system called NHAIS  
* a country code (e.g. ‘ENG’ = England) that is added when you register at a new GP surgery 
* a GP practice code if the person is in a detained estate (e.g. prison or a mental health institution) or in the Forces and overseas  
* some records don’t have postcodes, or have postcodes that are not valid or geographic, for example, ZZ99 
* PDS has started mapping unique property reference numbers (UPRNs)[^1] to address records in the database and have so far reached around 80-90% of addresses – which is not a high enough percentage to be able to be used 

A postcode is not enough to determine where a person is resident, as postcodes can serve locations in both England and Wales.  

## The need for a more reliable way to find location information 

There are several pieces of underlying software that manage the selection, cohorting and data checking of those invited for screening. Many of these are being rebuilt using modern technology to use APIs (a way of sending data between software applications), and/or be cloud-based. 

As part of this work, it is intended that PDS remains the single source for demographic data. However, PDS API does not include the Current Posting field (it wasn’t needed for screening use when the API was created). This means that moving to API‑only communication is not feasible unless PDS includes that field, or can provide another way to reliably identify residency (for example, by using UPRNs when they are all mapped). 

One of the most important things that the database does is update a person’s location information when they move house, making sure that they are invited for breast screening by the correct country if they move across the border. 

The biggest risk to consider is that a person could be missed by both nations, and so not invited to a screening appointment that they’re eligible for. Alternatively they may be invited by both nations, which goes against breast screening policy.  

## Considerations for the solution

So that each country invites the right person for screening, we need a way to find out where people live.

Considerations include: 

### Breast screening policy 

* the breast screening programmes state that people must live in the country that is providing their screening service
* transparency of logic and edge case scenario handling is crucial to minimise the clinical risk of people not being invited for screening by either country 
* any policy change would need to be reflected in both countries to ensure people are not missed 
* who is responsible for someone’s care if their residency is unknown? 
* the ‘Current Posting’ field infers residency and also states which nation is responsible for care. Responsibility and residency could be treated independently but this needs business input across nations. 

### Where people (actually) live 

* not everyone has a permanent address – though everyone in the UK may register with a GP, regardless of housing status. 
* people may be in a detained estate – in prison or a mental health institution 
* people may be in the Forces and be overseas  
* someone may not be resident in England or Wales all year round 
* there is often a lag in postcodes for new builds being usable 

### Technical infrastructure 

* isolated logic could differ between England's screening services (e.g. someone is invited to breast screening but not cervical) 
* the NHAIS codes are no longer being updated, affecting their accuracy 
* postcodes have data quality issues in PDS, such as poor or ambiguous addresses, which prevents accurate classification  
* postcodes can cover an area that includes both England and Wales 
* using the GP practice’s location could result in redefining who is eligible within both England and Wales’s screening programmes, which will require careful management 


## How to replace Current Posting 

The emerging direction is clear: the NHS should centrally determine and expose the country of residence within PDS, replacing Current Posting with a modern, reliable equivalent.  

The English breast screening service can't make this decision on its own as a new solution must be consistent between England and Wales, so that there is no risk that people could be missed.  

We are not the only service that needs a reliable indicator of country residence, and a solution will be reused. 
 
The Breast Screening Service cannot replace Current Posting unilaterally. Any solution must: 

* be consistent across England and Wales 
* avoid dual invitations or missed invitations 
* support modern, API‑based screening infrastructure 
* reduce reliance on local bespoke logic

[^1]: The government has [a published standard to encourage the use of URPNs](https://www.gov.uk/government/publications/open-standards-for-government/identifying-property-and-street-information)
