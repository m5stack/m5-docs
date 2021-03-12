# ATOM Socket Kit (HLW8023) - JP&US

<el-tag effect="plain">SKU:K055</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_socket/atom_socket_01.webp"><img src="assets/img/product_pics/atom_base/atom_socket/atom_socket_02.webp"><img src="assets/img/product_pics/atom_base/atom_socket/atom_socket_03.webp"></div>

## Description

**ATOM Socket** is a smart power socket adapted to ATOM main control. Built-in HLW8032 high-precision energy metering IC, can read the electrical parameters (line voltage, current, active power, apparent power and power factor) of the socket through serial communication. The external jack adopts Japanese standard specifications, and the internal integrated single-circuit relay (AC-100~120V@10A) is used to control the power on and off of the socket. With the ATOM main control integrated with WIFI&Bluetooth module, the power socket can be easily connected to the network for remote control And energy metering. The extra socket integrates HY2.0-4P interface, which can interact with external equipment (relay signal input, key signal output).

## Product Features

- Single relay control socket power on and off (100~120V@10A)
- HLW8032 High Precision Energy Metering IC
- Support voltage and current detection power calculation, within 1000:1 dynamic range:
    - The measurement error of active power reaches 0.2%
    - The effective current measurement error reaches 0.5%
    - The effective voltage measurement error reaches 0.5%
- UART communication (baud: 4800)
- ∑-Δ ADC, high-precision energy metering core
- JP&US standard jack- PSE certification
- HY2.0-4P external control interface

## Includes

- 1x ATOM Socket
- 1x ATOM LITE

## Application

- Metering socket
- Smart WIFI socket
- Smart home appliance control

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specifications</td>
      <td>Parameters</td>
   </tr>
   <tr>
      <td>HLW8032 serial port communication baud rate</td>
      <td>4800</td>
   </tr>
   <tr>
      <td>Recommended load power</td>
      <td><=1000W</td>
   </tr>
   <tr>
      <td>Relay parameters</td>
      <td>AC-100~120V@10A</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>104g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>116.6g</td>
   </tr>
   <tr>
      <td>Product size</td>
      <td>90*42*55mm</td>
   </tr>
   <tr>
      <td>Package size</td>
      <td>92*62*42mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a simple and fast program burner, which has a built-in product-related case program, which can be burned to the main control through simple steps to perform a series of functional verification.

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atom_Socket.exe">Windows</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_Socket.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p -id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282. 24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></path></svg></a>
            <p>Case description:</p>
            <p>Remotely control the ATOM Socket on and off the power supply, and monitor the power status</p>
        </div>
    </div>
</div>


## Related Links

-**Datasheet**
    -[HLW8032](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/atom_socket/DS_HLW8032_CN.pdf)

### Pin mapping

<table>
 <tr><td>ATOM</td><td>G22</td><td>G23</td></tr>
 <tr><td>ATOM Socket</td><td>RX</td><td>Relay</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atom_socket/atom_socket_sch_01.webp">
<img src="assets/img/product_pics/atom_base/atom_socket/atom_socket_sch_02.webp">

## Example

- [Arduino code example](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_Socket)

<script>

   var purchase_link ='https://m5stack.com/products/atom-socket-kit-hlw8023-jp-us';

   anchor_search();
   scrollFunc();

</script>
