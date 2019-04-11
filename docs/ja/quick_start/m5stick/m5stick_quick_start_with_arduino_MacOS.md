# M5Stick クイックスタート - Arduino Mac {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stick/stick_01.png"><img src="assets/img/getting_started_pics/m5stick/stick_06.png"><img src="assets/img/macos-logo.png">

## 目次

[1. Arduino IDEのインストール](#_1-arduino-ideのインストール)  
[2. USBシリアル変換ドライバのインストール](#_2-USBシリアル変換ドライバのインストール)  
[3. ESP32ボードライブラリのインストール](#_3-esp32ボードライブラリのインストール)  
[4. M5Stackライブラリのインストール](#_4-m5stackライブラリのインストール)  
[5. U8g2ライブラリのインストール](#＿５-u8g2ライブラリのインストール)  
[6. 例題](#_6-例題)  

## 1. Arduino IDEのインストール

ブラウザからArduinoの公式サイトにアクセスします。 https://www.arduino.cc/en/Main/Software

#### (1) `Mac OS X`向けの`Arduino IDE`を選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">

#### (2) `JUST DOWNLOAD`をクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_02.png">

#### (3) Arduino IDEをダウンロードしたら、ファイルをダブルクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide_03.png">

## 2. USBシリアル変換ドライバのインストール

ブラウザからM5Stackの公式サイトにアクセスします。 https://m5stack.com/download

#### (1) `Mac`をクリックし、ファイルをダウンロードしたら、解凍(unzip)します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/download_usb_driver_mac_01.png">

#### (2) 解凍後、`SiLabsUSBDriverDisk.dmg`ディスクイメージをダブルクリックし、インストールします。

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

#### (3) `/dev/tty.SLAB_USBtoUART`シリアルポートを確認します。

確認出来たらドライバインストール成功です:

`Terminal`を開き、 `M5Core`とPCをUSB Type-C ケーブルで接続します。そして次のコマンドを実行します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_02.png">

M5CoreをPCから外し、再度同じコマンドを実行すると、消えるものがあるので、それが対応するポートになります。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_03.png">

この例ではシリアルポートは`tty.SLAB_USBtoUART`です。

## 3. EESP32ボードライブラリのインストール

#### (1) Arduino IDEのメニューから`ファイル`->`Peferences...`->`設定`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_02.png">

#### (2) 下記のESP32ボードマネージャURLをコピーして`Additional Boards Manager URLs:`に貼り付けます。

*ESP32ボードマネージャURL: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_03.png">

#### (3) 次にメニューから`ツール`->`ボード:`->`ボードマネージャ...`を選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_04.png">

#### (4) 検索ボックスで`ESP32`と検索し、出てきたライブラリを`Install`します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_05.png">

## 4. M5Stackライブラリのインストール

#### (1) Arduino IDEのメニューで`スケッチ`->`ライブラリをインクルード`->`ライブラリを管理...`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">

#### (2) 検索ボックスで`M5Stack`と検索し、出てきたライブラリを`Install`します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">

## 5. U8g2ライブラリのインストール

#### (1) Arduino IDEのメニューで`スケッチ`->`ライブラリをインクルード`->`ライブラリを管理...`と選択します。 検索ボックスで`U8g2`と検索し、出てきたライブラリを`Install`します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">

## 6. 例題

USBケーブルで<mark>[M5Stick built in MPU9250](https://ae01.alicdn.com/kf/HTB1pICNXznuK1RkSmFPq6AuzFXa1.jpg)</mark>をPCに接続します。そして、M5Stickを接続したシリアルポートを選択します。

デモを選択し、実行します。

#### (1) ボードとシリアルポート選択

Arduino IDEのメニューで`ツール` -> `ボード` -> `M5Stack-Core-ESP32` と選択します。  
次に`Tools` -> `Ports ->`でM5Stickを接続したシリアルポートを選択します。  

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/quick_start_arduino_mac_10.png">

#### (2) サンプルコード選択

Arduino IDEのメニューで `ファイル` -> `スケッチ例` -> `M5Stack` -> `Stick`と選択します。

そして`Basics`->`FactoryTest`を開いてください。

<img src="assets/img/getting_started_pics/m5stick/m5stick_quick_start_arduino_mac_01.png">

コンパイルしてM5StickにアップロードするとM5Stickの画面に"Hello World! Exist"と表示されます。

**M5Stickの左側面にあるボタンが、電源ボタンです。クリックで電源オン、再度クリックするとリセット、ダブルクリックするとディープスリープ（電源オフ）です。**

## ノート

ほとんどのバージョンのmacOSではシリアルポートを検出するために、以下の手順を踏む必要があります。システム環境設定を開き、`セキュリティとプライバシー`の中でCP2104ドライバを`許可する`を選択してください。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">

?> **CP2104 USBドライバを許可する方法について詳しく知りたい場合は、こちらをご覧ください。** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html
