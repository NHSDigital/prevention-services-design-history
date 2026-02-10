---
layout: page
title: How to add a pathway page
description: A guide for creating a page that groups multiple related services or teams together
eleventyNavigation:
  parent: Guide
---

Pathways let you group multiple related services or teams together on a single page. For example, breast screening has several teams (Manage, Reporting, Pathway, Select, etc.) that are all grouped under a single "Breast screening" pathway page.

A pathway page shows all posts from the grouped teams, with links to each team's individual page. Posts within the pathway also show the pathway in their breadcrumbs.

## When to use a pathway

Use a pathway when:

- multiple services or teams work on the same programme or area
- having them all listed separately clutters the area index page
- it would be useful to see all posts from these teams in one place

## How to add a pathway

You'll need to make changes in several places. Use `your-pathway-name` as the pathway identifier (lowercase with hyphens).

### 1. Add the pathway to the data file

Edit `app/_data/pathways.json` to add your pathway configuration:

```json
{
  "existing-pathway": { ... },
  "your-pathway-name": {
    "title": "Your Pathway Name",
    "url": "/your-pathway-name/",
    "teamNames": {
      "Original Team Name": "Short display name",
      "Another Team Name": "Another short name"
    }
  }
}
```

The `teamNames` object lets you remap team names for display on the pathway page. This is optional – if a team isn't listed, its original name will be used. Set a team's display name to an empty string `""` to hide it from the pathway page's team list.

### 2. Create pathway collections in eleventy.config.js

Add two collections in `eleventy.config.js` under the `// Pathway collections` section:

```javascript
// Your pathway - aggregates posts from all teams
eleventyConfig.addCollection('pathway-your-pathway-name', (collection) => {
  return collection
    .getFilteredByGlob([
      'app/team-one/**/*.md',
      'app/team-two/**/*.md',
      'app/team-three/**/*.md'
    ])
    .sort((a, b) => a.date - b.date)
})

// Your pathway teams - the team index pages
eleventyConfig.addCollection(
  'pathway-your-pathway-name-teams',
  (collection) => {
    return collection
      .getAll()
      .filter(
        ({ data }) =>
          data?.pathway === 'your-pathway-name' &&
          data?.layout === 'collection'
      )
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
  }
)
```

### 3. Add the pathway property to each team

For each team you want to include in the pathway, update two files:

**The team's index file** (e.g. `app/team-name.md`):

```markdown
---
layout: collection
title: Team Name
pathway: your-pathway-name
area: screening
eleventyNavigation:
  key: Team Name
  parent: Your Pathway Name
...
---
```

The `eleventyNavigation` settings are important – they tell Eleventy how to build the breadcrumb trail. The `key` should match the team's title, and `parent` should match the pathway's title.

**The team's directory data file** (e.g. `app/team-name/team-name.json`):

```json
{
  "layout": "post",
  "eleventyNavigation": {
    "parent": "Team Name"
  }
}
```

The `eleventyNavigation.parent` in the directory data file ensures all posts in that team know their parent in the navigation hierarchy.

### 4. Create the pathway index page

Create a new file `app/your-pathway-name.md`:

```markdown
---
layout: pathway
title: Your Pathway Name
description: Posts from teams working on your pathway
area: screening
eleventyNavigation:
  key: Your Pathway Name
pagination:
  data: collections.pathway-your-pathway-name
  reverse: true
  size: 50
permalink: "your-pathway-name/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
---

## Service areas and teams

{% for area in collections['pathway-your-pathway-name-teams'] %}{% set displayName = pathways['your-pathway-name'].teamNames[area.data.title] if pathways['your-pathway-name'].teamNames[area.data.title] is defined else area.data.title %}{% if displayName %}[{{ displayName }}]({{ area.url }}){% if not loop.last %} | {% endif %}{% endif %}{% endfor %}

## Posts
```

The `eleventyNavigation.key` tells Eleventy that this page exists in the navigation hierarchy. Without a `parent`, it defaults to Home.

### 5. Open a pull request

Open a pull request with your changes and ask for someone to review it. A preview will be available linked from the pull request.

## What the pathway changes

Once set up, your pathway will:

- show all posts from the grouped teams on a single page
- display a list of teams with links to their individual pages
- show the pathway in the breadcrumb on individual posts (Home > Pathway > Team)
- remove the grouped teams from the area index page (they appear under the pathway instead)
