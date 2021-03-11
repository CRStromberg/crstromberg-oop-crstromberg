class city:

    def __init__(self,size : int, name : str, population : int = 0) -> None:
        self._size : int = size
        self._name : str = name
        self._population : int = population