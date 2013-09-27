//Take a string and returns that string in reversed order
var stringReverse = function(text) {
    var reversed = '';
    
    for (var i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    
    return reversed;
}

//Compares elements of an array with a set length and returns a list of all that are longer
var stringCompare = function(fragments, length) {
    var matching = [];
    
    for (var i = 0; i < fragments.length; i++) {
        if (fragments[i].length > length) {
            matching += fragments[i];
        }
        
    return matching;
    }

//Returns a greeting based on the current time
var greeting = function() {
    var now = new Date();
    var nowHours = now.getHours() + 1;
    
    if (nowHours >= 1 && nowHours < 12) {
        return 'Good morning';
    }
    else if (nowHours >= 12 && nowHours < 6) {
        return 'Good afternoon';
    }
    else {
        return 'Good evening';
    }
}

//Takes a monetary value and returns the bills/coins needed for that amount
var cashRegister = function(amount) {
    var sorted = {
        'Fives': 0,
        'Ones': 0,
        'Quarters': 0,
        'Dimes': 0,
        'Nickels': 0,
        'Pennies': 0
    }
    
    while (amount - 5 >= 0) {
        amount -= 5;
        sorted.Fives++;
    }
    
    while (amount - 1 >= 0) {
        amount -= 1;
        sorted.Ones++;
    }
    
    while (amount - 0.25 >= 0) {
        amount -= 0.25;
        sorted.Quarters++;
    }
    
    while (amount - 0.10 >= 0) {
        amount -= 0.10;
        sorted.Dimes++;
    }
    
    while (amount - 0.05 >= 0) {
        amount -= 0.05;
        sorted.Nickels++;
    }
    
    while (amount - 0.01 >= 0) {
        amount -= 0.01;
        sorted.Pennies++;
    }
    
    return sorted;
}