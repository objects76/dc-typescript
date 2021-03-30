"use strict";
{
    // let in es6.
    // js type:
    // 1.primitive type: number,string,boolean, bigint, symbol, null, undefined
    // 2. object type: function, array, ...
    // ts type: primitive
    var num1 = 1; // 1.0f
    var str1 = "1";
    var bool1 = true;
    // undefined: existed or non-
    var v1 = void 0; // useless.
    var age = undefined; // optional type.
    //   function find(): int | undefined {
    //     return undefined;
    //   }
    var v2 = void 0; // useless
    var age2 = null;
    // unknown: to work with old js code.
    var notSure = 0; // var?
    notSure = "hello...";
    notSure = true;
    // any
    var anything1 = 0; // var?
    anything1 = "string...";
    // void
    function print() {
        console.log("no return");
        return;
    }
    // never
    function assertlike() {
        while (true) { }
        throw new Error("assertion failed");
    }
    // object: not primitive,
    var obj = void 0; // var?
    function acceptSomeObj(obj) { }
    acceptSomeObj({});
    acceptSomeObj([]);
}
