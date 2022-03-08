angular.module('br-number', [])
        .filter('numero', ['$filter', '$locale', function ($filter, $locale) {
                var currency = $filter('currency'), formats = $locale.NUMBER_FORMATS;
                return function (amount) {
                    var value = currency(amount, '');
                    if (!value) {
                        return 0;
                    } else {
                        return value.replace('.', '++').replace(',', '.').replace('++', ',');
                    }
                };
            }])
        .filter('inteiro', ['$filter', '$locale', function ($filter, $locale) {
                var currency = $filter('currency'), formats = $locale.NUMBER_FORMATS;
                return function (amount) {
                    var value = currency(amount, '');
                    if (!value) {
                        return 0;
                    } else {
                        return value * 1;
                    }
                };
            }]);