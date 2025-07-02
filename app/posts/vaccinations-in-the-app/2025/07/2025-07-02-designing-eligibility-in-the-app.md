---
title: "Designing eligibility for vaccinations in the NHS App"
date: 2025-07-02
---

We’re working on a new vaccination feature in the NHS App to help people of any age:

* understand which vaccines they should get
* check if they’ve already had them
* get a convenient appointment

Our aim is to make vaccination information more relevant and personal, based on what we know about them. We’re doing that using a new Eligibility API that brings together things like age and vaccine history.
 
By tailoring the experience, we hope to make it easier for people to take action, reduce pressure on frontline services, and ultimately improve uptake.

## First vaccine: RSV
 
We’re starting with the RSV vaccine, and one of the key groups it's offered to is older adults within a specific age range. By using age and vaccine appointment data, we can give adults checking their eligibility a more tailored experience.
 
But it’s not straightforward. Here’s how we’re tackling two of the biggest content challenges.


## Designing for uncertainty

One way we’re personalising the experience is by showing in the App:

* any vaccination appointment we believe they've already booked
* any vaccination we believe they’ve already had (and the date)

**Appointment booked**

![Screenshot of a page titled 'RSV for older adults', playing back to the user that they have an appointment booked](already-booked.png) 

But what if we’ve got these events, or the person's age, wrong? 
 
To avoid shutting out people who should get the vaccine, we’re designing ways for them to challenge what they see and take action if something doesn’t look right. 
 
We’re testing designs where the personalised message still confidently conveys that the user does not need the vaccine, but allows them to flag concerns and proceed with getting the vaccination, if needed.

Part of this involves a 'Help and Support' page to guide users who think something might be wrong. One place we link to this is from the 'Vaccination given' screen shown here:

**Vaccination given**

![Screenshot of a page titled 'RSV for older adults', playing back to the user that they've already been vaccinated, with a help and support link](already-vaccd.png) 

The 'Help and Support' page will explain why, on occasion, vaccination information may not appear correctly and what steps they can take.

## Telling people they cannot have it

Even when the data is right, it’s hard telling people they are not eligible. We currently say:

>“We do not believe you can have it. This is because you:
>
>* are not aged 75 to 79”

This is not landing well for everyone. People who are proactive about their health often don’t feel that’s a good enough reason.
 
One user, aged 80, asked: 

>“Why does it stop at 79? That doesn’t seem fair.”
 
Another, with a weakened immune system, said they planned to check with their GP in case they still qualified.
 
They have a point. Clinicians reminded us that the vaccine is available privately – so technically, anyone could choose to have it.
 
Perhaps the 'Help and Support' page can help here too. If we had empathetic content on that page for ineligible people who are unsure or unhappy, might this reassure them?

![Screenshot of ineligibility screen](ineligible.png)

One last point: you'll notice we've avoided using the word 'eligible'. It's a policy word that can be confusing — especially for users who are not fluent in English or with low literacy.


