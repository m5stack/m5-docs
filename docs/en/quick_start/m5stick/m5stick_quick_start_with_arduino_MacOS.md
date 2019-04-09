# M5Stick Quick Start - Arduino Mac {docsify-ignore-all}

<!-- :clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Text-Tutorial)** -->

<!-- *** -->

<!-- ?> Before setting the development environment, we suggest you confirm whether the USB driver has installed. If not, please visit this link [establish serial connection](/en/related_documents/establish_serial_connection). -->

<img src="assets/img/getting_started_pics/m5stick/stick_01.png"><img src="assets/img/getting_started_pics/m5stick/stick_06.png"><img src="assets/img/macos-logo.png">

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

#### (1) click `Mac OS X` for downloading `Arduino IDE`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

#### (2) click `JUST DOWNLOAD`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_02.png">

#### (3) Once the Arduino IDE is downloaded, you can double-click it to open it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_03.png">

## 2. Install USB to Serial Driver

Open your browser, enter the official website of M5Stack  https://m5stack.com/download

#### (1) click `Mac` for downloading this installation package and then unzip this package

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/download_usb_driver_mac_01.png">

#### (2) After unzipped this package, double click the disk image `SiLabsUSBDriverDisk.dmg` for installing

<img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_dmg.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_pkg.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/2.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/3.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/4.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/5.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/6.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/7.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/8.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/9.png">

#### (3) Check the serial port number `/dev/tty.SLAB_USBtoUART`

Comfirm if the USB to Serial Driver was successfully installed already:

Open `Terminal`, connect `M5Core` with PC through USB Type-C cable, and execute the following command for viewing serial port list.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_02.png">

Disconnect M5Core device, and execute the just executed command to verify which port disappears from the list. The disappearing COM port is the serial port name corresponding to M5Core.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_03.png">

Now, the serial port name is `tty.SLAB_USBtoUART`

## 3. Install ESP32 Boards Manager

#### (1) Open IDE, click `File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

#### (2) Copy the following ESP32 Boards Manager url to `Additional Boards Manager URLs:`

*ESP32 Boards Manager url: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

#### (3) Click `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

#### (4) Search `ESP32` in the new pop-up dialog, then click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

## 4. Install M5Stack Library

#### (1) Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">

#### (2) Search `M5Stack` and install it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">

## 5. Install U8g2 Library

#### (1) Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`, search `M5Stack` and install it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">

## 6. Example

The USB cable connects to <mark>[M5Stick built in MPU9250](https://ae01.alicdn.com/kf/HTB1pICNXznuK1RkSmFPq6AuzFXa1.jpg)</mark>, then select your serial port which is connected the M5Stick.

Select a demo example, compile and upload

#### (1) Select your board and the serial port

Start up Arduino IDE, and click `Tools -> Boards -> M5Stack-Core-ESP32` to select your board

Click `Tools -> Ports ->` to select the serial port which is connected with M5Stick

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

#### (2) Select an example

Click `File-> Examples`. Here are some test programs in `M5Stack`->`Stick`

Try to open a sketch called `FactoryTest` inside Basics.

<img src="assets/img/getting_started_pics/m5stick/m5stick_quick_start_arduino_mac_01.png">

Compile it and upload, the M5Stick screen will show "Hello World! Exist""

**The button located at the bottom left of stick is the power button, click to turn it on, press again to reset when running. If you want to let stick enter deep sleep status, you need to press the power button twice quickly.**

## Note

Although most versions of MacOS have no problem with detecting the COM port, on some newer versions of High Sierra sometimes Slab\_USBtoUART does not appear. If this is the case, after you connect the M5 open `security and privacy` in the system preferences and set it to `permit`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **If you want to read more the permission about the CP2104 USB driver, visit the following link please.** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html
