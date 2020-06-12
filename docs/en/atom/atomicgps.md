# Atomic GPS

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K043</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomicGPS/atomicgps_01.webp" ><img src="assets/img/product_pics/atom_base/atomicGPS/atomicgps_02.webp"></div>

## Description

**Atomic GPS** is a GPS positioning module wich is part of the M5 atomic series. The navigation chip is m8030-kt, which has built-in flash and a coin cell battery, which can save the users configuration. It adopts NMEA-0183 protocol output, supports GPS, GLONASS, Galileo, BDS, SBAS and QZSS satellite systems, has 72 search channels, an adjustable refresh rate, and can be widely used in vehicle monitoring such as bus stop reporting, vehicle navigation, ship navigation, track tracking and other applications. In addition, a self elastic TF(MicroSD) card slot is built in. It is possible to read and write GPS and other file data, for example, you could export GPS data in a specific format to view the motion tracking in the map software, or read and write files as a common card reader.

UART Parameter setting:
- Baud rate(**default: 9600bps**)
- Start bit(1 bit)
- Stop bit(1 bit)
- Check bit(None)

## Product Features

- Compatible with Atom Matrix/Atom Lite
- High signal acquisition sensitivity
- Support single system positioning of BDS / GPS / GLONASS / Galileo / SBAS / QZSS multiple satellite navigation systems
- Built in self elastic TF (microSD) card slot
- Low power

## Include

- 1x AtomicGPS
- 1x ATOM Lite
- 1x Hex Key
- 1x M2*3mm Hexagon self tapping screw
- 1x M2*8mm Hexagon socket cup head machine screw
- 1x 18cm TYPE-C Cable

## Applications

- Vehicle and ship positioning and navigation
- Track record
- File reading and writing

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specification</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Frequency accuracy</td>
      <td>GPS L1, GLONASS L1, BDS B1, GALILEO E1, SBAS L1, QZSS L1</td>
   </tr>
   <tr>
      <td>Accuracy</td>
      <td>Horizontal: 2m, Speed: 0.1m/s, Time: 1us</td>
   </tr>
   <tr>
      <td>Channels</td>
      <td>72 search channel</td>
   </tr>
   <tr>
      <td>Update frequency</td>
      <td>1-10Hz</td>
   </tr>
   <tr>
      <td>Maximum height</td>
      <td>50000m</td>
   </tr>
   <tr>
      <td>Maximum speed</td>
      <td>515m/s</td>
   </tr>
   <tr>
      <td>Maximum acceleration</td>
      <td> < 4g</td>
   </tr>
   <tr>
      <td>Sensitivity</td>
      <td>Trace: - 167dbm, capture: - 160dBm, cold start: - 148dbm, hot start: - 156dbm</td>
   </tr>
   <tr>
      <td>Start time</td>
      <td>Cold start: 26 seconds, warm start: 25 seconds, hot start: 1 second</td>
   </tr>
   <tr>
      <td>Baud rate</td>
      <td>4800bps-921600bps</td>
   </tr>
   <tr>
      <td>Output protocol</td>
      <td>NMEA-0193</td>
   </tr>
   <tr>
      <td>NMEA sentence</td>
      <td>RMC, VTG, GGA, GSA, GSV, GLL</td>
   </tr>
   <tr>
      <td>FLASH</td>
      <td>4M FLASH</td>
   </tr>
   <tr>
      <td>Indicator light</td>
      <td>TX: the power on blue light flashes, indicating that there is data output, PPS:3D Blink after positioning, and it will not light if it is not positioned</td>
   </tr>
   <tr>
      <td>Working temperature</td>
      <td>-40°C - 85°C</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>28g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>38g</td>
   </tr>
   <tr>
      <td>Product size</td>
      <td>24*48*18mm</td>
   </tr> 
   <tr>
      <td>Package size</td>
      <td>54*54*20mm</td>
   </tr>
</table>


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atomic_GPS.exe">Windows</a>
            <a href="https://https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_AtomicGPS.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomGPS.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Connect Bluetooth serial port tool of mobile phone to view GPS information</p>
        </div>
    </div>
</div>


## Peripherals Pin Map

<table class="table-1">
      <thead>
         <th>ATOM</th>
         <th>GPIO19</th>
         <th>GPIO22</th>
         <th>GPIO23</th>
         <th>GPIO33</th>
      </thead>
      <tbody>
         <tr>
            <td>AtomicGPS</td>
            <td>MOSI</td>
            <td>TX</td>
            <td>CLK</td>
            <td>MISO</td>
         </tr>
    </tbody>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atomicGPS/atomicGPS_sch.webp">

## Related Link

  - **[CASIC Multimode satellite navigation receiver protocol specification](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/Multimode_satellite_navigation_receiver_cn.pdf)**

## Example

### 1. Arduino IDE

- Click here to[Download Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicGPS)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-atom/products/atom-gps-kit-m8030-kt';

   anchor_search(purchase_link);
   scrollFunc();

</script>
