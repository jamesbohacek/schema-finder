# Schema Finder

> A friendly companion for JSONSchema exploration

This package started as a drop-in replacement for [React JSON Schema Inspector]
with proper support for references, arrays, titles, and any combination thereof.

## Roadmap

- [x] Styled Components migration
- [ ] Component library injection
- [ ] Simplify schema tree (stop showing _properties_ layers)
  - [x] Support properties
  - [ ] Support items
  - [ ] Support annotations
  - [ ] Schema info
  - [ ] Show if a property is required
  - [ ] (Optional) Generic object fallback path
- [ ] Get rid of Storybook
- [ ] Separate the package from dev demo

## Dev Setup

1. Install packages with `pnpm`
   ```
   pnpm i
   ```
1. Run Storybook on port `6006` (HMR seems to be somewhat broken)
   ```
   pnpm storybook
   ```

## Publish

1. Install packages
   ```
   pnpm i
   ```
1. Build
   ```
   pnpm build
   ```
1. Publish (for the time being both versioning and publishing is done manually)

[react json schema inspector]:
  https://github.com/CarstenWickner/react-jsonschema-inspector
