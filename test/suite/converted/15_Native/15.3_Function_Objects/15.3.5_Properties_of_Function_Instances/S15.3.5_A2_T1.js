// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Every function instance has a [[Call]] property
 *
 * @section: 15.3.5;
 * @path: 15_Native/15.3_Function_Objects/15.3.5_Properties_of_Function_Instances/S15.3.5_A2_T1.js;
 * @description: For testing call Function("var x =1; this.y=2;return \"OK\";")();
 */

//CHECK#1
if (Function("var x =1; this.y=2;return \"OK\";")() !== "OK") {
  $ERROR('#1: Every function instance has a [[Call]] property');
}

//CHECK#2
if (typeof x !== "undefined") {
  $ERROR('#2: Every function instance has a [[Call]] property');
}

//CHECK#3
if (y !== 2) {
  $ERROR('#3: Every function instance has a [[Call]] property');
}
