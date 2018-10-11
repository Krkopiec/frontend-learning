var SELEKTOR_DUZEGO_OBRAZU = '[data-typ-obrazu="cel"]';
var SELEKTOR_TYTUL_OBRAZU = '[data-typ-obrazu="tytul"]';
var SELEKTOR_RAMKI_OBRAZU = '[data-typ-obrazu="ramka"]';
var SELEKTOR_MINIATURY = '[data-typ-obrazu="wyzwalacz"]';
var KLASA_UKRYTY_DUZY_OBRAZ = 'ukryty-duzy-obraz';
var REGULA_MALEGO_OBRAZU = 'bardzo-maly-obraz';
var KLAWISZ_ESC = 27;

function zmienobraz(urlObrazu, tekstTutul) {
    'use strict';
    var duzyObraz = document.querySelector(SELEKTOR_DUZEGO_OBRAZU);
    duzyObraz.setAttribute('src', urlObrazu);
    var tytulObrazu = document.querySelector(SELEKTOR_TYTUL_OBRAZU);
    tytulObrazu.textContent = tekstTutul;
}

function obrazMiniatury(miniatura) {
    'use strict';
    return miniatura.getAttribute('data-url-obrazu');
}

function tytulMiniatury(miniatura) {
    'use strict';
    return miniatura.getAttribute('data-tytul-obrazu');
}

function zmienObrazNaPodstMiniatury(miniatura) {
    'use strict';
    zmienobraz(obrazMiniatury(miniatura), tytulMiniatury(miniatura));
    
}

function dodajObslugeKliknieciaMiniatury(miniatura) {
    'use strict';
    miniatura.addEventListener('click', function(zdarzenie) {
        zdarzenie.preventDefault();
        zmienObrazNaPodstMiniatury(miniatura);
        pokazDuzyObraz();
    });
}
function odczytajTabliceMiniatur () {
    'use strict';
    var miniatury = document.querySelectorAll(SELEKTOR_MINIATURY);
    var tablicaMiniatur = [].slice.call(miniatury);
    return tablicaMiniatur;
}
function ukryjDuzyObraz() {
    'use strict';
    document.body.classList.add(KLASA_UKRYTY_DUZY_OBRAZ);
}
function pokazDuzyObraz () {
    'use strict';
    var ramka = document.querySelector(SELEKTOR_RAMKI_OBRAZU);
    document.body.classList.remove(KLASA_UKRYTY_DUZY_OBRAZ);
    ramka.classList.add(REGULA_MALEGO_OBRAZU);
    setTimeout(function(){
        ramka.classList.remove(REGULA_MALEGO_OBRAZU);
    }, 50);
}
function dodajObslugeKlawiszy() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode === KLAWISZ_ESC) {
            ukryjDuzyObraz();
        }
    })
}
function inicjujZdarzenia() {
    'use strict';
    var miniatury = odczytajTabliceMiniatur();
    miniatury.forEach(dodajObslugeKliknieciaMiniatury);
    dodajObslugeKlawiszy();    
    };
    inicjujZdarzenia();

