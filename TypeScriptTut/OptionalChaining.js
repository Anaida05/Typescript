"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCustomers(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomers(5);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
