(function(window) {
    'use strict';

    var Aplikacja = window.Aplikacja || {};
    var $ = window.jQuery;

    function ListaZamowien(selektor) {
        if (!selektor) {
            throw new Error('Brak selektora');
        }
        this.$element = $(selektor);
        if (this.$element.length === 0) {
            throw new Error('Brak elementów odpowiadających selektorowi: ' + selektor);
        }
    }

    ListaZamowien.prototype.dodajObslugeKlikniecia = function(fn) {
        this.$element.on('click', 'input', function(zdarzenie) {
            var email = zdarzenie.target.value;
            this.usunWiersz(email);
            fn(email);
        }.bind(this));
    }

    ListaZamowien.prototype.dodajWiersz = function(zamowienie) {
        this.usunWiersz(zamowienie.adresEmail);
        var elementWiersza = new Wiersz(zamowienie);
        this.$element.append(elementWiersza.$element);        
    }

    ListaZamowien.prototype.usunWiersz = function(email) {
        this.$element
                .find('[value="' + email + '"]')
                .closest('[data-zamowienie="poleWyboru"]')
                .remove();
    }

    function Wiersz(zamowienie) {
        var $div = $('<div></div>', {
            'data-zamowienie': 'poleWyboru',
            'class': 'checkbox'
        });
        var $etykieta = $('<label></label>');
        var $poleWyboru = $('<input></input>', {
            type: 'checkbox',
            value: zamowienie.adresEmail
        });
        var opis = zamowienie.wielkosc + ' ';
        if (zamowienie.smak) {
            opis += zamowienie.smak + ' ';
        }
        opis += zamowienie.kawa + ', ';
        opis += '(' + zamowienie.adresEmail + ')';
        opis += '[' + zamowienie.moc + 'x]';

        $etykieta.append($poleWyboru);
        $etykieta.append(opis);
        $div.append($etykieta);

        this.$element = $div;
    }

    Aplikacja.ListaZamowien = ListaZamowien;
    window.Aplikacja = Aplikacja;
})(window);