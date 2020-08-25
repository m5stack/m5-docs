# NEOFLASH

<el-tag effect="plain">SKU:A042</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_neoflash_01.webp"><img src="assets/img/product_pics/unit/unit_neoflash_02.webp"></div>

## Description

**NEOFLASH** is a RGB LED panel with 192 RGB LED(WS2812C).
When you program this Unit, please pay attention to the sequence of the RGB LEDs. From top left (Where PIR placed) to right, and top to bottom.

Connect this unit with M5Core via GROVE PORTB Single-Bus.
We put Magnet on the backside, which means you can attach this to any metal surface.
When you plug the GROVE PORTA into M5core, you have convert it into 3 extended GROVE A laid on the side.

<img src="assets/img/product_pics/unit/unit_neoflash_03.webp">

## Product Features

- Total RGB leds quantity: 192
- PIR
- PORTA extension(up to 3)
- Software Development Platform: Arduino, UIFlow(Blockly, python)
- Two Lego-compatible holes

## Include

- 1x NeoFlash Unit
- 1x Grove Cable

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>RGB LED</td>
      <td>x 192</td>
   </tr>
   <tr>
      <td>PORTA Interface</td>
      <td>x 3</td>
   </tr>
   <tr>
      <td>Number of holes</td>
      <td>40</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>119g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>131g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>220*53*10mm</td>
   </tr>   
   <tr>
      <td>Package Size</td>
      <td>220*59*10mm</td>
   </tr>
</table>

## Related Link

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(Chinese version)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_NEOFLASH.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## Example

### 1. Arduino IDE

This is a example that takes real-time time from the network and displays it on NEOFLASH. Show real time when someone is shaking before NEOFLASH, otherwise the time "disappears".

To get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/NEOFLASH_SK6812_PIR)

<img src="assets/img/product_pics/unit/unit_example/NEOFLASH/example_unit_neoflash_01.webp">

- **UIFlow**

open http://flow.m5stack.com click Demo load uiflow

<img src="assets/img/product_pics/unit/neoflash.webp">

### PinMap

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOFLASH Unit</td><td>PIR Pin</td><td>RGB Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Video

**Neoflash Video Tutorial on UIFlow**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/NeoFlash/E1%20-%20Neoflash%20%E4%BE%8B%E7%A8%8B%EF%BC%88UIFlow%20Tutorials%202%EF%BC%89.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/neoflash-acrylic-light-board';

   anchor_search(purchase_link);
   scrollFunc();

</script>