const express = require('express');
const app = express();

app.use(express.static('../music-player'));

var musicList = [
    {
        id: "01",
        title: "有何不可",
        auther: "许嵩",
        img: [
          "http://localhost:8001/img/01/001.jpg",
          "http://localhost:8001/img/01/002.jpg",
          "http://localhost:8001/img/01/003.jpg"
        ],
        url: "https://s320.xiami.net/574/674144574/11322/1805031825_1535718050562.mp3?ccode=xiami_web_web&expire=86400&duration=243&psid=0e14c9fda15ba052208c51616f525d51&ups_client_netip=118.103.63.136&ups_ts=1562753312&ups_userid=0&utid=jPSUFRc/UQICAW/vfwUahAY7&vid=1805031825&fn=1805031825_1535718050562.mp3&vkey=Bd7ce5cdb226ed8552d681c0165490cc6"
    },
    {
        id: "02",
        title: "大城小爱",
        auther: "王力宏",
        img: [
          "http://localhost:8001/img/02/001.jpg",
          "http://localhost:8001/img/02/002.jpg",
          "http://localhost:8001/img/02/003.jpg"
        ],
        url: "http://cloud.hunger-valley.com/music/玫瑰.mp3"
    },
    {
        id: "03",
        title: "爱很简单",
        auther: "陶喆",
        img: [
          "http://localhost:8001/img/03/001.jpg",
          "http://localhost:8001/img/03/002.jpg",
          "http://localhost:8001/img/03/003.jpg"
        ],
        url: "http://cloud.hunger-valley.com/music/玫瑰.mp3"
    },
     {
        id: "04",
        title: "プラネタリウム",
        auther: "大塚愛",
        img: [
          "http://localhost:8001/img/04/001.jpg",
          "http://localhost:8001/img/04/002.jpg",
          "http://localhost:8001/img/04/003.jpg"
        ],
        url: "http://cloud.hunger-valley.com/music/ifyou.mp3"
    },
     {
        id: "05",
        title: "情歌",
        auther: "梁静茹",
        img: [
          "http://localhost:8001/img/05/001.jpg",
          "http://localhost:8001/img/05/002.jpg",
          "http://localhost:8001/img/05/003.jpg"
        ],
        url: "http://cloud.hunger-valley.com/music/ifyou.mp3"
    },
]

// 写真リストを取得するAPI
app.get("/getMusicList", function(req, res, next){
    res.json(musicList);
});

app.listen(8001, function() {
  console.log('Example app listening on port 8001!');
});