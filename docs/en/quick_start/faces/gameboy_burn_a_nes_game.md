# Burn A NES Game {docsify-ignore-all}

This document will help you for burning a gameboy game(NES file) so that you can play a game with GameBoy Keyboard.

## Download firmware

Gameboy simulator, firmware, download address： [Github](https://github.com/m5stack/M5Stack-nesemu).

<img src="assets/img/getting_started_pics/faces/faces_quick_start_05.webp">

## Burn Game file

### Windows OS

[Click here to download ESPTool](https://www.espressif.com/sites/default/files/tools/flash_download_tools_v3.6.8_0.zip), after starting the tool, select the `ESP32 DownloadTool` option and import The two files bin file in the `firmware` folder, and set their corresponding burning address (firmware.bin: 0x1000, BladeBuster.nes), refer to the following figure to configure the port and baud rate of the device connection, click" Start "to start burning.

<img src="assets\img\getting_started_pics\faces\esptool_burn_game.webp">

### Mac OS

#### (1) install esptool

Open `terminal`, execute this command `pip install esptool`

<img src="assets/img/getting_started_pics/faces/faces_quick_start_08.webp">

#### (2) burn the game firmware

Open `terminal`, go to the path where `firmware.zip` is located

Execute the following commands in the `terminal`

```sh
unzip firmware.zip
cd firmware
esptool.py erase_flash
sh flash.sh
```

<img src="assets/img/getting_started_pics/faces/faces_quick_start_07.webp">

## Reset you device

After reset FACES, enjoy your game now.

<img src="assets/img/product_pics/core/faces_kit/gameboy_01.webp">


?> Tip **If you want another game, please change the `Game file`(.nes)**
