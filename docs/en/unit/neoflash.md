# NEOFLASH

<img src="assets/img/product_pics/unit/unit_neoflash_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_neoflash_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Newest-NeoFlash-Light-Board-made-of-Acrylic-with-192pcs-NeoPixels-and-PIR-Sensor-compatible-with/3226069_32957760176.html?spm=a2g03.12010615.8148356.2.66ca32c6EOLxpR)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**<mark>NEOFLASH</mark>**is a RGB LED panel with 192 RGB LED(24x8). The upper left corner is the first LED, and the LEDs are incremented from left to right and top to bottom. NEOFLASH is also equipped with three GROVE A interfaces (IIC interfaces) for easy integration with Neoflash.

<img src="assets/img/product_pics/unit/unit_neoflash_03.png">

## Feature

-  The number of RGB: 192
-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(Chinese version)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## Example

### 1. Arduino IDE

This is a example that takes real-time time from the network and displays it on NEOFLASH. Show real time when someone is shaking before NEOFLASH, otherwise the time "disappears".

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/Arduino)。*

<img src="assets/img/product_pics/unit/unit_example/NEOFLASH/example_unit_neoflash_01.png">

### PinMap

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOFLASH Unit</td><td>PIR Pin</td><td>RGB Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

**Neoflash's Tutorial**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>