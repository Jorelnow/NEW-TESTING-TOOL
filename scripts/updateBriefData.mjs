import fs from 'fs';
import path from 'path';

const root = process.cwd();
const briefCurrentPath = path.join(root, 'data', 'brief-current.json');
const historyPath = path.join(root, 'data', 'brief-history.json');

const input = process.argv[2];
if (!input) {
  console.error('usage: node scripts/updateBriefData.mjs <brief-json-file>');
  process.exit(1);
}

const nextBrief = JSON.parse(fs.readFileSync(input, 'utf8'));
const history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));

fs.writeFileSync(briefCurrentPath, JSON.stringify(nextBrief.current, null, 2) + '\n');

history.unshift(nextBrief.historyEntry);
fs.writeFileSync(historyPath, JSON.stringify(history, null, 2) + '\n');

console.log('Updated brief-current.json and brief-history.json.');
