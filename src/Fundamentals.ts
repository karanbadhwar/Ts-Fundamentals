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

let random; // this infer's type -> any type

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (const book of books) {
  if (book === "1984") {
    foundBook = book.toUpperCase();
    break;
  }
}

console.log(foundBook);

//Challenge -> 2
let discount: number | string = 20;
discount = "20";

let orderStatus: "processing" | "shipped" | "delivered" = "processing";

orderStatus = "shipped";

// orderStatus = "cancelled"; cannot do this as this is literal type value;

//Arrays and Objects

/* Arrays*/
let prices: number[] = [100, 75, 42, 67 /*hello*/];

prices.push(24);

let fruits: string[] = ["apple", "oranges"];

//empty and only [] will create an empty array which can hold nothing!
// let randomArray:[] = ['hello'];

//any type of array
let anyArray = [];

let names = ["peter", "susan"];

//Either or Or Type

let array: (string | boolean)[] = ["app", true, "orange", false];

//Challenge -> 3

let temperatures: number[] = [20, 25, 30];

let colors: string[] = ["red", "green", "yellow"];
// colors.push(true);

let mixedArray: (number | string)[] = [1, "two", 3];

/*Objects */

let car: { brand: string; year: number } = {
  brand: "toyota",
  year: 2020,
};

// car.color = 'green'; // cannot, as it is not mentioned in the Type Declaration

let book = {
  title: "book",
  cost: 20,
};
let pen = {
  title: "pen",
  cost: 10,
};
let notebook = {
  title: "notebook",
};

//? makes the property optional
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[1].title = "new pen"; // cannot re-assign as this is readonly property

//Challenge -> 4

let bike: { brand: string; year: number } = {
  brand: "Yamaha",
  year: 2010,
};

let laptop: { brand: string; year: number } = {
  brand: "Dell",
  year: 2023,
};

let product1 = { title: "shirt", price: 20 };
let product2 = { title: "shirt" };

let products: { title: string; price?: number }[] = [product1, product2];

products.push({ title: "shoes" });

//Functions Params and Function returns

//the Type after paranthesis is for return type of the function
function calculate(price: number): number | "Discount Applied" {
  const hasDiscount = true;

  if (hasDiscount) {
    return "Discount Applied";
  }
  return price * 0.9;
}

const finalPrice = calculate(200);

//Challenge -> 5
const namesArray: string[] = ["Karna", "Karan", "Badhwar", "KB", "kb"];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

const isNameThere = isNameInList("KB");
