// "use strict"

// const arr = [2, 4, 3, 6]

// // Добваление и удаление элементов в массиве

// arr.push(2)     // Добавляет элем. в конец

// arr.pop()       // Удаляет элем. в конце

// arr.unshift(8)  // Добавляет элем. в начало

// arr.shift()     // Удаляет элем. в начале

// arr.slice(3)    // удаляет элемент по индексу, заполняя пустое пространство

// // Перебор массива

// arr.forEach(num => console.log(num))    // .forEach() перебор без возврата элементов

// const doubleArr = arr.map(num => num * 2)   // .map() создает новый массив с измененными данными

// // Фильтрация массива

// const ages = [14, 16, 26, 18, 20]

// const adults = ages.filter(age => age >= 18)    // ищет все подходящие под проверку элементы и создает из них массив

// const firstAdult = ages.find(age => age >= 18)  // Ищет первый элемент который возвращает true

// // Проверка массива

// const nums = [20, 30, 40]

// nums.some(num => num > 30)  // Возвращает true если хотя бы один элемент больше 30

// nums.every(num => num > 5)  // Возвращает true если все эелементы больше 5

// // Сортировка массива

// arr.sort( (a, b) => a - b ); // сортировка чисел в массиве по возрастанию

// // Редукция массива

// const sum = arr.reduce((acc, num) => acc + num, 0) // сумма чисел массива




// Деструктизация массива

// const user = {
//     name: 'John',

// }

// const {name, age = 19} = user

// console.log(name, age)


// Оператор Spread(...)


const firstAndRest = (arr) => {
    const [firstElem, ...restElem] = arr

    return {
        first: firstElem,
        rest: restElem
    }
}