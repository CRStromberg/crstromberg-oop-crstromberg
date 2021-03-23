#include "City.h"
#include <stdexcept>

namespace city {
    City::City(float size, std::string name, int population) {
        c_size = size;
        c_name = name;
        c_population = population;
    }
    bool City::isNewCity() { return c_population == 0; }

    std::string City::density() {
        if(c_population < 100000) { return "Town"; }
        else if(c_population < 10000000) { return "City"; }
        else return "MegaCity";
    }

    int City::getPopulation() { return c_population; }

    float City::getSize() { return c_size; }

    std::string City::getName() { return c_name; }

    void City::setSize(float area) {
        if(area <= 0) { throw std::invalid_argument("Error, Not Enough Land!"); }
        else c_size = area;

    }
}