var rijden;
var slir_bb = false;
var slir_lr = false;
var auto = document.getElementById('auto');
var auto2 = document.getElementById('auto2');
var auto3 = document.getElementById('auto3');
var auto4 = document.getElementById('auto4');

auto.style.position = 'absolute';
auto.style.left = '650px';
auto.style.top = '700px';

auto2.style.position = 'absolute';
auto2.style.left = '560px';
auto2.style.bottom = '700px';

auto3.style.position = 'absolute';
auto3.style.left = '0px';
auto3.style.bottom = '270px';

auto4.style.position = 'absolute';
auto4.style.right = '0px';
auto4.style.bottom = '360px';

function stop() {
    clearTimeout(rijden);
}

function opnieuw() {
    clearTimeout(rijden);
    auto.style.top = '700px';
    auto2.style.bottom = '700px';
    auto3.style.left = '0px';
    auto4.style.right = '0px';
}

setInterval(
    function(){
        if (parseInt(auto.style.top) < -80){
    auto.style.top = '780px';}
}, 100);

setInterval(
    function () {
        if (parseInt(auto2.style.bottom) < -80){
            auto2.style.bottom = '780px';}
    }, 100);

setInterval(
    function () {
        if (parseInt(auto3.style.left) > 1420){
            auto3.style.left = '-80px';}
            console.log(auto3.style.left)
    }, 100);

setInterval(
  function () {
      if (parseInt(auto4.style.right) > 1420){
          auto4.style.right = ' -80px';}
  }, 100);


/*---------------------------------------------------------------------------------------onder is voor het stoplicht*/
var werken;
var buitenwerking;
var stoplicht = document.getElementById('stoplicht');
var stoplicht2 = document.getElementById('stoplicht2');
var stoplicht3 = document.getElementById('stoplicht3');
var stoplicht4 = document.getElementById('stoplicht4');

stoplicht.style.position = 'absolute';
stoplicht.style.left = '720px';
stoplicht.style.top = '510px';

stoplicht2.style.position = 'absolute';
stoplicht2.style.left = '490px';
stoplicht2.style.top = '280px';

stoplicht3.style.position = 'absolute';
stoplicht3.style.left = '450px';
stoplicht3.style.top = '510px';

stoplicht4.style.position = 'absolute';
stoplicht4.style.left = '720px';
stoplicht4.style.top = '320px';

function aanzetten() {
    clearTimeout(buitenwerking);
    maakRood();
    werken = setTimeout(maakGeelGeel, 0);
    werken = setTimeout(maakGroen, 2000);
    werken = setTimeout(maakGeel, 4000);
    werken = setTimeout(maakRood, 6000);
    werken = setTimeout(aanzetten, 8000)
}

function knipperen() {
    clearTimeout(werken);
    maakGeel();
    maakGeelGeel();
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
    stoplicht2.src="../foto/verkeer/stoplichtrood2.png";
    stoplicht3.src="../foto/verkeer/stoplichtgroen3.png";
    stoplicht4.src="../foto/verkeer/stoplichtgroen4.png";
    slir_bb = true;
    slir_lr = false;
}

function maakGroen() {
    stoplicht.src="../foto/verkeer/stoplichtgroen.png";
    stoplicht2.src="../foto/verkeer/stoplichtgroen2.png";
    stoplicht3.src="../foto/verkeer/stoplichtrood3.png";
    stoplicht4.src="../foto/verkeer/stoplichtrood4.png";
    slir_bb = false;
    slir_lr = true;
}

function maakGeel() {
    stoplicht.src="../foto/verkeer/stoplichtgeel.png";
    stoplicht2.src="../foto/verkeer/stoplichtgeel2.png";
    slir_bb = false;
}

function maakGeelGeel () {
    stoplicht3.src="../foto/verkeer/stoplichtgeel3.png";
    stoplicht4.src="../foto/verkeer/stoplichtgeel4.png";
    slir_lr = false;
}

function zetUit() {
    stoplicht.src="../foto/verkeer/stoplichtuit.png";
    stoplicht2.src="../foto/verkeer/stoplichtuit2.png";
    stoplicht3.src="../foto/verkeer/stoplichtuit3.png";
    stoplicht4.src="../foto/verkeer/stoplichtuit4.png";
}


/*---------------------------------------------------------------------------------------onder is voor stoppende auto's*/

function starten() {/*auto van beneden naar boven*/
    if (slir_bb === true && auto.style.top === 540 + 'px'){
        auto.style.top = parseInt(auto.style.top) - 'px';
    }
    else{
        auto.style.top = parseInt(auto.style.top) - 5 + 'px';
    }

/*auto van boven naar beneden */
    if (slir_bb === true && auto2.style.bottom === 450 + 'px'){
        auto2.style.bottom = parseInt(auto2.style.bottom) - 'px';
    }
    else{
        auto2.style.bottom = parseInt(auto2.style.bottom) - 5 +'px';
    }

/*auto van links naar rechts*/
    if (slir_lr === true && auto3.style.left === 415 + 'px'){
        auto3.style.left = parseInt(auto.style.left) - 'px';
    }
    else{
        auto3.style.left = parseInt(auto3.style.left) + 5 + 'px';
    }
/*auto van rechts naar links*/
    if (slir_lr === true && auto4.style.right === 600 + 'px'){
        auto4.style.right = parseInt(auto4.style.right) - 'px';
    }
    else{
        auto4.style.right = parseInt(auto4.style.right) + 5 + 'px';
    }

    rijden = setTimeout(starten,10);
}


