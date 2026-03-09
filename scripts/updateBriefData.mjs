import fs from 'fs';
import path from 'path';

const root = process.cwd();
const dashboardPath = path.join(root, 'data', 'dashboard.json');
const historyPath = path.join(root, 'data', 'brief-history.json');

const input = process.argv[2];
if (!input) {
  console.error('usage: node scripts/updateBriefData.mjs <brief-json-file>');
  process.exit(1);
}

const nextBrief = JSON.parse(fs.readFileSync(input, 'utf8'));
const dashboard = JSON.parse(fs.readFileSync(dashboardPath, 'utf8'));
const history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));

dashboard.brief = nextBrief.current;
fs.writeFileSync(dashboardPath, JSON.stringify(dashboard, null, 2) + '\n');

history.unshift(nextBrief.historyEntry);
fs.writeFileSync(historyPath, JSON.stringify(history, null, 2) + '\n');

console.log('Updated dashboard brief data and history.');
