// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]
// // const newNumbers = numbers.map(num => num * num);
// // console.log(newNumbers);

// // or
// const numbers = [1, 2, 3, 4, 5]
// const newNumbers = [];
// numbers.forEach(num => newNumbers.push(num * num));
// console.log(newNumbers);

// task-2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const flatArray = (arr) => arr.flatMap((item) => item.values);
// const resArray = flatArray(data);
// console.log(resArray);

// function flattenValues(data) {
//   let newValues = [];
//   for (const item of data) {
//     newValues = newValues.concat(item.values);
//   }
//   return newValues;
// }
// console.log(flattenValues(data));

// Task-3
// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// console.log(people.some((p) => p.age < 20));

// task-4
// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// console.log(numbers.every((num) => num % 2 === 0));

// task-5
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// console.log(numbers.find((num) => num % 2 !== 0));

// task-6
// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const newArr = numbersArray.toSorted((a, b) => a - b);
// console.log(newArr);


// task - 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sortedArr = stringArray.toSorted();
// console.log(sortedArr);


// task - 8
//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const sortedUsers = users.toSorted((a, b) => a.age - b.age);
// console.log(sortedUsers);

// task-9
// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const filterUsers = user.filter(user => user.age > 20);
// console.log(filterUsers);

// task-10
// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);


// task-11
 // Розроби клас Calculator, який дозволяє виконувати арифметичні
 //  операції над числом за допомогою методів класу, підтримуючи
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод subtract - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();

// class Calculator{
//   #value = 0;

//   number(value) {
//     this.#value = value;
//     return this;
//   }

//   add(value) {
//     this.#value += value;
//     return this;
//   }

//   subtract(value){
//     this.#value -= value;
//     return this;
//   }

//   divide(value) {
//     if (value !== 0) {
//       this.#value /= value;
//       return this;
//     }
//     else {
//       return `Error`;
//     }
//   }

//   multiply(value) {
//     this.#value *= value;
//     return this;
//   }
//   getResult() {
//     return this.#value;
//   }

// }
// const calc = new Calculator();


// const result = calc
//    .number(10)   // Встановлюємо початкове значення 10
//    .add(5)       // Додаємо 5 (10 + 5 = 15)
//    .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//    .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//    .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//    .getResult(); // Отримуємо результат: 24


//    console.log(result); // 24



// task - 12

 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби
 // через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   get emai() {
//     return this.#email;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }

// }
 
// const client = new Client('Nadiia', 'Nadiia@gmail.com');
// console.log(client);

// client.login = 12343;
// console.log(client);
    
// client.login = 'Sasha';
// console.log(client);

// client.email = 'Sasha@gmail.com';
// console.log(client);


// task-13

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю
  //та електронною поштою людини.
  
  //
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

  
class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
    
 getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor(name, age, gender, email, salary, department) {
    super(name, age, gender, email); // виклик конструктора батьківського класу
    this.salary = salary;
    this.department = department;
  }

   getEmployeeDetails() {
     return {
      ...this.getDetails(),
      salary: this.salary,
      department: this.department,
    };
  }
}

const client = new Person(`Kriss`, `25`, `male`, `kris@gmail.com`);
console.log(client);

const newClient = new Employee(`Kriss`, `25`, `male`, `kris@gmail.com`, `2000`, `it`);
console.log(newClient)