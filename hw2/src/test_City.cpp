#include "City.h"
#include <gtest/gtest.h>

using namespace city;

TEST(City, Constructor) {
    float size = 0.86;
    std::string name = "Ouray";
    int population = 1000;

    City city(size, name, population);
    ASSERT_EQ(city.getPopulation(),population);
    ASSERT_EQ(city.getName(), name);
    ASSERT_EQ(city.getSize(), size);
}
int main(int argc, char** argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}

