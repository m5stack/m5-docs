# Unit NEOFLASH {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_neoflash_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_neoflash_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Newest-NeoFlash-Light-Board-made-of-Acrylic-with-192pcs-NeoPixels-and-PIR-Sensor-compatible-with/3226069_32957760176.html?spm=a2g03.12010615.8148356.2.66ca32c6EOLxpR)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**NEOFLASH** is a RGB LED panel with 192 RGB LED(24x8).
When you program this Unit, please pay attention to the sequence of the RGB LEDs. From top left (Where PIR placed) to right, and top to bottom.

Connect this unit with M5Core via GROVE PORTB Single-Bus.
We put Magnet on the backside, which means you can attach this to any metal surface.
When you plug the GROVE PORTA into M5core, you have convert it into 3 extended GROVE A laid on the side.

<img src="assets/img/product_pics/unit/unit_neoflash_03.png">

## Product Features

- Total RGB leds quantity: 192
- PIR
- PORTA extension(up to 3)
- Software Development Platform: Arduino, UIFlow(Blockly, python)
- Two Lego-compatible holes

## Include

- 1x NeoFlash Unit
- 1x Grove Cable

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(Chinese version)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_NEOFLASH.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)


## Example

### 1. Arduino IDE

This is a example that takes real-time time from the network and displays it on NEOFLASH. Show real time when someone is shaking before NEOFLASH, otherwise the time "disappears".

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/Arduino)。*

<img src="assets/img/product_pics/unit/unit_example/NEOFLASH/example_unit_neoflash_01.png">

### PinMap

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOFLASH Unit</td><td>PIR Pin</td><td>RGB Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

**Neoflash's Tutorial**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/NeoFlash/E1%20-%20Neoflash%20%E4%BE%8B%E7%A8%8B%EF%BC%88UIFlow%20Tutorials%202%EF%BC%89.mp4" type="video/mp4">
</video>

**Neoflash Case - Alarm Clock**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20NeoFlash.mp4" type="video/mp4">
</video>