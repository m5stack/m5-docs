# NESゲーム クイックスタート (Windows向け) {docsify-ignore-all}

*このページでは、FACESとGameboy keyを利用して、NESゲームを遊ぶために必要なソフトウェアの書き込み方法を紹介します。*

## コンテンツ

1. [ファームウェアのダウンロード](#ファームウェアのダウンロード)

2. [ゲームファイルの書き込み](#ゲームファイルの書き込み)

3. [デバイスのリセット](#デバイスのリセット)

## ファームウェアのダウンロード

ゲームボーイエミュレータのファイル `firmware.zip` を [Github](https://github.com/m5stack/M5Stack-nesemu) からダウンロードして解凍します。

<img src="assets/img/getting_started_pics/faces/faces_quick_start_05.png">

### Windows

<img src="assets/img/getting_started_pics/faces/unpack_firmware.png">

### Mac

<img src="assets/img/getting_started_pics/faces/faces_quick_start_06.png">

## ゲームファイルの書き込み

### Windows

[ここ](https://www.espressif.com/en/support/download/other-tools)から最新のフラッシュ書き込みツール（Flash Download Tools (ESP8266 & ESP32) v3.6.5）をダウンロード、実行し、`ESP32 DownloadTool` を選択、書き込む4つのファイルを指定します。そして、図の（Step2 シリアルポート選択）、（Step3 Erase消去）、（Step4 書き込み）を実行します。

<img src="assets/img/getting_started_pics/faces/chose_files.png">

<img src="assets/img/getting_started_pics/faces/download_it.png">

### Mac

### (1) esptoolをインストール

`ターミナル`を開いて、`pip install esptool`のコマンドを実行します。

<img src="assets/img/getting_started_pics/faces/faces_quick_start_08.png">

#### (2) ファームウェアの書き込み

`ターミナル`を開いて、`firmware.zip`のある場所に移動し、以下のコマンドを実行します。

```sh
unzip firmware.zip
cd firmware
esptool.py erase_flash
sh flash.sh
```

## デバイスのリセット

FACESをリセットして再起動したら、赤い帽子のヒゲおじさんがきのこを食べたり、土管に入ったりするゲームをプレイできます。

<img src="assets/img/product_pics/core/faces_kit/gameboy_01.png">

?> Tip **もし他のゲームで遊びたい場合は、`ゲームファイル`(.nes)を書き換えてください。**
