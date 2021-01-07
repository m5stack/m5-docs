# ATOM H-DRIVER

<el-tag effect="plain">SKU:K050</el-talg>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_01.webp"><img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_02.webp"></div>

## Description

**ATOM HDriver** is a H-bridge motor driver accessory for M5Atom. It integrates the DRV8876 motor driver chip，which supports `9-24V/DC voltage input`(The inline DC/DC circuit supplies power to the whole device，the ADC pin G33 is directly connected to the voltage divider circuit and can monitor the power input at any time) The current output is `1.5A`, `max 2A`, It can be used for DC motor speed regulation and forward and reverse control. The driver integrates N-channel H-bridge, charge pump regulator, current detection and regulation, current proportional output and protection circuit (protection function integration: power supply undervoltage lockout (UVLO), charge pump undervoltage (CPUV), output overvoltage Current (OCP) and device over temperature (TSD), fault conditions are also indicated by the `FAULT` pin).

## Product Features

- N-channel H-bridge motor driver
    * Drives one bidirectional brushed DC motor
    * Other resistive and inductive loads
– DRV8876: 700-mΩ (High-Side + Low-Side)
- High output current capability
    * output 1.5A, Peak 2A
– H-bridge control modes
- 3.3-V logic inputs
- Spread spectrum clocking for low electromagnetic interference (EMI)
- Integrated protection features
    * Undervoltage lockout (UVLO)
    * Charge pump undervoltage (CPUV)
    * Overcurrent protection (OCP)
    * Automatic retry or outputs latched off(IMODE)
    * Thermal shutdown (TSD)
    * Automatic fault recovery
    * Fault indicator pin (nFAULT)

## Inclued

- 1x ATOM Lite
- 1x ATOM H-driver
- 1x 3.96*4P Male
- 1x M2 Hex Key
- 1x M2*8mm Hexagon socket cup head machine screw
- 1x TYPE-C USB Cable（20cm)

## Application

- DC motor control

## Specification

<table class="table-1">
    <thead>
    <tr>
        <th>Specification</th>
        <th>Parameter</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>Power Input</td>
            <td>9-24V/DC</td>
        </tr>
        <tr>
            <td>Current Output</td>
            <td>output 1.5A, peak 2A</td>
        </tr>
        <tr>
            <td>Net weight</td>
            <td>16g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>36g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td>24*48*18mm</td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>54*54*20mm</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. 

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atom_Hdriver.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ATOM_Hdriver.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_HDRIVER.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Press the middle button to control the motor is forward and reverse, long press to stop</p>
        </div>
    </div>
</div>

## Related Link

-  **Datasheet** 
    - [DRV8876PWPR](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/atom_hdriver/C575551_DRV8876PWPR_2020-06-01.PDF)

## PinMap

<table>
 <tr><td>ATOM</td><td>G22</td><td>G19</td><td>G23</td><td>G33</td></tr>
 <tr><td>Hdriver</td><td>FAULT</td><td>IN1</td><td>IN2</td><td>VIN-1/10</td></tr>
</table>

<img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_03.webp" width="30%">

?>Tip: When a fault occurs, the FAULT (G22) pin will be triggered to pull down. G33 can obtain 1/10 of the input voltage and can be used to detect the current power input.

## Schematic

<img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_sch.webp">

## Example

- [Arduino Example Code](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_Hdriver)


<script>

   var purchase_link = 'https://m5stack.com/products/atom-h-bridge-driver-kit-drv8876';

   anchor_search(purchase_link);
   scrollFunc();

</script>
