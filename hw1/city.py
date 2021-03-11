class city:

    def __init__(self,size : int, name : str, population : int = 0) -> None:
        self._size : int = size
        self._name : str = name
        self._population : int = population

    def isNewCity(self) -> bool:
        return self.population == 0

    @property 
    def size(self):
        return self._size

    def density(self) -> str:
        if self._population < 100,000:
            return "town"
        elif self._population < 10,000,000:
            return "City"
        else: 
            return "MegaCity"

    @property
    def name(self) -> str:
        return self._name

    @name.setter
    def name(self,title : str) -> None:
        if not title in ['Denver','Ouray','Fort Collins','SteamBoat']:
            raise ValueError('Error, Invalid City Name!')
        self._name = title