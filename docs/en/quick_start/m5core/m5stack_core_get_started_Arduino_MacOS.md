# M5Core Quick Start(macOS, Arudino)

!> Before setting the development environment, we suggest you confirm whether the USB driver has installed. If not, please visit this link [establish serial connection](/en/related_documents/establish_serial_connection).

## CONTENT

1. [Setting Environment](#setting-environment)

    - [Step1. Install Arduino IDE](#step1-install-arduino-ide)

    - [Step2. ESP32 Board Support](#step2-esp32-board-support)

    - [Step3. Install M5Stack Lib](#step3-install-m5stack-lib)

2. [Example](#example)

## Setting Environment

### Step1. Install `Arduino IDE`

First, if Arudino IDE is not installed, install it. It's *download address* is https://www.arduino.cc/en/Main/Software

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

### Step2. ESP32 Board Support

Open Arduino IDE, click `Arduino`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

Add last ESP32 Board Manager URL to this option `Additional Boards Manager URLs: `

*NOW, last ESP32 board manager URL is "https://github.com/espressif/arduino-esp32/releases/download/1.0.1-rc1/package_esp32_dev_index.json"*

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

## Example

The USB cable connects to M5Stack Core, then select your serial port which is connected M5Stack Core.
Select a demo example, compile and upload

### 1. Select your board and the serial port

Start up Arduino IDE, and click `Tools -> Boards -> M5Stack-Core-ESP32` to select your board

Click `Tools -> Ports ->` to select the serial port which is connected with M5Stack Core

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

### 2. Select an example

Click `File-> Examples`. Here are some test programs in `M5Stack->`

Try to open a sketch called `HelloWorld` inside Basics.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_09.png">

Compile it and upload, the M5Stack screen will show "Hello World!"

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/display_hello_world.png">

## Note

Although most versions of MacOS have no problem with detecting the COM port, on some newer versions of High Sierra sometimes Slab\_USBtoUART does not appear. If this is the case, after you connect the M5 open `security and privacy` in the system preferences and set it to `permit`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **If you want to read more the permission about the CP2104 USB driver, visit the below link please.** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html