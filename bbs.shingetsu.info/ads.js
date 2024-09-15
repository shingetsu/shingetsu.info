(function () {
    var asins = [
        ["B0C941XZ3W", "「私、能力は平均値でって言ったよね！」Blu-ray BOX"],
        ["B08KPXXTH6", "くまクマ熊ベアー 第1巻"],
        ["B0B5DFG6ZP", "リコリス・リコイル 1"],
        ["B0BZJJNY57", "天国大魔境Blu-ray BOX 上巻"],
        ["B0CCYQR1XZ", "グリッドマン ユニバース"],
        ["B0CK4QZWG3", "アンダーニンジャ"],
        ["B0DGQD7Q6D", "ダンジョン飯 Blu-ray BOX"],
        ["B0B9S3CGTS", "トップガン マーヴェリック"],
        ["B08BGBZT16", "劇場版ハイスクール・フリート"],
        ["B07QMYTRR9", "ハイスクール・フリート 5.1ch Blu-ray Disc BOX"],
        ["B06W5528D5", "OVA ハイスクール・フリート"]
    ];

    var ads = document.getElementById("ads");
    ads.style.marginTop = "1em";
    ads.style.backgroundColor = "#dddddd";

    var notice = document.createElement("div");
    notice.innerText = "Amazonのアソシエイトとして、新月サンプルゲートウェイは適格販売により収入を得ています。";
    ads.appendChild(notice);

    function shuffle(a) {
        for (var i=a.length; i>0; i--) {
            var j = Math.floor(Math.random() * i);
            [a[i-1], a[j]] = [a[j], a[i-1]];
        }
        return a;
    }

    var list = document.createElement("ul");
    ads.appendChild(list);

    shuffle(asins).slice(0, 5).forEach(function(a) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = "https://www.amazon.co.jp/dp/" + a[0] + "?tag=shingetsubbs-22";
        link.innerText = "[ad] " + a[1];
        item.appendChild(link);
        list.appendChild(item);
    });
})();
