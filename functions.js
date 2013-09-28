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
    var matchingIndex = 0;
    
    for (var i = 0; i < fragments.length; i++) 
    {
        if (fragments[i].length > length) 
        {
            matching[matchingIndex] = fragments[i];
            matchingIndex++;
        }
    }
        
    return matching;
};

//Returns a greeting based on the current time
var greeting = function() 
{
    var now = new Date();
    var nowHours = now.getHours() + 1;
    
    if ((nowHours >= 1) && (nowHours < 12)) 
    {
        return 'Good morning';
    }
    else if ((nowHours >= 12) && (nowHours < 18)) 
    {
        return 'Good afternoon';
    }
    else 
    {
        return 'Good evening';
    }
};

//Takes a monetary value and returns the bills/coins needed for that amount
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
};

//Converts elements of an array into objects and sorts them by year
var movieSort = function(movies) 
{
    var sorted = [];
    
    for (var i = 0; i < movies.length; i++) 
    {
        var splitItem = movies[i].split(',');
        var splitObject = 
        {
            'Title': splitItem[0],
            'Year': splitItem[1],
            'Votes': splitItem[2]
        }
        sorted.push(splitObject);
    }
    
    function sortYear(a, b)
    {
        if (a.Year === b.Year) 
        {
            return 0;
        }
        else if (a.Year > b.Year) 
        {
            return 1;
        }
        return -1;
    };
    
    sorted.sort(sortYear);
    
    return sorted;
};

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
output.insertAdjacentHTML('beforeend', '<span class="test">Cash Register Test:</span> ' + JSON.stringify(cash, null, 5) + '<br />');

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
output.insertAdjacentHTML('beforeend', '<span class="test">Movie Sort Test:</span> ' + JSON.stringify(itemSort, null, 5));