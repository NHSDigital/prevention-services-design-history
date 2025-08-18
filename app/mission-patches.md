---
layout: page
title: Mission patches
description: Archive of patches created to celebrate milestones in the development of our different services.
eleventyNavigation:
  key: "{{ title }}"
  excerpt: "{{ description }}"
  parent: Home
---


{% from "gallery/macro.njk" import appGallery with context %}

## Manage vaccinations in schools

We chose a polar bear as the team’s mascot because:

* they’re big on protecting cubs
* they live in hostile environments
* they’re highly adaptive
* they’re great at conserving energy

That, and everyone on the team seems to love [The Bear](https://www.imdb.com/title/tt14452776/).

{{ appGallery({
  classes: "app-gallery--mission-patches",
  items: [
  {
    text: "Mavis pilot mission patch",
    caption: "The mission patch for our pilot features Mavis the polar bear protecting her 2 cubs. To celebrate completion of the pilot, our first mission patch features the northern lights, reflecting the colours of the teams involved with its development, while the 3 stars represent the 3 SAIS teams we piloted with."
  },
  {
    text: "Mavis HPV private beta mission patch",
    caption: "The mission patch for the HPV private beta features Mavis watching the sun rise over the horizon, and represents the launch of our new service."
  },
  {
    text: "Mavis ‘doubles’ mission patch",
    caption: "The mission patch for the release supporting ‘doubles’ (co-administered MenACWY and Td/IPV vaccinations) features Mavis meeting her double."
  }]
}) }}

## Record a vaccination

We chose a hare as the team’s mascot because they are able to make big leaps forward.

{{ appGallery({
  classes: "app-gallery--mission-patches",
  items: [
  {
    text: "RAVS pilot mission patch",
    caption: "This mission patch celebrated the launch of the pilot in June 2024. The 4 hearts represent the locations of the organisations that took part."
  },
  {
    text: "RAVS 1 million jabs mission patch",
    caption: "This mission patch celebrated the 1 millionth vaccination recorded by the service in January 2025. The background text contains the vaccine product names."
  }]
}) }}

## Vaccinations

These mission patches celebrate work which spans multiple vaccination services and teams.

{{ appGallery({
  classes: "app-gallery--mission-patches",
  items: [
  {
    text: "Autumn/Winter 2022 mission patch",
    caption: "This mission patch celebrated the work of the digital services supporting the Autumn/Winter 2022 seasonal vaccinations."
  },
  {
    text: "Autumn/Winter 2024 mission patch",
    caption: "This mission patch celebrated the work of the digital services supporting the Autumn/Winter 2024 seasonal vaccinations."
  },
  {
    text: "RSV mission patch",
    caption: "This sparkly mission patch celebrated the launch of a brand new RSV vaccination, which was enabled by multiple teams including Select & Invite, Book a vaccination, Record a vaccination, and Capture & Flow."
  }]
}) }}
