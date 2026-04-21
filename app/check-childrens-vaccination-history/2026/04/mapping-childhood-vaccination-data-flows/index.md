---
title: Mapping childhood vaccination data flows
description: Mapping the data flows between GPs, SAIS providers and CHIS providers to understand issues and gaps affecting childhood vaccination records.
date: 2026-04-20
---

Our alpha work on a potential [Check children's vaccination history service](/check-childrens-vaccination-history/) is aimed at learning how to collect, reconcile and display vaccination history to clinicians and parents, starting with MMR (and MMRV) vaccinations.

Our vision is for a service that allows all providers to have access to a shared, accessible vaccination history for all children, no matter what system they are using, and for parents to have access to that same record, no matter who vaccinated them and where.

## Data flow deficiencies

Meanwhile in 2026, we're still in a world where vaccination records are spread across different systems and where a variety of data flows, from FHIR-compliant real-time flows through to manual transcription of individual rows in spreadsheets shared by email, attempt to compensate for the lack of a shared record.

Deficiencies in the existing data flows are one of the main causes of problems with vaccination history. Unreliable data flows have created yawning gaps in vaccination history in provider systems, and the behaviour of point of care systems creates echoes of new vaccination records that cause duplication throughout the system. These issues create operational challenges for clinical providers and confusion for parents, as described in [our first post about this service](/check-childrens-vaccination-history/2026/03/what-is-check-childrens-vaccination-history/).

## Mapping data flows

To help us understand some of the issues we will need to address when collecting and reconciling records, we've been working to map out these data flows. This mapping has been informed by:

- our experience supporting SAIS-provider data flows in [Mavis (Manage vaccinations in schools)](/manage-vaccinations-in-schools/)
- the work of other teams in VDS (the vaccination data quality team and the vaccination event delivery squad in particular)
- research with CHIS providers and regional commissioners for this alpha project

We will describe the data flows and the problems with them for MMR in detail over a series of posts covering:

1. New vaccination records from school-age immunisation service (SAIS) teams using Mavis
2. New vaccination records from SAIS teams not using Mavis
3. New GP-delivered vaccination records
4. The flows of historical vaccination records

## The Bermuda Triangle of data

Before our series of detailed posts on each of these aspects, it's worth first zooming out to look at the whole picture.

![A diagram showing the data flows between three key providers involved in childhood vaccinations.](./bermuda-triangle.png '**Figure 1:** A diagram showing the data flows between three key providers involved in childhood vaccinations.')

The diagram above shows a triangle of the three providers most closely involved in the delivery of childhood vaccinations.

The flows of data between these three providers vary in reliability between areas and between systems, but in many places, flows rely on sharing spreadsheets by email that have to be uploaded to systems or even added line by line.

- **GP practices vaccinate children in clinics** for their routine infant vaccinations, including MMR, as well as delivering catch-up vaccinations and additional doses of school-age vaccinations for immunocompromised children
  - Records of vaccinations given at GP practices are supposed to be shared with CHIS providers. CHIS providers work hard to ensure they are collecting as much data as possible.
- **SAIS providers vaccinate children in schools** and community clinics for school-age vaccinations and deliver school-age catch-ups for MMR - in some areas, SAIS providers also run community clinics delivering infant vaccinations
  - Records of vaccinations given at SAIS providers are supposed to be shared with GP practices and CHIS providers. GP practices often do not have the capacity to add records from SAIS providers to their systems.
- **CHIS providers are not involved clinically, but collect and share data with GPs and SAIS teams** to maintain an accurate record of every child's vaccinations and do their best to lubricate the flows of data between providers
  - CHIS providers collect records from both SAIS and GP practices and also share GP-sourced vaccination records with SAIS providers.

This triangle has sometimes been called the **Bermuda Triangle of data**, due to problems with data sharing leading to vaccinations not being added to patient records. We will be exploring some of the problems with these manual processes in future posts.

## The Bermuda ... spider web?

While these three providers account for the majority of vaccination activity, other providers can also be involved in delivering MMR vaccinations. For example:

- children in hospital for an extended period of time that overlaps with the routine vaccination schedule may be given vaccinations by a hospital trust

- some parents may opt to pay privately for an MMR vaccination for their children, or even for three separate vaccinations, one for each antigen

In addition, there are pilot projects underway to look at extending the delivery of MMR vaccinations to more providers such as health visitors.

The lack of shared vaccination history makes it much harder to have flexible delivery models for vaccination programmes, as these rely on clinicians having easy access to records that allow them to determine a child's eligibility.

## On the outside looking in

While the clinical providers are at the frontline doing their best to vaccinate the population, other organisations sit around this central trio of players. They are involved in supporting, monitoring and reporting on this system and are shown in the expanded diagram below:

![A diagram showing the data flows for childhood vaccinations.](./whole-system.png '**Figure 2:** A diagram showing the data flows for childhood vaccinations.')

- **NHS England provides systems** that help with flows of data (the Immunisation FHIR API) and **collects data** from providers on vaccinations given in order to facilitate operational reporting on the progress of vaccination programmes

- **NHS England regions collect aggregate data** from providers to help monitor the effectiveness of commissioned services and to support targeted work with providers to improve vaccination uptake

- **UKHSA collects record-level and aggregate data** from multiple sources to evaluate the efficacy and safety of vaccination programmes, and to allow for the production of vaccination coverage statistics

But the gaps in records, the challenges with data flows and different approaches to monitoring and reporting mean that different organisations see a different picture of what is going on.

## Describing the problems and solutions

Many of the issues with flows of data moving forward are being addressed in the move to sharing records via the Immunisation FHIR API and the introduction of MNS notifications for vaccination events, as more providers onboard to these systems.

But the problems with duplication of records with persist, and the gaps in history will need to be addressed separately in order to give providers the same view of a child's vaccination status.

Future posts about this service will discuss some of the data flow problems in more detail, as well as starting to present what we think a service that addresses these problems needs to do, and how it might work.
