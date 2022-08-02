function sayHi() {
    console.log('hello, world!');
}

setTimeout(sayHi, 1000);

var timer=setInterval(() => {
    console.log('hello, world!');
}, 5000);