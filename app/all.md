---
layout: collection
title: All posts
eleventyComputed:
  description: "Showing {{ pagination.pageNumber * pagination.size + 1 }} to {{ pagination.pageNumber * pagination.size + pagination.items.length }} of {{ collections.post | length }}."
pagination:
  data: collections.post
  reverse: true
  size: 50
permalink: "all/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
---
