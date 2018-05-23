var werken;
var buitenwerking;
var stoplicht = document.getElementById('stoplicht');
stoplicht.style.position = 'absolute';
stoplicht.style.left = '715px';
stoplicht.style.top = '510px';

function aanzetten() {
    clearTimeout(buitenwerking);
    maakRood();
    werken = setTimeout(maakGroen, 4000);
    werken = setTimeout(maakGeel, 8000);
    werken = setTimeout(maakRood, 10000);
}

function knipperen() {
    clearTimeout(werken);
    maakGeel();
    buitenwerking = setTimeout(zetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);
}

function uitzetten() {
    zetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}

function maakRood() {
    stoplicht.src="../foto/verkeer/stoplichtrood.png";
}

function maakGroen() {
    stoplicht.src="../foto/verkeer/stoplichtgroen.png";
}

function maakGeel() {
    stoplicht.src="../foto/verkeer/stoplichtgeel.png";
}

function zetUit() {
    stoplicht.src="../foto/verkeer/stoplichtuit.png";
}