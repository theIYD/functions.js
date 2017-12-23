const expect = require('chai').expect;
const assert = require('chai').assert;
const func = require('../../src/index');

const isANumber = num => typeof input !== NaN;

describe('functions.js', () => {
    describe('strings', () => {
        it('(camelize) should return a string', () => {
            expect(func.StringFunc.Camelize('functions.js is awesome')).to.be.a('string');
        });

        it('(ISO8601WeekNumber) should return a number', () => {
            const date = new Date();
            expect(func.StringFunc.Date.ISO8601WeekNumber(date)).to.satisfy(isANumber);
        });

        it('(differenceBetweenDates) should return a number', () => {
            const date1 = new Date();
            const date2 = new Date(2018,1,1);
            expect(func.StringFunc.Date.differenceBetweenDates(date1,date2)).to.satisfy(isANumber);
        });

        it('(escape) should return a string', () => {
            expect(func.StringFunc.Escape('<p>Hello World</p>')).to.be.a('string');
        });

        it('(filterFalsy) should return an array', () => {
            expect(func.StringFunc.Filter.filterFalsy([0, 1, true,'Hello', false])).to.be.an('array');
        });

        /**
         * TODO:
         * What if the element does not match ? Do not return null
         */
        it('(filter) should return an array', () => {
            expect(func.StringFunc.Filter.filter([245,356,141], 12)).to.be.an('array');
        });

        it('(fisherYates) should return an array', () => {
            expect(func.StringFunc.Filter.filter([245,356,141,875,965,41])).to.be.an('array');
        });

        it('(generateHexColor) should return a string', () => {
            expect(func.StringFunc.GenerateHexColor()).to.be.a('string').include('#');
        });

        it('(generateRGBColor) should return a string', () => {
            expect(func.StringFunc.GenerateRGBColor()).to.be.a('string').include('rgb');
        });

        it('(guid) should return a string', () => {
            expect(func.StringFunc.GUID(24)).to.be.a('string');
        });

        it('(stringHammingDistance) should return a string', () => {
            expect(func.StringFunc.StringHammingDistance('hello', 'world')).to.satisfy(isANumber);
        });

        it('(hasAtleastOneLowerCaseLetter) should return a boolean', () => {
            assert.isBoolean(func.StringFunc.HasAtleastOneLowerCaseLetter('I AM tHE bOSS'));
        });

        it('(hasAtleastOneUpperCaseLetter) should return a boolean', () => {
            assert.isBoolean(func.StringFunc.HasAtleastOneUpperCaseLetter('i am thE Boss'));
        });

        it('(hexToRGB) should return a string', () => {
            expect(func.StringFunc.HexToRGB('#bdbdbd')).to.be.an('array');
        });

        it('(humanizeNumber) should return a string', () => {
            expect(func.StringFunc.HumanizeNumber(168)).to.be.a('string');
        });

        it('(initials) should return a string', () => {
            expect(func.StringFunc.Initials('John Doe')).to.be.a('string');
        });

        it('(kebabCase) should return a string', () => {
            expect(func.StringFunc.KebabCase('John Doe')).to.be.a('string').include('-');
        });

        it('(removeTags) should return a string', () => {
            expect(func.StringFunc.RemoveTags('<h1>Hello</h1>')).to.be.a('string');
        });

        it('(rgbToHex) should return a string', () => {
            expect(func.StringFunc.RgbToHex(185,164,141)).to.be.a('string').include('#');
        });

        it('(romanize) should return a string', () => {
            expect(func.StringFunc.Romanize(10)).to.be.a('string');
        });

        it('(secureEmail) should return a string', () => {
            expect(func.StringFunc.SecureEmail('test@test123.com')).to.be.a('string').include('*');
        });

        it('(securePassword) should return a string', () => {
            expect(func.StringFunc.SecurePassword('testPassword')).to.be.a('string').include('*');
        });

        it('(snakeCase) should return a string', () => {
            expect(func.StringFunc.SnakeCase('hello world')).to.be.a('string').include('_');
        });

        it('(sortChar) should return a string', () => {
            expect(func.StringFunc.SortChar('michael jordon')).to.be.a('string');
        });

        it('(splitName) should return a string', () => {
            expect(func.StringFunc.SplitName('michael jordon')).to.be.an('array');
        });

        it('(thousandSeperator) should return a string', () => {
            expect(func.StringFunc.ThousandSeperator(150000)).to.be.a('string').include(',');
        });

        it('(trailingAndLeading) should return a string', () => {
            expect(func.StringFunc.TrailingAndLeading([0,0,0,0,5,2,0,1,2,0,1,0,0,0])).to.be.a('string');
        });

        it('(truncate) should return a string', () => {
            expect(func.StringFunc.Truncate('Eat Sleep Code Repeat')).to.be.a('string');
        });

        it('(uuid) should return a string', () => {
            expect(func.StringFunc.UUID()).to.be.a('string');
        });

        it('(vowels) should return a number', () => {
            assert.isNumber(func.StringFunc.CountVowels('America'));
        });

        it('(zerofill) should return a number', () => {
            expect(func.StringFunc.ZeroFill(251, 5)).to.be.a('string');
        });

        describe('the functions which validate strings', () => {
            it('validate methods', () => {
                //isDataURI
                assert.isBoolean(func.StringFunc.IsItADataURI('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />'));
                //isASCII
                assert.isBoolean(func.StringFunc.IsItASCII('sddsds'));
                //isBool
                assert.isBoolean(func.StringFunc.IsItBool('0'));
                //isEmoji
                assert.isBoolean(func.StringFunc.IsItEmoji('❤️'));
                //isEmpty
                assert.isBoolean(func.StringFunc.IsItEmpty(''));
                //isEndWith
                assert.isBoolean(func.StringFunc.IsItEndWith('john doe', 'do'));
                //isEquals
                assert.isBoolean(func.StringFunc.IsItEquals('Mike', 'mike'));
                //isHexColor
                assert.isBoolean(func.StringFunc.IsItHexColor('#000000'));
                //isHexaDecimal
                assert.isBoolean(func.StringFunc.IsItAHexaDecimal('01234D'));
                //isIPAddress
                assert.isBoolean(func.StringFunc.IsItAnIPAddress('192.168.0.1'));
                //isLowerCase
                assert.isBoolean(func.StringFunc.IsItLowerCased('helloworld'));
                //isMACAddress
                assert.isBoolean(func.StringFunc.IsItMACAddress('00-14-22-01-23-45'));
                //isMD5
                assert.isBoolean(func.StringFunc.IsItMD5('5eb63bbbe01eeed093cb22bb8f5acdc3'));
                //isPalindrome
                assert.isBoolean(func.StringFunc.IsItPalindrome('bob'));
                //isUpperCase
                assert.isBoolean(func.StringFunc.IsItUpperCased('Fox'));
                //isValidEmail
                assert.isBoolean(func.StringFunc.IsItAValidEmail('test@test123.com'));
            });
        });
        
    });
    
});

