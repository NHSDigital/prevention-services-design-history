---
title: Understanding the challenges in breast screening
description: What we learned in discovery and plan to do in alpha
date: 2024-12-19
tags:
  - alpha
  - prototype
  - service design
  - breast screening
---

## Problem space

The National Breast Screening Program is a service which screens women across England using a mammogram, or in some cases an MRI scan, to check for any signs of breast abnormalities or cancer.

## Discovery

Our multidisciplinary team spent 6 months understanding the current breast screening landscape and its challenges. Multiple opportunities for transformation were identified.

We performed several rounds of user research with breast screening units around England and used these insights to create a service blueprint of the current-state Breast Screening Service. This demonstrates how the service currently works and where the issues lie.

![A thumbnail view of the current state service blueprint. It gives an idea of the blueprint, but text is intentionally not readable.](manage-breast-screening-alpha-blueprint.png 'Current-state screening service blueprint')

Our team used this to create a backlog of potential opportunities for transformation.

This backlog was prioritised based on potential value versus technical effort to narrow our focus for alpha.

### Major service challenges

#### Outdated systems

Multiple systems are used to manage breast screening across the country, which impacts data quality and service consistency. Some of these systems are dated, lacking functionality and modern usability standards. They also do not integrate well with other NHS systems, meaning data has to be manually shared.

#### Paper and manual processes

Legacy systems and dated user interfaces do not lend themselves to in-appointment use, causing inefficiencies with staff using paper methods to capture information and transferring their notes back into the system later.

<!-- **Between 2022-2023, 3.04 million women were invited for breast screening. For each participant invited, a screening form is printed, resulting in millions of paper forms being produced.* -->

“In 2022-23, the number of women invited for screening was 3.04 million”
Source: [Breast Screening Programme, England, 2022-23](https://digital.nhs.uk/data-and-information/publications/statistical/breast-screening-programme/england---2022-23/mainreport2223)

For each participant invited, a screening form is printed, resulting in millions of paper forms being produced.

## Alpha

Our alpha will explore a digital screening journey through a UI prototype, focusing on higher quality data capture and structured workflow. The prototype will cover the first screening mammogram appointment and the subsequent image reading process (to assess the mammogram images and reach a diagnosis).

We are looking to explore the following areas:

- **Pre-appointment questions** – currently a mammographer gathers data from the participant during the appointment (such as current health, medical and screening history). Considering the appointment is 5-8 minutes long we’d like to explore if removing this burden and supplying users with a self-serve questionnaire prior to the appointment is a more efficient way to manage this.
- **Digital workflow and data capture** – can we effectively remove the use of paper during the initial screening mammogram and image reading process? Does this improve efficiency and data quality? Are clinicians willing to use a digital interface to record their findings during an appointment?
- **Image management** – can we automatically record the number of screening images taken and indicate repeat images to the mammographer so they do not have to record this data manually?
- **Image reading workflow** – will digitising and standardising the image reading process improve service efficiency and increase accuracy?
- **Better participant data access / visibility** – using the principle of ‘capture once, use many times’ will recording a single instance of participant data on a national system, giving clinicians immediate access to data, increase clinical accuracy and improve overall service efficiency?
