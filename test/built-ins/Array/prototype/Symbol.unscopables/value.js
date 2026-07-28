// Copyright (C) 2015 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype-%symbol.unscopables%
description: >
    Initial value of `Symbol.unscopables` property
includes: [propertyHelper.js]
features: [Symbol.unscopables]
---*/

var unscopables = Array.prototype[Symbol.unscopables];

assert.sameValue(Object.getPrototypeOf(unscopables), null);

assert.sameValue(unscopables.at, true, '`at` property value');
verifyProperty(unscopables, "at", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.copyWithin, true, '`copyWithin` property value');
verifyProperty(unscopables, "copyWithin", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.entries, true, '`entries` property value');
verifyProperty(unscopables, "entries", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.fill, true, '`fill` property value');
verifyProperty(unscopables, "fill", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.find, true, '`find` property value');
verifyProperty(unscopables, "find", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.findIndex, true, '`findIndex` property value');
verifyProperty(unscopables, "findIndex", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.findLast, true, '`findLast` property value');
verifyProperty(unscopables, "findLast", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.findLastIndex, true, '`findLastIndex` property value');
verifyProperty(unscopables, "findLastIndex", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.flat, true, '`flat` property value');
verifyProperty(unscopables, "flat", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.flatMap, true, '`flatMap` property value');
verifyProperty(unscopables, "flatMap", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.includes, true, '`includes` property value');
verifyProperty(unscopables, "includes", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.keys, true, '`keys` property value');
verifyProperty(unscopables, "keys", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.toReversed, true, '`toReversed` property value');
verifyProperty(unscopables, "toReversed", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.toSorted, true, '`toSorted` property value');
verifyProperty(unscopables, "toSorted", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.toSpliced, true, '`toSpliced` property value');
verifyProperty(unscopables, "toSpliced", {
  writable: true,
  enumerable: true,
  configurable: true
});

assert.sameValue(unscopables.values, true, '`values` property value');
verifyProperty(unscopables, "values", {
  writable: true,
  enumerable: true,
  configurable: true
});
