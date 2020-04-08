# M5Stick Quick Start - Arduino Mac {docsify-ignore-all}

<!-- :clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Text-Tutorial)** -->

<!-- *** -->

<!-- ?> Before setting the development environment, we suggest you confirm whether the USB driver has installed. If not, please visit this link [establish serial connection](/en/related_documents/establish_serial_connection). -->

<img src="assets/img/getting_started_pics/m5stick/stick_01.webp"><img src="assets/img/getting_started_pics/m5stick/stick_06.webp">

## Table of Contents

**[1. Install Arduino IDE](#_1-install-Arduino-IDE)**

**[2. Install USB to Serial Driver](#_2-Install-USB-to-Serial-Driver)**

**[3. Install ESP32 Boards Manager](#_3-Install-ESP32-Boards-Manager)**

**[4. Install M5Stack Library](#_4-Install-M5Stack-Library)**

**[5. Install U8g2 Library](#_5-Install-U8g2-Library)**

**[6. Example](#_6-Example)**

## 1. Install Arduino IDE

<!-- *注意：如果已经安装了 IDE，请直接从[步骤 2](#_2-安装串口驱动) 开始。* -->

Open up your browser, visit Arduino official website  https://www.arduino.cc/en/Main/Software

#### (1) click `Mac OS X` to download `Arduino IDE`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.webp">

#### (2) click `JUST DOWNLOAD`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_02.webp">

#### (3) Once the Arduino IDE is downloaded, double-click to open it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_03.webp">

## 2. Install USB to Serial Driver

>1.Click the link on the right to download the CP210X driver.. <a class="link" style="padding-left: 20%" href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.webp?v=1557026570" alt="">MacOS</a>

#### (2) After unzipped this package, double click the disk image `SiLabsUSBDriverDisk.dmg` for installation

<img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_dmg.webp">

<img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_pkg.webp">

<img src="assets/img/getting_started_pics/establish_serial_connection/2.webp">

<img src="assets/img/getting_started_pics/establish_serial_connection/3.webp">

<img src="assets/img/getting_started_pics/establish_serial_connection/4.webp">

<img src="assets/img/getting_started_pics/establish_serial_connection/5.webp">

<img src="assets/img/getting_started_pics/establish_serial_connection/6.webp">

<img src="assets/img/getting_started_pics/establish_serial_connection/7.webp">

<img src="assets/img/getting_started_pics/establish_serial_connection/8.webp">

<img src="assets/img/getting_started_pics/establish_serial_connection/9.webp">

#### (3) Check the serial port number `/dev/tty.SLAB_USBtoUART`

To make sure if the Driver has installed on your MAC:

Open `Terminal`, connect `M5Core` with your MAC through USB Type-C cable, and type in the following command to view the available serial ports list.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_01.webp">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_02.webp">

Disconnect M5Core device, and type in the same command on `Terminal`  to see which port disappeared from the list. 
That how we identify the name of the serial device.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_03.webp">

The serial port name is `tty.SLAB_USBtoUART`

## 3. Install ESP32 Boards Manager

#### (1) Open up Arduino IDE, navigate to `File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.webp">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.webp">

#### (2)  Copy the following ESP32 Boards Manager url to `Additional Boards Manager URLs:` , hit `OK`.

*ESP32 Boards Manager url: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.webp">

#### (3) Navigate to `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.webp">

#### (4) Search `ESP32` in the pop-up window, find it and  click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.webp">

## 4. Install M5Stack Library

#### (1)  Open Arduino IDE, Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.webp">

#### (2) Search `M5Stack`  , find it and click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.webp">

## 5. Install U8g2 Library

#### (1) Open Arduino IDE, navigate to  `Sketch`->`Include Library`->`Manage Libraries...`, search `U8g2` , and then `Install` this library.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.webp">

## 6. Example

Now that everything is ready to go, you can select a demo from the `Example` list, before that let's do some configuration on the IDE. 

Make sure you have M5Stick connected to your computer via USB

#### (1) Select the correct board and serial port name

Start up Arduino IDE, and select `Tools -> Boards -> M5Stack-Core-ESP32` 

choose the right port at `Tools -> Ports ->`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.webp">

#### (2) Select an example

Click `File-> Examples`. Here are some test demos in `M5Stack`->`Stick`

We can try an example inside Basics, name `FactoryTest` .

<img src="assets/img/getting_started_pics/m5stick/m5stick_quick_start_arduino_mac_01.webp">

Click `Upload`, to flash the code to the device. Once it's done, reset the device, The Screen will display "Hello World!"

**The button located on the bottom left is the power button, single-click to  reboot. To enter deep sleep mode, double click**

## Note

Most version of MacOS have no problem detecting the serial device that connected to the computer, but might have exception on High Sierra. Sometimes `SLAB_USBtoUART` fail to appear. In this case, after connected the M5,open `security and privacy` in the `system preferences` and set it to `permit`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.webp">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.webp">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.webp">

?> **If you want to know more about the CP2104 USB driver permission, visit this link.** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html
