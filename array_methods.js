// Методы массивов

const array = [1, 2, 3, 4, 5, 10, 3, 11, 17]

// 1. forEach - перебор елементов массива
// array.forEach((el, index, arr) => {
//   // console.log('Element: ' + el + ' Index: ' + index + ' ' + arr)
// })

// 2. map - перебор элементов массива и возврат нового
// array.map((item, index, arr) => {
//   // return console.log(item, index, arr)
//   return ''
// })

// 3. reduce - перебор элементов массива и возврат новой структуры данных
// const something = array.reduce((acc, item, index, arr) => {
//   acc.push(item * 2)
//   return acc
// }, [])
// console.log(something)

// const something = array.reduce((acc, item) => acc + item)
// console.log(something)

// 4. find - найти элемент по условию
// const element = array.find((item, index) => {
//   return item === 2
// })
// console.log(element)

// 5. findIndex - найти индекс элемента по условию
// const indexOfEl = array.findIndex((item, index) => {
//   return item === 5
// })
// console.log(indexOfEl)

// 6. filter - вернет новый массив по истинному условию
// const filteredArray = array.filter((item, index) => {
//   const element = item > 3
//   return element
// })
// console.log(filteredArray)

// 7. push - вставляет элементы в конец массива и возвращает новую длинну массива
// array.push(10, 11, 12)
// console.log(array)

// 8. unshift - вставляет элементы в начало массива и возвращает новую длинну массива
// array.unshift(-2, -1, 0)
// console.log(array)

// 9. pop - удаляет элемент из конца массива и возвращает его
// const lastElement = array.pop()
// console.log(array)
// console.log(lastElement)

// 10. shift - удаляет элемент из начала массива и возвращает его
// const firstElement = array.shift()
// console.log(array)
// console.log(firstElement)

// 11. concat - создает новый массив с переданными значениями и не меняет исходный
// const newArray = array.concat('123', true)
// console.log(newArray)

// 12. join - соединяет массив в строку
// const str = 'qwerty'
// const strArray = str.split('')
// const newStr = strArray.join('-')
// console.log(newStr)

// 13. sort - сортировка массива
// const newArray = array.sort((a, b) => {
//   // if (a > b) return -1
//   // if (a === b) return 0
//   // if (a < b) return 1
//   return a - b
// })
// console.log(newArray)

// 14. is Array - проверка, является ли это массивом
// console.log(Array.isArray(array))

// 15. splice - позволяет удалять и вставлять элементы
// (индекс, колличество элементов)
// array.splice(2, 333)
// console.log(array)

// 16. slice - вернуть вложенный массив из переданного
// slice(-2) - пойдет с конца с указанного индекса
// const newArray = array.slice(3, 6)
// console.log(array, newArray)

// 17. indexOf - возвращает index
// (10, 1) - второй аргумент указывает с какого индекса искать
// const index = array.indexOf(10)
// console.log(index);

// 18. lastIndexOf - возвращает index массива начиная справа налево
// второй аргумент работает также
// const index = array.lastIndexOf(3, 5)
// console.log(index)

// 19. includes - возвращает true/false при нахождении
// второй аргумент указывает с какого индекса начинать поиск
// const check = array.includes(51)
// console.log(check)

// 20. reverse - разворачивает массив
// array.reverse()
// console.log(array)
