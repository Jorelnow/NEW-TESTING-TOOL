import fs from 'fs';
import path from 'path';

const root = process.cwd();
const approvalsPath = path.join(root, 'data', 'approval-requests.json');
const auditPath = path.join(root, 'data', 'audit-log.json');

const approvals = JSON.parse(fs.readFileSync(approvalsPath, 'utf8'));
const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'));

const existingIds = new Set(audit.map((entry) => entry.id));
const generated = [];

for (const req of approvals) {
  const requestId = `audit-approval-request-${req.id}`;
  if (!existingIds.has(requestId)) {
    generated.push({
      id: requestId,
      time: req.requestedAt,
      actor: req.requestedByAgentId,
      projectId: req.projectId,
      action: `created approval request: ${req.title}`,
      result: req.status
    });
    existingIds.add(requestId);
  }

  if (req.decisionAt) {
    const decisionId = `audit-approval-decision-${req.id}`;
    if (!existingIds.has(decisionId)) {
      generated.push({
        id: decisionId,
        time: req.decisionAt,
        actor: req.decisionByHumanId || req.requiredApproverHumanId,
        projectId: req.projectId,
        action: `decision on approval request: ${req.title}`,
        result: req.status,
        comment: req.decisionComment || null
      });
      existingIds.add(decisionId);
    }
  }
}

const merged = [...generated, ...audit].sort((a, b) => String(b.time).localeCompare(String(a.time)));
fs.writeFileSync(auditPath, JSON.stringify(merged, null, 2) + '\n');
console.log(`Added ${generated.length} approval-related audit entries.`);
