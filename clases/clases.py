import pygame as pg
class Suelo:
    def __init__(self, ancho, alto, alto_pasto, alto_tierra, alto_piedra):
        self.ancho = ancho
        self.alto = alto
        # Alturas de cada capa
        self.alto_pasto = alto_pasto
        self.alto_tierra = alto_tierra
        self.alto_piedra = alto_piedra
        # Definimos bloques
        self.pasto = Bloque.Pasto()
        self.tierra = Bloque.Tierra()
        self.piedra = Bloque.Piedra()

    def alturaTotal(self):
        return self.alto_pasto + self.alto_tierra + self.alto_piedra

    def dibujar(self,pantalla):
        pg.draw.rect(pantalla, self.piedra._color,
                     (0, self.alto - self.alto_piedra, self.ancho, self.alto_piedra))

        # Capa de tierra (medio)
        pg.draw.rect(pantalla, self.tierra._color,
                     (0, self.alto - self.alto_piedra - self.alto_tierra, self.ancho, self.alto_tierra))

        # Capa de pasto (superior)
        pg.draw.rect(pantalla, self.pasto._color,
                     (0, self.alto - self.alto_piedra - self.alto_tierra - self.alto_pasto, self.ancho, self.alto_pasto))
        
class Cielo:
    def __init__(self):
        self._color = (160,220,245)

class Bloque:

    class Pasto:
        def __init__(self):
            self._color = (0,255,0)

    class Tierra:
        def __init__(self):
            self._color = (180,90,5)

    class Piedra:
        def __init__(self):
            self._color = (100,100,100)

    def __init__(self,bloque):
        self._bloque=bloque

class Jugador:
    def __init__(self, suelo):
        self._color = (10, 45, 130)
        self.ancho = 50
        self.alto = 50
        self.velocidad = 1
        self.gravedad = 1
        self.vel_y = 0
        self.estaEnElSuelo = True

        altura_suelo = Suelo.alturaTotal(suelo)
        self.y_piso = suelo.alto - altura_suelo - self.alto

        self.rect = pg.Rect(100, self.y_piso, self.ancho, self.alto)

    def dibujar(self, pantalla):
        pg.draw.rect(pantalla, self._color, self.rect)

    def mover(self):
        teclas = pg.key.get_pressed()
        
        #IZQUIERDA - DERECHA
        if (teclas[pg.K_d]):
            self.rect.x += self.velocidad
        if (teclas[pg.K_a]):
            self.rect.x -= self.velocidad
        
        #SALTAR
        if (teclas[pg.K_w] and self.estaEnElSuelo):
            self.vel_y -= 15
            self.estaEnElSuelo = False
        self.vel_y += self.gravedad
        self.rect.y += self.vel_y
        
        if (self.rect.y >= self.y_piso):
            self.rect.y = self.y_piso
            self.vel_y = 0
            self.estaEnElSuelo = True