"use strict";
var c = 'string';
var tuplesArray = [1, 2, '3']; //tuples type
var tuplesArray1 = [1, 2, '3'];
var Users;
(function (Users) {
    Users[Users["USER_1"] = 0] = "USER_1";
    Users[Users["USER_2"] = 1] = "USER_2";
    Users[Users["USER_3"] = 2] = "USER_3";
})(Users || (Users = {}));
function getError(error) {
    throw new Error(error);
}
var nullableVariable = 20; // иначе, нельзя будет присвоить null
nullableVariable = null;
