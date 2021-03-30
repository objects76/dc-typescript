// module : codes in a file, scope...
//

console.log("module1-start");
import * as mod2 from "./10-3-module2.js";

export function add(a, b) {
  console.log("add in mod1");
  return a + b;
}

export const number = 10;
export function print() {
  console.log("print in mod1");
}
mod2.add(100, 200);
console.log("module1-end");
