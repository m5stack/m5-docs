# Arduino IDE 环境搭建

## 驱动安装

>程序烧录前，用户请根据您使用的操作系统，点击下方按钮下载相应的CP210X驱动程序压缩包.在解压压缩包后，选择对应操作系统位数的安装包进行安装。

?> 对于Mac OS，在安装之前确保系统偏好设置->安全性和隐私->通用，并允许从App Store和被认可的开发者

><img src="/image/base/System_preferences.webp" width="50%">

* __下载CP2104驱动程序__

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

## Arduino-IDE

>[点击此处访问 Arduino 官网](https://www.arduino.cc/en/Main/Software),选择对应自己操作系统的安装包进行下载.

<img src="assets/img/related_documents/Arduino_IDE/Arduino_install.webp">

## M5Stack的板管理

>1.打开 Arduino IDE，选择 `文件`->`首选项`->`设置`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_1.webp">

>2.复制下方的 M5Stack 板管理网址到 `附加开发板管理器:` 中

**https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/arduino/package_m5stack_index.json**

<img src="assets/img/related_documents/Arduino_IDE/arduino_board_config.webp">

>3.选择 `工具`->`开发板:`->`开发板管理器...`

<img src="assets/img/related_documents/Arduino_IDE/board_manage.webp">

>4.在新弹出的对话框中，输入并搜索 `M5Stack`，点击`安装`（若出现搜索失败的情况，可以尝试重启Arduino程序）

<img src="assets/img/related_documents/Arduino_IDE/search_M5STACK.webp">

>5.选择 `工具`->`开发板:`->`M5Stack-Core2`
 
<img src="assets/img/related_documents/Arduino_IDE/board_select.webp">

>6.选择`项目`->`加载库:`->`管理库`

<img src="assets/img/related_documents/Arduino_IDE/manage_libraries.webp">

>7.在弹出的对话框中搜索`M5Core2`-> 点击`安装`

<img src="assets/img/related_documents/Arduino_IDE/install_library.webp">

<script>

   anchor_search();
   scrollFunc();

</script>