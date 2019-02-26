# 如何通过M5Burner烧录固件 {docsify-ignore-all}

:clapper: **[视频教程](#视频教程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[文本教程](#文本教程)**

***

*这个文档会介绍如何下载M5Burner，并通过M5Burner烧录固件.*

***

## 文本教程

1. [Windows](#Windows)

2. [MacOS](#MacOS)

2. [Linux](#Linux)

## Windows

### 1. 下载最新的M5Burner

访问[官网](http://www.m5stack.com)来下载M5Burner.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner_02.png" alt="Screenshot of coverpage" title="Cover page">

### 2. 烧录固件

解压刚刚下载的M5Burner压缩包, 然后双击`M5Burner.exe`.

**选择板子正与PC相连的`串口号`和`921600 波特率`, 选择合适的固件文件, 点击`Erase`, 然后等擦除固件完成，点击`Burn`**

?> **Tip** **a.** 如果你想通过[UiFlow](http://flow.m5stack.com)(/[M5Cloud](http://cloud.m5stack.com))来编程的话，请选择最新的`M5Flow-vx.x`(/`M5Cloud-vx.x.x`) **b.** 如果你想有ESP32CAM (或 M5CAMERA)，并且想编程它的话，请选择最新版的`M5Cam-vx.x (/M5Cam-psram)`

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_flow_firmware.gif">

!> **注意** 如何M5Burner的串口号选项框没有显示任何的`COMx`号或者只显示`COM1`, 这时候你需要参考这篇文档[建立串口通信](/zh_CN/related_documents/establish_serial_connection)来重新安装USB驱动.

**a. 选择合适的固件文件**

a. 如果你想通过[UiFlow](http://flow.m5stack.com)来编程的话，请选择最新的`M5Flow-vx.x`

b. 如果你想有ESP32CAM (或 M5CAMERA)，并且想编程它的话，请选择最新版的`M5Cam-vx.x (/M5Cam-psram)`

**b. 点击`Erase`**


<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_01.png" alt="Screenshot of coverpage" title="Cover page">

*如果M5Burner打印出这样的信息的话`Hard resetting via RTS pin...`，这就表明你擦除固件成功了.*

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_04.png" alt="Screenshot of coverpage" title="Cover page">

*如果M5Burner打印出这样的信息的话`Leaving... Staying in bootloader.`，这就表明你烧录固件成功了.*

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_05.png" alt="Screenshot of coverpage" title="Cover page">

### 3. 然后重启板子

?> **提示**
如果M5Burner在点击`Burn`之后，显示`busy...`, 也就是卡顿的话，不要慌张，稍微等几分钟，软件自然就会烧录成功。

?> **提示** 如果M5Burner在擦除或者烧录过程中被中断了(如突然关闭软件), 为了保证板子能正常工作，你最好重新擦除和烧录一遍固件.

## MacOS

### 1. 安装 USB 驱动 (如果您还没安装 USB 驱动的话，跟着这个步骤完成。如果已经安装的话，您可以直接跳转到步骤 2。)

首先，打开官网 https://m5stack.com，然后在页面最顶部选择 `Explore` -> `Download`，下载 MacOS 版本的 `M5Burner` 和 `CP21X Driver`。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_01.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_02.png">

USB 驱动 `CP21X Driver` 下载完之后，打开这个文件，如下图所示安装这个驱动。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_03.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_04.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_05.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_06.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_07.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_08.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_09.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_10.png">

执行到这里，USB 驱动安装成功了。不过你需要执行以下步骤来允许 Mac 系统执行第三方应用软件。打开 Mac 的 `search`，然后搜索 `Terminal`，并敲击键盘 `Enter` 按键以执行它。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_11.png">

在 `Terminal` 中，输入下图的命令，然后敲击键盘 `Enter` 按键。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_12.png">

现在点击屏幕左上角的苹果 LOGO，选择 `System Preferences...`，然后打开 `Security & Privacy`.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_13.png">

在打开的窗口中，选择选项 `Allow apps downloaded from:` 下的 `Anywhere`.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_14.png">

### 2. 打开 M5Burner

回到浏览器，点击浏览器右上角的 `Downloads` 按钮，打开 `M5Burner` 文件。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_15.png">

### 3. 烧录固件

接下来，通过 Type-C USB 线连接你的设备到 Mac 电脑，然后选择对应的固件版本（一般是选择最新的版本），点击 `Flash` 按钮。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_16.png">

固件烧录完成后，拔了 USB 线，按下你的 M5 上的复位按键（M5Core 是红色按键，同时也是电源键）。

## Linux

### 1. 安装 pip 和 esptool

打开终端，根据系统版本，输入如下命令，安装 python的包管理工具 `pip`

* Centos7:

```shell
sudo yum install python-pip
```

* Ubuntu and Debian:

```shell
sudo apt-get install python-pip
```

* Arch:

```shell
sudo pacman -S --needed python-pip
```

安装完 `pip` 之后，输入 `sudo pip install esptool`，安装 esptool

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_11.png">

### 2. 下载最新的M5Burner

访问[UIFlow](http://www.m5stack.com)来下载MacOS版本的M5Burner，并解压。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_10.png">

### 3. 执行程序

在用户目录下创建文件夹 `M5Burner`，复制 `M5Burner_MacOS/M5Burner_MacOS.app/Contents/Resources/firmware/M5Flow/` 文件夹到 `~/M5Burner`

如果您希望烧录 v1.1.1 版本的固件的话，在终端窗口中，切换当前到对应目录下，`cd ~/M5Burner/M5Flow/v1.1.1-en`

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_13.png">

插入 M5Core 设备，在终端执行 `sudo chmod +x *.sh`，对所有的 shell 脚本文件赋予可执行权限，然后再执行 `sudo ./flash.sh` 烧录固件。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_12.png">

## 视频教程

**[Windows](https://v.youku.com/v_show/id_XNDAxOTEyNTQ2NA==.html?spm=a2hzp.8253869.0.0)**

<iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNjc5NjM1Mg==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
