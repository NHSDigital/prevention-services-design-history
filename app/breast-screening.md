---
layout: pathway
title: Breast screening
description: Posts from teams working on breast screening
area: screening
eleventyNavigation:
  key: Breast screening
pagination:
  data: collections.pathway-breast-screening
  reverse: true
  size: 50
permalink: "breast-screening/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
---

## Service areas and teams

{# {% for area in collections['pathway-breast-screening-teams'] %}
{% set displayName = pathways['breast-screening'].teamNames[area.data.title] if pathways['breast-screening'].teamNames[area.data.title] else area.data.title %}
[{{ displayName }}]({{ area.url }}){% if not loop.last %} | {% endif %}
{% endfor %} #}

{% from "nhsuk/components/card/macro.njk" import card %}

{# <ul class="nhsuk-grid-row nhsuk-card-group">
{% for area in collections['pathway-breast-screening-teams'] %}
{% set displayName = pathways['breast-screening'].teamNames[area.data.title] if pathways['breast-screening'].teamNames[area.data.title] else area.data.title %}

<li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
  {{ card({
    href: area.url,
    clickable: "true",
    headingLevel: 5,
    heading: displayName,
    headingClasses: "nhsuk-heading-xs",
    description: area.data.description
  }) }}
</li>
{% endfor %}
</ul> #}

<ul class="nhsuk-grid-row nhsuk-card-group">
{% for area in collections['pathway-breast-screening-teams'] %}
{% set displayName = pathways['breast-screening'].teamNames[area.data.title] if pathways['breast-screening'].teamNames[area.data.title] else area.data.title %}
<li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
  {{ card({
    href: area.url,
    secondary: true,
    headingLevel: 5,
    heading: displayName,
    headingClasses: "nhsuk-heading-xs",
    description: area.data.description
  }) }}
</li>
{% endfor %}
</ul>

## Posts
