# Prettier Config for HTML Academy Codeguide

[![npm version](https://img.shields.io/npm/v/prettier-config-htmlacademy.svg)](https://www.npmjs.com/package/prettier-config-htmlacademy)
[![test](https://github.com/htmlacademy/prettier-config-htmlacademy/actions/workflows/test.yml/badge.svg)](https://github.com/htmlacademy/prettier-config-htmlacademy/actions/workflows/test.yml)
[![license](https://img.shields.io/npm/l/prettier-config-htmlacademy.svg)](https://github.com/htmlacademy/prettier-config-htmlacademy/blob/main/LICENSE)

[Prettier](https://prettier.io) configuration for JavaScript, TypeScript, JSX, CSS, SCSS, HTML, Markdown, JSON and YAML formatting according to [HTML Academy Codeguide](https://codeguide.academy).

## Requirements

- Node.js >= 24
- Prettier >= 3

## Installation

```bash
npm install -D prettier prettier-config-htmlacademy
```

## Usage

Reference the preset in your `package.json`:

```json
{
  "prettier": "prettier-config-htmlacademy"
}
```

Or create `prettier.config.js` in your project root to extend it:

```js
import preset from 'prettier-config-htmlacademy';

export default {
  ...preset,
  printWidth: 120,
};
```

Run on the whole project:

```bash
npx prettier . --write
```

## Key Features

- **Single source of truth** — format JavaScript, TypeScript, JSX, CSS, SCSS, HTML, Markdown, JSON and YAML with one tool.
- **Codeguide-aligned** — same indentation, quote style, trailing comma and bracket placement as [`eslint-config-htmlacademy`](https://github.com/htmlacademy/eslint-config-htmlacademy) and [`stylelint-config-htmlacademy`](https://github.com/htmlacademy/stylelint-config-htmlacademy).
- **No bracket spacing** — `{a, b}` instead of `{ a, b }` in objects, destructuring and imports.
- **Single quotes in JS/TS, double in JSX and CSS** — matches the codeguide.
- **Modern trailing comma** — `'all'`, including function parameters (ES2017+).
- **LF line endings, final newline, 2-space indent** — consistent with `.editorconfig`.
- **`printWidth: 100`** — comfortable for modern editors and PR diff views.

## Configuration Summary

| Option | Value | Rationale |
|---|---|---|
| `printWidth` | `100` | Wider than 80, still readable in side-by-side diffs |
| `tabWidth` | `2` | Matches `.editorconfig` and `@stylistic/indent` |
| `useTabs` | `false` | Spaces only |
| `semi` | `true` | Explicit semicolons |
| `singleQuote` | `true` | Single quotes in JS/TS |
| `jsxSingleQuote` | `false` | Double quotes in JSX attributes |
| `trailingComma` | `'all'` | Trailing comma everywhere multiline, including function params |
| `bracketSpacing` | `false` | `{a, b}` without spaces |
| `bracketSameLine` | `false` | Closing `>` on new line for multiline JSX |
| `arrowParens` | `'always'` | `(x) => x` even for single parameter |
| `endOfLine` | `'lf'` | Unix line endings |

CSS, SCSS and LESS use double quotes via an override.

## Extending

Override any option in your `prettier.config.js`:

```js
import preset from 'prettier-config-htmlacademy';

export default {
  ...preset,
  printWidth: 80,
  proseWrap: 'always',
};
```

## Editor Integration

Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for VS Code.

For format on save, add to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Choosing Between Prettier and `@stylistic`

The HTML Academy Codeguide is implemented in two parallel ways:

- **Prettier** (this package) — one formatter for every supported language, format on save, no per-rule reports.
- **`@stylistic`** inside [`eslint-config-htmlacademy`](https://github.com/htmlacademy/eslint-config-htmlacademy) and [`stylelint-config-htmlacademy`](https://github.com/htmlacademy/stylelint-config-htmlacademy) — formatting rules reported alongside other linter rules, fixable with `eslint --fix` and `stylelint --fix`.

Pick one. Running both at the same time will cause both to fight over the same files.

## Links

- [HTML Academy](https://htmlacademy.ru)
- [HTML Academy Codeguide](https://codeguide.academy)
- [Codeguide Repository](https://github.com/htmlacademy/codeguide)
- [Prettier Documentation](https://prettier.io/docs/en/)
