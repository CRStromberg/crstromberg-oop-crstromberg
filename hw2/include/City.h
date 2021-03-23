#pragma once
#include <string>

namespace city {
    class City {
        private:
        float c_size;
        std::string c_name;
        int c_population;

        public:
        City(float size, std::string name, int population = 0);
        bool isNewCity();
        std::string density();
        int getPopulation();
        float getSize();
        std::string getName();
        void setSize(float area);

    };
}