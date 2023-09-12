let sales: number = 234_324_200;
let course: string = "Typescript";
let is_published: boolean = true;

function render(document: any) {
    console.log(document);
}

let numbers: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let user: [number, string] = [ 1, "fotie"]

// PascalCase
enum Size {Small = 1, Medium, Large}

let mySize: Size = Size.Medium;

console.log(mySize);

function calculateTax(income: number, taxYear: number): number {
    if ( taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000, 2022)

// type alias
type Employee = {
    readonly id : number,
    name? : string,
    retire: (date: Date) => void
}

let employee : Employee = { 
    id: 1, 
    name: "",
    retire: (date: Date) =>{
        console.log(date)
    }
}

// let employee = { id: 1};
employee.name = 'Fotie'


function kgToLbs(weight: number | string): number {
    //  Narrowing
    if(typeof weight === 'number')
       return weight * 2.2;
    else
    return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

type Quality = 50 | 100;
// Literal ( exact, specific)
let quantity:  Quality;