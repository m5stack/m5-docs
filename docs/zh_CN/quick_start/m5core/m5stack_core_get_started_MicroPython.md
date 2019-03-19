# UIFlow 上手指南 {docsify-ignore-all}

:clapper: **[视频教程](#相关视频)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[文本教程](#目录)**

<!-- ?> a. 如果您的设备还没烧录UIFlow固件的话，请参考这篇文档[如果使用M5Burner烧录固件](/zh_CN/related_documents/how_to_burn_firmware). b. 如果您是第一次使用这个Core或者想Core连接其他可联网的热点AP的话，请参考这篇文档[如果使用Core连接WIFI和UIFlow](/zh_CN/related_documents/how_to_connect_wifi_using_core)。 -->

<!-- 这时候，您的M5Core已经连接到了可联网WIFI热点，如果按下Core上左边的按键`UPLOAD`的话，会如下图显示。如果M5Core开机之后，两三秒内没做操作的话，会自动地显示预置的程序界面。所以最好开机之后，立马按下`upload`按键。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/apikey.jpg">
</figure> -->

## 目录

**[1. 安装串口驱动](#_1-安装串口驱动)**

**[2. 烧录 UIFlow 固件](#_2-烧录-UIFlow-固件)**

**[3. 配置 Wi-Fi](#_3-配置-Wi-Fi)**

**[4. 编程](#_4-编程)**

## 1. 安装串口驱动

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

## 2. 烧录 UIFlow 固件

#### (1) 下载最新的 M5Burner

访问[官网](http://www.m5stack.com/download)，下载 M5Burner

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner_02.png" alt="Screenshot of coverpage" title="Cover page">

#### (2) 烧录固件

将 M5Core 通过 USB Type-C 线连接到电脑，解压刚刚下载的 M5Burner 压缩包, 然后双击可执行文件 `M5Burner.exe`

选择板子正与电脑相连的`串口号`和 `921600 波特率`, 选择最新版本的 UIFlow 固件

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_02.png">

点击 `Burn` 以下载 UIFlow 的固件到 M5Core 中

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_06_02.png">

出现如下界面，表示固件烧录成功

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_05.png">

## 3. 配置 Wi-Fi

#### (1) 选择`设置网络`

成功地烧录了 UIFlow 固件之后，点击 Core 左上角的红色按钮，以重启设备。一旦 Core 开机之后，立马点击 C 按键，表示选择屏幕上的 `SETUP` 选项，用来配置网络。然后点击中间按键，选择 `Link Server: Flow.m5stack.com`。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_04.png">

#### (2) 连接 AP

打开手机或电脑的 Wi-Fi，然后连接屏幕上显示的 M5Core 的热点 `AP` ( 比如现在显示的 M5Stack-0d60 )，连接成功之后，打开浏览器输入网址 `192.168.4.1`，然后选择可联网的 Wi-Fi，输入密码。( 现在可以联网的 Wi-Fi 是 M5 )

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_05.png">

#### (3) 连接 Wi-Fi

M5Core 成功连接可联网的 Wi-Fi ( 这里是 M5 )之后，屏幕会出现 `APIKEY` 和 可以访问到 UIFlow 网页的二维码

*APIKEY 的说明：APIKEY 是设备唯一识别码。在使用 UIFlow 时，只要当前 UIFlow 连接了哪个设备的 APIKEY，最后编程代码就会下载到哪个设备。*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_06.png">

屏幕上小圆点的状态说明：

* 绿色代表 M5Core 成功连接上 M5Stack 的服务器，也即在线状态

* 红色代表 M5Core 离线状态

## 4. 编程

#### (1) 连接 UIFlow

现在用手机或者平板扫描 M5Core 上的二维码，或者您使用电脑编程的话，在电脑的浏览器上输入网址 `flow.m5stack.com`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png">

因为每次上传代码到 M5Core 之前都要确保 UIFlow 正与手上的 M5Core 连接，而不是其他 M5Core，所以需要点击 UIFlow IDE 页面右上角的齿轮，并在弹出的对话框内输入手上 M5Core 屏幕上显示的 `APIKEY`，点击保存，然后 UIFlow 就会连接到 M5Core

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/click_for_apikey.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/input_apikey.png">

现在，可以开始使用 UIFlow 编程啦！

#### (2) 编程示例

#### a. 画一个 UI

拖拽 UIFlow IDE 左上角的 4 种控件到 `M5Stack Core` 的 UI 界面，并点击页面右上角的 `Run` 按钮，执行效果。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_ui.gif">


#### b. 编写 Blockly 程序

从左边的 `Emoji` 分类里拖拽 `Set emoji map in0` 程序块到到 `Blockly` 的编码区域上，然后点击 `Run` 按钮。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_heart.gif">


*例程源码地址: https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_draw_heart.m5f*


#### c. 编写 MicroPython 程序

复制以下代码到 Python 编辑区，然后点击右上角的 `Run` 执行代码
```Python
from m5stack import *
from m5ui import *
clear_bg(0x111111)


btnA = M5Button(name='ButtonA', text='ButtonA', visibility=False)
btnB = M5Button(name='ButtonB', text='ButtonB', visibility=False)
btnC = M5Button(name='ButtonC', text='ButtonC', visibility=False)


lcd.print("Hello M5Stack")
```

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/program_with_micropython.png">


这时候，M5Core 屏幕上会打印出 `Hello M5Stack` 字样。

<!-- ## 音乐例程

下面，让我们在一两分钟内编写一个音乐例程。

拖拽`loop`, `music`和`timer`这几个程序块到`Blockly`编码区域。

然后设置`music block`和`timer block`的相关参数，如下图所示。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/play_a_song.gif">

现在，点击`Run`就可以运行音乐程序啦!

*例程源码地址: https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_play_a_song.m5f* -->

## 相关视频

**UIFlow 的简介**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/UI%20Flow%20Overview.mp4" type="video/mp4">
</video>

**UIFlow 的快速指南**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%E7%AE%80%E4%BB%8B.mp4" type="video/mp4">
</video>

## 最后

?> *如果您想了解学习 UIFlow 方面的编程，阅读 [UIFlow 的教程文档](https://m5stack.github.io/UIFlow_doc/cn/index.html).*
