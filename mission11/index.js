function sleep(t) {
    return new Promise((resolve) => setTimeout(resolve, t));
}

async function test() {
    console.log("짜");
    await sleep(1000);
    console.log("잔");
}

(async function() {
    test();
})();