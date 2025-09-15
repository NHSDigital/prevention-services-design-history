---
title: Reporting and monitoring (beta)
date: 2023-09-18
---

## Bringing data and insights together

In this sprint, we explored what data and insights users might need from the record a vaccination service — bringing together learnings from:

- [alpha sprint six: reporting vaccinations](/record-a-vaccination/2023/06/sprint-six-reporting-vaccinations/)
- [sprint seven: monitoring activity](/record-a-vaccination/2023/07/sprint-seven-monitoring-activity/)

In sessions, we explored user’s needs for monitoring and reporting data, and the relationship between the two tasks.

## Co-creating with users

To pinpoint what data users need to monitor their vaccination service, we ran co-creation workshops to understand what data they valued the most and why.

As a result, we asked them to prioritise their needs into the following.

- High-priority data that informs the effective running of services or clinics.
- Medium-priority data that helps users make informed decisions (but is not critical).
- Low-priority data that is useful to know.

The outcome of this session formed the basis of our dashboard design.

## Designing a dashboard

Our dashboards displayed the following timeframes to filter and view data by:

- The day of the clinic
- The previous week
- The week ahead

Users expected to view historical data (beyond the previous week) in the reports section of RAVS.

To ensure the data was consistent and understood when displayed across all three views, we included descriptive headers that were meaningful whether the user was reading in the past, present or future, along with tooltips explaining data definitions.

![Today view of the dashboard](nt0cvy2fgbyljafzhqmxqg4kwkck.png 'An example of today’s view')

Generally, users found the dashboard information helpful and valuable but had specific preferences about what they would like to see – suggesting offering users the ability to hide or view information may be useful in future.

Most notably, users recognised a clear separation between the past, present and future views and expected to click the dashboard panels or hyperlinks to inspect further data.

Users also indicated that they would find it valuable if the dashboard included a warning or message explaining if the data was near-time and did not provide an on-demand snapshot of what's happening. This was particularly important for booking data due to last-minute cancellations.

## Filtering data

We created a filter following user feedback in our co-creation workshop. The filter is a consistent feature across the dashboard and reports to ensure users understand they are accessing and viewing the same data set.

The filter represented subsets of data users would expect to view. However, they also suggested viewing the data from the start to the end of a service or campaign would be useful to include.

![Dashboard filter](rbd9z2nde58i4uyg4vc6smikzfdx.png)

## Reporting

We iterated our designs following [sprint six: reporting vaccinations](/record-a-vaccination/2023/06/sprint-six-reporting-vaccinations/) to include a progress receipt throughout the reporting journey to help users easily identify what filters and fields they have selected.

![Reports homescreen](069khgcbaxllryx7nggmobjxo7wz.png 'Report home screen')

![Selecting report fields ](91sawtlpsnswsxyirpkp7fn43sma.png 'Selecting report filters')

We also introduced the ability for users to download a JSON or CSV file format and supported this with in-line content explaining why a particular format should be selected and used over and above the other.

## Usability score and summary

Using a seven-point rating scale, **users scored our iterated dashboard 6 out of 7 (confident).** Overall, they felt confident the dashboard presented all the required critical data.

**Users scored the iterated reporting journey 6.75 (very confident)**, commenting that it was easy to use and had a good selection of filters and fields.

They also valued the "limitless customisation of reports" and felt there were options for staff with different numeracy levels or analytical skills.

> Default reports will support non-savvy users, while custom reports support analytical users.

Most notably, **users expected the new reporting feature to save them around 65% less time** than they currently take to create and run reports.

> I’ll spend less time manipulating data and piecing it together afterwards.
