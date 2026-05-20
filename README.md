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

## Using with ESLint and Stylelint

Prettier handles formatting; ESLint and Stylelint find bugs and enforce conventions. They can — and should — work together in one project, as long as you stop the linters from fighting Prettier over the same whitespace.

**Install all three:**

```bash
npm install -D \
  prettier prettier-config-htmlacademy \
  eslint eslint-config-htmlacademy eslint-config-prettier \
  stylelint stylelint-config-htmlacademy
```

[`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) is the official package that turns off ESLint rules that conflict with Prettier.

**`prettier.config.js`:**

```js
import preset from 'prettier-config-htmlacademy';
export default preset;
```

**`eslint.config.js`** — `eslint-config-prettier/flat` must come last so it overrides formatting rules from the HTML Academy preset:

```js
import vanilla from 'eslint-config-htmlacademy/vanilla';
import prettier from 'eslint-config-prettier/flat';

export default [...vanilla, prettier];
```

**`stylelint.config.js`** — turn off the `@stylistic` rules and empty-line spacing, keep everything else (including [`order/properties-order`](https://github.com/hudochenkov/stylelint-order) — Prettier doesn't reorder CSS properties):

```js
import htmlacademy from 'stylelint-config-htmlacademy';

const stylisticOff = Object.fromEntries(
  Object.keys(htmlacademy.rules)
    .filter((rule) => rule.startsWith('@stylistic/'))
    .map((rule) => [rule, null]),
);

export default {
  ...htmlacademy,
  rules: {
    ...htmlacademy.rules,
    ...stylisticOff,
    'at-rule-empty-line-before': null,
    'rule-empty-line-before': null,
  },
};
```

**Add scripts to `package.json`:**

```json
{
  "scripts": {
    "format": "prettier . --write",
    "lint:js": "eslint .",
    "lint:css": "stylelint \"**/*.{css,scss}\"",
    "lint": "npm run lint:js && npm run lint:css",
    "check": "prettier . --check && npm run lint"
  }
}
```

Day to day: Prettier formats on save in the editor; `npm run lint` and `npm run check` run in CI and before commits.

### Who does what

| Tool | Responsibility |
|---|---|
| Prettier | Indentation, quotes, semicolons, line breaks, trailing commas — JS, TS, JSX, CSS, HTML, MD, JSON, YAML |
| ESLint | JavaScript and TypeScript correctness — unused variables, unsafe patterns, modern syntax, file naming |
| Stylelint | CSS correctness — BEM class names, property ordering, modern color functions, max nesting, vendor prefixes |

### Alternative: linters only, without Prettier

If you would rather not add a third tool, skip this package and use `eslint-config-htmlacademy` and `stylelint-config-htmlacademy` on their own. Their built-in `@stylistic` rules cover the same formatting, with `eslint --fix` and `stylelint --fix` as your formatter.

## Links

- [HTML Academy](https://htmlacademy.ru)
- [HTML Academy Codeguide](https://codeguide.academy)
- [Codeguide Repository](https://github.com/htmlacademy/codeguide)
- [Prettier Documentation](https://prettier.io/docs/en/)
