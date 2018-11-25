# M5Core 快速上手(Windows, Arudino)

?> **提示** 如果你的操作系统是MacOS的话，请点击[这里](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS)。

## 目录

1. [配置环境](#setting-environment)

    - [Step1. 下载 Arduino-ESP32 Support](#step1-download-arduino-esp32-suppord)

    - [Step2. 安装Arduino-M5Stack库](#step2-download-the-m5stack-lib)

2. [示例](#example)

?> **提示** *如果你想升级Arduino-M5Stack库的话，请移步阅读这篇文档[如何升级Arduino-M5Stack库](/zh_CN/related_documents/upgrade_m5stack_lib).*

!> **注意** *建议你先确认安装了`USB驱动`, `Git` 和 `Arduino IDE(安装路径为: C:\Program Files\Arduino)`。 如果还没的话，阅读这两篇文档[如何建立串口连接](/zh_CN/related_documents/establish_serial_connection)和[安装Git和Arduino IDE](/zh_CN/related_documents/how_to_install_git_and_arduino)。 如果你的Arduino IDE安装路径不是`C:\Program Files\Arduino`的话, 为了方便搭建以下的开发环境，请按照默认安装路径重新安装。

## 1. 配置环境

#### (*仅仅只需两步就能完成安装，并开始开发M5Core啦*)

### Step1. 下载Arduino-ESP32的支持包

下载batch脚本文件[download_arduino_esp32_support.bat](https://github.com/m5stack/m5stack-documentation/blob/master/en/get-started/download_arduino_esp32_support.bat)，并以管理员身份运行，如下图所示.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/execute_batch_file.png">
</figure>


接着你的界面会出现如下图所示，耐心等待下载...

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/execute_batch_file_for_downloading_arduino_esp32.png">
</figure>


当完成之后，会显示如下。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_arduino_esp32_completed.png">
</figure>


### Step2. 安装Arduino-M5Stack库

打开Arduino IDE, 然后选择`Sketch`->`Include Library`->`Manage Libraries...`
搜索`M5Stack`并安装，如下图所示。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">
</figure>

!> **注意** *如果显示下图这样，表示你需要升级Arduino-M5Stack库*

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/update_m5stack_lib.png">
</figure>


## 示例

这部分是为了验证现在你是否能通过Arduino IDE对M5Core编程。 
现在，用USB线连接M5Core和PC，然后打开Arduino IDE，并选择正确的串口号。这个串口号其实就是连接M5Core的串口号，注意不要选错啦。

选择一个example例程，然后上传运行试试。

### 1. 运行一个示例程序，比如`FactoryTest.ino`

选择你板子的名字，波特率和串口号： M5Stack-Core-ESP32, 921600, COM4(你看，像我现在与M5Core相连的串口就是`COM4`，所以我应该选择`COM4`)

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">
</figure>


选择示例程序`FactoryTest.ino`

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_an_example.png">
</figure>

点击上传

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">
</figure>


### 2. 自己尝试新建一个M5Stack程序

打开Arduino IDE，然后新建一个`.ino`后缀的文件，并且重命名它为`my_test.ino`

复制以下代码到my_test.ino文件中

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

编译并上传这个程序，如果成功后，就会看到屏幕上显示"Hello World!" "M5Stack is running successfully!"啦！
