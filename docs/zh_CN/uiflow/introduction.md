
# UIFlow快速上手

## 驱动安装

>程序烧录前，M5Core型主机（包含BASIC/GRAY/M5GO/FIRE/FACES）用户请根据您使用的操作系统，点击下方按钮下载相应的CP210X驱动程序压缩包.在解压压缩包后，选择对应操作系统位数的安装包进行安装。

?>注意：M5StickC/V/T/ATOM系列支持可免驱动使用，用户可跳过该驱动安装步骤。


* __下载CP2104驱动程序__

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip">
      <img src="/image/base/Windows_logo.png" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip">
      <img src="/image/base/MacOS_logo.png" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip">
      <img src="/image/base/Linux_logo.png" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

><img src="/image/base/CP210X_install.gif " width="70%">


## 烧录工具

>请根据您所使用的操作系统，点击下方按钮下载相应的M5Burner固件烧录工具.解压并进行安装。

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

?>注意：MacOS用户安装完成后请将应用放入Application文件夹内，如下图所示。

><img src="/image/base/application.png" width="70%"> 

## 固件烧录

>双击打开Burner烧录工具，在左侧菜单中点击下载按钮，下载你所需要的固件版本，然后将M5设备通过Type-C数据线连接到电脑，选择对应的COM口，波特率，以及烧录设备的类型。

?>注意：M5Burner中包含了M5Stack多款产品的UIFlow固件版本。因此你需要在进行烧录前，选择正确的设备类型，以获得与设备匹配的固件，如下图所示。（烧录速率可以使用烧录器默认配置，特殊情况无法烧录可尝试降低至115200）。

<img src="/image/base/device_select.jpg" width="70%"> 
 

>__首次烧录需点击Erase进行一次擦除（在往后的更新中则无需再次擦除，否则将清除已保存的WIFI信息，以及刷新API Key），擦除完成后点击Burn开始烧录__

><img src="/image/base/Burner_user.gif " width="70%">


## 配置WIFI

>UIFlow提供了离线与web版本的编程器，在使用web版本的UIFlow时，我们需要为设备配置WiFi连接。下面介绍为设备配置WiFi连接的两种方式（烧录配置与AP热点配置），使用热点配置的用户请根据自己的设备类型，参照下方不同设备的说明进行配置操作。

### 烧录配置WiFi

?>UIFlow-1.4.5以上版本可直接通过M5Burner写入wifi信息。

><img src="/image/base/Burner_145.png " width="70%">

### AP热点配置WiFi

* __BASIC/GRAY/M5GO/FIRE/FACES__

>1.单击设备左侧的红色电源键开机，在屏幕出现UIFlow Logo后迅速按下按键A，使用手机连接设备屏幕上显示的wifi热点

>2.用手机连接热点成功后，打开手机浏览器扫描屏幕上的二维码，或是直接访问 __192.168.4.1__，进入页面填写个人的WIFI信息，点击配置，使设备记录下你的WiFi信息。配置成功后设备将自动重启。并进入编程模式。

><img src="/image/base/1.png" width="15%"> &nbsp;&nbsp;<img src="/image/base/2.png" width="60%">

* __M5StickC__

>1.长按设备的电源键开机  2.用手机连接屏幕上显示的wifi热点，使用手机浏览器直接访问 __192.168.4.1__，进入页面填写个人的WIFI信息，点击配置，使设备记录下你的WiFi信息。配置成功后设备将自动重启。并进入编程模式。

><img src="/image/base/3.png" width="10%"> &nbsp;&nbsp; <img src="/image/base/4.png" width="12%"> 

* __Atom Matrix/Atom Lite__

>1.将设备连接USB供电后，长按中间按键，等到LED变为黄色呼吸灯时松开,进入网络配置模式，此时黄灯常亮。

><img src="/image/base/configure_wifi.jpg">

>2.打开手机浏览器直接访问 __192.168.4.1__，进入页面填写个人的WIFI信息，点击配置，使设备记录下你的WiFi信息。配置成功后设备将自动重启。并进入编程模式。


