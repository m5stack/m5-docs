# GPS

<el-tag effect="plain">SKU:U032</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_gps_01.webp"><img src="assets/img/product_pics/unit/unit_gps_02.webp"></div>

## Description

**GPS** is an M5Stack Unit that integrates a **AT6558** navigation chip and a  **MAX2659** amplification chip which is used for amplifying the antenna signal.

**AT6558** is an high performance chip that supports many types of satellite navigation systems, able to receive satellite signals on 56 channels GNSS signal from 6 satellite navigation system, joint location, navigation, timing and more.

The module is able to obtain accurate global location information, quick and accurate positioning for anywhere in the city, in the canyon, under the overhead and inside the car.

The module can be widely used in vehicle monitoring, bus reporting, car navigation, onboard navigation, notebook navigation and other products.

You can plug it into port C on M5core via GROVE cable, which is a standard UART interface.

UART settings :
- Baudrate(**default: 9600bps**)
- Start bits(1 bit)
- Stop bits(1 bit)
- Parity(no)

## Product Features

- Support single system positioning of BDS/GPS/GLONASS satellite navigation systems, or multi-system joint positioning in any combination
- Support D-GNSS differential positioning
- Two Lego-compatible holes

## Includes

- 1x GPS Unit
- 1x Grove Cable

## Applications

- Vehicle positioning and navigation
- Smart law enforcement positioning

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Positioning accuracy</td>
      <td>2.5m</td>
   </tr>
   <tr>
      <td>Channel</td>
      <td>56</td>
   </tr>
   <tr>
      <td>Positioning update frequency</td>
      <td>1-10Hz</td>
   </tr>
   <tr>
      <td>Maximum height</td>
      <td>1800m</td>
   </tr>
   <tr>
      <td>Maximum speed</td>
      <td>515m/s</td>
   </tr>
   <tr>
      <td>Maximum acceleration</td>
      <td> <= 4g</td>
   </tr>
   <tr>
      <td>Sensitivity</td>
      <td>Tracking: -162dBm，Capture: -148dBm，Cold start: -146dBm</td>
   </tr>
   <tr>
      <td>Start Time</td>
      <td>Cold start: 35 seconds，Warm start: 32 seconds，Hot start: 1 second</td>
   </tr>
   <tr>
      <td>Operating temperature</td>
      <td>-40°C - 85°C</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>13g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>26g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>48*24*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
</table>


## Related Links

- **Datasheet** - [AT6558](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/AT6558_en.pdf) - [MAX2659](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/MAX2659_en.pdf)

- **[TinyGPS++ library](http://arduiniana.org/libraries/tinygpsplus/)**

- **[CASIC Multimode satellite navigation receiver protocol specification](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/Multimode_satellite_navigation_receiver_cn.pdf)**

- **[GnssToolKit3(Windows Version)](http://www.icofchina.com/d/file/xiazai/2018-05-23/2b29a8da746eec0ef1dcd9deae895298.zip)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_GPSRaw.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/unit/gps_sch.webp">

### PinMap

<table>
 <tr><td>M5Core(GROVE C)</td><td>U2RXD(GPIO16)</td><td>U2TXD(GPIO17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>GPS Unit</td><td>Signal Transmitter(TXD)</td><td>Signal Receiver(RXD)</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino

To get the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/GPS_AT6558)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/GPS/UIFlow)

<img src="assets/img/product_pics/unit/gps/gps.webp">

**Analysis:**

**$GNRMC,063012.000,A,2258.11953,N,11395.35722,E,0.69,171.74,240419,,,A*7A**

Indicates that the positioning information is UTC time is 06:30:12, north latitude 22.58119°, east longitude 113.95357°, date is April 24, 2019

<img src="assets/img/product_pics/unit/gps/unit_gps_08.webp">

<img src="assets/img/product_pics/unit/gps/unit_gps_07.webp">

<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-gps-bds-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
