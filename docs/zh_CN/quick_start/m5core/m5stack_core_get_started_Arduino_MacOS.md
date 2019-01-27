
# Core 上手指南(macOS, Arudino)

<!-- :clapper: **[视频教程](#视频教程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[文本教程](#文本教程)** -->

?> 在配置环境之前，先确保你已经安装了USB驱动，并且M5Core能通过串口与PC通信。 如果还没的话，看这篇文章[如何建立串口连接](zh_CN/related_documents/establish_serial_connection).

## 文本教程

1. [配置环境](#配置环境)

    - [Step1. 安装Arduino IDE](#Step1-安装arduino-ide)

    - [Step2. 安装ESP32的支持包](#Step2-安装ESP32的支持包)

    - [Step3. 安装Arduino-M5Stack库](#Step3-安装arduino-m5stack库)

2. [示例](#示例)

## 配置环境

### Step1. 安装Arduino IDE

首先，如果Arduino IDE还没安装的话，先安装它。 这是下载地址 *download address* https://www.arduino.cc/en/Main/Software

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

### Step2. 安装ESP32的支持包

打开Arduino IDE，选择`Arduino`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

复制下面最新的ESP32板管理网址到`Additional Boards Manager URLs: `选项中

*目前最新的板管理网址是这个："https//dl.espressif.com/dl/package_esp32_index.json"*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

都确定OK之后，选择`Tools`->`Board:`->`Boards Manager...`，在新弹出的对话框中，输入并搜索`ESP32`，点击`安装`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

### Step3. 安装Arduino-M5Stack库

打开Arduino IDE, 然后选择`Sketch`->`Include Library`->`Manage Libraries...`

在搜索框输入`M5Stack`搜索并安装。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_06.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_07.png">

## 示例

用USB线连接M5Core和PC，然后选择PC上正与M5Core连接的串口号。

### 1. 选择板子和串口

打开Arduino IDE, 并点击`Tools`->`Boards`->`M5Stack-Core-ESP32`

点击`Tools` -> `Ports` 以选择合适的串口号

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

### 2. 选择一个例程

点击`File`->`Examples`->`M5Stack`->`Basics`

选择例程`HelloWorld`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_09.png">

编译并上传这个例程，然后M5Stack屏幕会显示"Hello World!"

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/display_hello_world.png">

## 注意

虽然大多数版本的MacOS系统都没找不到串口号这个问题，可是有些最新版本系统就可能出现这个问题。
如果真的遇到这个问题了，请连接M5并在`system preferences`中打开`security and privacy`，设置`permit`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **如果你想了解更多关于CP2104 USB驱动的资料，请阅读这个链接的内容** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html

<!-- ## 视频教程

<!-- **Windows** -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/U2es-l4z2Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->