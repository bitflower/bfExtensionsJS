/**
 * bitflower: jQuery Extensions
 * Version: 1.1
 * Author: Matthias Max
 * Copyright bitflower 2014
 */
 
 /* Selector extension for invisible elements via opacity 
 Example: var $invisible = $("a:opacity(0)");
 */
$.extend($.expr[':'], {
    opacity: function(elem, i, attr){
      return( $(elem).css("opacity") === attr[3] + '' );
    }
});

 /* Selector extension for invisible elements via visibility
 Example: var $invisible = $("a:visibility(hidden)");
 */
$.extend($.expr[':'], {
    visibility: function(elem, i, attr){
      return( $(elem).css("visibility") === attr[3] + '' );
    }
});

/* Javascript Object extension to get the amount of attributes an object has */
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

/* STRING endsWith Methode */
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

/* NUMBER: isNumber */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}