# M5Core Quick Start(Windows, Arudino)

?> **Tip** If your OS is Windows, please click [here](quick_start/m5core/m5stack_core_get_started_Arduino_MacOS).

## CONTENT 

1. [Setting Environment](#setting-environment)

    - [Step1. Download Arduino-ESP32 Support](#step1-download-arduino-esp32-suppord)

    - [Step2. Download the M5Stack Lib](#step2-download-the-m5stack-lib)

2. [Example](#example)

?> **Tip** *If you want to upgrade the M5Stack Lib, please view this article [upgrade M5Stack Lib](www.m5stack.com).*

!> **Note** *We suggest you confirm whether the `USB driver`, `Git` and `Arduino IDE(Installation path: C:\Program Files\Arduino)` has installed first. If not, please view this two articles [establish serial connection](../related_documents/establish_serial_connection) and [Install Git and Arduino IDE](../related_documents/how_to_install_git_and_arduino). If your arduino installation path is not `C:\Program Files\Arduino`, reinstall this IDE please with default path setting.*

## 1. Setting Environment

#### (*Only two steps to complete setting*)

### Step1. Download Arduino-ESP32 Support

Download the batch file [download_arduino_esp32_support.bat](https://github.com/m5stack/m5stack-documentation/blob/master/en/get-started/download_arduino_esp32_support.bat), and execte it as Administrator.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/execute_batch_file.png">
</figure>


Then this a new window will appear as shown below.
Please waiting for cloning...

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/execute_batch_file_for_downloading_arduino_esp32.png">
</figure>


When completed, it will show below.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_arduino_esp32_completed.png">
</figure>


### Step2. Download the M5Stack Lib

Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`
Search `M5Stack` and install it

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">
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
void setup(){tack

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
