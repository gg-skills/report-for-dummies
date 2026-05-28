---
title: Formatting Guide for Asana-Compatible Output
---

# Formatting Guide for Asana-Compatible Output

## Heading

Use exactly one `# ` heading at the top. Keep it to five words or fewer. It should name the work, not describe the document.

**Good:** `# Authentication Refactor Complete`
**Bad:** `# Summary of the Work That Was Done on Authentication`

## Paragraph Structure

The entire body is a single paragraph. Do not insert blank lines. If the work naturally breaks into separate facts, you may use bullet points, but keep them inside the same logical paragraph (no blank lines between bullets).

## Bullet Points

Use `- ` for bullet points only when the work contains distinct, separable items.

**When to use bullets:**
- Multiple independent fixes
- A list of affected systems
- Sequential steps that each matter on their own

**When to use prose:**
- A single narrative of one change
- Cause-and-effect chains
- Anything that reads awkwardly as a list

## Bold

Apply `**bold**` to:
- Key outcomes or decisions
- Numbers and quantities
- Anything a stakeholder should notice in a skim

## Italic

Apply `*italic*` to:
- Timing or schedule information
- Priority levels
- Warnings or cautions

## Underline

Apply `<u>underline</u>` to:
- First mention of a person, system, or tool name
- Proper nouns that need emphasis

> **Note:** Asana's Markdown support varies. If underline HTML tags render incorrectly, fall back to bold for first mentions.

## Parenthetical Explanations

Every complex concept must be followed immediately by a short explanation in parentheses.

**Pattern:**
`...the security policy conflicts that happen when a website and its server talk across different web addresses (this is called cross-origin resource sharing)...`

**Rules:**
- The parenthetical must start with "this is called" or "which means"
- Keep it to one phrase or a single short sentence
- Do not nest parentheses

## Abbreviations

Expand every abbreviation. There are no exceptions.

| Abbreviation | Expansion |
|--------------|-----------|
| API | application programming interface (a set of rules that let different software programs talk to each other) |
| JWT | digitally signed token (a secure way to prove identity) |
| SSR | server-side rendering (building the web page on the server before sending it to the browser) |
| CORS | cross-origin resource sharing (a security policy that controls how websites on different addresses share data) |
| DB | database (a structured collection of information) |
| PR | pull request (a proposed set of changes submitted for review) |
| CI/CD | automated testing and deployment pipeline (a series of automatic steps that check code and release it) |
| ORM | database helper library (a tool that lets developers work with databases using code instead of raw queries) |
