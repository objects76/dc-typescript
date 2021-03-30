"use strict";
{
    // Type inference
    var text_1 = "hello";
    //   text = 1; ERROR
    function print(msg) {
        if (msg === void 0) { msg = "hello"; }
        console.log(msg);
    }
    // return type inference: number
    function add(n1, n2) {
        return n1 + n2;
    }
    // complicated type or function: specify the type.
}
