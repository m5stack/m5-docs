# Module GPS

<el-tag effect="plain">SKU:M003</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/module_gps_01.webp"><img src="assets/img/product_pics/module/module_gps_02.webp"></div>

## Description

**GPS** is build with NEO-M8N, u-blox M8 concurrent GNSS modules and come with an active Antenna.

The NEO-M8 series provides high sensitivity and minimal acquisition times while maintaining low system power.

The NEO-M8N  integrates a 72-channel [u-blox](https://www.u-blox.com) M8 GNSS engine that supports multiple GNSS systems ( Beidou, Galileo, GLONASS, GPS / QZSS ) and able to receive 3 GNSS systems simultaneously.

The series communicate protocol between M5Core and GPS is UART, physically connected via **UART2 (GPIO16, GPIO17)**

If you want to Change the uart baudrate,please check here ( [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows) )

**Notice: GPS signal can only be found outdoors**

*UART protocol: baud rate (default is 9600bps), data bit (8 bits), start bit (1 bit), stop bit (1 bit), Parity (none)*

<img src="assets/img/product_pics/module/gps/module_gps_note01.webp" width="100%">

?> **M5Stack Fire** has occupied GPIO16 / 17 to connect with the PSRAM by default, it's conflict with TXD / RXD (GPIO16, GPIO17) of GPS module. Therefore, when using the GPS module with the M5Stack Fire, you might have to cut the TXD and RXD from GPS module and wire fly to another set of UART pin

## Product Features

- Operating voltage: 2.7 ~ 3.6
- Operating temperature: -40 ~ 80 °C
- Antenna type: built-in ceramic antenna and external antenna
- external Antenna port: SMA
- Can receive data from 3 GNSS systems concurrently
- Horizontal position accuracy: minimum 2.5m
- GPS module (NEO-M8N) Built-in Flash, so that you can upgrade firmware via [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows)
- Supported protocols: NMEA, UBX, RTCM
- Industry leading -167dBm sensitivity
- Backward compatibility with NEO‐7 and NEO‐6 series


## Include

-  1x GPS Module
-  1x external Antenna(cable length : 1 meter)

## Applications

- GPS-based logistics tracking management
- Driverless car positioning

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>43g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>73g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54*54*13mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>125*68*23mm</td>
   </tr>
 </table>

## Related Link

-  **[NEO-M8N](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/NEO-M8-FW3_DataSheet_en.pdf)**

-  **[GPS Info](https://www.u-blox.com/zh/product/neo-m8-series)** (GPS)

- **[TinyGPS++ library](http://arduiniana.org/libraries/tinygpsplus/)**

- **[u-blox Protocol Manual](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/u-blox8-M8_ReceiverDescrProtSpec_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_GPS_Raw.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

?>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

To the complete code `GPSRaw.ino`, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/GPS_NEO_M8N)

**Note: The GPS module needs placed outdoors to be able to receive GPS signal**

<img src="assets/img/product_pics/module/module_example/GPS/example_module_gps_01.webp">

**Protocol Specification:**

Please refer to the [u-blox 8 / u-blox M8 Receiver Description - Manual](https://www.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_%28UBX-13003221%29_Public.pdf), The following table is a description of the xxRMC message in the NMEA protocol as an example.

<img src="assets/img/product_pics/module/module_example/GPS/example_module_gps_02.webp">

## Schematic

<img src="assets/img/product_pics/module/gps_sch.webp">

## MBUS PinMap

<img src="assets\img\product_pics\module\module_bus.webp"/>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/gps-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>