console.log("module2-start");

console.log("calc.add=", calculator.add);
import * as calculator from "./10-3-module1.js";

console.log(calculator.add(1, 2), "in mod2");
calculator.print();
calculator.number;

export function add(a, b) {
  console.log("add in mod2");
  return a + b;
}

console.log("module2-start");
