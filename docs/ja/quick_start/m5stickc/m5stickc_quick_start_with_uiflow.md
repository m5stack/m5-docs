# M5StickC クイックスタート - UIFlow {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.png"><img src="assets/img/uiflow-logo.png">

**[1. UIFlowファームウェア書き込み](#_1-UIFlowファームウェア書き込み)**

**[2. Wi-Fiセッティング](#_2-Wi-Fiセッティング)**

**[3. プログラミング](#_3-プログラミング)**

## 1. UIFlowファームウェア書き込み

#### (1) M5Burnerをダウンロードする。

ブラウザで[M5Stack公式ウェブサイト](http://www.m5stack.com/download)にアクセスし、M5Burnerをダウンロードします。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner_02.png" alt="Screenshot of coverpage" title="Cover page">

#### (2) ファームウェアを書き込む

M5StickCとPCをUSB Type-Cケーブルで接続し、ダウンロードしたM5Burnerのファイルを解凍します。解凍後`M5Burner.exe`をダブルクリックします。

`COM`、`ボーレート`そして最新の`ファームウェア`を選択します。

* <font color="red">COM選択: COM31</font> (この写真ではPCに繋がっているシリアルポートは`COM31`)

* <font color="red">ボーレート選択: 115200</font>

* <font color="red">ファームウェア選択: UIFlow-vx.x.x-StickC</font>

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_01.png">

`Burn`をクリックするとUIFlowファームウェアが書き込まれます。

以下の図のようになったら、書き込み成功です。

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_02.png">

## 2. Wi-Fiセッティング

#### (1) `SETUP`を選択する。

UIFlowファームウェアの書き込みが成功したら、M5StickCの左側面にある`電源スイッチ`ボタンをクリックします。

M5StickCは、以下の図のようにAPの名前を表示します。

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_03.png">

#### (2) APに接続する。

あなたのPCまたはスマートフォンのWi-Fiをオンにします。それからM5StickCの画面に表示されているホットスポット`AP` に接続します。(今回の例では：`M5-80f0`)。  
接続が成功したら、ブラウザを開き、次のアドレス `192.168.4.1` にアクセスします。  
そして接続するWi-FiのSSIDとパスワードを入力します。(今回の例では、Wi-FiのSSIDは`M5`)

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_04.png">

#### (3) Wi-Fiに接続する。

M5StickCがWi-Fiへの接続が成功したら、M5StickCの画面に `APIKEY`が表示されます。

*APIKEYとは: APIKEYはデバイス毎のユニークなIDです。現在UIFlowがどのデバイスに接続されているか、APIKEYで判断し、プログラムコードがAPIKEYで指定されたデバイスに送信されます。*

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_05.png">

画面上のネットワークステータス:

* 緑： オンライン、M5StickCはUIFlowサーバに接続しています。

* 赤： オフライン

## 3. プログラミング

#### (1) UIFlowに接続する。

PCでプログラミングをしている場合、ブラウザを開き`flow.m5stack.com`にアクセスします。

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_06.png">

UIFlowからコードをM5StickCにアップロードする前に毎回UIFlowとM5StickCの接続が確認されます。

UIFlow IDEの画面右上の歯車をクリックし、あなたのM5StickCの画面に表示されているAPIKEYを表示されたモーダルダイアログに入力してください。  
そして`Save`をクリックすると、M5StickCとUIFlowが接続されます。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/click_for_apikey.png">

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_07.png">

UIFlowを使ってプログラムを始める準備ができました！

#### (2) 例題プログラム

UIFlow IDEの左上から`Lable`をドラッグして、`M5StickC`のUIインタフェースにドロップします。そしてプロパティから`text`と`font`を変更します。

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_10.png">

`Hardware` -> `LED`からブロックをドラッグして`LED ON`と`LED OFF`という名前をつけます。

`Timer`からブロックをドラッグして`Wait 1s`という名前をつけます。

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_13.png">

UIFlow IDEの右上にある三角形の`Run`ボタンをクリックします。

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_16.png">

<mark>**結果:**</mark>

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_14.png">
