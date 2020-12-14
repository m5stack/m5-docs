# EARTH

<el-tag effect="plain">SKU:U019</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/earth/unit_earth_01.webp"></div>

## Description

**EARTH** unit is a Soil Moisture Sensor for measuring the moisture in soil and similar materials.

The soil moisture sensor usage is pretty straight forward, the two large exposed pads function as probes for the sensor, together acting as a variable resistor.

The higher moisture that is in the soil means the better the conductivity between the two so that the sensor will result in a lower resistance, and a higher SIG out.

You can read the moisture in soil by using the ADC. Inside this Unit we've added an extra potentiometers to change the measurement range.

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_03.webp" width="50%" height="50%">

## Product Features

-  Adjustable threshold, including 10K adjustable resistor
-  Analog & Digital output
-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego-compatible holes

## Include

- 1x EARTH unit
- 1x GROVE Cable

## Applications

- Potted soil moisture monitoring

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>5g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>18g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>64.4*24.1*8.1mm</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>67*53*12mm</td>
   </tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Earth.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/unit/earth_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>EARTH Unit</td><td>AnalogSignal Pin</td><td>DigitalSignal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

The code below is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/EARTH)

### 2. UIFlow

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_04.webp">

## Video

**EARTH Tutorial - Monitor vase soil moisture 1**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/(M5stack%20x%20Arduino)%20Do%20plants%20have%20feelings.mp4" type="video/mp4">
</video>

<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/earth-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
