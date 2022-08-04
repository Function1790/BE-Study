const mysql = require('mysql2/promise');

module.exports = {
  print: (text) => console.log(text),
  Execute: async function(sql){
        const conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'code'
        })

        const result = await conn.query(sql)
        return result;
    },
    conn: async function(){
        const conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'code'
        })

        return conn;
    }
}
/*
;(async () => {
    console.log(await Execute())
})()
*/