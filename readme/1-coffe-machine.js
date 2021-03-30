"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
if (0) {
    var BEANS_GRAMM_PER_SHOT_1 = 7;
    var coffeBeans_1 = 0;
    function makeCoffe(shots) {
        var neededGram = shots * BEANS_GRAMM_PER_SHOT_1;
        if (coffeBeans_1 < neededGram) {
            throw new Error("Not enough coffee beans");
        }
        coffeBeans_1 -= neededGram;
        return {
            shots: shots,
            hasMilk: false,
        };
        return null;
    }
    coffeBeans_1 += 3 * BEANS_GRAMM_PER_SHOT_1;
    var coffee = makeCoffe(2);
    console.log(coffee);
}
if (0) {
    var CoffeeMaker_1 = /** @class */ (function () {
        function CoffeeMaker(initialBeanGram) {
            if (initialBeanGram === void 0) { initialBeanGram = 0; }
            this.coffeBeans = 0;
            this.coffeBeans += initialBeanGram;
        }
        CoffeeMaker.makeMachine = function (initialBean) {
            if (initialBean === void 0) { initialBean = 0; }
            return new CoffeeMaker(initialBean);
        };
        CoffeeMaker.prototype.makeCoffe = function (shots) {
            var neededGram = shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            if (this.coffeBeans < neededGram) {
                throw new Error("Not enough coffee beans");
            }
            this.coffeBeans -= neededGram;
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMaker.BEANS_GRAMM_PER_SHOT = 7;
        return CoffeeMaker;
    }());
    var coffeeMaker = new CoffeeMaker_1(32);
    var coffee = coffeeMaker.makeCoffe(2);
    console.log(coffee);
    console.log(CoffeeMaker_1.makeMachine(32).makeCoffe(2));
}
// more encapsulation.
if (0) {
    // public is default.
    var CoffeeMaker_2 = /** @class */ (function () {
        function CoffeeMaker(initialBeanGram) {
            if (initialBeanGram === void 0) { initialBeanGram = 0; }
            this.coffeBeans = 0;
            this.coffeBeans += initialBeanGram;
        }
        CoffeeMaker.makeMachine = function (initialBean) {
            if (initialBean === void 0) { initialBean = 0; }
            return new CoffeeMaker(initialBean);
        };
        Object.defineProperty(CoffeeMaker.prototype, "possibleShot", {
            get: function () {
                return Math.floor(this.coffeBeans / CoffeeMaker.BEANS_GRAMM_PER_SHOT);
            },
            enumerable: false,
            configurable: true
        });
        CoffeeMaker.prototype.makeCoffe = function (shots) {
            var neededGram = shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            if (this.coffeBeans < neededGram) {
                throw new Error("Not enough coffee beans");
            }
            this.coffeBeans -= neededGram;
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMaker.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0)
                throw new Error("beans should be greater than 0");
            this.coffeBeans += beans;
        };
        CoffeeMaker.BEANS_GRAMM_PER_SHOT = 7;
        return CoffeeMaker;
    }());
    var coffeeMaker = CoffeeMaker_2.makeMachine(); // factory pattern like.
    // coffeeMaker.coffeBeans = 0; ERROR!
    coffeeMaker.fillCoffeeBeans(32);
    console.log(coffeeMaker.possibleShot);
    console.log(coffeeMaker.makeCoffe(2));
    console.log(coffeeMaker.possibleShot);
}
// abstraction
if (0) {
    // public is default.
    var CoffeeMachine_1 = /** @class */ (function () {
        function CoffeeMachine(initialBeanGram) {
            if (initialBeanGram === void 0) { initialBeanGram = 0; }
            this.coffeBeans = 0;
            this.coffeBeans += initialBeanGram;
        }
        // for manager.
        CoffeeMachine.makeMachine = function (initialBean) {
            if (initialBean === void 0) { initialBean = 0; }
            return new CoffeeMachine(initialBean);
        };
        CoffeeMachine.prototype.clean = function () {
            console.log("cleaning....");
        };
        Object.defineProperty(CoffeeMachine.prototype, "possibleShot", {
            get: function () {
                return Math.floor(this.coffeBeans / CoffeeMachine.BEANS_GRAMM_PER_SHOT);
            },
            enumerable: false,
            configurable: true
        });
        // for worker(parttime job)
        CoffeeMachine.prototype.grindBeans = function (shots) {
            var neededGram = shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            if (this.coffeBeans < neededGram) {
                throw new Error("Not enough coffee beans");
            }
            this.coffeBeans -= neededGram;
            console.log("grinding " + neededGram + " gram beans...");
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log("heating up...");
        };
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("extracting ....");
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0)
                throw new Error("beans should be greater than 0");
            this.coffeBeans += beans;
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7;
        return CoffeeMachine;
    }());
    //
    var AmatureUser = /** @class */ (function () {
        function AmatureUser(machine) {
            this.machine = machine;
        }
        AmatureUser.prototype.makeCoffee = function () {
            console.log("amature:");
            console.log(this.machine.makeCoffee(2));
        };
        return AmatureUser;
    }());
    var ProBarista = /** @class */ (function () {
        function ProBarista(machine) {
            this.machine = machine;
        }
        ProBarista.prototype.makeCoffee = function () {
            console.log("pro barista:");
            this.machine.fillCoffeeBeans(32);
            console.log(this.machine.makeCoffee(2));
            this.machine.clean();
        };
        return ProBarista;
    }());
    //
    var coffeeMaker = CoffeeMachine_1.makeMachine(32); // factory pattern like.
    var ama = new AmatureUser(coffeeMaker);
    var pro = new ProBarista(coffeeMaker);
    try {
        ama.makeCoffee();
        pro.makeCoffee();
        ama.makeCoffee();
        ama.makeCoffee();
    }
    catch (e) {
        console.log("------------------ Error:" + e.message);
        pro.makeCoffee();
    }
}
// inheritance
if (0) {
    var CoffeeMachine_2 = /** @class */ (function () {
        function CoffeeMachine(initialBeanGram) {
            if (initialBeanGram === void 0) { initialBeanGram = 0; }
            this.coffeBeans = 0;
            this.coffeBeans += initialBeanGram;
        }
        // for manager.
        CoffeeMachine.makeMachine = function (initialBean) {
            if (initialBean === void 0) { initialBean = 0; }
            return new CoffeeMachine(initialBean);
        };
        Object.defineProperty(CoffeeMachine.prototype, "possibleShot", {
            get: function () {
                return Math.floor(this.coffeBeans / CoffeeMachine.BEANS_GRAMM_PER_SHOT);
            },
            enumerable: false,
            configurable: true
        });
        // for worker(parttime job)
        CoffeeMachine.prototype.grindBeans = function (shots) {
            var neededGram = shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            if (this.coffeBeans < neededGram) {
                throw new Error("Not enough coffee beans");
            }
            this.coffeBeans -= neededGram;
            console.log("grinding " + neededGram + " gram beans...");
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log("heating up...");
        };
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("extracting ....");
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0)
                throw new Error("beans should be greater than 0");
            this.coffeBeans += beans;
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7;
        return CoffeeMachine;
    }());
    //
    // !super!
    //
    var CafeLatteMachine = /** @class */ (function (_super) {
        __extends(CafeLatteMachine, _super);
        function CafeLatteMachine(milk, beans) {
            var _this = _super.call(this, beans) || this;
            console.log("milk=" + milk);
            return _this;
        }
        CafeLatteMachine.prototype.steamMilk = function () {
            console.log("steam milk....");
        };
        CafeLatteMachine.prototype.makeCoffee = function (shots) {
            var coffee = _super.prototype.makeCoffee.call(this, shots);
            this.steamMilk();
            return __assign(__assign({}, coffee), { hasMilk: true });
        };
        return CafeLatteMachine;
    }(CoffeeMachine_2));
    var machine = new CoffeeMachine_2(32);
    var latteMachine = new CafeLatteMachine(3, 32);
    console.log(latteMachine.makeCoffee(1));
}
// polymorphism
if (0) {
    var CoffeeMachine_3 = /** @class */ (function () {
        function CoffeeMachine(initialBeanGram) {
            if (initialBeanGram === void 0) { initialBeanGram = 0; }
            this.coffeBeans = 0;
            this.coffeBeans += initialBeanGram;
        }
        // for manager.
        CoffeeMachine.makeMachine = function (initialBean) {
            if (initialBean === void 0) { initialBean = 0; }
            return new CoffeeMachine(initialBean);
        };
        Object.defineProperty(CoffeeMachine.prototype, "possibleShot", {
            get: function () {
                return Math.floor(this.coffeBeans / CoffeeMachine.BEANS_GRAMM_PER_SHOT);
            },
            enumerable: false,
            configurable: true
        });
        // for worker(parttime job)
        CoffeeMachine.prototype.grindBeans = function (shots) {
            var neededGram = shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            if (this.coffeBeans < neededGram) {
                throw new Error("Not enough coffee beans");
            }
            this.coffeBeans -= neededGram;
            console.log("grinding " + neededGram + " gram beans...");
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log("heating up...");
        };
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("extracting ....");
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0)
                throw new Error("beans should be greater than 0");
            this.coffeBeans += beans;
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7;
        return CoffeeMachine;
    }());
    //
    // !super!
    //
    var CafeLatteMachine = /** @class */ (function (_super) {
        __extends(CafeLatteMachine, _super);
        function CafeLatteMachine(milk, beans) {
            var _this = _super.call(this, beans) || this;
            console.log("milk=" + milk);
            return _this;
        }
        CafeLatteMachine.prototype.steamMilk = function () {
            console.log("steam milk....");
        };
        CafeLatteMachine.prototype.makeCoffee = function (shots) {
            var coffee = _super.prototype.makeCoffee.call(this, shots);
            this.steamMilk();
            return __assign(__assign({}, coffee), { hasMilk: true });
        };
        return CafeLatteMachine;
    }(CoffeeMachine_3));
    var SweetCoffeMachine = /** @class */ (function (_super) {
        __extends(SweetCoffeMachine, _super);
        function SweetCoffeMachine() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SweetCoffeMachine.prototype.makeCoffee = function (shots) {
            return {
                shots: shots,
                hasMilk: false,
                sugar: 1,
            };
        };
        return SweetCoffeMachine;
    }(CoffeeMachine_3));
    var machine = new CoffeeMachine_3(32);
    var latteMachine = new CafeLatteMachine(3, 32);
    console.log(latteMachine.makeCoffee(1));
}
// composition
if (1) {
    var CoffeeMachine_4 = /** @class */ (function () {
        function CoffeeMachine(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMachine.makeMachine = function (coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
        };
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        };
        CoffeeMachine.prototype.clean = function () {
            console.log("cleaning the machine...🧼");
        };
        CoffeeMachine.prototype.grindBeans = function (shots) {
            console.log("grinding beans for " + shots);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log("heating up... 🔥");
        };
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("Pulling " + shots + " shots... \u2615\uFE0F");
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMachine;
    }());
    var CheapMilkStreamer = /** @class */ (function () {
        function CheapMilkStreamer() {
        }
        CheapMilkStreamer.prototype.makeMilk = function (cup) {
            var milk = true;
            return __assign(__assign({}, cup), { hasMilk: milk });
        };
        return CheapMilkStreamer;
    }());
    var CandiSugarMixer = /** @class */ (function () {
        function CandiSugarMixer() {
        }
        CandiSugarMixer.prototype.getSugar = function () {
            console.log("getting some sugar...");
            return true;
        };
        CandiSugarMixer.prototype.addSugar = function (cup) {
            var sugar = this.getSugar();
            return __assign(__assign({}, cup), { hasSugar: sugar });
        };
        return CandiSugarMixer;
    }());
    var CaffeLatteMachine = /** @class */ (function (_super) {
        __extends(CaffeLatteMachine, _super);
        function CaffeLatteMachine(beans, serialNumber, milker) {
            var _this = _super.call(this, beans) || this;
            _this.serialNumber = serialNumber;
            _this.milker = milker;
            return _this;
        }
        CaffeLatteMachine.prototype.makeCoffee = function (shots) {
            var coffee = _super.prototype.makeCoffee.call(this, shots);
            var latte = this.milker.makeMilk(coffee);
            return latte;
        };
        return CaffeLatteMachine;
    }(CoffeeMachine_4));
    var SweetCoffeeMaker = /** @class */ (function (_super) {
        __extends(SweetCoffeeMaker, _super);
        function SweetCoffeeMaker(beans, sugarMixer) {
            var _this = _super.call(this, beans) || this;
            _this.sugarMixer = sugarMixer;
            return _this;
        }
        SweetCoffeeMaker.prototype.makeCoffee = function (shots) {
            var coffee = _super.prototype.makeCoffee.call(this, shots);
            var sugarCoffee = this.sugarMixer.addSugar(coffee);
            return sugarCoffee;
        };
        return SweetCoffeeMaker;
    }(CoffeeMachine_4));
    var milkMixer = new CheapMilkStreamer();
    var sugarAdder = new CandiSugarMixer();
    var coffeeMachine = new CoffeeMachine_4(16);
    var latteMachine = new CaffeLatteMachine(16, "1", milkMixer);
    var sweetMachine = new SweetCoffeeMaker(16, sugarAdder);
}
// contract with interface.(decoupling with interface)
if (1) {
    var CheapMilkStreamer = /** @class */ (function () {
        function CheapMilkStreamer() {
        }
        CheapMilkStreamer.prototype.makeMilk = function (cup) {
            var milk = true;
            return __assign(__assign({}, cup), { hasMilk: milk });
        };
        return CheapMilkStreamer;
    }());
    var FancyMilkStreamer = /** @class */ (function () {
        function FancyMilkStreamer() {
        }
        FancyMilkStreamer.prototype.makeMilk = function (cup) {
            throw new Error("Method not implemented.");
        };
        return FancyMilkStreamer;
    }());
    var ColdMilkStreamer = /** @class */ (function () {
        function ColdMilkStreamer() {
        }
        ColdMilkStreamer.prototype.makeMilk = function (cup) {
            throw new Error("Method not implemented.");
        };
        return ColdMilkStreamer;
    }());
    var CandiSugarMixer = /** @class */ (function () {
        function CandiSugarMixer() {
        }
        CandiSugarMixer.prototype.getSugar = function () {
            console.log("getting some sugar...");
            return true;
        };
        CandiSugarMixer.prototype.addSugar = function (cup) {
            var sugar = this.getSugar();
            return __assign(__assign({}, cup), { hasSugar: sugar });
        };
        return CandiSugarMixer;
    }());
    var BlackSugarMixer = /** @class */ (function () {
        function BlackSugarMixer() {
        }
        BlackSugarMixer.prototype.addSugar = function (cup) {
            throw new Error("Method not implemented.");
        };
        return BlackSugarMixer;
    }());
    // machine.
    var CoffeeMachine_5 = /** @class */ (function () {
        function CoffeeMachine(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        };
        CoffeeMachine.prototype.clean = function () {
            console.log("cleaning the machine...🧼");
        };
        CoffeeMachine.prototype.grindBeans = function (shots) {
            console.log("grinding beans for " + shots);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log("heating up... 🔥");
        };
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("Pulling " + shots + " shots... \u2615\uFE0F");
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMachine.prototype.makeCoffee = function (shots, milkerMixer, sugarAdder) {
            this.grindBeans(shots);
            this.preheat();
            var coffee = this.extract(shots);
            if (milkerMixer)
                coffee = milkerMixer.makeMilk(coffee);
            if (sugarAdder)
                coffee = sugarAdder.addSugar(coffee);
            return coffee;
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMachine;
    }());
    var cheapMilkMixer = new CheapMilkStreamer();
    var candiSugarAdder = new CandiSugarMixer();
    var coffeeMachine = new CoffeeMachine_5(16);
    var coffee = coffeeMachine.makeCoffee(2, undefined, candiSugarAdder);
    console.log(coffee);
}
