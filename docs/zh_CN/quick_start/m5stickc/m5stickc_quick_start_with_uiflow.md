# UIFlow 快速上手

?>本教程适用于M5StickC

## 烧录工具

>请根据您所使用的操作系统，点击下方按钮下载相应的M5Burner固件烧录工具.解压打开应用程序。

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip">
      <img src="/image/base/Windows_logo.png" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip">
      <img src="/image/base/MacOS_logo.png" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip">
      <img src="/image/base/Linux_logo.png" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.jpg">

?>注意：MacOS用户安装完成后请将应用放入Application文件夹内，如下图所示。

><img src="/image/base/application.png" width="70%"> 


## 固件烧录

>1.双击打开Burner烧录工具，在左侧菜单中点击下载按钮，下载你所需要的固件版本，然后将M5设备通过Type-C数据线连接到电脑，选择对应的COM口，波特率，以及烧录设备的类型。

?>注意：M5Burner中包含了M5Stack多款产品的UIFlow固件版本。因此你需要在进行烧录前，选择正确的设备类型，以获得与设备匹配的固件，如下图所示。（烧录速率可以使用烧录器默认配置，特殊情况无法烧录可尝试降低至115200）。

<img src="assets\img\getting_started_pics\m5stickc\m5burner_stickc01.jpg" width="70%"> 

>2.选择好您想要烧录的固件版本，将设备通过Type-C数据线连接至电脑，选择对应COM端口与设备类型.点击"Burn"开始烧录.

?>首次烧录或固件程序运行异常时，可点击"Erase"擦除flash内存，在后续的固件更新时，则无需再次擦除，否则将删除已保存的Wi-Fi信息且刷新API Key.

<img src="assets\img\getting_started_pics\m5stickc\m5burner_stickc02.jpg" width="70%"> 


## 配置WIFI

>UIFlow提供了离线与web版本的编程器，在使用web版本的UIFlow时，我们需要为设备配置WiFi连接。下面介绍为设备配置WiFi连接的两种方式（烧录配置与AP热点配置）。

### 烧录配置WiFi

?>UIFlow-1.4.5以上版本可直接通过M5Burner写入WiFi信息。

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\m5burner_wifi.jpg " width="70%">

### AP热点配置WiFi

>1.长按左侧电源键开机，在未配置WiFi的情况下，首次开机将自动进入网络配置模式。假设在运行其他程序后，你想要重新进入网络配置模式，你可以参照下方操作。开机出现UIFlow Logo后，快速单击Home键（中心M5按键），进入配罝页面。按机身右侧按键将选项切换至Setting，按下Home键确认。按右侧按键切换选项至WiFi Setting,按下Home键确认，开始配置。

<img src="assets\img\getting_started_pics\m5stickc\m5stickc_wifi_setup01.jpg ">

>2.用手机连接热点成功后，打开手机浏览器扫描屏幕上的二维码，或是直接访问 __192.168.4.1__，进入页面填写个人的WIFI信息，点击配置，使设备记录下你的WiFi信息。配置成功后设备将自动重启。并进入编程模式。

?>注意：配置的WiFi信息中，不允许出现"空格"等特殊字符。

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\uiflow_wifi_setup2.jpg ">


## 网络编程模式与API KEY

#### 进入网络编程模式

?>网络编程模式是M5设备与UIFlow web编程平台的一个对接模式,屏幕会显示出当前设备的网络连接状态。当指示标志为绿色时，则代表随时可接收程序推送。默认情况下，在首次WiFi网络配置成功后，设备将自动重启，并进入网络编程模式。若您在运行其他应用后不知如何重新进入编程模式，你可以参考以下操作。

>开机后，在主菜单界面按下按键A选择编程模式，在编程模式页面等待网络指示标志右红变成绿色，通过电脑浏览器访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面.

<img src="assets\img\getting_started_pics\m5stickc\m5stickc_wifi_mode.jpg ">

#### API KEY配对

>API KEY是M5设备在使用UIFlow web编程时的通信凭证。通过在UIFlow端配置相应的API KEY，能够为指定的设备推送程序。用户需在电脑端浏览器访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面，点击页面右上角的菜单栏中的设置按钮，输入对应设备上的API Key，选择使用的硬件，点击OK保存，等待提示连接成功。

<img src="assets\img\getting_started_pics\m5stickc\m5stickc_apikey01.jpg ">


## 点亮LED灯
 
>完成以上步骤，就可以开始使用UIFlow进行编程了。下面将向你演示一个简单的程序，驱动M5StickC点亮LED指示灯。（1. 拖动LED点亮程序块  2. 拼接至Setup初始化程序 .3 点击右上角运行按钮 ）

<img src="assets\img\getting_started_pics\m5stickc\m5stickc_example.jpg ">


## UIFlow Desktop IDE

>UIFlow Desktop IDE是一个离线版的UIFlow编程器，无需网络依赖，且能够提供反应迅速程序推送体验，请根据您的操作系统，点击下方按钮对应版本的 **UIFlow-Desktop-IDE** 进行下载.

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE.zip">
      <img src="/image/base/Windows_logo.png" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_MacOS.zip">
      <img src="/image/base/MacOS_logo.png" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_Linux.zip">
      <img src="/image/base/Linux_logo.png" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>


#### USB编程模式

>将下载好的UIFlow Desktop IDE压缩包解压，双击执行应用程序.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_01.jpg">

?>软件启动后，将自动检测你的电脑是否安装有USB驱动（CP210X），点击Install，根据提示，进行安装.(M5StickC无需CP210X驱动，因此用户可选择安装或是跳过)

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_02.png">

>驱动安装完成后，将自动进入UIFlow Desktop IDE并自动弹出配置框，此时将M5设备通过Tpye-C数据线连接至电脑.

<img src="assets\img\getting_started_pics\m5stickc\m5stickc_usb_connect.jpg ">

!>使用UIFlow Desktop IDE需要M5设备搭载UIFlow固件且进入**USB编程模式**.

>单击设备左侧电源键重启，进入菜单后快速选择Setup，进入配置页面，选择**USB mode**.

<img src="assets\img\getting_started_pics\m5stickc\m5stickc_usb_mode01.jpg">

>选择好对应的端口，与编程设备，点击OK进行连接.

<img src="assets\img\getting_started_pics\m5stickc\m5stickc_desktop_ide01.jpg ">


## 相关链接

* [M5StickC物联网入门教程](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickC_Guide.pdf)
* [UIFlow Block介绍](zh_CN/uiflow/uiflow_home_page)


<script>
   anchor_search();
   scrollFunc();
</script>
