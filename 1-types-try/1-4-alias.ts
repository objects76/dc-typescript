{
  const log = console.log;

  type Text = string;
  const name: Text = "name1";

  type Student = {
    name: string;
    age: number;
  };

  const student1: Student = { name: "name1", age: 23 };

  // Literal types
  type NAME = "name";
  type BUF_SIZE = 1024;

  const json: NAME = "name"; // enum string type?
}
