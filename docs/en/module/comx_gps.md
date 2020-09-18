# COM.GPS

<el-tag effect="plain">SKU:M031-G</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com.x_gps/comx_gps.webp"></div>

## Description

**COM.GPS** is a satellite positioning module in the M5Stack stacking module series. It is developed based on the NEO-M8N module and is equipped with an active antenna. The NEO-M8 can spend a small amount of time, conduct high-sensitivity acquisition, and keep the system low power consumption. NEO-M8N integrates the 72-channel [u-blox](https://www.u-blox.com) M8 GNSS engine, supports multiple GNSS systems: BeiDou, Galileo, GLONASS, GPS / QZSS, allowing simultaneous reception 3 Data from a GNSS system. Programmable FLASH is integrated inside the module, which can read and write data. The module's high sensitivity, small static drift, low power consumption and compact size are very suitable for applications in vehicles, handheld devices such as PDAs, vehicle monitoring, mobile phones, cameras and other mobile positioning systems. The UART communication protocol is used between the M5Core and the GPS module, and the serial port connection pins can be modified through the dial switch on the back.

If you want to change the serial port baud rate, please click ( [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows) ).

**Note: In order to get a good signal from the GPS module, please place the module outdoors when using it.**

**UART protocol: baud rate (default is 9600bps), data bit (8 bits), start bit (1 bit), stop bit (1 bit), check bit (none).**

?>COM.GPS RXD/TXD can be connected to M5Stack's UART (TX(0/13/17)RX(5/15/16)) by setting the DIP switch, **M5Stack Fire** GPIO16 /GPIO17 is connected to PSRAM by default. It is recommended to use any one of the remaining two groups of pins.

?>The right dial switch is invalid for this module, no need to set.

## Product Features

- Antenna type: external GPS antenna
- External antenna port: SMA
- Can receive data from 3 GNSS systems at the same time
- Horizontal position accuracy: minimum 2.5m
- GPS module (NEO-M8N) built-in flash memory, through [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows)upgrade firmware
- Protocol: NMEA, UBX, RTCM
- Industry leading -167dBm sensitivity
- Backward compatible with NEO‑7 and NEO‑6 series

## Includes

-  1x COM.GPS Module
-  1x External antenna(length: 1 m)

## Application

- GPS-based logistics tracking management
- Driverless car positioning

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Receiver type</td>
      <td>GPS:L1C/A SBAS:L1C/A QZSS:L1C/A GLONASS:L1OF BediDou:B1 Galileo:E1B/C</td>
   </tr>
   <tr>
      <td>Positioning time</td>
      <td>Cold start:26S Hot start:1.5S </td>
   </tr>
   <tr>
      <td>Sensitivity</td>
      <td>-167 dBm</td>
   </tr>
   <tr>
      <td>Update rate</td>
      <td>Separate GNSS 10Hz，Parallel GNSS 5Hz</td>
   </tr>
   <tr>
      <td>Rate accuracy</td>
      <td>0.05m/s</td>
   </tr>
   <tr>
      <td>Height limit</td>
      <td>50000m</td>
   </tr>
   <tr>
      <td>Speed limit</td>
      <td>500m/s</td>
   </tr>
   <tr>
      <td>Working voltage</td>
      <td>2.7 ~ 3.6</td>
   </tr>
   <tr>
      <td>Working temperature</td>
      <td>-40 ~ 80°C</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>28g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>99g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54*54*13.2mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>165*60*37mm</td>
   </tr>
 </table>

- **datasheet** 
   - [NEO-M8N](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/NEO-M8-FW3_DataSheet_en.pdf)

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COM_GPS.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COMX_GPS_for_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.GPS.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>DIP switchRX16/TX17, show time and location information </p>
        </div>
    </div>
</div>

## Related Link

- **[GPS Info](https://www.u-blox.com/zh/product/neo-m8-series)** (GPS)

- **[TinyGPS++ Library](http://arduiniana.org/libraries/tinygpsplus/)**

- **[U-Blox Protocol Manual](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/u-blox8-M8_ReceiverDescrProtSpec_en.pdf)**

- **[u-blox Protocol Manual](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/u-blox8-M8_ReceiverDescrProtSpec_en.pdf)**

## Example

### Arduino IDE

[Click here to download the Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMX_GPS)

**Note: In order to get a good signal from the GPS module, please place the module outdoors when using it.**

**Protocol specification:**

For more information,please refer to [u-blox 8 / u-blox M8 Receiver Description - Manual](https://www.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_%28UBX-13003221%29_Public.pdf)

## Schematic

<img src="assets/img/product_pics/module/com.x_gps/com.x_gps_sch.webp">

<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>