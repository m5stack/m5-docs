# COM.LoRaWAN915

<el-tag effect="plain">SKU:M031-C3</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com_lorawan915/com.lorawan915_01.webp"><img src="assets/img/product_pics/module/com_lorawan915/com.lorawan915_03.webp"><img src="assets/img/product_pics/module/com_lorawan915/com.lorawan915_04.webp"></div>

## Description

**COM.LoRaWAN915** is a LoRaWAN communication module suitable for 915MHz frequency launched by M5Stack. The module adopts the ASR6501 solution, which supports long-distance communication and has both ultra-low power consumption and high sensitivity. The module integrates the LoRaWAN protocol stack and adopts a serial communication interface (using AT command set for control), and can be used as a collection node to access a large number of gateways for data collection and management. 

An external power supply is provided (5V-12V input can be adjusted by switching the dial on-board switches). The module fits for long distance low power IoT communication applications, such as deployment of environmental monitoring nodes.

## Product Features

- ASR6501
- Operating frequency: 915MHz
- SMA antenna
- Communication interface: UART
- Command protocol: AT command

## Includes

- 1x LoRaWAN915 Module
- 1x SMA antenna

## Application

- Automatic remote meter reading
- Intelligent traffic intelligent parking lot
- Remote irrigation and environmental monitoring

## Major countries and regions supported by AU915

**Argentina/Australia/Bolivia/Brazil/Canada/Chile/Colombia/Dominican Republic/Ecuador/Greece Guatemala/Honduras/Jamaica/Mexico/New-Zealand/Nicaragua/Panama/Paraguay/Peru/Papua New Guinea/Salvador/United States/Uruguay**

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specifications</td>
      <td>Parameters</td>
   </tr>
   <tr>
      <td>UART baud rate</td>
      <td>115200</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>35g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>72g</td>
   </tr>
   <tr>
      <td>Product size</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>Package size</td>
      <td>165*60*36mm</td>
   </tr>
 </table>

## Pin mapping

<table>
 <tr><td>CORE</td><td>RX</td><td>TX</td></tr>
 <tr><td>SW DIP-6 dip switch</td><td>G17/G0/G13</td><td>G16/G5/G15</td></tr>
</table>

?>**M5Stack FIRE** GPIO 16/17 is connected to PSRAM by default. If the TXD/RXD of this module uses GPIO16, GPIO17 will conflict with it. Therefore, when using **M5Stack FIRE** to drive the module, you need to switch the DIP switch to any one of the remaining two sets of pins.

<img src="assets/img/product_pics/module/com_lorawan915/com.lorawan915_02.webp">

## Related Links

- [COM.LoRaWAN915 AT Command Set](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/COM.LoRaWAN.Ra-07.asr6501-asr6502-at-commands-introduction-v4.3.pdf)

- [LoRaWAN Regional Parameters](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)

## Schematic

- The module plugs into the base

<img src="assets/img/product_pics/module/com_lorawan/com.lorawan_sch.webp">

## Example

- [Arduino code example](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/COM_LoRaWAN915)

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.LoRaWAN915.mp4" type="video/mp4">
</video>

<script>

   var purchase_link ='https://m5stack.com/products/com-lorawan-module-915mhz-asr6501-with-antenna';

   anchor_search();
   scrollFunc();

</script>
