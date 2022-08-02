var i = 0;
while (i < 10) {
    console.log(`While${i + 1}`);
    i++;
}

for (i = 0; i < 10; i++) {
    console.log(`For${i + 1}`);
}

var object = { a: 1, b: 2, c: 3 };
for (var i in object) {
    console.log(`obj ${i}`);
}

const arr = ['a', 'b', 'c'];
for (var i of arr) {
    console.log(`arr ${i}`);
}