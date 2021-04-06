#include "City.h"
#include <stdexcept>

namespace city {

    City::City(float sqMiles, const std::string& education, float size, const std::string& name, int population)
    : Neighborhood(sqMiles, education) {
        c_size = size;
        c_name = name;
        c_population = population;
    }

    bool City::isNewCity() const { return c_population == 0; }

    int City::getPopulation() const { return c_population; }

    float City::getSize() const { return c_size; }

    const std::string& City::density() const {
        if(c_population < 100000) { return "Town"; }
        else if(c_population < 10000000) { return "City"; }
        else return "MegaCity";
    }

    const std::string& City::getName() const { return c_name; }

    void City::setSize(float area) {
        if(area <= 0) { throw std::invalid_argument("Error, Not Enough Land!"); }
        else c_size = area;
    }
}