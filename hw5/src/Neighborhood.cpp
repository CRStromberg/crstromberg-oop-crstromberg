#include "Neighborhood.h"
#include <stdexcept>

namespace neighborhood {
    const std::string Neighborhood::DEFAULT_EDUCATION("highschool");

    Neighborhood::Neighborhood(float sqMiles) : c_sqMiles(sqMiles), c_education(DEFAULT_EDUCATION){}
    Neighborhood::Neighborhood(float sqMiles, const std::string& education) : c_sqMiles(sqMiles), c_education(education){}
    Neighborhood::~Neighborhood() {}
    
    float Neighborhood::sqMiles() const { return c_sqMiles; }

    void Neighborhood::sqMiles(float val) { c_sqMiles = val; }

    const std::string& Neighborhood::education() const { return c_education; }
}