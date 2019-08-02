# M5StickC 上手指南 - UIFlow {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.png">

**[1. 烧录 UIFlow 固件](#_1-烧录-UIFlow-固件)**

**[2. 设置 Wi-Fi](#_2-设置-Wi-Fi)**

**[3. 例程](#_3-例程)**

## 1. 烧录 UIFlow 固件

#### (1) 下载 M5Burner

>1.点击下方对应自己操作系统的 M5Burner烧录工具 进行下载.

<div class="link">
 <h4><span>M5Burner:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a></p>
</div>



#### (2) 烧录固件

用 USB Type-C 线将 M5StickC 连接到 PC，解压 M5Burner，然后双击可执行文件 `M5Burner.exe`，以打开 M5Burner

选择合适的 `COM`, `Baudrate` 和 最新版本的`固件`

* <font color="red">选择 COM：COM31</font> 
* <font color="red">选择波特率 ( Baudrate ): 115200</font>

* <font color="red">下载并选择固件 ( Firmware ): UIFlow-vx.x.x-StickC</font>

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_01.png">


点击 `Burn` 以烧录固件

下图所示，表示 M5StickC 的固件已经下载成功

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_02.png">

## 2. 设置 Wi-Fi 

成功烧录 M5StickC 的 UIFlow 固件之后, 轻按一下 M5StickC 左下角的 `Power Switch` 按键

M5StickC 将会开启 Wi-Fi 热点，并显示热点 ( AP ) 名字，如下图所示

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_03.png">

#### (2) 连接到 AP

打开您手机或电脑的 Wi-Fi 设置，然后连接显示在 M5StickC 屏幕上的热点 ( 比如, 我这里显示的热点名字是 M5-80f0 )，成功连接之后, 打开浏览器访问网址 `192.168.4.1`, 然后选择可联网的 Wi-Fi，并输入 Wi-Fi 密码。 ( 现在, 我这里的 Wi-Fi 是 M5 。 )

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_04.png">

#### (3) 连接 Wi-Fi

M5StickC 重启，然后成功地连上了 Wi-Fi ( 我使用的是 M5 ), M5StickC 的屏幕上会显示它的 `APIKEY`

*APIKEY 的说明: 设备唯一识别码。只要 UIFlow 连上了这个 M5StickC 设备的 APIKEY，编程好的代码就会下载到这个设备中。*

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_05.png">

此时屏幕上网络图标的状态说明:

* 绿色：M5StickC 成功地连接到了 UIFlow 服务器, 也即在线状态，可以开始编程

* 红色：M5StickC 还没连接上 UIFlow 服务器，处于离线状态

## 4. 例程

#### (1) 连接到 UIFlow

如果您使用电脑编程, 那么在浏览器中访问 `flow.m5stack.com` 

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_06.png">

然后点击 UIFlow 的左上角的齿轮，在弹出的窗口中输入您的 M5StickC 上显示的 APIKEY，点击 `保存`，这样 UIFlow 就绑定了您的 M5StickC 设备。

*注意：每次您在 UIFlow 中上传程序到 M5StickC 之前，请注意确保当前的 UIFlow 连接的是您的 M5StickC 的 APIKEY，也即确保 UIFlow 绑定的是您的 M5StickC 设备。*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/click_for_apikey.png">

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_07.png">

现在，您已经可以开始使用 UIFlow 啦!

#### (2) 编写例程

拖拽 UIFlow 界面左上角的 `Lable` 控件到 `M5StickC` 中，改变他们的属性： `文本` and `字体`

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_10.png">

从 `硬件` -> `LED`中，拖拽一个出名为 `LED ON` 和另外一个名为 `LED OFF` 的 Block

从 `时间` 中, 拖拽出两个名为 `等待 1 秒` 的 Block

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_13.png">

点击 UIFlow 界面右上角的 `RUN` 按钮

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_16.png">

<mark>**结果:**</mark>

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_14.png">


#### (3) 编程案例

#### 按键控制LED灯

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/Button_LED.jpg">

#### IMU控制

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/IMU.jpg">

#### Remote远程控制

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/Remote_LED.jpg" >






<!-- ## LED灯闪烁

<img src="assets/img/product_pics/1515/ap/ap_ap_01.jpg" width="30%" height="30%">

## 充电动画

<img src="assets/img/product_pics/1515/ap/ap_ap_01.jpg" width="30%" height="30%">

## RTC时钟

<img src="assets/img/product_pics/1515/ap/ap_ap_01.jpg" width="30%" height="30%">

## IMU控制

<img src="assets/img/product_pics/1515/ap/ap_ap_01.jpg" width="30%" height="30%">

## Remote远程控制

<img src="assets/img/product_pics/1515/ap/ap_ap_01.jpg" width="30%" height="30%">

## P2P远程通信

<img src="assets/img/product_pics/1515/ap/ap_ap_01.jpg" width="30%" height="30%"> -->



<style>

.link a{

    padding-left: 13%;

}

</style>