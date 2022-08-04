const express = require('express');
const bodyParser = require('body-parser');
const templete = require('./templete')
const db = require("./database.js")

const app = express();

/*
☑️ Todo
[V] 1. 글 리스트
[V] 2. 글 쓰기
[V] 3. 글 읽기
[V] 4. 글 수정
[V] 5. 글 삭제
*/

print = (text) => console.log(text)

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//index
app.get('/', function (req, res) {
    ;(async function () {
        let _posts = "";
        const rows = (await db.Execute("select * from Posts"))[0]
        for (var i in rows) {
            _posts += `<li><a href="/post/${rows[i]["num"]}">${rows[i]["title"]}</a></li>`
        }
        res.send(templete.index(`
        ${templete.page_list}
        ${_posts}
    `));
    })()
});

//Write
app.get('/write', function (req, res) {
    res.send(templete.index(`
    ${templete.write}
    `));
});

app.post('/process-write', function (req, res) {
    const body = req.body
    ;(async function () {
        const rows = (await db.Execute(`insert into Posts (title, content) value('${body.title}', '${body.content}');`))
        res.send("<script>location.href='/';</script>");
    })()
});

//Read
app.get('/post/:num', function (req, res) {
    const num = req.params.num;
    ;(async function () {
        let _result = undefined;
        const rows = (await db.Execute("select * from Posts"))[0]
        for (var i in rows) {
            if(rows[i]["num"]==num){
                _result=rows[i]
                break;
            }
        }
        if(_result == undefined){
            res.send(templete.index(`404 NOT FOUND`));
            return false;
        }
        res.send(templete.index(`
        <span class="box">
            <a href="/modify/${num}">Modify</a>
        </span>
        <h2>${_result["title"]}</h2>
        <p>${_result["content"]}</p>
        `));
    })()
});

//Modify
app.get('/modify/:num', function (req, res) {
    const num = req.params.num;
    ;(async function () {
        let _result = undefined;
        const rows = (await db.Execute("select * from Posts"))[0]
        for (var i in rows) {
            if(rows[i]["num"]==num){
                _result=rows[i]
                break;
            }
        }
        if(_result == undefined){
            res.send(templete.index(`404 NOT FOUND`));
            return false;
        }
        res.send(templete.index(
            templete.write_with(num, _result["title"],_result["content"])));
    })()
});

app.post('/process-modify', async function (req, res) {
    const body = req.body;
    print(body)
    const conn = await db.conn()

    const rows = await conn.query("UPDATE `posts` SET title = ?, content = ? WHERE num = ?;", [body.title, body.content, Number(body.num)])
    res.send("<script>location.href='/';</script>");

});

//Delete
app.get('/delete/:num', async function (req, res) {
    const num = req.params.num;
    (await db.Execute(`delete from Posts where num=${num}`))
    res.send("<script>location.href='/';</script>")
});

//404 Error
app.use(function(req, res, next) {
    res.status(404).send('404');
  });


var server = app.listen(3000, function () { })
