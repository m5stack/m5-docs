# クイックスタート

**M5Stackの統合開発環境(IDE)のセットアップ、ファームウェア書込み、基本的な開発方法（<mark>Arduino</mark>,<mark>MicroPython</mark>）などを簡単な例を通して学んでいきましょう。**

## はじめに

**M5Stackはモジュール積層型の開発デバイスです。M5Stackの名前はModuleの「M」、5x5cmサイズの「5」、"積み重ねる"を意味する「Stack」からきています。**

## 開発に必要なもの

M5Stack アプリケーション開発に必要なもの:

* Windows、Linux、MacいずれかのOSがインストールされた **PC**
* **USB Type-C** ケーブル

事前準備:

1. シリアル通信用USBドライバをインストールします。
  
  [How to Establish serial connection](related_documents\establish_serial_connection) を参考にして、自分のPCに合ったドライバをインストールします。

## クイックスタート

!> **注意** シリアル通信用USBドライバがインストール済みか確認してください。もしまだの場合は [How to Establish serial connection](related_documents\establish_serial_connection) を参考に、インストールを完了させてから次のステップに進んでください。

まずはじめにM5Stack本体にファームウェア(拡張子.bin)と呼ばれるファイルを書き込みます。やり方は [How to burn firmware](related_documents\how_to_burn_firmware_en.md) を参照してください。

もし以下の製品をお持ちの場合は、その製品のリンクをクリックして開発を始めましょう！

<img src="assets/img/getting_started_pics/m5stack_core.png"> | <img src="assets/img/getting_started_pics/m5camera.jpg">  | <img src="assets/img/getting_started_pics/M5Bala.jpg">
---|---|---
[M5StackCore](quick_start/m5core/m5stack_core_quick_start) | [M5Camera](quick_start/m5camera/m5camera_quick_start) | [M5BALA](quick_start/bala/bala_quick_start)



## 演習

**次の中から、あなたの好きな言語を選んで、もっと練習してみよう！**

<img src="assets/img/getting_started_pics/programming_mode_arduino.png"> | <img src="assets/img/getting_started_pics/programming_mode_blockly.png">  | <img src="assets/img/getting_started_pics/programming_mode_micropython.png">
---|---|---
[Arduino](practice\practice_arduino) | [M5Flow-Blockly](practice\practice_blockly) | [M5Flow-MicroPython](practice\practice_micropython)

## 関連ドキュメント

  - [establish_serial_connection](related_documents/establish_serial_connection)
  - [how_to_burn_firmware_en](related_documents/how_to_burn_firmware_en)
  - [how_to_connect_wifi_using_core](related_documents/how_to_connect_wifi_using_core)
  - [upgrade_m5stack_lib](related_documents/upgrade_m5stack_lib)
