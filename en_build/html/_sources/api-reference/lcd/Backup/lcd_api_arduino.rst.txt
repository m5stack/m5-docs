LCD API for Arduino
-------------------

Overview
~~~~~~~~

API Reference
~~~~~~~~~~~~~

1.LCD(spi=spi)
^^^^^^^^^^^^^^

***Description:*** initialize the lcd (fgcolor: white, bgcolor: black)
***Parament:*** ***Example:***

.. code:: python

    from machine import SPI, Pin
    from display import LCD
    spi = SPI(1, baudrate=32000000, mosi=Pin(23), miso=Pin(19), sck=Pin(18))
    lcd = LCD(spi = spi)

2.lcd.drawPixel(x, y [,color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** Draw the pixel at position (x,y). If color is not
given, current foreground color is used. ***Parament:*** ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawPixel(11, 22, LCD.ORANGE)

3.lcd.fillScreen(lcd.color565(r, g, b))
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** draw the pixel at position (x,y) *Note:* if color is
not given, current foreground color is used ***Parament:***
***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillScreen(lcd.color565(0x00, 0x00, 0x00))

4.lcd.circle(x, y, r [,color, fillcolor])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** draw the pixel at position (x,y) *Note:* if color is
not given, current foreground color is used. if fillcolor is given,
filled circle will be drawn ***Parament:*** ***r:*** the radius of
circle ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.circle(100,100,10,lcd.BLUE)

Usage
~~~~~

.. code:: python

    from machine import SPI, Pin
    from display import LCD

    spi = SPI(1, baudrate=32000000, mosi=Pin(23), miso=Pin(19), sck=Pin(18))

    lcd = LCD(spi = spi)
    lcd.fillScreen(lcd.color565(0x00, 0x00, 0x00))
    lcd.line(0,0,44,44,lcd.ORANGE)
    lcd.triangle(22,22,69,98,51,22,lcd.RED)
    lcd.circle(100,100,10,lcd.BLUE)
    lcd.print('LLLLLLLL',80,80)

