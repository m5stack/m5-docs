# M5StickC Quick Start {docsify-ignore-all}

<!-- ?> We suggest you confirm whether the `USB driver`, `Git` and `Arduino IDE` has installed first. If not, please view this two articles [establish serial connection](en/related_documents/establish_serial_connection) and [Install Git and Arduino IDE](en/related_documents/how_to_install_git_and_arduino). -->

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.png"><img src="assets/img/windows-logo.png">

## Table of Contents

**[1. Install Arduino IDE](#_1-Install-Arduino-IDE)**

**[2. Install ESP32 Boards Manager](#_2-Install-ESP32-Boards-Manager)**

**[3. Install M5Stack Library](#_3-Install-M5Stack-Library)**

**[4. Example](#_4-Example)**

## 1. Install Arduino IDE

<!-- *注意：如果已经安装了 IDE，请直接从[步骤 2](#_2-安装串口驱动) 开始。* -->

Open your browser, enter the official website of Arduino  https://www.arduino.cc/en/Main/Software

#### (1) click `Windows ZIP file for non admin install` for downloading `Arduino IDE`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package.png">

#### (2) click `JUST DOWNLOAD`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package_02.png">

#### (3) To install IDE, double click Arduino executable file. Keep the default selection throughout this process, including the installation path is also the default.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_arduino_install_path.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_arduino_2.png">

## 2. Install ESP32 Boards Manager

#### (1) Open IDE, click `File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02.png">

#### (2) Copy the following ESP32 Boards Manager url to `Additional Boards Manager URLs:`

*ESP32 Boards Manager url: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03.png">

#### (3) Click `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04.png">

#### (4) Search `ESP32` in the new pop-up dialog, then click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05.png">

## 3. Install M5StickC Library

#### (1) Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">

#### (2) Search `M5StickC` and install it

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_10.png">

## 4. Example

This section for verifying whether you can program with Arduino or not.

#### (1) Comfire the serial port

Open the `Windows Device Manager`

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_06.png">

Because M5StickC's serial driver chip is driver-free installation type, connect the M5StickC and the computer with the Tpye-C USB cable. A new serial port number will appear in the Device Manager.

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_05.png">

#### (2) Select an example likes `FactoryTest.ino`

Open Arduino IDE, then select your serial port which is connected M5Core.

Select board name, baudrate, the specified serial port: **ESP32 Pico Kit**, **115200**, COM31(Now, my serial port which is connected with PC is `COM31`)

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_08.png">

Select `M5StickC` -> `Basics` -> `FactoryTest.ino`

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_04.png">

Click `Upload`

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_09.png">
