class Neighborhood {
    constructor(sqMiles, education) {
        if(sqMiles > 0) {
            this._sqMiles = sqMiles;
        } else {
            throw Error('Error, Square Miles Must Be Positive');
        }
        
        if(education == "Highschool" || education == "College") {
            this._education = education;
        } else {
            throw Error('Error, Incorrect Education')
        } 
    }

    getSqMiles() {
        return this._sqMiles;
    }

    getEducation() {
        return this._education;
    }

}

class City {
    constructor(sqMiles, education, size, name, population = 0) {
        this._size = size;
        this._name = name;
        this._population = population;
        this._neighborhood = new Neighborhood(sqMiles, education);
    }

    isNewCity() {
        return this._population == 0;
    }

    density() {
        if(this._population < 100000) {
            return "Town";
        } else if(this._population < 10000000) {
            return "City";
        } else {
            return "MegaCity";
        }
    }

    getpopulation() {
        return this._population;
    }

    getname() {
        return this._name;
    }

    setlandSize(area) {
        if(area <= 0) {
            throw Error('Error, Not Enough Land!');
        }
        this._size = area;
        
    }

}
module.exports = {'City' : City }