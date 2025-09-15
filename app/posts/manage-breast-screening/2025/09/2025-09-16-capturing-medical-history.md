---
title: Capturing medical information
description: Logging relevant treatments and surgeries of people attending breast screening
date: 2025-07-21
tags:
  - beta
  - prototype
  - screening
---

We've been working with radiologists and radiographers to understand exactly what information they do (and don't) need to know about a participant's medical history.

## A background for breasts

During a screening appointment mammographers need to find out if the participant has had any previous medical issues affecting their breasts. This can influence how the appointment proceeds, and inform radiologists about things they may need to consider when reviewing x-ray images.

It's valuable to collect any previous diagnosis of breast cancer, benign lumps, cosmetic breast implants, a pacemaker, and various other things that may have happened to one or both breasts.

### Don't we already have this information?

Parts of the NHS might be aware, but often the office where breast screening is taking place will not. They could look it up in patient databases, but that's not always practical given the time constraints that clinics are under.

In future we'd like to sync the service with existing health data sources, or populate it through a pre-appointment questionnaire. But for now we're designing a solution for when there is no prior information available and everything needs to be collected during the appointment.

## How medical information is currently recorded

Radiographers have told us that at some point between the identity check and x-rays being taken, they will ask participants "Have you had any issues or surgery in your breast or chest area?" - the exact way they phrase this question varies widely from clinic to clinic.

The response is recorded on a paper form. They could make a tick, write down a year, or put a 'Y' on one or both sides, and add comments in the space provided. If there is nothing to record, they will typically strike through the section to indicate that the question has been covered.

![Cropped photo of medical history section on NBSS form](med-history-form.png)

### Examples of completed forms

These are real forms containing no identifiable participant information.

![Cropped photos of radiographer medical history notes on NBSS form](med-history-form-examples.png)

This information is transcribed into NBSS once the appointment has been completed.

![Cropped photos of radiographer medical history notes on NBSS form](nbss-med-history.png)

This can capture many potential scenarios but leaves a lot of unanswered questions, such as where to record:

* cosmetic breast implants
* implanted medical devices
* a partial mastectomy
* a mastectomy for a reason other than breast cancer (such as risk reduction or gender transformation)
* a benign lump that has not been excised
* cysts that have not been aspirated
* other breast cancer treatment, such as chemotherapy

As well as certain fields not being available, the freeform nature of what is there doesn't help to gather structured data that can be used within the service (and beyond). 

There are far too many things sitting within the 'other' bucket.

## Designing a new approach

Before attempting to unravel the huge variety of individual circumstances that medical history could cover, we first wanted to establish exactly what needs to be recorded, and why.

The users we're considering are:

* The mammographer collecting information
* The radiologist considering information when reviewing x-rays
* A mammographer reviewing information in a future appointment
* NHS data analysts looking at cancer identification trends
* Other services that may want to interact with the information

Initial discussions with these groups and NHS stakeholders gave us an idea about what was essential or nice to have.

![Notes from a digital whiteboard organising and annotating different types of medical information](med-history-requirements.png)

In the diagram:

* The '+' icon represents new data not currently collected
* 'BR' indicates a defined business requirement (included in NHS guidelines)
* Stars are things radiologists indicated as being useful for their assessment
* BCa is shorthand for breast cancer

### Mapping requirements to reality 

We analysed the paperwork from a screening clinic to see what information was most frequently captured. While this only gives a very rough approximation (we plan to analyse more clinics in the coming weeks) it is useful to see that in the majority of appointments, no medical information needs to be recorded.

When it was necessary, the topics recorded in our sample clinic were:

* HRT (18% of appointments)
* breast surgery (8%)
* breast disease (4%)
* breast features (2%)
* breast implants (1%)
* medical devices (1%)
* symptoms (1%)

This may not be the most frequently used part of our service, but the information gathered here is crucial for the overall effectiveness of the breast screening programme.

## Creating an appropriate path

Regardless of how this question is asked, we want to provide mammographers with an efficient way to record whatever information they are told.

Our first solution was to present a standard set of questions that could cover any previous medical issue. 

We sketched out a form that gathered details of:

* **which** breasts were affected
* **when** it happened
* **what** surgery or treatment they'd had (and **why**)
* the location **where** this was done.

After consulting with subject matter experts, we quickly realised things were a bit more nuanced than that - they only want to know certain information about each issue. 

The benefits of presenting users with a single, familiar pattern were far outweighed by the downsides of including fields for things that aren't necessary.

They also told us that because this information is coming from participants, it can't be wholly relied upon. Their preference is to ask as few questions as possible that would give them the information needed to inform their actions.

Some of the feedback included:

> "If you're asking the participant to tell you about their breast cancer, you want to keep it really simple because they don't know the complexities of it."

> "The year and place that they had treatment is really, really helpful because that means we can track down further information."
 
> "They know they have a scar, but unbelievably they'll often forget the side of the breast. Sometimes they tell you it's the left and it's the right."

> "All I want to know is if they've had a history of cysts. It doesn't really matter how many or where, because often if you've got one cyst, you've got 45."

> "Asking about the type of implant is mandated in the guidelines, but I would argue the guidelines probably need to change as that's not helpful information."

> "I don't need to be told which side a medical device implant is, I can see it."

