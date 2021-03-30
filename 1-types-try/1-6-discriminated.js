"use strict";
{
    var log_1 = console.log;
    function login(id) {
        if (id)
            return { result: "success", response: { body: "ok" } };
        return { result: "failed", reason: "failed" };
    }
    function printLogin(state) {
        //if ("response" in state) log(state.response.body);
        if (state.result == "success")
            log_1(state.response.body);
        else
            log_1(state.reason);
    }
    printLogin(login());
}
