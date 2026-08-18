---
title: Delegation for the 2026 to 2027 winter flu programme
date: 2026-07-13
---

SAIS teams typically vaccinate children using the Patient Group Direction protocol (PGD).

A PGD allows a registered nurse or other equivalent professional (who cannot usually prescribe medications) to:

- assess a child’s suitability for vaccination
- draw up a vaccine (if it is not in a pre-filled syringe)
- vaccinate them, and record the vaccination on their patient record

For flu, because millions of children need to be vaccinated nationally within a short time window, additional protocols are in place to allow Healthcare assistants (HCAs) and other trained non-clinical staff to give flu vaccines. These still require an appropriate qualified and registered practitioner to assess that a child is suitable for vaccination.

For last winter’s flu programme, Mavis supported the following additional vaccination protocols:

- Patient Group Direction (PGD) with supply, for the nasal spray vaccine
- National protocol, for the injected flu vaccine
- Patient Specific Direction (PSD) for the nasal spray vaccine

For the 2026 to 2027 winter flu programme, the protocols used for HCAs to vaccinate are changing.

PGD with supply and National protocol are being replaced by the Influenza Vaccine Group Direction (VGD), which can be used for both nasal and injected vaccines. The VGD is operationally very similar to the old National Protocol.

The tables below document:

- the different user roles
- which protocols are available in which year
- who can perform which actions for each protocol
- what information is recorded in each case.

| Mavis&nbsp;role | Who the role can be assigned to |
| :---- | :---- |
| Nurse | Registered nurse or equivalent professional e.g. paramedic (Mavis assumes that any user logged in with a nurse role vaccinating in a PGD or VGD enabled session has signed the relevant documents for all vaccines) |
| HCA | Healthcare Support Worker with appropriate training to administer vaccinations |
| Prescriber | Registered prescriber such as a pharmacist, GP or prescribing nurse |
| Admin | SAIS admin worker who isn’t trained to vaccinate |

## 2025 to 2026

| Protocol | PGD | PGD supply | PSD | National protocol |
| :---- | :---- | :---- | :---- | :---- |
| Vaccines | All | Nasal flu | Nasal flu[^1] | Injected flu |
| **Action** | **Performed by** | | | |
| Triage | Nurse | Nurse | Prescriber | Nurse |
| Identify & pre-screen | Nurse | Nurse | HCA/Nurse[^2] | Nurse |
| Vaccinate | Nurse | HCA | HCA/Nurse | HCA |
| Record | Nurse | HCA | HCA/Nurse | HCA |
| **Action** | **Recorded by** | | | |
| Triage | User recording triage | User recording triage | User recording triage | User recording triage |
| Identify & pre-screen | User recording vaccination | Option to select a nurse | User recording vaccination | Option to select a nurse |
| Vaccinate | User recording vaccination | User recording vaccination | User recording vaccination | User recording vaccination |
| Record | User recording vaccination | User recording vaccination | User recording vaccination | User recording vaccination |

[^1]: PSD can be used for any vaccine in theory
[^2]: Only if child meets PSD criteria, otherwise another protocol must be used

## 2026 to 2027

| Protocol | PGD | PSD | VGD |
| :---- | :---- | :---- | :---- |
| Vaccines | All | Nasal flu[^3] | Nasal flu<br>Injected flu |
| **Action** | **Performed by** | | |
| Triage | Nurse | Prescriber | Nurse |
| Identify & pre-screen | Nurse | HCA/Nurse[^4] | Nurse |
| Vaccinate | Nurse | HCA/Nurse | HCA/Nurse |
| Record | Nurse | HCA/Nurse | HCA/Nurse |
| **Action** | **Recorded by** | | |
| Triage | User recording triage | User recording triage | User recording triage |
| Identify & pre-screen | User recording vaccination | User recording vaccination | If nurse recording, user recording vaccination<br>If HCA recording, option to select a nurse |
| Vaccinate | User recording vaccination | User recording vaccination | If nurse recording, option to select a HCA<br>If HCA recording, user recording vaccination |
| Record | User recording vaccination | User recording vaccination | User recording vaccination |

[^3]: PSD can be used for any vaccine in theory
[^4]: Only if child meets PSD criteria, otherwise another protocol must be used

## Changes needed to support the updated protocols

### Setting up a session

- Removed the national protocol as an option
- Updated the session protocol options so that they are now per user type, to give teams more flexibility during the 2026 to 2027 flu programme:
  - Nurses can vaccinate under either the PGD or VGD protocol
  - HCAs can vaccinate under VGD
- If the PSD protocol is enabled for a session, both nurses or HCAs can vaccinate children who have a PSD

![Form asking the user which protocol to use as the default for a session.](session-protocol.png 'Session protocol options')

### Recording a vaccination

#### For nurses

Added options to select which nurse or HCA who vaccinated under VGD, with themselves as the default, and their choice persisting in the browser session until the next day.

![Form asking a nurse to record a vaccination with the flu nasal spray.](record-vgd-nurse-nasal.png 'Nurse recording a vaccination with the flu nasal spray in a session using the VGD protocol')

![Form asking a nurse to record a vaccination with the injected flu vaccine.](record-vgd-nurse-injection.png 'Nurse recording a vaccination with the injected flu vaccine in a session using the VGD protocol')

#### For HCAs

- Added option to select nurse who identified and pre-screened, when vaccinating under VGD
- Removed ability to record vaccinations for a PGD-enabled session unless a PSD is in place
- Removed the need to confirm they’ve checked the pre-screening statements, unless a PSD is in place

![Form asking a HCA to record a vaccination with the flu nasal spray.](record-vgd-hca-nasal.png 'HCA recording a vaccination with the flu nasal spray in a session using the VGD protocol')

![Form asking a HCA to record a vaccination with the injected flu vaccine.](record-vgd-hca-injection.png 'HCA recording a vaccination with the injected flu vaccine in a session using the VGD protocol')

#### For prescribers

Added ability for prescriber to add PSDs to any PSD-enabled session.

#### For all roles

Started explicitly storing who recorded the vaccination on the vaccination record.

## Related links

- [Influenza vaccine (IIV and LAIV) Patient Group Direction (PGD)](https://www.england.nhs.uk/east-of-england/wp-content/uploads/sites/47/2026/06/Flu-PGD-v1.0-2026_27_FINAL.pdf) for 2026 to 2027
- [Influenza vaccine (IIV and LAIV) Vaccine Group Direction (VGD)](https://www.england.nhs.uk/east-of-england/wp-content/uploads/sites/47/2026/06/Flu-VGD-v1.0-2026_27_FINAL_.pdf) for 2026 to 2027
