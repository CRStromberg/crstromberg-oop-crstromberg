#pragma once
#include <string>
#include <memory>

#include "Neighborhood.h"

namespace city {
    class City : public Neighborhood {
        private:
        float c_size;
        std::string c_name;
        int c_population;
        
        public:
        City();
        City(float sqMiles, std::string education, float size, std::string name, int population = 0);
        virtual ~City();
        bool isNewCity() const;
        const std::string& density() const;
        int getPopulation() const;
        float getSize() const;
        const std::string& getName() const;
        void setSize(float area);

    };
    typedef std::shared_ptr <City> CityPtr;
}

