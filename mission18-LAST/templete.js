const db = require("./database.js")

module.exports = {
    index: function (body) {
        return `
<!DOCTYPE html>
<html>
<head>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
h1{
    font-family: 'Bebas Neue', cursive;
    font-size: 50px;
    margin-top: -10px;
}

h1>a{
    color:black;
    text-decoration: none;
}

.box{
    border: 2px solid black;
    padding: 2px;
    color:black;
    text-decoration: none;
}
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BE - Study</title>
</head>
<body>
    <div id="nav-bar">
        <h1><a href="/">Backend Study</a></h1>
    </div>
    <div>
        ${body}
    </div>
</body>
</html>
`
    },
    page_list: `
<p>
    <a href="/write" class="box">Write</a>
</p>
 `,
    write: `
<form action="/process-write" method="post">
    <h2>Title</h2>
    <input type="text" name="title"/>
    <h2>Content</h2>
    <textarea name="content"></textarea>
    <input type="submit">
</form>
`,
    write_with: (num, title, content) => {
        return `
<form action="/process-modify" method="post">
    <span class="box">
        <a href="/delete/${num}">Delete</a>
    </span>
    <h2>Title</h2>
    <input type="text" name="title" value="${title}" required/>
    <h2>Content</h2>
    <textarea name="content">${content}</textarea>
    <input name="num" type="hidden" value="${num}">
    <input type="submit">
</form>
`},
    posts_list: (function (){
        let _posts = "";
        ;(async function () {
            const rows = await db.Execute("select * from Posts")
            for(var i in rows){
                _posts+=rows[i]["title"]
            }
            return _posts
        })()       
    })()
}