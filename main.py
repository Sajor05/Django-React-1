import pygame as pg
import sys
from clases import *

#----------------------------------------------------VARIABLES PARA LA PANTALLA PYGAME----------------------------------
ANCHO = 1000
ALTO = 600
SCREEN=pg.display.set_mode((ANCHO,ALTO))
#----------------------------------------------------CREAMOS ENTORNO----------------------------------------------------

FLOOR = Suelo(ANCHO, ALTO, alto_pasto=40, alto_tierra=80, alto_piedra=80)
SKY= Cielo()
PERSONAJE=Jugador(FLOOR)
STONE = Bloque.Piedra()
GRASS= Bloque.Pasto()
DIRT= Bloque.Tierra()

#MITAD CIELO
pg.draw.rect(SCREEN, SKY._color, (0, 0, ANCHO, ALTO // 2))
#MITAD TIERRA
pg.draw.rect(SCREEN,DIRT._color,(0, ALTO // 2, ANCHO, ALTO // 2))

#----------------------------------------------------PANTALLA PYGAME----------------------------------------------------
pg.init()
pg.display.set_caption("Minecraft 2D")


while True:
    for evento in pg.event.get():
        if evento.type == pg.QUIT:
            pg.quit()
            sys.exit()
    SCREEN.fill(SKY._color)
    FLOOR.dibujar(SCREEN)
    PERSONAJE.dibujar(SCREEN)
    PERSONAJE.mover()
    

    pg.display.flip()

#----------------------------------------------------PANTALLA PYGAME----------------------------------------------------