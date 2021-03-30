if (0 && "interface") {
  // conditional types,
  // map types,
  // utility types,

  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    z: number;
    x: number;
    y: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number }; // using intersection

  // 😆 only interfaces can be merged.
  interface PositionInterface {
    z: number; // added original PositionInterface.
  }

  // type PositionType {
  // }

  // 😆 Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";
}

if ("") {
  // interface: contract.
  // types: struct for data.
}

if ("utility types") {
  // meaning?
  if ("index type") {
    const obj = {
      name: "ellie",
    };
    obj.name; // ellie
    obj["name"]; // ellie

    type Animal = {
      name: string;
      age: number;
      gender: "male" | "female";
    };

    type Name = Animal["name"]; // string
    const text: Name = "hello";

    type Gender = Animal["gender"]; //'male' | 'female'

    type Keys = keyof Animal; // 'name' | 'age' | 'gender'
    const key: Keys = "gender";

    type Person = {
      name: string;
      gender: Animal["gender"]; // == type Gender
    };
    const person: Person = {
      name: "ellie",
      gender: "male",
    };
  }

  if ("map type") {
    // type filter concept.
    type Video = {
      title: string;
      author: string;
    };
    // [1, 2].map(item => item * item); // [1, 4]

    type Optional<T> = {
      [P in keyof T]?: T[P]; // for...in
    };

    type ReadOnly<T> = { readonly [P in keyof T]: T[P] };
    type VideoOptional = Optional<Video>;

    type Animal = {
      name: string;
      age: number;
    };
    const animal: Optional<Animal> = {
      name: "dog",
    };
    animal.name = "ellie";

    const video: ReadOnly<Video> = {
      title: "hi",
      author: "ellie",
    };

    // type VideoOptional = {
    //   title?: string;
    //   author?: string;
    // };

    // type VideoReadOnly = {
    //   readonly title: string;
    //   readonly author: string;
    // };

    type Nullable<T> = { [P in keyof T]: T[P] | null }; // ?= Optional<T>
    const obj2: Nullable<Video> = {
      title: "hi",
      author: null,
    };

    type Proxy<T> = {
      get(): T;
      set(value: T): void;
    };

    type Proxify<T> = {
      [P in keyof T]: Proxy<T[P]>;
    };
  }

  if ("condition type") {
    type Check<T> = T extends string ? boolean : number;
    type Type = Check<string>; // boolean

    type TypeName<T> = T extends string
      ? "string"
      : T extends number
      ? "number"
      : T extends boolean
      ? "boolean"
      : T extends undefined
      ? "undefined"
      : T extends Function
      ? "function"
      : "object";

    type T0 = TypeName<string>;
    ("string");
    type T1 = TypeName<"a">;
    ("string");
    type T2 = TypeName<() => void>;
    ("function");
  }

  if ("usage: read only") {
    //type ReadOnly<T> = { readonly [K in keyof T]: T[K] }; builtin.

    type ToDo = {
      title: string;
      description: string;
    };

    // make const.
    function display(todo: Readonly<ToDo>) {
      //todo.title = "jaja";
    }
  }
  if ("usage: partial") {
    type ToDo = {
      title: string;
      description: string;
      label: string;
      priority: "high" | "low";
    };

    function updateTodo(todo: Readonly<ToDo>, fieldsToUpdate: Readonly<Partial<ToDo>>): ToDo {
      return { ...todo, ...fieldsToUpdate };
    }
    const todo: ToDo = {
      title: "learn TypeScript",
      description: "study hard",
      label: "study",
      priority: "high",
    };
    const updated = updateTodo(todo, { priority: "low" });
    console.log(updated);
  }

  if ("usage: pick,omit") {
    type Video = {
      id: string;
      title: string;
      url: string;
      data: string;
    };

    type VideoMetadata = Pick<Video, "id" | "title">; // subtype.

    function getVideo(id: string): Video {
      return {
        id,
        title: "video",
        url: "https://..",
        data: "byte-data..",
      };
    }
    function getVideoMetadata(id: string): VideoMetadata {
      return {
        id: id,
        title: "title",
      };
    }

    const video = getVideo("id1");
    console.log(getVideoMetadata("id1"));

    // omit
    type VideoMetadata2 = Omit<Video, "url" | "data">;

    function getVideo2(id: string): Video {
      return {
        id,
        title: "video",
        url: "https://..",
        data: "byte-data..",
      };
    }
    function getVideoMetadata2(id: string): VideoMetadata2 {
      return {
        id: id,
        title: "title",
      };
    }
  }

  if ("usage: record") {
    type PageInfo = {
      title: string;
    };
    type Page = "home" | "about" | "contact";

    const nav: Record<Page, PageInfo> = {
      home: { title: "Home" },
      about: { title: "About" },
      contact: { title: "Contact" },
    };

    // Record<Page, PageInfo>
    // -> {
    // 		home: PageInfo,
    // 		about: PageInfo,
    // 		contract: PageInfo,
    // 	}
    // -> predefined data map?
    type Product = "cat" | "dog";
    type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
  }
}
