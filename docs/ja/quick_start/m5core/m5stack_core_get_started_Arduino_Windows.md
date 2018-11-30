# M5Core クイックスタート(Windows, Arudino)

[中文](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_Windows) | [English](en/quick_start/m5core/m5stack_core_get_started_Arduino_Windows) | 日本語

?> **Tip** もしMacをお使いの方は[こちら](ja/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS)を参照してください。

## コンテンツ

1. [環境設定](#環境設定)

    - [Step1. arduino-ESP32サポートのダウンロード](#step1-arduino-esp32サポートのダウンロード)

    - [Step2. M5Stackライブラリのダウンロード](#step2-m5stackライブラリのダウンロード)

2. [例題](#例題)

?> **Tip** *もしM5Stack Libを更新したい場合はこちらの記事を参照してください。[Arduino IDEのM5Stackライブラリ更新方法](/ja/related_documents/upgrade_m5stack_lib).*

?> **Note** *`USB driver`、`Git`、`Arduino IDE(Installation path: C:\Program Files\Arduino)` をインストールしているか確認してください。 もしまだの場合は、 [シリアル接続の確立方法](/ja/related_documents/establish_serial_connection) と [GitとArduino IDEのインストール方法](/ja/related_documents/how_to_install_git_and_arduino)を参照してください。もしあなたがすでにArduino IDEをデフォルトの`C:\Program Files\Arduino`以外にインストールしている場合は、デフォルトパスに再インストールしてください。*

## 環境設定

### Step1. arduino-ESP32サポートのダウンロード

次のバッチファイルをダウンロードして、実行してください。[download_arduino_esp32_support.bat](https://github.com/m5stack/m5-docs/tree/master/docs/assets/scripts/download_arduino_esp32_support.bat)
<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/execute_batch_file.png">
</figure>

以下のようにGitHubからリポジトリを取得します。（少し時間がかかります）

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/execute_batch_file_for_downloading_arduino_esp32.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_arduino_esp32_completed.png">
</figure>


### Step2. M5Stackライブラリのダウンロード

Arduino IDEを開いて`スケッチ -> ライブラリをインクルード -> ライブラリを管理...`と選択します。開いたウィンドウの検索ボックスに`m5stack`と検索し、出てきたライブラリをインストールします。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_02.png">
</figure>

!> **Note:** *以下のように表示された場合は、アップデートです。*

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/update_m5stack_lib.png">
</figure>

## 例題

このセクションではArduinoでプログラムができるかを確認します。最初にM5StackとPCをUSBケーブルで接続してください。そしてM5Stackが接続されているシリアルポートを選択し、サンプルプログラムを実行してみましょう。

### 1. `FactoryTest.ino`サンプルスケッチ実行

Arduino IDEのメニューから`ツール`を選択し、ボードとボーレート、シリアルポートを次のように選択します。M5Stack-Core-ESP32、921600、COMx（シリアルポートの番号はお使いの環境によって変わります。)

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_board_baudrate_serial_port.png">
</figure>

メニューから`ファイル -> スケッチ例 -> M5Stack -> Basics -> FactoryTest`を選択します。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_an_example.png">
</figure>

コンパイル＆アップロード実行します。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_upload.png">
</figure>

### 2. 新しいM5Stackのプログラム

Arduino IDEで新しいファイルを開いて`my_test`という名前をつけます。
次に以下のコードをコピーし、`my_test`に貼り付けます。

```cpp
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
