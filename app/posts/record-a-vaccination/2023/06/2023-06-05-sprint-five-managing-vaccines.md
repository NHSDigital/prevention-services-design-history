---
title: "Sprint five: managing vaccines"
date: 2023-06-05
---

## Designing a new service to manage vaccines

After testing our prototypes in [sprint one: managing vaccines](https://record-a-vaccination-design-history.designhistory.app/sprint-one-managing-vaccines), we learnt users typically:

- Order stock from one person or team that handles orders for their organisation
- Monitor stock levels typically through a spreadsheet or makeshift system
- Find it time-consuming to add vaccines and batches of stock into point-of-care (POC) systems
- Do not know when batches of stock have run out
- Are unsure when they have successfully added stock to the system

> Research by the Capture and Flow workstream uncovered users can accidentally select retired vaccines in some current POC systems, resulting in costly amendments and data quality issues.

## Design thinking: how might we

Using these insights, along with what we uncovered in discovery and sprint one, we developed ‘how might we’ statements to frame design challenges and focus on the right problems. Broader questions helped us to generate more creative ideas.

For example, how might we:

- support system administrators to monitor and manage stock levels in the system?
- make it easy for users to add vaccines to the system?
- make it simple for system administrators to view all active batches in the system?
- ensure users only select active vaccines and batches in the system?
- help users know when they or others have finished a vaccine/batch in the system?
- make it easy for users to manage (activate/deactivate) batches in the system?
- help users know when they have successfully added a vaccine to the system?

## Design iterations and testing

We iterated our prototypes, exploring ways users:

- Navigate manage vaccine stock tasks from the home screen
- Set up vaccines they plan to give
- Remove vaccines they plan to stop giving
- Add new batches of a vaccine
- Are notified of:
  - low stock
  - when and why a new batch has been added
  - a new vaccine has become available nationally

## Adding vaccines and batches

To support users, we created a simple 3-step wizard to help them add their organisation’s vaccines and batches.

The design ensures, users only need to perform:

- step one rarely
- step two occasionally
- step three frequently (when new batches of stock are delivered).

In contrast, some current POC systems require users to perform all steps every time they add a batch, which is time-consuming and inefficient.

**Step 1:** User add vaccines their organisation plans to administer, like Flu, Covid-19 and Pneumoccocal.

![Adding vaccine type](n6b619rif2940ai31chnvvubj2yn.png)

**Step 2:** User adds the vaccine manufacturer details, formulation, and a minimum stock threshold to activate low-stock alerts.

This step is repetitive until the user has added all vaccines they expect to receive.

![Adding vaccine manufacturer details screen](gocy3hdb4xwrw1l6s7ykmdgfg73w.png)

**Step 3:** User adds batches of stock, including the batch number, number of units and expiry date.

Again, the user can repeat this step until they have added all batches to the system.

![Add batch screen](ajv8l4dii61ag0ehppb143agdoc3.png)

### Maintaining data quality

Once a user completes the set-up wizard process, vaccinators can only view and select active batches in the system. This avoids current issues whereby vaccinators can record data against retired vaccines, resulting in data quality issues.

### Allowing vaccinators to add batches

If, for any reason, a vaccinator could not find the batch in the system but had available stock to vaccinate a patient — we explored allowing them to add a new batch and notifying a user who manages vaccine stock for their organisation.

> We learnt users value the level of control and visibility over managing vaccine stock and batches, without hindering or preventing vaccinators from adding a batch to record a vaccination event.

## Monitoring and managing stock levels

To help users track stock levels, so they have enough stock to cover booked appointments or to prompt them to order more, we developed:

- ways to highlight low stock — through alerts and graphics
- a dashboard to view stock levels against bookings

### Vaccine and batch management list

Using the appointment list pattern, we evolved in [sprint four: finding a patient and recording a vaccination](https://record-a-vaccination-service-design-history.designhistory.app/sprint-4-finding-patients-recording-vaccinations), we created a vaccine and batch management list for users to view.

Using this list, users can remove inactive vaccines and deactivate batches, while vaccinators can only see when batches are finished.

Additionally, users can set expiry dates for vaccine batches during the wizard setup, so batches are automatically deactivated.

**The appointment list can be filtered and sorted to view in-stock, active and used batches.**

![Vaccine and batch management list](0gsqn3mh5hainkv3h8tk7eo47kx7.png)

## Designing patterns for microcopy

We developed a success message to help users know when they have successfully added a batch. We were also mindful that this should form part of a design pattern for all success messages because they appear heavily throughout the user flow, informing users that they are either closer to their goal or have achieved it.

Tiny bits of copy, featured in success messages and alerts, will feature heavily throughout our service and are crucial to the user experience. They tell users what to do, address their concerns and provide context. And make the system friendly so the user feels valued and smart. As a result, we also recognise the importance of developing a microcopy design pattern.

## What we learnt

Users confirmed:

- the step-by-step process was easy, straightforward and self-explanatory.
- adding batches separately (in step 3) namely reducing the repetition of keying in unnecessary information beneficial
- the summary screen motivated them to recheck and confirm the vaccines and stock they had selected.
- the low stock alert would prompt them to order more stock
- stock is measured in vials and doses (not units) and would expect the system to calculate the number of doses per vial automatically.
- a choice to set batches to 'deactivate' in the event they wanted to add them to the system but not make them immediately available to vaccinators.
