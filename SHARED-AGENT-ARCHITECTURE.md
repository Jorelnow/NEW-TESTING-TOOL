# Shared Agent Architecture

## Vision
A shared workspace where Jorel's agent and trusted friends' agents can collaborate on joint work while respecting permissions, ownership, and approval boundaries.

## Core principles
- **Shared visibility, scoped action**
- **Role-based access**
- **Approval before high-risk actions**
- **Clear ownership of projects and outputs**
- **Auditability for important writes**

## Phase model

### Phase 1 — Solo command center
- one human owner
- one primary agent
- market briefs, watchlists, wallet monitoring, deploy status, email drafts

### Phase 2 — Shared project workspace
- multiple humans
- one or more agents per human
- shared project board
- shared briefs and status
- shared repo / deploy visibility
- notifications routed per project

### Phase 3 — Collaborative agent team
- explicit agent identities
- role-based assignment
- scoped read/write permissions
- approval workflows for shipping, money, and sensitive comms
- agent audit trail

## Entities

### Human
- name
- contact method
- project membership
- approval authority

### Agent
- owner human
- label / persona
- capabilities
- allowed projects
- approval scope
- escalation path

### Project
- name
- members
- linked repos
- linked deploys
- linked inboxes
- linked briefs
- risk level

### Task
- title
- project
- owner
- assigned agent or human
- status
- risk class
- required approvals

## Suggested roles
- **Research agent** — briefs, intelligence, competitor scans
- **Ops agent** — deploys, monitoring, alerts, runbooks
- **Comms agent** — inboxes, updates, summaries, draft replies
- **Trading/risk agent** — watchlists, risk notes, wallet monitoring
- **Builder agent** — issues, PRs, releases, product shipping

## Permission model

### Read scopes
- project docs
- watchlists
- brief history
- repo metadata
- deploy status
- inbox summaries

### Write scopes
- draft updates
- task status changes
- issue drafts
- PR notes
- release drafts
- daily brief drafts

### Approval-required scopes
- production deploys
- important outbound email
- secret changes
- money movement
- cross-project writes in sensitive contexts

## Approval model
- low-risk internal draft -> auto-allowed
- medium-risk external or project-visible change -> draft-first
- high-risk shipping/comms/financial action -> explicit approval
- extreme-risk financial or destructive action -> blocked without special handling

## Shared dashboard surfaces
- project list
- agent roster
- task board
- daily brief feed
- deploy / repo status
- approvals queue
- audit log

## Recommended first implementation
1. Add shared project cards to dashboard
2. Add agent roster section
3. Add simple task/status model in UI
4. Add approval queue placeholder
5. Add audit trail placeholder

## Long-term note
This architecture should support cooperation, not chaos. The point is not "many agents doing anything" — it is coordinated work with clear scopes and trust boundaries.
