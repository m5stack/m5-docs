# M5Stick Quick Start(Windows, Arudino) {docsify-ignore-all}

?> We suggest you confirm whether the `USB driver`, `Git` and `Arduino IDE` has installed first. If not, please view this two articles [establish serial connection](en/related_documents/establish_serial_connection) and [Install Git and Arduino IDE](en/related_documents/how_to_install_git_and_arduino).

## CONTENT

1. [Setting Environment](#setting-environment)

    - [Step1. Download Arduino-ESP32 Support](#step1-download-arduino-esp32-support)

    - [Step2. Download the M5Stack Lib](#step2-download-the-m5stack-lib)

    - [Step3. Install U8g2 library](#Step3-Install-U8g2-library)

2. [Example](#example)

## 1. Setting Environment

*(Only two steps to complete setting)*

### Step1. Download Arduino-ESP32 Support

Open Arduino IDE, and click `File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02.png">

Input last esp32 board manager URL

*Now the last board manager URL: https://dl.espressif.com/dl/package_esp32_index.json**

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03.png">

Click `Tools`->`Board:`->`Boards Manager...`, search `ESP32` in the new pop-up dialog, then click `install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05.png">

### Step2. Download the M5Stack Lib

Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`
Search `M5Stack` and install it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_06.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_07.png">

!> **Note:** *As shown below, it means you need update*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/update_m5stack_lib.png">

### Step3. Install U8g2 library

If you have installed `U8g2`, then just run and upload your m5stick's poject.
If not, then open Arduino IDE, and click `Sketch`->`Include Library`->`Manage Libraries...` for installing `U8g2` library

<figure>
  <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">
</figure>

## Example

This section for verifying whether you can program with Arduino or not. Now, The USB cable connects to <mark>[M5Stick built in MPU9250](https://ae01.alicdn.com/kf/HTB1pICNXznuK1RkSmFPq6AuzFXa1.jpg)</mark>, then select your serial port which is connected the M5Stick.

Select a demo example, compile and upload

### 1. Execute a example likes `FactoryTest.ino`

Select your board name, baudrate, the specified serial port: M5Stack-Core-ESP32, 921600, COM4 (Now, my serial port which is connected with PC is `COM4`)

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">

Then select an example likes `Stick` -> `FactoryTest.ino`

<img src="assets/img/getting_started_pics/m5stick/m5stick_arduino_windows_01.png">

Upload it

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">

**Phenomenon: After pressing button A, the screen displays "Hello World! Exist"**

?> *If you want to upgrade the M5Stack Lib, please view this article [upgrade M5Stack Lib](/en/related_documents/upgrade_m5stack_lib).*