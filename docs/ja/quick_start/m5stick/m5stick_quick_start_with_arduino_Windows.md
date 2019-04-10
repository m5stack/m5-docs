# M5Stick クイックスタート - Arudino Win {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stick/stick_01.png"><img src="assets/img/getting_started_pics/m5stick/stick_06.png"><img src="assets/img/windows-logo.png">

## コンテンツ

[1. Arduino IDEのインストール](#_1-arduino-ideのインストール)  
[2. シリアル変換ドライバのインストール](#_2-シリアル変換ドライバのインストール)  
[3. ESP32ボードマネージャのインストール](#_3-ESP32ボードマネージャのインストール)  
[4. M5Stackライブラリのインストール](#_4-M5Stackライブラリのインストール)  
[5. U8g2ライブラリのインストール](#_5-U8g2ライブラリのインストール)  
[6. 例題](#_6-例題)  

## 1. Arduino IDEのインストール

ブラウザから Arduino公式サイト https://www.arduino.cc/en/Main/Software　にアクセスします。

#### (1) `Windows ZIP file for non admin install`を選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package.png">

#### (2) `JUST DOWNLOAD`を選択し、ダウンロードします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package_02.png">

#### (3) ダウンロードしたファイルをダブルクリックし、設定はデフォルトのまま、インストールします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_arduino_install_path.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_arduino_2.png">

## 2. シリアル変換ドライバのインストール

ブラウザから M5Stack公式サイト https://m5stack.com/download にアクセスします。

#### (1) `Windows`をクリックし、Windows 版のドライバをダウンロードします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_usb_driver_win_01.png">

#### (2) 使用しているwindowsのビット数に合わせたドライバを選択し、インストールします。

* 32 ビット Windows をお使いの方は `CP210xVCPInstaller_x86_vx.x.x.x.exe`

* 64 ビット Windows をお使いの方は `CP210xVCPInstaller_x64_vx.x.x.x.exe`

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">

#### (3) ファイルをダブルクリックし、インストールします。

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">

#### (4) COMxポートを確認します。

インストールが終わったら：

M5Core を USB Type-C ケーブルでPCに接続し、Windowsのデバイスマネージャを開きます。USBケーブルを抜いたり挿したりすると`ポート (COM と LPT)` 内の表示が切り替わるものが対象のCOMxポートです。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_01_cn.png">

USBケーブルを抜くと、COM ポートが消えます。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_02_cn.png">

## 3. ESP32ボードマネージャのインストール

#### (1) Arduino IDEを開き、`ファイル`->`Preferences...`->`設定`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01_cn.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02_cn.png">

#### (2) 下のアドレスをコピーし、ESP32ボードマネージャに追加します。 `追加のボードマネージャのURL:`

*ESP32ボードマネージャ：https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03_cn.png">

#### (3) `ツール`->`ボード:`->`ボードマネージャ...`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04_cn.png">

#### (4) 検索ボックスで `ESP32` と検索し、`インストール`します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05_cn.png">

## 4. M5Stackライブラリのインストール

#### (1) Arduino IDEを開き、 `スケッチ`->`ライブラリをインクルード`->`ライブラリを管理...`を選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01_cn.png">

#### (2) 検索ボックスで `M5Stack` と検索し、`インストール`します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02_cn.png">

## 5. `U8g2`ライブラリのインストール

#### Arduino IDEを開き、 `スケッチ`->`ライブラリをインクルード`->`ライブラリを管理...`を選択し、検索ボックスで`U8g2`を検索します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/install_u8g2.png">

## 6. 例題

Arduino IDEを介して、M5Stickがプログラムできるが確認します。

<mark>[M5Stick with MPU9250](https://img.alicdn.com/imgextra/i4/136588748/O1CN012EUdFpJIthEANlx_!!136588748.jpg)</mark>とPCをUSBケーブルで接続し、Arduino IDEを開きます。M5Stick接続のシリアルポート番号を選択してください。間違った番号を選択しないように注意してください。

例題を選び、実行してみましょう。

### (1) `FactoryTest.ino`を書き込んでみましょう。

M5Stack-Core-ESP32, 921600, COMx (M5Stickの接続されているポート)

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">

#### (2) `FactoryTest.ino`を選択します。

`M5Stack` -> `Stick` -> `FactoryTest`

<img src="assets/img/getting_started_pics/m5stick/m5stick_arduino_windows_01.png">

#### (3) クリックしてアップロードします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">

**結果: Aボタンを押した後、ディスプレイに "Hello World! Exist"が表示されます。**

**電源ボタンはシングルクリックで起動、ダブルクリックで停止です。**
