const db = require("./database.js")
print = (text) => console.log(text);

;(async function () {
    let _posts = "";
    const rows = await db.Execute("select * from Posts")
    for(var i in rows){
        _posts+=rows[i]["title"]
    }
    db.print("This is TM")
    print(rows)
})()   