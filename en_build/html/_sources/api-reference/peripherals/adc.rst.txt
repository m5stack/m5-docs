ADC API
********

-----------------------------

Description
------------

ESP32 integrates two 12-bit SAR (Successive Approximation Register) ADCs (Analog to Digital Converters) and supports measurements on 18 channels (analog enabled pins)

ESP32 DAC output voltage range is 0-Vdd (3.3 V), the resolution is 8-bits


-----------------------------

Function
---------

machine.ADC(pin [,unit=1])
>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Create the adc instance object

| **Parament:**
|   **pin:** pin argument defines the gpio which will will be used as adc input
|   **unit:** Optional unit argument select ESP32 ADC unit for this instance. Values 1 (ADC1, default) or 2 (ADC2) can be selected

| **Example:**
.. code:: python

    import machine

    adc = machine.ADC(35)

read()
>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Read the ADC value as voltage (in mV)
|   

| **Parament:**
|   None Parament

| **Example:**
.. code:: python

    import machine

    adc = machine.ADC(35)
    adc.read()


---------------------

Usage
------

.. code:: python

    import machine

    adc = machine.ADC(35)
    adc.read()