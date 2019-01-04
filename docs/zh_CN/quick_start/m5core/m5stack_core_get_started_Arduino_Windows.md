# Core 上手指南(Windows, Arudino)

!> 建议你先确认安装了`USB驱动`和`Arduino IDE`。 如果还没的话，阅读这两篇文档[如何建立串口连接](/zh_CN/related_documents/establish_serial_connection)和[安装Arduino IDE](/zh_CN/related_documents/how_to_install_git_and_arduino)。

## 目录

1. [配置环境](#配置环境)

    - [Step1. 下载Arduino-ESP32的支持包](#Step1-下载Arduino-ESP32的支持包)

    - [Step2. 安装Arduino-M5Stack库](#Step2-安装Arduino-M5Stack库)

2. [示例](#示例)


## 1. 配置环境

#### (*仅仅只需两步就能完成安装，并开始开发M5Core啦*)

### Step1. 下载Arduino-ESP32的支持包

打开Arduino IDE，选择`File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02.png">

输入最新的ESP32板管理网址

目前最新的板管理网址是这个："https://github.com/espressif/arduino-esp32/releases/download/1.0.1-rc1/package_esp32_dev_index.json"

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03.png">

选择`Tools`->`Board:`->`Boards Manager...`，在新弹出的对话框中，输入并搜索`ESP32`，点击`安装`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05.png">

### Step2. 安装Arduino-M5Stack库

打开Arduino IDE, 然后选择`Sketch`->`Include Library`->`Manage Libraries...`
搜索`M5Stack`并安装，如下图所示。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_06.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_07.png">

!> *如果显示下图这样，表示你需要升级Arduino-M5Stack库*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/update_m5stack_lib.png">

## 示例

这部分是为了验证现在你是否能通过Arduino IDE对M5Core编程。

现在，用USB线连接M5Core和PC，然后打开Arduino IDE，并选择正确的串口号。这个串口号其实就是连接M5Core的串口号，注意不要选错啦。

选择一个example例程，然后上传运行试试。

### 1. 运行一个示例程序，比如`FactoryTest.ino`

选择你板子的名字，波特率和串口号： M5Stack-Core-ESP32, 921600, COM4(你看，像我现在与M5Core相连的串口就是`COM4`，所以我应该选择`COM4`)

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">

选择示例程序`FactoryTest.ino`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_an_example.png">

点击上传

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">

### 2. 自己尝试新建一个M5Stack程序

打开Arduino IDE，然后新建一个`.ino`后缀的文件，并且重命名它为`my_test.ino`

复制以下代码到my_test.ino文件中

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

编译并上传这个程序，如果成功后，就会看到屏幕上显示"Hello World!" "M5Stack is running successfully!"啦！

?> *如果你想升级Arduino-M5Stack库的话，请移步阅读这篇文档[如何升级Arduino-M5Stack库](zh_CN/related_documents/upgrade_m5stack_lib).*