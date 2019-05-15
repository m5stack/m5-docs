# M5Core Quick Start - Arduino Mac {docsify-ignore-all}

## Table of Contents

**[1. Install Arduino IDE](#_1-install-Arduino-IDE)**

**[2. Install USB to Serial Driver](#_2-Install-USB-to-Serial-Driver)**

**[3. Install ESP32 Boards Manager](#_3-Install-ESP32-Boards-Manager)**

**[4. Install M5Stack Library](#_4-Install-M5Stack-Library)**

**[5. Example](#_5-Example)**

**[6. Video Tutorial](#_6-Related-Video)**

## 1. Install Arduino IDE

<!-- *注意：如果已经安装了 IDE，请直接从[步骤 2](#_2-安装串口驱动) 开始。* -->

Open up your browser, and visit Arduino official website https://www.arduino.cc/en/Main/Software

#### (1) click `Mac OS X` to download `Arduino IDE`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

#### (2) click `JUST DOWNLOAD` 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_02.png">

#### (3) Once you have the Arduino IDE downloaded, double-click to open it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_03.png">

## 2. Install USB to Serial Driver

Open up your browser, visite M5Stack official website  https://m5stack.com/download

#### (1)  Navigate to `Explore` `Download`,click `CP210X Driver` `Mac` to download the installation package and then unzip it.

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

#### (3) Check the serial port name `/dev/tty.SLAB_USBtoUART`

To make sure if the Driver has installed on your MAC:

Open `Terminal`, connect `M5Core` with your MAC through USB Type-C cable, and type in the following command to view the available serial ports list.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_02.png">

Disconnect M5Core device, and type in the same command on `Terminal`  to see which port disappeared from the list. 
That how we identify the name of the serial device.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_03.png">

The serial device name is `tty.SLAB_USBtoUART`

## 3. Install ESP32 Boards Manager

#### (1) Open up Arduino IDE, navigate to `File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

#### (2) Copy the following ESP32 Boards Manager url to `Additional Boards Manager URLs:` , hit `OK`.

*ESP32 Boards Manager url: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

#### (3) Navigate to `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

#### (4) Search `ESP32` in `Boards Manager` window, find it and  click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

## 4. Install M5Stack Library

#### (1) Open Arduino IDE, Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">

#### (2) Search `M5Stack`  , find it and click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">

## 5. Example

Now that everything is ready to go, you can select a demo example from the `Example` list, before that let's do some configuration on the IDE. 

Make sure you have M5Core connected to your computer via USB

#### (1) Select the correct board name and serial device name

Choose the correct development `Board` and `Port`：   `Tools`->`Board`->`M5Stack-Core-ESP32`,  `Tools` -> `Ports` ->`tty.SLAB_USBtoUART`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

#### (2) Then choose an example

`File`->`Examples`->`M5Stack`->`Basics`

Choose the example named `HelloWorld`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_09.png">

#### (3) Upload it
Click `Upload`, to flash the code to the device. Once it's done, reset the M5Core. It will display "Hello World!" on the screen.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/display_hello_world.png">

## Note

Most version of MacOS have no problem detecting the serial device that connected to the computer, but it might have exceptions on High Sierra. Sometimes `SLAB_USBtoUART` fail to appear. In this case, after connected the M5,open `security and privacy` in the `system preferences` and set it to `permit`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **If you want to know more about the CP2104 USB driver permission, visit this link.** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html

## 6. Related Video

- Arduino video tutorial for M5. 
  Although This video is a little out of date, some webpage is not available anymore. it's still a good tutorial for beginners,and it shows the manual way of adding m5stack library and almost covered every step we have mentioned above.
<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/M5Stack%20Arduino%20IDE%20Setup%20in%205%20minutes.mp4" type="video/mp4">
</video>
