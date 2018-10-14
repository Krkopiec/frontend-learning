(function(window) {
    'use strict';
    var Aplikacja = window.Aplikacja;
    var Furgonetka = Aplikacja.Furgonetka;
    var BazaDanych = Aplikacja.BazaDanych;
    var mojaFurgonetka = new Furgonetka('ncc-1701', new BazaDanych());
    window.mojaFurgonetka = mojaFurgonetka;
})(window);