# THERMAL

<el-tag effect="plain">SKU:U016</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/thermal/unit_thermal_01.webp"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal_02.webp"></div>

## Description

**THERMAL** is a thermal imager Unit contains a thermopile sensor named **MLX90640**. It can be used to measure the surface temperature of an object and form a thermographic image by a temperature gradient composed of different surface temperatures.
The image resolution is **32 x 24**.

The MLX90640 Infrared (IR) sensor array combines high resolution and reliable operation in harsh environments, providing a cost-effective alternative to more expensive high-end thermal imaging cameras. Unlike the case of a microbolometer, the sensor does not require frequent recalibration, ensuring continuous monitoring and reducing system cost.

The field of view (FoV) option includes a standard 55° x 35° version and a wide angle version of 110° x 75° for distances up to 7m. This Unit is **110°×75° FoV**, also known as the BAA package.

The Unit communicates with the M5Core through the Grove A interface, I2C address is **0x33**

<img src="assets/img/product_pics/unit/thermal/unit_thermal_05.webp">

## Product Features

- Operating Voltage: 3V ~ 3.6V
- Current Consumption: 23mA
- Field of View: 110°×75°
- Measurement Range: -40°C ~ 300°C
- Resolution: ±1.5°C
- Refresh Rate: 0.5Hz-64Hz
- Operating temperature: -40°C ~ 85°C
- Two Lego-compatible holes

## Include

- 1x THERMAL Unit
- 1x Grove Cable

## Applications

-  High precision non-contact temperature measurements
-  Intrusion / Movement detection
-  Visual IR thermometers

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
      <td>32*24*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
 </table>

## Related Link

- **[MLX90640 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/MLX90640-Datasheet-Melexis_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_THERMAL.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/unit/thermal_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core (GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>THERMAL Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/THERMAL_MLX90640)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/THERMAL/UIFlow)

<img src="assets/img/product_pics/unit/thermal.webp">

<el-divider content-position="right">Last updated: 2020-12-14</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/thermal-camera';


   anchor_search(purchase_link);
   scrollFunc();

</script>
