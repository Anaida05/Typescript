type Person = {
    name : string,
    age : number
}

type Employee = {
    empId : number,
    department : string
}

type EmployeeProfile = Person & Employee

let newEmployee : EmployeeProfile = {
    name : "Anaida",
    age : 26,
    empId : 101,
    department : "IT"
}

console.log('newEmployee', newEmployee)

export{}