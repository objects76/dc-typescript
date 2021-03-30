"use strict";
{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array.....
     */
    // number
    var num = -6;
    // string
    var str = 'hello';
    // boolean
    var boal = false;
    // undefined
    var name_1; // 💩
    var age = void 0;
    age = undefined;
    age = 1;
    function find() {
        return undefined;
    }
    // null
    var person = void 0; // 💩
    var person2 = void 0;
    // unknown 💩
    var notSure = 0;
    notSure = 'he';
    notSure = true;
    // any 💩
    var anything = 0;
    anything = 'hello';
    // void
    function print() {
        console.log('hello');
        return;
    }
    var unusable = undefined; // 💩
    // never
    function throwError(message) {
        // message -> server (log)
        throw new Error(message);
        while (true) { }
    }
    var neverEnding = void 0; // 💩
    // objet
    var obj = void 0; // 💩
    function acceptSomeObject(obj) { }
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });
}