## 编程模式与API KEY

#### 进入网络编程模式

>网络编程模式是M5设备与UIFlow web编程平台的一个对接模式,屏幕会显示出当前设备的网络连接状态。当指示标志为绿色时，则代表随时可接收程序推送。

?>默认情况下，在首次WiFi网络配置成功后，设备将自动重启，并进入网络编程模式。若您在运行其他应用后不知如何重新进入编程模式，你可以参考以下操作。

* __BASIC/GRAY/M5GO/FIRE/FACES__

>开机后，在主菜单界面按下按键A选择编程模式，在编程模式页面等待信号指示灯右红变成绿色，用平板扫描屏幕上的二维码，或是在电脑浏览器直接访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面，此外通过设置页面可以更改UIFlow连接服务器，新加坡服务器网址为flow01.m5stack.com

><img src="/image/base/APIkey_user.png"/>

* __M5StickC__

>开机出现UIFlow logo后快速按下中间按键进入功能菜单（单击机身右侧按键可切换当前选项），按下中间按键选择Program编程模式，等待网络连接成功，等待网络指示标志由红色变成绿色（这表示M5StickC连接网络成功）

* __Atom Matrix/Atom Lite__

>开机后，长按设备中间按键，等待呼吸灯转化绿灯时，松开按键。进入在线编程模式。 模式启动后将开始WIFI连接，此时等待LED指示灯红色变成绿色（这表示Atom连接网络成功），在电脑浏览器直接访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面。

#### 填写API Key

>API KEY是M5设备在使用UIFlow web编程时的通信凭证。通过在UIFlow端配置相应的API KEY，能够为指定的设备推送程序。用户需在电脑端浏览器访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面，点击页面右上角的菜单栏中的设置按钮，输入对应设备上的API Key，点击OK保存，等待提示连接成功。

><img src="/image/base/APIkey_userpair1.png" width="50%"><img src="/image/base/APIkey_userpair2.png" width="50%">

>Atom的APIKey可以通过web配网页面查看，或通过串口工具查看

><img src="assets/img/product_pics/core/minicore/atom/apikey.png" width="50%"><img src="assets/img/product_pics/core/minicore/atom/serialtool.png" width="50%">



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


#### 基本配置

>将下载好的UIFlow Desktop IDE压缩包解压，双击执行应用程序.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_01.jpg">

?>软件启动后，将自动检测你的电脑是否安装有USB驱动（CP210X），点击Install，根据提示，进行安装.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_02.png">

>驱动安装完成后，将自动进入UIFlow Desktop IDE并自动弹出配置框，此时将M5设备通过Tpye-C数据线连接至电脑.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_03.png">

!>使用UIFlow Desktop IDE需要M5设备搭载UIFlow固件且进入**USB编程模式**.

>单击设备左侧电源键重启，进入菜单后快速选择Setup，进入配置页面，选择**USB mode**.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_04.png">

>选择好对应的端口，与编程设备，点击OK进行连接.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_05.jpg">

!>如果你使用的是M5StickC请按以下说明操作

>长按机身左侧的电源键2秒进行开机，在出现UIFlow Logo后，快速单击Home键（中心M5按键），进入配罝页面。按机身右侧按键将选项切换至Setting，按下Home键确认。按右侧按键切换选项至USB mode,按下Home键确认，进入USB编程模式.在IDE中选择相应的COM口与设备，点击连接。

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_00.jpg" width="65%">

!>如果你使用的是Atom请按以下说明操作

>在上电同时（或重启时）按住中间按键不要松开，菜单模式以呼吸灯形式变色，等到灯光变换为蓝色呼吸灯时松开，即进入USB模式（更多信息参考https://docs.m5stack.com/#/zh_CN/quick_start/atom/atom_quick_start）

><img src="/image/base/usbmode.jpg" width="100%">

## 相关教材

* [M5StickC物联网入门教程](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickC_Guide.pdf)

* [M5GO编程入门教程](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/UIFlow-Book-zh_cn.pdf)


<script>

   anchor_search();
   scrollFunc();

</script>