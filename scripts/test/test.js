const expect = require('chai').expect;
const func = require('../index');

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
    });
    
});

