(function (window) {
    'use strict'
    var Aplikacja = window.Aplikacja || {};
    var $ = window.jQuery;
    function ListaZamowin(selektor) {
        if (!selektor) {
            throw new Error('Brak selektora');
        }
        this.$element = $(selektor);
        if (this.$element.lenght === 0) {
            throw new Error('Brak elementu odpowiadającego selektorowi:' + selektor);
        }
    }
    ListaZamowin.prototype.dodajObslugeKlikniecia = function(fn) {
        this.element.on('click', 'input', function(zdarzenie) {
            var email = event.target.value;
            this.usunWiersz(email);
            fn(email);
        }.bind(this));
    };
    ListaZamowin.prototype.dodajWiersz = function(zamowienie) {
        this.usunWiersz(zamowienie.adresEmail);
        var elementWiersza = new Wiersz(zamowienie);
        this.element.append(elementWiersza.$element);
    };
    ListaZamowin.prototype.usunWiersz = function(email) {
        this.$element
        .find('[value="'+ email + '"]')
        .closest('[data-zamowienie="poleWyboru"]')
        .remove();
    };
    function Wiersz(zamowienie) {
        var $div = $('<div></div>', {
            'data-zamowienie': 'poleWyboru',
            'class':'checbox'
        });
        var $etykieta = $('<label></label>');
        var $poleWyboru = $('<input></input>', {
            type: 'checkbox',
            value: zamowienie.adresEmail
        });
        var opis = zamowienie.wielkosc + '';
        if (zamowieni.smak) {
            opis += zamowienie.smak + '';
        }
        opis += zamowieni.kawa + ',';
        opis += ' (' + zamowienie.adresEmail + ')';
        opis += '[' + zamowienie.moc + 'x]';
        $etykieta.append($poleWyboru);
        $etykieta.append(opis);
        $div.append($etykieta);
        this.element = $div;
    }
    Aplikacja.ListaZamowin =ListaZamowin;
    window.Aplikacja = Aplikacja;
})(window);