# M5Core Quick Start {docsify-ignore-all}

:clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Table-of-Contents)**

## Table of Contents

**[1. Install Arduino IDE](#_1-install-Arduino-IDE)**

**[2. Install USB to Serial Driver](#_2-Install-USB-to-Serial-Driver)**

**[3. Install ESP32 Boards Manager](#_3-Install-ESP32-Boards-Manager)**

**[4. Install M5Stack Library](#_4-Install-M5Stack-Library)**

**[5. Example](#_5-Example)**

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

#### (4) Check the serial port number `COMx`

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

#### (2) 搜索 `M5Stack` 并安装，如下图所示

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">

## 5. Example

This section for verifying whether you can program with Arduino or not. Now, The USB cable connects to M5Core, then select your serial port which is connected M5Core.

Select a demo example, compile and upload

#### (1) Select the correct board name and serial port name

Open Arduino IDE, select `Tools`->`Board`->`M5Stack-Core-ESP32` for your M5Core, `Tools` -> `Ports` for serial port

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

#### (2) Then select an example likes `HelloWorld.ino`

Select `File`->`Examples`->`M5Stack`->`Basics`

Select a example named `HelloWorld`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_09.png">

Upload it, and after this program was uploaded successfully, the screen on M5Core will display "Hello World!"

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/display_hello_world.png">

## Note

Although most versions of MacOS have no problem with detecting the COM port, on some newer versions of High Sierra sometimes `Slab_USBtoUART` does not appear. If this is the case, after you connect the M5 open `security and privacy` in the `system preferences` and set it to `permit`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **If you want to read more the permission about the CP2104 USB driver, visit the following link please.** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html

## Video Tutorial

<iframe width="560" height="315" src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/M5Stack%20Arduino%20IDE%20Setup%20in%205%20minutes.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>