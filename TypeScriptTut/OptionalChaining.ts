type Customer = {
  birthday: Date;
};

function getCustomers(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomers(5);
console.log(customer?.birthday);

//public
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    return `Hello, I am ${this.name}`;
  }
}

const p = new Person("Anaida");
console.log(p.name);
console.log(p.greet());

//private
class Person1 {
  private ssn: string;

  constructor(ssn: string) {
    this.ssn = ssn;
  }

  private getSSN() {
    return this.ssn;
  }

  showInfo() {
    return `SSN: ${this.ssn}`;
  }
}

const p1 = new Person1("123-45-6789");
console.log(p1.showInfo());
console.log(p1.ssn);

//unknown
let value: unknown;

value = 10;
value = "hello";
value = true;

if (typeof value === "string") {
  let result: string = value;
  console.log(result.toUpperCase());
}



function logValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); 
  } else {
    console.log("Not a string");
  }
}

logValue("typescript"); 
logValue(123);          

function getRandomValue(): unknown {
  return Math.random() > 0.5 ? "hello" : 42;
}

let result = getRandomValue();


if (typeof result === "string") {
  console.log(result.toUpperCase());
}

export {};
