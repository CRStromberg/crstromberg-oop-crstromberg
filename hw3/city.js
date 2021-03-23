class City {
    constructor(size, name, population) {
        this._size = size;
        this._name = name;
        this._population = population;
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

    get population() {
        return this._population;
    }

    get size() {
        return this._size;
    }

    get name() {
        return this._name;
    }

    set landSize(area) {
    if(area <= 0) {
        throw Error('Error, Not Enough Land!');
    }
    this._size = area;
}
}

module.exports = {'City' : City }