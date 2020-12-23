# UnitV(OV7740)

<el-tag effect="plain">SKU:U078-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit-v/unitv_ov7740.webp"></div>

## Tutorial&Quick-Start

Choose the development platform you want to use, view the corresponding tutorial&quick-Start.

<a href="/#/zh_CN/quick_start/unitv/v_function"><el-tag effect="plain">V-Function</el-tag></a>
<a href="/#/zh_CN/related_documents/v-training"><el-tag effect="plain">V-Training</el-tag></a>
<a href="/#/zh_CN/quick_start/unitv/unitv_quick_start_maixpy"><el-tag effect="plain">Maixpy</el-tag></a>

## Description

**UnitV(OV7740)** is the new AI Camera powered by Kendryte K210, an edge computing system-on-chip(SoC) with dual-core 64bit RISC-V CPU and state-of-art neural network processor.

UNIT-V AI Camera features its integration with machine vision capabilities, featuring the unprocessed acceptability to AI Visioning with high energy efficiency and low cost. We co-oped with Sipeed providing the MicroPython environment makes programming on UNIT-V easier.

Support MicroPython development environment, which makes the program code more concise when you use UNIT-V for project development.Equipped with OV7740 image sensor, it is an ideal choice for machine vision project.

It is equipped with two programmable keys and an RGB LED indicator on the front for convenient status display.At the bottom, there is a HY2.0*4P interface and a type-C interface compatible with grove, which is convenient to connect with the main controller. Support TF card to expand memory, related material and model file call more convenient.

## Product Features

- Dual-Core 64-bit RISC-V RV64IMAFDC (RV64GC) CPU / 400Mhz(Normal)
- Dual Independent Double Precision FPU
- 8MiB 64bit width On-Chip SRAM
- Neural Network Processor(KPU) / 0.8Tops
- Field-Programmable IO Array (FPIOA)
- AES, SHA256 Accelerator
- Direct Memory Access Controller (DMAC)
- Micropython Support
- Firmware encryption support
- On-board Hardware resources:
    - Flash:  16M
    - Camera :OV7740
    - Button:  button * 2
    - Indicator light:  WS2812 LED
    - External storage:  TF card/Micro SD
    - Interface:  HY2.0/compatible GROVE


## Include

-  1x UNIT-V(include 20cm 4P cable and USB-C cable)  

## Applications

- Face recognition/detection
- Object detection/classification
- Obtaining size and coordinates of the target in real-time
- Obtaining the type of detected target in real-time
- Shape recognition
- Video recoder

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Kendryte K210</td>
      <td>Dual-Core 64-bit RISC-V RV64IMAFDC (RV64GC) CPU / 400Mhz(Normal)</td>
   </tr>
   <tr>
      <td>SRAM</td>
      <td>8MiB</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>16M</td>
   </tr>
   <tr>
      <td>Input voltage</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>KPU Neural network parameter size</td>
      <td>5.5MiB - 5.9MiB</td>
   </tr>
   <tr>
      <td>Interface</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>RGB LED</td>
      <td>WS2812 x 1</td>
   </tr>
   <tr>
      <td>Button</td>
      <td>x 2</td>
   </tr>
   <tr>
      <td>Image Sensor</td>
      <td>OV2640</td>
   </tr>
   <tr>
      <td>FOV</td>
      <td>65deg</td>
   </tr>
   <tr>
      <td>External storage</td>
      <td>TF Card/Micro SD</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>8g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>45g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>40mm * 24mm * 13mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>70mm * 50mm * 30mm</td>
   </tr>
   <tr>
      <td>shell material</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>


### About KENDRYTE K210

The Kendryte K210 is a system-on-chip (SoC) that integrates machine vision. Using TSMC’s ultra-low-power 28-nm advanced process with dualcore 64-bit processors for better power efficiency, stability and reliability. The SoC strives for ”zero threshold” development and to be deployable in the user’s products in the shortest possible time, giving the product artificial intelligence
- Machine Vision
- Better low power vision processing speed and accuracy
- KPU high performance Convolutional Neural Network (CNN) hardware accelerator
- Advanced TSMC 28nm process, temperature range -40°C to 125°C
- Firmware encryption support
- Unique programmable IO array maximises design flexibility
- Low voltage, reduced power consumption compared to other systems with the same processing power
- 3.3V/1.8V dual voltage IO support eliminates need for level shifters

