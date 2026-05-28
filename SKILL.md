---
name: report-for-dummies
description: when configuring clean summaries of technical work into plain-language notes. Asana task descriptions. MCP-compatible. Not for live coding.
---

> **Snapshot age:** live operational guidance (no vendored corpus). Verify command paths against the current workspace before use.

# GG → Report For Dummies → Plain-Language Summaries

## Overview

This skill transforms technical conversation context or raw task details into a **single, readable paragraph of notes** formatted for an Asana task description. The output is deliberately simple: plain language, no abbreviations, no technical jargon, and every complex concept is immediately followed by a plain-English explanation in parentheses.

The result is a professional, self-contained block of Markdown that a non-technical stakeholder can read in under thirty seconds.

## When to Use This Skill

**TRIGGER when:**
- The user asks for a summary suitable for Asana, a task tracker, or a project management tool.
- The user asks to "dumb down," "simplify," or "translate for stakeholders" any technical explanation.
- The conversation contains implementation details, code changes, or architectural decisions that must be communicated to a non-technical audience.
- The user explicitly mentions "report for dummies" or a similar plain-language summary intent.

**SKIP when:**
- The audience is technical and expects precise terminology, file paths, or commit references.
- The output is intended for a runbook, technical documentation, or a code review.
- The user asks for a full formal report with sections like Executive Summary, Methodology, or Appendix.

## Common Misconceptions

| # | Misconception | Correction | Key concept |
|---|---------------|------------|-------------|
| 1 | The skill strips all detail | It preserves every important detail but rephrases it in plain language | Fidelity without jargon |
| 2 | Abbreviations are okay if they are common | No abbreviations are allowed, even widely known ones like API or URL | Zero-acronym policy |
| 3 | Complex concepts should be omitted | They must be included and immediately followed by a parenthetical explanation | Inline glossing |
| 4 | The output should be multiple paragraphs | It is intentionally a single cohesive paragraph of notes | Asana-friendly density |
| 5 | Markdown formatting is optional | Bold, italic, underline, bullet points, and a single H1 heading are mandatory | Structured readability |
| 6 | Reports can be kept in memory only | Always persist to disk in MD and HTML formats | Dual persistence |

## Non-Negotiable Policy

1. **Output is always one paragraph.** Do not break the summary into multiple paragraphs or sections.
2. **No abbreviations.** Expand every acronym or initialism. If an abbreviation is unavoidable in a proper noun, spell it out on first use.
3. **No technical jargon.** Replace every specialized term with its plain-English equivalent.
4. **Every complex concept gets a parenthetical explanation.** Immediately follow the concept with a short clarification in parentheses.
5. **Use Markdown formatting strictly:**
   - One `# Heading` at the top.
   - Bullet points (`- `) for discrete items only if the source material naturally separates into distinct actions or facts; otherwise, use a flowing sentence structure.
   - **Bold** for key outcomes or decisions.
   - *Italic* for emphasis on timing, priority, or caution.
   - <u>Underline</u> for names of people, systems, or tools when they first appear.
6. **Tone is clean, professional, and neutral.** No enthusiasm markers, no emojis, no exclamation points.
7. **Do not invent facts.** Only summarize what is present in the conversation context or the user's explicit request.

## Report Quality Checklist

Use this checklist before and during any report generation operation.

| # | Checklist Item | Why It Matters | Gate |
|---|---------------|---------------|------|
| 1 | **Source ingested** — Conversation or request read | Enables accurate summary | Pre-draft |
| 2 | **Zero acronyms enforced** — No abbreviations in output | Policy compliance | Draft |
| 3 | **Inline glossing done** — Complex concepts explained in parentheses | Accessibility | Draft |
| 4 | **Single paragraph** — Output is one cohesive paragraph | Asana-friendly | Draft |
| 5 | **Markdown formatted** — # heading, bold, italic, underline | Structured readability | Draft |
| 6 | **Policy reviewed** — No remaining jargon, abbreviations, or multi-paragraph | Quality gate | Draft |
| 7 | **MD persisted** — Written to `.tmp/YYYY-MM-DD-*-report-for-dummies/report.md` | Disk persistence | Closeout |
| 8 | **HTML generated** — Minimal HTML without CSS | Dual format | Closeout |

### Quality Tiers