> "I want to know if something has been taken out. When it was done is not relevant."

## Honing in on requirements

Through discussions we've been able to refine what's actually needed for each issue. 

* **Breast cancer** - which breasts, diagnosis year, surgery, treatment, treatment location
* **Implanted medical devices** - device type, if it has been removed
* **Breast implants or augmentation** - which breasts, implant type, if they have been removed, consent to continue
* **Mastectomy or lumpectomy** - which breasts, surgery type, reason (such as risk reduction)
* **Cysts** - yes or no
* **Benign lumps** - which breasts, diagnosis year, surgery, treatment location
* **Other procedure** - what type, which breasts

There are alternative ways to group these (for example, breast implant removal could be captured under other procedures or breast implants) which we will continue to explore through user testing.

Each issue has been turned into a short data collection form which can be accessed from a medical information dashboard.

### An example journey for collecting breast cancer information

The side-by-side form pattern on the following prototype images is not typical in the NHS design system. We've used it as it matches the way radiographers work, adding information about a participant as they are stood facing them.

![Options to select whether cancer was in the right or left breast, with a backup option if they don't know](breast-cancer-flow-1.png 'Participants will usually know if cancer had been found in one or both breasts, but not always.')

![Radio options for a lumpectomy or mastectomy that the participant may have had](breast-cancer-flow-2.png 'Options to select the same or different procedures on each breast. When they have had procedures, we need to know if there is any breast tissue remaining that needs to be scanned.')

![Checkboxes for surgery that people may have following a breast cancer diagnosis](breast-cancer-flow-3.png 'We need to know about other surgery that might affect the appearance of mammogram images. Participants may have had more than one of these on each side, so the form uses checkboxes rather than radio buttons.')

![Checkboxes for the treatments that can affect each breast, with a separate list for systemic treatments that affect the whole body](breast-cancer-flow-4.png 'Some treatments are breast specific, while others affect the whole body so are recorded with a single option.')

![Radio button options for selecting location information, which trigger a way to add details](breast-cancer-flow-5.png 'We can provide an autocomplete tool for treatment at an NHS unit, but also need to cater for more complex location information.')

![Final part of the form with a freeform box and various save options](breast-cancer-flow-6.png 'Each medical info form has a way to add additional notes that are not covered in the fields above. Some will capture all the information at once, while others will allow users to add another (for example, if there were multiple instances of breast cancer).')

### Different user needs for dates

There was a general consensus between user groups about what was important in each area, with one exception; dates.

Radiologists made it clear that dates were only necessary for accessing breast cancer and benign lumps so pathology reports containing the full diagnosis and treatment information. In all other instances, it was not needed. As long as they know that a thing had occurred at some point in the past, that was enough to base their assessment on.

However, radiographers felt there was a valid need to collect this information. It may not be necessary during this screening episode, but the next time a radiographer is reviewing the information with the participant at a mammogram appointment, being able to refer to a year is very useful.

We are continuing to test this with users, but the current approach is likely to be an optional 'Year' field on each form. This does bring potential complications (Do we want the treatment date, or the diagnosis date? Is a year too vague, or would a month be useful too? Do participants take a disproportionate amount of time to answer questions about dates?) but this can be adapted as we gather more feedback.

## Before and after data collection

We've looked at ways to make it as easy as possible for users to begin the relevant data collection journey based on what gets mentioned by the participant. This means clear actions that leave no ambiguity about which issue should be recorded where.

### The initial design

While we were refining the categories, our prototype used the summary list component from the GOV.UK system.

![A list of medical information categories, each with an option to add details](med-history-card-draft.png)

This pattern takes up a large portion of the page and the repetitive nature of the links made it difficult for users to quickly scan and make the appropriate selection. The list of links also made it appear that there are a lot of actions for the user to take, even if the intention is for them to ignore anything irrelevant.

### The latest design

We've devised a more space-efficient pattern using a row of buttons to launch each data-capture journey.

![A medical information summary card with clickable buttons showing each type of data to capture](med-history-card-prototype.png)

### Displaying information

Once data has been collected, we need to show this to the user, and give them the opportunity to edit each item.

![Displaying information captured about breast implants and other procedures within a summary table](med-history-info-recorded.png)

This does create a hefty table in the interface, but with medical history being recorded quite infrequently it's unlikely to disrupt the user workflow. It's possible to add multiple issues, which are presented one after the other. When the medical history card is collapsed, we will display a summary counter so users will still be able to see that something has been recorded.

This is a pattern we're using for information collected during this appointment. We'll need to do further work to determine how this could be displayed in a future appointment, or when data has been pulled into the system via another source.

## What we’re doing next 

Now we've refined these journeys with the radiologists and radiographers we work closely with, they now need to be tested with a wider set of users. We're particularly looking to see how they work alongside the rest of the service and whether they cover the myriad of scenarios that occur in day-to-day mammogram appointments.

We're also aiming to find out if:

* collecting structured information adds significant time to an appointment
* radiographers think any information would be difficult to collect 
* there's anything that radiographers typically discuss that doesn't have a place to go

While feedback is being gathered, our immediate task is to design the pages that may appear depending on what medical information is recorded. For example, when a participant says they have breast implants, the next step is to get their consent to continue.
