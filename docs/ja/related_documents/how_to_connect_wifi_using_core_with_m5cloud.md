# M5StackのWi-Fi接続方法 (M5Cloud向け)

[中文](zh_CN/related_documents/how_to_connect_wifi_using_core_with_m5cloud) | [English](en/related_documents/how_to_connect_wifi_using_core_with_m5cloud) | 日本語

?> **Tip** *もしあなたのM5Stackにあらかじめ`M5Cloud`向けのファームウェアが書き込まれていない場合は、こちらを参考にファームウェアを書き込んでください。[ファームウェアの更新方法](ja/related_documents/how_to_burn_firmware)*

**電源を入れて下図の画面に遷移したら、M5StackのWi-FiのAPにアクセスすることができます。**

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/m5stack_connet_wifi.png">
</figure>

## コンテンツ

1. [APに接続](#_1-apに接続)

2. [Wi-Fiネットワーク選択](#_2-Wi-Fiネットワーク選択)

3. [M5Stackをリセット](#_3-m5stackをリセット)

## 1. APに接続

**Use Mobile Phone or PC for connectting to M5Core AP(like `M5Stack-a67c`)**

## 2. Wi-Fiネットワーク選択

**ブラウザから`192.168.4.1`にアクセスし、使用するWi-FiのSSIDとパスワードを入力します。(図ではWi-FiのSSIDは`MasterHax_2.4G`)**

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/wifisetup.png">
</figure>

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/wifi_connect_successfully.png">
</figure>

?> **Note** もしWi-Fi接続が失敗した場合は、再度接続をやり直してみてください。

## 3. M5Stackをリセット

**Wi-Fiの設定がうまくいったら、M5Stackは自動的に再起動します。**

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/check_code_on_m5stack.png">
</figure>

?> **Note** もし以前に[M5Cloud](http://cloud.m5stack.com)でチェックコードを入力したことがある場合、以下の図のように表示されます。

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/connected_wifi_m5cloud_been_bound.png">
</figure>

## 完成

次のステップとして実際にプログラムを作成してみましょう。[M5Cloud クイックスタート(MicroPython)](ja/quick_start/m5core/m5stack_core_get_started_MicroPython_m5cloud)を参照してください。
