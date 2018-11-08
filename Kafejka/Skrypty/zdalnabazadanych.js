(function(window) {
    'use strict'
    var Aplikacja = window.Aplikacja || {};
    var $ = window.jQuery;
    function ZdalnaBazaDanych(url) {
        if(!url) {
            throw new Error('Brak scieżki URL.')
        }
        this.sciezkaUrl = url;
    }
    ZdalnaBazaDanych.prototype.dodaj = function(klucz, wartosc) {
        $.post(this.sciezkaUrl, wartosc, function(odpowiedzSerwera){
            console.log(odpowiedzSerwera);
        });
    };
    ZdalnaBazaDanych.prototype.pobierzWszystko = function(fzwr) {
        $.get(this.sciezkaUrl, function(odpowiedzSerwera){
            console.log(odpowiedzSerwera);
            fzwr(odpowiedzSerwera);
        });
    };
    ZdalnaBazaDanych.prototype.pobierz = function(klucz, fzwr) {
        $.get(this.sciezkaUrl + '/' + klucz, function(odpowiedzSerwera){
            console.log(odpowiedzSerwera);
            fzwr(odpowiedzSerwera);
        });
    };
    ZdalnaBazaDanych.prototype.usun = function(klucz) {
        $.ajax(this.sciezkaUrl + '/' + klucz , {
            type: 'DELETE'
        });
    };
    Aplikacja.ZdalnaBazaDanych = ZdalnaBazaDanych;
    window.Aplikacja = Aplikacja;
})(window)