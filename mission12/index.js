let today = new Date();   

let y = today.getFullYear();
let m = today.getMonth() + 1;
let d = today.getDate();

let h = today.getHours();
let min = today.getMinutes();
let s = today.getSeconds();

console.log(`${y}-${m}-${d} ${h}:${min}:${s}`);