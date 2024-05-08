// Kullanici adi bilgisi

let userName = prompt("Lütfen isminizi girin!");
if (userName != null) {
    document.getElementById("userName").innerHTML =
        "Merhaba " + userName + " hosgeldin!"
}


// Saat bilgisi

function showTime() {
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var weekdays = ["Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var weekday = weekdays[date.getDay()];
    displayTime.innerHTML = hours + ":" + minutes + ":" + seconds + " " + weekday;
};
setInterval(showTime, 1000);