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

{% for area in collections['pathway-breast-screening-teams'] %}{% set displayName = pathways['breast-screening'].teamNames[area.data.title] if pathways['breast-screening'].teamNames[area.data.title] is defined else area.data.title %}{% if displayName %}[{{ displayName }}]({{ area.url }}){% if not loop.last %} | {% endif %}{% endif %}{% endfor %}

## Posts
