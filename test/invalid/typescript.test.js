import {test} from 'node:test';
import {strictEqual} from 'node:assert';
import {format} from './helpers.js';

test('typescript preserves single quotes', async () => {
  const input = 'const greeting: string = "hello";\n';
  const expected = "const greeting: string = 'hello';\n";
  strictEqual(await format(input, 'sample.ts'), expected);
});

test('typescript removes spaces inside type import braces', async () => {
  const input = "import { type User } from './user';\n";
  const expected = "import {type User} from './user';\n";
  strictEqual(await format(input, 'sample.ts'), expected);
});

test('typescript adds trailing comma to multiline call arguments', async () => {
  const input = [
    'const result = createSomeUserWithLongName(',
    '  firstArgumentThatIsAlsoQuiteVerbose,',
    '  secondArgumentToMakeSureWeCrossPrintWidthBoundary,',
    '  thirdArgumentSoThatPrettierKeepsTheCallMultilineForSure',
    ');',
    '',
  ].join('\n');
  const expected = [
    'const result = createSomeUserWithLongName(',
    '  firstArgumentThatIsAlsoQuiteVerbose,',
    '  secondArgumentToMakeSureWeCrossPrintWidthBoundary,',
    '  thirdArgumentSoThatPrettierKeepsTheCallMultilineForSure,',
    ');',
    '',
  ].join('\n');
  strictEqual(await format(input, 'sample.ts'), expected);
});
