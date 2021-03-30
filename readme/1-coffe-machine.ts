if (0) {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT = 7;
  let coffeBeans = 0;

  function makeCoffe(shots: number): CoffeeCup | null {
    const neededGram = shots * BEANS_GRAMM_PER_SHOT;
    if (coffeBeans < neededGram) {
      throw new Error("Not enough coffee beans");
    }

    coffeBeans -= neededGram;
    return {
      shots: shots,
      hasMilk: false,
    };
    return null;
  }

  coffeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffe(2);
  console.log(coffee);
}

if (0) {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT = 7;
    coffeBeans = 0;

    static makeMachine(initialBean = 0) {
      return new CoffeeMaker(initialBean);
    }
    constructor(initialBeanGram = 0) {
      this.coffeBeans += initialBeanGram;
    }

    makeCoffe(shots: number): CoffeeCup {
      const neededGram = shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      if (this.coffeBeans < neededGram) {
        throw new Error("Not enough coffee beans");
      }

      this.coffeBeans -= neededGram;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  let coffeeMaker = new CoffeeMaker(32);
  const coffee = coffeeMaker.makeCoffe(2);
  console.log(coffee);

  console.log(CoffeeMaker.makeMachine(32).makeCoffe(2));
}

// more encapsulation.
if (0) {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public is default.
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeBeans = 0;

    static makeMachine(initialBean = 0) {
      return new CoffeeMaker(initialBean);
    }
    private constructor(initialBeanGram = 0) {
      this.coffeBeans += initialBeanGram;
    }

    get possibleShot() {
      return Math.floor(this.coffeBeans / CoffeeMaker.BEANS_GRAMM_PER_SHOT);
    }
    makeCoffe(shots: number): CoffeeCup {
      const neededGram = shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      if (this.coffeBeans < neededGram) {
        throw new Error("Not enough coffee beans");
      }

      this.coffeBeans -= neededGram;
      return {
        shots: shots,
        hasMilk: false,
      };
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error("beans should be greater than 0");
      this.coffeBeans += beans;
    }
  }

  let coffeeMaker = CoffeeMaker.makeMachine(); // factory pattern like.
  // coffeeMaker.coffeBeans = 0; ERROR!

  coffeeMaker.fillCoffeeBeans(32);
  console.log(coffeeMaker.possibleShot);
  console.log(coffeeMaker.makeCoffe(2));

  console.log(coffeeMaker.possibleShot);
}

// abstraction
if (0) {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // public is default.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeBeans = 0;

    // for manager.
    static makeMachine(initialBean = 0) {
      return new CoffeeMachine(initialBean);
    }
    private constructor(initialBeanGram = 0) {
      this.coffeBeans += initialBeanGram;
    }

    clean(): void {
      console.log("cleaning....");
    }

    get possibleShot() {
      return Math.floor(this.coffeBeans / CoffeeMachine.BEANS_GRAMM_PER_SHOT);
    }

    // for worker(parttime job)
    private grindBeans(shots: number): void {
      const neededGram = shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      if (this.coffeBeans < neededGram) {
        throw new Error("Not enough coffee beans");
      }

      this.coffeBeans -= neededGram;
      console.log(`grinding ${neededGram} gram beans...`);
    }
    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log("extracting ....");
      return {
        shots: shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error("beans should be greater than 0");
      this.coffeBeans += beans;
    }
  }

  //
  class AmatureUser {
    private machine: CoffeeMaker;
    constructor(machine: CoffeeMaker) {
      this.machine = machine;
    }

    makeCoffee() {
      console.log("amature:");
      console.log(this.machine.makeCoffee(2));
    }
  }

  class ProBarista {
    private machine: CommercialCoffeeMaker;
    constructor(machine: CommercialCoffeeMaker) {
      this.machine = machine;
    }
    makeCoffee() {
      console.log("pro barista:");
      this.machine.fillCoffeeBeans(32);
      console.log(this.machine.makeCoffee(2));
      this.machine.clean();
    }
  }
  //
  let coffeeMaker = CoffeeMachine.makeMachine(32); // factory pattern like.
  let ama = new AmatureUser(coffeeMaker);
  let pro = new ProBarista(coffeeMaker);

  try {
    ama.makeCoffee();
    pro.makeCoffee();
    ama.makeCoffee();
    ama.makeCoffee();
  } catch (e) {
    console.log("------------------ Error:" + (e as Error).message);
    pro.makeCoffee();
  }
}

