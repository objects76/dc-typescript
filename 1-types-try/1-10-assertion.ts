{
  // Type assertion is NG.
  // But, when use with vanilla JS, specify type.

  function jsFunc(): any {
    return 2;
    return "hello";
  }

  const result = jsFunc();
  // I'm sure the result is string type.
  console.log((result as String).length);
  console.log((<string>result).length);

  //
  function findNumber(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumber();
  numbers!.push(3);

  //
  const button = document.querySelector("class");
  console.log(button!.scrollHeight);
}
