# M5Stack-Core-Arduino —— Getting Started

## **Windows**
#### 1. install `Arduino IDE`

*download address*
https://www.arduino.cc/en/Main/Software 

![image](../../_static/screenshots/arduino_cc_package.png)


modified the path of Arduino as `D:\Program Files` as shown below

![image](../../_static/screenshots/select_arduino_install_path.png)


Now my path of Arduino is `D:\Program Files\Arduino`

![image](../../_static/screenshots/arduino_path.png)


#### 2. Download toolchain

（Now my path of Arduino is `D:\Program Files\Arduino`）

Enter the path `D:\Program Files\Arduino\hareware` via the terminal of Windows 

Execute the following commands on the terminal of Windows
> * new a directory named `espressif`, then enter this directory

mkdir espressif && cd espressif

![image](../../_static/screenshots/mkdir_espressif.png)


> * clone `esp32 idf` at the directory named `esp32`

git clone --recursive https://github.com/espressif/arduino-esp32.git esp32

![image](../../_static/screenshots/download_idf.png)



#### 3. ESP32 toolchain

Enter the path `D:\Program Files\arduino\hardware\espressif\esp32\tools`
double click on `get.exe`

![image](../../_static/screenshots/select_get_exe_file.png)

![image](../../_static/screenshots/download_xtensa_tools.png)


#### 4. Download the M5Stack Lib via Arduino IDE 

Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`
Search `M5Stack` and install it

![image](../../_static/screenshots/select_arduino_lib.png)

![image](../../_static/screenshots/download_m5stack_lib.png)


## Example

The USB cable connects to M5Stack Core, then select your serial port which is connected M5Stack Core.
Select a demo example, compile and upload

#### 1. Open a example likes `FactoryTest.ino`

![image](../../_static/screenshots/select_demo.png)



Comfire your board name, baudrate, the specified serial port: M5Stack-Core-ESP32、921600、COM3

![image](../../_static/screenshots/select_board_and_com.png)

After upload seccessfully, open the Serial Monitor

![image](../../_static/screenshots/FactoryTest_result.png)

#### 2. New a M5Stack program

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


