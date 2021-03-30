"use strict";
{
    function move(direction) {
        console.log(direction);
    }
    move('down');
    var tile = 16;
    function login() {
        return {
            response: {
                body: 'logged in!',
            },
        };
    }
    // printLoginState(state: LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state) {
        if ('response' in state) {
            console.log("\uD83C\uDF89 " + state.response.body);
        }
        else {
            console.log("\uD83D\uDE2D " + state.reason);
        }
    }
}
