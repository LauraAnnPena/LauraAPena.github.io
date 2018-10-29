function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (Object.prototype.toString.call(value) === '[object Array]') {
        return 'array';
    }
    else if (Object.prototype.toString.call(value) === '[object Object]') {
        return 'object';
    }    
    else if (Object.prototype.toString.call(value) === '[object Null]') {
        return 'null';
    }  
    else if (Object.prototype.toString.call(value) === '[object Date]') {
        return 'date';
    } 
    else {
        return typeof(value);
    }
    
    // YOUR CODE ABOVE HERE //
}