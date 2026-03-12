---
title: Reducing errors for image readers
description: Exploring what we can do to improve feedback and reduce errors for image readers when moving to the next case
date: 2026-03-12
author: Rebecca Cottrell
opengraphImage:
  src: /manage-breast-screening/2026/03/reducing-errors-for-image-readers/toast-and-disabled-buttons.png
  alt: 
tags:
  - beta
  - prototype
  - image reading
---

Image readers review mammograms to check for potential signs of cancer that show up on the images. Most cases take under one minute to read, and most cases are normal. The software used to record their opinion makes it possible to record an opinion of ‘normal’ in one click, using the mouse or a keyboard shortcut. 


## What happens currently

Image readers have a set number of cases to get through, and NHS targets state that every case must be read within two weeks of a person attending their screening appointment. It must not be possible to accidentally record a normal opinion without reading a case. Theoretically, a keyboard shortcut or mouse could be pressed twice, recording an opinion of normal on two separate cases without noticing. To prevent this, NBSS disables the normal button for two seconds after a new case is loaded. This helps the image reader to understand they’re looking at a fresh case, and physically prevents a double click.

We’ve decided to retain the mechanism of disabling the opinion buttons for a period of time after the user gives an opinion on a case.

## Why not a confirmation step? 

In lower-volume workflows, a confirmation step would be a conventional safeguard. But this would add too much friction given the number of cases readers need to go through. Disabling the buttons briefly is a compromise that balances efficiency with accuracy.

## NBSS screenshots 

For context, here are two screenshots showing how NBSS handles the disabled button state and shows feedback for image readers: 

![NBSS's image reading screen with no buttons disabled](nbss-layout.png)

![NBSS with an alert saying double click detected, and the save button disabled](nbss-double-click.png)


## Disabling opinion buttons
We needed to draw a distinction between:

* making sure that accidental double clicks cannot result in accidental opinions
* policing the minimum of time we expect readers to review a case


The service should not dictate how long image readers read for. Accidental double-clicking (or tapping a keyboard shortcut) happens in a second or two, so we think disabling the buttons for just 5 seconds should work well for our purposes. We may adjust this number as we see how well it works in practice. 


## How users currently understand they've moved to a new case

When moving to a new case, a few things happen: 

* Mammograms reload on PACS (Picture Archiving and Communication System)
* NBSS may have a short lag while it loads new patient information 
* In some BSOs (Breast Screening Offices), users find a matching case on paper to cross-check information and see information on paper that isn’t in NBSS 

All of this serves the purpose of helping the user understand they’ve moved to another case. 

With our new service, some things will remain the same: 

* Mammograms reload on PACS
* Our tool loads new patient information and thumbnails, which may have a different structure depending on the information and number of thumbnails  

With our new service, there’ll be no paper to shuffle through. And in addition we've added a toast notification. 


## Toast notification for quick feedback 

A toast notification is a lightweight, compact alert that auto-dismisses, unlike a static notification banner. Our toast banner shows the user what opinion they've given, and for whom. 

We think showing this will help the user:

* understand they've moved to a new case
* see the opinion they gave 
* go to review and change their opinion if needed

Auto-dismissing content is generally a problem for accessibility, as users may not catch it in time. Here it's a conscious trade-off. A persistent notification risks adding visual noise to an already complex screen, and the tick-tock rhythm of the toast appearing and disappearing is itself a useful signal that a case transition has occurred.


## Putting it all together

In the gif below, you can see the disabled state for the dark mode buttons, and the toast notification (which says ‘Normal opinion recorded for (person’s name)’). 


![Gif showing moving from one case to the next, with buttons disabled and toast banner displaying](/manage-breast-screening/2026/03/reducing-errors-for-image-readers/toast-buttons.gif)



## What’s next

We need to check if the disabled buttons serve their intended purpose, and may tweak the length of time they stay disabled. Too short and a double-click could still go undetected; too long and it becomes an annoyance.


