# 配置Wi-Fi连接 {docsify-ignore-all}


:clapper: **[视频教程](#视频教程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[文本教程](#文本教程)**


?>**请根据设备类型点击下方锚点查看相应的Wi-Fi配置教程，以下内容仅适用于烧录了UIFlow固件的M5Core设备，若您的设备还未安装UIFlow固件，[请点击此处查看固件烧录教程](zh_CN/related_documents/M5Burner)**


## 文本教程

**[For M5Core](#M5Core配置)**

<!-- **[For M5Stick](#M5Stick配置)** -->

**[For M5StickC](#M5StickC配置)**


## M5Core配置

>1. 单击机身左侧**红色电源键**开机，待屏幕显示主菜单后，快速按下按键C选择Setup选项，进入设置页面选择"change WiFi connect"，进入WiFi配置模式（此时M5Core将做为AP热点，屏幕上将显示热点名称）.

?> 设置页面将存放后续您添加的每一个WiFi信息，您可以在该页面进行连接模式以及默认WiFi的切换.

<img src="assets/img/related_documents/Setting_WiFi/M5Core/Setting_01.jpg">

>2. 使用手机或其他终端设备连接该热点（当连接成功时，M5Core屏幕将跳转为二维码页面），然后打开浏览器访问**192.168.4.1**（或是扫描屏幕上的二维码）进入WiFi配置页面.

<img src="assets/img/related_documents/Setting_WiFi/M5Core/Setting_02.jpg">

>3. 在配置页面中，填写想要连接的WiFi信息，点击""Configure"，等待配置完成.

!>. 配置WiFi过程中.请保持手机（终端）连接M5Core的AP热点.

<img src="assets/img/related_documents/Setting_WiFi/M5Core/Setting_03.jpg">

>4. 配置完成后，将默认重启设备.在进入主菜单时，按下按键A选择"PROGRAM",设备将自动连接设定的WiFi并进入编程模式.

?> 编程模式页面中向您展示了几个关键信息.1. 二维码与顶栏的网址指向了[UIFlow web IDE](http://flow.m5stack.com/)，2. 当右上角的指示灯由红色转为绿色的时候表示设备已成功连接网络. 3.API Key是UIFlow远程推送程序的一个凭证，UIFlow将依据这串号码将程序推送到相应的设备上.

<img src="assets/img/related_documents/Setting_WiFi/M5Core/Setting_04.jpg">



## M5StickC配置

>1. 长按机身左侧的电源按钮大约2秒钟，进行开机，首次开机后将为默认进入WiFi配置模式，屏幕上将显示AP热点名称及配置页面地址

<img src="assets/img/related_documents/Setting_WiFi/M5StickC/Setting_01.jpg" width=50% ><img src="assets/img/related_documents/Setting_WiFi/M5StickC/Setting_02.jpg" width=50% >

>2. 使用手机或其他终端设备打开WiFi连接该热点.等待连接成功后，使用浏览器访问配置页面地址192.168.4.1，填写将要连接的WiFi信息，点击配置连接.

<img src="assets/img/related_documents/Setting_WiFi/M5StickC/Setting_03.jpg" width=50% ><img src="assets/img/related_documents/Setting_WiFi/M5StickC/Setting_04.jpg" width=50% >

>3. 配置完成后，M5StickC将自动重启，并进入网络编程模式.当网络标志由红色变为绿色时，表示已成功连接网络. 屏幕上显示的API Key将用于与[UIFlow web IDE](http://flow.m5stack.com/)配对使用.

!>. 配置WiFi过程中.请保持手机（终端）连接M5StickC的AP热点.

<img src="assets/img/related_documents/Setting_WiFi/M5StickC/Setting_05.jpg" width=50% >




<!-- 

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page.png">
</figure>



1. [青茹](#按下-UPLOAD-按键)

2. [选择可联网的 Wi-Fi](#选择可联网的-Wi-Fi)

3. [重启 M5Core](#重启-M5Core)


## 1. 按下 UPLOAD 按键

**现在, 按下  `upload` 按键. 屏幕会出现如下界面.**

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/m5stack_connet_wifi.png">
</figure>

## 2. 选择可联网的Wi-Fi

**用手机或者PC去连接屏幕上显示的M5Core的热点(like `M5Stack-a67c`)，然后打开浏览器输入网址`192.168.4.1`，然后选择可联网的路由器Wi-Fi，然后输入密码。(您看，像我这样，我现在可以联网的Wi-Fi是`MasterHax_5G`)**

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/input_wifi_password.png">
</figure>

## 3. 重启M5Core

**输入密码后，成功连接可联网的路由器Wi-Fi之后，重启M5Core**

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/connect_wifi_successfully.png">
</figure>

## 完成

重启M5Core之后，按`upload`按键，这时候，看到下图带二维码的界面。这很好我们就可以跟着这篇文章[UIFlow编程](zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)学习UIFlow的编程啦！

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/apikey.jpg">
</figure>

?> **Note** 同样地，如果您想换一个可联网的wifi的话，按`SETUP`按键。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/change_wifi.jpg">
</figure>

## 最后

现在，您可以阅读这篇文章开始使用UIFlow编程啦！[UIFlow上手指南](zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython) -->

## 视频教程

**[连接 WIFI](https://v.youku.com/v_show/id_XNDAxOTEyNTQ2NA==.html?spm=a2hzp.8253869.0.0)**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/WiFi%20Configuration/A2%20-%20WIFI%20Configuration.mp4" type="video/mp4">
</video>
