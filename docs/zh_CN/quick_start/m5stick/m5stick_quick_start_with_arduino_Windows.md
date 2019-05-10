# M5Stick 上手指南 - Arduino Win{docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stick/stick_01.png"><img src="assets/img/getting_started_pics/m5stick/stick_06.png"><img src="assets/img/windows-logo.png">

## 目录

**[1. 安装 Arduino IDE](#_1-安装-Arduino-IDE)**

**[2. 安装串口驱动](#_2-安装串口驱动)**

**[3. 安装 ESP32 的板管理](#_3-安装-ESP32-的板管理)**

**[4. 安装 M5Stack 的库](#_4-安装-M5Stack-的库)**

**[5. 安装 U8g2 库](#_5-安装-U8g2-的库)**

**[6. 示例](#_6-示例)**

## 1. 安装 Arduino IDE

<!-- *注意：如果已经安装了 IDE，请直接从[步骤 2](#_2-安装串口驱动) 开始。* -->

浏览器打开 Arduino 官网 https://www.arduino.cc/en/Main/Software

#### (1) 点击选择安装包 `Windows ZIP file for non admin install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package.png">

#### (2) 选择 `JUST DOWNLOAD`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package_02.png">

#### (3) 双击下载好的 IDE 可执行文件，全过程保持默认的选择，包括安装路径也是默认。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_arduino_install_path.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_arduino_2.png">

## 2. 安装串口驱动

浏览器打开 M5Stack 官网 https://m5stack.com/download

#### (1) 点击 `Windows`，下载 Windows 版本的驱动安装包并解压

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_usb_driver_win_01.png">

#### (2) 根据您的 windows 操作系统类型，选择对应的驱动安装包

* 32 位的 Windows 操作系统，选择 `CP210xVCPInstaller_x86_vx.x.x.x.exe`

* 64 位的 Windows 操作系统，选择 `CP210xVCPInstaller_x64_vx.x.x.x.exe`

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">

#### (3) 双击执行

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">

#### (4) 检查确认 COM 串口号

检查确认 COM 串口号，以确定串口驱动是否安装成功：

将 Core 通过 USB Type-C 线连接电脑，打开 Windows 设备管理器，点击 `端口 (COM 和 LPT)` 以查看串口号。然后拔掉 USB 线，此时`端口 (COM 和 LPT)` 上消失的 COM 口就是该 Core 对应的 串口号。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_01_cn.png">

拔掉 USB 线之后，COM 口消失

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_02_cn.png">

## 3. 安装 ESP32 的板管理

#### (1) 打开 IDE，选择 `文件`->`首选项`->`设置`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01_cn.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02_cn.png">

#### (2) 复制下面的 ESP32 板管理网址到 `附加开发板管理器:` 中

*ESP32 的板管理网址是这个：https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03_cn.png">

#### (3) 选择 `工具`->`开发板:`->`开发板管理器...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04_cn.png">

#### (4) 在新弹出的对话框中，输入并搜索 `ESP32`，点击`安装`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05_cn.png">

## 4. 安装 M5Stack 的库

#### (1) 打开 Arduino IDE, 然后选择 `项目`->`加载库`->`库管理...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01_cn.png">

#### (2) 搜索 `M5Stack` 并安装，如下图所示

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02_cn.png">

<!-- ?> *如果显示下图这样，表示您已经安装了 M5Stack，可是需要升级。*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/update_m5stack_lib.png"> -->

## 5. 安装 U8g2 的库

#### 打开 Arduino IDE, 然后选择 `项目`->`加载库`->`库管理...`，搜索 `U8g2` 并安装，如下图所示

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">

## 6. 示例

这部分是为了验证现在您是否能通过 Arduino IDE 对 M5Stick 编程。

现在，用 USB 线连接 <mark>[带 MPU9250 的 M5Stick](https://img.alicdn.com/imgextra/i4/136588748/O1CN012EUdFpJIthEANlx_!!136588748.jpg)</mark> 和 PC，然后打开 Arduino IDE，并选择正确的串口号。这个串口号其实就是连接 M5Stick 的串口号，注意不要选错啦。

选择一个 example 例程，然后上传运行试试。

### (1) 运行一个示例程序，比如`FactoryTest.ino`

选择您板子的名字，波特率和串口号： M5Stack-Core-ESP32, 921600, COM4 (像我现在与 M5Stick 相连的串口就是 `COM4`，所以我应该选择 `COM4`)

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">

#### (2) 选择示例程序`FactoryTest.ino`

<font color="red">选择示例程序 M5Stack -> Stick -> FactoryTest.ino</font>

<img src="assets/img/getting_started_pics/m5stick/m5stick_arduino_windows_01.png">

#### (3) 点击上传

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">

**现象: 按下按键 A 之后，屏幕显示 "Hello World! Exist"**

**单击电源键开机，双击电源键休眠。**
