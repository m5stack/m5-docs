# Arduino IDE 环境搭建{docsify-ignore-all}

<!-- ## 2. 安装`Arduino IDE`

*下载地址*
https://www.arduino.cc/en/Main/Software

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package.png">
</figure>

双击安装Arduino IDE，全程保持默认的选择，包括安装路径也是默认。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_arduino_install_path.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_arduino_2.png">
</figure> -->



1. [安装Arduino-IDE](#安装Arduino-IDE)

2. [安装ESP32的板管理](#安装ESP32的板管理)

3. [安装M5Stack的库](#安装M5Stack的库)

4. [安装串口驱动](#安装串口驱动)

<!-- 5. [编译上传程序](#编译上传程序) -->

## 安装Arduino-IDE


>[点击此处访问 Arduino 官网](https://www.arduino.cc/en/Main/Software),选择对应自己操作系统的安装包进行下载.


<img src="assets/img/related_documents/Arduino_IDE/Arduino_install.jpg">


## 安装ESP32的板管理

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

<img src="assets/img/related_documents/Arduino_IDE/Arduino_5.jpg">

## 安装M5Stack的库

>不同的硬件设备，有着不同的案例程序库，请根据你所使用的设备选择下载.打开 Arduino IDE, 然后选择 `项目`->`加载库`->`库管理...`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_6.jpg">

### For M5Core and M5Stick

?>搜索 `M5Stack` 并安装，如下图所示

<img src="assets/img/related_documents/Arduino_IDE/Arduino_7.jpg">

### For M5Stick-C

?>搜索 `M5StickC` 并安装，如下图所示

<img src="assets/img/related_documents/Arduino_IDE/Arduino_8.jpg">

## 安装串口驱动

>1.点击下方对应自己操作系统的CP210X驱动程序 进行下载.

<div class="link">

 <h4><span>CP210X Driver:</span></h4>
    <p>
    <a href="http://res.m5stack.com/Driver/CP210x_VCP_Windows.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="http://res.m5stack.com/Driver/CP210x_VCP_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="http://res.m5stack.com/Driver/CP210x_VCP_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a>
    </p>
</div>



### For Windows

>将下载好的驱动压缩包解压，选择对应您操作系统的安装程序，双击安装.

<img src="assets/img/related_documents/Arduino_IDE/CP210X_WIN.jpg">


### For Mac

>将下载好的驱动压缩包解压，安装程序，双击镜像文件开始安装.

<img src="assets/img/related_documents/Arduino_IDE/CP210X_MAC.png">

<!-- ### For Linux

即将上线... -->

<!-- 
## 编译上传程序 -->




<style>

.link a{

    padding-left: 13%;

}

</style>