import {test} from 'node:test';
import {strictEqual} from 'node:assert';
import {format} from './helpers.js';

test('prefers single quotes', async () => {
  const input = 'const greeting = "hello";\n';
  const expected = "const greeting = 'hello';\n";
  strictEqual(await format(input, 'sample.js'), expected);
});

test('inserts missing semicolons', async () => {
  const input = 'const value = 1\n';
  const expected = 'const value = 1;\n';
  strictEqual(await format(input, 'sample.js'), expected);
});

test('removes spaces inside object braces', async () => {
  const input = 'const obj = { a: 1, b: 2 };\n';
  const expected = 'const obj = {a: 1, b: 2};\n';
  strictEqual(await format(input, 'sample.js'), expected);
});

test('removes spaces inside destructuring braces', async () => {
  const input = 'const { a, b } = obj;\n';
  const expected = 'const {a, b} = obj;\n';
  strictEqual(await format(input, 'sample.js'), expected);
});

test('removes spaces inside import braces', async () => {
  const input = "import { readFile } from 'node:fs/promises';\n";
  const expected = "import {readFile} from 'node:fs/promises';\n";
  strictEqual(await format(input, 'sample.js'), expected);
});

test('adds parentheses around single arrow argument', async () => {
  const input = 'const double = x => x * 2;\n';
  const expected = 'const double = (x) => x * 2;\n';
  strictEqual(await format(input, 'sample.js'), expected);
});

test('adds trailing comma to multiline call', async () => {
  const input = [
    'someExtremelyLongFunctionNameThatForcesMultilineFormatting(',
    '  firstArgumentThatIsAlsoQuiteVerbose,',
    '  secondArgumentToMakeSureWeCrossPrintWidthBoundary,',
    '  thirdArgumentSoThatPrettierKeepsTheCallMultilineForSure',
    ');',
    '',
  ].join('\n');
  const expected = [
    'someExtremelyLongFunctionNameThatForcesMultilineFormatting(',
    '  firstArgumentThatIsAlsoQuiteVerbose,',
    '  secondArgumentToMakeSureWeCrossPrintWidthBoundary,',
    '  thirdArgumentSoThatPrettierKeepsTheCallMultilineForSure,',
    ');',
    '',
  ].join('\n');
  strictEqual(await format(input, 'sample.js'), expected);
});

test('normalises indent to 2 spaces', async () => {
  const input = 'function foo() {\n\t\treturn 1;\n}\n';
  const expected = 'function foo() {\n  return 1;\n}\n';
  strictEqual(await format(input, 'sample.js'), expected);
});
