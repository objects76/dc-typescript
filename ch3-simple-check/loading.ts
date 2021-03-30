{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state: ResourceLoadState): void {
    switch (state.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log("😃 loaded");
        console.log("\tbody: ", state.response.body);
        break;
      case "fail":
        console.log("😱 no network");
        console.log("\treason: ", state.reason);
        break;
      default:
        throw new Error("invalid state: ");
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
