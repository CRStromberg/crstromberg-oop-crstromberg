
const assert = require('assert');
const chai = require('chai');
const { isMainThread } = require('worker_threads');
const { City }  = require('../city');

const expect = chai.expect;
const assertEq = assert.deepStrictEqual

describe('City', function() {
    describe('#constructor', function() {
        it('can be made', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 1000;
            const city = new City(size, name, population);
            assertEq(city.population, population);
            assertEq(city.name, name);
            assertEq(city.size, size);
            assertEq(city.density(), "Town");
        });
    });
});