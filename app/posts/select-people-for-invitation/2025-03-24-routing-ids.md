---
title: Routing plan IDs
description: How we get routing plan IDs into SPI
date: 2025-03-24
tags:
  - service
  - routing plans
  - communication channels
  - user research
  - reference data
---

SPI works with other services to provide a wider end-to-end service. SPI is used to select which people should be contacted, but it connects with [NHS Notify](https://digital.nhs.uk/services/nhs-notify) to actually send messages to those people.

One of the powerful features of SPI is that as well as allowing users to select which people to contact based on various criteria, it also allows users to select which message to send and in what format. For example, we might wish to send under 16s a message addressed to "Parent or guardian", and over 16s a message addressed directly to the person themself. Or we might want to send a translated version of a message if we know the recipient has a different language preference. 

The way that the message content and communication channels are controlled is via "Routing plans" which are set up in NHS Notify. 

A routing plan might say:

- Try **SMS** using **contentTemplateA-SMS**
- If SMS fails, try sending an **email** using **contentTemplateA-email**
- If email fails, send a **letter** using **contentTemplateA-letter**

For complicated campaigns with lots of different content variations (e.g. accessible formats, translations etc.), this can mean a large number of routing plans are required. As an example for the Spring 2025 Covid campaign there will be around 54 routing plans.

SPI is where users create the rules which determine which routing plans to use for which people, e.g.:

- If person is <16, use **routing plan A**
- If person has a language preference = DE, use **routing plan B**
- etc.

## Current process
SPI is designed around a campaign > iteration parent child relationship e.g.

- Campaign = Spring Covid 2025
	- Iteration 1: **G1 Invites 5 - 74 Non London 5 - 79 In London**
	- Iteration 2: **G2 Invites 75 - 79 Non London & 80+ London**
	- Iteration 3: **G3 Invites 80+ Non London**
	- etc. 

- Campaign = RSV
	- Iteration 1: **G1 Invitation for ALL Adults 75-79 Nationally**
	- Iteration 2: **G1 Invitation for ALL Adults 75-79 Proof of Concept**
	- etc. 

The current process is that users liaise with NHS Notify to get the appropriate routing plans set up, when they are ready Notify send back the routing plan IDs which is how we reference which plan to use. 

A routing plan ID is currently (they may change in the future) made up of a unique number and a string which describes what it does, they look something like this: `VACCS0088_covid202409_CHILD_EMAIL_V1`

Because routing plans combine content with communication channels, they are unique to a vaccination campaign i.e. we'd never use a Covid routing plan in an MMR invitation campaign. 

Therefore when a user is setting up an iteration (our current name for the configuration which defines a group of invitations - we're aware it might not be the most intuitive term and plan to research this further), we don't want them to be able to pick a routing plan which isn't applicable to the campaign they're working on.

## Ideal solution
The ideal solution would be that SPI knows which routing plans are available and which campaigns they relate to, and therefore will only display applicable options in the UI. We would love to have integration with NHS Notify and bring back routing plan IDs via an API for example. At the moment this isn't possible, and Notify have their own roadmap working towards a more self-service approach to routing plans and content templates so in time SPI will have to evolve to integrate with NHS Notify as it itself evolves.

## Pragmatic interim solution
We're not yet able to have a fully integrated solution with NHS Notify, indeed we don't yet know exactly how their service will evolve and how we could integrate in the future. Therefore we designed a pragmatic solution which works for the here and now, and which we can iterate over time.

NHS Notify currently send the users a spreadsheet with the routing plan IDs for a campaign. Often this is sent quite close to the campaign go live date, so baking the routing plan IDs into the SPI user interface isn't straightforward (it would require a release and there might not be time for the associated processes such as testing and clinical assurance):

![example of a spreadsheet containing routing plan IDs](routing-ids1.png)

We came up with a design which allows the users to copy the whole column and paste it into SPI, at campaign level:

![SPI with the routing IDs pasted into the UI](routing-ids2.png)

![SPI showing the routing plan IDs having been added to the campaign](routing-ids3.png)

This then makes the routing plans available for selection (via dropdowns) later in the process when they are creating routing rules within an iteration in that campaign:

![adding a routing plan ID to a routing rule for under 16s](routing-ids4.png)

This approach has a number of benefits over adding routing plan IDs manually at a rule level:

- It ensures that only Covid routing plans are available in Covid campaigns and only MMR routing plans are available in MMR campaigns etc.
- It reduces the need for manually retyping or copying and pasting – the routing plan IDs are added once and then available for use thereafter

## User feedback
When we tested this design with users it was very well received: 
- Users were happy to add the routing plan IDs to the campaign so they could then select them from dropdowns when setting up rules
- They were delighted that they could copy and paste the whole column of routing IDs in 1 operation (there can be a lot of routing plans per campaign), this was considered to be a real value add
	- "It's brilliant"
	- "Its really really useful"

