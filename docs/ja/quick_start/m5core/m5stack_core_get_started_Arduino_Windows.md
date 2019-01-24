# M5Core クイックスタート(Windows, Arudino)

?> `USB driver`、`Git`、`Arduino IDE` をインストールしているか確認してください。 もしまだの場合は、 [シリアル接続の確立方法](ja/related_documents/establish_serial_connection) と [GitとArduino IDEのインストール方法](ja/related_documents/how_to_install_git_and_arduino)を参照してください。

## コンテンツ

1. [環境設定](#環境設定)

    - [Step1. arduino-ESP32サポートのダウンロード](#step1-arduino-esp32サポートのダウンロード)

    - [Step2. M5Stackライブラリのダウンロード](#step2-m5stackライブラリのダウンロード)

2. [例題](#例題)

## 環境設定

### Step1. arduino-ESP32サポートのダウンロード

Arduino IDEを起動し、メニューか`File`->`Peferences`->`Settings`


以下のようにGitHubからリポジトリを取得します。（少し時間がかかります）

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02.png">

このオプションに最新のESP32ボード管理URLを追加してください`Additional Boards Manager URLs: `

*最新の掲示板管理URLはこちら："[https://github.com/espressif/arduino-esp32/releases/download/1.0.1/package_esp32_dev_index.json](https://github-production-release-asset-2e65be.s3.amazonaws.com/70127218/2a679600-1541-11e9-8369-babc0ad845a6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20190124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190124T015328Z&X-Amz-Expires=300&X-Amz-Signature=5bfab2d4154aa1bc9fc22b70bb726621914be2f40b87f4d8bb918bf8488daa7a&X-Amz-SignedHeaders=host&actor_id=9019236&response-content-disposition=attachment%3B%20filename%3Dpackage_esp32_dev_index.json&response-content-type=application%2Foctet-stream)"*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03.png">

確認後，選ぶ`Tools`->`Board:`->`Boards Manager...`，新しいポップアップダイアログで、入力して検索します`ESP32`，クリック`Install`

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05.png">

### Step2. M5Stackライブラリのダウンロード

Arduino IDEを開いて`スケッチ -> ライブラリをインクルード -> ライブラリを管理...`と選択します。開いたウィンドウの検索ボックスに`m5stack`と検索し、出てきたライブラリをインストールします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_06.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_07.png">

!> **Note:** *以下のように表示された場合は、アップデートです。*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/update_m5stack_lib.png">

## 例題

このセクションではArduinoでプログラムができるかを確認します。最初にM5StackとPCをUSBケーブルで接続してください。そしてM5Stackが接続されているシリアルポートを選択し、サンプルプログラムを実行してみましょう。

### 1. `FactoryTest.ino`サンプルスケッチ実行

Arduino IDEのメニューから`ツール`を選択し、ボードとボーレート、シリアルポートを次のように選択します。M5Stack-Core-ESP32、921600、COMx（シリアルポートの番号はお使いの環境によって変わります。)

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">

メニューから`ファイル -> スケッチ例 -> M5Stack -> Basics -> FactoryTest`を選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_an_example.png">

コンパイル＆アップロード実行します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">

### 2. 新しいM5Stackのプログラム

Arduino IDEで新しいファイルを開いて`my_test`という名前をつけます。
次に以下のコードをコピーし、`my_test`に貼り付けます。

```arduino
#include <M5Stack.h>

// M5Stackがスタートする時に一度だけ実行されます。
void setup(){

  // M5Stackの初期化
  M5.begin();

  // LCDの画面に表示
  M5.Lcd.print("Hello World!");
  M5.Lcd.print("M5Stack is running successfully!");
}

// この中の処理は無限に繰り返し実行されます。
void loop() {
    // このプログラムでは何もしない
}
```

コンパイルしてアップロードすると、M5Stackの画面に"Hello World! M5Stack is running successfully!"とメッセージが表示されます。

?> *もしM5Stack Libを更新したい場合はこちらの記事を参照してください。[Arduino IDEのM5Stackライブラリ更新方法](ja/related_documents/upgrade_m5stack_lib).*