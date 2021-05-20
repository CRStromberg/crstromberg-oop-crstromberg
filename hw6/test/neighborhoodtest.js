const assert = require('assert');
const chai = require('chai');
const { isMainThread } = require('worker_threads');
const { City }  = require('../city');

const expect = chai.expect;
const assertEq = assert.deepStrictEqual

describe('City', function() {
    describe('Neighborhood', function() {
        it('good', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 1000;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name);
            assertEq(city._neighborhood._education, education);
            assertEq(city._neighborhood._sqMiles, sqMiles);
        });
    });
});

describe('City', function() {
    describe('Neighborhood', function() {
        it('bad square miles', function() {
            try {
                const size = 0.86;
                const name = "Ouray";
                const population = 1000;
                const sqMiles = -.25;
                const education = "Highschool";
                const city = new City(sqMiles, education, size, name);
                
            } catch(e) {
                assertEq(e.message, 'Error, Square Miles Must Be Positive');
            }
        });
    });
});

describe('City', function() {
    describe('Neighborhood', function() {
        it('bad education', function() {
            try {
                const size = 0.86;
                const name = "Ouray";
                const population = 1000;
                const sqMiles = .25;
                const education = "Clown College";
                const city = new City(sqMiles, education, size, name);
                
            } catch(e) {
                assertEq(e.message, 'Error, Incorrect Education');
            }
        });
    });
});