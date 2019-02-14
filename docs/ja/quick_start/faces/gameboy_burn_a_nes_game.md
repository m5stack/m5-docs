# NESゲーム クイックスタート (Windows向け) {docsify-ignore-all}



*このページでは、NESゲームを遊ぶために必要なソフトウェアの書き込み方法を紹介します。*

## コンテンツ

1. [ファームウェアのダウンロード](#ファームウェアのダウンロード)

2. [ゲームファイルの書き込み](#ゲームファイルの書き込み)

3. [デバイスのリセット](#デバイスのリセット)

## Dァームウェアのダウンロード

ゲームボーイエミュレータのファイル `firmware.zip` を [Github](https://github.com/m5stack/M5Stack-nesemu) からダウンロードして解凍します。

<figure>
"assets/img/getting_started_pics/faces/download_from_github.png">


<img src="assets/img/getting_started_pics/faces/unpack_firmware.png">


## ゲームファイルの書き込み

[ここ](https://www.espressif.com/en/support/download/other-tools)からフラッシュ書き込みツール（Flash Download Tools (ESP8266 & ESP32) v3.6.5）をダウンロード、実行し、`ESP32 DownloadTool` を選択、書き込む4つのファイルを指定します。そして、図の（Step2 シリアルポート選択）、（Step3 Erase消去）、（Step4 書き込み）を実行します。

<img src="assets/img/getting_started_pics/faces/chose_files.png">


<img src="assets/img/getting_started_pics/faces/download_it.png">


## デバイスのリセット

FACESをリセットして再起動したら、赤い帽子のヒゲおじさんがきのこを食べたり、土管に入ったりするゲームをプレイできます。

<img src="assets/img/product_pics/core/faces_kit/gameboy_01.png">


?> Tip **もし他のゲームで遊びたい場合は、`ゲームファイル`(.nes)を書き換えてください。**
