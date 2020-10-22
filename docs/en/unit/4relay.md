# 4-Relay {docsify-ignore-all}

<el-tag effect="plain">SKU:U097</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/4_relay/4relay.webp"></div>

## Description

**4-Relay**  is a unit integrated with 4-way relay, which is controlled by IIC. The maximum control voltage of relay is AC-250V, rated current is 10A, and instantaneous current can bear 16A. Each relay can be controlled independently. Each relay has a programmable status indicator.

## Product Features

- 4-way relay
- AC-250V/10A
- LED status indication
- IIC communication (0x26)

## Include

- 1x 4-Relay Unit
- 1x Grove Cable(20cm)

## Applications

- Digital signal switching
- Programmable power switch

## Specification
 
<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Maximum input voltage</td>
      <td>250V</td>
   </tr>
   <tr>
      <td>Rated current</td>
      <td>10A</td>
   </tr>
   <tr>
      <td>Maximum instantaneous currenta</td>
      <td>16A</td>
   </tr>
   <tr>
      <td>Communication</td>
      <td>IIC(0x26)</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>40g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>84g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>112*23*18mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>125*65*22mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_4_Relay_Unit.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_4Relay_Unit_for_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>ButtonA switches relay number, ButtonB switches led sync/ async, Button C controls all relays</p>
        </div>
    </div>
</div>

## Schematic

<img src="assets/img/product_pics/unit/4_relay/4-relay_sch.webp">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>SDA(GPIO21)</td><td>SCL(GPIO22)</td><td>5V</td><td>GND</td></tr>
 <tr><td>4-relay Unit</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

<<<<<<< HEAD
[click here to get Arduino example](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/4-RELAY)
=======
[click here to get Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/4-relay)
>>>>>>> f5e658cf43734e7147306f68d9027a32463a6ab5

<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>