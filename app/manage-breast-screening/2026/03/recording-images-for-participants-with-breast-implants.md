---
title: Recording images for participants with breast implants
description: We've improved how images are recorded by mammographers when a participant with breast implants attends a breast screening appointment.
date: 2026-02-09
author: Danny Chadburn
opengraphImage:
  src: /manage-breast-screening/2026/01/improving-the-partial-mammogram-process/additional-details.png
  alt: Options for mammographers to record additional details related to the mammogram
tags:
  - beta
  - prototype
  - breast screening
---

We've improved how images are recorded by mammographers when a participant with breast implants attends a breast screening appointment.

In these instances, a specialist mammogram method called the 'Eklund technique' is used. This involves adjusting the implants so as much breast tissue as possible can be captured in the X-rays. 

Our service needs to provide a way for mammographers to accurately record Eklund views. This information can then be shown to image readers when reviewing the case to ensure they don't miss the additional images.

## Why we needed to make this update

We have two ways of getting image information into our system. Automatically from a mammography machine (via an image transfer gateway) or manually (where mammographers provide details of the images they have taken).

The automatic route will tag Eklund view images accordingly, appending 'ID' (Implant Displaced) to the typical CC (Cranio-Caudal) and MLO (Medio-Lateral Oblique) views.

In the manual workflow, our initial designs had Eklund counters for each breast alongside standard views.

![???](???.png)

## Identifying some issues

After showing this to mammographers in user research, a couple of flaws were highlighted:

### Specific views could not be added

Eklund views can be CC or MLO, but our system didn't allow for any differentiation between them.

### Eklund views are additional images, not substitutes

Our prototype had been built on an incorrect assumption that Eklund views were done instead of standard views rather than in addition to. One of our expert radiologists said:

> Eklund views are the fifth and sixth view taken effectively... they are not an adjustment of the standard views which are taken normally, but additional to them.

This meant Eklund views could be recorded without adding any standard images, which goes against clinical guidance.

### Inconsistent labelling

We've used Right Eklund and Left Eklund, while the image labels used in PACS (the Picture Archiving and Communication System) are RCCID, LCCID, RMLOID and LMLOID (the standard view codes, plus the ID code appended).

## A new and improved version

We moved from Eklund counters to a more granular, 'triggered approach.

![???](???.png)

By putting the extra counters within a details component, they are easily available but not intrusive to regular screenings.

Implants are encountered in around 3-5% of appointments. This is infrequent but important data to capture, so we wanted to avoid the extra options overwhelming the page.

![???](???.png)

Selecting 'Other views taken' gives users extra counters specific to each view on each side. The labels used mirror how images will be tagged when coming through the automatic method

## Why we settled on this approach

We weighed up the pros and cons of other ways to capture this information. After chatting them through with subject matter experts, we were able to decide which was the most suitable to put into our prototype for further user testing.

### Eklund checkboxes

We considered giving users a way to indicate 'Right Eklund' and 'Left Eklund' while adding the views taken to their CC or MLO counters.

This was quickly rejected as mammographers deem Eklund views to a different thing than a standard view. Counting a RCCID in the same bucket as a RCC simply didn't make sense.

### Treating Eklund views as additional images

There are various other reasons to take more than a standard set of 4 images, including repeat images (when the first effort was of poor quality) and additional images (often needed when the participant has large breasts).

Our system is set up to ask for a reason when a user adds more than one of any view. We looked into whether we should add 'because it was an Eklund view' to that list of reasons.

This was deemed unsuitable as it did not mirror the automatic image workflow. When Eklund images are transferred from the mammogram machine they will come tagged with 'ID'. We should allow users to do the same using the manual method without going through an extra step.

## Showing this to users

We are testing this step in the journey to ensure the 'Other views' function is intuitive for mammographers - specifically we want to know if they notice it, and what they expect to be available within it.

We will also be looking into other related areas, including:

### Flexibility

We want to know if there are any other views that may need to be recorded during a mammogram.

The 'Other views' method allows flexibility to expand the options to cover more views (such as lateral or cleavage). These are typically done at assessment rather than screening, but we need to explore if there are any circumstances where these need to be included as options.

### Validation

We are considering whether to implement rules that relate to how Eklund views should be recorded.

For example, we could disable the RCCID counter until a regular RCC has been added (as they should be additional not substitute images), or we could show an alert if implants have been recorded for a participant, but no Eklund views have been recorded.

### Data use

We need to understand how best to show image information collected to image readers so they know Eklund views are included in a case.

We're considering flagging when cases have Eklund views added (for example, an alert saying "This case has Eklund views"), or specifying the exact number, type and side.

And finally, we need to determine how these options relate to statuses within the service. Things get complicated when we are deciding how to handle appointments based on certain selections, particularly regarding keeping 'episodes' open when there is a potential follow-up appointment to be arranged.
