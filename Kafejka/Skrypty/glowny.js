(function(window) {
    'use strict';
    var SELEKTOR_FORMULARZ = '[data-zamowienie="formularz"]';
    var SELEKTOR_LISTA_ZAMOWIEN = '[data-zamowienie="listaZamowien"]';

    var Aplikacja = window.Aplikacja;
    var Furgonetka = Aplikacja.Furgonetka;
    var BazaDanych = Aplikacja.BazaDanych;
    var ObslugaFormularza = Aplikacja.ObslugaFormularza;
    var Weryfikacja = Aplikacja.Weryfikacja;
    var ListaZamowien = Aplikacja.ListaZamowien;
    
    var mojaFurgonetka = new Furgonetka('ncc-1701', new BazaDanych());
    window.mojaFurgonetka = mojaFurgonetka;
    var listaZamowien = new ListaZamowien(SELEKTOR_LISTA_ZAMOWIEN);
    listaZamowien.dodajObslugeKlikniecia(
        mojaFurgonetka.zrealizujZamowienie.bind(mojaFurgonetka));
    var obslugaFormularza = new ObslugaFormularza(SELEKTOR_FORMULARZ);
    obslugaFormularza.dodajObslugeWysylki(
        function(dane) {
            mojaFurgonetka.zlozZamowienie.call(mojaFurgonetka, dane);
            listaZamowien.dodajWiersz.call(listaZamowien, dane);
    });
    obslugaFormularza.dodajObslugeZnaku(Weryfikacja.czyAdresFirmowy);
})(window);