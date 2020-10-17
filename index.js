
// expressモジュールを読み込む
const express = require('express')

// expressアプリを生成する
const app = express()

app.use(express.static('web'))

// ルート（http://localhost/v1/list）にアクセスしてきたときにtodoListを返す
app.get('/api/v1/list', (req, res) => {
    const todoList = [
        { title: "朝起きる", done: true },
        { title: "シャワー浴びる", done: false },
        { title: "昨日楽しかったから机の上片付けようか (´ ω `)b"},
        { title: "朝ごはん食べる", done: false },
        { title: "イミテーションゲーム観よ", done: false}
    ]

    // JSONを送信
    res.json(todoList)
})

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'))