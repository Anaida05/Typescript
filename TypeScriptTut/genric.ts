class Pair<T, U> {
  first: T;
  second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
}



let pair1 = new Pair<string, number>("Age", 25);
let pair2 = new Pair<boolean, string>(true, "Success");

console.log(pair1.first, pair1.second); 
console.log(pair2.first, pair2.second); 

class LengthChecker<T extends { length: number }> {
  item: T;

  constructor(item: T) {
    this.item = item;
  }

  getLength(): number {
    return this.item.length;
  }
}



let strChecker = new LengthChecker("Hello");
console.log(strChecker.getLength()); 

let arrChecker = new LengthChecker([1, 2, 3]);
console.log(arrChecker.getLength()); 


class ClassName<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}



function printValue(value: string | number | boolean) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("Number:", value.toFixed(2));
  } else {
    console.log("Boolean:", value);
  }
}




