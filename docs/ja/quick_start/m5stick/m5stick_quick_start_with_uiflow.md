# M5Stick クイックスタート(UIFlow) {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stick/stick_01.png"><img src="assets/img/getting_started_pics/m5stick/stick_06.png">

1. **[ファームウェア更新](#ファームウェア更新)**

2. **[電源オン](#電源オン)**

3. **[環境設定](#環境設定)**

    - **[ステップ1. WIFI設定](#step1-wifi設定)**

    - **[ステップ2. API Key設定](#step2-api-key設定)**

4. **[例題](#例題)**

## ファームウェア更新

>M5Stickのファームウェアを最新にすることでより良い体験が得られます。

*もしファームウェアを更新する場合は[こちら](ja/related_documents/how_to_burn_firmware)を参照してください。*

<img src="assets/img/getting_started_pics/m5stick/stick_03.png">

## 電源オン

>M5Stickの左下にあるボタンは電源ボタンです。一回押すと電源オン、実行中に一回押すとリセット、素早く二回押すと電源オフです。

>電源ボタンに加えて、プログラムで利用可能な`A`ボタンを提供します。

<img src="assets/img/getting_started_pics/m5stick/stick_02.png" width="300" height="300">

## 環境設定

### Step1. WIFI設定

初回起動する際、デフォルトで設定ページが表示されます。OLEDスクリーンに**AP名(SSID)**と**WiFi設定アドレス(192.168.4.1)**が表示されます。

PCまたはスマホを利用して、表示されているAPへ接続します。接続が成功したら、ブラウザからWiFi設定アドレスにアクセスします。そして普段使用しているネットワークのSSIDとパスワードを入力後、`Save`をクリックし、接続が成功するのを待ちます。

<img src="assets/img/getting_started_pics/m5stick/stick_04.png">

## Step2. API Key設定

WiFi設定が完了したら、M5Stickは自動的に再起動後、プログラミングモードに遷移します。画面に“Done”と表示されたら、M5StickがWiFiへ接続したことを示します。次にWeb IDE [flow.m5stack.com](http://flow.m5stack.com/)へアクセスし、プログラミングをしてみましょう。

[Web IDE](http://flow.m5stack.com/)のページ右上の`Settings`ボタンをクリックし、M5Stickのスクリーンに表示される**API Key**を登録し、保存ます。これでプログラミングの準備が整いました。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/uiflow_setting.png">

<img src="assets/img/getting_started_pics/m5stick/stick_05.png">

## 補足

>もし`Download`をクリックした場合、最後にDownloadされたプログラムを実行します。この場合にもしプログラミングモードに遷移したい場合は、リセット後、`UiFlow`ロゴが消えるまでに`A` ボタンを1回クリックします。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/uiflow_download.png">

>もし新しいWiFi設定をしたい場合、 リセット後、`UiFlow`ロゴが消えるまでに`A`ボタンを1秒以上押し続けてから離します。

## 例題

>こちらから例題をダウンロードします。 [example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Stick/UIFlow)。そして`UiFlow`でこのサンプルコードを開き、実行します。 実行結果: 白い四角形がスクロールします。

<img src="assets/img/product_pics/core/minicore/m5stick/example/example_core_m5stick_02.png" width=50% height=50%><img src="assets/img/product_pics/core/minicore/m5stick/example/example_core_m5stick_03.png" width=50% height=50%>

## ノート

>スティック画面の解像度は**64x128**です。従って[Web IDE](http://flow.m5stack.com/)で図形をドラッグしてM5Stickの画面に表示する場合は、(0,0)から(63,127)の範囲内にドラッグしてください。（現在、ラベルと長方形の表示をサポートしています）

<img src="assets/img/product_pics/core/minicore/m5stick/example/example_core_m5stick_01.png" width=50% height=50%>