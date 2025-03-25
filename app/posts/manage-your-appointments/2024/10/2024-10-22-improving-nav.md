---
title: "Improving navigation within the dashboard"
date: 2024-10-22
---

As we tested the early iterations of the MYA service, we found that users struggled to navigate properly from one section to another.   

## The initial design

The first iteration was designed with a landing page, and used breadcrumbs to direct the users back to the landing page, to navigate to different sections of the site. We found that users repeatedly missed the breadcrumbs, and got stuck when we asked them to navigate around the site. 

### landing page


![Screenshot that shows the MYA landing page, with cards to navigate to different sections of the site](landing-page.png)

Users struggled with changing between different sites, which was accessed via the breadcrumb. 

### Availability overview

![Screenshot of a page which lists existing availability periods, with a button to create more](availability-overview.png)

After completing tasks such as creating availability, many of our users got stuck when we asked them to navigate to the ‘view availability’ section, and would click on ‘view or edit’ on the availability periods list. 

## What we did

We looked at other services in Vaccinations Digital Services (VDS), to see how they approached navigation. We focused on services like Record a vaccination (RAVS) and Manage vaccinations in schools (Mavis), which were similar to MYA in terms of user groups and tasks. 

We decided to introduce [NHS header navigation](https://service-manual.nhs.uk/design-system/components/header), which we assumed would make it easier for our users to move around the MYA service.  This would also make MYA visually consistent with RAVS and MYA. We also moved the ‘change site’ link into the header, in line with the NHS pattern for logged in service headers 

The navigation is visible when the user is moving around the site, and disappears when the user starts a task (e.g creating availability), to avoid them accidentally leaving the task flow before they are finished. 


### Landing page

![Screenshot of a page that shows a monthly overview, where users can see appointment data broken down by week](landing-improved.png)

In the second iteration of the availability view, we changed the yearly view for a monthly view that would give users a breakdown of appointment totals by week.  We also updated the weekly view, so that the booked appointments were broken down by service or cohort for each day. 

### Availability view

![Screenshot of a page that shows a monthly overview, where users can see appointment data broken down by week](availability-improved.png)


## Findings 
 
Overall, we found that the header navigation was more usable than the breadcrumbs.  Users saw the navigation bar, and were able to use it to move between sections of the site, and change sites successfully. 