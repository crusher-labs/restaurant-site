@AGENTS.md

## Notes

- JSX-only React 18; no TypeScript and no test/lint scripts, so verify changes by running `npm run dev` / `npm run build`.
- Edit components under `src/components/` (the `@/` alias points at `./src`); ignore the stray unused `src/AboutSection.jsx`.

## Compaction

When compacting, preserve: current task, files modified this session, failing checks/build errors, and decisions + rationale. Drop exploratory reads. Write durable state to `HANDOFF.md` before compacting.
