import unittest

from city import City

class CityTest(unittest.TestCase):
    def testDefCity(self):
        size : float = 0.86
        name : str = "Ouray"
        population : int = 1000

        city : City = City(size, name, population)
        self.assertEqual(city.population, population)
        self.assertEqual(city.name, name)
        self.assertEqual(city.size, size)

    def cityType(self):
        size : float = 0.86
        name : str = "Ouray"
        population : int = 1000

        city : City = City(size, name, population)
        self.assertEqual(city.density(), "Town")

if __name__ == '__main__':
    unittest.main()