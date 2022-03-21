angular.module('br-number', [])
    .filter('numero', [ '$filter', '$locale', function ($filter, $locale) {
        var currency = $filter('currency'), formats = $locale.NUMBER_FORMATS;
        return function (amount, symbol) {
            var value = currency(amount, symbol);
            return value.replace('.', ',').replace('$','');
        } 
    }]);