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

Open up your browser, visit official website of Arduino  https://www.arduino.cc/en/Main/Software

#### (1) click `Mac OS X` to download `Arduino IDE`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

#### (2) click `JUST DOWNLOAD`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_02.png">

#### (3) Once the Arduino IDE is downloaded, double-click to open it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_03.png">

## 2. Install USB to Serial Driver

Open up your browser, visit M5Stack official website https://m5stack.com/download

#### (1) Navigate to `Explore` `Download`,click `CP210X Driver` `Mac` to download the installation package and then unzip it.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/download_usb_driver_mac_01.png">

#### (2) After unzipped this package, double click the disk image `SiLabsUSBDriverDisk.dmg` for installation

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

To make sure if the Driver has installed on your MAC:

Open `Terminal`, connect `M5Core` with your MAC through USB Type-C cable, and type in the following command to view the available serial ports list.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_02.png">

Disconnect M5Core device, and type in the same command on `Terminal`  to see which port disappeared from the list. 
That how we identify the name of the serial device.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_03.png">

The serial port name is `tty.SLAB_USBtoUART`

## 3. Install ESP32 Boards Manager

#### (1) Open up Arduino IDE, navigate to `File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

#### (2)  Copy the following ESP32 Boards Manager url to `Additional Boards Manager URLs:` , hit `OK`.

*ESP32 Boards Manager url: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

#### (3) Navigate to `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

#### (4) Search `ESP32` in the pop-up window, find it and  click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

## 4. Install M5Stack Library

#### (1)  Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">

#### (2) Search `M5Stack`  , find it and click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">

## 5. Install U8g2 Library

#### (1) Open Arduino IDE, navigate to  `Sketch`->`Include Library`->`Manage Libraries...`, search `U8g2` , and then `Install` this library.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">

## 6. Example

Now that everything is ready to go, you can select a demo example from the `Example` list, before that let's do some configuration on the IDE. 

Make sure you have M5Stick connected to your computer via USB

#### (1) Select the correct board name and serial device name

Start up Arduino IDE, and select `Tools -> Boards -> M5Stack-Core-ESP32` 

select `Tools -> Ports ->` to set up the serial port.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

#### (2) Select an example

Click `File-> Examples`. Here are some test demos in `M5Stack`->`Stick`

You can find a example name `FactoryTest` inside Basics.

<img src="assets/img/getting_started_pics/m5stick/m5stick_quick_start_arduino_mac_01.png">

Click `Upload`, to flash the code to the device. Once it's done, reset the device, the screen on M5Core will display "Hello World!"

**The button located on the bottom left is the power button, single-click to  reboot. To enter deep sleep mode, double click this button**

## Note

Most version of MacOS have no problem detecting the serial device that connected to the computer, but might have truble on High Sierra. Sometimes `SLAB_USBtoUART` fail to appear. In this case, after connected the M5,open `security and privacy` in the `system preferences` and set it to `permit`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **If you want to know more about the CP2104 USB driver permission, visit this link.** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html
