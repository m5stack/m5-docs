# M5Stick クイックスタート(macOS, Arudino) {docsify-ignore-all}

?> *環境設定の前に、シリアルドライバがインストールされているか確認いてください。もしまだの場合は[シリアル接続の確立方法](ja/related_documents/establish_serial_connection)を参照してください。*

## テキストチュートリアル

1. [環境設定](#環境設定)

    - Step1. [Arduino IDEインストール](#step1-arduino-ideインストール)

    - Step2. [ESP32ボードサポート](#step2-esp32ボードサポート)

    - Step3. [M5Stack ライブラリインストール](#step3-m5stack-libインストール)

    - Step4. [U8g2 ライブラリインストール](#step4-u8g2-libインストール)

2. [例題](#例題)

## 環境設定

### Step1. `Arduino IDE`インストール

最初にArduino IDEをインストールします。ダウンロードアドレスは https://www.arduino.cc/en/Main/Software です。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

### Step2. ESP32ボードサポート

Arduino IDEを起動し、メニューから、`Arduino`->`Peferences`->`Settings`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

最新のESP32ボードマネージャにURLを追加してください。`Additional Boards Manager URLs: `

*最新のボードマネージャURLはこちら：https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

確認後、`Tools`->`Board:`->`Boards Manager...`を選び、新しいポップアップダイアログで、`ESP32`と入力して検索します。そして`Install`をクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

### Step3. M5Stack Libインストール

Arduino IDEを起動し、メニューから`スケッチ`->`ライブラリをインクルード`->`ライブラリを管理...`を選択します。

検索ボックスに`m5stack`と入力して検索し、M5Stackのライブラリをインストールします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_06.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_07.png">

### Step4. U8g2 Libインストール

まずArduino IDEを開き、`Sketch`->`Include Library`->`Manage Libraries...`の順に選択します。検索窓で`U8g2`を検索し、インストールします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">

## 例題

USBケーブルをM5Stickに接続し、ボードとシリアルポートを選択します。そしてサンプルプログラムをコンパイルし、アップロードしてみましょう。

### 1. ボードとシリアルポートを選択

Arduino IDEを起動し、メニューから`ツール -> ボード -> M5Stack-Core-ESP32`とボードを選択します。

次に、メニューから`ツール -> シリアルポート -> /dev/cu.SLAB_USBtoUART` とシリアルポートを選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

### 2. サンプルスケッチ

サンプルスケッチを利用して、定番のHelloWorldを表示してみましょう。メニューから`ファイル -> スケッチ例 -> M5Stack -> Stick -> FactoryTest`と選択します。

<img src="assets/img/getting_started_pics/m5stick/m5stick_arduino_windows_01.png">

**コンパイルしてアップロード実行すると、M5Stickの画面に `Hello World! Exist` と表示されます。**

## ノート

もしシリアルポートが見つからない場合は、Macの`システム環境設定 -> セキュリティとプライバシー`を開いてブロックされているアプリを許可してください。それでもダメな場合は、再度シリアルドライバをインストールしてください。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **Tip** **もしmacOSのパーミッションについてもっと詳しい情報が知りたい方は、次のリンクを参照してください。** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html

## ビデオチュートリアル

<iframe width="560" height="315" src="https://www.youtube.com/embed/U2es-l4z2Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>