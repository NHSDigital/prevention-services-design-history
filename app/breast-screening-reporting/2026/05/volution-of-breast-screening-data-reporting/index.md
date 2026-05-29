---
title: The evolution of breast screening reporting
description: How the team’s understanding of breast screening reporting evolved from dashboard prototyping to NBSS data extraction and reconciliation
date: 2026-05-29
tags:
  - breast screening
  - reporting
  - BSIS
  - NBSS
  - data platform
  - dashboards
author:
  - Laboni Paul
---

# The evolution of breast screening reporting

## Introduction

Analysing breast screening performance has been difficult, relying on manually created, backdated data tables pulled from multiple systems that made it hard to get useful insights.

This post captures key stages of the breast screening reporting team’s journey in modernising breast screening data reporting and what the team are doing next.

## Laying the groundwork for data reporting

Turning pre-aggregated data tables into new insights is like making a Victoria sponge by mashing up cupcakes – it doesn’t really work. Participant-level data provides the raw ingredients needed to mix up new metrics and visualisations from scratch.

We planned [automated pipelines](https://design-history.prevention-services.nhs.uk/breast-screening-reporting/2025/05/moving-source-system-event-data-through-nsp-and-into-fdp/) and dashboards to extract and analyse granular data to replace the manual shifting of multiple data extracts from source systems. However, we first had to address some strategic challenges:

### Establishing ways of working

The teams extracting data were separate from those analysing the data and working with users, making it difficult to ensure the work being done meets real user needs and justify the use of the data. To address this, we formed a multidisciplinary data product team bringing together analysts, engineers, and user-centred design to work together and understand requirements, owning the entire data pipeline from source to product.

### Validating the top data requirements of breast screening office staff

We visited breast screening offices to understand which automated insights would be most valuable. We found that, across screening units, commissioners, and digital teams, there is a shared need for easier-to-interpret oversight metrics that make it possible to assess the equity of breast screening.

We also uncovered more complex problems to address in the future, such as the more accurate and scalable capture of [Pathology BQA data](https://design-history.prevention-services.nhs.uk/breast-screening-reporting/2025/07/).

### Access to participant-level data and governance

We planned to join participant-level data with other attributes, such as ethnicity data, to create datasets that could be queried to better understand inequalities and variation across services.

To do this well, a data platform was required. However, we discovered a lack of clear legal basis to move participant-level data into modern analytical platforms. Our proposal supported a [change in legal basis](https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/directions-and-data-provision-notices/secretary-of-state-directions/nhs-vaccination-and-screening-directions-2026), unlocking the ability for all adult screening programmes to use record-level data for insights.

## Prototyping the downstream reports

Breast Screening Information Systems (BSIS) reports help Quality Assurance (QA) staff monitor and ensure the safety of breast screening services by identifying failures to comply with performance standards. While important, the reports are hard to access and use, and the platform will eventually be decommissioned. Running and maintaining BSIS helped us refine our goal: replacing BSIS reports with intuitive, automated dashboards.

While we waited for access to real participant-level data, we used synthetic data that resembled the real data closely enough for testing and development. We created prototype dashboards to test with users, understand their needs, and explore platforms, ensuring what we intended to build was fit for purpose before extracting any real data.

### Exploring reporting domains

Ownership of BSIS provided an opportunity to gain a deeper understanding of the business logic underpinning key reports. We used short [design sprints](https://design-history.prevention-services.nhs.uk/breast-screening-reporting/2025/12/using-design-sprints-to-help-us-learn-quickly/) to explore each reporting domain and understand how it could be improved.

We started with the simplest reports and found that improvements to infographics and metrics could replace and improve multiple BSIS reports with a single automated dashboard that offered better comparisons, visualisations, and user experience.

### Testing data platforms

Starting with an MVP was a useful way to learn how different data platforms worked, understand their tooling and processes, and test how users would interact with dashboards. Once we understood the basics, we explored the most complex reporting domain — image reading QA — as a [stress test](https://design-history.prevention-services.nhs.uk/breast-screening-reporting/2026/04/re-designing-image-reading-data-reporting-to-stress-test-the-reporting-roadmap/) for the reporting roadmap.

### Running and maintaining BSIS

KC62 helps provide a national picture of breast screening activity and performance. The introduction of very high risk participants requires updates to the KC62 tables in BSIS. This work deepened our understanding of how breast screening services operate and the complexity of NBSS business logic.

## Reconciling data upstream

Each breast screening service operates its own NBSS instance, introducing variation and challenges in bringing data together. While some differences are reconciled through BS Select, many reporting domains — particularly image reading — depend solely on NBSS data.

Having established a vision for the dashboards we wanted to build, our focus shifted upstream from reporting outputs to the source data itself. The reporting team was renamed the **NBSS Extraction team** to reflect this change. The goal remains the same: creating modern reporting products. Our immediate focus is creating the data foundations needed to support Rubie before returning to dashboard development.

### Preparing a data platform

A Databricks solution met the needs of the most complex reporting domains we intend to replace. We began establishing an environment that could both support future dashboards and provide a space to explore, analyse, and reconcile NBSS data.

We explored role-based access controls, approaches to pseudonymising data, and built an automated pipeline into a sandbox environment. This provides a foundation for analysing NBSS data dumps and developing future reporting products.

### NBSS data extraction

The team is initially using dummy data to understand how data from different NBSS instances may need to be combined, reconciled, and standardised as a warm-up before bringing NBSS data from multiple services into Databricks. This will allow them to explore how the data works across service boundaries. For example, 'can we identify one participant’s journey across multiple services, and understand how that journey is recorded in each system?'

This work allows critical operations to take place and helps bring to life the original reporting vision of intuitive, automated reporting built on a trusted understanding of the underlying data.
