---
title: "How I caught an AI-assisted sabotage attempt on an open source project"
description: "A walkthrough of what I noticed, what the attacker was trying to do, and what it means for open source security in the age of AI agents."
pubDate: 2026-08-20
tags: ["open-source", "security", "ai"]
---

Last month I stumbled across something I hadn't seen before: an AI agent attempting to sneak a malicious update into an open source project. Here's what happened and what I learned from it.

## The setup

I was reviewing pull requests on a network scanning tool called myNetwork when I noticed something off about a contribution from a user named `miraholt31`. The changes looked plausible on the surface — clean code, reasonable commit message — but something about the logic didn't add up when I traced the execution path.

## What the attacker was doing

The malicious update was subtle. It didn't crash the program or do anything obviously wrong. Instead, it introduced a small behavioral change that would have made the scanner silently skip certain hosts under specific conditions — exactly the kind of change that would pass a quick review.

The tell was the AI fingerprints: the code style was slightly too consistent, the variable names were a little too on-the-nose, and the "reasoning" in the PR description read like something that was generated rather than written.

## What this means

AI agents can now write convincing code. That's mostly good — but it also means the social engineering bar for open source contributions has dropped. A human attacker can now spin up dozens of plausible-looking PRs with minimal effort.

The defense isn't just automated tooling. It's careful humans reading code with intent, not just syntax.

## What I'd watch for

- PR descriptions that explain the "what" but not the "why"
- Code that passes tests but changes behavior in edge cases
- New accounts with no prior contribution history making their first contribution to security-sensitive code

Open source depends on trust. That trust is worth defending carefully.
