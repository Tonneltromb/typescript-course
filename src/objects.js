"use strict";
var user1 = {
    name: "Yuri",
    age: 25,
    getName: function () {
        return this.name;
    }
};
console.log(user1.getName());
