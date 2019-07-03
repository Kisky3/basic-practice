const express = require('express');
const app = express();

app.use(express.static('../server-sample'));

// 写真のサンプルデータ
var photoList = [
    {
        id: "001",
        name: "cat01.jpg",
        type: "jpg",
        dataUrl: "http://localhost:8000/data/cat01.jpg"
    },{
        id: "002",
        name: "cat02.jpg",
        type: "jpg",
        dataUrl: "http://localhost:8000/data/cat02.jpg"
    },
    {
        id: "003",
        name: "cat03.jpg",
        type: "jpg",
        dataUrl: "http://localhost:8000/data/cat03.jpg"
    },
    {
        id: "004",
        name: "cat04.jpg",
        type: "jpg",
        dataUrl: "http://localhost:8000/data/cat04.jpg"
    }
]

// 写真リストを取得するAPI
app.get("/getCatImage", function(req, res, next){
    res.json(photoList);
});

app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});