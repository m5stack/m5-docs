# UIFlow 上手指南 {docsify-ignore-all}

## 目录

**[1. 准备工作](#准备工作)**

**[2. 安装串口驱动](#安装串口驱动)**

**[3. M5Burner](#M5Burner)**

**[4. 配置 Wi-Fi](#配置-Wi-Fi)**

**[5. 开始编程](#开始编程)**

**[6. 视频教程](#相关视频)**


## 准备工作

>1.点击下方对应自己操作系统的 M5Burner烧录工具 及 CP210X驱动程序 进行下载.

<div class="link">
 <h4><span>M5Burner:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a></p>

 <h4><span>CP210X Driver:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a>
    </p>
</div>


## 安装串口驱动

### For Windows

>将下载好的CP210X驱动压缩包解压，选择对应您操作系统的安装程序，双击安装.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/CP210X_WIN.jpg">


### For Mac

>将下载好的CP210X驱动压缩包解压，安装程序，双击镜像文件开始安装.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/CP210X_MAC.png">


## M5Burner

>1.将下载好的烧录工具压缩包进行解压.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.jpg">

>2.双击打开"M5Burner"应用程序.工具左侧为固件版本列表，点击列表中下载箭头能够下载相应的固件（灰色代表未下载，白色代表已下载）.
>点击上方的刷新按钮能够刷新列表，查看是否有新的固件发布.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_02.jpg">

>3.选择好您想要烧录的固件版本，将设备通过Type-C数据线连接至电脑，选择对应COM端口与设备类型.点击"Burn"开始烧录.

!>在首次烧录时，建议点击"Erase"清除内存，在后续的固件更新时，则无需再次清除，否则将删除已保存的Wi-Fi信息，及刷新API Key.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_03.jpg">

## 配置 Wi-Fi

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

## 开始编程

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

## 相关视频

- UIFlow 的简介

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/UI%20Flow%20Overview.mp4" type="video/mp4">
</video>

- UIFlow 中开发 M5Core 的视频教程

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%E7%AE%80%E4%BB%8B.mp4" type="video/mp4">
</video>

## 最后

?> *如果您想了解学习 UIFlow 方面的编程，阅读 [UIFlow 的教程文档](https://m5stack.github.io/UIFlow_doc/cn/index.html).*


<style>

.link a{

    padding-left: 13%;

}

</style>