const assert = require('assert');
const chai = require('chai');
const { isMainThread } = require('worker_threads');
const { VehicleBuilder } = require('../builder');
const { AssertionError } = require('assert');

const expect = chai.expect;
const assertEq = assert.deepStrictEqual

describe('VehicleBuilder', function() {
    describe('constructor', function() {
        it('Passed create', function() {
            const name = "Chris";
            const type = "Van";
            const engine = {eSize: 2.5, eMileage: 30};
            const test = new VehicleBuilder(name).setType(type).setEngine(engine).build();
            assertEq(test.name, name);
        });
    });
});

describe('VehicleBuilder', function() {
    describe('Set  Van Type', function() {
        it('Passed Van Type', function() {
            const name = "Chris";
            const type = "Van";
            const engine = {eSize: 2.5, eMileage: 30};
            const test = new VehicleBuilder(name).setType(type).setEngine(engine).build();
            assertEq(test.vType, type);
        });
    });
});

describe('VehicleBuilder', function() {
    describe('Set Truck Type', function() {
        it('Passed Truck Type', function() {
            const name = "Chris";
            const type = "Truck";
            const engine = {eSize: 2.5, eMileage: 30};
            const test = new VehicleBuilder(name).setType(type).setEngine(engine).build();
            assertEq(test.vType, type);
        });
    });
});

describe('VehicleBuilder', function() {
    describe('Set Car Type', function() {
        it('Passed Car Type', function() {
            const name = "Chris";
            const type = "Car";
            const engine = {eSize: 2.5, eMileage: 30};
            const test = new VehicleBuilder(name).setType(type).setEngine(engine).build();
            assertEq(test.vType, type);
        });
    });
});

describe('VehicleBuilder', function() {
    describe('Set Engine', function() {
        it('Passed Engine', function() {
            const name = "Chris";
            const type = "Van";
            const engine = {eSize: 2.5, eMileage: 30};
            const test = new VehicleBuilder(name).setType(type).setEngine(engine).build();
            assertEq(test.engine.engineSize, engine.eSize);
            assertEq(test.engine.engineMileage, engine.eMileage);
            
        });
    });
});


describe('VehicleBuilder', function() {
    describe('Bad Engine Mileage', function() {
        it('Passed Engine', function() {
            try {
                const name = "Chris";
                const type = "Van";
                const engine = {eSize: 3.8,  eMileage: -30};
                const test = new VehicleBuilder(name).setType(type).setEngine(engine).build();
            } catch (e) {
                assertEq(e.message, "Error, mileage must be greater than zero.")
            }
            
        });
    });
});

describe('VehicleBuilder', function() {
    describe('Bad Engine Size', function() {
        it('Passed Engine', function() {
            try {
                const name = "Chris";
                const type = "Van";
                const engine = {eSize: -3.8,  eMileage: 30};
                const test = new VehicleBuilder(name).setType(type).setEngine(engine).build();
            } catch (e) {
                assertEq(e.message, "Error, incorrect engine size.")
            }
            
        });
    });
});

describe('VehicleBuilder', function() {
    describe('Set Bad Type', function() {
        it('Passed Bad Type', function() {
            try {
                const name = "Chris";
                const type = "Boat";
                const engine = {eSize: 2.5, eMileage: 30};
                const test = new VehicleBuilder(name).setType(type).setEngine(engine).build();
            } catch (e) {
                assertEq(e.message, "Error, incorrect vehicle type.");
            }
            
            
        });
    });
});

