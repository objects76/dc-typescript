"use strict";
{
    /**
     * Type Assertions 💩
     */
    function jsStrFunc() {
        return 2;
    }
    var result_1 = jsStrFunc();
    console.log(result_1.length);
    console.log(result_1.length);
    var wrong = 5;
    console.log(wrong.push(1)); // 😱
    function findNumbers() {
        return undefined;
    }
    var numbers = findNumbers();
    numbers.push(2); // 😱
    var button = document.querySelector('class');
}
