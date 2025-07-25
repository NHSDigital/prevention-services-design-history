---
title: "Recording COVID-19 and flu together "
date: 2024-06-17
---
## Supporting coadministration

We explored how the service can support the ‘coadministration’ of vaccines. For example, when a patient is given two or more vaccines during a visit.

### Coadministering vaccines in different ways

Throughout our research, we have found that healthcare settings co-administer COVID-19 and flu vaccinations differently to support the flow of patients through their clinics. Their way of working is based on their size and the number of staff involved.

Some large vaccination centres set up check-in desks and different COVID-19 and Flu vaccination areas, preferring to move patients from one vaccinator to another. Others have one vaccinator who is trained to administer and record both vaccines in one area.

The legal mechanism for giving a vaccine or vaccines also determines the number of staff involved. For example, a Patient Group Direction (PGD) involves one clinician, while the National Protocol can involve a team. As such, we considered how and when to present the user with the option to select a legal mechanism during the journey.

### Adapting the record a vaccination service journey

We adapted our existing journey, which records one vaccine, to record COVID-19 and flu vaccines (and potentially more) together.

We prototyped and tested the following journeys that reflected the most common co-administration scenarios:

**1. One vaccinator records and administers both vaccines**

We featured checkboxes instead of radios on the first screen of the journey, changing it to allow users to select multiple vaccines at the same time.

![Screen that allows users to choose multiple vaccines](scnfii0x2ejwub92asrfrhsouprm.png)

We identified which data fields are common or different data for each vaccine. This approach avoided users having to enter duplicate data and streamlined the process of recording the two vaccines together.

We duplicated the fields which might be different for each vaccine on the following screens:

**Record consent screen**

![Screen that allows users to record consent for COVID-19 and flu vaccines](ozfybol9q6fngsk6ted6ijhf8rbg.png)

**Vaccinate screen**

![](krnpncuqiyewxm55975ytbl1rau4.png)

**2. Different vaccinators record and administer each vaccine**

This journey resembles how [users record vaccinations in the live service] (https://record-a-vaccination-design-history.designhistory.app/recording-vaccinations-beta).

- Vaccinator 1 completes the journey for Vaccine 1.
- Vaccinator 2 repeats the journey by reselecting the patient record and recording a vaccination for Vaccine 2.

### What we learnt

Although the first journey reflects how most settings operate, this would take considerably more time to build and develop.

Therefore, we plan to release an iterated version of the second journey into the live service to cover both coadministration scenarios. We'll continue to gather user feedback to understand if we need to improve it.

