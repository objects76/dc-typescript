"use strict";
{
    var log_1 = console.log;
    // ts style function
    function add(n1, n2) {
        return n1 + n2;
    }
    //   function jsFetchNum(id: string): Promise<number> {
    //     // ...
    //     //...
    //     return new Promise((resolve, reject) => {
    //       resolve(100);
    //     });
    //   }
    // optional parameter
    function printName(firstName, lastName) {
        console.log(firstName, lastName);
    }
    printName("jj", "kim");
    printName("jj");
    printName("jj", undefined);
    // default parameter
    function printMessage(message) {
        if (message === void 0) { message = "default msg"; }
        log_1(message);
    }
    printMessage();
    // rest parameter
    function addNums() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        return nums.reduce(function (a, b) { return a + b; });
        return 0;
    }
    log_1(addNums(1, 2, 3, 4));
}
