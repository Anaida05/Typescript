interface user {
    name : string
    readonly id : number
    isAdmin ? : boolean
    sayHello(name : string):string
}

let person : user = {
    name : "Harry",
    id :101,
    sayHello :(name :"harry")=>{return `Hello ${name}`}
}
console.log('person', person.sayHello("anaida"))
 
export{}