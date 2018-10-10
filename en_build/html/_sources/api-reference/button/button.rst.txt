Button API
***********

-----------------------------

Function
---------

isPressed()

isReleased()

pressedFor(timeout)

wasPressed(callback=None)
wasReleased(callback=None)
releasedFor(timeout, callback=None)



---------------------

Usage
------

.. code:: python

    from m5stack import *
    from machine import SPI, Pin
    from display import LCD
    import utime

    spi = SPI(1, baudrate=32000000, mosi=Pin(23), miso=Pin(19), sck=Pin(18))

    lcd = LCD(spi = spi) #lcd init

    while True:
      if buttonA.wasPressed():
        lcd.print('Button A was Pressed\n')

      if buttonA.wasReleased():
        lcd.print('Button A was Released\n')

      if buttonA.pressedFor(1.5):
        lcd.print('Button A pressed for 1.5s\n')

      if buttonA.releasedFor(2):
        lcd.print('Button A released for 2s press hold\n')

      utime.sleep(0.1)


.. code:: python

    #Button Callback

    from m5stack import *

    def on_wasPressed():
      lcd.print('Button B was Pressed\n')

    def on_wasReleased():
      lcd.print('Button B was Released\n')

    def on_releasedFor():
      lcd.print('Button B released for 1.2s press hold\n')

    buttonB.wasPressed(on_wasPressed)
    buttonB.wasReleased(on_wasReleased)
    buttonB.releasedFor(1.2, on_releasedFor)
