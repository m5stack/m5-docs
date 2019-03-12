# M5Core クイックスタート(Windows, Arudino) {docsify-ignore-all}

## 目次

1. [Arduino IDEのインストール](#_1-Arduino-IDEのインストール)
2. [USB/UARTシリアル変換ドライバのインストール](#_2-USBUARTシリアル変換ドライバのインストール)
3. [ESP32ボードマネージャのインストール](#_3-ESP32ボードマネージャのインストール)
4. [M5Stackライブラリのインストール](#_4-M5Stackライブラリのインストール)
5. [サンプルスケッチ実行](#_5-サンプルスケッチ実行)

### 1. Arduino IDEのインストール

ブラウザを開き、Arduinoの公式サイトにアクセスします。  https://www.arduino.cc/en/Main/Software

#### (1) `Windows ZIP file for non admin install`をクリックし、`Arduino IDE`をダウンロードします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package.png">

#### (2) `JUST DOWNLOAD`をクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package_02.png">

#### (3) `Arduino IDE`をインストールするために、実行ファイルをダブルクリックします。選択肢はデフォルトのまま、最後まで進めていきます。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_arduino_install_path.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_arduino_2.png">

### 2. USB/UARTシリアル変換ドライバのインストール

ブラウザを開き、M5Stackの公式サイトにアクセスします。  https://www.arduino.cc/en/Main/Software

#### (1) `Windows`をクリックし、ファイルをダウンロードします。そしてダウンロードしたファイルを解凍します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_usb_driver_win_01.png">

#### (2) お使いのWindowsのビット数に合わせて、ドライバをインストールします。

* 32ビット版Windowsをお使いの方は `CP210xVCPInstaller_x86_vx.x.x.x.exe`

* 64ビット版Windowsをお使いの方は `CP210xVCPInstaller_x64_vx.x.x.x.exe`

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">

#### (3) 実行ファイルをダブルクリックし、インストールします。

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">

#### (4) シリアルポート`COMx`の番号を確認します。

USB/UARTシリアル変換ドライバがうまくインストールされている場合は、`Windowsデバイスマネージャ`からCOMポートの番号を確認することができます:

USB Type-C ケーブルを使ってM5CoreをPCに接続します。`Windowsデバイスマネージャ`を開き、`ポート(COM & LPT)`をクリックし、COMポート番号を確認します。

もしどのCOMポートかわからない場合は、一度M5CoreをPCから外し、再度接続することでCOMポートが表示されます。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_01.png">

## 3. ESP32ボードマネージャのインストール

#### (1) Arduino IDEを起動し、メニューから`ファイル`->`Peferences`->`環境設定`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02.png">

#### (2) 以下のESP32 Boards Manager URLを`Additional Boards Manager URLs:`に追記します。

*ESP32 Boards Manager url: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03.png">

#### (3) `ツール`->`Board:`->`ボードマネージャ...`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04.png">

#### (4) ダイアログで`ESP32`と検索し、`Install`をクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05.png">

## 4. M5Stackライブラリのインストール

#### (1) Arduino IDEを開き、メニューから`スケッチ`->`ライブラリのインクルード`->`ライブラリの管理...`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">

#### (2) `M5Stack`と検索し、インストールします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">

## 5. サンプルスケッチ実行

Arduino IDEには多数のサンプルプログラム（サンプルスケッチという）が予め用意されています。
USBケーブルでPCとM5Coreを接続し、M5Coreが接続されているCOMポートを選択し、
サンプルスケッチ選択、そしてコンパイル＆アップロードの順番で実行していきます。

#### (1) 実行するための設定をします。

あなたのボード、ボーレート（通信速度）、COMポートを選択します。(例：M5Stack-Core-ESP32, 921600, COM26) `COM`ポートの番号は人により異なります。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">

#### (2) `FactoryTest.ino`のサンプルスケッチを選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_an_example.png">

#### (3) プログラムのコンパイルとM5Coreへのプログラムのアップロードを行います。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">

#### (4) 最初のM5Stackプログラム

Arduino IDEを開き、`新しいファイル(.ino)`を開き、`my_test.ino`と名前を変更します。

そして以下のプログラムをコピーして、貼り付けし、実行してみましょう。

```arduino
#include <M5Stack.h>

// the setup routine runs once when M5Stack starts up
void setup(){

  // M5Stackの初期化
  M5.begin();

  // LCD display
  M5.Lcd.print("Hello World!");
  M5.Lcd.print("M5Stack is running successfully!");
}

// 無限ループ
void loop() {

}
```

アップロードが成功すると、M5Stackの画面に、`Hello World!M5Stack is running successfully!`と表示されるはずです。