        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "わさび直飲み"; // デフォルトの値

            if (colour === "黒" && number === 0) {
                result = "激辛ペヤング";
            } else if (colour === "黒" && number === 1) {
                result = "今からブラジル";
            } else if (colour === "黒" && number === 2) {
                result = "一週間ウルトラマンのコスプレ";
            } else if (colour === "白" && number === 0) {
                result = "三週間ガニ股に改名";
            } else if (colour === "白" && number === 1) {
                result = "パンクしてる自転車で沖縄まで行く";
            } else if (colour === "白" && number === 2) {
                result = "一週間フルマラソン走る";
            } else if (colour === "オレンジ" && number === 0) {
                result = "一か月語尾に「どすえ」をつける";
            } else if (colour === "オレンジ" && number === 1) {
                result = "シンプルに坊主！！！";
            } else if (colour === "オレンジ" && number === 2) {
                result = "三日間全身ピンクタイツ生活";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }
