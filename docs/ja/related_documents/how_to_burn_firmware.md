# ファームウェアの更新方法

[中文](zh_CN/related_documents/how_to_burn_firmware) | [English](en/related_documents/how_to_burn_firmware) | 日本語

**このページではM5Stackのファームウェアの更新方法を説明します。**

## MacOS

ターミナルを開き、以下のコマンドをコピペして実行していきます。

1. 初めに**pip**をインストールします。（２回目以降はこの作業は不要です）

    sudo easy_install pip

2. 次に**esptool**をインストールします。（２回目以降はこの作業は不要です）

    pip install esptool

3. 次にファームウェアをダウンロードし、解凍します。

    mkdir m5burner && \
    cd m5burner && \
    curl -O http://res.m5stack.com/M5Burner/M5Burner.zip && \
    unzip M5Burner.zip

4. 解凍が終わったら、リストを表示します。

    ls

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/mac_firmware_01.png" alt="firmware_list" title="firmware_list">
</figure>

5. そして書き込みたいファームウェアを選び、ディレクトリを移動します。

    cd path/to/firmware/version/
    ls

6. flash.sh という名前のファイルがあるところまで移動したら、M5Stackとパソコンの接続を確認し、以下のコマンドを入力します。

    sh flash.sh

7. 書き込みが完了したら、M5Stackのリセットボタンを押して、ファームウェアの更新の完了です。

## Windows

### 1. M5Burnerツールのダウンロード

M5Stackの公式サイトへアクセスし、**M5Burner**をダウンロードします。[offical website](http://www.m5stack.com)

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

### 2. ファームウェアの書き込み

ダウンロードが完了したら、Zipファイルを解凍し、 `M5Burner.exe` をダブルクリックします。

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_01.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

**適切な`シリアルポート`を選択し、`Baud`を*921600*に設定します。**

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_02.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

!> **注意** もし `COMx` が表示されず、`COM1` だけしかない場合は、[シリアル接続の確立方法](ja/related_documents/establish_serial_connection)を参照し、USBドライバを再インストールしてください。

**a. ファームウェアを選択**

例えば、もし[UiFlow](http://flow.m5stack.com)を試したい場合は、`M5Flow-vx.x`オプションを選択してください。
もしESP32CAM(またはM5CAMERA)を試したい場合は、`M5Cam-vx.x (/M5Cam-psram)`オプションを選択してください。

**b. `Erase`をクリック**

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_06.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

*もしM5Burnerに `Hard resetting via RTS pin...` と表示されたら、`Erase(削除)`成功です！*

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_04.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

**c. `Burn`をクリック**

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_03.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

*もしM5Burnerに `Leaving... Staying in bootloader.` と表示されたら、書き込み成功です！*

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_05.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

### 3. M5Stackをリセット

?> **Tip**
もしM5Burner `Burn`ビジー状態になる場合は、少し時間をおいてください。 ファームウェアの書き込みが終了すると正常に戻ります。

?> **Tip** もし途中で書き込みが中断された場合、書き込みをやり直してください。(`M5Burner has been closed suddenly...` などと表示された場合)