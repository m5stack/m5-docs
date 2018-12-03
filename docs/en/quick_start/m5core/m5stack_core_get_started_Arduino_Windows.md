# M5Core Quick Start(Windows, Arudino)

[中文](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_Windows) | English | [日本語](ja/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)

?> If your OS is MacOS, please click [here](/en/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS).

!> We suggest you confirm whether the `USB driver`, `Git` and `Arduino IDE` has installed first. If not, please view this two articles [establish serial connection](/en/related_documents/establish_serial_connection) and [Install Git and Arduino IDE](/en/related_documents/how_to_install_git_and_arduino).

## CONTENT

1. [Setting Environment](#setting-environment)

    - [Step1. Download Arduino-ESP32 Support](#step1-download-arduino-esp32-suppord)

    - [Step2. Download the M5Stack Lib](#step2-download-the-m5stack-lib)

2. [Example](#example)

## 1. Setting Environment

#### (*Only two steps to complete setting*)

### Step1. Download Arduino-ESP32 Support

Download the executable file [download_arduino_esp32_support.exe](https://github.com/m5stack/m5-docs/tree/master/docs/assets/scripts/download_arduino_esp32_support.bat), put it in the folder of **Arduino IDE**, and execte the executable file as Administrator.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_esp32_support.gif">
</figure>


Then please waiting for cloning...

### Step2. Download the M5Stack Lib

Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`
Search `M5Stack` and install it

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib.gif">
</figure>

!> **Note:** *As shown below, it means you need update*

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/update_m5stack_lib.png">
</figure>


## Example

This section for verifying whether you can program with Arduino or not. Now, The USB cable connects to M5Stack Core, then select your serial port which is connected M5Stack Core.

Select a demo example, compile and upload

### 1. Execute a example likes `FactoryTest.ino`

Select your board name, baudrate, the specified serial port: M5Stack-Core-ESP32, 921600, COM4(Now, my serial port which is connected with PC is `COM4`)

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">
</figure>


Then select an example likes `FactoryTest.ino`

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_an_example.png">
</figure>

Upload it

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">
</figure>


### 2. New a M5Stack program

Open Arduino IDE, then new a `.ino` file, rename it as `my_test.ino`

Copy the below code to my_test.ino

```cpp
#include <M5Stack.h>

// the setup routine runs once when M5Stack starts up
void setup(){

  // Initialize the M5Stack object
  M5.begin();

  // LCD display
  M5.Lcd.print("Hello World!");
  M5.Lcd.print("M5Stack is running successfully!");
}

// the loop routine runs over and over again forever
void loop() {

}
```

compile it and upload, the M5Stack screen will show "Hello World!" "M5Stack is running successfully!"

?> *If you want to upgrade the M5Stack Lib, please view this article [upgrade M5Stack Lib](/en/related_documents/upgrade_m5stack_lib).*