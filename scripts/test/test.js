const func = require('../../src/index');
const expect = require('chai').expect;

describe('start functions.js', () => {
    describe('strings', () => {
        const stringFunc = func.StringFunc;

        describe('function_name: anagram', () => {
            it('should return true for words Listen & Silent', () => {
                expect(stringFunc.Anagram('listen', 'silent')).to.be.true;
            });

            it('should return false for words Hello & World', () => {
                expect(stringFunc.Anagram('hello', 'world')).to.be.false;
            });
        });

        describe('function_name: camelize', () => {
            it('should return the required statement(i.e helloWorld)', () => {
                expect(stringFunc.Camelize('Hello World')).to.be.eql('helloWorld');
            });

            it('should return the required statement(i.e googleIsAwesome)', () => {
                expect(stringFunc.Camelize('google is awesome')).to.be.eql('googleIsAwesome');
            });
        });

        describe('function_name: differenceBetweenDates', () => {
            let date = new Date(2017,12,26); let date1 = 0;
            it('should return the number 6', () => {
                date1 = new Date(2018,01,01)
                expect(stringFunc.Date.differenceBetweenDates(date,date1)).to.be.eql(6);
            });

            it('should return the number 6', () => {
                date = new Date("December 26, 2017 00:00:00");
                date1 = new Date('January 01, 2018 00:00:00');
                expect(stringFunc.Date.differenceBetweenDates(date,date1)).to.be.eql(6);
            });
        });

        describe('function_name: ISO8601WeekNumber', () => {
            let date = new Date();
            it('should return the number 52', () => {
                expect(stringFunc.Date.ISO8601WeekNumber(date)).to.be.eql(52);
            });
        });

        describe('function_name: escape', () => {
            it('should return the required statement(i.e &lt;h1&gt;Header One&lt;/h1&gt;)', () => {
                expect(stringFunc.Escape('<h1>Header One</h1>')).to.be.eql('&lt;h1&gt;Header One&lt;/h1&gt;');
            });
        });

        describe('function_name: filterFalsy', () => {
            it('should return an array with [5,66,8,9]', () => {
                expect(stringFunc.Filter.filterFalsy([false,5,66,0,8,9,null])).to.be.eql([5,66,8,9]);
            });
        });

        describe('function_name: filter', () => {
            it('should return an array with [20]', () => {
                expect(stringFunc.Filter.filter([5,20,66,88,90,85], 20)).to.be.eql([20]);
            });
        });

        describe('function_name: fisherYates', () => {
            it('should return an array with shuffled elements', () => {
                expect(stringFunc.FisherYates.fisherYates([100,40,60,80,20])).to.be.an('array');
            });
        });

        describe('function_name: generateHexColor', () => {
            it('should return a random hex color', () => {
                expect(stringFunc.GenerateHexColor()).to.be.an('string');
            });
        });

        describe('function_name: generateRGBColor', () => {
            it('should return a random RGB color', () => {
                expect(stringFunc.GenerateRGBColor()).to.be.an('string');
            });
        });

        describe('function_name: guid', () => {
            it('should return a random guid', () => {
                expect(stringFunc.GUID(15)).to.be.an('string').length(15);
            });
        });

        describe('function_name: stringHammingDistance', () => {
            it('should return the number 54', () => {
                expect(stringFunc.StringHammingDistance('Hello', 'World')).to.be.eql(54);
            });
        });

        describe('function_name: hasAtleastOneLowerCaseLetter', () => {
            it('should return true for the word(EARTh)', () => {
                expect(stringFunc.HasAtleastOneLowerCaseLetter('EARTh')).to.be.true;
            });
        });

        describe('function_name: hasAtleastOneUpperCaseLetter', () => {
            it('should return true for the word(eartH)', () => {
                expect(stringFunc.HasAtleastOneLowerCaseLetter('eartH')).to.be.true;
            });
        });

        describe('function_name: hexToRGB', () => {
            it('should return a string with the required rgb color', () => {
                expect(stringFunc.HexToRGB('#fc3')).to.be.an('array').eql([255,204,51]).length(3);
            });
        });

        describe('function_name: humanizeNumber', () => {
            it('should return a string(125th)', () => {
                expect(stringFunc.HumanizeNumber(125)).to.be.a('string').eql('125th');
            });
        });

        describe('function_name: initials', () => {
            it('should return a string(JD)', () => {
                expect(stringFunc.Initials('John Doe')).to.be.a('string').eql('JD');
            });
        });

        describe('validation methods', () => {
           describe('function_name: isASCII', () => {
             it('should return true for the string(i.e Hi)', () => {
                expect(stringFunc.IsItASCII('Hi')).to.be.true;
             });
           });

           describe('function_name: isBool', () => {
             it('should return true for the string(i.e false)', () => {
                expect(stringFunc.IsItBool('false')).to.be.true;
             });
           });

           describe('function_name: isDataURI', () => {
             it('should return true for the string(i.e data:text/plain;charset=utf-8;base64,SGVsbG8gV29ybGQ=)', () => {
                expect(stringFunc.IsItADataURI('data:text/plain;charset=utf-8;base64,SGVsbG8gV29ybGQ=')).to.be.true;
             });
           });

           describe('function_name: isEmoji', () => {
             it('should return true for the string(i.e ❤️)', () => {
                expect(stringFunc.IsItEmoji('❤️')).to.be.true;
             });
           });

           describe('function_name: isEmpty', () => {
             it('should return true for the string to be empty', () => {
                expect(stringFunc.IsItEmpty('')).to.be.true;
             });
           });

           describe('function_name: isEndWith', () => {
             it('should return true for the string to be ending with (boy)', () => {
                expect(stringFunc.IsItEndWith('Good Boy', 'Boy')).to.be.true;
             });
           });

           describe('function_name: isEquals', () => {
             it('should return true for the string to be equal to (cat)', () => {
                expect(stringFunc.IsItEndWith('cat', 'cat')).to.be.true;
             });
           });

           describe('function_name: isHexaDecimal', () => {
             it('should return true for the string to be equal to (EF12D5)', () => {
                expect(stringFunc.IsItAHexaDecimal('EF12D5')).to.be.true;
             });
           });

           describe('function_name: isHexColor', () => {
             it('should return true for the string to be equal to (#000000)', () => {
                expect(stringFunc.IsItHexColor('#000000')).to.be.true;
             });
           });

           describe('function_name: isIPAddress', () => {
             it('should return true for the string to be equal to (192.168.0.1)', () => {
                expect(stringFunc.IsItAnIPAddress('192.168.0.1')).to.be.true;
             });
           });

           describe('function_name: isLowerCase', () => {
             it('should return true for the string to be equal to (moon)', () => {
                expect(stringFunc.IsItLowerCased('moon')).to.be.true;
             });
           });

           describe('function_name: isUpperCase', () => {
             it('should return true for the string to be equal to (JUPITER)', () => {
                expect(stringFunc.IsItUpperCased('JUPITER')).to.be.true;
             });
           });

           describe('function_name: isMACAddress', () => {
             it('should return true for the string to be equal to (00:0a:95:9d:68:16)', () => {
                expect(stringFunc.IsItMACAddress('00:0a:95:9d:68:16')).to.be.true;
             });
           });

           describe('function_name: isMD5', () => {
             it('should return true for the string to be equal to (b10a8db164e0754105b7a99be72e3fe5)', () => {
                expect(stringFunc.IsItMD5('b10a8db164e0754105b7a99be72e3fe5')).to.be.true;
             });
           });

           describe('function_name: isPalindrome', () => {
             it('should return true for the string to be equal to (BOB)', () => {
                expect(stringFunc.IsItPalindrome('BOB')).to.be.true;
             });
           });

           describe('function_name: isValidEmail', () => {
             it('should return true for the string to be equal to (test123@test.com)', () => {
                expect(stringFunc.IsItAValidEmail('test123@test.com')).to.be.true;
             });
           });

           describe('function_name: kebabCase', () => {
             it('should return kebabCased string(i.e kebab case function)', () => {
                expect(stringFunc.KebabCase('kebab case function')).to.be.a('string').eql('kebab-case-function');
             });
           });

           describe('function_name: removeTags', () => {
             it('should return a string with HTML tags removed from <h1>Header One</h1>', () => {
                expect(stringFunc.RemoveTags('<h1>Header One</h1>')).to.be.a('string').eql('Header One');
             });
           });

           describe('function_name: reverseInPlace', () => {
             it('should return a string with words replaced (Hi John)', () => {
                expect(stringFunc.ReverseInPlace('Hi John')).to.be.a('string').eql('iH nhoJ');
             });
           });

           describe('function_name: rgbToHex', () => {
             it('should return a hex color string (rgb(182,125,165))', () => {
                expect(stringFunc.RgbToHex(182,125,165)).to.be.a('string').include('#');
             });
           });

           describe('function_name: romanize', () => {
             it('should return a roman number (20)', () => {
                expect(stringFunc.Romanize(20)).to.be.a('string').eql('XX');
             });
           });

           describe('function_name: secureEmail', () => {
             it('should return a secured email (test12345@test.com)', () => {
                expect(stringFunc.SecureEmail('test12345@test.com')).to.be.a('string').include('*');
             });
           });

           describe('function_name: securePassword', () => {
             it('should return a secured password (seerdi171098)', () => {
                expect(stringFunc.SecurePassword('seerdi171098')).to.be.a('string').include('*');
             });
           });

           describe('function_name: snakeCase', () => {
             it('should return a snake cased string (hello everybody)', () => {
                expect(stringFunc.SnakeCase('hello everybody')).to.be.a('string').include('_');
             });
           });

           describe('function_name: sortChar', () => {
             it('should return a alphabetically sorted string (Monsoon Winds)', () => {
                expect(stringFunc.SortChar('Monsoon Winds')).to.be.a('string').eql('dimnnnooossw');
             });
           });

           describe('function_name: splitName', () => {
             it('should return an array with splitted names', () => {
                expect(stringFunc.SplitName('Mike Jordon')).to.be.an('array');
             });
           });

           describe('function_name: thousandSeperator', () => {
             it('should return a string with comma seperated thousand places (130000)', () => {
                expect(stringFunc.ThousandSeperator(130000)).to.be.a('string').eql('130,000').include(',');
             });
           });

           describe('function_name: toTitleCase', () => {
             it('should return a title cased string (how are you ?)', () => {
                expect(stringFunc.ToTitleCase('how are you ?')).to.be.a('string').eql('How Are You ?');
             });
           });

           describe('function_name: trailingAndLeading', () => {
             it('should return an array with leading and trailing zeroes removed ([0,0,0,2,5,6,7,9,5,4,0,0,0,0])', () => {
                expect(stringFunc.TrailingAndLeading([0,0,0,2,5,6,7,9,5,4,0,0,0,0])).to.be.an('string').eql('2567954');
             });
           });

           describe('function_name: truncate', () => {
             it('should return the string with removed position string (Code and Develop)', () => {
                expect(stringFunc.Truncate('Code and Develop', 2)).to.be.an('string').eql('Code and');
             });
           });

           describe('function_name: uuid', () => {
             it('should return a UUID', () => {
                expect(stringFunc.UUID()).to.be.an('string');
             });
           });

           describe('function_name: vowels', () => {
             it('should return the number of vowels in a string (Circle)', () => {
                expect(stringFunc.CountVowels('Circle')).to.be.eql(2);
             });
           });

           describe('function_name: zeroFill', () => {
             it('should return a zerofilled number with the provided length (25)', () => {
                expect(stringFunc.ZeroFill(25,4)).to.be.eql('0025');
             });
           });
        });
    });
});
