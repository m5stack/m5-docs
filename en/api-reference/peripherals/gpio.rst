GPIO API
********

-----------------------------

Function
---------

value()




---------------------

Usage
------

.. code:: python

    import machine
    
    pinout = machine.Pin(0, machine.Pin.OUT)
    pinout.value(1)
    
    pinin = machine.Pin(2, machine.Pin.IN)
    val = pinin.value()