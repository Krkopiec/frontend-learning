(function(window) {
    'use strict';
    var SELEKTOR_FORMULARZ = '[data-zamowienie="formularz"]';
    var Aplikacja = window.Aplikacja;
    var Furgonetka = Aplikacja.Furgonetka;
    var BazaDanych = Aplikacja.BazaDanych;
    var ObslugaFormularza = Aplikacja.ObslugaFormularza;
    var mojaFurgonetka = new Furgonetka('ncc-1701', new BazaDanych());
    window.mojaFurgonetka = mojaFurgonetka;
    var obslugaFormularza = new ObslugaFormularza(SELEKTOR_FORMULARZ);
    obslugaFormularza.dodajObslugeWysylki(
        mojaFurgonetka.zlozZamowienie.bind(mojaFurgonetka));
    console.log(obslugaFormularza);
})(window);