| Tier | Criteria | Use When |
|------|----------|----------|
| **Minimal** | Items 1-4, 7 | Quick summary |
| **Standard** | Items 1-6, 7 | Full report |
| **Full** | All 8 items | Complete dual-format report |

### Pre-Draft Verification

```
□ Source ingested (conversation or request)
□ Zero acronyms policy understood
□ Inline glossing strategy planned
□ Markdown formatting planned (# heading, bold, italic, underline)
```

## Report Consistency Validator

Before finalizing, verify:

### Consistency Check Matrix

| Check | What to Verify | How to Fix |
|-------|---------------|------------|
| **Acronyms vs Output** | No abbreviations in output | Expand all |
| **Glossing vs Concepts** | All complex terms have parentheticals | Add explanations |
| **Paragraph vs Multi** | Single paragraph output | Merge paragraphs |
| **Format vs Policy** | Markdown formatting matches policy | Add formatting |

### Red Flags (Never Present)

- [ ] Any abbreviation (API, URL, etc.)
- [ ] Multiple paragraphs instead of single
- [ ] Complex concept without parenthetical
- [ ] Missing # heading
- [ ] Report not persisted to disk
8. **Always persist the report to disk in two formats.** After the Markdown is finalized, write it to `.tmp/YYYY-MM-DD-HH-ii-ss-report-for-dummies/report.md`. Then generate a plain HTML version named `report.html` in the same folder. The HTML must contain only the content with native browser formatting and no additional CSS. Then report both the absolute and relative paths for both files.

## Workflow

1. **Ingest the source.** Read the conversation history or the user's specific request. Identify:
   - What was done (actions, changes, decisions).
   - Why it matters (outcome, risk mitigated, goal advanced).
   - Who is affected (stakeholders, end users, other teams).

2. **Translate to plain language.** For each technical detail:
   - Replace jargon with everyday words.
   - Expand every abbreviation.
   - Append a parenthetical explanation to any concept that assumes specialized knowledge.

3. **Structure as notes.** Organize the translated content into a single paragraph. Use Markdown formatting to highlight structure:
   - Start with an `# ` heading that names the work in five words or fewer.
   - Use bullet points if the work naturally decomposes into separate items; otherwise, write flowing prose.
   - Apply **bold**, *italic*, and <u>underline</u> to guide the reader's eye.

4. **Review against policy.** Scan the output for:
   - Any remaining abbreviations.
   - Any unexplained complex concepts.
   - Multiple paragraphs (merge them).
   - Missing formatting.

5. **Persist to disk.** Write the finalized Markdown to `.tmp/YYYY-MM-DD-HH-ii-ss-report-for-dummies/report.md`, using the current date and time in the folder name. If the `.tmp/` directory does not exist, create it first.

6. **Generate HTML.** Convert the Markdown content into a minimal HTML document named `report.html` in the same folder. Rules for the HTML:
   - Wrap the entire content in a basic HTML skeleton: `<!DOCTYPE html><html><head><meta charset="utf-8"><title>...</title></head><body>...</body></html>`.
   - Map Markdown to HTML tags directly: `# ` → `<h1>`, `**text**` → `<strong>`, `*text*` → `<em>`, bullet points → `<ul><li>`.
   - Preserve `<u>` underline tags as-is.
   - Do not add any CSS, styles, classes, or inline style attributes. Rely entirely on native browser defaults.
   - Do not add navigation, headers, footers, or any chrome.

7. **Deliver.** Present the Markdown block cleanly, followed by:
   - The **absolute path** to `report.md`.
   - The **relative path** to `report.md` from the repository root.
   - The **absolute path** to `report.html`.
   - The **relative path** to `report.html` from the repository root.
   Do not wrap the Markdown in code fences unless the user explicitly requests raw Markdown.

## Examples

### Input (technical)
> We refactored the `AuthMiddleware` to use JWT instead of session cookies. This resolves the CORS issues on the Vercel edge functions and closes the SSR hydration mismatch in the Next.js app router. We also bumped `next-auth` to v5 beta.

### Output (Asana-ready)

# Authentication Refactor Complete

We rebuilt the system that checks who a user is before letting them see protected pages (this is called authentication middleware). The rebuilt system now uses digitally signed tokens (these are called JSON Web Tokens) instead of small text files stored in the browser (these are called session cookies). This change fixes the security policy conflicts that happen when a website and its server talk across different web addresses (this is called cross-origin resource sharing, or sharing resources between different origins). It also fixes a display bug where the page looks different on first load than after interaction (this is called server-side rendering hydration mismatch). Finally, we updated the third-party login library (this is called Next-Auth) to its newest test version.

