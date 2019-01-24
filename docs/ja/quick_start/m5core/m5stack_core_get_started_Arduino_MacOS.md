# M5Core クイックスタート(macOS, Arudino)

?> *環境設定の前に、シリアルドライバがインストールされているか確認いてください。もしまだの場合は[シリアル接続の確立方法](ja/related_documents/establish_serial_connection)を参照してください。*

## コンテンツ

1. [環境設定](#環境設定)

    - Step1. [Arduino IDEインストール](#step1-arduino-ideインストール)

    - Step2. [ESP32ボードサポート](#step2-esp32ボードサポート)

    - Step3. [M5Stack Libインストール](#step3-m5stack-libインストール)

2. [例題](#例題)

## 環境設定

### Step1. `Arduino IDE`インストール

最初にArduino IDEをインストールします。ダウンロードアドレスは https://www.arduino.cc/en/Main/Software です。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

### Step2. ESP32ボードサポート

Arduino IDEを起動し、メニューか`Arduino`->`Peferences`->`Settings`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

このオプションに最新のESP32ボード管理URLを追加してください`Additional Boards Manager URLs: `

*最新の掲示板管理URLはこちら："[https://github.com/espressif/arduino-esp32/releases/download/1.0.1/package_esp32_dev_index.json](https://github-production-release-asset-2e65be.s3.amazonaws.com/70127218/2a679600-1541-11e9-8369-babc0ad845a6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20190124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190124T015328Z&X-Amz-Expires=300&X-Amz-Signature=5bfab2d4154aa1bc9fc22b70bb726621914be2f40b87f4d8bb918bf8488daa7a&X-Amz-SignedHeaders=host&actor_id=9019236&response-content-disposition=attachment%3B%20filename%3Dpackage_esp32_dev_index.json&response-content-type=application%2Foctet-stream)"*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

確認後，選ぶ`Tools`->`Board:`->`Boards Manager...`，新しいポップアップダイアログで、入力して検索します`ESP32`，クリック`Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

### Step3. M5Stack Libインストール

Arduino IDEを起動し、メニューから`スケッチ`->`ライブラリをインクルード`->`ライブラリを管理...`を選択します。

検索ボックスに`m5stack`と入力して検索し、M5Stackのライブラリをインストールします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_06.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_07.png">

## 例題

USBケーブルをM5Stackに接続し、ボードとシリアルポートを選択します。そしてサンプルプログラムをコンパイルし、アップロードしてみましょう。

### 1. ボードとシリアルポートを選択

Arduino IDEを起動し、メニューから`ツール -> ボード -> M5Stack-Core-ESP32`とボードを選択します。

次に、メニューから`ツール -> シリアルポート -> /dev/cu.SLAB_USBtoUART` とシリアルポートを選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

### 2. サンプルスケッチ

サンプルスケッチを利用して、定番のHelloWorldを表示してみましょう。メニューから`ファイル -> スケッチ例 -> M5Stack -> Basics -> HelloWorld`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_09.png">

コンパイルしてアップロード実行すると、M5Stackの画面に `Hello World!` と表示されます。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/display_hello_world.png">

## ノート

もしシリアルポートが見つからない場合は、Macの`システム環境設定 -> セキュリティとプライバシー`を開いてブロックされているアプリを許可してください。それでもダメな場合は、再度シリアルドライバをインストールしてください。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **Tip** **もしmacOSのパーミッションについてもっと詳しい情報が知りたい方は、次のリンクを参照してください。** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html