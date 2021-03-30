"use strict";
{
    function internWork(person) {
        console.log(person.name, person.work());
    }
    internWork({
        name: "addie",
        score: 1,
        employeeId: 12,
        work: function () { return void {}; },
    });
}
