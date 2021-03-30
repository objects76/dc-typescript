"use strict";
{
    // Type assertion is NG.
    // But, when use with vanilla JS, specify type.
    function jsFunc() {
        return 2;
        return "hello";
    }
    var result_1 = jsFunc();
    // I'm sure the result is string type.
    console.log(result_1.length);
    console.log(result_1.length);
    //
    function findNumber() {
        return undefined;
    }
    var numbers = findNumber();
    numbers.push(3);
    //
    var button = document.querySelector("class");
    console.log(button.scrollHeight);
}
