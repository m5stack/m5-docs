# Arduino IDE 环境搭建{docsify-ignore-all}

## 驱动安装

>程序烧录前，M5Core型主机（包含BASIC/GRAY/M5GO/FIRE/FACES）用户请根据您使用的操作系统，点击下方按钮下载相应的CP210X驱动程序压缩包.在解压压缩包后，选择对应操作系统位数的安装包进行安装。

?>注意：M5StickC/V/T/ATOM系列支持可免驱动使用，用户可跳过该驱动安装步骤。

?> 对于Mac OS，在安装之前确保系统偏好设置->安全性和隐私->通用，并允许从App Store和被认可的开发者

><img src="/image/base/System_preferences.png" width="50%">

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

## Arduino-IDE

>[点击此处访问 Arduino 官网](https://www.arduino.cc/en/Main/Software),选择对应自己操作系统的安装包进行下载.

<img src="assets/img/related_documents/Arduino_IDE/Arduino_install.jpg">

## ESP32的板管理

>1.打开 Arduino IDE，选择 `文件`->`首选项`->`设置`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_1.jpg">

>2.复制下方的 ESP32 板管理网址到 `附加开发板管理器:` 中

**https://dl.espressif.com/dl/package_esp32_index.json**

<img src="assets/img/related_documents/Arduino_IDE/Arduino_2.jpg">

>3.选择 `工具`->`开发板:`->`开发板管理器...`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_3.jpg">

>4.在新弹出的对话框中，输入并搜索 `ESP32`，点击`安装`（若出现搜索失败的情况，可以尝试重启Arduino程序）

<img src="assets/img/related_documents/Arduino_IDE/Arduino_4.jpg">

>5.选择 `工具`->`开发板:`->`ESP32`

### For M5Core and M5Stick

<img src="assets/img/related_documents/Arduino_IDE/Arduino_5.jpg">

### For M5StickC

<img src="assets/img/related_documents/Arduino_IDE/Arduino_77.jpg">

### For Atom Matrix/Lite

<img src="assets/img/related_documents/Arduino_IDE/Arduino_66.jpg">

## 相关库

>不同的硬件设备，有着不同的案例程序库，请根据你所使用的设备选择下载.打开 Arduino IDE, 然后选择 `项目`->`加载库`->`库管理...`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_6.jpg">

### For M5Core and M5Stick

?>搜索 `M5Stack` 并安装，如下图所示

<img src="assets/img/related_documents/Arduino_IDE/Arduino_7.jpg">

### For M5Stick-C

?>搜索 `M5StickC` 并安装，如下图所示

<img src="assets/img/related_documents/Arduino_IDE/Arduino_8.jpg">

### For Atom Matrix/Lite

?>搜索 `M5Atom` 并安装，如下图所示,使用LED可能你还需要安装FastLED库

<img src="assets/img/related_documents/Arduino_IDE/Arduino_9.jpg">


<script>

   anchor_search();
   scrollFunc();

</script>