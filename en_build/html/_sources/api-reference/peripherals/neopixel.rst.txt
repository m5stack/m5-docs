Neopixel API
*************

-----------------------------

Description
------------

This class includes full support for various types of Neopixel, individually-addressable RGB(W) LEDs.
ESP32 RMT peripheral is used for very precise timing ( +/- 50 ns ).
Up to 8 Neopixel strips can be used, 1~1024 pixels each.

-----------------------------

Function
---------

machine.Neopixel(pin, pixels, type)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Create the Neopixel instance object

| **Parament:**
|   **pin:** the data gpio which connects to rgb
|   **pixels:** The number of rgb
|   **type:** Neopixel type: 0 (machine.Neopixel.RGB) for RGB LEDs, or 1 (machine.Neopixel.RGBQ) for RGBW LEDs

| **Example:**

.. code:: python

    import machine
    np = machine.Neopixel(22, 115, 0)
    npw = machine.Neopixel(machine.Pin(25), 24, machine.Neopixel.RGBW)

setHSB(pos, hue, saturation, brightness [, white, num, update] ))
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Write bytes from buffer object buf to the Neopixel device

| **Parament:**
|   **pos:**        required, pixel position; 1 ~ pix_num
|   **hue:**        float: any number, the floor of this number is subtracted from it
|                   to create a fraction between 0 and 1.
|                   This fractional number is then multiplied by 360 to produce the hue angle in the HSB color model
|   **saturation:** float; 0 ~ 1.0
|   **brightness:** float; 0 ~ 1.0
|   **num:**        optional; default: 1; number of pixels to set to the same color, starting from pos
|   **update:**     optional, default: True; update the Neopixel strip.
|                   *Note: If False np.show() has to be used to update the strip*

| **Return:**
|   None

| **Example:**

.. code:: python

    import machine, time

    np = machine.Neopixel(machine.Pin(22), 24)

    def rainbow(loops=120, delay=1, sat=1.0, bri=0.2):
        for pos in range(0, loops):
            for i in range(0, 24):
                dHue = 360.0/24*(pos+i);
                hue = dHue % 360;
                np.setHSB(i, hue, sat, bri, 1, False)
            np.show()
            if delay > 0:
                time.sleep_ms(delay)

    def blinkRainbow(loops=10, delay=250):
        for pos in range(0, loops):
            for i in range(0, 24):
                dHue = 360.0/24*(pos+i);
                hue = dHue % 360;
                np.setHSB(i, hue, 1.0, 0.1, 1, False)
            np.show()
            time.sleep_ms(delay)
            np.clear()
            time.sleep_ms(delay)


---------------------

Usage
------

.. code:: python

    import machine, time

    np = machine.Neopixel(machine.Pin(22), 24)

    def rainbow(loops=120, delay=1, sat=1.0, bri=0.2):
        for pos in range(0, loops):
            for i in range(0, 24):
                dHue = 360.0/24*(pos+i);
                hue = dHue % 360;
                np.setHSB(i, hue, sat, bri, 1, False)
            np.show()
            if delay > 0:
                time.sleep_ms(delay)

    def blinkRainbow(loops=10, delay=250):
        for pos in range(0, loops):
            for i in range(0, 24):
                dHue = 360.0/24*(pos+i);
                hue = dHue % 360;
                np.setHSB(i, hue, 1.0, 0.1, 1, False)
            np.show()
            time.sleep_ms(delay)
            np.clear()
            time.sleep_ms(delay)