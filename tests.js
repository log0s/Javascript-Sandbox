describe('Reverse String', function() {  
    it('Should reverse the inputted string', function() {
        var text = 'Test, test, one two';
        expect(stringReverse(text)).to.equal('owt eno ,tset ,tseT');
    });
});

describe('Length Compare', function() {
    it('Should compare an array with a length and return all elements longer than that length', function() {
        var array = ['test1', 'test 2', 'test three'];
        expect(stringCompare(array, 5)).to.deep.equal(['test 2', 'test three']);
    });
});

describe('Greeting', function() {
    it('Should return a greeting depending on the time of day', function() {
        expect(greeting()).to.equal('Good evening');
    });
});

describe('Change Calculation', function() {
    it('Should give the number of each type of currency needed to equal the inputted monetary value', function() {
        var expectedOutput = {
            Fives: 1,
            Ones: 3,
            Quarters: 3,
            Dimes: 2,
            Nickels: 0,
            Pennies: 4
        }
        expect(cashRegister(8.99)).to.deep.equal(expectedOutput);
    });
});

describe('Sort Movies', function() {
    it('Should sort a given list of movies by year', function() {
        var movies = ['The Shawshank Redemption,1994,1043071',
    'The Godfather,1972,732416',
    'The Godfather: Part II,1974,474640',
    'Pulp Fiction,1994,806431',
    'The Dark Knight,2008,1017508',
    '12 Angry Men,1957,255846',
    'Schindler\'s List,1993,528900',
    'The Lord of the Rings: The Return of the King,2003,738931',
    'Fight Club,1999,791186',
    'Star Wars: Episode V - The Empire Strikes Back,1980,503348'],
            expectedOutput = [
                { Title: '12 Angry Men', Year: 1957, Votes: 255846 },
                { Title: 'The Godfather', Year: 1972, Votes: 732416 },
                { Title: 'The Godfather: Part II', Year: 1974, Votes: 474640 },
                { Title: 'Star Wars: Episode V - The Empire Strikes Back', Year: 1980, Votes: 503348 },
                { Title: 'Schindler\'s List', Year: 1993, Votes: 528900 },
                { Title: 'The Shawshank Redemption', Year: 1994, Votes: 1043071 },
                { Title: 'Pulp Fiction', Year: 1994, Votes: 806431 },
                { Title: 'Fight Club', Year: 1999, Votes: 791186 },
                { Title: 'The Lord of the Rings: The Return of the King', Year: 2003, Votes: 738931 },
                { Title: 'The Dark Knight', Year: 2008, Votes: 1017508 }
            ];
        expect(movieSort(movies)).to.deep.equal(expectedOutput);
    });
});