var rijden;
var auto = document.getElementById('auto');
auto.style.position = 'absolute';
auto.style.left = '600px';
auto.style.top = '600px';

function starten() {
    auto.style.top = parseInt(auto.style.top)-5+'px';
    rijden = setTimeout(starten,10);
}

function stop() {
    clearTimeout(rijden);
}

function opnieuw() {
    clearTimeout(rijden);
    auto.style.top = '600px';
}