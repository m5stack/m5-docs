# M5StickV {docsify-ignore-all}

<div class="product_pic"><img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_01.jpg"><img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_02.jpg"></div>

## Description

M5Stack recently launched the new AIoT(AI+IoT) Camera powered by Kendryte K210 -an edge computing system-on-chip(SoC) with dual-core 64bit RISC-V CPU and state-of-art neural network processor.
<br><br>
M5StickV AI Camera features its integration with machine vision capabilities, featuring the unprocessed acceptability to AI Visioning with high energy efficiency and low cost. We co-oped with Sipeed providing the MicroPython environment makes programming onM5StickV easier.
<br><br>
The module comes with the OmniVision OV7740 sensor, using the OmniPixel®3-HS technology, providing a best-in-class low light sensitivity, making it ideal for machine vision. In addition to an OV7740 sensor, M5StickV features more hardware resources such as a speaker with built-in I2S Class-D DAC, IPS screen, 6-axis IMU, 200mAh Li-po battery, and more. 
<br><br>

### Features:
- Dual-Core 64-bit RISC-V RV64IMAFDC (RV64GC) CPU / 400Mhz(Normal)
- Dual Independent Double Precision FPU
- 8MiB 64bit width On-Chip SRAM 
- Neural Network Processor(KPU) / 0.8Tops
- Field-Programmable IO Array (FPIOA)
- Dual hardware 512-point 16bit Complex FFT 
- SPI, I2C, UART, I2S, RTC, PWM, Timer Support
- AES, SHA256 Accelerator 
- Direct Memory Access Controller (DMAC)
- Micropython Support
- Firmware encryption support
- Case Material: PC + ABS
-  On-board Hardware resources:
    - Flash:  16M.
    - TFT:  ST7789. 135*240 IPS 1.14  SPI
    - Camera :OV7740
    - PCM: MAX98357
    - PMIC: AXP192
    - Button:  Front and side.
    - Battery:  200mAh. 
    - Indicator light:  RGBW .
    - External storage:  TF card/Micro SD
    - Gyro:  MPU6886
    - Interface:  GROVE.

### Package Includes

-  1x M5StickV
-  1x USB Type-C(100cm)

## Weight and Size

- Package size:144mm x 44mm x 43mm
- Package weight:82g

### SD card test

M5StickV does not currently recognize all types of SD cards. We have tested some common SD cards. The test results are as follows.

<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_08.jpg" width="30%" height="30%">

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

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5StickV_v191022.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5StickV.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Equipped with Maixpy firmware, test camera, screen graphics display function, and then press the HOME button to turn on the rear fill light.</p>
        </div>
    </div>
</div>

### FUNCTIONAL DESCRIPTION
#### 1.1   KENDRYTE K210 
The Kendryte K210 is a system-on-chip (SoC) that integrates machine vision. Using TSMC’s ultra-low-power 28-nm advanced process with dualcore 64-bit processors for better power efficiency, stability and reliability. The SoC strives for ”zero threshold” development and to be deployable in the user’s products in the shortest possible time, giving the product artificial intelligence<br><br>
- Machine Vision
- Better low power vision processing speed and accuracy 
- KPU high performance Convolutional Neural Network (CNN) hardware accelerator
- Advanced TSMC 28nm process, temperature range -40°C to 125°C
- Firmware encryption support 
- Unique programmable IO array maximises design flexibility
- Low voltage, reduced power consumption compared to other systems with the same processing power
- 3.3V/1.8V dual voltage IO support eliminates need for level shifters

##### 1.1.1 CPU
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

#### 1.2    OV7740
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

##### 1.2.1 SPECIFICATION
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

#### 1.3    MAX98357
- Single-Supply Operation (2.5V to 5.5V).
- 3.2W Output Power into 4Ω at 5V
- 2.4mA Quiescent Current
- 92% Efficiency (RL = 8Ω, POUT = 1W)
- 22.8µVRMS Output Noise (AV = 15dB)
- Low 0.013% THD+N at 1kHz
- No MCLK Required
- Sample Rates of 8kHz to 96kHz
- Supports Left, Right, or (Left/2 + Right/2) Output
- Sophisticated Edge Rate Control Enables Filterless Class D Outputs
- 77dB PSRR at 1kHz
- Low RF Susceptibility Rejects TDMA Noise from GSM Radios
- Extensive Click-and-Pop Reduction Circuitry

#### 1.4    AXP192
- Operation Voltage: 2.9V - 6.3V(AMR：-0.3V~15V)
- Configurable Intelligent Power Select system 
- Current and voltage limit of adaptive USB or AC adapter input 
- The resistance of internal ideal diode lower than 100mΩ 

#### 1.5    MPU6886

##### 1.5.1 GYROSCOPE FEATURES
The triple-axis MEMS gyroscope in the MPU-6886 includes a wide range of features:
- Digital-output X-, Y-, and Z-axis angular rate sensors (gyroscopes) with a user-programmable full-scale range of ±250 dps, ±500 dps, ±1000 dps, and ±2000 dps and integrated 16-bit ADCs  
- Digitally-programmable low-pass filter 
- Low-power gyroscope operation 
- Factory calibrated sensitivity scale factor
- lens size: 1/5"
- Self-test

##### 1.5.2 ACCELEROMETER FEATURES
The triple-axis MEMS accelerometer in MPU-6886 includes a wide range of features:
- Digital-output X-, Y-, and Z-axis accelerometer with a programmable full scale range of ±2g, ±4g, ±8g and ±16g and integrated 16-bit ADCs
- User-programmable interrupts 
- Wake-on-motion interrupt for low power operation of applications processor
- Self-test 

## Applications/What can M5StickV do?
- Face recognition/detection
- Object detection/classification
- Obtaining size and coordinates of the target in real-time
- Obtaining the type of detected target in real-time
- Shape recognition
- Video/Display
- Game simulator

## Links

-  **Web page** - [Sipeed](https://maixpy.sipeed.com/en/)
-  **Quick Start Guide** - [M5StickV Guide](https://docs.m5stack.com/#/en/quick_start/m5stickv/m5stickv_quick_start)
-  **Github** - [API](https://github.com/sipeed/MaixPy/tree/master/projects/maixpy_m5stickv)
-  **Example** - [Code](en/related_documents/M5StickV-Maixpy)

-  **datasheet**
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [SH200Q](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SH200Q_en.pdf)

## Schematic

<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_04.jpg" width="30%" height="30%">

## V-Training

- [V-Training](https://docs.m5stack.com/#/en/related_documents/v-training)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/stickv';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/m5stickv/m5stickv_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>