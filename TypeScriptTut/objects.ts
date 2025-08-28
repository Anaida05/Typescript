//function returning object
function myFn(): { name: string; age: number } {
  return { name: "Anaida", age: 10 };
}
myFn();

export {};

//type alias

//basic

type userID = string | number;
let id1: userID = 192;
let id2: userID = "abc12";

//for object
type myObj = {
  name: string;
  age: number;
  email: string;
  isAdmin?: boolean; //optional property
};

function user(data: myObj): myObj {
  return { name: "Harry", age: 26, email: "anaida@gmail.com" };
}
user({ name: "Harry", age: 26, email: "anaida@gmail.com" });


//optional
// type user = {
//     id : number
//     name : string
//     email ? : string
// }

// let u1: user ={
//     name:"Anaida",
//     id : 101
// }
// console.log("u1",u1.email);//will give undefined as it doesn't exist


//read-only
type user = {
    readonly id : number
    name : string
    email : string
}

let person : user = {
    id :1,
    name : "Anaida",
    email : "abc@gmail.com"
}

// person.id = 2 //this will give error readonly canot be modified
console.log("person.id",person.id);

