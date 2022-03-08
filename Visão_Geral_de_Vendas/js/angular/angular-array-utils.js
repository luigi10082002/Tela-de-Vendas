angular.module('array-utils', [])

	.service('ArrayManager', function () {

		this.key = "";

	    this.insertInArrayIfNotIn = function (aArray, xValue) {
	        aArray = this.createArrayIfNotExist(aArray);
	        if(this.arrayHas(aArray, xValue) >= 0)
	          aArray[this.arrayHas(aArray, xValue)] = xValue;
	        else 
	          aArray.push(xValue);
	        return aArray;
	    };

	    this.removeFromArrayIfExist = function (aArray, xValue) {
	        if(this.arrayHas(aArray, xValue) >= 0)
	          aArray.splice(this.arrayHas(aArray, xValue), 1);
	        return aArray;
	    };

	    this.createArrayIfNotExist = function (aArray) {
	        if(!aArray) aArray = [];
	        return aArray;
	    };

	    this.arrayHas = function (aArray, xValue) {
	        if(aArray.indexOf(xValue) >= 0)
	          return aArray.indexOf(xValue);
	        else
	          return -1;
	    };
        
        

	    this.ordenar = function (aArray, sChave /*, sOrdem*/) {
 			key = sChave;

 			if(arguments[2] == "desc")
                return aArray.sort(this.decrescente);
            else
            	return aArray.sort(this.crescente);

	    };

		this.crescente = function (a, b) {
            if(eval("isNaN(a." + this.key + ");"))
            	return eval("a." + this.key + " < b." + this.key + " ? -1 : a." + this.key + " > b." + this.key + " ? 1 : 0;");
            else
            	return eval("a." + this.key + " - b." + this.key);
        };

        this.decrescente = function (a, b) {
            if(eval("isNaN(a." + this.key + ");"))
				return eval("a." + this.key + " < b." + this.key + " ? 1 : a." + this.key + " > b." + this.key + " ? -1 : 0;");
			else
				return eval("b." + this.key + " - a." + this.key);
        };

        this.toArray = function (obj) {
            return Object.keys(obj).map(function(k) { return obj[k] });
        }
	});