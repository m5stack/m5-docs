# CAN (Controller Area Network) Unit

<el-tag effect="plain">SKU:U085</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/can/can.webp"></div>

## Description

**CAN Unit** is an isolated controller area network (CAN) transceiver unit, which can be used to build a complex can communication network. The built-in DC-DC isolated power chip can isolate noise and interference and prevent damage to sensitive circuits.

The model of the isolated CAN transceiver is ca-is3050g, which can provide differential reception and differential transmission capabilities. The bus can support up to 110 nodes, and the signal transmission rate can reach 1Mbps. It has current limiting, over-voltage, grounding loss protection (– 40 V to 40 V) and thermal shutdown functions, which can prevent output short-circuit and meets the technical specifications of ISO11898-2 standard.

CAN is an ISO international standard serial communication protocol. CAN belongs to the field bus category. It is a kind of serial communication network which can effectively support distributed control or real-time control.

The distributed control system based on CAN bus adopts multi master competitive bus structure, which has the characteristics of multi master station operation, decentralized arbitration and broadcast communication.

It has some obvious advantages in the following aspects: High speed low failure rate data communication between nodes in the network. When multiple nodes initiate communication at the same time, the one with low priority will avoid the one with high priority, which will not cause congestion to the communication line. The communication distance can reach 10km (the rate is lower than 5Kbps) and the rate can reach 1Mbps (communication distance is less than 40m).

## Product Features

- Up to 1000Vrms isolation and withstand voltage
- Power light
- Built-in isolated DC-DC
- Signal rate up to 1Mbps
- Protection function: signal isolation, current limiting, over-voltage protection and thermal shutdown
- 2x LEGO compatible hole
- HY2.0 4P Interface

## Include

- 1x CAN Unit
- 1x HY2.0 Cable(5CM)

## Application

- CAN bus communication
- Industrial field control
- Security system

## Specification

<table class="table-1">
    <thead>
    <tr>
        <th>Resources</th>
        <th>Parameter</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>Rated withstand voltage</td>
            <td>1000V</td>
        </tr>
        <tr>
            <td>Maximum rate</td>
            <td>1Mbps</td>
        </tr>
        <tr>
            <td>Number of theoretical nodes</td>
            <td>110</td>
        </tr>
        <tr>
            <td>Low loop delay</td>
            <td>-150ns</td>
        </tr>
        <tr>
            <td>Common mode voltage</td>
            <td>-12V ~ 12V</td>
        </tr>
        <tr>
            <td>Protection Function</td>
            <td>Current limiting, over voltage, main dynamic time-out function and signal isolation</td>
        </tr>
        <tr>
            <td>Net Weight</td>
            <td>12g</td>
        </tr>
        <tr>
            <td>Gross Weight</td>
            <td>25g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td>65 x 24 x 8mm</td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>67 x 53 x 12mm</td>
        </tr>
        <tr>
            <td>Case Material</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_CAN_Unit_SEND%26RECEIVE.zip">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_CAN_SEND%26RECEIVE.zip">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/CAN%20UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Can data transceiver</p>
        </div>
    </div>
</div>

### Pin Map

<table>
 <tr><td>M5Core(PORT C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>CAN Unit</td><td>RXD</td><td>TXD</td><td>5V</td><td>GND</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/unit/can/CAN_sch.webp">


## Related Link

-  **Datasheet**

   - [CA-IS3050G](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/CA-IS3050G.pdf)

## Example

### 1. Arduino

[Click here to download Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CAN)

<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/canbus-unitca-is3050g';

   anchor_search(purchase_link);
   scrollFunc();

</script>
