window.onload = function() {
    // Executa refreshTime cada 1 segons (10000 milisegons)
    setInterval(refreshTime, 1000);
};

function refreshTime() {
    var data = new Date();
    document.getElementById("hora").innerHTML = afegirZero(data.getDate()) + "/" + afegirZero((data.getMonth()+1)) + "/" + data.getFullYear() + " " + afegirZero(data.getHours()) + ":" + afegirZero(data.getMinutes()) + ":" + afegirZero(data.getSeconds());
}

function afegirZero(data){
    if (data < 10) {
        return ("0" + data);
    } else {
        return data;
    }
}