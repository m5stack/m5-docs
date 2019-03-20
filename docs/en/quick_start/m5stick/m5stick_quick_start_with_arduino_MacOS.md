# M5Stick Quick Start for Arduino {docsify-ignore-all}

<!-- :clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Text-Tutorial)** -->

<!-- *** -->

?> Before setting the development environment, we suggest you confirm whether the USB driver has installed. If not, please visit this link [establish serial connection](/en/related_documents/establish_serial_connection).

## Text Tutorial

1. [Setting Environment](#setting-environment)

    - [Step1. Install Arduino IDE](#step1-install-arduino-ide)

    - [Step2. ESP32 Board Support](#step2-esp32-board-support)

    - [Step3. Install M5Stack Lib](#step3-install-m5stack-lib)

    - [Step4. Install U8g2 library](#Step4-Install-U8g2-library)

2. [Example](#example)

## Setting Environment

### Step1. Install `Arduino IDE`

First, if Arudino IDE is not installed, install it. It's *download address* is https://www.arduino.cc/en/Main/Software

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

### Step2. ESP32 Board Support

Open Arduino IDE, click `Arduino`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

Copy the following last ESP32 Board Manager URL to this option `Additional Boards Manager URLs: `

*NOW, last ESP32 board manager URL is https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

Confirm OK and click `Tools`->`Board:`->`Boards Manager...` for installing esp32

Search `ESP32` in the new pop-up dialog, then click `install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

### Step3. Install M5Stack Lib

Start up Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

Type `M5Stack` into the search box, search it and install.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_06.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_07.png">

### Step4. Install U8g2 Library

Open Arduino IDE, click `Sketch`->`Include Library`->`Manage Libraries...`, search `U8g2` for installing.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">

## Example

The USB cable connects to <mark>[M5Stick built in MPU9250](https://ae01.alicdn.com/kf/HTB1pICNXznuK1RkSmFPq6AuzFXa1.jpg)</mark>, then select your serial port which is connected the M5Stick.

Select a demo example, compile and upload

### 1. Select your board and the serial port

Start up Arduino IDE, and click `Tools -> Boards -> M5Stack-Core-ESP32` to select your board

Click `Tools -> Ports ->` to select the serial port which is connected with M5Stick

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

### 2. Select an example

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
