#!/usr/bin/env npx tsx

/**
 * Report Completeness Checker
 * 
 * Verifies a report generation operation against the 8-item Report Quality Checklist.
 * 
 * Usage:
 *   npx tsx skills/report-for-dummies/scripts/check-report-completeness.ts --phase <phase>
 */

import { argv } from "process";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

// ============================================================================
// Types
// ============================================================================

/**
 * One row of the eight-item Report Quality Checklist used for scoring and display.
 *
 * @remarks
 * Weights contribute to the weighted score; `required` gates whether missing checks block finalization.
 */
interface ChecklistItem {
  number: number;
  name: string;
  description: string;
  required: boolean;
  checked: boolean;
  weight: number;
}

/**
 * Machine-readable rollup produced when callers pass `--json`.
 *
 * @remarks
 * Mirrors the console summary: checklist rows, totals, and the required-items finalize gate.
 */
interface CompletenessReport {
  checklist: ChecklistItem[];
  score: number;
  maxScore: number;
  canFinalize: boolean;
}

// ============================================================================
// Checklist Definition
// ============================================================================

const CHECKLIST_ITEMS: Omit<ChecklistItem, "checked">[] = [
  { number: 1, name: "Source ingested", description: "Conversation or request read", required: true, weight: 2 },
  { number: 2, name: "Zero acronyms enforced", description: "No abbreviations in output", required: true, weight: 2 },
  { number: 3, name: "Inline glossing done", description: "Complex concepts explained in parentheses", required: true, weight: 2 },
  { number: 4, name: "Single paragraph", description: "Output is one cohesive paragraph", required: true, weight: 2 },
  { number: 5, name: "Markdown formatted", description: "# heading, bold, italic, underline", required: true, weight: 1 },
  { number: 6, name: "Policy reviewed", description: "No remaining jargon, abbreviations, or multi-paragraph", required: true, weight: 2 },
  { number: 7, name: "MD persisted", description: "Written to .tmp/*-report-for-dummies/report.md", required: true, weight: 2 },
  { number: 8, name: "HTML generated", description: "Minimal HTML without CSS", required: true, weight: 1 },
];

// ============================================================================
// Detection Functions
// ============================================================================

/**
 * Detects persisted Markdown/HTML artifacts for the latest report-for-dummies run.
 *
 * @remarks
 * I/O: scans `/.tmp` for directories whose names include `report-for-dummies`, picks the
 * lexicographically greatest name as “latest”, then tests `report.md` and `report.html` inside it.
 * Returns both flags false when the tree is missing, empty, or unreadable.
 */
function findLatestReport(): { mdExists: boolean; htmlExists: boolean } {
  const tmpPath = "/.tmp";
  
  if (!existsSync(tmpPath)) {
    return { mdExists: false, htmlExists: false };
  }
  
  try {
    const dirs = readdirSync(tmpPath, { withFileTypes: true })
      .filter(d => d.isDirectory() && d.name.includes("report-for-dummies"))
      .map(d => d.name)
      .sort()
      .reverse();
    
    if (dirs.length === 0) {
      return { mdExists: false, htmlExists: false };
    }
    
    const latestDir = join(tmpPath, dirs[0]);
    const mdExists = existsSync(join(latestDir, "report.md"));
    const htmlExists = existsSync(join(latestDir, "report.html"));
    
    return { mdExists, htmlExists };
  } catch {
    return { mdExists: false, htmlExists: false };
  }
}

// ============================================================================
// Main
// ============================================================================

/**
 * Parses CLI flags, evaluates checklist progress, and prints a completeness report.
 *
 * @remarks
 * Side effects: writes human-oriented status lines to stdout; with `--json`, also prints a
 * JSON `CompletenessReport` after the narrative output.
 */
function main() {
  const args = argv.slice(2);
  const phaseArg = args.find(a => a === "--phase" || a === "-p");
  const jsonArg = args.includes("--json");
  
  const phase = phaseArg 
    ? parseInt(args[args.indexOf(phaseArg) + 1] || "8", 10)
    : 8;
  
  console.log("\n📋 Report Completeness Check");
  console.log("═".repeat(60));
  console.log(`\n📊 Phase: ${phase}/8`);
  
  // Run checks
  const report = findLatestReport();
  
  console.log(`\n📊 Report Status:`);
  console.log(`   report.md: ${report.mdExists ? "✅" : "⚠️"}`);
  console.log(`   report.html: ${report.htmlExists ? "✅" : "⚠️"}`);
  
  // Build checklist based on phase
  const checklist: ChecklistItem[] = CHECKLIST_ITEMS.map(item => {
    let checked = false;
    
    switch (item.number) {
      case 1: // Source ingested
        checked = phase >= 1;
        break;
      case 2: // Zero acronyms enforced
        checked = phase >= 2;
        break;
      case 3: // Inline glossing done
        checked = phase >= 3;
        break;
      case 4: // Single paragraph
        checked = phase >= 4;
        break;
      case 5: // Markdown formatted
        checked = phase >= 4;
        break;
      case 6: // Policy reviewed
        checked = phase >= 5;
        break;
      case 7: // MD persisted
        checked = report.mdExists;
        break;
      case 8: // HTML generated
        checked = report.htmlExists;
        break;
    }
    
    return { ...item, checked };
  });
  
  const score = checklist.reduce((sum, item) => 
    item.checked ? sum + item.weight : sum, 0);
  const maxScore = checklist.reduce((sum, item) => sum + item.weight, 0);
  
  const requiredItems = checklist.filter(i => i.required);
  const requiredScore = requiredItems.reduce((sum, item) => 
    item.checked ? sum + item.weight : sum, 0);
  const requiredMax = requiredItems.reduce((sum, item) => sum + item.weight, 0);
  
  const canFinalize = requiredScore === requiredMax;
  
  console.log(`\n📊 Score: ${score}/${maxScore} (${((score/maxScore)*100).toFixed(0)}%)`);
  console.log(`   Required items: ${requiredScore}/${requiredMax}`);
  
  console.log(`\n${canFinalize ? "✅" : "⚠️"} Complete: ${canFinalize ? "YES" : "NEEDS WORK"}`);
  
  console.log("\n📝 Checklist:");
  for (const item of checklist) {
    const icon = item.checked ? "✅" : item.required ? "❌" : "⚠️";
    console.log(`   ${icon} [${item.number}] ${item.name}`);
  }
  
  console.log("\n" + "═".repeat(60));
  
  if (!canFinalize) {
    console.log("\n⚠️ Report needs work before completion.");
    const failedItems = checklist.filter(i => !i.checked && i.required);
    if (failedItems.length > 0) {
      console.log("\nIssues to resolve:");
      failedItems.forEach(i => console.log(`   - ${i.name}: ${i.description}`));
    }
  } else {
    console.log("\n✅ Report is complete and ready.");
  }
  
  if (jsonArg) {
    const report: CompletenessReport = { checklist, score, maxScore, canFinalize };
    console.log("\n" + JSON.stringify(report, null, 2));
  }
}

main();
