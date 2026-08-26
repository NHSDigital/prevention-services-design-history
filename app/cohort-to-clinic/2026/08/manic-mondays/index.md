---
title: "Manic Mondays: how should we schedule clinics?"
date: 2026-08-26
author: Anna Hepburn
---
When you are working with professional users who have been using a computer system for years, or even decades, it can be harder to uncover their fundamental user needs. These can be obscured by longstanding ways of doing things and entrenched mental models.

In the ‘cohort to clinic’ team, we have been looking at how users in breast screening offices (BSOs) might schedule routine screening and book people into appointments in Rubie, the new system we are designing.

In the current system, NBSS, users create a clinic, which in this context might last months or years[HE1.1] (not to be confused with a day’s clinic, which is one day where people are screened). When they create the clinic[ME2.1][ME2.2], they add ‘sessions’, which can last one day, or just a morning or afternoon. A session is a group of appointment slots.

## Creating sessions

When the user creates a session in NBSS, one of the key pieces of information they need to add is the day of the week. This means that if they create a Monday session, the structure of that session will be applied to every Monday between the start date and end date they choose. For many BSOs, it seems to be the case that every Monday in a certain clinic location will look roughly the same, and every Tuesday, and so on.

So, for Rubie, one option would be to design a scheduling system that also operates on the basis that Mondays are always the same. This fits a very familiar model of the recurring meeting in Microsoft Outlook or Google Calendar. We have a meeting (or a set of appointment slots) and we set it to recur every Monday.

But it’s hard to tell how much this way of structuring clinics is influenced by the way users need to create sessions in NBSS, rather than a fundamental need to create a lot of Mondays or Tuesdays that have the same structure[ME3.1].

## When a day needs to be different

BSO staff have told us that if they have a clinic day that needs to have a different structure to their standard Monday, Tuesday etc, they need to go into that one clinic day and change it manually. So, then it seems restrictive to have every Monday the same.

Perhaps the fundamental user need is to be able to apply a structure to a day in the calendar that meets the needs of the staff doing the screening on that particular day. Then other elements of a session, such as start and end time, and the length of slots, are more important than the day of the week.

This is what prompted the idea to have session templates in Rubie that are agnostic of the day of the week. This means a BSO could have one session template for a standard weekday in a static clinic[HE4.1][HE4.2][AH4.3], which they could apply to every day where that structure meets their needs. They might have a session template for a mobile van in one location, and a different one for another location because staff travel times affect start and end times. They could have another template for a day of ‘special’ appointments, which they could apply every other Friday or on an ad hoc basis. If a BSO has, say, 5 or 6 shapes of session, they could have a template for each and apply these to whichever days they want.

We are also designing sessions in Rubie so BSOs would be able to hold slots in the templates, for example for rebookings or for double-length appointments. If a BSO usually holds 3 slots for rebooking each morning, in NBSS they would need to go into every day and manually hold those 3 slots. That is because they can’t hold slots until the clinic is open and the sessions have been applied to each day. In Rubie, we’re envisaging that a certain number of held or cancelled slots could be part of a session template. So, if a BSO has a template with 3 morning slots held for rebooking, that could be applied to whichever days they wanted without needing to go into each day to change it.

We hope this approach will be quicker and more flexible for BSO staff, but of course we’ll be doing ongoing user research with BSOs to find out, as well as continuing to challenge our own assumptions.
