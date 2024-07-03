console.log("TypeScript Fundamentals Refresher");

//Type Annotations and Type Inference

let awesomeName: string = "shakeAndBake";

let amount: number = 20;
amount = 100 - 91;

// amount= 'pants'; // Cannot do this

let isAwesome: boolean = true;

isAwesome = !isAwesome;

console.log(isAwesome);

let infered = true; // Type Infered, autromatically recognizes that it's a boolean, Now it can only hold boolean values

//Challange -> 1
let name: string = "Karan";
name = name.toUpperCase();

let age: number = 29;
age = age - 1;

let isRich: boolean = false;
isRich = age == 30 ? true : false;

//Looking on Error Messages
// name = 456;
// age = "29";

//----------------------------------------------------------------
//Union and Any Type
let tax: number | string = 10;

tax = "Ten";

//Literal Value Type

let requestStatus: "Pending" | "Success" | "Rejected" = "Success";

//Any Type -> can hold any Type of value
let notSure: any = 4;
notSure = false;

let random; // this infer's type -> any
