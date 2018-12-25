
# M5Core 上手指南(macOS, Arudino)

?> 如果你的操作系统是Windows，请点击[这里](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)。

!> 在配置环境之前，先确保你已经安装了USB驱动，并且M5Core能通过串口与PC通信。 如果还没的话，看这篇文章[如何建立串口连接](zh_CN/related_documents/establish_serial_connection).

## 目录

1. [配置环境](#配置环境)

    - [Step1. 安装Arduino IDE](#Step1-安装arduino-ide)

    - [Step2. 安装ESP32的支持包](#Step2-安装ESP32的支持包)

    - [Step3. 安装Arduino-M5Stack库](#Step3-安装arduino-m5stack库)

2. [示例](#示例)

## 配置环境

### Step1. 安装Arduino IDE

首先，如果Arduino IDE还没安装的话，先安装它。 这是下载地址 *download address* https://www.arduino.cc/en/Main/Software

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">
</figure>

### Step2. 安装ESP32的支持包

打开终端Terminal执行以下命令 (复制以下命令到Terminal，然后回车):

```

mkdir -p ~/Documents/Arduino/hardware/espressif && \
cd ~/Documents/Arduino/hardware/espressif && \
git clone https://github.com/espressif/arduino-esp32.git esp32 && \
cd esp32 && \
git submodule update --init --recursive && \
cd tools && \
python get.py

```

?> **Tip** 如果你遇到如下错误: `xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools),`
`missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun`, 请在终端输入如下命令`xcode-select --install`并Enter，等`xcode-select`安装好了，重启Arduino IDE。


### Step3. 安装Arduino-M5Stack库

打开Arduino IDE, 然后选择`Sketch`->`Include Library`->`Manage Libraries...`

在搜索框输入`M5Stack`搜索并安装。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_install_m5stack_lib.png">
</figure>


<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_search_m5stack.png">
</figure>



## 示例

用USB线连接M5Core和PC，然后选择PC上正与M5Core连接的串口号。

### 1. 选择板子和串口

打开Arduino IDE, 并点击`Tools`->`Boards`->`M5Stack-Core-ESP32`

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_select_board.png">
</figure>


点击`Tools` -> `Ports` 以选择合适的串口号

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_select_serial_port.png">
</figure>


### 2. 选择一个例程

点击`File`->`Examples`->`M5Stack`->`Basics`

选择例程`HelloWorld`.


<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_select_example.png">
</figure>


编译并上传这个例程，然后M5Stack屏幕会显示"Hello World!"

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/display_hello_world.png">
</figure>



## 注意

虽然大多数版本的MacOS系统都没找不到串口号这个问题，可是有些最新版本系统就可能出现这个问题。
如果真的遇到这个问题了，请连接M5并在`system preferences`中打开`security and privacy`，设置`permit`

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">
</figure>


<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">
</figure>


<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">
</figure>

?> **如果你想了解更多关于CP2104 USB驱动的资料，请阅读这个链接的内容** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html
