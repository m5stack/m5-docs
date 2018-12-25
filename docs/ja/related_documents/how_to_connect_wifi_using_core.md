# M5StackのWi-Fi接続方法



?> **Tip** *もしあなたのM5Stackに`UiFlow`向けのファームウェアが書き込まれていない場合は、あらかじめ、こちらを参考にファームウェアを書き込んでください。[ファームウェアの更新方法](ja/related_documents/how_to_burn_firmware)*

**M5Stackの左側にある赤いボタンを押して電源をオンにすると、この画面に遷移します。さぁ、アクセスポイントに接続しましょう！**

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page.png" width="300">
</figure>

## 接続の流れ

1. [UPLOADボタンを押す](#press-upload-button)

2. [アクセスポイントの選択](#select-networkable-ap)

3. [デバイスのリセット](#reset-your-device)

## 1. `UPLOAD`ボタンを押す

**`UPLOAD`ボタンを押すと、以下のようなメッセージが表示されます。**

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/uiflow_01.jpg" width="300">
</figure>

## 2. アクセスポイントの選択

**スマートフォンかPCを使用して、M5Core AP(like `M5Stack-03fc`)に接続します。 それからブラウザを開き、192.168.4.1 にアクセスし、あなたの使用しているネットワークのSSIDとパスワードを入力して`Configure`ボタンをクリックします。 (図の例ではネットワークのSSIDは `MasterHax_5G`です)**

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/input_wifi_password.png">
</figure>

## 3. デバイスのリセット

**Wi-Fiの接続に成功したら、ブラウザの表示に従い、自動的にM5Stackが再起動します。**

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/connect_wifi_successfully.png">
</figure>

## 完了

一度M5Stackをリセットして再起動したら、UPLOADボタンを押します。二次元コードが表示される画面に遷移するので、次の記事を参考にして、プログラムをしてみましょう！ [Quick Start with UiFlow](ja/quick_start/m5core/m5stack_core_get_started_MicroPython)

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/apikey.jpg">
</figure>

?> **Note** もし別のネットワークに接続したい場合は、リセットボタンで再起動をしてから`SETUP`ボタンを押して、再度Wi-Fiの接続設定を行なってください。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/change_wifi.jpg">
</figure>