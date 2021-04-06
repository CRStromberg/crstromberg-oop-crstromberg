import  unittest

from city import City

class CityTest(unittest.TestCase):

    def testNeighborhood(self):
        sqMiles : float = 4.5
        education : str = "Highschool"
        neighborhood : City = City(sqMiles, education, 237.43, "ChrisVille")

        self.assertEqual(neighborhood.sqMiles, sqMiles)
        self.assertEqual(neighborhood.education, education)

    def testDefaultCity(self):
        sqMiles : float = .25
        education : str = "Highschool"
        size : float = 0.86
        name : str = "Ouray"
        population : int = 1000

        city : City = City(sqMiles, education, size, name, population)
        self.assertEqual(city.size, size)
        self.assertEqual(city.name, name)
        self.assertEqual(city.population, population)

    def testCitType(self):
        sqMiles : float = .25
        education : str = "Highschool"
        size : float = 0.86
        name : str = "Ouray"
        population : int = 1000

        city : City = City(sqMiles, education, size, name, population)
        self.assertEqual(city.density(), "Town")
        self.assertEqual

if __name__ == '__main__':
    unittest.main()