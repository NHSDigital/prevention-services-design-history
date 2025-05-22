---
title: "Making it easier for users to find somewhere to book an appointment"
date: 2025-05-22
---

We spent some time during early 2025 exploring how to improve the site search feature within NBS. 

We decided to do this after noting that the current site search required users to enter a full postcode to search.  

This can be restrictive, especially for users who wish to book an appointment near their workplace, or those unfamiliar with the exact postcode of their desired area. 

We noticed users displaying confusion when looking at the list of sites in their area during research.   

We used tags to display site facilities, and some users assumed they were buttons and tried to click them. When we explored why, we discovered users were expecting to see more information about each facility listed. 

We also observed users assuming there was only one site, and not scrolling down the results page to see if there were any more results. 

![screenshot showing a list of available vaccination sites for a user to choose](sitelist.png) 

 

## What we did 

We hypothesised that expanding the search functionality to allow users to search with partial postcodes or town names would make it easier for people to find appointments near their preferred location. 

We reviewed the [find a pharmacy search on the NHS website](https://www.nhs.uk/service-search/pharmacy/find-a-pharmacy/), and based on this, proposed two potential design options.   

 

### Option 1 – Search and return results on next page

We designed a version that was similar to the service search function on NHS.uk.  This allowed the user to enter either: 

- full postcodes
- partial postcodes
- city, town, or village names 

If the user enters a full or partial postcode, the search returns a list of results based on the geographical centre of the information that was entered. 

If the user enters a city or town name, the system returns a list of potential matches for the user to select, before showing a list of results in the chosen location. 

![screenshot showing a set of screens detailing the enhanced search function](enhancedsearch.png) 

 

 

### Option 2 – Enhanced autocomplete search*

Another option we considered was to use an autocomplete component to immediately return results based on the user input.  This would still allow users to search using full or partial postcodes, and town names. 

![screenshot showing a set of screens detailing the autocomplete search function](autocomplete-search.png) 

After discussing this option with the team, it was decided that the amount of data that would need to be queried using this functionality would affect the service performance too much. 

## What we tested 

We decided to test the first design option.  We also made some enhancements to the results page, to help reduce confusion on this page. 

**Enhanced search page** 

![screenshot showing the enhanced search input](enhanced-search-input.png) 

**Location selection page** 

![screenshot showing a list of potential locations for a user to choose from](town-results.png) 

**Site results page** 

We updated the site list page to reflect how sites are displayed on NHS.uk, and added the number of sites near the top of the page. 

![screenshot showing a list of available vaccination sites for a user to choose](newsitelist.png) 

 

## Findings 

Most participants preferred using a full postcode for accuracy, especially those living in larger cities like London. Two participants said they would prefer to enter a town name. 

**Location selection** 

Participants said the list of possible locations appeared clear and that they would be happy to select from it. 

The ability to try another town, city or postcode was seen as a helpful fallback for incorrect or unexpected matches by one participant. 

> Entering the town name is good, I like it, quite clever because if my dad is visiting a different town we can get a site there for his jab. 

**Choosing a site**

Most users found the information clear and said provided all the details they needed.  Participants generally preferred choosing the nearest site or one they had visited before.  

## Future considerations

We may consider adding the 'use your location' function from the 'find a' service on NHS.uk in future.  

We would first need to explore:

- whether NBS users would find this feature helpful
- how this might affect performance in NBS
- if it's technically feasible with the way NBS interacts with the Manage Your Apointments (MYA) service to return a list of sites

![screenshot showing the find a pharmacy service, with a button to use your current location](find-a-pharmacy.png) 
