        const favicons = ["icons/icon1.ico", "icons/icon2.ico"];

        const changeInterval = 5000; // Örnek olarak 5 saniye

        let currentIndex = 0;
        setFavicon(favicons[currentIndex]);

        setInterval(() => {
            currentIndex = (currentIndex + 1) % favicons.length; // Bir sonraki favicon'a geçin
            setFavicon(favicons[currentIndex]);
        }, changeInterval);

        function setFavicon(favicon) {
            const link = document.querySelector("link[rel='icon']");
            link.href = favicon;
        }

        var basliklar = ["FEETLE","ar u okey?"];
        
        function baslikDegistir() {
            var pageTitle = document.getElementById("pageTitle");
            var randomIndex = Math.floor(Math.random() * basliklar.length);
            pageTitle.innerText = basliklar[randomIndex];
        }

        // Belirli aralıklarla başlığı değiştir
        setInterval(baslikDegistir, 10000);