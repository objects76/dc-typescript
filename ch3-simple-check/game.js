"use strict";
{
    var position_1 = { x: 0, y: 0 };
    function move(cmd) {
        switch (cmd) {
            case "up":
                position_1.y++;
                break;
            case "down":
                position_1.y--;
                break;
            case "left":
                position_1.x--;
                break;
            case "right":
                position_1.x++;
                break;
            default:
                throw new Error("invalid command:" + cmd);
        }
    }
    console.log(position_1); // { x: 0, y: 0}
    move("up");
    console.log(position_1); // { x: 0, y: 1}
    move("down");
    console.log(position_1); // { x: 0, y: 0}
    move("left");
    console.log(position_1); // { x: -1, y: 0}
    move("right");
    console.log(position_1); // { x: 0, y: 0}
}
