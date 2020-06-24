# ATOM SWITCH Kit

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K042</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomhub_switch/atomswitch.webp"><img src="assets/img/product_pics/atom_base/atomhub_switch/atomswitch_02.webp"></div>

## Description

**ATOM SWITCH** is a bi-directional control programable switch for the M5ATOM. It can be connected to bi-directional AC / DC circuits for simultaneous on-off control. The on-board relay can support up to 250V / 16A AC or 5V / 1A DC output. Built in step-down module can provide 5V / 1A DC power supply. In order to ensure safe use, its DC circuit has a built-in self recovery fuse (250V / 1A), which can effectively disconnect the circuit in case of over current or short circuit. In order to facilitate the use of users in industrial scenarios, an SP485EE level-conversion IC is built in. There are also a set of RS485 interfaces provided for the user to connect RS485 equipment. In addition, a set of PH2.0 interfaces is also provided for connecting I2C peripheral equipment or general I/O equipment. With the Bluetooth and WiFi functions of M5ATOM, you can easily setup a remote control switch. If you have multiple M5ATOM HUB SWITCH modules, you can set them up in parallel through the RS485 interface.


## Product Features

- Compatible ATOM Matrix/ATOM Lite
- AC/DC input
- 2-way relay
- Built-in RS485 level-conversion, supporting Modbus
- PH2.0 port extend
- Self recovery fuse protection
- Remote control via Bluetooth, WiFi and RS485

## Include

- 1x ATOM SWITCH
- 1x ATOM Lite
- 4x Magnet
- 1x Magnet double-side tape
- 1x DIN Rail
- 1x 3.96*4P plug
- 3x 3.96*3P plug
- 1x M4 Hex Key
- 2x M4*10mm Hexagon countersunk screw
- 1x M2*20mm Hexagon socket cup head machine screw

## Applications

- Intelligent switch

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specification</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Relay</td>
      <td>AC 250V/16A, DC 5V/1A</td>
   </tr>
   <tr>
      <td>Input power</td>
      <td>AC 250V, DC 5V</td>
   </tr>
   <tr>
      <td>Interface</td>
      <td>1x PH2.0(PORT A)， 1x VH3.96 4P(RS485), 2x VH3.96 3P(Relay), 1x VH3.96 3P(AC/DC IN)</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>134g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>158g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>72*40*30mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>104*77*35mm</td>
   </tr>
   <tr>
      <td>Case material</td>
      <td>Plastic ( PC )</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_AtomHubSwitch.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_AtomHubSwitch.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomSwitch.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Press the key to control the switch. The status of breathing light indicates the relay serial number and switch status. When the red light or green light is on, press the key to switch the status</p>
        </div>
    </div>
</div>

## Related Link

-  **Datasheet** 
    - [SP485EE](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SP485EEN_en.pdf)

### Pin Map

<table>
 <tr><td>ATOM</td><td>22</td><td>19</td><td>33</td><td>23</td><td>25</td><td>21</td></tr>
 <tr><td>ATOM HUB SWITCH</td><td>Relay1</td><td>Relay2</td><td>RX</td><td>TX</td><td>SDA</td><td>SCL</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atomhub_switch/atomswitch_sch.webp">

## Example

- Arduino Example [Click Here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHubSwitch/AtomHubSwitch)

- UIFlow Example [Click Here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHubSwitch/UIFlow)

<img src="assets/img/product_pics/atom_base/atomhub_switch/uiflow_atomswitch.webp" width = "50%">

<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>