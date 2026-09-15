# 🚀 TypeScript — Complete Learning & Reference Guide

> A structured **beginner → intermediate → advanced** TypeScript handbook with explanations, examples, best practices, and a learning roadmap.

**Based on:** GeeksforGeeks TypeScript topics + practical TypeScript development
**Prerequisite:** JavaScript fundamentals
**Goal:** Become comfortable using TypeScript with React, Next.js, Node.js and NestJS.

---

# 📚 Table of Contents

1. [What is TypeScript?](#-1-what-is-typescript)
2. [TypeScript vs JavaScript](#-2-typescript-vs-javascript)
3. [Installation & Setup](#-3-installation--setup)
4. [Hello World](#-4-hello-world)
5. [Variables](#-5-variables)
6. [Data Types](#-6-data-types)
7. [Type Annotations](#-7-type-annotations)
8. [Type Inference](#-8-type-inference)
9. [Arrays](#-9-arrays)
10. [Tuples](#-10-tuples)
11. [Enums](#-11-enums)
12. [Literal Types](#-12-literal-types)
13. [Union Types](#-13-union-types)
14. [Intersection Types](#-14-intersection-types)
15. [Type Aliases](#-15-type-aliases)
16. [Functions](#-16-functions)
17. [Optional & Default Parameters](#-17-optional--default-parameters)
18. [Rest Parameters](#-18-rest-parameters)
19. [Arrow Functions](#-19-arrow-functions)
20. [Function Overloading](#-20-function-overloading)
21. [Objects](#-21-objects)
22. [Interfaces](#-22-interfaces)
23. [Type vs Interface](#-23-type-vs-interface)
24. [Classes](#-24-classes)
25. [Access Modifiers](#-25-access-modifiers)
26. [Readonly](#-26-readonly)
27. [Getters & Setters](#-27-getters--setters)
28. [Inheritance](#-28-inheritance)
29. [Abstract Classes](#-29-abstract-classes)
30. [Implementing Interfaces](#-30-implementing-interfaces)
31. [Generics](#-31-generics)
32. [Generic Functions](#-32-generic-functions)
33. [Generic Classes](#-33-generic-classes)
34. [Generic Constraints](#-34-generic-constraints)
35. [Built-in Generic Types](#-35-built-in-generic-types)
36. [any](#-36-any)
37. [unknown](#-37-unknown)
38. [never](#-38-never)
39. [void](#-39-void)
40. [Type Assertions](#-40-type-assertions)
41. [Type Guards](#-41-type-guards)
42. [Narrowing](#-42-narrowing)
43. [Conditional Types](#-43-conditional-types)
44. [Mapped Types](#-44-mapped-types)
45. [Template Literal Types](#-45-template-literal-types)
46. [Recursive Types](#-46-recursive-types)
47. [Utility Types](#-47-utility-types)
48. [Modules](#-48-modules)
49. [Named & Default Exports](#-49-named--default-exports)
50. [Namespaces](#-50-namespaces)
51. [Decorators](#-51-decorators)
52. [tsconfig.json](#-52-tsconfigjson)
53. [Strict Mode](#-53-strict-mode)
54. [TypeScript with JavaScript](#-54-typescript-with-javascript)
55. [TypeScript with React](#-55-typescript-with-react)
56. [TypeScript with Next.js](#-56-typescript-with-nextjs)
57. [TypeScript with Node.js](#-57-typescript-with-nodejs)
58. [TypeScript with NestJS](#-58-typescript-with-nestjs)
59. [Testing](#-59-testing)
60. [Performance](#-60-performance)
61. [Best Practices](#-61-best-practices)
62. [Projects](#-62-projects)
63. [Interview Preparation](#-63-interview-preparation)
64. [Learning Roadmap](#-64-learning-roadmap)

---

# 🟦 1. What is TypeScript?

TypeScript is a **superset of JavaScript** developed by Microsoft.

It adds a powerful type system on top of JavaScript.

```ts
let name: string = "Love";
let age: number = 25;
let isDeveloper: boolean = true;
```

JavaScript:

```js
let age = "25";
```

TypeScript:

```ts
let age: number = 25;

// Error
age = "25";
```

The TypeScript compiler catches the mistake before the program runs.

### Main benefits

* Static type checking
* Better autocomplete
* Better refactoring
* Easier maintenance
* Better scalability
* Better developer experience
* Works with JavaScript
* Excellent support for React, Next.js, Node.js and NestJS

TypeScript is ultimately transformed into JavaScript before execution.

---

# 🟨 2. TypeScript vs JavaScript

| Feature            | JavaScript           | TypeScript              |
| ------------------ | -------------------- | ----------------------- |
| Typing             | Dynamic              | Static/optional         |
| Compilation        | Runtime              | Compile/type-check step |
| Interfaces         | ❌                    | ✅                       |
| Generics           | ❌ native TS generics | ✅                       |
| Type aliases       | ❌                    | ✅                       |
| Better IDE support | Good                 | Excellent               |
| Large projects     | Harder to maintain   | Easier                  |
| Learning curve     | Lower                | Higher                  |

### Simple idea

```text
JavaScript
    ↓
Runtime errors

TypeScript
    ↓
Type checking
    ↓
JavaScript
    ↓
Runtime
```

---

# 🛠 3. Installation & Setup

Install TypeScript locally:

```bash
npm install -D typescript
```

Check version:

```bash
npx tsc --version
```

Create configuration:

```bash
npx tsc --init
```

Compile:

```bash
npx tsc
```

Compile one file:

```bash
npx tsc app.ts
```

TypeScript can be installed globally as well, but local project installation is generally preferable for reproducible projects.

---

# 👋 4. Hello World

Create:

```text
hello.ts
```

```ts
const message: string = "Hello World";

console.log(message);
```

Compile:

```bash
npx tsc hello.ts
```

Run:

```bash
node hello.js
```

---

# 📦 5. Variables

TypeScript supports the same basic variable declarations as JavaScript.

```ts
let name: string = "Love";

const age: number = 25;

let isActive: boolean = true;
```

### `let`

Can be reassigned.

```ts
let age = 25;

age = 26;
```

### `const`

Cannot be reassigned.

```ts
const name = "Love";
```

### `var`

Avoid using `var` in modern TypeScript unless you have a specific reason.

---

# 🔤 6. Data Types

## Primitive types

```ts
string
number
boolean
null
undefined
bigint
symbol
```

Example:

```ts
let username: string = "Love";

let age: number = 25;

let active: boolean = true;

let value: null = null;

let result: undefined = undefined;
```

---

# 📝 7. Type Annotations

Type annotations explicitly tell TypeScript what type a value should have.

```ts
let username: string = "Love";

let age: number = 25;

let loggedIn: boolean = true;
```

Function:

```ts
function add(a: number, b: number): number {
    return a + b;
}
```

Here:

```text
a → number
b → number
return → number
```

---

# 🧠 8. Type Inference

TypeScript can automatically determine types.

```ts
let name = "Love";
```

TypeScript understands:

```ts
name: string
```

Another example:

```ts
let age = 25;
```

TypeScript infers:

```ts
age: number
```

Therefore, you don't always need to write annotations.

### Good

```ts
const name = "Love";
```

Instead of:

```ts
const name: string = "Love";
```

Use annotations when they improve clarity or are required by the API/design.

---

# 📚 9. Arrays

Array of numbers:

```ts
let numbers: number[] = [1, 2, 3, 4];
```

Array of strings:

```ts
let names: string[] = ["A", "B", "C"];
```

Alternative syntax:

```ts
let numbers: Array<number> = [1, 2, 3];
```

Object array:

```ts
const users: User[] = [
    { id: 1, name: "Love" },
    { id: 2, name: "John" }
];
```

---

# 🔢 10. Tuples

A tuple represents a fixed structure with known positions/types.

```ts
let user: [string, number] = ["Love", 25];
```

Meaning:

```text
index 0 → string
index 1 → number
```

Example:

```ts
const response: [number, string] = [200, "Success"];
```

---

# 🔢 11. Enums

Enums allow you to define named constants.

```ts
enum Role {
    ADMIN,
    USER,
    GUEST
}

const role: Role = Role.ADMIN;
```

String enum:

```ts
enum Status {
    SUCCESS = "success",
    ERROR = "error",
    LOADING = "loading"
}
```

Enums can be useful, but in many modern TypeScript projects, string literal unions are often simpler.

---

# 🎯 12. Literal Types

A literal type allows only a specific value.

```ts
let direction: "left" | "right";

direction = "left";
```

This is invalid:

```ts
direction = "up";
```

Another example:

```ts
type Status = "success" | "error" | "loading";
```

Now:

```ts
let status: Status = "success";
```

---

# 🔀 13. Union Types

A union allows multiple possible types.

```ts
let id: string | number;

id = 10;
id = "abc";
```

Function:

```ts
function printId(id: string | number) {
    console.log(id);
}
```

Very common in real applications.

Example:

```ts
type UserId = string | number;
```

---

# 🔗 14. Intersection Types

Intersection combines multiple types.

```ts
type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type EmployeePerson = Person & Employee;
```

Now:

```ts
const employee: EmployeePerson = {
    name: "Love",
    employeeId: 101
};
```

Think:

```text
A & B

means

A AND B
```

---

# 🏷 15. Type Aliases

Type aliases allow you to create reusable types.

```ts
type User = {
    id: number;
    name: string;
    email: string;
};
```

Use:

```ts
const user: User = {
    id: 1,
    name: "Love",
    email: "love@example.com"
};
```

Union alias:

```ts
type ID = string | number;
```

---

# ⚙️ 16. Functions

Function parameters:

```ts
function add(a: number, b: number): number {
    return a + b;
}
```

Calling:

```ts
const result = add(10, 20);
```

Function returning nothing:

```ts
function logMessage(message: string): void {
    console.log(message);
}
```

Function type:

```ts
let operation: (a: number, b: number) => number;

operation = (a, b) => a + b;
```

---

# ❓ 17. Optional & Default Parameters

Optional parameter:

```ts
function greet(name?: string) {
    console.log(name);
}
```

Default parameter:

```ts
function greet(name: string = "Guest") {
    console.log(`Hello ${name}`);
}
```

---

# 📦 18. Rest Parameters

Rest parameters allow multiple values.

```ts
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
```

Usage:

```ts
sum(1, 2, 3, 4, 5);
```

---

# ⚡ 19. Arrow Functions

```ts
const add = (a: number, b: number): number => {
    return a + b;
};
```

Short version:

```ts
const add = (a: number, b: number): number => a + b;
```

---

# 🔁 20. Function Overloading

Function overloading allows multiple function signatures.

```ts
function getValue(id: number): number;
function getValue(name: string): string;

function getValue(value: number | string) {
    return value;
}
```

Now:

```ts
getValue(10);

getValue("Love");
```

Useful when the same function supports different input/output combinations.

---

# 🧱 21. Objects

Object type:

```ts
const user: {
    name: string;
    age: number;
} = {
    name: "Love",
    age: 25
};
```

But for reusable structures, prefer:

```ts
interface User {
    name: string;
    age: number;
}
```

---

# 🧩 22. Interfaces

Interfaces describe the shape of objects.

```ts
interface User {
    id: number;
    name: string;
    email: string;
}
```

Usage:

```ts
const user: User = {
    id: 1,
    name: "Love",
    email: "love@example.com"
};
```

Optional property:

```ts
interface User {
    id: number;
    name: string;
    phone?: string;
}
```

Readonly:

```ts
interface User {
    readonly id: number;
    name: string;
}
```

---

# ⚖️ 23. Type vs Interface

### Interface

```ts
interface User {
    name: string;
}
```

### Type

```ts
type User = {
    name: string;
};
```

Both can describe objects.

### Type is especially useful for

```ts
type ID = string | number;

type Status = "success" | "error";
```

### Interface is especially useful for

```ts
interface User {
    id: number;
    name: string;
}
```

Interfaces can also be extended:

```ts
interface Admin extends User {
    permissions: string[];
}
```

---

# 🏛 24. Classes

TypeScript supports object-oriented programming.

```ts
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello ${this.name}`);
    }
}
```

Usage:

```ts
const user = new User("Love", 25);

user.greet();
```

---

# 🔐 25. Access Modifiers

TypeScript supports:

```text
public
private
protected
```

### public

Accessible everywhere.

```ts
class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

### private

Only accessible inside the class.

```ts
class User {
    private password: string;

    constructor(password: string) {
        this.password = password;
    }
}
```

### protected

Accessible inside the class and subclasses.

```ts
class User {
    protected role: string;

    constructor(role: string) {
        this.role = role;
    }
}
```

---

# 🔒 26. Readonly

Readonly properties cannot be reassigned after initialization.

```ts
class User {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}
```

This is invalid:

```ts
user.id = 20;
```

---

# 🎛 27. Getters & Setters

Getter:

```ts
class User {
    private _name = "";

    get name(): string {
        return this._name;
    }
}
```

Setter:

```ts
set name(value: string) {
    this._name = value;
}
```

Usage:

```ts
user.name = "Love";

console.log(user.name);
```

---

# 🧬 28. Inheritance

A class can inherit from another class.

```ts
class Animal {
    move() {
        console.log("Moving");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof");
    }
}
```

Usage:

```ts
const dog = new Dog();

dog.move();
dog.bark();
```

---

# 🧱 29. Abstract Classes

Abstract classes cannot be instantiated directly.

```ts
abstract class Animal {
    abstract makeSound(): void;

    move() {
        console.log("Moving");
    }
}
```

Child class:

```ts
class Dog extends Animal {
    makeSound() {
        console.log("Woof");
    }
}
```

---

# 🔌 30. Implementing Interfaces

A class can implement an interface.

```ts
interface Payment {
    pay(amount: number): void;
}
```

Implementation:

```ts
class StripePayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount}`);
    }
}
```

---

# 🧬 31. Generics

Generics allow reusable type-safe code.

Instead of:

```ts
function identity(value: any) {
    return value;
}
```

Use:

```ts
function identity<T>(value: T): T {
    return value;
}
```

Usage:

```ts
identity<string>("Hello");

identity<number>(100);
```

`T` represents a type that will be determined when the function is used.

---

# 🔧 32. Generic Functions

```ts
function first<T>(items: T[]): T {
    return items[0];
}
```

Usage:

```ts
const number = first<number>([1, 2, 3]);

const name = first<string>(["A", "B"]);
```

---

# 🏗 33. Generic Classes

```ts
class Box<T> {
    constructor(public value: T) {}
}
```

Usage:

```ts
const numberBox = new Box<number>(100);

const stringBox = new Box<string>("Hello");
```

---

# 🔒 34. Generic Constraints

You can restrict generic types.

```ts
function getLength<T extends { length: number }>(value: T) {
    return value.length;
}
```

Works:

```ts
getLength("Hello");

getLength([1, 2, 3]);
```

Because both have `length`.

---

# 🧰 35. Built-in Generic Types

Common examples:

```ts
Array<T>
Promise<T>
Map<K, V>
Set<T>
Record<K, V>
```

Example:

```ts
const users: Array<string> = ["A", "B"];
```

Promise:

```ts
async function getUser(): Promise<User> {
    // ...
}
```

---

# ⚠️ 36. `any`

`any` disables most type checking.

```ts
let value: any = 10;

value = "Hello";

value = true;
```

Although useful in some migration scenarios, avoid `any` when possible.

Prefer:

```ts
unknown
```

when the type is genuinely unknown.

---

# ❓ 37. `unknown`

`unknown` is safer than `any`.

```ts
let value: unknown;

value = "Hello";
value = 100;
```

You cannot directly use it without checking its type.

```ts
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

---

# 🚫 38. `never`

`never` represents a value that never occurs.

Example:

```ts
function throwError(message: string): never {
    throw new Error(message);
}
```

Another use is exhaustive checking:

```ts
type Status = "success" | "error";

function handle(status: Status) {
    switch (status) {
        case "success":
            return;
        case "error":
            return;
        default:
            const exhaustive: never = status;
            return exhaustive;
    }
}
```

---

# 🔄 39. `void`

`void` generally means a function doesn't return a useful value.

```ts
function log(message: string): void {
    console.log(message);
}
```

---

# 🎭 40. Type Assertions

Type assertions tell TypeScript that you know more about a value than it currently knows.

```ts
const value: unknown = "Hello";

const length = (value as string).length;
```

Another syntax:

```ts
const length = (<string>value).length;
```

The `as` syntax is generally preferred in modern TS/JSX projects.

### Important

Type assertions do **not** perform runtime conversion.

This:

```ts
value as number
```

does not convert a string to a number.

---

# 🛡 41. Type Guards

Type guards narrow a type safely.

```ts
function print(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```

Common guards:

```ts
typeof
instanceof
in
Array.isArray()
```

---

# 🔍 42. Narrowing

Narrowing means reducing a broad type into a more specific type.

Example:

```ts
function print(value: string | number) {
    if (typeof value === "string") {
        // value is string
        console.log(value.toUpperCase());
    } else {
        // value is number
        console.log(value.toFixed(2));
    }
}
```

Think:

```text
string | number
       ↓
    type check
       ↓
string OR number
```

---

# 🧠 43. Conditional Types

Conditional types choose a type based on a condition.

Basic structure:

```ts
T extends U ? X : Y
```

Example:

```ts
type IsString<T> = T extends string ? true : false;
```

Usage:

```ts
type A = IsString<string>; // true

type B = IsString<number>; // false
```

Conditional types are heavily used in advanced TypeScript libraries.

---

# 🗺 44. Mapped Types

Mapped types create new types from existing types.

```ts
type User = {
    name: string;
    age: number;
};
```

Make everything optional:

```ts
type OptionalUser = {
    [K in keyof User]?: User[K];
};
```

Equivalent conceptually to:

```ts
{
    name?: string;
    age?: number;
}
```

---

# 🧩 45. Template Literal Types

Template literal types work similarly to JavaScript template strings.

```ts
type EventName = `on${string}`;
```

Valid:

```ts
const event: EventName = "onClick";
```

Another example:

```ts
type Color = "red" | "blue";

type ButtonClass = `button-${Color}`;
```

Possible values:

```text
button-red
button-blue
```

---

# ♻️ 46. Recursive Types

A recursive type references itself.

Example:

```ts
type TreeNode = {
    value: string;
    children?: TreeNode[];
};
```

Useful for:

* Trees
* Nested menus
* File systems
* JSON
* ASTs
* Nested configuration

Example:

```ts
const folder: TreeNode = {
    value: "src",
    children: [
        {
            value: "components"
        }
    ]
};
```

---

# 🧰 47. Utility Types

TypeScript provides many built-in utility types.

## Partial

Makes properties optional.

```ts
type UserUpdate = Partial<User>;
```

## Required

Makes properties required.

```ts
type RequiredUser = Required<User>;
```

## Readonly

```ts
type ReadonlyUser = Readonly<User>;
```

## Pick

Select properties:

```ts
type UserPreview = Pick<User, "name" | "email">;
```

## Omit

Remove properties:

```ts
type PublicUser = Omit<User, "password">;
```

## Record

Create key/value structures:

```ts
type UserRoles = Record<string, string>;
```

## Exclude

```ts
type Result = Exclude<"a" | "b" | "c", "a">;
```

Result:

```ts
"b" | "c"
```

## Extract

```ts
type Result = Extract<"a" | "b", "a" | "c">;
```

Result:

```ts
"a"
```

## NonNullable

```ts
type Result = NonNullable<string | null | undefined>;
```

Result:

```ts
string
```

---

# 📦 48. Modules

Modules allow you to split code into files.

### user.ts

```ts
export interface User {
    id: number;
    name: string;
}
```

### app.ts

```ts
import { User } from "./user";

const user: User = {
    id: 1,
    name: "Love"
};
```

Modules are essential for large projects.

---

# 📤 49. Named & Default Exports

### Named export

```ts
export const name = "Love";
```

Import:

```ts
import { name } from "./user";
```

### Default export

```ts
export default class User {}
```

Import:

```ts
import User from "./user";
```

---

# 📁 50. Namespaces

Namespaces group related code.

```ts
namespace Utils {
    export function add(a: number, b: number) {
        return a + b;
    }
}
```

Usage:

```ts
Utils.add(10, 20);
```

Namespaces are mainly relevant to older/legacy TypeScript code. Modern applications generally prefer ES modules.

---

# 🪄 51. Decorators

Decorators are functions that can add metadata or modify classes/members.

Example concept:

```ts
function Log(target: any) {
    console.log(target);
}
```

Usage:

```ts
@Log
class User {}
```

Decorators are particularly important when working with frameworks such as **NestJS**.

Common NestJS decorators include:

```ts
@Controller()
@Get()
@Post()
@Injectable()
@Module()
@Inject()
```

---

# ⚙️ 52. tsconfig.json

`tsconfig.json` controls how TypeScript compiles your project.

Example:

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "NodeNext",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "outDir": "./dist"
    },
    "include": ["src"]
}
```

Important options:

```text
target
module
strict
rootDir
outDir
lib
esModuleInterop
allowJs
checkJs
sourceMap
declaration
noImplicitAny
strictNullChecks
```

---

# 🔒 53. Strict Mode

Enable:

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

Strict mode enables stronger type checking.

Important checks include:

```text
noImplicitAny
strictNullChecks
strictFunctionTypes
strictPropertyInitialization
useUnknownInCatchVariables
```

For professional projects, `strict: true` is a very good default.

---

# 🟨 54. TypeScript with JavaScript

TypeScript is designed to work with existing JavaScript.

JavaScript:

```js
function add(a, b) {
    return a + b;
}
```

TypeScript:

```ts
function add(a: number, b: number): number {
    return a + b;
}
```

The TypeScript version provides additional compile-time information.

---

# ⚛️ 55. TypeScript with React

Component props:

```tsx
interface ButtonProps {
    title: string;
    disabled?: boolean;
}

function Button({ title, disabled }: ButtonProps) {
    return (
        <button disabled={disabled}>
            {title}
        </button>
    );
}
```

Usage:

```tsx
<Button title="Login" />
```

State:

```tsx
const [count, setCount] = useState<number>(0);
```

Event:

```tsx
const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
) => {
    console.log(event);
};
```

TypeScript + React is one of the most common modern frontend combinations.

---

# ▲ 56. TypeScript with Next.js

Next.js has first-class TypeScript support.

Page:

```tsx
export default function Home() {
    return <h1>Hello</h1>;
}
```

Props:

```tsx
interface UserProps {
    name: string;
}

export default function User({ name }: UserProps) {
    return <h1>{name}</h1>;
}
```

API response:

```ts
interface User {
    id: number;
    name: string;
    email: string;
}
```

TypeScript is especially useful for:

* Server Components
* Client Components
* API responses
* Forms
* Server Actions
* Route handlers
* Database models
* Props
* Hooks

---

# 🟢 57. TypeScript with Node.js

TypeScript can be used for backend development.

Example:

```ts
import http from "node:http";

const server = http.createServer((req, res) => {
    res.end("Hello");
});

server.listen(3000);
```

Typical structure:

```text
src/
├── controllers/
├── services/
├── repositories/
├── models/
├── routes/
├── middleware/
└── app.ts
```

---

# 🟣 58. TypeScript with NestJS

NestJS is heavily based on TypeScript.

Example:

```ts
@Controller("users")
export class UserController {

    @Get()
    findAll() {
        return [];
    }
}
```

Service:

```ts
@Injectable()
export class UserService {

    findAll() {
        return [];
    }
}
```

Module:

```ts
@Module({
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
```

Important TypeScript concepts for NestJS:

```text
Interfaces
Types
Classes
Generics
Decorators
Enums
Access modifiers
Dependency injection
Async/Promise types
DTOs
Utility types
```

---

# 🧪 59. Testing

TypeScript projects can use testing frameworks such as:

* Jest
* Vitest
* Mocha
* Playwright
* Cypress

Example:

```ts
function add(a: number, b: number): number {
    return a + b;
}
```

Test:

```ts
describe("add", () => {
    it("adds two numbers", () => {
        expect(add(2, 3)).toBe(5);
    });
});
```

Type-safe mocking is also important for larger applications.

---

# ⚡ 60. Performance

For large TypeScript projects, compilation can become expensive.

Useful techniques:

### 1. Use project references

Useful for large monorepos.

### 2. Avoid unnecessary files

Use:

```json
{
    "include": ["src"]
}
```

instead of compiling unrelated directories.

### 3. Use incremental compilation

```json
{
    "compilerOptions": {
        "incremental": true
    }
}
```

### 4. Avoid unnecessary complex types

Extremely complicated conditional/mapped types can increase compiler workload.

### 5. Use skipLibCheck when appropriate

```json
{
    "compilerOptions": {
        "skipLibCheck": true
    }
}
```

---

# ✅ 61. Best Practices

## 1. Prefer strict mode

```json
{
    "strict": true
}
```

## 2. Avoid `any`

Bad:

```ts
const user: any = data;
```

Better:

```ts
const user: unknown = data;
```

Then validate/narrow it.

---

## 3. Prefer meaningful types

Bad:

```ts
let x: string;
```

Better:

```ts
let username: string;
```

---

## 4. Use interfaces/types for reusable structures

```ts
interface User {
    id: number;
    name: string;
}
```

---

## 5. Use union types for fixed choices

```ts
type Status = "pending" | "success" | "failed";
```

---

## 6. Use generics for reusable code

```ts
function getFirst<T>(items: T[]): T {
    return items[0];
}
```

---

## 7. Don't overuse type assertions

Avoid:

```ts
const user = data as User;
```

unless you actually know the value satisfies `User`.

---

## 8. Let TypeScript infer obvious types

Instead of:

```ts
const name: string = "Love";
```

Usually:

```ts
const name = "Love";
```

is enough.

---

# 🏗 62. Projects

Learning TypeScript becomes much easier when you build projects.

## 🟢 Beginner

### Project 1 — Counter

Learn:

```text
Variables
Types
Functions
DOM
Events
```

### Project 2 — Calculator

Learn:

```text
Functions
Union types
Events
DOM
```

### Project 3 — Password Generator

Learn:

```text
Arrays
Strings
Functions
Random values
Types
```

---

# 🟡 Intermediate

### Project 4 — Task Manager

Learn:

```text
Interfaces
Types
Arrays
CRUD
LocalStorage
Generics
```

### Project 5 — Weather App

Learn:

```text
Interfaces
API responses
Promises
async/await
Error handling
```

### Project 6 — Expense Tracker

Learn:

```text
Types
Interfaces
Enums
Arrays
Forms
Charts
LocalStorage
```

---

# 🔴 Advanced

### Project 7 — Quiz Application

Learn:

```text
Generics
Interfaces
Union types
State management
API integration
```

### Project 8 — Task Management System

Architecture:

```text
Frontend
    ↓
API
    ↓
Service
    ↓
Repository
    ↓
Database
```

Learn:

```text
DTOs
Interfaces
Generics
Utility types
Error handling
Testing
```

### Project 9 — Contact Management System

Learn:

```text
CRUD
Authentication
Authorization
Database
API
Validation
Testing
```

---

# 🧠 63. TypeScript Interview Preparation

Important questions:

### Beginner

* What is TypeScript?
* TypeScript vs JavaScript?
* What is static typing?
* What is type inference?
* What are type annotations?
* What are interfaces?
* What are type aliases?
* What are union types?
* What are tuples?
* What are enums?

### Intermediate

* `type` vs `interface`
* `any` vs `unknown`
* `never` vs `void`
* What are generics?
* What are generic constraints?
* What is function overloading?
* What are type guards?
* What is narrowing?
* What are access modifiers?
* What is inheritance?

### Advanced

* Conditional types
* Mapped types
* Template literal types
* Recursive types
* Utility types
* `keyof`
* `typeof`
* `infer`
* Discriminated unions
* Type predicates
* Declaration merging
* Module augmentation
* Decorators
* Advanced generics
* Compiler configuration

---

# 🛣 64. Learning Roadmap

The best way to learn TypeScript is **not** to learn everything at once.

Follow this order:

```text
                    TYPESCRIPT
                        │
                        ▼
                1. JavaScript
                        │
                        ▼
                2. Basic Types
                        │
                        ▼
              3. Type Annotations
                        │
                        ▼
               4. Type Inference
                        │
                        ▼
            5. Arrays + Tuples
                        │
                        ▼
         6. Union + Intersection
                        │
                        ▼
             7. Type Aliases
                        │
                        ▼
                 8. Functions
                        │
                        ▼
                 9. Interfaces
                        │
                        ▼
                  10. Classes
                        │
                        ▼
                  11. Generics
                        │
                        ▼
             12. Type Narrowing
                        │
                        ▼
              13. Type Guards
                        │
                        ▼
              14. Utility Types
                        │
                        ▼
              15. Advanced Types
                        │
                        ▼
                  16. Modules
                        │
                        ▼
                17. Decorators
                        │
                        ▼
                18. tsconfig
                        │
                        ▼
                   19. Testing
                        │
                        ▼
                  20. Projects
                        │
                        ▼
              🚀 Production TS
```

---

# 🟢 Phase 1 — Beginner

Learn:

```text
What is TypeScript?
Installation
Variables
Data Types
Type Annotations
Type Inference
Arrays
Tuples
Enums
Literal Types
Union Types
Intersection Types
Type Aliases
```

Build:

```text
Calculator
Counter
Password Generator
```

---

# 🟡 Phase 2 — Core TypeScript

Learn:

```text
Functions
Function Types
Optional Parameters
Default Parameters
Rest Parameters
Arrow Functions
Function Overloading
Objects
Interfaces
Type vs Interface
```

Build:

```text
Task Manager
Expense Tracker
```

---

# 🟠 Phase 3 — OOP

Learn:

```text
Classes
Constructors
Access Modifiers
public
private
protected
readonly
Getters
Setters
Inheritance
Abstract Classes
Interfaces
```

Build:

```text
Banking System
Library Management System
```

---

# 🔵 Phase 4 — Generics

Learn:

```text
Generic Functions
Generic Classes
Generic Interfaces
Generic Constraints
keyof
typeof
Built-in Generic Types
```

Build:

```text
Generic API response system
Generic repository
Generic data table
```

---

# 🟣 Phase 5 — Advanced Types

Learn:

```text
any
unknown
never
void
Type Assertions
Type Guards
Narrowing
Conditional Types
Mapped Types
Template Literal Types
Recursive Types
Utility Types
```

This is where TypeScript becomes significantly more powerful.

---

# 🔴 Phase 6 — Production TypeScript

Learn:

```text
Modules
ES Modules
tsconfig
Strict mode
Declaration files
Testing
Error handling
API typing
Database typing
Validation
Performance
Monorepos
```

---

# 🚀 Phase 7 — Framework Integration

After TypeScript fundamentals, move to:

```text
TypeScript
    │
    ├── React
    │
    ├── Next.js
    │
    ├── Node.js
    │
    └── NestJS
```

For your full-stack path, a particularly useful progression is:

```text
JavaScript
     ↓
TypeScript
     ↓
React + TypeScript
     ↓
Next.js + TypeScript
     ↓
Node.js + TypeScript
     ↓
NestJS + TypeScript
     ↓
Advanced TypeScript
     ↓
System Design
```

---

# 🧠 TypeScript Mental Model

Remember these five concepts:

```text
1. Types
   ↓
   What data is allowed?

2. Interfaces / Types
   ↓
   What should an object look like?

3. Generics
   ↓
   How can I reuse code while keeping types?

4. Narrowing
   ↓
   What type is this value right now?

5. Utility / Advanced Types
   ↓
   How can I transform existing types?
```

If you understand these deeply, you can handle most real-world TypeScript code.

---

# 📌 Quick TypeScript Cheat Sheet

```ts
// String
let name: string = "Love";

// Number
let age: number = 25;

// Boolean
let active: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];

// Tuple
let user: [string, number] = ["Love", 25];

// Object
let person: {
    name: string;
    age: number;
} = {
    name: "Love",
    age: 25
};

// Type
type ID = string | number;

// Interface
interface User {
    id: number;
    name: string;
}

// Union
let id: string | number;

// Function
function add(a: number, b: number): number {
    return a + b;
}

// Optional
function greet(name?: string) {}

// Generic
function identity<T>(value: T): T {
    return value;
}

// Unknown
let data: unknown;

// Never
function error(): never {
    throw new Error("Error");
}

// Readonly
interface Config {
    readonly apiUrl: string;
}

// Partial
type UpdateUser = Partial<User>;

// Pick
type UserPreview = Pick<User, "id" | "name">;

// Omit
type PublicUser = Omit<User, "password">;

// Record
type Users = Record<string, User>;
```

---

# 🎯 Final Learning Strategy

Don't try to memorize TypeScript.

Instead:

```text
LEARN
  ↓
UNDERSTAND
  ↓
WRITE CODE
  ↓
MAKE MISTAKES
  ↓
FIX ERRORS
  ↓
BUILD PROJECT
  ↓
REPEAT
```

### Recommended daily routine

```text
30 min → Learn concept

30 min → Write examples

30 min → Solve problems

60 min → Build project

15 min → Review
```

---

# 🏆 Final Goal

By the end of this roadmap, you should be able to comfortably understand and write:

```ts
interface User {
    id: number;
    name: string;
    email: string;
    role: "admin" | "user";
}

type ApiResponse<T> = {
    success: boolean;
    data: T;
    message?: string;
};

async function getUser(id: number): Promise<ApiResponse<User>> {
    // API implementation
    return {
        success: true,
        data: {
            id,
            name: "Love",
            email: "love@example.com",
            role: "user"
        }
    };
}
```

And understand **why every type is there**, rather than simply copying the syntax.

---

# 📚 Reference

Primary reference:

**GeeksforGeeks — TypeScript Tutorial**

https://www.geeksforgeeks.org/typescript/

The GFG guide currently organizes TypeScript into basics, functions, object types/interfaces, OOP, generics, advanced types, modules/namespaces, testing, configuration/performance, and projects.

---

# ⭐ Progress Tracker

Use this checklist while learning:

## Fundamentals

* [ ] What is TypeScript?
* [ ] TypeScript vs JavaScript
* [ ] Installation
* [ ] Variables
* [ ] Data Types
* [ ] Type Annotations
* [ ] Type Inference
* [ ] Arrays
* [ ] Tuples
* [ ] Enums
* [ ] Literal Types
* [ ] Union Types
* [ ] Intersection Types
* [ ] Type Aliases

## Functions

* [ ] Function Types
* [ ] Optional Parameters
* [ ] Default Parameters
* [ ] Rest Parameters
* [ ] Arrow Functions
* [ ] Function Overloading

## Objects & OOP

* [ ] Objects
* [ ] Interfaces
* [ ] Type vs Interface
* [ ] Classes
* [ ] Access Modifiers
* [ ] Readonly
* [ ] Getters
* [ ] Setters
* [ ] Inheritance
* [ ] Abstract Classes
* [ ] Implementing Interfaces

## Generics

* [ ] Generic Functions
* [ ] Generic Classes
* [ ] Generic Interfaces
* [ ] Generic Constraints
* [ ] Built-in Generic Types

## Advanced

* [ ] any
* [ ] unknown
* [ ] never
* [ ] void
* [ ] Type Assertions
* [ ] Type Guards
* [ ] Narrowing
* [ ] Conditional Types
* [ ] Mapped Types
* [ ] Template Literal Types
* [ ] Recursive Types
* [ ] Utility Types
* [ ] keyof
* [ ] typeof
* [ ] infer

## Production

* [ ] Modules
* [ ] Exports
* [ ] Imports
* [ ] tsconfig
* [ ] Strict Mode
* [ ] Decorators
* [ ] Testing
* [ ] Performance
* [ ] API Typing
* [ ] Error Handling
* [ ] Project Architecture

## Frameworks

* [ ] React + TypeScript
* [ ] Next.js + TypeScript
* [ ] Node.js + TypeScript
* [ ] NestJS + TypeScript

---

# 🚀 Keep Learning

**TypeScript → React → Next.js → Node.js → NestJS → Advanced TypeScript → System Design**

This gives you a strong foundation for building modern full-stack applications.
