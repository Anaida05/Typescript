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



function double(x : number) {
  return x * 2;
}

double(4)


function sayHello(name : string) {
  return "Hi, " + name + "!";
}

sayHello("Anaida")


function isEven(n : number) {
  return n % 2 === 0;
}

isEven(6)


function greeting(age: number): string {
  // return "You are " + age.toUpperCase() + " years old"; 
  return ""
}

greeting(10)


// function add(x: string, y: string): number {
//   return x + y;
// }

// add("1","29")
