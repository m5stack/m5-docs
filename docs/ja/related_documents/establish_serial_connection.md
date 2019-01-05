# シリアル接続の確立方法

**[MacOS](#acOS)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[Windows](#windows)**

**このページでは、M5StackとPCとの間でシリアル接続を確立するための方法を説明します。**

## MacOS

### 1. USBドライバをインストール

**[SiLabs CP2104 ドライバ ダウンロード](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)**

**ダウンロードした SiLabsUSBDriverDisk.dmg ディスクイメージをクリックし、マウントします。そして、指示に従い、OKをクリックします。**

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_dmg.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_pkg.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/2.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/3.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/4.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/5.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/6.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/7.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/8.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/9.png">
</figure>

### 2. ポート確認

**あなたのPC（の外部コンバータドングル）のシリアルポートのデバイス名を確認するには、ターミナルを開き、M5Stackを取り外した状態で2回、次に接続した状態で2回ずつ実行します。**

**MacOS**

    ls /dev/cu.*

## Windows

### 1. USBドライバをインストール

**ダウンロード [SiLabs CP2104 ドライバ ダウンロード](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)**

**あなたのWindowsのバージョンに合わせて(Windows7/8/10)ドライバをダウンロードしてください。**

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/windows_download_CP2104_USB_driver.png">
</figure>

**自分の使用しているOSに合わせて64bit(x64)/32bit(x86)を選択し、インストーラをクリックします。**

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">
</figure>

### 2. ポート確認

**Windowsのデバイスマネージャからポートを確認することができます。まずデバイスマネージャを開きます。そしてM5Stackを接続すると、デバイスマネージャのリストが更新され、ポートが現れます。**

**図のようにシリアルポートが見えるようになります。**

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/windows_m5stack_in_device_manager.png">
</figure>
