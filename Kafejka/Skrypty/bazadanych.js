(function(window) {
    'use strict';
    var Aplikacja = window.Aplikacja || {};
    var Obietnica = window.Promise;

    function BazaDanych() {
        this.dane = {};
    }
    function akceptacjaObietnicy(wartosc) {
        var obietnica = new Promise(function(akceptuj, odrzuc){
            akceptuj(wartosc);
        });
        return obietnica;
    }

    BazaDanych.prototype.dodaj = function(klucz, wartosc) {
        return akceptacjaObietnicy(null);
    }

    BazaDanych.prototype.pobierz = function(klucz) {
        return akceptacjaObietnicy(this.dane[klucz]);
    }

    BazaDanych.prototype.pobierzWszystkie = function() {
        return akceptacjaObietnicy(this.dane);
    }

    BazaDanych.prototype.usun = function(klucz) {
        delete akceptacjaObietnicy(null);
    }
    
    Aplikacja.BazaDanych = BazaDanych;
    window.Aplikacja = Aplikacja;
})(window);