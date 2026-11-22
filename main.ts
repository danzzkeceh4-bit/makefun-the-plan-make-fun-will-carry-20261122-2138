import * as fs from "node:fs";

// The entry is a single 30-day plan text: 277 characters, no trailing newline.
const PLAN =
  "Day 1: $12 domain, build a $29 Etsy SEO-audit tool. Days 2-5: audit 100 shops free; free audits prove value, then pitch the $29 fix to the 20 worst. Days 6-30: deliver in 24h, upsell $99/mo tracking, $48 ads. Expect 15 sales = $435. Under 3 by day 14, pivot to $25 Fiverr gigs.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(`${outputDir}/entry.txt`, PLAN, "utf-8");
