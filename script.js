window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("yukariBtn").style.display = "block";
    } else {
        document.getElementById("yukariBtn").style.display = "none";
    }
}

function yukariCik() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function rezervasyonGonder() {
    var ad = document.getElementById("adsoyad").value;
    var tarih = document.getElementById("tarih").value;
    var saat = document.getElementById("saat").value;
    var plaka = document.getElementById("plaka").value;

    if (ad == "" || tarih == "" || saat == "") {
        alert("Lütfen zorunlu alanları (Ad, Tarih, Saat) doldurunuz.");
    } else {
        alert("Sayın " + ad + ", " + tarih + " günü saat " + saat + " için rezervasyon talebiniz alınmıştır. Vale için araç plakanız: " + plaka);
    }
}