---

title: "Fixing the basics: accessing a site in MYA"

author: Joe Julier

date: 2026-10-08

tags:

- pharmacies

- appointments

---

  

To add a site to Manage Your Appointments, users complete an onboarding form. In the form they nominate one or two lead users for the site, who then have access to it once it's created. Those lead users can then add more users if necessary.

In theory this should mean that all sites always have someone who can add other team members, and access can be managed locally without any dependencies on the product team, regional colleagues or the service desk. In practice, it's not been so straightforward.

### Service desk tickets everywhere

We've had lots of service desk tickets from people requesting access to a site that already exists in Manage Your Appointments.

The first big spike of these tickets was before our first seasonal vaccination campaign last year. I wrongly put this down to the normal teething problems associated with scaling a service very rapidly. But, since then, we've seen similar spikes in service desk tickets before the MenB campaign in July, and again before this year's seasonal vaccination campaign.

When we investigated we discovered a number of scenarios that can result in staff not being able to access the site they work at in MYA. The most common is that whoever previously managed appointments for the site has changed jobs and didn't give access to the new person before leaving. A typical service desk ticket will say something like this:

>Dear Team Please can you provide me with manager access to MYA as the previous manager has now left.

This kind of mistake isn't a problem if it's clear to users what to do next and they can get access quickly. Unfortunately this wasn't the case. Here's what users saw if they logged in and didn't have access to any sites:

![The site list in Manage Your Appointments with no sites listed and a message that says 'No sites assigned'](old-site-list-no-sites-assigned.png '')

If they had access to some sites already they saw this, which also doesn't make it clear what to do if you need access to another site:

![MISSING'](old-site-list.png '')

### Tired: Adding guidance to the standalone guide

We tried fixing this by adding information to the MYA guidance explaining what to do. But this had no impact on the volume of service desk tickets we were getting. Turns out people don't often read guidance, who knew?

![MISSING'](site-not-assigned-guidance.png '')

### Wired: Adding guidance in the service

Now we're putting the information about what to do in the service. If you log in but don't have access to any sites you see this:

![MISSING'](no-sites-guidance.png '')


If you have access to some sites, the information lives in an expander:

![MISSING'](new-site-list.png '')

![MISSING'](new-site-list-expander.png '')

We're hoping this solves the makes it much easier for users to get access to the sites they work at, but if we're still receiving service desk tickets about it once this goes live, we'll investigate further.

### The moral of the story

This is a small change to MYA, but it highlights how important it is to have a feedback loop with a rich mix of data sources. 

Each data source is its own unique lens on how your service is doing. In this case, the problem was barely visible our feedback survey, analytics, and qualitative research activities, so without access to our service desk tickets we would never have appreciated the scale of the problem.