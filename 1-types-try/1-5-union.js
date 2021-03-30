"use strict";
{
    var log_1 = console.log;
    function move(dir, size) {
        log_1(dir);
        log_1(size);
    }
    move("down", 8); // with intellisense.
    function login(id) {
        if (id)
            return { response: { body: "ok" } };
        return { reason: "failed" };
    }
    function printLogin(state) {
        if ("response" in state)
            log_1(state.response.body);
        else
            log_1(state.reason);
    }
    printLogin(login());
}
