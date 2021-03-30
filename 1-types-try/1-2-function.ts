{
  const log = console.log;
  // ts style function
  function add(n1: number, n2: number): number {
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
  function printName(firstName: string, lastName?: string): void {
    console.log(firstName, lastName);
  }
  printName("jj", "kim");
  printName("jj");
  printName("jj", undefined);

  // default parameter
  function printMessage(message: string = "default msg") {
    log(message);
  }
  printMessage();

  // rest parameter
  function addNums(...nums: number[]): number {
    return nums.reduce((a, b) => a + b);
    return 0;
  }
  log(addNums(1, 2, 3, 4));
}
