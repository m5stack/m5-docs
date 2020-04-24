# GPS

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U032</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_gps_01.webp"><img src="assets/img/product_pics/unit/unit_gps_02.webp"></div>

## Description

This is the M5Unit version of **GPS**, integrates a Zhongke Weibeidou navigation chip **AT6558** and a amplification chip **MAX2659** used for amplifying antenna signal.

**AT6558** is highly performance, supports many types of satellite navigation system,able to receive satellite signals on 56 channels GNSS signal from 6 satellite navigation system, joint location, navigation, timing and more.
The module is able to obtain accurate global location information.  quick and accurate positioning for anywhere in the city, in the canyon, under the overhead, and inside the car.

The module can be widely used in vehicle monitoring, bus reporting, car navigation, onboard navigation, notebook navigation and other products.

You can plug it into port C on M5core via GROVE cable, which is a standard UART interface.

UART settings :
- Baudrate(**default: 9600bps**)
- Start bits(1 bit)
-  Stop bits(1 bit)
-  Parity(no)

## Product Features

- Functional specification
  - Positioning accuracy: 2.5 meters (CEP50, open space)
  - Channel: 56
  - Support single system positioning of BDS/GPS/GLONASS satellite navigation systems, or multi-system joint positioning in any combination
  - Support D-GNSS differential positioning
  - Positioning update frequency: 1-10Hz
  - Maximum height: 1800 m
  - Maximum speed: 515 m/s
  - Maximum acceleration: <= 4 G
- Low power consumption
  - BDS/GPS dual mode continuous operation: <23mA (@3.3V)
  - Standby: <10uA (@3.3V)
- Sensitivity
  - Tracking: -162dBm
  - Capture: -148dBm
  - Cold start: -146dBm
- Start Time
  - Cold start: 35 seconds
  - Warm start: 32 seconds
  - Hot start: 1 second
- Operating temperature: -40~85°C
-  Two Lego-compatible holes
- Product Size：48.2mm x 24.2mm x 8.2mm
- Product weight：13.1g

## Include

- 1x GPS Unit
- 1x Grove Cable

## Applications

- Car, ship positioning and navigation
- Smart law enforcement positioning

## Related Links

- **Datasheet** - [AT6558](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/AT6558_en.pdf) - [MAX2659](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/MAX2659_en.pdf)

- **[TinyGPS++ library](http://arduiniana.org/libraries/tinygpsplus/)**

- **[CASIC Multimode satellite navigation receiver protocol specification](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/Multimode_satellite_navigation_receiver_cn.pdf)**

- **[GnssToolKit3(Windows Version)](http://www.icofchina.com/d/file/xiazai/2018-05-23/2b29a8da746eec0ef1dcd9deae895298.zip)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_GPSRaw.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/unit/gps_sch.webp">

### PinMap

<table>
 <tr><td>M5Core(GROVE C)</td><td>U2RXD(GPIO16)</td><td>U2TXD(GPIO17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>GPS Unit</td><td>Signal Transmitter(TXD)</td><td>Signal Receiver(RXD)</td><td>5V</td><td>GND</td></tr>
</table>


## Example

### 1. Arduino IDE

To get the complete code `GPSRaw.ino`, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/GPS)

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/GPS/UIFlow)

<img src="assets/img/product_pics/unit/gps/gps.webp">

**Analysis:**

**$GNRMC,063012.000,A,2234.87140,N,11357.22414,E,0.69,171.74,240419,,,A*7A**

Indicates that the positioning information is UTC time is 06:30:12, north latitude 22.58119°, east longitude 113.95357°, date is April 24, 2019

<img src="assets/img/product_pics/unit/gps/unit_gps_08.webp">

<img src="assets/img/product_pics/unit/gps/unit_gps_07.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-gps-bds-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>