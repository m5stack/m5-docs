# ファームウェアの更新方法 {docsify-ignore-all}

**:memo:[テキストチュートリアル](#テキストチュートリアル)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:[ビデオチュートリアル](#ビデオチュートリアル)**

***

*このドキュメントではM5Burnerのダウンロード方法と、M5Burnerを使用したファームウェアの書き込み方法を紹介します。*

***

## テキストチュートリアル

1. [Windows](#Windows)

2. [MacOS](#MacOS)

2. [Linux](#Linux)

## Windows

### 1. USBドライバインストール

もしまだCP2104 USBドライバをインストールしていない場合は[こちら](zh_CN/related_documents/establish_serial_connection)でインストールしてください。すでにインストールしてある場合は、次のステップに進んでください。

### 2. M5Burnerツールのダウンロード

M5Stackの公式サイトへアクセスし、**M5Burner**をダウンロードします。[offical website](http://www.m5stack.com)

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner_02.png" alt="Screenshot of coverpage" title="Cover page">

### 3. ファームウェアの書き込み

ダウンロードが完了したら、Zipファイルを解凍し、 `M5Burner.exe` をダブルクリックします。

M5StackまたはM5Stickが接続されているシリアルポートと書き込むファームウェアを指定します。ボーレートは`921600`を選択します。最初は`Erase`をクリックし、データ消去が完了するまで待ちます。消去完了後、`Burn`をクリックし、書き込みが終了するまでさらに待ちます。

?> **Tips.** ファイル名は以下の通りです。<br>[UIFlow](http://flow.m5stack.com) / [M5Cloud](http://cloud.m5stack.com) → `M5Flow-vx.x` / `M5Cloud-vx.x.x`<br>
   ESP32CAM / M5CAMERA → `M5Cam-vx.x` / `M5Cam-psram`

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_flow_firmware.gif">

!> **注意** もし `COMx` が表示されず、`COM1` だけしかない場合は、[シリアル接続の確立方法](ja/related_documents/establish_serial_connection)を参照し、USBドライバを再インストールしてください。

**a. ファームウェアを選択**

もし[UIFlow](http://flow.m5stack.com)を試したい場合は、`M5Flow-vx.x`を選択してください。
もしESP32CAM(またはM5CAMERA)を試したい場合は、`M5Cam-vx.x (/M5Cam-psram)`を選択してください。

**b. `Erase`をクリック**

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_01.png" alt="Screenshot of coverpage" title="Cover page">

*もしM5Burnerに `Hard resetting via RTS pin...` と表示されたら、`Erase(削除)`成功です！*

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_04.png" alt="Screenshot of coverpage" title="Cover page">

*もしM5Burnerに `Leaving... Staying in bootloader.` と表示されたら、`Burn(書込)`成功です！*

### 4. M5Stackをリセット

?> **Tip**
もしM5Burner `Burn` の際にビジー状態になる場合は、少し時間をおいてください。 ファームウェアの書き込みが終了すると正常に戻ります。

?> **Tip** もし途中で書き込みが中断された場合、書き込みをやり直してください。(`M5Burner has been closed suddenly...` などと表示された場合)

## MacOS

### 1. USBドライバインストール (インストール済みの場合は、ステップ2へ。)

はじめに公式サイト https://m5stack.com を開き、`Explore` -> `Download` と進み、MacOS 版の `M5Burner` と `CP21X Driver` をダウンロードします。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_01.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_02.png">

USBドライバ `CP21X Driver` のダウンロードが終わったら、以下のようにしてインストールします。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_03.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_04.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_05.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_06.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_07.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_08.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_09.png">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_10.png">

ここまできたら、USBドライバのインストールは完了です。ただし、Macでサードパーティ製のソフトウェアを実行するためには、以下の手順が必要になります。まずMacで`search`ボックスを開きます。そして`Terminal`を検索し、`Enter`を押します。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_11.png">

`Terminal`で、以下の図のコマンドを入力し、`Enter`を押します。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_12.png">

左上隅にあるアップルのロゴから`システム環境設定` → `セキュリティとプライバシー`と開きます。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_13.png">

`ダウンロードしたアプリケーションの実行許可：`で`全てのアプリケーションを許可`を選択します。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_14.png">

### 2. M5Burnerを開く

ブラウザを開き、右上の`Downloads`から`M5Burner`を選択し、実行します。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_15.png">

### 3. ファームウェア書き込み

USB Type-Cケーブルを使ってM5StackやM5StickをMacに接続し、適切なファームウェアのバージョンを選択してください。（通常は最新のバージョン）そして最後に`Flash`ボタンをクリックすると書き込みが完了します。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_mac_16.png">

書き込み完了後、USBケーブルを抜きます。そしてM5Stackの横の赤いボタン(M5Stickは本体横ボタン）を押すと再起動させます。

## Linux

### 1. pip と esptool のインストール

ターミナルを開き、以下のコマンドを実行し、pythonの管理ツール`pip`をインストールします。

* Centos7:

```clike
sudo yum install python-pip
```

* Ubuntu and Debian:

```clike
sudo apt-get install python-pip
```

* Arch:

```clike
sudo pacman -S --needed python-pip
```

`pip`のインストールが終わったら、`sudo pip install esptool`とコマンドし、`esptool`をインストールします。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_11.png">

### 2. 最新版M5Burnerをダウンロード

[UIFlow](http://www.m5stack.com)にアクセスし、MacOS版のM5Burnerをダウンロード、解凍します。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_10.png">

### 3. プログラム実行

ユーザーディレクトリ直下に`M5Burner`という名前のディレクトリを作成し、`M5Burner_MacOS/M5Burner_MacOS.app/Contents/Resources/firmware/M5Flow`を`~/M5Burner/`にコピーします。

もしv1.2.0のファームウェアを書き込みたい場合は、ターミナルで次のようにコマンドします。`cd ~/M5Burner/M5Flow/v1.2.0-en`

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_13.png">

M5CoreがPCに接続されているのを確認し、ターミナルで`sudo chmod +x *.sh && ./flash.sh`と入力するとファームウェアが書き込まれます。

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_12.png">

## ビデオチュートリアル

**Windows**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/WiFi%20Configuration/A2%20-%20WIFI%20Configuration.mp4" type="video/mp4">
</video>