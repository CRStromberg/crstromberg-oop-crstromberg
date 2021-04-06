import unittest
from city import Neighborhood

class NeighborhoodTest(unittest.TestCase):
    def testNeighborhood(self):
        sqMiles : float = 4.5
        education : str = "Highschool"

        neighborhood : Neighborhood = Neighborhood(sqMiles, education)

        self.assertEqual(neighborhood.sqMiles, sqMiles)
        self.assertEqual(neighborhood.education, education)

if __name__ == '__main__':
    unittest.main()