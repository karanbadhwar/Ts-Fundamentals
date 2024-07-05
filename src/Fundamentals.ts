console.log("TypeScript Fundamentals Refresher");

//Type Annotations and Type Inference

/*
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
*/

//----------------------------------------------------------------
//Union and Any Type

/*
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
*/

//--------------------------------------------------------

//Arrays and Objects

// Arrays
/*
let prices: number[] = [100, 75, 42, 67 hello];

prices.push(24);

let fruits: string[] = ["apple", "oranges"];

//empty and only [] will create an empty array which can hold nothing!
// let randomArray:[] = ['hello'];

//any type of array
let anyArray = [];

let names = ["peter", "susan"];
*/

//Either or Or Type

/*
let array: (string | boolean)[] = ["app", true, "orange", false];

//Challenge -> 3

let temperatures: number[] = [20, 25, 30];

let colors: string[] = ["red", "green", "yellow"];
// colors.push(true);

let mixedArray: (number | string)[] = [1, "two", 3];

//Objects 

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
*/

//----------------------------------------------------------------

//Functions Params and Function returns

/*
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
*/

//-----------------------------------------------------------

//Optional, Default and Rest Parameters

/* 
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

console.log(priceAfterDiscount);

function calculateScore(
  intialScore: number,
  penaltyPoints: number = 0 //Default penalty Points
): number {
  return intialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);*/

//----------------------------------------------------------

//Rest Parameters
/*
const sum = (message: string, ...numbers: number[]): string => {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((prev, curr) => prev + curr, 0);

  return `${message}${total}`;
};

let resultSum = sum("The Total is: ", 10, 20, 30, 40);

console.log(resultSum);

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Helllo");

//Challenge -> 6

function processInput(input: string | number): void {
  if (typeof input === "number") {
    // Type Gaurd **typeof** used to make sure input is a number
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(10);
processInput("hello world");
*/

//----------------------------------------------------------------

//Objects as Parameters and Excess Property Checks

/*
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return {
    id: id,
    isActive: id % 2 == 0,
  };
}

const first = createEmployee({ id: 7 });
const second = createEmployee({ id: 10 });

console.log(first);
console.log(second);

//Alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcoem to the Course ${student.name.toUpperCase()}`);
  // student.email // cannot access it as it was not mentioned in the type annotation
}

const newStudent = {
  id: 7,
  name: "Stupid Student",
  email: "sst@gmail.com",
};

createStudent(newStudent);

//Ts -> when passed objetcs properties in line TS complains but if we pass Obj variable it is fine with that..
// createStudent({ id: 1, name: "Bobby", email: "b@gmail.com" });

//Challenge -> 7

const processData = (
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number => {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
};

console.log(processData(10));
console.log(processData("Hello"));
console.log(processData("Hello", { reverse: true }));
*/

//----------------------------------------------------------------

//Type Alias and Intersection Type

//Type Alias is just a new name or a shorthand for the existing type

/*
type UserName = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: UserName = {
  id: 1,
  name: "john",
  isActive: true,
};

const susan: UserName = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: UserName): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type Theme = "Dark" | "Light";

let theme: Theme;
theme = "Dark";
theme = "Light";

function setTheme(t: Theme): void {
  theme = t;
}

//Challenge -> 8

type Employee = {
  id: number;
  name: string;
  dept: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

const alice: Employee = {
  id: 1,
  name: "alice",
  dept: "Marketing",
};

const peter: Employee = {
  id: 1,
  name: "peter",
  dept: "Saless",
};

const Bob: Manager = {
  id: 1,
  name: "Bob",
  employees: [alice, peter],
};

type Staff = Employee | Manager;

function printStaffDetails(member: Staff): void {
  if ("employees" in member) {
    console.log(
      `${member.name} is a manager and managing a team of ${member.employees.length}`
    );
  } else {
    console.log(
      `${member.name} is an employee in the ${member.dept} department!`
    );
  }
}

printStaffDetails(alice);
printStaffDetails(Bob);

//Intersection Type

type book = {
  id: number;
  name: string;
  price: number;
};

//& -> Intersection Type alost same as Inheritance
type DiscountBook = book & { discount: number };

const book1: book = {
  id: 1,
  name: "How to cook a dragon",
  price: 15,
};

const book2: book = {
  id: 2,
  name: "TheSecret life of unicorn",
  price: 18,
};

const discountedBook: DiscountBook = {
  id: 3,
  name: "Snake in the eagle shadow",
  price: 20,
  discount: 0.15,
};

const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = {
  [propName]: 5,
};

*/

