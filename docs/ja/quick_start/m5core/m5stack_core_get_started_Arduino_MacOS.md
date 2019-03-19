# M5Core クイックスタート(macOS, Arudino) {docsify-ignore-all}

:memo: **[テキストチュートリアル](#テキストチュートリアル)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper: **[ビデオチュートリアル](#ビデオチュートリアル)**

?> *環境設定の前に、シリアルドライバがインストールされているか確認いてください。もしまだの場合は[シリアル接続の確立方法](ja/related_documents/establish_serial_connection)を参照してください。*

## テキストチュートリアル

1. [Arduino IDE インストール](#_1-arduino-ide-インストール)
2. [USBシリアル変換ドライバ インストール](#_2-USBシリアル変換ドライバ-インストール)
3. [ESP32ボード インストール](#_3-esp32ボード-インストール)
4. [M5Stackライブラリ インストール](#_4-m5stackライブラリ-インストール)
5. [例題](#_5-例題)

## 1. Arduino IDE インストール

ブラウザからアドレス https://www.arduino.cc/en/Main/Software にアクセスします。

#### (1) `Mac OS X` のパッケージをクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

#### (2) 次のページで`JUST DOWNLOAD`をクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_02.png">

#### (3) ダウンロードしたArduino IDEをアプリケーションフォルダにドラッグし、アプリケーション一覧からArduino IDEを開きます。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_03.png">

## 2. USBシリアル変換ドライバ インストール

ブラウザからアドレス https://m5stack.com/download にアクセスします。

#### (1) `CP210X Driver`から`Mac`を選択し、ドライバをダウンロードし、解凍します。 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/download_usb_driver_mac_01.png">

#### (2) 解凍後、`SiLabsUSBDriverDisk.dmg` をダブルクリックしてドライバをインストールします。

<img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_dmg.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_pkg.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/2.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/3.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/4.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/5.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/6.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/7.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/8.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/9.png">

#### (３) シリアルポート `/dev/tty.SLAB_USBtoUART` を調べます。

ドライバが正しくインストールされたら`Terminal`を開きます。  
`M5Core`と`PC`を`USB Type-C ケーブル`で接続し、次の図のコマンド `ls /dev/tty*` を実行します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_02.png">

M5とPCの接続を解除し、再度同じコマンドを実行します。そしてもしリストから表示が消えたら、それが該当するシリアルポートになります。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_03.png">

この図では `/dev/tty.SLAB_USBtoUART` がシリアルポートの名前です。

## 3. ESP32ボード インストール

#### (1) Arduino IDEのメニューから、`Arduino`->`Peferences...`->`設定`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

#### (2) 最新のESP32ボードマネージャにURLを追加してください。`追加のボードマネージャのURL:`

*最新のボードマネージャURLはこちら：https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

#### (3) `ツール`->`ボード:`->`ボードマネージャ...`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

#### (4) 検索ボックスに`ESP32`と入力し検索し、esp32ライブラリの`インストール`をクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

## 4. M5Stackライブラリ インストール

#### (1) Arduino IDEのメニューから`スケッチ`->`ライブラリをインクルード`->`ライブラリを管理...`を選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_06.png">

#### (2) 検索ボックスに`m5stack`と入力して検索し、M5Stackライブラリの`インストール`をクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_07.png">

## 5. 例題

USBケーブルでM5StackをPCに接続し、ボードとシリアルポートを選択します。  
次にサンプルプログラムをコンパイルし、アップロードしてみましょう。

#### (1) ボードとシリアルポートを選択

Arduino IDEのメニューから`ツール` -> `ボード` -> `M5Stack-Core-ESP32`と選択します。  
次に、メニューから`ツール` -> `シリアルポート` -> `/dev/cu.SLAB_USBtoUART`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

#### (2) サンプルスケッチ

サンプルスケッチを利用して、定番のHelloWorldを表示してみましょう。  
メニューから`ファイル` -> `スケッチ例` -> `M5Stack` -> `Basics` -> `HelloWorld`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_09.png">

コンパイルしてアップロード実行すると、M5Stackの画面に `Hello World!` と表示されます。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/display_hello_world.png">

## ノート

もしシリアルポートが見つからない場合は、Macの`システム環境設定` -> `セキュリティとプライバシー`を開いてブロックされているアプリを許可してください。それでもダメな場合は、再度シリアルドライバをインストールしてください。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **Tip** **もしmacOSのパーミッションについてもっと詳しい情報が知りたい方は、次のリンクを参照してください。** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html

## ビデオチュートリアル

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/M5Stack%20Arduino%20IDE%20Setup%20in%205%20minutes.mp4" type="video/mp4">
</video>
