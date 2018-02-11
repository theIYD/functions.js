const expect = require('chai').expect;
describe('start functions.js', () => {
    describe('start string function tests', () => {
        const func = require('../../src/Strings/Strings');
        const stringFunc = new func();

        describe('function_name: anagram', () => {
            it('should return true for words Listen & Silent', () => {
                expect(stringFunc.anagram('listen', 'silent')).to.be.true;
            });

            it('should return false for words Hello & World', () => {
                expect(stringFunc.anagram('hello', 'world')).to.be.false;
            });
        });

        describe('function_name: camelize', () => {
            it('should return the required statement(i.e helloWorld)', () => {
                expect(stringFunc.camelize('Hello World')).to.be.eql('helloWorld');
            });

            it('should return the required statement(i.e googleIsAwesome)', () => {
                expect(stringFunc.camelize('google is awesome')).to.be.eql('googleIsAwesome');
            });
        });

        describe('function_name: differenceBetweenDates', () => {
            let date = new Date(2017, 12, 26);
            let date1 = 0;
            it('should return the number 6', () => {
                date1 = new Date(2018, 01, 01)
                expect(stringFunc.differenceBetweenDates(date, date1)).to.be.eql(6);
            });

            it('should return the number 6', () => {
                date = new Date("December 26, 2017 00:00:00");
                date1 = new Date('January 01, 2018 00:00:00');
                expect(stringFunc.differenceBetweenDates(date, date1)).to.be.eql(6);
            });
        });

        describe('function_name: ISO8601WeekNumber', () => {
            let date = new Date('27 December 2017');
            it('should return the number 52', () => {
                expect(stringFunc.ISO8601WeekNumber(date)).to.be.eql(52);
            });
        });

        describe('function_name: escape', () => {
            it('should return the required statement(i.e &lt;h1&gt;Header One&lt;/h1&gt;)', () => {
                expect(stringFunc.escape('<h1>Header One</h1>')).to.be.eql('&lt;h1&gt;Header One&lt;/h1&gt;');
            });
        });

        describe('function_name: filterFalsy', () => {
            it('should return an array with [5,66,8,9]', () => {
                expect(stringFunc.filterFalsy([false, 5, 66, 0, 8, 9, null])).to.be.eql([5, 66, 8, 9]);
            });
        });

        describe('function_name: filter', () => {
            it('should return an array with [20]', () => {
                expect(stringFunc.filter([5, 20, 66, 88, 90, 85], 20)).to.be.eql([20]);
            });
        });

        /*describe('function_name: fisherYates', () => {
            it('should return an array with shuffled elements', () => {
                expect(stringFunc.fisherYates([100,40,60,80,20])).to.be.an('array');
            });
        });*/

        describe('function_name: generateHexColor', () => {
            it('should return a random hex color', () => {
                expect(stringFunc.generateHexColor()).to.be.an('string');
            });
        });

        describe('function_name: generateRGBColor', () => {
            it('should return a random RGB color', () => {
                expect(stringFunc.generateRGBColor()).to.be.an('string');
            });
        });

        describe('function_name: guid', () => {
            it('should return a random guid', () => {
                expect(stringFunc.guid(15)).to.be.an('string').length(15);
            });
        });

        describe('function_name: stringHammingDistance', () => {
            it('should return the number 54', () => {
                expect(stringFunc.stringHammingDistance('Hello', 'World')).to.be.eql(54);
            });
        });

        describe('function_name: hasAtleastOneLowerCaseLetter', () => {
            it('should return true for the word(EARTh)', () => {
                expect(stringFunc.hasAtleastOneLowerCaseLetter('EARTh')).to.be.true;
            });
        });

        describe('function_name: hasAtleastOneUpperCaseLetter', () => {
            it('should return true for the word(eartH)', () => {
                expect(stringFunc.hasAtleastOneLowerCaseLetter('eartH')).to.be.true;
            });
        });

        describe('function_name: hexToRGB', () => {
            it('should return a string with the required rgb color', () => {
                expect(stringFunc.hexToRgb('#fc3')).to.be.an('array').eql([255, 204, 51]).length(3);
            });
        });

        describe('function_name: humanizeNumber', () => {
            it('should return a string(125th)', () => {
                expect(stringFunc.humanizeNumber(125)).to.be.a('string').eql('125th');
            });
        });

        describe('function_name: initials', () => {
            it('should return a string(JD)', () => {
                expect(stringFunc.initials('John Doe')).to.be.a('string').eql('JD');
            });
        });

        describe('validation methods', () => {
            describe('function_name: isASCII', () => {
                it('should return true for the string(i.e Hi)', () => {
                    expect(stringFunc.isASCII('Hi')).to.be.true;
                });
            });

            describe('function_name: isBool', () => {
                it('should return true for the string(i.e false)', () => {
                    expect(stringFunc.isBool('false')).to.be.true;
                });
            });

            describe('function_name: isDataURI', () => {
                it('should return true for the string(i.e data:text/plain;charset=utf-8;base64,SGVsbG8gV29ybGQ=)', () => {
                    expect(stringFunc.isDataURI('data:text/plain;charset=utf-8;base64,SGVsbG8gV29ybGQ=')).to.be.true;
                });
            });

            describe('function_name: isEmoji', () => {
                it('should return true for the string(i.e ❤️)', () => {
                    expect(stringFunc.isEmoji('❤️')).to.be.true;
                });
            });

            describe('function_name: isEmpty', () => {
                it('should return true for the string to be empty', () => {
                    expect(stringFunc.isEmpty('')).to.be.true;
                });
            });

            describe('function_name: isEndWith', () => {
                it('should return true for the string to be ending with (boy)', () => {
                    expect(stringFunc.isEndWith('Good Boy', 'Boy')).to.be.true;
                });
            });

            describe('function_name: isEquals', () => {
                it('should return true for the string to be equal to (cat)', () => {
                    expect(stringFunc.isEndWith('cat', 'cat')).to.be.true;
                });
            });

            describe('function_name: isFunction', () => {
                it('should return true for the value to be (val => return val)', () => {
                    expect(stringFunc.isFunction(val => {
                        return val
                    })).to.be.true;
                });
            });

            describe('function_name: isHexaDecimal', () => {
                it('should return true for the string to be equal to (EF12D5)', () => {
                    expect(stringFunc.isHexaDecimal('EF12D5')).to.be.true;
                });
            });

            describe('function_name: isHexColor', () => {
                it('should return true for the string to be equal to (#000000)', () => {
                    expect(stringFunc.isHexColor('#000000')).to.be.true;
                });
            });

            describe('function_name: isIPAddress', () => {
                it('should return true for the string to be equal to (192.168.0.1)', () => {
                    expect(stringFunc.isIPAddress('192.168.0.1')).to.be.true;
                });
            });

            describe('function_name: isJSON', () => {
                it('should return true for the string to be a JSON object', () => {
                    expect(stringFunc.isJSON('{}')).to.be.true;
                });
            });

            describe('function_name: isLowerCase', () => {
                it('should return true for the string to be equal to (moon)', () => {
                    expect(stringFunc.isLowerCase('moon')).to.be.true;
                });
            });

            describe('function_name: isUpperCase', () => {
                it('should return true for the string to be equal to (JUPITER)', () => {
                    expect(stringFunc.isUpperCase('JUPITER')).to.be.true;
                });
            });

            describe('function_name: isMACAddress', () => {
                it('should return true for the string to be equal to (00:0a:95:9d:68:16)', () => {
                    expect(stringFunc.isMACAddress('00:0a:95:9d:68:16')).to.be.true;
                });
            });

            describe('function_name: isMD5', () => {
                it('should return true for the string to be equal to (b10a8db164e0754105b7a99be72e3fe5)', () => {
                    expect(stringFunc.isMD5('b10a8db164e0754105b7a99be72e3fe5')).to.be.true;
                });
            });

            describe('function_name: isPalindrome', () => {
                it('should return true for the string to be equal to (BOB)', () => {
                    expect(stringFunc.isPalindrome('BOB')).to.be.true;
                });
            });

            describe('function_name: isValidEmail', () => {
                it('should return true for the string to be equal to (test123@test.com)', () => {
                    expect(stringFunc.isValidEmail('test123@test.com')).to.be.true;
                });
            });

            describe('function_name: kebabCase', () => {
                it('should return kebabCased string(i.e kebab case function)', () => {
                    expect(stringFunc.kebabCase('kebab case function')).to.be.a('string').eql('kebab-case-function');
                });
            });

            describe('function_name: removeTags', () => {
                it('should return a string with HTML tags removed from <h1>Header One</h1>', () => {
                    expect(stringFunc.removeTags('<h1>Header One</h1>')).to.be.a('string').eql('Header One');
                });
            });

            describe('function_name: reverseInPlace', () => {
                it('should return a string with words replaced (Hi John)', () => {
                    expect(stringFunc.reverseInPlace('Hi John')).to.be.a('string').eql('iH nhoJ');
                });
            });

            describe('function_name: rgbToHex', () => {
                it('should return a hex color string (rgb(182,125,165))', () => {
                    expect(stringFunc.rgbToHex(182, 125, 165)).to.be.a('string').include('#');
                });
            });

            describe('function_name: romanize', () => {
                it('should return a roman number (20)', () => {
                    expect(stringFunc.romanize(20)).to.be.a('string').eql('XX');
                });
            });

            describe('function_name: secureEmail', () => {
                it('should return a secured email (test12345@test.com)', () => {
                    expect(stringFunc.secureEmail('test12345@test.com')).to.be.a('string').include('*');
                });
            });

            describe('function_name: securePassword', () => {
                it('should return a secured password (seerdi171098)', () => {
                    expect(stringFunc.securePassword('seerdi171098')).to.be.a('string').include('*');
                });
            });

            describe('function_name: snakeCase', () => {
                it('should return a snake cased string (hello everybody)', () => {
                    expect(stringFunc.snakeCase('hello everybody')).to.be.a('string').include('_');
                });
            });

            describe('function_name: sortChar', () => {
                it('should return a alphabetically sorted string (Monsoon Winds)', () => {
                    expect(stringFunc.sortChar('Monsoon Winds')).to.be.a('string').eql('dimnnnooossw');
                });
            });

            describe('function_name: splitName', () => {
                it('should return an array with splitted names', () => {
                    expect(stringFunc.splitName('Mike Jordon')).to.be.an('array');
                });
            });

            describe('function_name: thousandSeperator', () => {
                it('should return a string with comma seperated thousand places (130000)', () => {
                    expect(stringFunc.thousandSeperator(130000)).to.be.a('string').eql('130,000').include(',');
                });
            });

            describe('function_name: toFloat', () => {
                it('should return a float value', () => {
                    expect(stringFunc.toFloat('12.06')).to.be.eql(12.06);
                });
            });

            describe('function_name: toInt', () => {
                it('should return a integer value', () => {
                    expect(stringFunc.toInt('12.06')).to.be.eql(12);
                });
            });

            describe('function_name: toTitleCase', () => {
                it('should return a title cased string (how are you ?)', () => {
                    expect(stringFunc.toTitleCase('how are you ?')).to.be.a('string').eql('How Are You ?');
                });
            });

            describe('function_name: trailingAndLeading', () => {
                it('should return an array with leading and trailing zeroes removed ([0,0,0,2,5,6,7,9,5,4,0,0,0,0])', () => {
                    expect(stringFunc.trailingAndLeading([0, 0, 0, 2, 5, 6, 7, 9, 5, 4, 0, 0, 0, 0])).to.be.an('string').eql('2567954');
                });
            });

            describe('function_name: truncate', () => {
                it('should return the string with removed position string (Code and Develop)', () => {
                    expect(stringFunc.truncate('Code and Develop', 2)).to.be.an('string').eql('Code and');
                });
            });

            describe('function_name: unescape', () => {
                it('should return an unescaped string', () => {
                    expect(stringFunc.unescape('&lt;h6&gt;')).to.be.eql('<h6>');
                });
            });

            describe('function_name: uuid', () => {
                it('should return a UUID', () => {
                    expect(stringFunc.uuid()).to.be.an('string');
                });
            });

            describe('function_name: vowels', () => {
                it('should return the number of vowels in a string (Circle)', () => {
                    expect(stringFunc.countVowels('Circle')).to.be.eql(2);
                });
            });

            describe('function_name: zeroFill', () => {
                it('should return a zerofilled number with the provided length (25)', () => {
                    expect(stringFunc.zeroFill(25, 4)).to.be.eql('0025');
                });
            });
        });
    });
    describe('start math test functions', () => {
        const func = require('../../src/Mathematics/Mathematics');
        const mathFunc = new func();

        function checkNumber(num) {
            return !isNaN(num);
        }
        describe('function_name: average', () => {
            it('should return the average of the array ([5,6,7,8])', () => {
                expect(mathFunc.average([5, 6, 7, 8])).to.satisfy(checkNumber);
            });
        });

        describe('function_name: changeBase', () => {
            it('should return a number with base changed (25)', () => {
                expect(mathFunc.baseChange(25, 10, 16)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: combination', () => {
            it('should return a combination (5)', () => {
                expect(mathFunc.combination(5, 3)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: countPrimeFactors', () => {
            it('should return a combination (5)', () => {
                expect(mathFunc.countPrimeFactors(91)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: digitalRoots', () => {
            it('should return 4 for digital root of 265', () => {
                expect(mathFunc.digitalRoot(265)).to.be.eql(4).to.satisfy(checkNumber);
            });
        });

        describe('function_name: euclideanDistance', () => {
            it('should return the euclidean distance between two points ([5,3], [8,6])', () => {
                expect(mathFunc.euclideanDistance([5, 3], [8, 6])).to.satisfy(checkNumber);
            });
        });

        describe('function_name: fibRecursion', () => {
            it('should return the 8th fibonacci number', () => {
                expect(mathFunc.fibRecursion(8)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: fibDynamic', () => {
            it('should return the 8th fibonacci number', () => {
                expect(mathFunc.fibDynamic(8)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: geometricVariance', () => {
            it('should return the geometric variance provided probability', () => {
                expect(mathFunc.geometricVariance(0.5)).to.be.eql(2).to.satisfy(checkNumber);
            });
        });

        describe('function_name: gcd', () => {
            it('should return the gcd among the two numbers 16 and 48', () => {
                expect(mathFunc.gcd(16, 48)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: hammingDistance', () => {
            it('should return the hamming distance', () => {
                expect(mathFunc.hammingDistance(82, 75)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: isDivisible', () => {
            it('should return true (25,5)', () => {
                expect(mathFunc.isDivisible(25, 5)).to.be.true;
            });
        });

        describe('function_name: isDivisible', () => {
            it('should return true (25,5)', () => {
                expect(mathFunc.isDivisible(25, 5)).to.be.true;
            });
        });

        describe('function_name: isPrime', () => {
            it('should return false (16)', () => {
                expect(mathFunc.isPrime(16)).to.be.false;
            });
        });

        describe('function_name: lcm', () => {
            it('should return LCM of an array ([2,4,6,5])', () => {
                expect(mathFunc.lcm([2, 4, 6, 5])).to.satisfy(checkNumber);
            });
        });

        describe('function_name: median', () => {
            it('should return median of an array ([2,4,6,5,8,7,4])', () => {
                expect(mathFunc.median([2, 4, 6, 5, 8, 7])).to.satisfy(checkNumber);
            });
        });

        describe('function_name: nthRoot', () => {
            it('should return nth root of a positive number (24)', () => {
                expect(mathFunc.nthRoot(24, 3)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: permutation', () => {
            it('should return permutation (10)', () => {
                expect(mathFunc.permutation(10, 4)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: pythagoras distance', () => {
            it('should return the pythagoras distance (10)', () => {
                expect(mathFunc.pythagorasDistance(10, 4)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: round', () => {
            it('should return the rounded value of a number (12.0005)', () => {
                expect(mathFunc.round(12.0005)).to.satisfy(checkNumber);
            });
        });

        describe('function_name: sigmoid', () => {
            it('should return 0.5124973964842104 which is sigmoid of a positive 0.05', () => {
                expect(mathFunc.sigmoid(0.05)).to.be.eql(0.5124973964842103).to.satisfy(checkNumber);
            });

            it('should return 0.22618142573054617 which is sigmoid of -1.23', () => {
                expect(mathFunc.sigmoid(-1.23)).to.be.eql(0.2261814257305462).to.satisfy(checkNumber);
            });
        });

        describe('function_name: slope', () => {
            it('should return the slope of a line using angle of inclination (60)', () => {
                expect(mathFunc.slopeOfALine(60)).to.satisfy(checkNumber);
            });

            it('should return the slope of a line using 2 coordinates ([8,5,13,10])', () => {
                expect(mathFunc.slopeOfALine([8, 5, 13, 10])).to.satisfy(checkNumber);
            });
        });

        describe('function_name: sum', () => {
            it('should return the sum of an array ([8,7,4,1,2])', () => {
                expect(mathFunc.sumOfArray([8, 7, 4, 1, 2])).to.be.eql(22);
            });
        });

        describe('function_name: sineRule', () => {
            it('should return the side of a triangle using sine rule', () => {
                expect(mathFunc.sineRule(5, 60, 45)).to.satisfy(checkNumber)
            });
        });

        describe('function_name: sineRule', () => {
            it('should return the side of a triangle using cosine rule', () => {
                expect(mathFunc.cosineRule(15, 90, 30)).to.satisfy(checkNumber)
            });
        });
    });

    describe('start algorithm function tests', () => {
        const func = require('../../src/Algorithms/Algorithms');
        const algoFunc = new func();

        describe('function_name: binarySearch', () => {
            it('should return the number 3 i.e position of number 2 in the array ([6,5,4,2,3,5])', () => {
                expect(algoFunc.binarySearch([6, 5, 4, 2, 3, 5], 2)).to.be.eql(3);
            });
        });

        describe('function_name: bubbleSort', () => {
            it('should return a sorted array ([6,5,4,2,3,5])', () => {
                expect(algoFunc.bubbleSort([6, 5, 4, 2, 3, 5], 2)).to.be.an('array').eql([2, 3, 4, 5, 5, 6]);
            });
        });

        describe('function_name: chunk', () => {
            it('should return a an array splitted into the mentioned size. ([6,5,4,2,3,5,8,9,4,1])', () => {
                expect(algoFunc.chunk([6, 5, 4, 2, 3, 5, 8, 9, 4, 1], 2)).to.be.an('array');
            });
        });

        describe('function_name: collatz', () => {
            it('should return a Collatz number', () => {
                expect(algoFunc.collatz(4)).to.be.an('array');
            });
        });

        describe('function_name: fisherYates', () => {
            it('should return an array with shuffled elements', () => {
                expect(algoFunc.fisherYates([100,40,60,80,20])).to.be.an('array');
            });
        });

        describe('function_name: flatten', () => {
            it('should return a merged array ([1,2,3,4,5], [6,7,8,9,10])', () => {
                expect(algoFunc.flatten([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).to.be.an('array');
            });
        });

        describe('function_name: insertion sort', () => {
            it('should return a sorted array using Insertion Sort Technique ([6,7,8,9,10])', () => {
                expect(algoFunc.insertionSort([6, 7, 8, 9, 10])).to.be.an('array');
            });
        });

        describe('function_name: linear search', () => {
            it('should return the index of element to be searched ([100,200,300,400,800,900])', () => {
                expect(algoFunc.linearSearch([100, 200, 300, 400, 800, 900], 900)).to.be.eql(5);
            });
        });

        describe('function_name: nthLargest', () => {
            it('should return the nth largest of ([25,12,31,65,0,7,8,100])', () => {
                expect(algoFunc.nthLargest([25, 12, 31, 65, 0, 7, 8, 100], 3)).to.be.eql(31);
            });
        });

        describe('function_name: remove', () => {
            it('should return array with removed element ([8,1,0,8,9,6,0,0,7,2])', () => {
                expect(algoFunc.remove([8, 1, 0, 8, 9, 6, 0, 0, 7, 2], 1)).to.be.an('array');
            });
        });

        describe('function_name: removeDuplicate', () => {
            it('should return array with duplicates removed ([9,8,6,7,6,4,5,2,9,7])', () => {
                expect(algoFunc.removeDuplicates([9, 8, 6, 7, 6, 4, 5, 2, 9, 7])).to.be.an('array');
            });
        });

        describe('function_name: segregate', () => {
            it('should return array with 0\'s and 1\'s segregated ([0,1,0,0,0,1,1,1,0])', () => {
                expect(algoFunc.segregate([0, 1, 0, 0, 0, 1, 1, 1, 0])).to.be.an('array');
            });
        });

        describe('function_name: selectionSort', () => {
            it('should return a sorted array using Selection Sort Technique ([-1,-2,-3,0,1,2])', () => {
                expect(algoFunc.selectionSort([-1, -2, -3, 0, 1, 2])).to.be.an('array');
            });
        });
    });
});