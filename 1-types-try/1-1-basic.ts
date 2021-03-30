{
  // let in es6.
  // js type:
  // 1.primitive type: number,string,boolean, bigint, symbol, null, undefined
  // 2. object type: function, array, ...

  // ts type: primitive
  const num1: number = 1; // 1.0f
  const str1: string = "1";
  const bool1: boolean = true;

  // undefined: existed or non-
  let v1: undefined; // useless.
  let age: number | undefined = undefined; // optional type.
  //   function find(): int | undefined {
  //     return undefined;
  //   }
  let v2: null; // useless
  let age2: number | null = null;

  // unknown: to work with old js code.
  let notSure: unknown = 0; // var?
  notSure = "hello...";
  notSure = true;

  // any
  let anything1: any = 0; // var?
  anything1 = "string...";

  // void
  function print(): void {
    console.log("no return");
    return;
  }

  // never
  function assertlike(): never {
    while (true) {}
    throw new Error("assertion failed");
  }

  // object: not primitive,
  let obj: object; // var?

  function acceptSomeObj(obj: object) {}
  acceptSomeObj({});
  acceptSomeObj([]);
}
