"use strict";
{
    // enum
    // There is no enum concept in JS.
    // jsstryle
    var DAYSJS = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNSDAY: 2 });
    var day1 = DAYSJS.MONDAY;
    // ts-style
    var DAYS = void 0;
    (function (DAYS) {
        DAYS[DAYS["Monday"] = 0] = "Monday";
        DAYS[DAYS["Tuesday"] = 1] = "Tuesday";
        DAYS[DAYS["Wednsday"] = 2] = "Wednsday";
        DAYS[DAYS["Thursday"] = 3] = "Thursday";
        DAYS[DAYS["Friday"] = 4] = "Friday";
        DAYS[DAYS["Satarday"] = 5] = "Satarday";
        DAYS[DAYS["Sunday"] = 6] = "Sunday";
    })(DAYS || (DAYS = {}));
    console.log(DAYS.Monday);
    var day = DAYS.Monday;
    day = 10; // NG
    console.log(day);
    var day2 = "Mon";
}
