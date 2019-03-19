# 烧录GameBoy游戏 {docsify-ignore-all}

*这篇文档将引导你如何烧录游戏模拟器，并烧录想用的经典游戏，这样你就可以使用FACES Kit来玩GameBoy游戏。*

## 目录

1. [下载固件](#下载固件)

2. [烧录固件和游戏文件](#烧录固件和游戏文件)

3. [重启FACES](#重启FACES)

## 下载固件

下载Gameboy模拟器，固件名为`firmware.zip`，下载地址：[Github](https://github.com/m5stack/M5Stack-nesemu)， 然后解压`firmware.zip`(*包括启动文件bootloader.bin,分区表文件, 模拟器文件, 游戏文件SuperMario*)。


<img src="assets/img/getting_started_pics/faces/download_from_github.png">


<img src="assets/img/getting_started_pics/faces/unpack_firmware.png">


## 烧录固件和游戏文件

打开乐鑫提供的烧录工具[Flash Download Tools](https://www.espressif.com/sites/default/files/tools/flash_download_tools_v3.6.4.rar)，选择 `ESP32 DownloadTool` 选项，选择`firmware.zip`解压后的四个文件，并执行如下图的**步骤2-4**( *选择正确的串口号，擦除flash和烧录固件* )

<img src="assets/img/getting_started_pics/faces/chose_files.png">


<img src="assets/img/getting_started_pics/faces/download_it.png">


## 重启FACES

重启FACES之后，这时候就可以玩游戏啦。

<img src="assets/img/product_pics/core/faces_kit/gameboy_01.png">


?> Tip *如果你想换另一个游戏，只需替换**游戏文件**，再用以上工具烧录即可。注意是要使用NES格式的游戏文件。**
