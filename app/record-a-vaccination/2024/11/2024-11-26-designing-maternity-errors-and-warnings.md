---
title: "Designing warnings and error messages for vaccinations in pregnancy "
date: 2024-11-26
---
## Context

RAVS was built to record, among other things, maternity vaccinations.

There is clinical guidance on when to give RSV and pertussis vaccinations in pregnancy. So when we designed the journey to record these vaccinations, we decided to:

collect the patient’s due date (so we would know how many weeks’ pregnant they were)

display warning messages if the stage of pregnancy (based on due date) fell outside the recommended timeframes for RSV and pertussis vaccinations

We chose to limit error messages around due dates because we needed to allow flexibility for clinical decisions. We wanted to flag the recommendations but not stop a user from recording a vaccination.

However, since launching RAVS, we’ve found some of the due dates users have entered are unlikely or impossible. The following describes our initial designs and the changes we made to address this issue.

## Warning messages

Based on clinical guidance, we have used 2 different warning messages for users with links to the green book, depending on the vaccine type and the expected due date entered.

The pertussis vaccine should be given to pregnant women between 16 to 32 weeks of pregnancy. After this period, the vaccine is less likely to protect the baby. The warning message reads: “The vaccine is recommended between 16 to 32 weeks of pregnancy. For guidance, visit Pertussis: the green book, chapter 24.”

This message is displayed if, according to the due date entered, the patient is not between 16 to 32 weeks pregnant.

![](ba3deug16fxhtnqjscgzd612yrkf.png)


For RSV the vaccine is more effective between 28 and 36 weeks of pregnancy, but can be given up until labour and therefore the warning message reads as follows: “You have indicated the due date is 01/09/2026. This vaccine is not routinely recommended before 28 weeks of pregnancy. For vaccination guidance, visit Respiratory syncytial virus (RSV): The Green Book, chapter 27a.”

This message is displayed, if according to the due date entered, the patient is less than 28 weeks pregnant.

 ![](kka5opsmq8jxu7p3bri7c548i70s.png)


## Error messages

We only used error messages for a limited number of scenarios. For example, if someone entered 13 in the month field for the expected due date, we would flag that this was not a valid date.

But we did not use error messages to restrict how far in the past or how far in the future the expected due date could be.

Expected due date is invalid.

![](t9tl0mdvwbxsmol00o37umbp1mo9.png)


## Problems with this approach

When we looked at how maternity vaccines had been recorded in RAVS, we found that many of the records had been created with expected due dates that were either unlikely or impossible. For example, due dates several years in the past. Or dates so far in the future that the patient could not have been pregnant at the time of vaccination.

Due to these issues, we decided to make 3 key changes to help improve the quality of the data  entered:

More instructive and less generic error message for incorrect dates: “Day must be a real date”

![](xuvypkjzbo0ddx29kuibp01urofh.png)


Date entered is too far in the past to be reasonable: “Due date cannot be more than 1 month before the assessment date”

![](slq085py4dzraf465tr0ph628eio.png)


Date entered is too far in the future to be likely: “Due date cannot be more than 9 months after the assessment date”

![](ebifle5fhuboj5dygbk3b8dugca6.png)


## Outcome

We need to monitor the effectiveness of the new error messages through feedback from users and testing. By applying tighter validation on the input field for expected due date, we should see fewer unlikely or impossible dates.
