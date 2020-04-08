# M5StickC Quick Start - Arduino Mac {docsify-ignore-all}

<!-- :clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Text-Tutorial)** -->

<!-- *** -->

<!-- ?> Before setting the development environment, we suggest you confirm whether the USB driver has installed. If not, please visit this link [establish serial connection](/en/related_documents/establish_serial_connection). -->

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.webp">

1. [配置环境](#配置环境)

    - [1. 安装 Arduino IDE](#_1-安装-Arduino-IDE)

    - [2. 安装 ESP32 的板管理](#_2-安装-ESP32-的板管理)

    - [3. 安装 M5StackC 库](#_3-安装-M5StackC-库)


2. [例程](#例程)

## 配置环境

### 1. 安装 Arduino IDE

浏览器打开 Arduino 官网 https://www.arduino.cc/en/Main/Software

#### (1) 点击选择安装包 `Mac OS X`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.webp">

#### (2) 选择 `JUST DOWNLOAD` 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_02.webp">

#### (3) Arduino IDE 下载下来就可以直接双击打开使用

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_03.webp">

### 2. 安装 ESP32 的板管理

#### (1) 打开 Arduino IDE，选择 `文件`->`首选项`->`设置`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.webp">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.webp">

#### (2) 复制下面的 ESP32 板管理网址到 `附加开发板管理器:` 中

*ESP32 Boards Manager url: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.webp">

#### (3) 选择 `工具`->`开发板:`->`开发板管理器...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.webp">

#### (4) 在新弹出的对话框中，输入并搜索 `ESP32`，点击`安装`

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_qs_mac_serch_esp32_01.webp">

### 3. 安装 M5StackC 库

#### (1) 打开 Arduino IDE, 然后选择 `项目`->`加载库`->`库管理...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.webp">

#### (2) 搜索 `M5StackC` 并安装，如下图所示

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_qs_mac_search_lib_stickc_01.webp">


## 例程

### 1. 选择板子和串口

打开 Arduino IDE, 并点击 `Tools`->`Boards`->`M5Stack-Core-ESP32`

点击 `Tools` -> `Ports` 以选择对应的串口号

`Upload Speed`->`115200`

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_qs_mac_adn_config_01.webp">

### 2. 选择例程

点击 `File`->`Examples`->`M5StackC`->`Basic`->`FactoryTest`

<img src="assets/img/getting_started_pics/m5stick/m5stick_quick_start_arduino_mac_01.webp" width="60%" height="60%">

点击 `Upload`, 编译上传程序.

**The button located on the bottom left is the power button, single-click to  reboot. To enter deep sleep mode, double click this button**