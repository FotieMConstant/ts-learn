"use strict";
let sales = 234324200;
let course = "Typescript";
let is_published = true;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let user = [1, "fotie"];
// PascalCase
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    }
};
// let employee = { id: 1};
employee.name = 'Fotie';
function kgToLbs(weight) {
    //  Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
//# sourceMappingURL=index.js.map