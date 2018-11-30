# 如何通过M5Burner烧录固件

中文 | [English](/en/related_documents/how_to_burn_firmware) | [日本語](ja/related_documents/how_to_burn_firmware)

**这个文档会介绍如何下载M5Burner，并通过M5Burner烧录固件.**

## For MacOS

***(在编辑中...)***

## For Windows

### 1. 下载最新的M5Burner

访问[官网](http://www.m5stack.com)来下载M5Burner.

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

### 2. 烧录固件

解压刚刚下载的M5Burner压缩包, 然后双击`M5Burner.exe`.

**选择板子正与PC相连的`串口号`和`921600 波特率`, 选择合适的固件文件, 点击`Erase`, 然后等擦除固件完成，点击`Burn`**

?> **Tip** **a.** 如果你想通过[M5Flow](http://flow.m5stack.com)(/[M5Cloud](http://cloud.m5stack.com))来编程的话，请选择最新的`M5Flow-vx.x`(/`M5Cloud-vx.x.x`) **b.** 如果你想有ESP32CAM (或 M5CAMERA)，并且想编程它的话，请选择最新版的`M5Cam-vx.x (/M5Cam-psram)`

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_flow_firmware.gif">
</figure>

!> **注意** 如何M5Burner的串口号选项框没有显示任何的`COMx`号或者只显示`COM1`, 这时候你需要参考这篇文档[建立串口通信](related_documents/establish_serial_connection)来重新安装USB驱动.

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_01.png" alt="Screenshot of coverpage" title="Cover page">
</figure>


*如果M5Burner打印出这样的信息的话`Hard resetting via RTS pin...`，这就表明你擦除固件成功了.*

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_04.png" alt="Screenshot of coverpage" title="Cover page">
</figure>


*如果M5Burner打印出这样的信息的话`Leaving... Staying in bootloader.`，这就表明你烧录固件成功了.*

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_05.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

### 3. 然后重启板子

?> **提示**
如果M5Burner在点击`Burn`之后，显示`busy...`, 也就是卡顿的话，不要慌张，稍微等几分钟，软件自然就会烧录成功。

?> **提示** 如果M5Burner在擦除或者烧录过程中被中断了(如突然关闭软件), 为了保证板子能正常工作，你最好重新擦除和烧录一遍固件.