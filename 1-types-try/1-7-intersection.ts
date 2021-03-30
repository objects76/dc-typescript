{
  // vs union.
  // Intersection types: and(&)

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.work());
  }

  internWork({
    name: "addie",
    score: 1,
    employeeId: 12,
    work: () => void {},
  });
}
