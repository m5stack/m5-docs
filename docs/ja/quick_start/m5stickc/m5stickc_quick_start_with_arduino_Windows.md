# M5StickC クイックスタート {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.png"><img src="assets/img/windows-logo.png">

## コンテンツ

**[1. Arduino IDE インストール](#_1-Arduino-IDE-インストール)**

**[2. ESP32ボードマネージャ インストール](#_2-ESP32ボードマネージャ-インストール)**

**[3. M5StickCライブラリ インストール](#_3-M5Stickcライブラリ-インストール)**

**[4. 例題](#_4-例題)**

## 1. Arduino IDE インストール

ブラウザを開いて、Arduino公式サイト https://www.arduino.cc/en/Main/Software にアクセスします。

#### (1) `Windows ZIP file for non admin install`をクリックし、`Arduino IDE`をダウンロードします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package.png">

#### (2) `JUST DOWNLOAD`をクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/arduino_cc_package_02.png">

#### (3) Arduino IDEのインストーラーをダブルクリックし、実行します。設定やパスはすべてデフォルトのままで問題ありません。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/select_arduino_install_path.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_arduino_2.png">

## 2. ESP32ボードマネージャ インストール

#### (1) Arduino IDEを開き、メニューから`File`->`Peferences`->`設定`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_02.png">

#### (2) 次のESP32ボードマネージャURLを`追加のボードマネージャのURL:`に追記します。

*ESP32ボードマネージャURL: https://dl.espressif.com/dl/package_esp32_index.json*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_03.png">

#### (3) 次にメニューから`ツール`->`ボード:`->`ボードマネージャ...`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_04.png">

#### (4) 検索ボックスで`ESP32`と検索し、出てきた`esp32ライブラリ`を`インストール`します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/quick_start_arduino_win_05.png">

## 3. M5StickCライブラリ インストール

#### (1) Arduino IDEを開き、メニューから`スケッチ`->`ライブラリをインクルード`->`ライブラリの管理...`と選択します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/install_m5stack_lib_01.png">

#### (2) 検索ボックスで`M5StickC`と選択し、`M5StickCライブラリ`を`インストール`します。

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_10.png">

## 4. 例題

まずArduino IDEでプログラムを書き込めるかどうか確認します。

#### (1) シリアルポートの確認

`Windowsデバイスマネージャ`を開きます。

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_06.png">

なぜならM5StickC'sのシリアルポート変換チップのドライバはインストールの必要がありません。Tpye-C USB ケーブルでM5StickCをPCに接続するだけで認識します。接続した際に、デバイスマネージャに新しいシリアルポートが出現するので、それをメモします。

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_05.png">

#### (2) サンプルスケッチから`FactoryTest.ino`を開きます。

Arduino IDEを開き、M5StickCが接続されているシリアルポートを選択します。


* <font color="red">ボード ( Board ): ESP32 Pico Kit</font>

* <font color="red">ボーレート ( Upload Speed ): 115200bps 或 1.5Mbps</font>

* <font color="red">シリアルポート ( Port )：COM31</font>(今回M5StickCが使用するポートは`COM31`ですが、毎回変わります。)

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_08.png">

サンプルスケッチの中から`M5StickC` -> `Basics` -> `FactoryTest.ino`と選択します。

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_04.png">

`Upload`をクリックし、プログラムをM5StickCに書き込みます。

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_quick_start_09.png">
