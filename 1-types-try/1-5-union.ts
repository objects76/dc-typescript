{
  const log = console.log;

  // Union types: = OR
  type Direction = "left" | "right" | "up" | "down"; // union + string literal.
  type TileSize = 2 | 4 | 8 | 16;

  function move(dir: Direction, size?: TileSize) {
    log(dir);
    log(size);
  }
  move("down", 8); // with intellisense.

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  function login(id?: string): SuccessState | FailState {
    if (id) return { response: { body: "ok" } };
    return { reason: "failed" };
  }

  function printLogin(state: SuccessState | FailState) {
    if ("response" in state) log(state.response.body);
    else log(state.reason);
  }
  printLogin(login());
}