---

**Saved to:**
- Absolute: `/Users/you/Projects/your-workspace/.tmp/2026-05-12-10-39-07-report-for-dummies/report.md`
- Relative: `.tmp/2026-05-12-10-39-07-report-for-dummies/report.md`
- Absolute: `/Users/you/Projects/your-workspace/.tmp/2026-05-12-10-39-07-report-for-dummies/report.html`
- Relative: `.tmp/2026-05-12-10-39-07-report-for-dummies/report.html`

### Input (mixed request)
> Give me an Asana summary for: I ran the MongoDB aggregation to backfill missing `profileStatus` fields on the `User` collection. The pipeline used a `$lookup` into `ProfileIngestionCorpusRecord` and then `$merge` back. 12,400 docs updated.

### Output (Asana-ready)

# Profile Status Backfill Complete

We ran a database query that groups and transforms records in bulk (this is called an aggregation) on the main user list (this is called the User collection) to fill in missing values for a field that tracks where a user is in their setup process (this is called profile status). The query looked up related records from the profile import database table (this is called Profile Ingestion Corpus Record) and then wrote the corrected data back into the original user list (this is called a merge). **12,400 records were updated successfully.**

---

**Saved to:**
- Absolute: `/Users/you/Projects/your-workspace/.tmp/2026-05-12-10-41-22-report-for-dummies/report.md`
- Relative: `.tmp/2026-05-12-10-41-22-report-for-dummies/report.md`
- Absolute: `/Users/you/Projects/your-workspace/.tmp/2026-05-12-10-41-22-report-for-dummies/report.html`
- Relative: `.tmp/2026-05-12-10-41-22-report-for-dummies/report.html`

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| Output still sounds technical | Jargon was translated too literally | Re-read the source and replace every term a non-technical manager would not use in a meeting |
| Parentheses make the sentence too long | The explanation is too detailed | Shorten the parenthetical to one short phrase; move deeper detail into a separate bullet if necessary |
| User says the summary is too long | Too many minor details were included | Filter for only decisions, outcomes, and risks; drop implementation steps unless they are the point |
| Formatting looks broken in Asana | Underline HTML tags are not supported | Asana supports basic Markdown; if underline fails, fall back to bold for first mentions |
| Abbreviations slip through | Acronyms were treated as proper nouns | Maintain a strict scan pass: read every capitalized word group and expand it |
| File path is not reported | The agent skipped the persist step | Always write both files and echo all four paths before finishing |
| HTML has styling | CSS was injected into the HTML | Strip every `style` attribute, `<style>` block, and `class` attribute; use only raw HTML tags |

## Common Pitfalls

1. **Forgetting to expand acronyms on first use.** "We fixed the API" must become "We fixed the programming interface that other systems use to talk to ours (this is called an application programming interface)."
2. **Writing multiple paragraphs.** The skill is designed for Asana descriptions, which are dense. Keep it to one paragraph.
3. **Over-explaining obvious concepts.** Only parenthesize concepts that genuinely require domain knowledge. Do not explain "email" or "website."
4. **Using bullet points for everything.** Bullet points are for discrete items. If the work is a single cohesive story, write prose.
5. **Adding opinions or enthusiasm.** "This is a great improvement" violates the neutral tone. State outcomes objectively.
6. **Inventing details not in the source.** If the user did not mention a stakeholder, do not add one.
7. **Leaving technical file paths in place.** Replace `src/lib/auth.ts` with "the authentication code file" or omit it if it is not relevant to the outcome.
8. **Forgetting to create the `.tmp/` folder.** The path uses the repository root `.tmp/` directory. Do not save inside the skill folder or the current working directory unless `.tmp/` is unavailable.
9. **Adding CSS to the HTML.** The HTML must rely on native browser formatting only. No styles, classes, or inline style attributes are permitted.

## Local Corpus Layout

The skill package contains a flat `references/` directory with no nested subfolders.

### references/

- `formatting-guide.md` -- complete Markdown formatting rules and examples for Asana-compatible output.
- `jargon-translation-table.md` -- common technical terms and their plain-English replacements.

> There are no scripts in this skill. All work is done by the agent reading SKILL.md directly.
