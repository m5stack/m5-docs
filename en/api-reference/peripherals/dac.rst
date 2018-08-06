DAC API
********

-----------------------------

Description
------------

ESP32 has two 8-bit DAC (digital to analog converter) channels, connected to GPIO25 (Channel 1) and GPIO26 (Channel 2).
The DAC driver allows these channels to be set to arbitrary voltages.<br The DAC channels can also be driven with DMA-style written sample data, via the I2S driver when using the “built-in DAC mode”.

ESP32 DAC output voltage range is 0-Vdd (3.3 V), the resolution is 8-bits


-----------------------------

Function
---------

machine.DAC(pin)
>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Pin argument defines the gpio which will will be used as dac output
|   *Note: Only GPIOs 25 and 26 can be used as DAC outputs*
|   

| **Parament:**
|   **pin:** The pin argument can be given as pin number (integer) or the machine.Pin object

| **Example:**
.. code:: python

    import machine

    dac = machine.DAC(machine.Pin(26))
    dac.write(128)

write(value)
>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Set the DAC value
|   *Note: The value of 255 sets the voltage on dac pin to 3.3 V
|   

| **Parament:**
|   **value:** DAC vaule.Valid range is: 0 - 255

| **Example:**
.. code:: python

    import machine

    dac = machine.DAC(machine.Pin(26))
    dac.write(128)


---------------------

Usage
------

.. code:: python

    import machine

    dac = machine.DAC(machine.Pin(26))
    dac.write(128)