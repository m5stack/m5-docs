# Burn A NES Game {docsify-ignore-all}

*This document will help you for burning a gameboy game(NES file) so that you can play a game with GameBoy Keyboard.*

## CONTENT

1. [Download firmware](#download-firmware)

2. [Burn Game file](#burn-Game-file)

3. [Reset you device](#reset-you-device)

## Download firmware

Download the gameboy simulator firmware named `firmware.zip` from [Github](https://github.com/m5stack/M5Stack-nesemu). And unzip `firmware.zip`.

<img src="assets/img/getting_started_pics/faces/faces_quick_start_05.png">

### Windows OS

<img src="assets/img/getting_started_pics/faces/unpack_firmware.png">

### Mac OS

<img src="assets/img/getting_started_pics/faces/faces_quick_start_06.png">

## Burn Game file

### Windows OS

Open Flash Download Tools[点击下载](https://www.espressif.com/sites/default/files/tools/flash_download_tools_v3.6.4.rar) apply by Espressif, choose `ESP32 DownloadTool` option, choose 4 files, and execute those operations as the following pictures shown. ( *choose firmware file, your serial port, erase and program flash* )

<img src="assets/img/getting_started_pics/faces/chose_files.png">

<img src="assets/img/getting_started_pics/faces/download_it.png">

### Mac OS

#### (1) install esptool

Open `terminal`, execute this command `pip install esptool`

<img src="assets/img/getting_started_pics/faces/faces_quick_start_08.png">

#### (2) burn the game firmware

Open `terminal`, go to the path where `firmware.zip` is located

Execute the following commands in the `terminal`

```sh
unzip firmware.zip
cd firmware
esptool.py erase_flash
sh flash.sh
```

<img src="assets/img/getting_started_pics/faces/faces_quick_start_07.png">

## Reset you device

After reset FACES, enjoy your game now.

<img src="assets/img/product_pics/core/faces_kit/gameboy_01.png">


?> Tip **If you want another game, please change the `Game file`(.nes)**
