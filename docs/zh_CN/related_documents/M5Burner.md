# 烧录固件 {docsify-ignore-all}

:clapper: **[视频教程](#视频教程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[文本教程](#文本教程)**

***

**该文档将向你介绍如何安装USB驱动，及使用M5Burner烧录固件.**

***

## 文本教程

**[1. 准备工作](#准备工作)**

**[2. 安装串口驱动](#安装串口驱动)**

**[3. M5Burner](#M5Burner)**

**[4. 添加自定义固件](#添加自定义固件)**

**[5. ESPTool](#ESPTool)**

## 准备工作

>1.点击下方对应自己操作系统的 M5Burner烧录工具 及 CP210X驱动程序 进行下载.

<div class="link">
 <h4><span>M5Burner:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.webp?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.webp?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.webp?v=1557026584" alt="">Linux</a></p>

 <h4><span>CP210X Driver:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.webp?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.webp?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.webp?v=1557026584" alt="">Linux</a>
    </p>
</div>

## 安装串口驱动

### For Windows

>将下载好的CP210X驱动压缩包解压，选择对应您操作系统的安装程序，双击安装.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/CP210X_WIN.webp">


### For Mac

>将下载好的CP210X驱动压缩包解压，安装程序，双击镜像文件开始安装.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/CP210X_MAC.webp">


## M5Burner

>1.将下载好的烧录工具压缩包进行解压.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.webp">

>2.双击打开"M5Burner"应用程序.工具左侧为固件版本列表，点击列表中下载箭头能够下载相应的固件（灰色代表未下载，白色代表已下载）.
>点击上方的刷新按钮能够刷新列表，查看是否有新的固件发布.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_02.webp">

>3.选择好您想要烧录的固件版本，将设备通过Type-C数据线连接至电脑，选择对应COM端口与设备类型.点击"Burn"开始烧录.

?>在首次烧录时，建议点击"Erase"清除内存，在后续的固件更新时，则无需再次清除，否则将删除已保存的Wi-Fi信息，及刷新API Key.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_03.webp">


## 添加自定义固件

>1.M5Burner除了能够烧录M5Stack官方发布的固件以外，还允许用户自行打包固件，并添加到固件列表进行烧录.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_04.webp">


>2.自行打包固件时，需要遵循指定的文件目录规则，并添加json配置文件，最后将其打包成"zip"格式进行添加.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_05.webp">


>3.[点击下载固件包案例](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/demo-firmware.zip).



## ESPTool

>1.对于习惯使用命令行操作的用户来说还可以选择ESPTool作为固件烧录工具.[点击此处查看详情](https://github.com/espressif/esptool)

<!-- ### 1. 安装 pip 和 esptool

打开终端，根据系统版本，输入如下命令，安装 python的包管理工具 `pip`

* Centos7:

```clike
sudo yum install python-pip
```

* Ubuntu and Debian:

```clike
sudo apt-get install python-pip
```

* Arch:

```clike
sudo pacman -S --needed python-pip
```

安装完 `pip` 之后，输入 `sudo pip install esptool`，安装 esptool

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_11.webp">

### 2. 下载最新的M5Burner

访问[UIFlow](http://www.m5stack.com)来下载MacOS版本的M5Burner，并解压。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_10.webp">

### 3. 执行程序

在用户目录下创建文件夹 `M5Burner`，复制 `M5Burner_MacOS/M5Burner_MacOS.app/Contents/Resources/firmware/M5Flow/` 文件夹到 `~/M5Burner`

如果您希望烧录 v1.1.1 版本的固件的话，在终端窗口中，切换当前到对应目录下，`cd ~/M5Burner/M5Flow/v1.1.1-en`

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_13.webp">

插入 M5Core 设备，在终端执行 `sudo chmod +x *.sh`，对所有的 shell 脚本文件赋予可执行权限，然后再执行 `sudo ./flash.sh` 烧录固件。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_12.webp"> -->

## 视频教程

**Windows M5Burner烧录教程**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Firmware%20Upgrade/A1%20-%20%E5%9B%BA%E4%BB%B6%E6%9B%B4%E6%96%B0.mp4" type="video/mp4">
</video>

<style>

.link a{

    padding-left: 13%;

}

</style>