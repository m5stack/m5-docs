# UNIT-V {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit-v/unit_v_01.webp" width="30%" height="30%">
<img src="assets/img/product_pics/unit/unit-v/unit_v_02.webp" width="30%" height="30%">
<img src="assets/img/product_pics/unit/unit-v/unit_v_04.webp" width="30%" height="30%">



## Description
**UNIT-V** is the new AI Camera powered by Kendryte K210 .An edge computing system-on-chip(SoC) with dual-core 64bit RISC-V CPU and state-of-art neural network processor.UNIT-V AI Camera features its integration with machine vision capabilities, featuring the unprocessed acceptability to AI Visioning with high energy efficiency and low cost. We co-oped with Sipeed providing the MicroPython environment makes programming on UNIT-V easier.
Support MicroPython development environment, which makes the program code more concise when you use UNIT-V for project development.Equipped with OV2640 (2 megapixel) image sensor, it is an ideal choice for machine vision project.It is equipped with two programmable keys and an RGB LED indicator on the front for convenient status display.At the bottom, there is a PH2.0*4P interface and a type-C interface compatible with grove, which is convenient to connect with the main controllor. Support TF card to expand memory, related material and model file call more convenient.

<img src="assets/img/product_pics/unit/unit-v/unit_v_05.jpg" width="30%" height="30%">

### Features:
- Dual-Core 64-bit RISC-V RV64IMAFDC (RV64GC) CPU / 400Mhz(Normal)
- Dual Independent Double Precision FPU
- 8MiB 64bit width On-Chip SRAM 
- Neural Network Processor(KPU) / 0.8Tops
- Field-Programmable IO Array (FPIOA)
- AES, SHA256 Accelerator 
- Direct Memory Access Controller (DMAC)
- Micropython Support
- Firmware encryption support
- Case Material: PC + ABS
-  On-board Hardware resources:
    - Flash:  16M
    - Camera :OV2640
    - Button:  button * 2
    - Indicator light:  RGB LED 
    - External storage:  TF card/Micro SD
    - Interface:  PH2.0/compatible GROVE

### Applications/What can UNIT-V do?

- Face recognition/detection
- Object detection/classification
- Obtaining size and coordinates of the target in real-time
- Obtaining the type of detected target in real-time
- Shape recognition
- Video recoder

### Size and Weight
- Size: 4mm * 2.5mm * 1.5mm
- Weight: 4g

### Package Includes

-  1x UNIT-V(include 20cm 4P cable and USB-C cable)    

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

### About OV2640
- Output Formats(8-bit):
   - YUV(422/420)/YCbCr422
   - RGB565/555
   - 8-bit compressed data
   - 8-/10-bit Raw RGB data
- Maximum Image Transfer Rate according to specific format
   - UXGA/SXGA: 15fps
   - SVGA: 30fps
   - CIF: 60fps
- Scan Mode: Progressive
- Camera specifications
   - CCD size : 1/4 inch
   - Field of View : 65 degree
   - Maxmium Pixel: 2M



### SD card test

UNIT-V does not currently recognize all types of MicroSD cards. We have tested some common SD cards. The test results are as follows.

<img src="assets\img\product_pics\unit\unit-v/unit-v-08.jpg" width="40%" height="40%"><br>

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

## Links

-  **Web page** - [sipeed](https://maixpy.sipeed.com/en/)
-  **datasheet** - [K210](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/kendryte_datasheet_en.pdf)

## Example

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/UnitV/track_ball)*

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/unitV.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/unitv-ai-camera';


   anchor_search(purchase_link);
   scrollFunc();

</script>