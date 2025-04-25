---
title: Recording vaccinations faster
date: 2023-01-23
related:
  items:
    - text: Prototype pull request
      href: https://github.com/nhsuk-archive/manage-childrens-vaccinations-prototype/pull/24
screenshots:
  items:
    - Child page
    - Expanded medical history with no triage needed
    - Expanded medical history with triage notes
    - Expanded vaccination questions if vaccination site is needed
    - Check and confirm details
    - Vaccination saved (offline)
    - Vaccination saved (online)
---

We’ve made changes to make it faster to record each vaccinations – focusing more on the default options, but keeping the ability to change defaults for the rarer exceptions.

Design changes include:

- shortening the page by removing the parent section, and putting parent details in a shorter summary at the top (but keeping all the necessary details)
- putting medical notes and triage notes directly on the page, with improved summaries
- putting the ‘Did they get the vaccination?’ question directly on the child page

<video src="https://user-images.githubusercontent.com/319055/213706485-62a1177e-c6f3-4e67-a9cf-13ac208ac8e7.mov" controls muted></video>

## Notes on the vaccination journey

After saying ‘Yes’ to ‘Did they get the vaccination?’ we show the Check and Confirm page. Defaults can be changed on this page.

On confirmation, users are taken directly back to the child list. We have removed the confirmation page and replaced it with a success banner. They can now continue with the next child they need to vaccinate.

If they did not get the vaccination, we ask for a reason, which is an extra page in the journey for this rarer exception.

We have not changed the journey for the 3 in 1/MenACWY sessions yet, because of the complexity around giving multiple vaccines.

We have not yet fully considered the journey for recording non-nasal flu vaccines. For example – if triage states they should have the injection rather than nasal.
