//functions
const greet = (val : string):string=>{
    return "Hello," + val
}

greet("anaida")

//arrays
const nums : number[] = [1,2,4]
const names : string[] = ["anaida","jim"]

//objects
const user :{name : string,age:number} = {
    name : "Anaida",
    age : 1
}

//tupe alias
type Animal = {
  species: string;
  legs: number;
};

let dog: Animal = {
  species: "Dog",
  legs: 4
};

//interface
interface Person {
  name: string;
  age: number;
}

let users: Person = {
  name: "John",
  age: 30
};

