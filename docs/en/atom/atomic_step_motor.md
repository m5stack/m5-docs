# ATOM STEPMOTOR Kit

<el-tag effect="plain">SKU:K047</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomStepMotor/atom_stepmotor.webp"></div>

## Description

**ATOM STEPMOTOR** is a stepper motor driver module suitable for Atom Lite only, with built-in DRV8825 driver chip, which can be used to drive a stepper motor. By adjusting the variable resistance, it can provide a maximum driving current of 1.2A. The chip has its own over-current protection function. A DIP switch on board can adjust the step number flexibly. Built in DC-DC,the external power supply can supply power to ATOM,drive motor needs an external power supply（9-18V).

## Product Features

- Adapt to Atom Lite only
- Built in DC-DC
- Up to 1/32 micro-stepper
- Maximum 1.2A drive current
- Working status indicator

## Include

- 1x ATOM Lite
- 1x Atom Step Motor
- 1x Type-C Cable(20cm)

## Applications

- Stepper motor controller

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specification</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Micro-Stepping Levels</td>
      <td>1/32 Step</td>
   </tr>
   <tr>
      <td>Output current</td>
      <td>Full-scale 1.2A</td>
   </tr>
   <tr>
      <td>Supply voltage</td>
      <td>9-18V</td>
   </tr>
   <tr>
      <td>External port</td>
      <td>KF128L 2.54 6P</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>53g</td>
   </tr>
   <tr>
      <td>Product size</td>
      <td>48*24*18mm</td>
   </tr>
   <tr>
      <td>Package size</td>
      <td>55*55*20mm</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/Easyloader_ATOMIC_StepMotor.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/Easyloader_ATOMIC_StepMotor.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomStepMotor.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p></p>
        </div>
    </div>
</div>

## Related Link

-  **Datasheet** 
    - [DRV8825](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/DRV8825_en.pdf)

### Pin Map

<table>
 <tr><td>ATOM Pin</td><td>G25</td><td>G21</td><td>G22</td><td>G19</td><td>G23</td></tr>
 <tr><td>ATOMIC StepMotor</td><td>FLT</td><td>RST</td><td>EN</td><td>STP</td><td>DIR</td></tr>
</table>

### Micro-stepping Setting

<table>
 <tr><td>DIP Switch</td><td>1</td><td>2</td><td>3</td></tr>
 <tr><td>Full-step</td><td>Low</td><td>Low</td><td>Low</td></tr>
 <tr><td>Half-step</td><td>High</td><td>LoW</td><td>LoW</td></tr>
 <tr><td>1/4 step</td><td>Low</td><td>High</td><td>Low</td></tr>
 <tr><td>1/8 step</td><td>High</td><td>High</td><td>Low</td></tr>
 <tr><td>1/16 step</td><td>Low</td><td>Low</td><td>High</td></tr>
 <tr><td>1/32 step</td><td>Hight</td><td>Low</td><td>High</td></tr>
 <tr><td>1/32 step</td><td>Low</td><td>High</td><td>High</td></tr>
 <tr><td>1/32 step</td><td>High</td><td>High</td><td>High</td></tr>
</table>

### Decay mode

<table>
 <tr><td>DIP Switch</td><td>4</td></tr>
 <tr><td>Slow Decay</td><td>Low</td></tr>
 <tr><td>Fast Decay</td><td>High</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atomStepMotor/AtomicStepMotor_sch.webp">

## Example

- [Click here to get Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/Atomic_StepMotor/Atomic_StepMotor)

- [Clicke here to get UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/Atomic_StepMotor/UIFlow)

<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>