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