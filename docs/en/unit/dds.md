# DDS

<el-tag effect="plain">SKU:U105</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/dds/dds_01.webp"><img src="assets/img/product_pics/unit/dds/dds_02.webp"></div>

## Description

**DDS** is a signal source Unit. It uses the AD9833 programmable waveform generator + STM32F0 micro controller. Based on I2C communication interface (addr:0x31) It can easily control the signal source to output multiple waveforms (sine wave, triangle wave, square wave output, sawtooth wave, signal output amplitude 0-0.6V) and adjust the frequency and phase.

It supports deep sleep mode, which can reduce the power consumption in the idle state. The Unit is suitable for the electronic circuit prototype design of various test instruments as a signal source.

## Product Features

- Digital programmable frequency and phase
- Signal output amplitude 0-0.6V
- Sine wave/Triangle wave/Square wave/Sawtooth wave (fixed frequency: 13.6KHz)/DC output
- Output frequency range: 0MHz to 1MHz (10MHz based on the reference clock)
- 28bit frequency resolution
- 11bit phase resolution

## Includes

- 1x DDS Unit
- 1x HY2.0-4P cable
- 1x SMA-2.54mm cable

## Application

- Frequency stimulation/waveform generation
- Liquid flow and airflow measurement
- Sensor applications: proximity, motion and defect detection
- Line loss/attenuation
- Testing and medical equipment
- Scan/clock generator
- Time domain reflectometry (TDR) application

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specifications</td>
      <td>Parameters</td>
   </tr>
   <tr>
      <td>Support waveform</td>
      <td>Sine wave/Triangle wave/Square wave/Sawtooth wave (fixed frequency: 13.6KHz)/DC output</td>
   </tr>
   <tr>
      <td>Signal output amplitude</td>
      <td>0-0.6V</td>
   </tr>
   <tr>
      <td>Output frequency range</td>
      <td>0MHz to 1MHz (10MHz based on the reference clock)</td>
   </tr>
   <tr>
      <td>Frequency resolution</td>
      <td>28bit</td>
   </tr>
   <tr>
      <td>Phase resolution</td>
      <td>11bit</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>11.1g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>34.7g</td>
   </tr>
   <tr>
      <td>Product size</td>
      <td>71*24*8mm</td>
   </tr>
   <tr>
      <td>Package size</td>
      <td>88.5*60*21mm</td>
   </tr>
 </table>

## Related Links

- **[AD9833](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/dds/ad9833.pdf)**

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_DDS_UNIT_With_M5Core.exe">Windows</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/DDS_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Control DDS Unit Output Sine wave/Triangle wave/Square wave/Sawtooth wave.</p>
        </div>
    </div>
</div>

## Example

### Arduino IDE

- [Arduino example program](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/DDS_AD9833)


## Schematic

<img src="assets/img/product_pics/unit/dds/dds_sch.webp">

## Pin mapping

<table>
 <tr><td>M5Core</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>DDS Unit</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
</table>

## I2C register

- I2C Address: **0x31**

>When writing a register, the highest bit must be set to 1. The mclk is set to "1" by default, it will keep the last output signal magnitude. Once the DAC is set to 1, it stops the Unit output.

```
/*------------------------------------------------ -------------------------------------------------- */
// | DDS CTRL REG | 0x20
// | ----------------------------------------------- -------------------------------------------------
// | dds_ctrl_reg[0] | R/W | System control
// | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
// | W | R | R | R | R | MODE |
//
// | -MODE: 000 Reserved
// | 001 SINUS
// | 010 TRIANGLE
// | 011 SQUARE
// | 100 SAWTOOTH
// | 101 DC
//
// | dds_ctrl_reg[1] | R/W | System control
// | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
// | W | FSELECT | PSELECT | S01 | S12 | RSET | R | R |
//
// | -FSELECT: 0 Used FREQ0
// 1 Used FREQ1
// | -PSELECT: 0 Used PHASE0
// 1 Used PHASE1
// | -SLEEP01: 1 Disenable mclk
// | -SLEEP12: 1 Disenable DAC
/*------------------------------------------------ -------------------------------------------------- -

/*------------------------------------------------ -------------------------------------------------- */
// | DDS FREQ PHASE REG | 0x30
// | ----------------------------------------------- -------------------------------------------------
    // | dds_freq_phase_reg[0:3] | R/W | FREQ(28bit)
    // | 31 | 30 | 29:28 | 27:0 |
    // | W | N | R | freq reg 0 |
    //
    // | dds_freq_phase_reg[4:5] | R/W | PHASE(12bit)
    // | 15 | 14 | 13:12 | 11:0 |
    // | W | N | R | phase reg 1 |
//
/*------------------------------------------------ -------------------------------------------------- -*/

```


<script>

   var purchase_link = 'https://m5stack.com/products/dds-unit-ad9833';
   
   anchor_search(purchase_link);
   scrollFunc();

</script>