{
  // Type inference

  let text = "hello";
  //   text = 1; ERROR

  function print(msg = "hello") {
    console.log(msg);
  }

  // return type inference: number
  function add(n1: number, n2: number) {
    return n1 + n2;
  }

  // complicated type or function: specify the type.
}
