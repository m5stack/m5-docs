# M5StickC 上手指南 {docsify-ignore-all}

<!-- ?> 建议你先确认安装了 `USB驱动` 和 `Arduino IDE`。 如果还没的话，阅读这两篇文档[如何建立串口连接](zh_CN/related_documents/establish_serial_connection)和[安装 Arduino IDE](zh_CN/related_documents/how_to_install_git_and_arduino)。 -->

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.png"><img src="assets/img/windows-logo.png">

## 目录

**[1. 安装 Arduino IDE](#_1-安装-Arduino-IDE)**

**[2. 安装 ESP32 的板管理](#_2-安装-ESP32-的板管理)**

**[3. 安装 M5StickC 的库](#_3-安装-M5StickC-的库)**

**[4. 示例](#_4-示例)**

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

## 2. 安装 ESP32 的板管理

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

## 3. 安装 M5StickC 的库

#### (1) 打开 Arduino IDE, 然后选择 `项目`->`加载库`->`库管理...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01_cn.png">

#### (2) 搜索 `M5StickC` 并安装，如下图所示

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_10.png">

## 4. 示例

这部分是为了验证现在您是否能通过 Arduino IDE 对 M5StickC 编程。

#### (1) 查看串口号

打开`设备管理器`

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_06.png">

因为 M5StickC 的串口驱动芯片免驱动安装类型，所以用 Tpye-C USB 线连接 M5StickC 和电脑，`设备管理器`就会新出现一个串口号

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_05.png">

#### (2) 运行一个示例程序，比如 `FactoryTest.ino`

打开 Arduino IDE，并选择正确的串口号。这个串口号其实就是连接 M5StickC 的串口号，注意不要选错

选择板子的名字，波特率和串口号： **ESP32 Pico Kit**, **115200**, COM31 (你看，像我现在与 M5StickC 相连的串口就是 `COM31`，所以我应该选择 `COM31`)

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_08.png">

选择 `M5StickC` -> `Basics` -> `FactoryTest.ino`

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_04.png">

点击上传

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_09.png">

<!-- **现象: 按下按键 A 之后，屏幕显示 "Hello World! Exist"**

**单击电源键开机，双击电源键休眠。** -->

<!-- ?> *如果你想升级Arduino-M5Stack库的话，请移步阅读这篇文档[如何升级Arduino-M5Stack库](zh_CN/related_documents/upgrade_m5stack_lib).* -->