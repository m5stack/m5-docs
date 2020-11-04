# BALA2

<el-tag effect="plain">SKU:K014-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/app/Bala2/bala2.webp"></div>

## Description

**BALA2** is short for 'Balance', as its name suggests, it is the second generation of M5Stacks balancing robot series. **BALA2** is a Self Balancing Robot consisting of am M5Stack Gray and two wheels(DC motors).The base uses STM32F030C8T6 as the main control and has a two-way encoding motor driver and built-in 1200mAh battery.

This robotics product comes with preloaded software. A self-balancing robot application which balances the robot vertically using a closed-loop algorithm. You can program it to automatically move around through programming, or you can combine WiFi and Bluetooth to develop remote control functions.

This Robot is controllable by a Smartphone device or a Transmitter. The BALA2 base contains a wealth of interfaces. In addition to the conventional PortB and PortC, it also supports 8-channel servos, of which 4 channels can be directly connected, and the remaining 4 channels need to be connected from the inside of the base. Even if you have never attempted such a balancing robot program, you can quickly get the hang of it and control it through UIFlow. The self balancing robot uses data from the Accelerometer and Gyroscope to correct its orientation and position.The 2 DC driver module communicates with M5Stack Gray through I2C(0x3A).

## Product Features

- 9-DOF IMU
- Two-wheel drive, PID control balance
- Grove extension ports
- 8-channel servo drive, 4-channel external connection, 4-channel built-in
- Support WiFi/Bluetooth, programmable
- Built-in speaker
- TF Card Support
- LEGO™ Compatible 
- Programming Support
   + Python
   + UIFlow (Blockly)
   + Arduino

## Include

- 1x M5Stack Gray + BALA2
- 4x Wheel conncetor
- 2x HY2.0-4P Cables(20cm)
- 2x Bricks
- 1x Hex wrench
- Type-C USB Cable(120cm)

## Applications

- Balancing car

## Usage and Sensor calibration

Note: BALA2 has been calibrated , and it can automatically maintain its balance after turning it on. For manual calibration, please refer to [Quick Start](en/quick_start/bala2/bala2_quick_start.md)

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz Dual Core，600 DMIPS，520KB SRAM，Wi-Fi，Dual-mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash/RAM</td>
      <td>16MB Flash + 4MB PSRAM</td>
   </tr>
   <tr>
      <td>LCD</td>
      <td>2.0 inch, 320x240 Color TFT LCD, ILI9342C</td>
   </tr>
   <tr>
      <td>Speaker</td>
      <td>1W-0928</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>BMM150+MPU6886</td>
   </tr>
   <tr>
      <td>Motor Driver</td>
      <td>HR8833</td>
   </tr>
   <tr>
      <td>Base Controller</td>
      <td>STM32F030C8T6</td>
   </tr>
   <tr>
      <td>Ports</td>
      <td>GROVE I2C*1/UART*1/GPIO*1/SERVO*4(+4 Extendable Channel)</td>
   </tr>
   <tr>
      <td>Battery Capacity</td>
      <td>1200mAh</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>157g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>337g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54*54*65*mm</td>
   </tr>
   <tr>
      <td>Package dimensions</td>
      <td>100*100*100mm</td>
   </tr>
   <tr>
      <td>Case Material</td>
      <td>Plastic</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/APPLICATION/EasyLoader_BALA2_APPICATION.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/APPLICATION/EasyLoader_BALA2.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/App/BALA2.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Start and run, press button B + left power button to enter calibration mode, a / C adjustment, B key to save</p>
        </div>
    </div>
</div>



## Schematic

<div class="product_pic"><img src="assets/img/product_pics/app/Bala2/Bala2_sch.webp"></div>

## PinMap

**GROVE Port A & B & C**

<table class="table-1">
      <thead>
         <th>ESP32 Chip</th>
         <th>GPIO22</th>
         <th>GPIO21</th>
         <th>GPIO26</th>
         <th>GPIO36</th>
         <th>GPIO16</th>
         <th>GPIO17</th>
      </thead>
      <tbody>
         <tr>
            <td>PORT A</td>
            <td>SCL</td>
            <td>SDA</td>
         </tr>
         <tr>
            <td>PORT B</td>
            <td></td>
            <td></td>
            <td>DAC</td>
            <td>ADC</td>
            <td></td>
            <td></td>
         </tr>
         <tr>
            <td>PORT C</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>RX</td>
            <td>TX</td>
         </tr>
    </tbody>
</table>

## Example

### 1. Arduino IDE

To get complete code, please click，[click](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Application/Bala2)

- **[Tutorial&Quick-Start](en/quick_start/bala2/bala2_quick_start)**

<script>

   var purchase_link = 'https://m5stack.com/products/bala2-esp32-self-balancing-robot-kit?_pos=2&_sid=17e4ad51b&_ss=r&variant=36137100345508';

   var quickstart_link = '#/en/quick_start/bala2/bala2_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>