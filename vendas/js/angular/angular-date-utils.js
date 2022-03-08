angular.module('date-utils', [])
	.service('DateProvider', function () {
	    
	    this.date = new Date();

        this.today = function () {
            d = this.date.toLocaleString().split(" ");
            return d[0];
        };

	    this.now = function () {
	        return this.date.toLocaleString();
	    };

        this.getMesAnterior = function () {
            if(!this.date.getMonth())
                return 12;
            else
                return this.date.getMonth() + 1 < 10 ? "0" + (this.date.getMonth() + 1) : this.date.getMonth() + 1; 
        };

        this.getAnoDoMesAnterior = function () {
            if(!this.date.getMonth())
                return this.date.getFullYear() - 1;
            else
                return this.date.getFullYear();
        };
        
        this.getMes = function () {
            return this.date.getMonth() + 1 < 10 ? "0" + (this.date.getMonth() + 1) : this.date.getMonth() + 1; 
        };

        this.getAno = function () {
            return this.date.getFullYear();
        };

	});
