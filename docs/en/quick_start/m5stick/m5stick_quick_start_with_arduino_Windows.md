# M5Stick Quick Start - Arduino Win {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stick/stick_01.png"><img src="assets/img/getting_started_pics/m5stick/stick_06.png"><img src="assets/img/windows-logo.png">

## Table of Contents

**[1. Install Arduino IDE](#_1-install-Arduino-IDE)**

**[2. Install USB to Serial Driver](#_2-Install-USB-to-Serial-Driver)**

**[3. Install ESP32 Boards Manager](#_3-Install-ESP32-Boards-Manager)**

**[4. Install M5Stack Library](#_4-Install-M5Stack-Library)**

**[5. Install U8g2 Library](#_5-Install-U8g2-Library)**

**[6. Example](#_6-Example)**

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

## 2. Install USB to Serial Driver

Open your browser, enter the official website of M5Stack  https://m5stack.com/download

#### (1) click `Windows` for downloading this installation package and then unzip this package.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_usb_driver_win_01.png">

#### (2) According to your Windows operating system type, select the corresponding driver installation package

* 32-bit Windows operating system, choose `CP210xVCPInstaller_x86_vx.x.x.x.exe`

* 64-bit Windows operating system, choose `CP210xVCPInstaller_x64_vx.x.x.x.exe`

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">

#### (3) double click the executable file for installing.

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">

#### (4) Check the serial port number `COMx`

To comfirm if the USB to Serial Driver was successfully installed already, Check the list of identified COM ports in the `Windows Device Manager`:

Connect the Core to the computer via a USB Type-C cable, open `Windows Device Manager`, click `Ports(COM & LPT)` for checking the list of identified COM ports.

Disconnect M5Core device and connect it back, to verify which port disappears from the list and then shows back again.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_01.png">

## 3. Install ESP32 Boards Manager

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

## 4. Install M5Stack Library

#### (1) Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">

#### (2) Search `M5Stack` and install it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">

## 5. Install U8g2 Library

#### (1) Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`, search `M5Stack` and install it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">

## 6. Example

This section for verifying whether you can program with Arduino or not. Now, The USB cable connects to <mark>[M5Stick built in MPU9250](https://ae01.alicdn.com/kf/HTB1pICNXznuK1RkSmFPq6AuzFXa1.jpg)</mark>, then select your serial port which is connected the M5Stick.

Select a demo example, compile and upload

#### (1) Execute a example likes `FactoryTest.ino`

Select your board name, baudrate, the specified serial port: M5Stack-Core-ESP32, 921600, COM4 (Now, my serial port which is connected with PC is `COM4`)

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">

#### (2) Then select an example likes `FactoryTest.ino`

<font color="red">Then select an example likes M5Stack -> Stick -> FactoryTest.ino</font>

<img src="assets/img/getting_started_pics/m5stick/m5stick_arduino_windows_01.png">

#### (3) Upload it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">

**Phenomenon: After pressing button A, the screen displays "Hello World! Exist"**

**The button located at the bottom left of stick is the power button, click to turn it on, press again to reset when running. If you want to let stick enter deep sleep status, you need to press the power button twice quickly.**
