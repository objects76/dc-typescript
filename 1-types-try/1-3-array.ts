{
  const log = console.log;

  // array
  const scores1: number[] = [1, 2, 3]; // prefered.
  const scores2: Array<number> = [1, 2, 3];

  function printArr(a1: readonly number[]) {}

  // tuple, not array: NG(Not readable) -> just object/class
  // but usefull case : with destructing... in framework?
  let student: [string, number] = ["name", 21];
  log(student[0], student[1]);
}
