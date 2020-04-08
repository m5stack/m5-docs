# M5Core 的上手指南 - Arduino Win{docsify-ignore-all}

<!-- ?> 建议您先确认安装了 `USB驱动` 和 `Arduino IDE`。 如果还没的话，阅读这两篇文档[如何建立串口连接](zh_CN/related_documents/establish_serial_connection)和[安装 Arduino IDE](zh_CN/related_documents/how_to_install_git_and_arduino)。 -->

## 目录

**[1. 安装 Arduino IDE](#_1-安装-Arduino-IDE)**

**[2. 安装串口驱动](#_2-安装串口驱动)**

**[3. 安装 ESP32 的板管理](#_3-安装-ESP32-的板管理)**

**[4. 安装 M5Stack 的库](#_4-安装-M5Stack-的库)**

**[5. 示例](#_5-示例)**

## 1. 安装 Arduino IDE

<!-- *注意：如果已经安装了 IDE，请直接从[步骤 2](#_2-安装串口驱动) 开始。* -->

浏览器打开 Arduino 官网 https://www.arduino.cc/en/Main/Software

#### (1) 点击选择安装包 `Windows ZIP file for non admin install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package.webp">

#### (2) 选择 `JUST DOWNLOAD`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package_02.webp">

#### (3) 双击下载好的 IDE 可执行文件，全过程保持默认的选择，包括安装路径也是默认。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_arduino_install_path.webp">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_arduino_2.webp">

## 2. 安装串口驱动

>1.点击右侧链接，下载CP210X驱动程序. <a class="link" style="padding-left: 20%" href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.webp?v=1557026574" alt="">Windows</a>

#### (2) 根据您的 windows 操作系统类型，选择对应的驱动安装包

* 32 位的 Windows 操作系统，选择 `CP210xVCPInstaller_x86_vx.x.x.x.exe`

* 64 位的 Windows 操作系统，选择 `CP210xVCPInstaller_x64_vx.x.x.x.exe`

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.webp">

#### (3) 双击执行

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.webp">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.webp">

#### (4) 检查确认 COM 串口号

检查确认 COM 串口号，以确定串口驱动是否安装成功：

将 Core 通过 USB Type-C 线连接电脑，打开 Windows 设备管理器，点击 `端口 (COM 和 LPT)` 以查看串口号。然后拔掉 USB 线，此时`端口 (COM 和 LPT)` 上消失的 COM 口就是该 Core 对应的 串口号。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_01_cn.webp">

拔掉 USB 线之后，COM 口消失

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_02_cn.webp">

## 3. 安装 ESP32 的板管理

#### (1) 打开 IDE，选择 `文件`->`首选项`->`设置`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01_cn.webp">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02_cn.webp">

#### (2) 复制下面的 ESP32 板管理网址到 `附加开发板管理器:` 中

*ESP32 的板管理网址是这个：https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03_cn.webp">

#### (3) 选择 `工具`->`开发板:`->`开发板管理器...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04_cn.webp">

#### (4) 在新弹出的对话框中，输入并搜索 `ESP32`，点击`安装`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05_cn.webp">

## 4. 安装 M5Stack 的库

#### (1) 打开 Arduino IDE, 然后选择 `项目`->`加载库`->`库管理...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01_cn.webp">

#### (2) 搜索 `M5Stack` 并安装，如下图所示

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02_cn.webp">

<!-- ?> *如果显示下图这样，表示您已经安装了 M5Stack，可是需要升级。*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/update_m5stack_lib.webp"> -->

## 5. 示例

这部分是为了验证现在您是否能通过 Arduino IDE 对 M5Core 编程。

现在，用 USB 线连接 M5Core 和 PC ，然后打开 Arduino IDE，并选择正确的串口号。这个串口号其实就是连接 M5Core 的串口号，注意不要选错。

选择一个 example 例程，然后上传运行试试。

#### (1) 运行一个示例程序，比如 `FactoryTest.ino`

选择您板子的名字，波特率和串口号： M5Stack-Core-ESP32, 921600, COM26 ( 像我现在与 M5Core 相连的串口就是 `COM26`，所以我应该选择 `COM26` )

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port_cn.webp">

#### (2) 选择示例程序`FactoryTest.ino`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_an_example_cn.webp">

#### (3) 点击上传

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload_cn.webp">

#### (4) 新建一个 M5Stack 程序

打开 Arduino IDE，然后新建一个 `.ino` 后缀的文件，并且重命名它为 `my_test.ino`

复制以下代码到 my_test.ino 文件中

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

<!-- ?> *如果您想升级 5Stack 库的话，请移步阅读这篇文档[如何升级Arduino-M5Stack库](zh_CN/related_documents/upgrade_m5stack_lib).* -->

<style>

.link a{

    padding-left: 13%;

}

</style>