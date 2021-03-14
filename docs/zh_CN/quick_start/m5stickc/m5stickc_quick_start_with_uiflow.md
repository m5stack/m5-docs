# UIFlow 快速上手

?>本教程适用于M5StickC

## 烧录工具

>请根据您所使用的操作系统，点击下方按钮下载相应的M5Burner固件烧录工具。解压打开应用程序。

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.webp">

?>注意：MacOS用户安装完成后请将应用放入Application文件夹内，如下图所示。

><img src="/image/base/application.webp" width="70%"> 

?>注意：Linux用户请切换至解压文件路径下，在终端中运行`./M5Burner`, 运行应用。

## 固件烧录

>双击打开Burner烧录工具，①在左侧菜单中选择对应的设备类，②选择您所需要的固件版本，③点击下载按钮进行下载。

<img src="assets\img\quick_start\m5stickc\burner_m5stickc01.webp" width="70%"> 

>将M5设备通过Type-C数据线连接到电脑，④选择对应的COM口，波特率可使用M5Burner中的默认配置，⑤配置完成后，点击"Burn"进行烧录。

<img src="assets\img\quick_start\m5stickc\burner_m5stickc02.webp" width="70%"> 

>您可以在固件烧录阶段就填入设备后续将要连接的WIFI信息，亦可以保留空白后续使用AP热点配置WiFi。⑥点击"Stact"开始烧录。

<img src="assets\img\quick_start\m5stickc\burner_m5stickc03.webp" width="70%"> 

>当烧录日志提示`Burn Successfully`时，则表示固件已经烧录完成。

<img src="assets\img\quick_start\m5stickc\burner_done.webp" width="70%">

?>首次烧录或固件程序运行异常时，可点击右上角的"Erase"擦除flash内存，在后续的固件更新时，则无需再次擦除，__否则将删除已保存的Wi-Fi信息且刷新API Key__。

## 配置文件

>如果您需要修改配置文件，请将您的M5设备通过Type-C数据线连接到电脑并选择对应的COM口，⑦然后可点击configuration进行修改。

<img src="assets\img\quick_start\m5stickc\burner_m5stickc04.webp" width="70%"> 


>APIKey: M5设备在使用UIFlow web编程时的通信凭证  
Start Mode: 可配置启动后进入的模式  
Quick Start: 可选择快速启动以跳过启动界面  
Server: 服务器选择  
Wifi: 配置Wifi的SSID以及Password  

<img src="assets\img\quick_start\m5stickc\burner_m5stickc05.webp" width="70%"> 

## 配置WIFI

>UIFlow提供了离线与web版本的编程器，在使用web版本的UIFlow时，我们需要为设备配置WiFi连接。下面介绍为设备配置WiFi连接的两种方式（烧录配置与AP热点配置）。

### 烧录配置WiFi(推荐)

?>UIFlow-1.4.5以上版本支持WiFi连接的前期烧录配置, 用户只需在固件烧录前将WiFi信息填入WiFi配置框，随后点击"Burn"进行固件烧录，填入的WiFi信息将随同固件一起烧录保存至M5设备。

<img src="assets\img\quick_start\m5stickc\burner_wifi.webp" width="70%">

### AP热点配置WiFi

>1.长按左侧电源键开机，在未配置WiFi的情况下，首次开机将自动进入网络配置模式。假设在运行其他程序后，你想要重新进入网络配置模式，你可以参照下方操作。开机出现UIFlow Logo后，快速单击Home键（中心M5按键），进入配罝页面。按机身右侧按键将选项切换至Setting，按下Home键确认。按右侧按键切换选项至`Wi-Fi via AP`,按下Home键确认，开始配置。

<img src="assets\img\quick_start\m5stickc\m5stickc_ap_setup.webp">

>2.用手机连接热点成功后，打开手机浏览器直接访问 __192.168.4.1__，进入页面填写个人的WIFI信息，点击配置，使设备记录下你的WiFi信息。配置成功后设备将自动重启。并进入编程模式。

?>注意：配置的WiFi信息中，不允许出现"空格"等特殊字符。

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\uiflow_wifi_setup2.webp ">


## 网络编程模式与API KEY

#### 进入网络编程模式

?>网络编程模式是M5设备与UIFlow web编程平台的一个对接模式,屏幕会显示出当前设备的网络连接状态。当指示标志为绿色时，则代表随时可接收程序推送。默认情况下，在首次WiFi网络配置成功后，设备将自动重启，并进入网络编程模式。若您在运行其他应用后不知如何重新进入编程模式，你可以参考以下操作。

>开机后，在主菜单界面按下按键A选择编程模式，在编程模式页面等待网络指示标志右红变成绿色，屏幕上将显示设备当前的`API KEY`，通过电脑浏览器访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面。 

<img src="assets\img\quick_start\m5stickc\m5stickc_wifi_mode.webp">

#### API KEY配对

>API KEY是M5设备在使用UIFlow web编程时的通信凭证。通过在UIFlow端配置相应的API KEY，能够为指定的设备推送程序。用户需在电脑端浏览器访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面，点击页面右上角的菜单栏中的设置按钮，输入对应设备上的API Key，选择使用的硬件，点击OK保存，等待提示连接成功。

<img src="assets\img\getting_started_pics\m5stickc\m5stickc_apikey01.webp ">


## 点亮LED灯
 
>完成以上步骤，就可以开始使用UIFlow进行编程了。下面将向你演示一个简单的程序，驱动M5StickC点亮LED指示灯。（1. 拖动LED点亮程序块  2. 拼接至Setup初始化程序 .3 点击右上角运行按钮 ）

<img src="assets\img\getting_started_pics\m5stickc\m5stickc_example.webp ">


## UIFlow Desktop IDE

>UIFlow Desktop IDE是一个离线版的UIFlow编程器，无需网络依赖，且能够提供反应迅速程序推送体验，请根据您的操作系统，点击下方按钮对应版本的 **UIFlow-Desktop-IDE** 进行下载。

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>


#### USB编程模式

>将下载好的UIFlow Desktop IDE压缩包解压，双击执行应用程序。

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_01.webp">

?>软件启动后，将自动检测你的电脑是否安装有USB驱动（CP210X），点击Install，根据提示，进行安装。(M5StickC无需CP210X驱动，因此用户可选择安装或是跳过)

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_02.webp">

>驱动安装完成后，将自动进入UIFlow Desktop IDE并自动弹出配置框，此时将M5设备通过Tpye-C数据线连接至电脑.

<img src="assets\img\quick_start\m5stickc\m5stickc_usb_connect.webp">

?>使用UIFlow Desktop IDE需要M5设备搭载UIFlow固件且进入**USB编程模式**。

>单击设备左侧电源键重启，进入菜单后快速单击右侧按钮切换模式，选择**USB mode**。

<img src="assets\img\quick_start\m5stickc\m5stickc_usb_mode.webp">

>选择好对应的端口，与编程设备，点击OK进行连接。

<img src="assets\img\getting_started_pics\m5stickc\m5stickc_desktop_ide01.webp ">


## 相关链接

* [M5StickC物联网入门教程](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickC_Guide.pdf)
* [UIFlow Block介绍](zh_CN/uiflow/uiflow_home_page)


<script>
   anchor_search();
   scrollFunc();
</script>
