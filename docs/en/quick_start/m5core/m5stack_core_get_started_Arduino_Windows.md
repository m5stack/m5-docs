# M5Core Quick Start - Arduino Win {docsify-ignore-all}

## Table of Contents

**[1. Install Arduino IDE](#_1-install-Arduino-IDE)**

**[2. Install USB to Serial Driver](#_2-Install-USB-to-Serial-Driver)**

**[3. Install ESP32 Boards Manager](#_3-Install-ESP32-Boards-Manager)**

**[4. Install M5Stack Library](#_4-Install-M5Stack-Library)**

**[5. Example](#_5-Example)**

## 1. Install Arduino IDE

<!-- *注意：如果已经安装了 IDE，请直接从[步骤 2](#_2-安装串口驱动) 开始。* -->

Open up your browser, and visit  Arduino official website https://www.arduino.cc/en/Main/Software

#### (1) click `Windows ZIP file for non admin install` to download `Arduino IDE`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package.png">

#### (2) click `JUST DOWNLOAD`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package_02.png">

#### (3) To install IDE, double click the Arduino executable file. Keep the default selection throughout this process, including the installation path.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_arduino_install_path.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_arduino_2.png">

## 2. Install USB to Serial Driver

>1.Click the link on the right to download the CP210X driver.. <a class="link" style="padding-left: 20%" href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>

#### (2) Based on your Windows operating system type, select the corresponding driver installation package

* 32-bit, choose `CP210xVCPInstaller_x86_vx.x.x.x.exe`

* 64-bit, choose `CP210xVCPInstaller_x64_vx.x.x.x.exe`

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">

#### (3) double click the executable file to install.

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">

#### (4) Check the serial port number `COMx`

Check identified COM ports list in the `Windows Device Manager`:

Connect the M5Core to your computer via USB Type-C cable, open `Windows Device Manager`, click `Ports(COM & LPT)` if you see this `SiLicon Labs CP210x USB to UART Bridge(COMx) ` , means the driver installation succeed and your PC is allowed to communicate with M5.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_01.png">

## 3. Install ESP32 Boards Manager

#### (1) Open up Arduino IDE, navigate to `File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02.png">

#### (2) Copy the following ESP32 Boards Manager url to `Additional Boards Manager URLs:` , hit `OK`.

*ESP32 Boards Manager url: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03.png">

#### (3) Navigate to `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04.png">

#### (4) Search `ESP32` in the pop-up window, find it and  click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05.png">

## 4. Install M5Stack Library

#### (1) Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">

#### (2)  Search `M5Stack`  , find it and click `Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">

<!-- !> **Note:** *As shown below, it means you need update*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/update_m5stack_lib.png"> -->

## 5. Example

Now that everything is ready to go, you can select a demo example from the `Example` list, before that, let's do some configuration on the IDE. 

Make sure you have M5Core connected to your computer via USB

#### (1) Arduino port Configuration

config your board name, baudrate, the specified serial port: M5Stack-Core-ESP32, 921600, COM port number

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">

#### (2) Then choose an example

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_an_example.png">

#### (3) Upload it
Click `Upload`, to flash the code to the device. 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">

#### (4) Creat a new M5Stack program

Create a `.ino` file,  `File`->`New`. Click `Save`, name it  `my_test.ino`, and save it somewhere.

Copy the code below to my_test.ino

```arduino
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

Compile and upload, the M5Stack screen will display "Hello World!" "M5Stack is running successfully!"

<!-- ?> *If you want to upgrade the M5Stack Lib, please view this article [upgrade M5Stack Lib](/en/related_documents/upgrade_m5stack_lib).* -->