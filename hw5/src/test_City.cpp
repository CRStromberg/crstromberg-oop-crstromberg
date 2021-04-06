#include "City.h"
#include <gtest/gtest.h>

using namespace city;
using namespace std;

TEST(City, One) {
    float sqMiles = 4.5;
    std::string education = "Highschool";
    float size = 237.43;
    std::string name = "ChrisVille";
    int population = 0;

    City city(sqMiles, education, size, name, population);
    ASSERT_EQ(city.getPopulation(),population);
    ASSERT_EQ(city.getName(), name);
    ASSERT_EQ(city.getSize(), size);
    ASSERT_EQ(city.density(), "Town");
}

int main(int argc, char** argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}