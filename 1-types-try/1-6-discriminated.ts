{
  const log = console.log;

  //
  // 생각해보면, ts는 transformer이고, 어떻게 type이 정이 될지는 코드로 결정해야 한다.
  // => type정보를 줘야하고, discriminated는 c/c++의 union의 type을 주는 방식으로 결정한것으로 보인다.
  //

  type SuccessState = {
    result: "success"; // union type.
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "failed";
    reason: string;
  };

  function login(id?: string): SuccessState | FailState {
    if (id) return { result: "success", response: { body: "ok" } };
    return { result: "failed", reason: "failed" };
  }

  function printLogin(state: SuccessState | FailState) {
    //if ("response" in state) log(state.response.body);
    if (state.result == "success") log(state.response.body);
    else log(state.reason);
  }
  printLogin(login());
}
