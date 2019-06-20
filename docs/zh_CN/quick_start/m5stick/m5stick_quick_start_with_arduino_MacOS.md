# M5Stick 上手指南 - Arudino Mac {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stick/stick_01.png">

## 目录

**[1. 安装 Arduino IDE](#_1-安装-Arduino-IDE)**

**[2. 安装串口驱动](#_2-安装串口驱动)**

**[3. 安装 ESP32 的板管理](#_3-安装-ESP32-的板管理)**

**[4. 安装 M5Stack 的库](#_4-安装-M5Stack-的库)**

**[5. 安装 U8g2 库](#_5-安装-U8g2-的库)**

**[6. 示例](#_6-示例)**

## 1. 安装 Arduino IDE

浏览器打开 Arduino 官网 https://www.arduino.cc/en/Main/Software

#### (1) 点击选择安装包 `Mac OS X`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

#### (2) 选择 `JUST DOWNLOAD`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_02.png">

#### (3) Arduino IDE 下载下来就可以直接双击打开使用

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_03.png">

## 2. 安装串口驱动

<!-- *注意：如果已经安装了 CP21x 的串口驱动的话，请直接从[步骤 3](#_3-安装-ESP32-的板管理) 开始。* -->

>1.点击右侧链接，下载CP210X驱动程序. <a class="link" style="padding-left: 20%" href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>

#### (2) 解压后，双击镜像文件 SiLabsUSBDriverDisk.dmg，开始安装

<img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_dmg.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_pkg.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/2.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/3.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/4.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/5.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/6.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/7.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/8.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/9.png">

#### (3) 检查确认 COM 串口名

检查确认 `/dev/tty.SLAB_USBtoUART` 串口名，以确定串口驱动是否安装成功：

打开终端 `Terminal`，将 Core 通过 USB Type-C 线连接电脑，执行以下命令

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_02.png">

拔掉 USB 线，再执行一次刚刚的命令，此时终端 `Terminal` 上显示的 COM 列表里消失的 COM 口就是该 Core 对应的 串口名。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_03.png">

## 3. 安装 ESP32 的板管理

#### (1) 打开 Arduino IDE，选择 `文件`->`首选项`->`设置`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

#### (2) 复制下面的 ESP32 板管理网址到 `附加开发板管理器:` 中

*ESP32 的板管理网址是这个：https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

#### (3) 选择 `工具`->`开发板:`->`开发板管理器...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

#### (4) 在新弹出的对话框中，输入并搜索 `ESP32`，点击`安装`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

## 4. 安装 M5Stack 的库

#### (1) 打开 Arduino IDE, 然后选择 `项目`->`加载库`->`库管理...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_06.png">

#### (2) 搜索 `M5Stack` 并安装，如下图所示

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_07.png">


## 5. 安装 U8g2 的库

#### (1) 打开 Arduino IDE, 然后选择 `项目`->`加载库`->`库管理...`，搜索 `U8g2` 并安装，如下图所示

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">

## 6. 示例

用 USB 线连接 <mark>[带 MPU9250 的 M5Stick](https://img.alicdn.com/imgextra/i4/136588748/O1CN012EUdFpJIthEANlx_!!136588748.jpg)</mark> 和 PC，然后选择 PC 上正与 M5Stick 连接的串口号。

#### (1) 选择板子和串口

打开 Arduino IDE, 并点击 `Tools`->`Boards`->`M5Stack-Core-ESP32`

点击 `Tools` -> `Ports` 以选择的串口号

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

#### (2) 选择一个例程

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
<style>

.link a{

    padding-left: 13%;

}

</style>