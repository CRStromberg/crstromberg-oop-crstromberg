class City:

    def __init__(self,size : float, name : str, population : int = 0) -> None:
        self._size : float = size
        self._name : str = name
        self._population : int = population

    def isNewCity(self) -> bool:
        return self.population == 0

    def density(self) -> str:
        if self._population < 100000:
            return "Town"
        elif self._population < 10000000:
            return "City"
        else: 
            return "MegaCity"

    @property
    def population(self):
        return self._population

    @property 
    def size(self):
        return self._size

    @property
    def name(self) -> str:
        return self._name

    @size.setter
    def landSize(self, area: float) -> None:
        if area < 0:
            raise ValueError('Error, Not Enough Land!')
        self._size = area
