# M5StickC Quick Start - Arduino Mac {docsify-ignore-all}

<!-- :clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Text-Tutorial)** -->

<!-- *** -->

<!-- ?> Before setting the development environment, we suggest you confirm whether the USB driver has installed. If not, please visit this link [establish serial connection](/en/related_documents/establish_serial_connection). -->

<img src="assets/img/getting_started_pics/m5stick/stick_01.png"><img src="assets/img/getting_started_pics/m5stick/stick_06.png"><img src="assets/img/macos-logo.png">

## Text Tutorial

1. [Setting Environment](#setting-environment)

    - [Step1. Install Arduino IDE](#step1-install-arduino-ide)

    - [Step2. ESP32 Board Support](#step2-esp32-board-support)

    - [Step3. Install M5Stack Lib](#step3-install-m5stack-lib)


2. [Example](#example)

## Setting Environment

### Step1. Install `Arduino IDE`

Open up your browser, and visit Arduino official website https://www.arduino.cc/en/Main/Software

#### (1) click `Mac OS X` to download `Arduino IDE`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

#### (2) click `JUST DOWNLOAD` 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_02.png">

#### (3) Once the Arduino IDE is downloaded, double-click to open it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_03.png">

### Step2. ESP32 Board Support

#### (1) Open up Arduino IDE, navigate to `File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

#### (2) Copy the following ESP32 Boards Manager url to `Additional Boards Manager URLs:` , hit `OK`.

*ESP32 Boards Manager url: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

#### (3) Navigate to `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

#### (4) Search `ESP32` in the pop-up window, find it and  click `Install`

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_qs_mac_serch_esp32_01.jpg">

### Step3. Install M5StickC Lib

#### (1) Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">

#### (2) Search `M5StickC`  , find it and click `Install`

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_qs_mac_search_lib_stickc_01.jpg">


## Example

Now that everything is ready to go, you can select a demo example from the `Example` list, before that let's do some configuration on the IDE. 

Make sure you have M5Core connected to your computer via USB

#### (1) Select the correct board name and serial device name

Open Arduino IDE, select `Tools`->`Board`->`M5StickC` for your M5Core, `Tools` -> `Ports` for serial port
`Upload Speed`->`115200`

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_qs_mac_adn_config_01.jpg">

### 2. Select an example

Click `File-> Examples`. Here are some test demos in `M5Stack`->`Stick`

Let's open a example called `FactoryTest` inside Basics.

<img src="assets/img/getting_started_pics/m5stick/m5stick_quick_start_arduino_mac_01.png">

Click `Upload`, to flash the code to the device. Once it's done, reset the M5Core, the screen on M5Core will display "Hello World!"

**The button located on the bottom left is the power button, single-click to  reboot. To enter deep sleep mode, double click this button**

## Note

Most version of MacOS have no problem detecting the serial device that connected to the computer, but might have truble on High Sierra. Sometimes `SLAB_USBtoUART` fail to appear. In this case, after connected the M5,open `security and privacy` in the `system preferences` and set it to `permit`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **If you want to know more about the CP2104 USB driver permission, visit this link.** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html

