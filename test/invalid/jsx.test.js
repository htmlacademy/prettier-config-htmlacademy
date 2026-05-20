import {test} from 'node:test';
import {strictEqual} from 'node:assert';
import {format} from './helpers.js';

test('jsx prefers double quotes in attributes', async () => {
  const input = "const node = <div className='wrapper' />;\n";
  const expected = 'const node = <div className="wrapper" />;\n';
  strictEqual(await format(input, 'sample.jsx'), expected);
});

test('jsx puts closing bracket on new line for multiline props', async () => {
  const input = [
    'const node = (',
    '  <ComponentWithRatherVerboseName',
    '    firstPropertyWithLongName="firstValue"',
    '    secondPropertyWithLongName="secondValue"',
    '    thirdPropertyWithLongName="thirdValue">',
    '    child',
    '  </ComponentWithRatherVerboseName>',
    ');',
    '',
  ].join('\n');
  const expected = [
    'const node = (',
    '  <ComponentWithRatherVerboseName',
    '    firstPropertyWithLongName="firstValue"',
    '    secondPropertyWithLongName="secondValue"',
    '    thirdPropertyWithLongName="thirdValue"',
    '  >',
    '    child',
    '  </ComponentWithRatherVerboseName>',
    ');',
    '',
  ].join('\n');
  strictEqual(await format(input, 'sample.jsx'), expected);
});
