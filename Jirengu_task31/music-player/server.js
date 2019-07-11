const express = require('express');
const app = express();

app.use(express.static('../music-player'));

var musicList = [
    {
        id: "01",
        title: "Bye Bye Bye",
        auther: "Lovestoned",
        img: "http://localhost:8001/img/01.jpg",
        url: "http://localhost:8001/music/ByeByeBye.mp3"
    },
    {
        id: "02",
        title: "Never Change",
        auther: "Chase Coy",
        img: "http://localhost:8001/img/02.jpg",
        url: "http://localhost:8001/music/NeverChange.mp3"
    },
    {
        id: "03",
        title: "It Is You",
        auther: "Tom Hugo",
        img: "http://localhost:8001/img/03.jpg",
        url: "http://localhost:8001/music/ItIsYou.mp3"
    },
     {
        id: "04",
        title: "Vendredi",
        auther: "Tamas Wells",
        img: "http://localhost:8001/img/04.jpg",
        url: "http://localhost:8001/music/Vendredi.mp3"
    },
     {
        id: "05",
        title: "Stuttering",
        auther: "Fefe Dobson",
        img: "http://localhost:8001/img/05.jpg",
        url: "http://localhost:8001/music/Stuttering.mp3"
    },
]

// 写真リストを取得するAPI
app.get("/getMusicList", function(req, res, next){
    res.json(musicList);
});

app.listen(8001, function() {
  console.log('Example app listening on port 8001!');
});