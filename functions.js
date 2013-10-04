//Takes a string and returns that string in reversed order
var stringReverse = function(text) 
{
    var reversed = '';
    
    for (var i = text.length - 1; i >= 0; i--) 
    {
        reversed += text[i];
    }
    
    return reversed;
};

//Compares elements of an array with a set length and returns a list of all that are longer
var stringCompare = function(fragments, length) 
{
    var matching = [];
    
    for (var i = 0; i < fragments.length; i++) 
    {
        var element = fragments[i];
        
        if (element.length > length) 
        {
            matching.push(element);
        }
    }
        
    return matching;
};

//Returns a greeting based on the current time
var greeting = function() 
{
    var nowHours = (new Date).getHours() + 1;
    
    if ((nowHours >= 1) && (nowHours < 12)) 
    {
        return 'Good morning';
    }
    else if ((nowHours >= 12) && (nowHours < 18)) 
    {
        return 'Good afternoon';
    }
    return 'Good evening';
};

/* Takes a monetary value and returns the bills/coins needed for that amount
    - Old version, replaced with cleaner version with less unnecessary repetition
    
var cashRegister = function(amount) 
{
    var sorted = 
    {
        'Fives': 0,
        'Ones': 0,
        'Quarters': 0,
        'Dimes': 0,
        'Nickels': 0,
        'Pennies': 0
    }
    
    while (amount - 5 >= 0) 
    {
        amount -= 5;
        sorted.Fives++;
    }
    
    while (amount - 1 >= 0) 
    {
        amount -= 1;
        sorted.Ones++;
    }
    
    while (amount - 0.25 >= 0) 
    {
        amount -= 0.25;
        sorted.Quarters++;
    }
    
    while (amount - 0.10 >= 0) 
    {
        amount -= 0.10;
        sorted.Dimes++;
    }
    
    while (amount - 0.05 >= 0) 
    {
        amount -= 0.05;
        sorted.Nickels++;
    }
    
    while (amount - 0.01 >= 0) 
    {
        amount -= 0.01;
        sorted.Pennies++;
    }
    
    return sorted;
}; */

//Updated version of cashRegister function
var cashRegister = function(amount) 
{
    var change = { Fives: 0, Ones: 0, Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0};
    
    var currencyIndex = [ {Name: 'Fives', Value: 5}, {Name: 'Ones', Value: 1}, {Name: 'Quarters', Value: 0.25}, {Name: 'Dimes', Value: 0.10}, {Name: 'Nickels', Value: 0.05}, {Name: 'Pennies', Value: 0.01} ];
    
    for (var i = 0; i < currencyIndex.length; i++)
    {
        var current = currencyIndex[i];
        
        while (amount - current.Value >= 0)
        {
            amount -= current.Value;
            change[current.Name]++;
        }
    }
    
    return change;
};

//Converts elements of an array into objects and sorts them by year
var movieSort = function(movies) 
{
    var sorted = [];
    
    //Splits array elements based on commas and changes them into objects
    for (var i = 0; i < movies.length; i++) 
    {
        var splitItem = movies[i].split(',');
        var splitObject = 
        {
            Title: splitItem[0],
            Year: parseInt(splitItem[1]),
            Votes: parseInt(splitItem[2])
        }
        sorted.push(splitObject);
    }
    
    //Function to pass to .sort()
    function sortYear(movieA, movieB)
    {
        if (movieA.Year === movieB.Year) 
        {
            return 0;
        }
        else if (movieA.Year > movieB.Year) 
        {
            return 1;
        }
        return -1;
    };
    
    sorted.sort(sortYear);
    
    return sorted;
};


/*
//Assign a variable to the output area
var output = document.getElementById('outputArea');
    
//Testing all functions

//stringReverse test
output.insertAdjacentHTML('beforeend', '<span class="test">String Reverse Test:</span> ' + stringReverse('test') + '<br />');

//stringCompare test
var badFrench = ['je', 'souis', 'le', 'fromage'];
output.insertAdjacentHTML('beforeend', '<span class="test">String Compare Test:</span> ' + stringCompare(badFrench, 3) + '<br />');

//greeting test
output.insertAdjacentHTML('beforeend', '<span class="test">Greeting Test:</span> ' + greeting() + '<br />');

//cashRegister test
var cash = cashRegister(8.99);
output.insertAdjacentHTML('beforeend', '<span class="test">Cash Register Test:</span> ' + '<pre>' + JSON.stringify(cash, null, 2) + '</pre> <br />');

//movieSort test
var items = [
    'The Shawshank Redemption,1994,1043071',
    'The Godfather,1972,732416',
    'The Godfather: Part II,1974,474640',
    'Pulp Fiction,1994,806431',
    'The Dark Knight,2008,1017508',
    '12 Angry Men,1957,255846',
    'Schindler\'s List,1993,528900',
    'The Lord of the Rings: The Return of the King,2003,738931',
    'Fight Club,1999,791186',
    'Star Wars: Episode V - The Empire Strikes Back,1980,503348'
];
var itemSort = movieSort(items);
output.insertAdjacentHTML('beforeend', '<span class="test">Movie Sort Test:</span> ' + '<pre>' + JSON.stringify(itemSort, null, 2) + '</pre>');
*/

$(function()
{
    var selected = 'stringReverse';
    var output;
    var input1;
    var input2;
    
    //Toggle selection
    $('#selectors').click(function(event) {
        $('#selectors button').removeClass('btn-primary');
        $(event.target).addClass('btn-primary');
        selected = event.target.id;
    });
    
    //Run selected function
    $('#execute').click(function() {
        input1 = $('#mainInput').val();
        
        switch(selected) {
                case 'stringReverse': 
                    output = stringReverse(input1);
                    break;
                case 'stringCompare':
                    input1 = $('#mainInput').val().split('\n');
                    input2 = parseInt($('#secondaryInput').val());
                    output = stringCompare(input1, input2);
                    break;
                case 'greeting':
                    output = greeting();
                    break;
                case 'cashRegister':
                    output = JSON.stringify(cashRegister(input1), null, 2);
                    break;
                case 'movieSort':
                    input1 = $('#mainInput').val().split('\n');
                    output = JSON.stringify(movieSort(input1), null, 2);
                    break;
        };
        
        $('#mainInput, #secondaryInput').val('');
        
        $('#mainOutput').html('<pre>' + output + '</pre>');
    });
});