The chip contains a high-performance, low power RISC-V ISA-based dual core 64-bit  CPU with the following features:
- Core Count：  Dual-core processor
- Bit Width:   64-bit CPU 400MHz
- Frequency:   400MHz
- ISA extensions:  IMAFDC
- FPU:  Double Precision
- Platform Interrupts:  PLIC
- Local Interrupts:  CLINT
- I-Cache:  32KiB x 2
- D-Cache:  32KiB x 2
- On-Chip SRAM:  8MiB

### OV7740

- support for output formats: RAW RGB and YUV
- support for image sizes: VGA, QVGA, CIF and any size smaller
- support for black sun cancellation
- support for internal and external frame synchronization
- standard SCCB serial interface
- digital video port (DVP) parallel output interface 
- embedded one-time programmable (OTP) memory
- on-chip phase lock loop (PLL)
- embedded 1.5 V regulator for core
- Sophisticated Edge Rate Control Enables Filterless Class D Outputs
- 77dB PSRR at 1kHz
- Low RF Susceptibility Rejects TDMA Noise from GSM Radios
- Extensive Click-and-Pop Reduction Circuitry
- array size: 656 x 488 
- power supply: – core: 1.5VDC ± 5% – analog: 3.3V ± 5% – I/O: 1.7 ~ 3.47V 
- temperature range: – operating: -30° C to 70°C – stable image: 0° C to 50° C 
- output format: – 8-/10-bit raw RGB data – 8-bit YUV
- lens size: 1/5"
- input clock frequency: 6 ~ 27 MHz
- max image transfer rate: VGA (640x480): 60 fps – QVGA (320 x 240): 120 fp
- sensitivity:  6800 mV/(Lux-sec)
- maximum exposure interval: 502 x tROW 
- pixel size: 4.2  μm x 4.2 μm
- image area: 2755.2  μm x 2049.6 μm
- package/die dimensions: – CSP3: 4185  μm  x 4345  μm – COB: 4200 μm x 4360 μm

### SD card test

UNIT-V does not currently recognize all types of MicroSD cards. We have tested some common SD cards. The test results are as follows.

<img src="assets\img\product_pics\unit\unit-v/unit-v-08.webp" width="40%" height="40%"><br>

<table class="table_center">
   <tr style="font-weight:bold" >
      <td>Brand</td>
      <td>Storage</td>
      <td>Type</td>
      <td>Class</td>
      <td>Format</td>
      <td>Test Results</td>
   </tr>
   <tr>
      <td>Kingston</td>
      <td>8G</td>
      <td>HC</td>
      <td>Class4</td>
      <td>FAT32</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>Kingston</td>
      <td>16G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>Kingston</td>
      <td>32G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>NO</td>
   </tr>
   <tr>
      <td>Kingston</td>
      <td>64G</td>
      <td>XC</td>
      <td>Class10</td>
      <td>exFAT</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>SanDisk</td>
      <td>16G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>SanDisk</td>
      <td>32G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>SanDisk</td>
      <td>64G</td>
      <td>XC</td>
      <td>Class10</td>
      <td>/</td>
      <td>NO</td>
   </tr>
   <tr>
      <td>SanDisk</td>
      <td>128G</td>
      <td>XC</td>
      <td>Class10</td>
      <td>/</td>
      <td>NO</td>
   </tr>
   <tr>
      <td>XIAKE</td>
      <td>16G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>OK(purple)</td>
   </tr>
   <tr>
      <td>XIAKE</td>
      <td>32G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>XIAKE</td>
      <td>64G</td>
      <td>XC</td>
      <td>Class10</td>
      <td>/</td>
      <td>NO</td>
   </tr>
   <tr>
      <td>TURYE</td>
      <td>32G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>/</td>
      <td>NO</td>
   </tr>
</table>

## Related Link

- **Web page** - [sipeed](https://maixpy.sipeed.com/en/)
- **datasheet** - [K210](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/kendryte_datasheet_en.pdf)

## PinMap

<img src="assets/img/product_pics/unit/unit-v/unitv_ov7740_sticker.webp" width="30%">

## Example

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/UnitV/track_ball)

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/unitV.mp4" type="video/mp4">
</video>

<el-divider content-position="right">Last updated: 2020-12-14</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/unitv-ai-camera';
   var quickstart_link = '/#/en/quick_start/unitv/unitv_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>
