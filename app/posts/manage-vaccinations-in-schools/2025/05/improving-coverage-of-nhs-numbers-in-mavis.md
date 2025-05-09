---
title: Improving coverage of NHS numbers in Mavis
date: 2025-05-12
---

Mavis needs to know every child's NHS number to report their vaccination back to their primary care record, as specified in [ISB 0149](https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/isb-0149-nhs-number/). When records don't have this unique identifier, they may not be sent to the right place or matched to the right person. This can make it impossible to find out in the future that the child has already had a vaccination.

This post describes the sources of patient records for Mavis, the ways that Mavis currently works with NHS numbers and patient records, and proposes a set of changes to try and increase the coverage of NHS numbers for records within Mavis.

## Current situation

As of Friday 2nd May 2025, across all SAIS teams using Mavis, there were around 69,700 patient records in cohorts in Mavis, of which about 1,800, or about 2.6%, had no NHS number.

Our most recently onboarded SAIS provider experienced 10% of records having no NHS number after uploading and automatic matching in Mavis. Our first SAIS provider also had 10% of records without NHS numbers after uploading to Mavis. They have since reduced this to less than 1% through manual matching of records.

![A diagram showing the flow of patient records into Mavis.](./mavis-record-flow-nhs-numbers.png "**Figure 1:** A diagram showing the flow of patient records into Mavis.")

### Sources of records

The school-aged immunisation service (SAIS) specification says that SAIS providers should attempt to identify and invite all of the target population for a vaccination programme by working with schools, Local Authorities, Child Health Information Services (CHIS) or other agencies to identify eligible children.

As a result, patient records in Mavis have five potential sources:

- **SAIS team patient records:** where a SAIS team uses an electronic patient record system, these records can be extracted and uploaded into Mavis.
  - They **are likely to include NHS numbers**, but may contain records from previous vaccination programmes with no NHS number.

- **CHIS patient records:** a local CHIS team may share records of eligible children in their area with a SAIS team in advance of a vaccination programme. 
  - They **are very likely to include NHS numbers**, but may include records for children in the local area who do not have an NHS number.

- **Local Authority school census records:** SAIS teams can receive lists of children, their demographics, parental contact details and their current school from Local Authorities, either directly or through the local CHIS provider. These are used to help ensure children’s schools and contact details are as up to date as possible.
  - These **will not include NHS numbers** so have to be matched to existing records via demographics. Mavis performs this matching for SAIS teams automatically.

- **Individual school class lists:** many SAIS teams receive class lists directly from schools before a vaccination programme to ensure they have as up to date information as possible for parental contact details and about which children are attending which school.
  - These **will not include NHS numbers** so have to be matched to existing records via demographics. Mavis performs this matching for SAIS teams automatically.

- **Parent-submitted consent responses:** when parents submit consent responses, Mavis automatically attempts to match these to existing child records by trying different combinations of the child’s name, date of birth, postcode and school. Where a response could not be matched to a record (which can happen if, for example, a child is new to a school and was not present on lists from CHIS or the school) a SAIS administrator can choose to create a new child record from the response after checking manually for an existing match.
  - These responses from parents **do not currently include an NHS number** as we do not ask parents for this information.

### Validating NHS numbers

All NHS numbers added to or edited within Mavis are validated at the point they are created or updated to ensure they are 10 numeric characters (ignoring whitespace) and that the final digit is a valid check digit for the number as a whole.

### Finding NHS numbers

Where patient records are added to Mavis with no NHS number, Mavis looks them up in PDS immediately after being added and thereafter twice a day, to ensure that Mavis has an accurate representation of the PDS flags. Currently this lookup uses an exact match on the child’s given name, surname, date of birth and postcode.

After this task has completed, there may still be some patient records in Mavis for which no NHS number could be found. At this point, SAIS administrative staff can lookup the child manually on the spine to attempt to find an NHS number for them. Mavis makes it easy to get a list of children with no NHS number to facilitate this.

Patients who have no NHS number in Mavis may do so for a number of reasons:

- **Children who use a different name in school:** sometimes a record received from a school or Local Authority may use a different name (e.g. a nickname, a compound surname or an alternative surname) in school from what is present on their NHS record.

- **Children with multiple mistakes on their record:** some records can have multiple mistakes due to errors in manual entry by either a school administrator, the parent or a SAIS administrator that prevent our current approach for matching against PDS from finding a result.

- **Children who have not been issued an NHS number:** children who have recently moved into the country from abroad, or who attend a private school with their parents living overseas may not have an NHS number. SAIS providers are not allowed to issue NHS numbers to these patients at the point of care.

## Proposed changes

We are planning to make the following technical changes to Mavis to improve the number of records that have NHS numbers associated with them:

  - **Extend existing exact matching approach:** we will change how Mavis finds NHS numbers in PDS. If an exact match using four attributes (given name, surname, date of birth and postcode) fails to return a result, Mavis will attempt different combinations of three attributes from the four.

  - **Cross-check demographics for NHS numbers provided by other sources:** where Mavis receives NHS numbers from uploads, we will check these in PDS against the demographic data we have and enable the SAIS teams to resolve any existing mismatches. Performing this check will help ensure the integrity of the records within Mavis.

  - **Parental consent forms:** we will update the parental consent flow to attempt to match the child details in the consent response to an NHS number while the parent is completing the response. If no match can be found, we will ask the parent to provide an NHS number, if they have it, or encourage the parent to check the details they’ve provided. The design of this interaction will be prototyped and evaluated with parents/carers before it is implemented to ensure it does not negatively impact user experience. We will draw on existing approaches in other NHS systems to benefit from existing best practices.

  - **Implement an interactive patient-matching approach:** we could add an additional method for matching a patient against PDS that does not rely on getting an exact match but instead attempts matches using different combinations of demographic data, returning a list of matches for SAIS staff to choose from.

  - **Flow vaccination events for patients with newly added NHS numbers:** For vaccination events previously recorded, when an NHS number is added to a record, the vaccination events need to be included in the Mavis reports based on the timestamp of when the NHS number was added to the record, rather than when the vaccination was given.

As well as these technical changes, we will also adopt the percentage of patient records without NHS numbers as a **key performance indicator** to monitor on an ongoing basis.

### Residual records with no NHS numbers

After making these technical changes to Mavis we would expect the proportion of records with no valid NHS number to go down.

However, we also expect that there will be a small, residual population that have no NHS number, principally composed of children who have recently moved in from abroad or who are boarders at an English private school with parents living overseas.

There is potential for this issue to be mitigated further in two ways:

- **Encouraging GP registration in Mavis:** Mavis could signpost parents of children with no known GP practice to register with a GP. This may help for movers-in from abroad, but may have limited impact for children boarding at private schools.

- **Allowing SAIS teams to issue NHS numbers:** SAIS teams cannot currently issue NHS numbers to children they vaccinate who do not already have one. Once the overall quality of the records has been improved, a policy change to allow SAIS teams to issue NHS numbers could be considered here to help solve this issue.
