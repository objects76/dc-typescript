"use strict";
{
    /**
     * Let's make a calculator 🧮
     */
    console.log(calculate("add", 1, 3)); // 4
    console.log(calculate("substract", 3, 1)); // 2
    console.log(calculate("multiply", 4, 2)); // 8
    console.log(calculate("divide", 4, 2)); // 2
    console.log(calculate("remainder", 5, 2)); // 1
    //function calculate(method: string, n1: number, n2: number): number {
    function calculate(method, n1, n2) {
        switch (method) {
            case "add":
                return n1 + n2;
            case "substract":
                return n1 - n2;
            case "multiply":
                return n1 * n2;
            case "divide":
                return n1 / n2;
            case "remainder":
                return n1 % n2;
            default:
                throw new Error("invalid method: " + method); // not reachable when method_t.
        }
    }
}
