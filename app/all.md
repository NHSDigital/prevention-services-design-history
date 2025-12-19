---
layout: collection
title: All posts
pagination:
  data: collections.post
  reverse: true
  size: 50
permalink: "all/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
---
