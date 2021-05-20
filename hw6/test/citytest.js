const assert = require('assert');
const chai = require('chai');
const { isMainThread } = require('worker_threads');
const { City }  = require('../city');

const expect = chai.expect;
const assertEq = assert.deepStrictEqual

describe('City', function() {
    describe('constructor', function() {
        it('can be made', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 1000;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name, population);
            assertEq(city._name, name);
            assertEq(city._population, population);
            assertEq(city._size, size);
            assertEq(city._neighborhood._sqMiles, sqMiles);
            assertEq(city._neighborhood._education, education);
        });
    });
});

describe('City', function() {
    describe('new city', function() {
        it('is new true', function() {
            const size = 0.86;
            const name = "Ouray";
            //const population = 1000;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name);
            assertEq(city.isNewCity(), true);
        });
    });
});

describe('City', function() {
    describe('new city', function() {
        it('is new false', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 1000;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name, population);
            assertEq(city.isNewCity(), false);
        });
    });
});

describe('City', function() {
    describe('density', function() {
        it('is town', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 1000;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name, population);
            assertEq(city.density(), "Town");
        });
    });
});

describe('City', function() {
    describe('density', function() {
        it('is City', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 112030;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name, population);
            assertEq(city.density(), "City");
        });
    });
});

describe('City', function() {
    describe('density', function() {
        it('is MegaCity', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 99999999999999999;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name, population);
            assertEq(city.density(), "MegaCity");
        });
    });
});

describe('City', function() {
    describe('get', function() {
        it('population', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 1000;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name, population);
            assertEq(city.getpopulation(), population);
        });
    });
});

describe('City', function() {
    describe('get', function() {
        it('name', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 1000;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name, population);
            assertEq(city.getname(), name);
        });
    });
});

describe('City', function() {
    describe('get', function() {
        it('square miles', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 1000;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name, population);
            assertEq(city._neighborhood.getSqMiles(), sqMiles);
        });
    });
});

describe('City', function() {
    describe('get', function() {
        it('education', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 1000;
            const sqMiles = .25;
            const education = "Highschool";
            const city = new City(sqMiles, education, size, name, population);
            assertEq(city._neighborhood.getEducation(), education);
        });
    });
});

describe('City', function() {
    describe('set', function() {
        it('land size good', function() {
            const size = 0.86;
            const name = "Ouray";
            const population = 1000;
            const sqMiles = .25;
            const education = "Highschool";
            const newCitySize = 123456789;
            const city = new City(sqMiles, education, size, name, population);
            assertEq(city._size, size);
            city.setlandSize(newCitySize);
            assertEq(city._size, newCitySize);
        });
    });
});

describe('City', function() {
    describe('set', function() {
        it('land size bad', function() {
            try {
                const size = 0.86;
                const name = "Ouray";
                const population = 1000;
                const sqMiles = .25;
                const education = "Highschool";
                const newCitySize = -123456789;
                const city = new City(sqMiles, education, size, name, population);
                assertEq(city._size, size);
                city.setlandSize(newCitySize);
            } catch(e) {
                assertEq(e.message, "Error, Not Enough Land!");            
            } 
        });
    });
});