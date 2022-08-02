var arr = ['foo', 'hello', 'diamond', 'A']
var arr2 = arr.map((v) => v[0])
console.log(arr2)

arr = [1, 2, 3, 4, 5]
arr2 = arr.filter((v) => (v % 2 === 0))
console.log(arr2)

arr2 = arr.find((n) => (n % 2 === 0))
console.log(arr2) // => 2