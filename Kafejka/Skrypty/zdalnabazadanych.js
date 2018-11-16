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
        return $.post(this.sciezkaUrl, wartosc, function(odpowiedzSerwera){
            console.log(odpowiedzSerwera);
        });
    };
    ZdalnaBazaDanych.prototype.pobierzWszystko = function(fzwr) {
        return $.get(this.sciezkaUrl, function(odpowiedzSerwera){
            if(fzwr) {
            console.log(odpowiedzSerwera);
            fzwr(odpowiedzSerwera);
            }
        });
    };
    ZdalnaBazaDanych.prototype.pobierz = function(klucz, fzwr) {
        return $.get(this.sciezkaUrl + '/' + klucz, function(odpowiedzSerwera){
            if(fzwr) {
            console.log(odpowiedzSerwera);
             fzwr(odpowiedzSerwera);
            }
        });
    };
    ZdalnaBazaDanych.prototype.usun = function(klucz) {
        return $.ajax(this.sciezkaUrl + '/' + klucz , {
            type: 'DELETE'
        });
    };
    Aplikacja.ZdalnaBazaDanych = ZdalnaBazaDanych;
    window.Aplikacja = Aplikacja;
})(window)