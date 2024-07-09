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
/*
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

*/
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

/*
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

*/

//----------------------------------------------------------------
//Type Assertion, Type Unknown and Type Never

/*
let someValue: any = "This is a string";

let strLength: number = (someValue as String).length;

type Bird = {
  name: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

// Parse the JSON string into an object
let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let birdy = birdObject as Bird;

//
//Type Unknown

let unknownValue: unknown;

unknownValue = "Hello World";
unknownValue = [1, 2, 3, 4, 5];

if (typeof unknownValue === "number") {
  // TypeScript knows that unknownValue is a string in this block
  console.log(unknownValue.toFixed(2)); // OK
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("There was an error");
  } else {
    throw "String Error";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

//
//Type Never

// let neverValue: never = 0; // Cannot assign any value to type Never

type Theme = "light" | "dark";

function checkTheme(theme: Theme): void {
  if (theme == "light") {
    console.log("Light Theme");
    return;
  }
  if (theme === "dark") {
    console.log("Dark Theme");
    return;
  }
}

enum Color {
  red,
  blue,
  green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.red:
      return "red";

    case Color.blue:
      return "blue";

    case Color.green:
      return "green";
    default:
      // At Build Time
      let unexpectedColor: never = color; // If Color is empty and all types checked it will be NEVER
      //If showing error that means that the color has not been checked

      //At Runtime
      throw new Error("Unexpected color: " + color);
  }
}

console.log(getColorName(Color.red));
console.log(getColorName(Color.blue));
console.log(getColorName(Color.green));

*/

//----------------------------------------------------------------
//ES6 Modules

//TS does not treat any indivual file as a module instead it sums up everything globally.
//As Every thing is in the global scope, it limits the use of the variables with same name in different modules.

// 1st Approach -> Add Import or Export to make the current file as a module.
// 2nd Appraoch -> Add proeprty  of Module Detection to the TSconfig file and set it to "Force"

/*
import newStudent, { sayHello, person, type Student } from "./Actions";

sayHello("TypeScript");

console.log(newStudent);

console.log(person);

const anotherStudent: Student = {
  name: "Bok",
  age: 18,
};

*/

//----------------------------------------------------------------
//Type Gaurding

//First Type Gaurd -> Typeof
/*
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

function checkValue(val: ValueType) {
  if (typeof val === "string") {
    return val.toLowerCase();
  } else if (typeof val === "number") {
    console.log(val.toFixed(2));
    return;
  } else {
    console.log(`Boolean: ${val}`);
    return;
  }
}

console.log(checkValue("Hello"));
checkValue(123);
checkValue(true);

//Second Type Gaurd -> Equality Narrowing

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === "cat") {
//     animal.meow();
//   } else {
//     animal.bark();
//   }
// }

//Thrid Type Gaurd -> check for property

function makeSound(animal: Animal) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

//Fourth Type Gaurd -> Truthy & Falsey Gaurd
function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log("No String provided");
  }
}

printLength("Hello");
printLength("");

//Fifth type Gaurd -> instanceof

// try {
//   throw "Some Error";
//   throw new Error("This is an Error of Error type");
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log("Unknown Error");
//   }
// }

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

//Type Predicate Function
type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

// const person = randomPerson();

const person: Person = {
  name: "Anna",
  login: function () {
    console.log("Stuyding...");
  },
};

//Type Predicate Function is just to narrow down and to help TS to find out the type.
function isStudent(person: Person): person is Student {
  // return "study" in person;
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login();
}
*/

//----------------------------------------------------------------
//Discriminated Unions and Exhaustive check using the NEVER type
//each identified by a unique literal property (the discriminator) -> Discriminated Unions

/*
type IncrementAction = {
  type: "increment"; // This creates a discriminator between the TWO same types
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement"; // This creates a discriminator between the TWO same types
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return (state += action.amount);
    case "decrement":
      return (state -= action.amount);

    default:
      const unExpectedAction: never = action;
      throw new Error(`Unexpected action ${action}`);
  }
}

const newState = reducer(15, {
  type: "increment",
  user: " John Doe",
  amount: 5,
  timestamp: 123456,
});

*/

//----------------------------------------------------------------
//Generics
// let array1: string[] = ["Apple", "Banana", "Mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];
//                   | |
//                    V

// let array1: Array<string> = ["Apple", "Banana", "Mango"];
// let arrays2: Array<number> = [1, 2, 3];
// let array3: Array<boolean> = [true, false, true];

/*
function genericFunc<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunc<string>("someStringValue");
const someNumValue = genericFunc<number>(7);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "16",
  getValue() {
    return this.value;
  },
};

//Trying Generics with Async Functions
async function someFunc(): Promise<number> {
  return 45667;
}

 const result = someFunc();

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(3, "hello");
let arrayNumbers = createArray<number>(4, 100);
*/

//Generics with multiple Variables

/*
function pair<T, U>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2];
}

let result = pair<number, string>(10, "Hello world");

//Type Constraint on the Generic Type T!!
function processValue<T extends string | number>(val: T): T {
  console.log(val);
  return val;
}

processValue("Hello");
processValue(67);

// processValue(true);

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "ford",
  model: "mustang",
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "peter",
  age: 20,
};

function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
  // console.log(input.price); // as there is not guranteed to have price on T
}

printName(product);
printName(student);

//Default Type fo generics
interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4, 5],
};

const randomStudd: StoreData = {
  data: ["random", 2],
};

*/

//----------------------------------------------------------------
//Fetch Data and DEclaration Files

//Using Zod to validate data at runtime
/*
import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  someValue: z.string(),
});

type DataTour = z.infer<typeof tourSchema>;

// type DataTour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
//   // someValue: boolean; // If add non-existing value
// };

async function fetchData(url: string): Promise<DataTour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    const rawData: DataTour[] = await response.json();

    const result = tourSchema.array().safeParse(rawData);

    if (!result.success) {
      throw new Error("Invalid data:" + result.error);
    }
    console.log(result);

    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : "There was an error!!";
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);

tours.map((tour) => {
  console.log(tour.someValue); // As someValue does not exist on the data
});
*/

//
//Declaration Files
// import { type RandomType } from "./types";

//----------------------------------------------------------------
//Classes

class Book {
  // title: string; // One way of declaring properties
  readonly author: string;
  private checkedOut = false;

  //Look for title second way of declaring properties
  constructor(public title: string, author: string, private random = "ads") {
    this.title = title;
    this.author = author;
  }

  checkOut() {
    this.checkedOut = this.toggleCheckOutStatus();
  }

  public isCheckedOut(): boolean {
    return this.checkedOut;
  }

  private toggleCheckOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork = new Book("deep work ", "cal newport");

deepWork.checkOut();
// console.log(deepWork.isCheckedOut()); // True

class BookTwo {
  private checkedOut = false;
  constructor(
    public title: string,
    readonly author: string,
    private price: number
  ) {}

  // public getPrice(): number {
  //   return this.price;
  // }

  //Getter
  get info() {
    return `${this.title} by ${this.author}`;
  }

  //Setter
  set checkOut(checkOut: boolean) {
    this.checkedOut = checkOut;
  }

  //Getter
  get CheckOut() {
    return this.checkedOut;
  }
}

const habit = new BookTwo("Habits", "Karan", 10);

// habit.title = 4;

//Implementing Interface by the Class
interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`Hello ${this.name}`);
  }
}
