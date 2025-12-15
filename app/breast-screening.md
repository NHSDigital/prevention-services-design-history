---
layout: collection
title: Breast screening
description: Design history posts from teams working on breast screening services
area: screening
pagination:
  data: collections.pathway-breast-screening
  reverse: true
  size: 50
permalink: "breast-screening/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
---

## Teams

{% for team in collections['pathway-breast-screening-teams'] %}[{{ team.data.title }}]({{ team.url }}){% if not loop.last %} | {% endif %}{% endfor %}

## Posts
