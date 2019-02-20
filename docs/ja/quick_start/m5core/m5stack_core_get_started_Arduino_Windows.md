# M5Core クイックスタート(Windows, Arudino) {docsify-ignore-all}

?> `USB driver`、`Git`、`Arduino IDE` をインストールしているか確認してください。 もしまだの場合は、 [シリアル接続の確立方法](ja/related_documents/establish_serial_connection) と [GitとArduino IDEのインストール方法](ja/related_documents/how_to_install_git_and_arduino)を参照してください。

## コンテンツ

1. [環境設定](#環境設定)

    - [Step1. arduino-ESP32サポートのダウンロード](#step1-arduino-esp32サポートのダウンロード)

    - [Step2. M5Stackライブラリのダウンロード](#step2-m5stackライブラリのダウンロード)

2. [例題](#例題)

## 環境設定

### Step1. arduino-ESP32サポートのダウンロード

Arduino IDEを起動し、メニューから`File`->`Peferences`->`Settings`と選択します。

以下のようにGitHubからリポジトリを取得します。（少し時間がかかります）

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02.png">

最新のESP32ボード管理URLを追加してください`Additional Boards Manager URLs: `

*最新のボードマネージャURLはこちら：https://dl.espressif.com/dl/package_esp32_index.json**

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03.png">

`Tools`->`Board:`->`Boards Manager...`を選択し、新しいポップアップダイアログで、`ESP32`と入力して検索します。`Install`をクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05.png">

### Step2. M5Stackライブラリのダウンロード

Arduino IDEを開いて`スケッチ -> ライブラリをインクルード -> ライブラリを管理...`と選択します。開いたウィンドウの検索ボックスに`m5stack`と検索し、出てきたライブラリをインストールします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_06.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_07.png">

!> **Note:** *以下のように表示された場合は、アップデートします。*

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