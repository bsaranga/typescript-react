let objA = {
    name: 'Saranga'
}

let objB = {
    age: 28
}

let merged = {...objA, ...objB}
let merged2 = Object.assign({}, objA, objB)

let arr1 = [2,4,6,8]
let arr2 = [1,3,5,7]
let arrMerged = [...arr1, ...arr2]

console.log(merged)
console.log(arrMerged)
console.log(merged2)