# WEIGHT

<el-tag effect="plain">SKU:U030</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_weight_01.webp"></div>

## Description

**WEIGHT** integrates a **HX711** 24 bits A/D chip that is specifically designed for electronic weighing device.

The input multiplexer selects either Channel A or B differential input to the low-noise programmable gain amplifier (PGA). Channel "A" can be programmed with a gain of 128 or 64, corresponding to a full-scale differential input voltage of ±20mV or ±40mV respectively.

when a 5V supply is connected to AVDD analog power supply pin.

Channel B has a fixed gain of 32. There is no programming needed for the internal registers. All controls to the HX711 are through the pins.

In the test, we have this Unit channel A to connect a pressure sensor. Then, use M5Core screen to display the weight data.

<img src="assets/img/product_pics/unit/unit_weight_04.webp">

<img src="assets/img/product_pics/unit/unit_weight_03.webp">

## Product Features

- Two selectable differential input channels
- On-chip active low noise PGA with selectable gain
of 32, 64 and 128
- On-chip power supply regulator for load-cell and
ADC analog power supply
- On-chip oscillator requiring no external
component with optional external crystal
- On-chip power-on-reset
- Simple digital control and serial interface:
pin-driven controls, no programming needed
- Selectable 10SPS or 80SPS output data rate
- Simultaneous 50 and 60Hz supply rejection
- Current consumption including on-chip analog
power supply regulator:
 normal operation < 1.5mA, power down < 1uA
- Operation supply voltage range: 2.6 ~ 5.5V
- Operation temperature range: -40 ~ +85℃
- 16 pin SOP-16 package
- Program Platform: Arduino, UIFlow(Blockly, Python)
- Two Lego-compatible holes

## Include

- 1x WEIGHT Unit
- 1x Grove Cable

## Applications

-  Micro weight meter
-  Kitchen Scale

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Operating Voltage</td>
      <td>g</td>
   </tr>
   <tr>
      <td>Operating Current</td>
      <td>g</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>8g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>20g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>40*24*12mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
 </table>


## Related Link

-  **Datasheet** - [HX711](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/HX711_en.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_WEIGHT.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/unit/weight_sch.webp">

### Pinmap

**If WEIGHT was connected to GROVE A**

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>

**If WEIGHT was connected to GROVE B**

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>

**If WEIGHT was connected to GROVE C**

<table>
<tr><td>M5Core(GROVE C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

We used a pressure sensor(10kg) in this experiment. (Unit: gram)

[Click here to download the Arduino example](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/WEIGHT_HX711)

### 2. UIFlow

[Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/WEIGHT/example_unit_weight_01.webp">

<el-divider content-position="right">Last updated: 2020-12-14</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/weight-sensor-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>
