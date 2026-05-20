import {test} from 'node:test';
import {strictEqual} from 'node:assert';
import {format} from './helpers.js';

test('css uses double quotes via override', async () => {
  const input = ".button {\n  font-family: 'Roboto', sans-serif;\n}\n";
  const expected = '.button {\n  font-family: "Roboto", sans-serif;\n}\n';
  strictEqual(await format(input, 'sample.css'), expected);
});

test('css normalises indent to 2 spaces', async () => {
  const input = '.button {\n    color: #ffffff;\n}\n';
  const expected = '.button {\n  color: #ffffff;\n}\n';
  strictEqual(await format(input, 'sample.css'), expected);
});

test('scss uses double quotes via override', async () => {
  const input = "@use 'sass:color';\n";
  const expected = '@use "sass:color";\n';
  strictEqual(await format(input, 'sample.scss'), expected);
});
