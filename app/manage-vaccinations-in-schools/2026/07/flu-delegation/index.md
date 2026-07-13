---
title: Delegation for the 2026 to 2027 winter flu programme
date: 2026-07-13
---

For last winter’s flu programme, [Mavis added support for the following protocols](/manage-vaccinations-in-schools/2025/09/flu-recording/#protocols) to enable Healthcare assistants (HCAs) and other non-clinical staff to administer flu vaccines:

- National protocol, for the injected flu vaccine
- Patient Group Direction (PGD) with supply for the nasal spray vaccine
- Patient Specific Direction (PSD) for the nasal spray vaccine

Nurses could continue to administer all flu vaccines under PGD.

| Protocol | Patient Group Direction (PGD) | Patient Group Direction (PGD) with supply | Patient Specific Direction (PSD) | National protocol |
| - | - | - | - | - |
| Vaccinator | Nurse | HCA | HCA | HCA |
| Vaccines | Nasal spray<br>Injection | Nasal spray | Nasal spray | Injection |
| Vaccinator records supplier | No | Yes | No | Yes |
| Prescriber adds instruction | No | No | Yes | No |

## Updated protocols

For the 2026 to 2027 winter flu programme, the protocols used to record vaccinations are changing, with the national protocol and PGD with supply being removed.

In their place is [Vaccine Group Direction](https://www.gov.uk/government/publications/influenza-vaccine-group-direction-vgd-template) (VGD). This can be used by both nurses and HCAs for administering both the injected vaccine and nasal spray.

The VGD protocol requires those using it to record:

- the practitioner; the nurse who assessed the child
- the vaccinator; the nurse or HCA who prepared and administered the vaccine
- the recorder; the nurse or HCA who recorded the vaccination (in Mavis this is always the signed in user)

The new protocols can be summarised as follows:

| Protocol | Patient Group Direction (PGD) | Vaccine Group Direction (VGD) | Patient Specific Direction (PSD) |
| - | - | - | - |
| Vaccinator | Nurse | Nurse or HCA | HCA |
| Vaccines | Nasal spray<br>Injection | Nasal spray<br>Injection | Nasal spray |
| Vaccinator records practitioner | No | Yes | No |
| Prescriber adds instruction | No | No | Yes |

## Changes needed to support the updated protocols

### Setting up a session

- Removed the option to select whether healthcare assistants can administer the injected flu vaccine using the national protocol
- Added an option to allow teams to choose a default protocol for administering vaccines:
  - PGD (only nurses can administer vaccines)
  - VGD (nurses and HCAs can administer vaccines)

The option to allow HCAs to administer the flu nasal spray to children with a PSD remains, but only if the session is using PGD as the default protocol:

![Form asking the user which protocol to use as the default for a session.](session-protocol.png 'Session protocol options')

### Recording a vaccination

The protocol used to administer a vaccination depends on the user’s role and the default protocol chosen for a session.

#### When the default protocol is Patient Group Direction (PGD)

| Logged in user | Nurse | HCA |
| - | - | - |
| Can record a vaccination? | Yes | Only for children with a PSD added |
| Practitioner | – | – |
| Vaccinator | Nurse | HCA |
| Recorder | Nurse | HCA |
| Vaccines | Nasal spray<br>Injection | Nasal spray |
| Protocol | PGD | PSD |

#### When the default protocol is Vaccine Group Direction (VGD)

| Logged in user | Nurse | HCA |
| - | - | - |
| Can record a vaccination? | Yes | Yes |
| Practitioner | Nurse | Selected nurse |
| Vaccinator | Nurse | HCA |
| Recorder | Nurse | HCA |
| Vaccines | Nasal spray<br>Injection | Nasal spray<br>Injection |
| Protocol | VGD | VGD |

![Form asking the user to record a flu vaccination.](record-vaccination.png 'Recording a vaccination as an HCA in a session with the VGD protocol')

![Page allowing user to check and confirm a vaccination.](check-and-confirm.png 'Confirming a vaccination as an HCA in a session with the VGD protocol')
