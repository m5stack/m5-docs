# Core M5SticV {docsify-ignore-all}


<img src="assets\img\product_pics\hat\rs485_hat\rs485_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\rs485_hat\rs485_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\rs485_hat\rs485_hat_03.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/m5stickc-adc-hat)**

## Description

**M5Stick-V RISC-V AI Camera**

### General Description 
M5Stack recently launched the new AIOT(AI+IOT) Camera powered by Kendryte K210 -an edge computing system-on-chip(SoC) with dual-core 64bit RISC-V CPU and state-of-art neural network processor.
<br><br>
M5stick-V AI Camera features its integration with machine vision capabilities, featuring the unprocessed acceptability to AI Visioning with high energy efficiency and low cost. We co-oped with Sipeed providing the MicroPython environment makes programming onM5stick-V easier.
<br><br>
The module comes with the OmniVision OV7740 sensor, using the OmniPixel®3-HS technology, providing a best-in-class low light sensitivity, making it ideal for machine vision. In addition to an OV7740 sensor, M5stick-V features more hardware resources such as a speaker with built-in I2S Class-D DAC, MEMS Microphone, IPS screen, 6-axis IMU, 200mAh Li-po battery, and more. 
<br><br>
More than the visioning, M5stick-V also features the embedded APU - Audio Processor. With its hardware beam-forming support and dual 512-point FFT units, the M5stick-V is also capable of a series of machine hearing works like voice wake-up to speech recognition.
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
-  Direct Memory Access Controller (DMAC)
- Micropython Support
- Firmware encryption support
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
    - Microphone:  MSM261S4030HOR.
    - Gyro:  MPU6886. 
    - Interface:  CONNEXT .


### FUNCTIONAL DESCRIPTION
#### 1.1   KENDRYTE K210 
The Kendryte K210 is a system-on-chip (SoC) that integrates machine vision and machine hearing. Using TSMC’s ultra-low-power 28-nm advanced process with dualcore 64-bit processors for better power efficiency, stability and reliability. The SoC strives for ”zero threshold” development and to be deployable in the user’s products in the shortest possible time, giving the product artificial intelligence<br><br>
- Machine Vision
- Machine Hearing
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
- Operation Voltage: 2.9V~6.3V (AMR：-0.3V~15V)
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

#### 1.6.    ANOTHER HARDWARES
- Flash:  16M.
- TFT:  ST7789. 135*240 IPS 1.14  SPI
- Button:  Front and side.
- Battery:  200mAh. 
- Indicator light: RGBW.
- External storage:  TF card/Micro SD
- Microphone:  MSM261S4030HOR.
- Gyro:  MPU6886. 
- Interface:  CONNECT.

## Applications/What can M5Stick-V do?
- Face recognition/detection
- Object detection/classification
- Obtaining size and coordinates of the target in real-time
- Obtaining the type of detected target in real-time
- Shape recognition
- Video/Audio Record/Display
- Game simulator


## Links

-  **Web page** - [sipeed](https://maixpy.sipeed.com/en/)
-  **Quick Start Guide** - [sipeed](https://maixpy.sipeed.com/en/)





