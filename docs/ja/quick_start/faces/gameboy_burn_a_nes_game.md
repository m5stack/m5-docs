# NESゲーム クイックスタート (Windows向け)



*このページでは、NESゲームを遊ぶために必要なソフトウェアの書き込み方法を紹介します。*

## コンテンツ

1. [ファームウェアのダウンロード](#1-ファームウェアのダウンロード)

2. [ゲームファイルの書き込み](#2-ゲームファイルの書き込み)

3. [デバイスのリセット](#3-デバイスのリセット)

## 1. Dァームウェアのダウンロード

ゲームボーイエミュレータのファイル `firmware.zip` を [Github](https://github.com/m5stack/M5Stack-nesemu) からダウンロードして解凍します。

<figure>
    <img src="assets/img/getting_started_pics/faces/download_from_github.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/faces/unpack_firmware.png">
</figure>

## 2. ゲームファイルの書き込み

[ここ](https://www.espressif.com/en/support/download/other-tools)からフラッシュ書き込みツール（Flash Download Tools (ESP8266 & ESP32) v3.6.5）をダウンロード、実行し、`ESP32 DownloadTool` を選択、書き込む4つのファイルを指定します。そして、図の（Step2 シリアルポート選択）、（Step3 Erase消去）、（Step4 書き込み）を実行します。

<figure>
    <img src="assets/img/getting_started_pics/faces/chose_files.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/faces/download_it.png">
</figure>

## 3. デバイスのリセット

FACESをリセットして再起動したら、赤い帽子のヒゲおじさんがきのこを食べたり、土管に入ったりするゲームをプレイできます。

<figure>
    <img src="assets/img/product_pics/core/faces_kit/gameboy_01.jpg">
</figure>

?> Tip **もし他のゲームで遊びたい場合は、`ゲームファイル`(.nes)を書き換えてください。**
