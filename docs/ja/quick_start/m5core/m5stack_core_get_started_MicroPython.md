# UIFlow クイックスタート(Blockly/MicroPython) {docsify-ignore-all}

:memo: **[テキストチュートリアル](#テキストチュートリアル)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper: **[ビデオチュートリアル](#ビデオチュートリアル)**

## テキストチュートリアル

1. [USBシリアル変換ドライバ インストール](#_1-USBシリアル変換ドライバ-インストール)
2. [UIFlowファームワエア 書き込み](#_2-uiflowファームウェア-書き込み)
3. [Wi-Fi 設定](#_3-Wi-Fi-設定)
4. [例題](#_4-例題)

## 1. USBシリアル変換ドライバ インストール

ブラウザでこのアドレス https://m5stack.com/download にアクセスします。

#### (1) `CP210X Driver`の`Windows`版のパッケージをダウンロードし、解凍します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_usb_driver_win_01.png">

#### (2) お使いのWindowsが何ビット版か確認し、対応したドライバを選択します。

* 32ビットの場合 `CP210xVCPInstaller_x86_vx.x.x.x.exe`

* 64ビットの場合 `CP210xVCPInstaller_x64_vx.x.x.x.exe`

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">

#### (3) ファイルをダブルクリックして、インストールを開始します。

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">

#### (4) シリアルポート番号`COMx`を確認します。

シリアルドライバのインストールが成功したら、シリアルポートの番号を確認します。まずM5CoreとPCをUSBケーブルで接続します。そして`Windowsデバイスマネージャー`の`ポート(COM & LPT)`をチェックします。USBケーブルを抜いて消えたポートがM5Coreで使用するシリアルポート番号になります。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_01.png">

## 2. UIFlowファームワエア 書き込み

#### (1) M5Burnerのダウンロード

ブラウザで [M5Stack Official Website](http://www.m5stack.com/download) にアクセスし、M5Burnerをダウンロードします。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner_02.png" alt="Screenshot of coverpage" title="Cover page">

#### (2) ファームウェアの書き込み

USB Type-C ケーブルでM5CoreとPCを接続します。そしてダウンロードしたファイルを解凍し、`M5Burner.exe` を実行します。そして先ほど確認したシリアルポート番号`COMx`、ボーレート`921600`を選択します。最後にUIFlowの最新ファームウェアを選択します。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_02.png">

全て選択したら、`Burn` ボタンをクリックします。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_06_02.png">

次の図のように表示されたら、ファームウェアの書き込み成功です！

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_05.png">

## 3. Wi-Fi 設定

#### (1) `SETUP`を選択

ファームウェアの書き込みが成功したら、M5Stack本体横の赤いボタンを一回押すと電源が入ります。 起動したらすぐに `C button` を押します。うまくいくとネットワーク設定のための`SETUP` 画面に遷移します。`A or C button` で `Link Server: Flow.m5stack.com`を選択し、`B button`で決定します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_04.png">

#### (2) M5Coreに接続

あなたのPCまたはスマホの`Wi-Fi`をオンにし、M5Coreに表示されている`AP(アクセスポイント)`に接続します（図の例では`M5Stack-0d60`）。接続に成功したらブラウザを開き、`192.168.4.1`にアクセスします。そして普段使用しているWi-FiのSSIDを選択し、Wi-Fiパスワードを入力します。 (図ではM5)

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_05.png">

#### (3) Wi-Fiに接続

M5CoreがWi-Fiに接続したら、画面に `APIKEY` と UIFlowのウェブサイトへアクセスするための `QRコード` が表示されます。

*APIKEYとは？: APIKEYはデバイス毎のユニークなIDです。UIFlowはこのAPIKEYでデバイスを識別し、あなたの作成したプログラムをあなたのM5Coreにダウンロードすることができます。*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_06.png">

右上の点は接続状態を表しています:

* 緑： M5Core はオンラインです。

* 赤： M5Core はオフラインです。

## 4. 例題

#### (1) UiFlowに接続

スマホ / タブレットでM5Coreに表示されているQRコードをスキャン またはPCのブラウザで次のアドレス `flow.m5stack.com` にアクセスします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png">

UiFlowからM5Coreに作成したプログラムを送信する前に、 一度だけAPIKEYを設定する必要があります。

UiFlow画面右上から歯車マークの`settings`をクリックすると、モーダルウィンドウが開きます。M5Coreに表示されているAPIKEYを入力し、`Save` をクリックするとM5CoreがUiFlowと接続します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/click_for_apikey.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/input_apikey.png">

さあ、UiFlowでプログラミングを始めましょう！

#### (2) プログラムサンプル

#### a. UIの表示

4種類のUIコントロールを左上からドラッグして、UiFlowのデザイナーに貼り付けます。そして、右上から三角の`Run`ボタンをクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_ui.gif">

#### b. Blocklyでプログラミング

`Emoji`の中から`Set emoji map in color`ブロックをドラッグして、`Blocklyコードエリア`に貼り付けます。そして、右上から三角の`Run`ボタンをクリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_heart.gif">

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_draw_heart.m5f)*

#### c. MicroPythonでプログラミング

以下のコードをコピーして、`MicroPythonコードエリア`に貼り付けます。そして、右上から三角の`Run`ボタンをクリックします。

```Python
from m5stack import *
from m5ui import *
clear_bg(0x111111)

btnA = M5Button(name='ButtonA', text='ButtonA', visibility=False)
btnB = M5Button(name='ButtonB', text='ButtonB', visibility=False)
btnC = M5Button(name='ButtonC', text='ButtonC', visibility=False)

lcd.print("Hello M5Stack")
```

この図の部分をクリックすると `Blockly` <-> `MicroPython` を切り替えることができます。
<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/program_with_micropython.png">

'Hello M5Stack`というメッセージがM5Coreの画面に表示されます。

## ビデオチュートリアル

**UIFlow紹介**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/UI%20Flow%20Overview.mp4" type="video/mp4">
</video>

**UIFlowチュートリアル**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%E7%AE%80%E4%BB%8B.mp4" type="video/mp4">
</video>
