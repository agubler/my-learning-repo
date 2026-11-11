# Design System

A pnpm monorepo for a React design system.

## Structure

```
apps/
  storybook/      # Storybook (React + Vite) — documents and develops components
packages/
  ui/             # @ds/ui — React components (stories live next to components)
  tsconfig/       # @ds/tsconfig — shared TypeScript config
```

## Getting started

Requires Node 22+ and pnpm 10+.

```bash
pnpm install
pnpm storybook          # dev server at http://localhost:6006
pnpm build-storybook    # static build to apps/storybook/storybook-static
pnpm typecheck          # typecheck all packages
```

## Adding a component

1. Create `packages/ui/src/components/<Name>/<Name>.tsx` (and optional `.css`).
2. Add `<Name>.stories.tsx` alongside it — Storybook picks up any
   `packages/*/src/**/*.stories.tsx` automatically.
3. Export it from `packages/ui/src/index.ts`.
