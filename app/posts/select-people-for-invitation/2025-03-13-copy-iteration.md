---
title: Copy Iterations
description: An easier way to create new iterations
date: 2025-03-13
tags:
  - service
  - prototype
  - content
  - user research
  - rules
  - iteration
  - copy
---

Research with users indicated that they often create new iterations based on previous iterations. This is because there are sometimes (though importantly not always) significant similarities between the cohorts and/or the filter, suppression and routing rules used in the iterations. We designed a method for copying iterations that allows either the entire iteration or selected elements to be copied into a new iteration. Users were generally happy with this idea, but we feel further testing and research is required. 

## Background
Up until the introduction of SPI, users have created config files (in JSON format) manually, so starting with an old file as a template and copying/pasting snippets from previous files has been a natural way of working. Users expressed a preference to continue working by copying iterations, and it was seen to have benefits in terms of:
- efficiency, it is quicker to reuse previously generated rules than to start from scratch
- safety, if a rule or set of cohorts has been previsouly checked and assured then it is safer to reuse that than to create a new rule from scratch

When questioned about how they would imagine a "copy" feature to work, they generally expected it to duplicate the whole iteration, in the same way as if you were to copy a word document for example.

However, iterations must have unique names, and it is also very unlikely that they would share a date, so we wanted to design a solution which guided users to update these elements.

## Designs
The first step in the process of creating a copy is to click "copy iteration" next to the appropriate iteration in the campaign iteration list. This was well understood by users and caused no problems.
![The list of iterations within a campaign](iteration-list.png)

We then have an interstitial page to ask the user to update the name and date for the copied iteration
![The first step of copy an iteration process](copy-iteration1.png)

Although the users' expectation was to copy the whole iteration and then have to remove cohorts or rules they didn't need, from a safety perspective we hypothesised it may be better to remove them before the copy is made. It would also be quicker and fewer clicks to remove elements during the copy process than afterwards. However we did include a "select all" option incase there was extreme similarity between the iterations (as can be the case with when sending reminders to a group that were previously invited).
![The second step of copy an iteration process](copy-iteration2.png)

The checkboxes are all unchecked by default in order to encourage active decision making, which we felt increased the focus on safety (ensuring we contact the right people).

After pressing "Save and continue" the copy is made and the user is given a summary screen to check the details, and from there they can make any further changes required. Any required elements which are missing are highlighted at this point.
![The third step of copy an iteration process](copy-iteration3.png)


## User feedback
### Positive
- Tick box design worked well & Select All option​
- Text worked well for users to understand​
- Being forced to add name and date was seen as a good safety net​
- Good to have summary page to check with someone, esp. if novice​
- Status of  'To Complete' – clear and obvious​

### Less positive
- 1 user unsure of date format – can there be an example
- unclarity about at what point the new iteration is saved
- there was still an underlying sense of wanting to select all (though the design does allow this)

## Summary and next steps
On the whole the design was recieved positively, we will make some small improvements such as adding example dates to help clarify the format, but the biggest mismatch between user expectation and the product design was the interstitial step where users can choose which elements to copy. From a product and design perspective we continue to beleive that this design is actually more efficient and would like to explore this further in real life scenarios (the testing was hypothetical).

There is also a theory held within the team that once improvements have been made to the rule library, the need to copy iterations will be significantly reduced. We think we can make SPI more efficient to the point that copying iterations is no longer considered to be a core part of the process and would perhaps only be worthwhile if creating a reminder iteration that is extremely simialar to the original invite iteration.

The issue about saving should hopefully be resolved by another piece of work we are doing which will change the entire saving process throughout the service.

So the next step (apart from the little improvements) is really to learn more about how this feature is used in real life situations and this will help inform its future development as well as the deveklopment of other parts of the system. "It's a watching brief". 