// inheritance
if (0) {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeBeans = 0;

    // for manager.
    static makeMachine(initialBean = 0) {
      return new CoffeeMachine(initialBean);
    }
    constructor(initialBeanGram = 0) {
      this.coffeBeans += initialBeanGram;
    }

    get possibleShot() {
      return Math.floor(this.coffeBeans / CoffeeMachine.BEANS_GRAMM_PER_SHOT);
    }

    // for worker(parttime job)
    private grindBeans(shots: number): void {
      const neededGram = shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      if (this.coffeBeans < neededGram) {
        throw new Error("Not enough coffee beans");
      }

      this.coffeBeans -= neededGram;
      console.log(`grinding ${neededGram} gram beans...`);
    }
    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log("extracting ....");
      return {
        shots: shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error("beans should be greater than 0");
      this.coffeBeans += beans;
    }
  }

  //
  // !super!
  //
  class CafeLatteMachine extends CoffeeMachine {
    constructor(milk: number, beans: number) {
      super(beans);
      console.log(`milk=${milk}`);
    }
    private steamMilk() {
      console.log("steam milk....");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }

  const machine = new CoffeeMachine(32);
  const latteMachine = new CafeLatteMachine(3, 32);

  console.log(latteMachine.makeCoffee(1));
}

// polymorphism
if (0) {
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    sugar?: number;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeBeans = 0;

    // for manager.
    static makeMachine(initialBean = 0) {
      return new CoffeeMachine(initialBean);
    }
    constructor(initialBeanGram = 0) {
      this.coffeBeans += initialBeanGram;
    }

    get possibleShot() {
      return Math.floor(this.coffeBeans / CoffeeMachine.BEANS_GRAMM_PER_SHOT);
    }

    // for worker(parttime job)
    private grindBeans(shots: number): void {
      const neededGram = shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      if (this.coffeBeans < neededGram) {
        throw new Error("Not enough coffee beans");
      }

      this.coffeBeans -= neededGram;
      console.log(`grinding ${neededGram} gram beans...`);
    }
    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log("extracting ....");
      return {
        shots: shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error("beans should be greater than 0");
      this.coffeBeans += beans;
    }
  }

  //
  // !super!
  //
  class CafeLatteMachine extends CoffeeMachine {
    constructor(milk: number, beans: number) {
      super(beans);
      console.log(`milk=${milk}`);
    }
    private steamMilk() {
      console.log("steam milk....");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }

  class SweetCoffeMachine extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      return {
        shots: shots,
        hasMilk: false,
        sugar: 1,
      };
    }
  }
  const machine = new CoffeeMachine(32);
  const latteMachine = new CafeLatteMachine(3, 32);

  console.log(latteMachine.makeCoffee(1));
}

// composition
if (1) {
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CheapMilkStreamer {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk = true;
      return { ...cup, hasMilk: milk };
    }
  }

  class CandiSugarMixer {
    private getSugar() {
      console.log("getting some sugar...");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return { ...cup, hasSugar: sugar };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string, private milker: CheapMilkStreamer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const latte = this.milker.makeMilk(coffee);

      return latte;
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private sugarMixer: CandiSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarCoffee = this.sugarMixer.addSugar(coffee);
      return sugarCoffee;
    }
  }

  const milkMixer = new CheapMilkStreamer();
  const sugarAdder = new CandiSugarMixer();

  const coffeeMachine = new CoffeeMachine(16);
  const latteMachine = new CaffeLatteMachine(16, "1", milkMixer);
  const sweetMachine = new SweetCoffeeMaker(16, sugarAdder);
}

// contract with interface.(decoupling with interface)
if (1) {
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // milk mixer
  interface MilkMixer {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  class CheapMilkStreamer implements MilkMixer {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk = true;
      return { ...cup, hasMilk: milk };
    }
  }
  class FancyMilkStreamer implements MilkMixer {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      throw new Error("Method not implemented.");
    }
  }
  class ColdMilkStreamer implements MilkMixer {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      throw new Error("Method not implemented.");
    }
  }

  // sugar mixer
  interface SugarMixer {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }
  class CandiSugarMixer implements SugarMixer {
    private getSugar() {
      console.log("getting some sugar...");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return { ...cup, hasSugar: sugar };
    }
  }

  class BlackSugarMixer implements SugarMixer {
    addSugar(cup: CoffeeCup): CoffeeCup {
      throw new Error("Method not implemented.");
    }
  }

  // machine.

  class CoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number, milkerMixer?: MilkMixer, sugarAdder?: SugarMixer): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      let coffee = this.extract(shots);
      if (milkerMixer) coffee = milkerMixer.makeMilk(coffee);
      if (sugarAdder) coffee = sugarAdder.addSugar(coffee);
      return coffee;
    }
  }

  const cheapMilkMixer = new CheapMilkStreamer();
  const candiSugarAdder = new CandiSugarMixer();

  const coffeeMachine = new CoffeeMachine(16);
  const coffee = coffeeMachine.makeCoffee(2, undefined, candiSugarAdder);
  console.log(coffee);
}
