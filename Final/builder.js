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