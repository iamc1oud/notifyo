import strawberry_django
from strawberry import auto
from .models import Fruit, Color


@strawberry_django.type(Fruit)
class Fruit:
    id: auto
    name: auto
    category: auto
    color: "Color"

@strawberry_django.type(Color)
class Color:
    id: auto
    name: auto
    fruits: list[Fruit]