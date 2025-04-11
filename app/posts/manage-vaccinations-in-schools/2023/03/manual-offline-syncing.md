---
title: Automatic and manual offline syncing
date: 2023-03-16
---

Automatic syncing hasn’t tested well with users. It also introduces some technical issues of its own.

## Problems with errors

The main issue with automatic syncing is recovering from errors. Errors can occur due to invalid data being submitted, from downstream APIs rejecting the data, or from server errors.

When the syncing is in the background, surfacing these errors can be difficult. The user could be interrupted from their current context. Or they might never notice them to begin with.

## Problems with collaborating

Conflicts can occur when multiple people are attempting to edit the same resources. This is common in online collaborative applications such as Google Docs. Dealing with these types of issues is non-trivial, and automatic syncing introduces more opportunities for them to arise.

## Problems with unreliable internet connections

When dealing with flaky connections, users could have to sync in the background multiple times per minute. If the syncing process can error, this introduces multiple opportunities for errors to occur, and can be disruptive.

All these can combine to create the feeling that the syncing process isn’t reliable, and erode user trust in the service. They might choose to only use it if they are on a very stable connection, to minimise the possibility of failure. This defeats the point of building robust offline capabilities.

## Potential solutions

We are considering exploring a design which implements manual syncing.

In this design, users would be able to prepare for offline and work offline as before. Once they regain connectivity, they would encounter banners, or potentially interstitial pages prompting them to sync their changes. If they do not do so, their changes stay local.

Once the user accepts to sync, they could be taken to a separate page to submit a form to sync. Any errors in syncing could be surfaced here, giving the user an opportunity to see what’s wrong and attempt to resolve it.
