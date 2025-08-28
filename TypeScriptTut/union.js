// function getData(id: number | string) {
//   if (typeof id === "string") {
//     id.toLowerCase();
//     console.log("id is : ".concat(id));
//   } else {
//     console.log(`id is : ${id}`);
//   }
// }
// getData("ABC");
// // getData(33)
// export {};
//variable
// let value: string | number;
// value = "hello";
// // value = 22;
// console.log('value', value)
//union with type alias
// type ID = string | number
// let person:ID
// person= "102"
//union with array
var arr = [1, 2, 4, "a", "b"]; //can pass multiple datatypes 
// arr.push(true) //will accept only num n string
arr.push(10);
console.log('arr', arr);
