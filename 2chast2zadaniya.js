let stack = ["html", "css", "bem", "js"];

// A) добавь в конец массива значение "react" (используй .push())
stack.push("react")
// B) выведи весь массив в консоль
console.log(stack)
// C) добавь в конец массива значение "redux" (используй способ с [])
stack.push("redux")
// D) выведи весь массив в консоль
console.log(stack)
// E) добавь в начало массива значение "git"
stack.unshift("git")
// F) выведи весь массив в консоль
console.log(stack)
/*
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux".
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 *
 */
console.log(`сначала мы изучим ${stack[0]}, а в конце изучим ${stack[6]}.`)

// H) добавь в конец массива сразу два элемента: "mysql" и "mongodb".
stack.push("mysql", "monqodb")
// I) выведи в консоль длину массива
console.log(stack.length)