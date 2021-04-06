#include "Neighborhood.h"
#include "City.h"
#include "gtest/gtest.h"

using namespace city;
using namespace std;

Test(Neighborhood, One) {
    float sqMiles = 4.5;
    std::string education = "Highschool";
    float size = 237.43;
    std::string name = "ChrisVille";
    int population = 0;

    City neighborhood(sqMiles, education, size, name, population);
    ASSERT_EQ(neighborhood.sqMiles(), sqMiles);
    ASSERT_EQ(neighborhood.education(), education);
}

int main(int argc, char** argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}