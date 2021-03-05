# COM.LoRaWAN470

<el-tag effect="plain">SKU:M031-C2</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com_lorawan470/com.lorawan470_01.webp"><img src="assets/img/product_pics/module/com_lorawan470/com.lorawan470_03.webp"><img src="assets/img/product_pics/module/com_lorawan470/com.lorawan470_04.webp"></div>

## Description

**COM.LoRaWAN470** is a LoRaWAN communication module suitable for 470MHz frequency launched by M5Stack. The module adopts the Ai-Thinker Ra-07 module solution, which supports long-distance communication and has both ultra-low power consumption and high sensitivity. The module integrates the LoRaWAN protocol stack and adopts a serial communication interface (using AT command set for control), and can be used as a collection node to access a large number of gateways for data collection and management. 

An external power supply is provided (5V-12V input can be adjusted by switching the dial on-board switches). The module fits for long distance low power IoT communication applications, such as deployment of environmental monitoring nodes.

## Product Features

- Ai-Thinker Ra-07 module solution
- Operating frequency: 470MHz
- SMA antenna
- Communication interface: UART
- Command protocol: AT command

## Includes

- 1x LoRaWAN470 Module
- 1x SMA antenna

## Application

- Automatic remote meter reading
- Intelligent traffic intelligent parking lot
- Remote irrigation and environmental monitoring

## Major countries and regions supported by CN470

**China**

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

<img src="assets/img/product_pics/module/com_lorawan470/com.lorawan470_02.webp">

## Related Links

- [COM.LoRaWAN470 AT Command Set](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/COM.LoRaWAN.Ra-07.asr6501-asr6502-at-commands-introduction-v4.3.pdf)

- [LoRaWAN Regional Parameters](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)

## Schematic

- The module plugs into the base

<img src="assets/img/product_pics/module/com_lorawan/com.lorawan_sch.webp">

## Example

- [Arduino code example](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_Socket)

<script>

   var purchase_link ='https://item.taobao.com/item.htm?ft=t&id=639100397855';

   anchor_search();
   scrollFunc();

</script>
