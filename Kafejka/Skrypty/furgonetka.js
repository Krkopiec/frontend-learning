(function(window){
    'use strict';
    var Aplikacja = window.Aplikacja || {};
    function Furgonetka(identyfikator, bazadanych) {
        this.identyfikator = identyfikator;
        this.bazadanych = bazadanych;
    }
    Furgonetka.prototype.zlozZamowienie = function(zamowienie) {
        console.log('Złóż zamówienie dla ' + zamowienie.email);
        return this.bazadanych.dodaj(zamowienie.email, zamowienie);
    };
    Furgonetka.prototype.zrealizujZamowienie = function(idklienta) {
        console.log('Zrealizowane zamówienie dla' + idklienta);
        return this.bazadanych.usun(idklienta);
    };
    Furgonetka.prototype.drukujZamowienia = function(funkcjaDrukujaca) {
        return this.bazadanych.pobierzWszystkie().then(function(zamowienie){
        var tablicaKlientow = Object.keys(zamowienie);
        console.log('Furgonetka nr ' + this.identyfikator + ' ma niezealizowane zmówienie: ');
        tablicaKlientow.forEach(function(identyfikator) {
            console.log(zamowienie[id]);
            if(funkcjaDrukujaca) {
                funkcjaDrukujaca(zamowienie[id]);
            }
        }.bind(this));
        }.bind(this));
    };
    Aplikacja.Furgonetka = Furgonetka;
    window.Aplikacja = Aplikacja;
})(window);