type Customer = {
    birthday : Date
}

function getCustomers(id : number) : Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomers(5)
    console.log(customer?.birthday);


    export {}