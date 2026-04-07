//task-1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");
// styles[index] = "classic";

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i+1} - ${array[i]}`);
//   }
// }
// logItems(styles);

//task-2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const login = prompt("Enter your login");
//   if (array.includes(login)) {
//     alert(`Welcome, ${login} !`)
//   } else {
//     alert(`User not found`)
//   }
// }

// checkLogin(logins);

//task-3

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let total = 0;
//   let totalCount = 0;
//   for (const arg of arguments) {
//     if (typeof arg === "number") {
//       total += arg;
//       totalCount += 1;
//     }
//   }
//   return total / totalCount;
// }

// console.log(caclculateAverage(1, 5, 7, 8, 2))

//task-4

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function totalNumbers(array) {
//   const newArray = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     newArray.push(array[i] + array[i + 1]);

//   }
//   return newArray;
// }

// console.log(totalNumbers(someArr));

//task-5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     return Math.min(...numbers);
//   } else {
//     console.log("Sory, it is not an array!");

//   }
// }
// console.log(findSmallestNumber(numbers));

//task-6
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   const arr = string.split(" ");
//   let strMax = "";
//   for (const str of arr) {
//     if (strMax.length < str.length) {
//       strMax = str;
//     }
//   }
//   return strMax;
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

//task-7
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

//task-8
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

//   let sum = 0;
//   for (const sal of Object.values(salaries)){
//     sum += sal;
//   }
//   console.log(sum);

//task-9
//// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   exist(){
//     return this.value1 != undefined && this.value2 != undefined
//   },

//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   sum(){
//     if(this.exist) {
//       return this.value1 + this.value2;
//     }
//   },
//   mult(){
//     if(this.exist()) {
//       return this.value1 * this.value2;
//     }
//   },
// }

// calculator.read(1, 8);

// console.log(calculator.sum());
// console.log(calculator.mult());

//task-10
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let sumPrice = 0;

//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       sumPrice += fruit.price * fruit.quantity;
//     }
//   }
//   return sumPrice;
// }

// console.log(calcTotalPrice(fruits, "Банан"));

//task-11
// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;


 const phonebook = {
    contacts: [],
   add(data) { 
   const newContact = {
     name: data.name, 
     email: data.email,
     category: data.category || "default",
     id: this.generateId(),
     createdAt: this.getDate(),
   }
     this.contacts.push(newContact);
     }
    list() {
      console.table(this.contacts);
   },
    
   filtered(category) {
      const filtrContacts = [];
     for (const contact of this.contacts) {
       if (contact.category === category) {
         filtrContacts.push(contact);
       }
       return filtrContacts;
     }
    },
   delete(name) {
     for (let i = 0; i < this.contacts.length; i += 1){
       if (name === this.contacts[i].name) {
         this.contacts.splice(i,1)
       }
     }
    },
   updateName(oldName, newName) {
     for (let i = 0; i < this.contacts.length; i += 1) {
       if (oldName === this.contacts[i].name) {
         this.contacts[i].name = newName;
       }
     }
    },

    generateId() {
      return "#" + Math.random().toString(36).substring(2, 9);
    },
    getDate() {
      return Date.now();
    },
 };
  phonebook.add({
    name: "Mango",
    email: "mango@mail.com",
   category: "friends",
  });
  phonebook.add({
    name: "Poly",
   email: "poly@hotmail.com",
  });

phonebook.add({
  name: "Katy",
  email: "katy@hotmail.com",
  category: "friends",
});

phonebook.list();
// console.log(phonebook.add(Ivan));
console.log(phonebook.filtered("friends"));

//  //.splice(i, 1): метод, який змінює вміст масиву:
// i: індекс елемента, з якого треба почати видалення (позиція елемента в списку).
// 1: кількість елементів, які потрібно видалити (у цьому випадку — лише один).


//  phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   category: "friends",
// });
// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });