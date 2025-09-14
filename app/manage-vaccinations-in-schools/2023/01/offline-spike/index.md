---
title: Working offline
date: 2023-01-11
screenshots:
  items:
    - Online – can you work offline status
    - Get ready to work offline
    - You are ready to work offline
    - You are working offline
    - Help working offline
    - Working offline in the Check a vaccination appointment service
---

It became clear during the first round of research that many SAIS teams have a need to work offline. Many don’t have internet access, or if they do have access it can be patchy or unreliable.

They often:

- are not allowed to connect to the school Wi-Fi
- go to schools that do not have a Wi-Fi network
- don’t have mobile signal for 4G or 5G connectivity

We’ve heard that some teams take with them technology to try and get online, whether that’s laptops with mobile internet built in or USB dongles (which are harder to use).

## How teams work offline

Most teams have a strategy for working offline, but these vary from team to team.

Several teams reported using Excel spreadsheets to capture vaccination events. These were uploaded once the teams were able to reconnect to the internet. Teams will prepare spreadsheets of children and download them before going to a school.

Other teams have their own offline systems, MOIRA is one example.

We also heard about some admin team members keeping a paper backup as a data safeguard. We still need to learn more about paper use in schools.

## Options for offline working

Our point of care service could be built as:

- a website that has offline functionality
- an installed app that works offline
- both

Each will have a different user experience and expectation. There are also different technical considerations, which are being explored separately.

We expect most teams to either be fully online or fully offline, and the case where they have intermittent connectivity to be less common. The effect of this being that data must be prepared beforehand, and any offline work uploaded afterward.

### Offline websites

It’s possible to build a website that works offline. Users can continue to use the site, or a subset of the site’s features, even without connectivity.

However, these sites are rare and the concept of a website that works offline will be unfamiliar. We don’t know whether users will trust an offline website.

During a research session we tried asking, ‘Would you use an offline website?’, but the concept was difficult to imagine. We need to show an example of an offline website and how it would be used, and gauge reception to it. It is also hard to do offline research via an online video session.

### Offline apps

An app is more commonly used offline, whether on a phone, tablet or laptop. We believe there is more of an expectation that it will work when not connected.

An app would need to be installed on to devices being used by teams. Users do not usually have permission to install applications on their work devices, they may need permission and assistance from IT.

## Preparing data for offline working

When offline, the device will need all the appropriate data downloaded so that the user can:

- find children
- check their consent and answers to health questions
- record vaccinations

Data could be downloaded in two ways:

1. Implicitly, where the website or app will automatically keep a local copy of all recent and upcoming school sessions. This happens without the user being prompted.
2. Explicitly, where a user will need to actively make school sessions available offline.

The right answer might be a balance of these two approaches. We need to test them.

An explicit approach is similar to the practice of preparing and downloading an Excel spreadsheet to work offline. (Our solution must be good enough that users don’t continue to use spreadsheets – for example, if they consider our service to be unreliable or don’t understand it.)

We want to explore how to draw people’s attention to the fact they are offline.

In both cases we’ll need to indicate what can and can’t be done offline with the currently downloaded data.

### Implicitly making sessions available offline

The service would need to determine the right logic for what to download and when. It would need to err on the side of downloading more.

In our designs we’ve created a status region at the bottom of each page which indicates whether the website or app is ready to be used offline. There is still an explicit action to download all appropriate data if the service is not yet ready.

### Explicitly making sessions available offline

This might look like a list of download links against each school session, alongside some indication of download status.

## Other things to consider

- Security of data, such as encryption and lifecycle
- Technology available to SAIS teams
- The complexity of building an offline capable service
- Users’ willingness to accept an offline option
- There might be a need to refresh data
- What are the contingencies? Such as, can offline work be exported somewhere

## Design notes

The screenshots below are a first pass at what an implicit offline service might look like.

We use a clear yellow banner to indicate when a user is offline. This is similar to the [offline patterns used by the ‘Check a vaccination appointment’ service](https://vimeo.com/707743949/19ed2f596b).
