
## 烧录 UIFlow 

* __下载驱动__

?>注意：ATOM在WIN10 & Linux & MAC下可免驱动使用，用户可跳过该驱动安装步骤，如无法正常使用请尝试下载安装驱动。

<a href="https://www.ftdichip.com/Drivers/VCP.htm">Driver download Link</a>

* __安装驱动__

> 解压zip文件，并进行安装

?> 对于Mac OS用户而言, 确保安装前勾选了 系统偏好设置 - >安全性与隐私 - >通用 - >允许以下位置下载的App - >App Store和认可的开发者选项。

><img src="/image/base/System_preferences.webp" width="50%">


* __下载 M5Burner__

>请根据您所使用的操作系统，点击下方按钮下载相应的M5Burner固件烧录工具.解压并进行安装。

><img src="/image/base/Windows_logo.webp" width="50" height="50"> Go to [flow.m5stack.com](http://flow.m5stack.com/) and download the latest firmware and [M5Burner(Windows)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner-Beta.zip)

><img src="/image/base/MacOS_logo.webp" width="50" height="50">  Go to [flow.m5stack.com](http://flow.m5stack.com/) and download the latest firmware and [M5Burner(MacOS)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner-Beta-Mac.zip)

><img src="/image/base/Linux_logo.webp" width="50" height="50">  Go to [flow.m5stack.com](http://flow.m5stack.com/) and download the latest firmware and [M5Burner(Linux)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner-Beta-Linux.zip)

?>注意：MacOS用户安装完成后请将应用放入Application文件夹内，如下图所示。

><img src="/image/base/application.webp" width="70%"> 

* __下载固件__

>双击打开M5Burner烧录工具，点击ATOM图标，下载你所需要的固件版本。

><img src="/image/base/download_atom_firmware.webp" width="50%" height="50%">

* __烧录固件__

>连接ATOM，选择对应的COM端口，设定波特率为750000，填入WIFI的SSID和密码，点击"Erase"进行擦除，擦除完毕后点击"Burn"进行烧录。当烧录成功后会出现"Burn Successfully"的提示

><img src="/image/base/Burner_user1.webp " width="50%"><img src="/image/base/Burner_user2.webp " width="50%">

#### 获取API Key

>确保COM端口已连接，点击"COM Monitor" 按钮打开串口监视器,然后按下ATOM左侧重启按键,串口监视器将打印信息, API KEY会出现在信息的最后.

><img src="/image/base/APIKEY.webp " width="50%">

>API KEY是M5设备在使用UIFlow web编程时的通信凭证。通过在UIFlow端配置相应的API KEY，能够为指定的设备推送程序。用户需在电脑端浏览器访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面，点击页面右上角的菜单栏中的设置按钮，输入对应设备上的API Key，点击OK保存，等待提示连接成功。

><img src="/image/base/APIkey_userpair1.webp" width="50%"><img src="/image/base/APIkey_userpair2.webp" width="50%">

## UIFlow Desktop IDE

>UIFlow Desktop IDE是一个离线版的UIFlow编程器，无需网络依赖，且能够提供反应迅速程序推送体验，请根据您的操作系统，点击下方按钮对应版本的 **UIFlow-Desktop-IDE** 进行下载.

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


#### 基本配置

>将下载好的UIFlow Desktop IDE压缩包解压，双击执行应用程序.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_01.webp">

?>软件启动后，将自动检测你的电脑是否安装有USB驱动（CP210X），点击Install，根据提示，进行安装.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_02.webp">

>驱动安装完成后，将自动进入UIFlow Desktop IDE并自动弹出配置框，此时将M5设备通过Tpye-C数据线连接至电脑.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_03.webp">

!>使用UIFlow Desktop IDE需要M5设备搭载UIFlow固件且进入**USB编程模式**.

>单击设备左侧电源键重启，进入菜单后快速选择Setup，进入配置页面，选择**USB mode**.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_04.webp">

>选择好对应的端口，与编程设备，点击OK进行连接.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_05.webp"

!>使用ATOM菜单的USB模式进行连接

>在上电同时（或重启时）按住中间按键不要松开，菜单模式以呼吸灯形式变色，等到灯光变换为蓝色呼吸灯时松开，即进入USB模式（更多信息参考https://docs.m5stack.com/#/zh_CN/quick_start/atom/atom_quick_start）

><img src="/image/base/usbmode.webp" width="100%">

## 相关教材

* [M5StickC物联网入门教程](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickC_Guide.pdf)

* [M5GO编程入门教程](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/UIFlow-Book-zh_cn.pdf)


<script>

   anchor_search();
   scrollFunc();

</script>