//----------------------------------------------------------------
//Interface Fundamentals

interface IBook {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //Method
  //Ways to declare methods in Interface:
  printAuthor(): void;
  printTitle(message: string): String;
  printSomething: (someValue: number) => number;
}

const deepWork: IBook = {
  isbn: 123,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "self-help",

  printAuthor() {
    console.log(this.author);
  },

  printTitle(val: string): string {
    return `${this.title} ${val}`;
  },

  //First Option
  printSomething(value: number): number {
    return value * 2;
  },

  //Second Option
  // printSomething: (value: number): number => {
  //   // console.log(this.title); // Arrows function's this points to the Globalness
  //   console.log(deepWork.title); // Works

  //   return value * 2;
  // },

  //Third Option
  // printSomething(value) {
  //   return value * 2;
  // },
};

// const result = deepWork.printTitle("is awesome book");
// console.log(result);

// class Books {
//   author: string;
//   constructor(auth: string) {
//     this.author = auth;
//   }
// }

//Challenge -> 9

// interface IComputer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;

//   //Methods
//   upgradeRam(increaseRam: number): number;
// }

// const lappy: IComputer = {
//   id: 77,
//   brand: "Dell",
//   ram: 8,

//   upgradeRam(newRam: number): number {
//     this.ram += newRam;
//     return this.ram;
//   },
// };

// lappy.storage = 512;

// console.log(lappy);

// console.log(lappy.upgradeRam(32));

//Interface Advanced

/*
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

//This is called Interface Merging or Re-open where we declare an Interface with same name,
// to create more properties to it.
interface Person {
  age: number;
}

const person: Person = {
  name: "John",
  age: 29,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

// console.log(person.getDetails());

interface Employee extends Person {
  employeeId: number;
}

//Inheritance of Interface

const employee: Employee = {
  name: "Jane",
  age: 22,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, EmployeeId: ${this.employeeId}`;
  },
  employeeId: 70,
};

console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: "Bob",
  age: 39,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  dogName: "Jacky",
  getDogDetails() {
    return `${this.dogName} is Pammerian type of dog, owned by ${this.name}}`;
  },

  managePeople() {
    console.log("Managing people...");
  },
};

manager.managePeople();

//Challenge -> 10

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: "Karan",
    };
  } else if (random < 0.66) {
    return {
      name: "KB",
      dogName: "rex",
    };
  } else {
    return {
      name: "Badhwar",
      managePeople() {
        console.log("Managing people...");
      },
      delegateTasks() {
        console.log("Delgating tasks...");
      },
    };
  }
}

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const Emp: Person | DogOwner | Manager = getEmployee();

// console.log(Emp);

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return "managePeople" in obj;
}

if (isManager(Emp)) {
  Emp.delegateTasks();
}

*/

//----------------------------------------------------------------
//Tuples and Enums

//Tuples -> are arrays with fixed length and ordered fixed Type
//If I add one more item to the array it will error, as Type is fixed and length as well
//This is Tuple ->  [string, number]

let person: [string, number] = ["Karan", 29];

let date: readonly [number, number, number] = [12, 25, 1994];

function getPerson(): [string, number] {
  return ["Karan", 29];
}

let susan: [string, number?] = ["Susan"];

//
//Enums
enum ServerResponseStatus {
  Success = 200,
  Error = 500,
  Ok = "OK",
}

// console.log(ServerResponseStatus);

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["data1 Item", "data2 Item"],
  };
}

const response: ServerResponse = getServerResponse();

console.log(response);

//Challenge -> 11
enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const user: User = {
  id: 1,
  name: "John Doe",
  role: UserRole.Admin,
  contact: ["john.doe@example.com", "123-456-7890"],
};
