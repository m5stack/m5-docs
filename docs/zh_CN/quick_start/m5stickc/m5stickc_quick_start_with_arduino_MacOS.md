# M5Stick 上手指南(macOS, Arudino) {docsify-ignore-all}

<!-- :clapper: **[视频教程](#视频教程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[文本教程](#文本教程)** -->

?> 在配置环境之前，先确保您已经安装了 USB 驱动，并且 M5Stick 能通过串口与 PC 通信。 如果还没的话，看这篇文章[如何建立串口连接](zh_CN/related_documents/establish_serial_connection).

## 文本教程

1. [配置环境](#配置环境)

    - [Step1. 安装Arduino IDE](#Step1-安装arduino-ide)

    - [Step2. 安装ESP32的支持包](#Step2-安装ESP32的支持包)

    - [Step3. 安装Arduino-M5Stack库](#Step3-安装arduino-m5stack库)

    - [Step4. 安装U8g2库](#Step4-安装U8g2库)

2. [示例](#示例)

## 配置环境

### Step1. 安装Arduino IDE

首先，如果 Arduino IDE 还没安装的话，先安装它。 这是下载地址 *download address* https://www.arduino.cc/en/Main/Software

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

### Step2. 安装ESP32的支持包

打开 Arduino IDE，选择`Arduino`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

复制下面最新的 ESP32 板管理网址到`Additional Boards Manager URLs: `选项中

*目前最新的板管理网址是这个：https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

都确定 OK 之后，选择`Tools`->`Board:`->`Boards Manager...`，在新弹出的对话框中，输入并搜索 `ESP32`，点击`安装`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

### Step3. 安装Arduino-M5Stack库

打开 Arduino IDE, 然后选择`Sketch`->`Include Library`->`Manage Libraries...`

在搜索框输入`M5Stack`搜索并安装。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_06.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_07.png">

### Step4. 安装U8g2库

如果您还没安装 `U8g2` 库的话，打开 Arduino IDE，并点击`Sketch`->`Include Library`->`Manage Libraries...`，搜索 `U8g2` 进行安装。

<figure>
  <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">
</figure>

## 示例

用 USB 线连接 <mark>[带 MPU9250 的 M5Stick](https://img.alicdn.com/imgextra/i4/136588748/O1CN012EUdFpJIthEANlx_!!136588748.jpg)</mark> 和 PC，然后选择 PC 上正与 M5Stick 连接的串口号。

### 1. 选择板子和串口

打开 Arduino IDE, 并点击 `Tools`->`Boards`->`M5Stack-Core-ESP32`

点击 `Tools` -> `Ports` 以选择合适的串口号

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

### 2. 选择一个例程

点击 `File`->`Examples`->`M5Stack`->`Stick`

选择例程 `FactoryTest`.

<img src="assets/img/getting_started_pics/m5stick/m5stick_quick_start_arduino_mac_01.png">

编译并上传这个例程，然后 M5Sstick 屏幕会显示 "Hello World! Exist"

**单击电源键开机，双击电源键休眠。**

## 注意

虽然大多数版本的 MacOS 系统都没找不到串口号这个问题，可是有些最新版本系统就可能出现这个问题。
如果真的遇到这个问题了，请连接 M5 并在`system preferences`中打开`security and privacy`，设置`permit`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **如果您想了解更多关于CP2104 USB驱动的资料，请阅读这个链接的内容** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html

<!-- ## 视频教程

<!-- **Windows** -->

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/U2es-l4z2Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> --> -->