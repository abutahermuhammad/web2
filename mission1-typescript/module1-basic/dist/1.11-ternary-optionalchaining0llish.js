"use strict";
// Optional Chaining
// Ternary Operator
const isAdult = (age) => age === 18 ? true : false;
// Nullish Coalescing Operation
const isAuthenticated = null;
const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'guest';
