import { expect } from 'chai';
import { assert } from 'chai';

function func() {
  return 1;
}

it('test', () => {
  expect(1).to.equal(1);
  assert(1===1, 'hoge');
});
