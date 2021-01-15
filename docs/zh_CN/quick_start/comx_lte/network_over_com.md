# Network Over COM.LTE使用教程

>Network Over COM.LTE模式，可以使得设备在使用UIFlow时，所有网络数据经过LTE发送。 

?>注意事项: `CORE2`在使用`Network Over COM.LTE模式`时，M-BUS的5V电源将切换为输入模式，因此请直接输入5V电源至M-BUS，或使用DC适配器连接至LTE模块进行供电。

## 准备工作

### 驱动安装

>程序烧录前，M5Core型主机（包含BASIC/GRAY/M5GO/FIRE/FACES/CORE2）用户请根据您使用的操作系统，点击下方按钮下载相应的CP210X驱动程序压缩包.在解压压缩包后，选择对应操作系统位数的安装包进行安装。

* __下载CP210X驱动程序__

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

><img src="/image/base/CP210X_install.gif " width="70%">


### 烧录工具

>请根据您所使用的操作系统，点击下方按钮下载相应的M5Burner固件烧录工具.解压打开应用程序。

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

### 固件烧录

>1.双击打开Burner烧录工具，在左侧菜单中选择对应的设备类型，选择你所需要的固件版本，点击下载按钮进行下载。

<img src="assets\img\quick_start\core\burner_m5core01.webp" width="70%">

>2.然后将M5设备通过Type-C数据线连接到电脑，选择对应的COM口，点击"Burn"开始烧录.

<img src="assets\img\quick_start\core\burner_m5core02.webp" width="70%">

>3.当烧录日志提示`Burn Successfully`时，则表示固件已经烧录完成。

<img src="assets\img\quick_start\core\burner_done.webp" width="70%">

## 设置APN/切换模式

>1.点击`Configuration`，软件将开始读取当前设备的配置信息，在弹出的配置框中，你可以根据你所使用的运营商，重新配置APN。（默认APN为CMNET）

>2.将设备切换至COM.LTE工作模式，你可以在配置框中将`COM.X`选项设置为`True`或是，在设备的启动后，进入Setup配置页面进行模式切换。  

## 开始使用

>1.配置完成后，开机将会自动启用，并开始检查。通过测试后，将进入编程模式页面。

>2.参考以下案例，通过http请求URL`https://httpbin.org/ip`，获取本机当前IP。


<img src="assets\img\quick_start\comx_lte\http_get_ip.jpg" width="70%">



