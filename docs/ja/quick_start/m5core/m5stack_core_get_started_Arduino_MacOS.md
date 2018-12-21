# M5Core クイックスタート(macOS, Arudino)



?> **Tip** もしWindowsを使っているなら[こちらへ](/ja/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)

## コンテンツ

1. [環境設定](#環境設定)

    - Step1. [Arduino IDEインストール](#step1-arduino-ideインストール)

    - Step2. [ESP32ボードサポート](#step2-esp32ボードサポート)

    - Step3. [M5Stack Libインストール](#step3-m5stack-libインストール)

2. [例題](#例題)

?> **Note** *環境設定の前に、シリアルドライバがインストールされているか確認いてください。もしまだの場合は[シリアル接続の確立方法](/en/related_documents/establish_serial_connection)を参照してください。*

## 環境設定

### Step1. `Arduino IDE`インストール

最初にArduino IDEをインストールします。ダウンロードアドレスは https://www.arduino.cc/en/Main/Software です。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">
</figure>

### Step2. ESP32ボードサポート

ターミナルを開いて次のコマンドを実行します。（全文コピーして、ターミナルに貼り付けてッターン！）

```shell
mkdir -p ~/Documents/Arduino/hardware/espressif && \
cd ~/Documents/Arduino/hardware/espressif && \
git clone https://github.com/espressif/arduino-esp32.git esp32 && \
cd esp32 && \
git submodule update --init --recursive && \
cd tools && \
python get.py
```

デフォルトでスケッチが保存される場所は ~/Documents/Arduino です。もしArduino IDEの設定でスケッチブックの位置を変更している場合や、何か問題が発生したときは必要に応じて上記のコマンドを調整してください。

?> **Tip** もし下記のエラーが発生したら: `xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools),`
`missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun`, ターミナルで`xcode-select --install`を実行し、Arduino IDEを再起動してみてください。

?> **Tip** もし下記のエラーが発生したら: `IOError: [Errno socket error] [SSL: TLSV1_ALERT_PROTOCOL_VERSION] tlsv1 alert protocol` `version (_ssl.c:590) when running python get.py`, 上記のコマンドの`python get.py`の行を`python3 get.py`に置き換えて実行し、Arduino IDEを再起動します。

### Step3. M5Stack Libインストール

Arduino IDEを起動し、メニューから`スケッチ`->`ライブラリをインクルード`->`ライブラリを管理...`を選択します。

検索ボックスに`m5stack`と入力して検索し、M5Stackのライブラリをインストールします。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_install_m5stack_lib.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_search_m5stack.png">
</figure>

## 例題

USBケーブルをM5Stackに接続し、ボードとシリアルポートを選択します。そしてサンプルプログラムをコンパイルし、アップロードしてみましょう。

### 1. ボードとシリアルポートを選択

Arduino IDEを起動し、メニューから`ツール -> ボード -> M5Stack-Core-ESP32`とボードを選択します。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_select_board.png">
</figure>

次に、メニューから`ツール -> シリアルポート -> /dev/cu.SLAB_USBtoUART` とシリアルポートを選択します。
<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_select_serial_port.png">
</figure>

### 2. サンプルスケッチ

サンプルスケッチを利用して、定番のHelloWorldを表示してみましょう。メニューから`ファイル -> スケッチ例 -> M5Stack -> Basics -> HelloWorld`と選択します。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_select_example.png">
</figure>

コンパイルしてアップロード実行すると、M5Stackの画面に `Hello World!` と表示されます。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/display_hello_world.png">
</figure>

## ノート

もしシリアルポートが見つからない場合は、Macの`システム環境設定 -> セキュリティとプライバシー`を開いてブロックされているアプリを許可してください。それでもダメな場合は、再度シリアルドライバをインストールしてください。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">
</figure>

?> **Tip** **もしmacOSのパーミッションについてもっと詳しい情報が知りたい方は、次のリンクを参照してください。** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html