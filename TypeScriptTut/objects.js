"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function returning object
function myFn() {
    return { name: "Anaida", age: 10 };
}
myFn();
var id1 = 192;
var id2 = "abc12";
function user(data) {
    return { name: "Harry", age: 26, email: "anaida@gmail.com" };
}
user({ name: "Harry", age: 26, email: "anaida@gmail.com" });
var person = {
    id: 1,
    name: "Anaida",
    email: "abc@gmail.com"
};
// person.id = 2 //this will give error readonly canot be modified
console.log("person.id", person.id);
