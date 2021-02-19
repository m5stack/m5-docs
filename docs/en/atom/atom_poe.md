# ATOM PoE

<el-tag effect="plain">SKU:K052</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_poe/atom_poe_01.webp"></div>

## Description

**ATOM PoE** is an Ethernet accessory for the M5 Atom series，which Supports PoE(Active Ethernet)technology. The built-in PoE module can directly supply power to the entire device through a PoE hub/switch without a separate power supply, effectively reducing the cost of your setup. It has a built-in W5500 Ethernet controller, integrated TCP/IP protocol stack, with 8 independent hardware sockets, 10/100M Ethernet data link layer (MAC) and physical layer (PHY) to provide a more convenient Internet connection solution for your embedded systems. It can meet the wired network access requirements in the production environment.

## Product Features

- Supports PoE IEEE802.3 AF
- Wired Ethernet Access
- 8 independent hardware sockets
- Supports TCP、UDP、ICMP、IPv4、ARP、IGMP、PPPoE 
- Integrated 10BaseT / 100Base-T Ethernet PHY

## Includes

- 1x ATOM PoE
- 1x ATOM LITE
- 1x TYPE-C USB Cable（20cm)

## Application

- Remote control
- Wired Internet connection

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specification</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Ethernet Chip</td>
      <td>W5500</td>
   </tr>
   <tr>
      <td>Supported Protocols</td>
      <td>TCP、UDP、ICMP、IPv4、ARP、IGMP、PPPoE</td>
   </tr>
   <tr>
      <td>PoE Power Supply</td>
      <td>Idle pin power supply(10M/100M Ethernet)，J4&J5(VC-),J7&J8(VC+)</td>
   </tr>
   <tr>
      <td>PoE Spec</td>
      <td>IEEE802.3 AF</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>22g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>44g</td>
   </tr>
   <tr>
      <td>Product Dimension</td>
      <td>24*48*18mm</td>
   </tr>
   <tr>
      <td> Packaging Dimension </td>
      <td>54*54*20mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. 

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atom_PoE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ATOM_PoE.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_PoE.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Connect to Ethernet, access the control page via IP, control the RGB LED to change color</p>
        </div>
    </div>
</div>

 ## Related Links

- **Datasheet** 
    - [W5500](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/base/W5500_datasheet_v1.0.2_1_en.pdf)

### Pinout

<table class="table-1">
      <thead>
         <th>ATOM</th>
         <th>GPIO22</th>
         <th>GPIO19</th>
         <th>GPIO23</th>
         <th>GPIO33</th>
      </thead>
      <tbody>
         <tr>
            <td>ATOM PoE</td>
            <td>CLK</td>
            <td>CS</td>
            <td>MISO</td>
            <td>MOSI</td>
         </tr>
    </tbody>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atom_poe/atom_poe_sch.webp">

## Example

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_PoE)


<script>

   var purchase_link = 'https://m5stack.com/products/atom-poe-kit-with-w5500-hy601742e';


   anchor_search(purchase_link);
   scrollFunc();

</script>