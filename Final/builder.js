const { exit } = require("process");

class Engine {
    constructor(eSize, eMileage) {
        if(eMileage > 0) {
            this.engineMileage = eMileage; 
        } else { 
            throw Error("Error, mileage must be greater than zero.")         
        }
        if(eSize > 0) {
            this.engineSize = eSize;     
        } else { 
            throw Error("Error, incorrect engine size.");
        }
    }
}
class Vehicle {
    constructor(name) {
        this.name = name;
    }
}

class VehicleBuilder {
    constructor(name) {
        this.name = new Vehicle(name);
    }

    setType(vType) {
        if(vType == "Truck" || vType == "Car" || vType == "Van") {
            this.name.vType = vType;
        } else throw Error ("Error, incorrect vehicle type.")

        return this
    }


    setEngine(engine) {
        
    this.name.engine = new Engine(engine.eSize, engine.eMileage);

    return this
    }
    
    build() {
        return this.name;
    }
}

module.exports = {'VehicleBuilder' : VehicleBuilder }

//let engineTest = {eSize:4.5, eMileage: 18};
//let test = new VehicleBuilder('Chris').setEngine(engineTest).build();
//console.log(test.engine.engineMileage)