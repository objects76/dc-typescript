"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
if (0 && "interface") {
    // object ★
    var obj1 = {
        x: 1,
        y: 1,
    };
    var obj2 = {
        x: 1,
        y: 1,
        z: 1,
    };
    // class ★
    var Pos1 = /** @class */ (function () {
        function Pos1() {
        }
        return Pos1;
    }());
    var Pos2 = /** @class */ (function () {
        function Pos2() {
        }
        return Pos2;
    }());
}
if ("") {
    // interface: contract.
    // types: struct for data.
}
if ("utility types") {
    // meaning?
    if ("index type") {
        var obj = {
            name: "ellie",
        };
        obj.name; // ellie
        obj["name"]; // ellie
        var text_1 = "hello";
        var key = "gender";
        var person = {
            name: "ellie",
            gender: "male",
        };
    }
    if ("map type") {
        var animal = {
            name: "dog",
        };
        animal.name = "ellie";
        var video = {
            title: "hi",
            author: "ellie",
        };
        var obj2 = {
            title: "hi",
            author: null,
        };
    }
    if ("condition type") {
        ("string");
        ("string");
        ("function");
    }
    if ("usage: read only") {
        // make const.
        function display(todo) {
            //todo.title = "jaja";
        }
    }
    if ("usage: partial") {
        function updateTodo(todo, fieldsToUpdate) {
            return __assign(__assign({}, todo), fieldsToUpdate);
        }
        var todo = {
            title: "learn TypeScript",
            description: "study hard",
            label: "study",
            priority: "high",
        };
        var updated = updateTodo(todo, { priority: "low" });
        console.log(updated);
    }
    if ("usage: pick,omit") {
        function getVideo(id) {
            return {
                id: id,
                title: "video",
                url: "https://..",
                data: "byte-data..",
            };
        }
        function getVideoMetadata(id) {
            return {
                id: id,
                title: "title",
            };
        }
        var video = getVideo("id1");
        console.log(getVideoMetadata("id1"));
        function getVideo2(id) {
            return {
                id: id,
                title: "video",
                url: "https://..",
                data: "byte-data..",
            };
        }
        function getVideoMetadata2(id) {
            return {
                id: id,
                title: "title",
            };
        }
    }
    if ("usage: record") {
        var nav = {
            home: { title: "Home" },
            about: { title: "About" },
            contact: { title: "Contact" },
        };
    }
}
