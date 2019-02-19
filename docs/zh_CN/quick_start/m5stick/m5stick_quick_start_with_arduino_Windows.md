# M5Stick 上手指南(Windows, Arudino) {docsify-ignore-all}

?> 建议你先确认安装了 `USB驱动` 和 `Arduino IDE`。 如果还没的话，阅读这两篇文档[如何建立串口连接](zh_CN/related_documents/establish_serial_connection)和[安装 Arduino IDE](zh_CN/related_documents/how_to_install_git_and_arduino)。

## 目录

1. [配置环境](#配置环境)

    - [Step1. 下载Arduino-ESP32的支持包](#Step1-下载Arduino-ESP32的支持包)

    - [Step2. 安装Arduino-M5Stack库](#Step2-安装Arduino-M5Stack库)

    - [Step3. 安装U8g2库](#Step3-安装U8g2库)

2. [示例](#示例)


## 1. 配置环境

### Step1. 下载Arduino-ESP32的支持包

打开Arduino IDE，选择`File`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02.png">

复制下面最新的ESP32板管理网址到 `Additional Boards Manager URLs: `中

*目前最新的板管理网址是这个："https://dl.espressif.com/dl/package_esp32_index.json"*

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

### Step3. 安装U8g2库

如果您还没安装`U8g2`库的话，打开Arduino IDE，并点击`Sketch`->`Include Library`->`Manage Libraries...`，搜索`U8g2`进行安装。

<figure>
  <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">
</figure>

## 示例

这部分是为了验证现在你是否能通过 Arduino IDE 对 M5Stick 编程。

现在，用 USB 线连接 <mark>[带 MPU9250 的 M5Stick](https://img.alicdn.com/imgextra/i4/136588748/O1CN012EUdFpJIthEANlx_!!136588748.jpg)</mark> 和 PC，然后打开 Arduino IDE，并选择正确的串口号。这个串口号其实就是连接 M5Stick 的串口号，注意不要选错啦。

选择一个 example 例程，然后上传运行试试。

### 1. 运行一个示例程序，比如`FactoryTest.ino`

选择你板子的名字，波特率和串口号： M5Stack-Core-ESP32, 921600, COM4 (你看，像我现在与 M5Stick 相连的串口就是 `COM4`，所以我应该选择 `COM4`)

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">

选择示例程序 `Stick` -> `FactoryTest.ino`

<img src="assets/img/getting_started_pics/m5stick/m5stick_arduino_windows_01.png">

点击上传

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">

**现象: 按下按键 A 之后，屏幕显示 "Hello World! Exist"**

?> *如果你想升级Arduino-M5Stack库的话，请移步阅读这篇文档[如何升级Arduino-M5Stack库](zh_CN/related_documents/upgrade_m5stack_lib).*