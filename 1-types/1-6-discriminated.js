"use strict";
{
    function login() {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            },
        };
    }
    // printLoginState(state: LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state) {
        if (state.result === 'success') {
            console.log("\uD83C\uDF89 " + state.response.body);
        }
        else {
            console.log("\uD83D\uDE2D " + state.reason);
        }
    }
}
