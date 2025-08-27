---
title: "Searching for patients (beta)"
date: 2023-10-02
---
### How users find patients###

In this sprint, we focused on how we could support users to search and find patients in [PDS (patient demographic service)] (https://digital.nhs.uk/services/personal-demographics-service). We followed [PDS guidance] (https://digital.nhs.uk/developer/api-catalogue/personal-demographics-service-fhir#get-/Patient) to maintain clinical safety and patient privacy.

### Healthcare worker access###

Since users of RAVS will be authorised healthcare workers, we decided PDS' healthcare worker access mode would be the most suitable. Users can view results for up to 50 matching patient records in this mode.

### Protecting patient privacy###

To protect patient privacy, we designed a step-by-step search process to encourage users to:

- Try a search that will likely result in a unique match by entering as many search parameters as possible. Failing this, to then;
- Try a search that results in multiple matches.

### Helping users to search###

To support users in following this process, we developed search tips to help them find patients quickly, effectively, and safely. The tips pointed to a comprehensive help section if they needed more information.

Learn more about our [support and help content design approach](https://record-a-vaccination-design-history.designhistory.app/editing-records-support-and-help-content-beta).

### The PDS journey###

**Users enter the required fields to find an exact match**

To begin a search, users must enter at least 2 out of 3 identifiers, such as the last name, postcode, or date of birth.

Following a search, PDS results, vaccination records and appointments are presented to users.

However, feedback suggests we should consider whether presenting other records in the results is valuable. Presenting less information could minimise cognitive load and enable the user to locate the right record.

![Screen to search for a patient](8og98j9irt0jji0kgt43hxzedwtb.png)

**Inline content outlines step-by-step tips for searching for patients**

![Search tips inline content](lmceerk77fh7dvqpkmoumd58ysff.png)

**Prompting users to enter more fields**

Content prompts users to enter ‘more fields’ if they do not find a unique match.

We found users value additional fields, like the first name, gender, telephone, and email, and anticipate searching by a patient’s phone number.

![Screen content prompts users to enter more fields](otnavcz7dpzecdedsssa7hpga8kb.png)

**Users perform a non-exact match**

A non-exact match can be selected if the user fails to find a matching record.

We found users need clarification about what the non-exact match can allow them to do, suggesting more descriptive content like ‘search for similar patients' would be more meaningful.

Users also wanted to understand what specific fields could be used in this type of search.

![User selects non-exact match option](pz5mytbswx6busaeduye68tl1tj4.png)

**Adding new patients**

If users cannot find an exact match, the content prompts them to add a new patient.

We built positive friction into the journey at this stage to discourage users from adding new patients. We designed a notification explaining that they should only perform this action if they had exhausted the step-by-step search tips and the negative consequences of adding unnecessary records or duplicates.

Users felt this was a clear message and welcomed the friction at this stage.

However, further user feedback suggests we should consider where the ability to add a patient appears in the journey without making it too easy.

![Notification appears](a2zf1lebwlryn6lnc4gj7x31ip4t.png)

### Usability score and summary###
Using a seven-point rating scale, users **scored our PDS search process 7 out of 7 (very confident)**. Overall, they found searching for patients easy.

> It’s very simple.

However, users required search tips to grasp the different step-by-step search methods and found the information about wildcards helpful.

All participants appreciated the need to find a patient through multiple routes before adding a new patient. For example, if a patient was new to the country and didn't hold a record in PDS.

> There’s clear signposting.
