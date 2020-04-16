# 烧录 NES 游戏 {docsify-ignore-all}

这篇文档将引导您如何烧录游戏模拟器，并烧录想用的经典游戏，这样您就可以使用 FACES Kit 来玩 GameBoy 游戏。

## 下载固件

Gameboy 模拟器,固件，下载地址：[Github](https://github.com/m5stack/M5Stack-nesemu).

<img src="assets/img/getting_started_pics/faces/faces_quick_start_05.webp">

## 烧录固件和游戏文件

### Windows OS

[点击此处下载ESPTool烧录工具](https://www.espressif.com/sites/default/files/tools/flash_download_tools_v3.6.8_0.zip)，在启动工具后，选择 `ESP32 DownloadTool` 选项，导入`firmware`文件夹中的解的2个文件bin文件，并设置其对应的烧录地址(firmware.bin:0x1000 , BladeBuster.nes:0x100000), 参考下图配置设备连接的端口与波特率，点击"Start"开始烧录。

<img src="assets\img\getting_started_pics\faces\esptool_burn_game.webp">

### Mac OS

#### (1) 安装 esptool

打开终端，执行 `pip install esptool`

<img src="assets/img/getting_started_pics/faces/faces_quick_start_08.webp">

#### (2) 烧录固件

在终端，进入 `firmware.zip` 所在的路径下，执行以下命令

```sh
unzip firmware.zip
cd firmware
esptool.py erase_flash
sh flash.sh
```

<img src="assets/img/getting_started_pics/faces/faces_quick_start_07.webp">

## 重启 FACES

重启 FACES 之后，这时候就可以玩游戏啦。

<img src="assets/img/product_pics/core/faces_kit/gameboy_01.webp">


?> *如果您想换另一个游戏，只需替换**游戏文件**，再用以上工具烧录即可。注意是要使用 NES 格式的游戏文件。**
