# M5StickC Quick Start - Arduino Win {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.webp">

## Table of Contents

**[1. Install Arduino IDE](#_1-Install-Arduino-IDE)**

**[2. Install ESP32 Boards Manager](#_2-Install-ESP32-Boards-Manager)**

**[3. Install M5Stack Library](#_3-Install-M5Stack-Library)**

**[4. Example](#_4-Example)**

**[5. Video Tutorial](#_5-Video-Tutorial)**

## 1. Install Arduino IDE

<!-- *注意：如果已经安装了 IDE，请直接从[步骤 2](#_2-安装串口驱动) 开始。* -->

Open up your browser, and visit  Arduino official website https://www.arduino.cc/en/Main/Software

#### (1) click `Windows ZIP file for non admin install` to download `Arduino IDE`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package.webp">

#### (2) click `JUST DOWNLOAD`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package_02.webp">

#### (3) To install IDE, double click Arduino executable file. Keep the default selection throughout this process, including the installation path.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_arduino_install_path.webp">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_arduino_2.webp">

## 2. Install ESP32 Boards Manager

#### (1) Open up Arduino IDE, navigate to `File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01.webp">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02.webp">

#### (2) Copy the following ESP32 Boards Manager url to `Additional Boards Manager URLs:` , hit `OK`.

*ESP32 Boards Manager url: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03.webp">

#### (3) Navigate to `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04.webp">

#### (4) Search `ESP32` in `Boards Manager` window, find it and  click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05.webp">

## 3. Install M5StickC Library

#### (1) Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.webp">

#### (2) Search `M5StickC` and install this library.

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_10.webp">

## 4. Example

Now that everything is ready to go, you can select a demo example from the `Example` list, before that, let's do some configuration on the IDE. 

Make sure you have M5StickC connected to your computer via USB

#### (1) Arduino port Configuration

config your board name, baudrate, the specified serial port: M5StickC, 115200, COM port number

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_qs_win_adu_config_01.webp">

#### (2) Choose an example

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_qs_win_select_example.webp">

#### (3) Upload it
Click `Upload`, to flash the code to the device. 

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_qs_win_upload_01.webp">

## 5. Video Tutorial

- Tutorial video for M5StickC on Arduino

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/StickC/StickC%20Arduino%20Tutorial.mp4" type="video/mp4">
</video>