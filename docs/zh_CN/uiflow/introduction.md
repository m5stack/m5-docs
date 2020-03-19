
## UIFlow固件

* __下载驱动程序__

><img src="/image/base/Windows_logo.png" width="50" height="50"> 访问[m5stack.com](http://m5stack.com/)下载Windows操作系统对应的[CP210X驱动程序](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip)

><img src="/image/base/MacOS_logo.png" width="50" height="50">  访问[m5stack.com](http://m5stack.com/)下载MacOS操作系统对应的[CP210X驱动程序](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip)

><img src="/image/base/Linux_logo.png" width="50" height="50">  访问[m5stack.com](http://m5stack.com/)下载Linux操作系统对应的[CP210X驱动程序](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip)

* __安装驱动程序__

> 解压压缩包后，选择对应操作系统位数的安装包进行安装

><img src="/image/base/CP210X_install.gif " width="50%">

* __下载M5Burner__

><img src="/image/base/Windows_logo.png" width="50" height="50"> 访问[flow.m5stack.com](http://flow.m5stack.com/)下载最新的固件包和[M5Burner烧录工具(Windows版)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip)

><img src="/image/base/MacOS_logo.png" width="50" height="50">  访问[flow.m5stack.com](http://flow.m5stack.com/)下载最新的固件包和[M5Burner烧录工具(MacOS版)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip)

><img src="/image/base/Linux_logo.png" width="50" height="50">  访问[flow.m5stack.com](http://flow.m5stack.com/)下载最新的固件包和[M5Burner烧录工具(Linux版)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip)

?> Mac OS 用户需要将M5Burner放入Application文件夹内

><img src="/image/base/application.png" width="50%" height="50%"> 

* __开始烧录__

> 解压压缩包后，双击打开Burner烧录工具，将M5设备通过Type-C数据线连接到电脑，选择对应的COM口，波特率（烧录的速率建议921600或115200），以及你想更新的固件版本，1.4.5以上版本可以直接通过M5Bunner配置WIFI

>__首次烧录需点击Erase进行一次擦除（在往后的更新中则无需再次擦除，否则将清除已保存的WIFI信息，以及刷新API Key），擦除完成后点击Burn开始烧录__

><img src="/image/base/Burner_user.gif " width="50%">


## 配置WIFI

>1.4.5以上版本可直接通过M5Burner写入wifi信息

><img src="/image/base/Burner_145.png " width="50%">

* __M5GO__

>__*1.4.5以上版本可直接通过M5Bunner配置__

>1.单击设备的电源键开机，在屏幕出现Logo后按下A键，然后用手机连接屏幕上显示的wifi热点

>2.用手机连接热点成功后，打开手机浏览器扫描屏幕上的二维码，或是直接访问 __192.168.4.1__，进入页面填写个人的WIFI信息，使得设备连接上你的个人网络

><img src="/image/base/1.png" width="15%"> &nbsp;&nbsp;<img src="/image/base/2.png" width="60%">


* __M5StickC__

>__*1.4.5以上版本可直接通过M5Bunner配置__

>1.单击设备的电源键开机

>2.用手机连接屏幕上显示的wifi热点，然后打开手机浏览器直接访问 __192.168.4.1__，进入页面填写个人的WIFI信息，使得设备连接上你的个人网络

><img src="/image/base/3.png" width="10%"> &nbsp;&nbsp; <img src="/image/base/4.png" width="12%"> 

* __Atom Matrix__ __&__ __Atom Lite__

>__*1.4.5以上版本可直接通过M5Bunner配置__

>1.设备通电后，按住中间按键不放，等到LED变为黄色呼吸灯时松开,此时黄灯常亮

>2.打开手机浏览器直接访问 __192.168.4.1__，进入页面填写个人的WIFI信息，使得设备连接上你的个人网络

## 配置API Key

#### 进入编程模式

* __M5GO__

>开机后，在主菜单选择编程模式，等待信号指示灯右红变成绿色（这表示M5GO连接网络成功），用平板扫描屏幕上的二维码，或是在电脑浏览器直接访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面，此外通过设置页面可以更改UIFlow连接服务器，新加坡服务器网址为flow01.m5stack.com

><img src="/image/base/APIkey_user.png"/>

* __M5StickC__

>开机后，等待地球指示灯红色变成绿色（这表示M5StickC连接网络成功），在电脑浏览器直接访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面

* __Atom Matrix__ __&__ __Atom Lite__

>开机后，等待LED指示灯红色变成绿色（这表示Atom连接网络成功），在电脑浏览器直接访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面

#### 填写API Key

>进入UIFlow后，点击页面右上角的菜单栏中的设置按钮，输入对应设备上的API Key，点击OK保存，等待提示连接成功

><img src="/image/base/APIkey_userpair1.png" width="50%"><img src="/image/base/APIkey_userpair2.png" width="50%">

>Atom的APIKey可以通过web配网页面查看，或通过串口工具查看

><img src="assets/img/product_pics/core/minicore/atom/apikey.png" width="50%"><img src="assets/img/product_pics/core/minicore/atom/serialtool.png" width="50%">


## UIFlow-IDE

>如果你希望离线使用UIFlow，点击下方对应自己操作系统的 **UIFlow-Desktop-IDE** 进行下载.

<div class="link">
 <h4><span>下载 UIFlow Desktop IDE:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a>
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

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_00.jpg">

!>如果你使用的是Atom请按以下说明操作

>在上电同时（或重启时）按住中间按键不要松开，菜单模式以呼吸灯形式变色，等到灯光变换为蓝色呼吸灯时松开，即进入USB模式（更多信息参考https://docs.m5stack.com/#/zh_CN/quick_start/atom/atom_quick_start）

><img src="/image/base/usbmode.jpg" width="50%" height="50%">

## 相关教材

* [M5StickC物联网入门教程](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickC_Guide.pdf)

* [M5GO编程入门教程](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/UIFlow-Book-zh_cn.pdf)

<script>

   anchor_search();
   scrollFunc();

</script>