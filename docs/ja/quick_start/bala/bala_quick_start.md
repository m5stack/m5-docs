# BALA クイックスタート

!>M5Balaを使用するためには、M5Stack FIREまたはM5GO(WHITE)のいずれかが別途必要になります。

<img src="assets/img/product_pics/app/bala_4.jpg" width="250" height="250">

## 準備

- シリアルドライバをインストールします。- [シリアル接続の確立方法](/ja/related_documents/establish_serial_connection)

## 開発環境選択

1. [UiFlow編](#UiFlow編)
2. [Arduino IDE編](#Arduino-IDE編)

## UIFlow編

1. UiFlow向けのファームウェアを書込みます。- [ファームウェアの更新方法](/ja/related_documents/how_to_burn_firmware)
2. Wi-Fi接続設定を行います。- [M5StackのWi-Fi接続方法](/ja/related_documents/how_to_connect_wifi_using_core)
3. ポゴピンの位置を確認して、M5BalaにM5Stackコアを重ねます。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_pogopin.jpg" width="500">
</figure>

4. M5Stackの横の赤いスイッチを押して、起動します。(２回連続でクリックすると電源OFF)
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_power_switch.jpg" width="500">
</figure>

5. M5Balaのスイッチを押して起動します。(２回連続でクリックすると電源OFF)
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_bala_power_switch.jpg" width="500">
</figure>
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_indicator.jpg" width="500">
</figure>

6. [UiFlow](http://flow.m5stack.com/)にアクセスし、モードをBlocklyからPythonに切り替えます。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_uiflow_01.png" width="500">
</figure>

7. 以下のコードを貼り付けて実行すると、バランスを取ります。

```python
from m5stack import *
from m5ui import *
from m5bala import M5Bala
import i2c_bus
clear_bg(0x111111)

m5bala = M5Bala(i2c_bus.get(i2c_bus.M_BUS))
btnA = M5Button(name="ButtonA", text="ButtonA", visibility=False)
btnB = M5Button(name="ButtonB", text="ButtonB", visibility=False)
btnC = M5Button(name="ButtonC", text="ButtonC", visibility=False)
title0 = M5Title(title="Title", fgcolor=0xFFFFFF, bgcolor=0x0000FF)

title0.setTitle('calirate start')
wait(2)
sampleCount = 2000
gyroXSum = 0
gyroYSum = 0
gyroZSum = 0

for _ in range(sampleCount):
    gyroXYZ = m5bala.imu.gyro
    gyroXSum += gyroXYZ[0] # X
    gyroYSum += gyroXYZ[1] # Y
    gyroZSum += gyroXYZ[2] # Z

gyroXMean = gyroXSum / sampleCount
gyroYMean = gyroYSum / sampleCount
gyroZMean = gyroZSum / sampleCount

m5bala.imu.setGyroOffsets(gyroXMean, gyroYMean, gyroZMean)

title0.setTitle('balance start')
while True:
    m5bala.balance()
    wait(0.001)
```

## Arduino IDE編

1. Arduino IDEをインストールします。
2. Arduino IDEの設定から追加のボードマネージャのURLに`https://dl.espressif.com/dl/package_esp32_index.json`を追加します。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_add_board_manager_01.png" width="500">
</figure>
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_add_board_manager_02.png" width="500">
</figure>

3. Arduino IDEにボードマネージャから`esp32`をインストールします。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_search_esp32.png" width="500">
</figure>

1. Arduino IDEにライブラリマネージャから`m5stack`ライブラリをインストールします。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_search_m5stack.png" width="500">
</figure>

5. Arduino IDEにライブラリマネージャから`NeoPixelBus`ライブラリをインストールします。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_search_neopixelbus.png" width="500">
</figure>

6. Arduino IDEにライブラリマネージャから`MPU6050_tockn`ライブラリをインストールします。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_search_mpu6050_tockn.png" width="500">
</figure>

7. M5Stackがパソコンに接続されていることを確認してから、`ツール -> シリアルポート`から適切なシリアルポートを選択します。
8. 同様にボードも`M5Stack-Core-ESP32`または`M5Stack-Fire`を選択します。
9. [M5Bala](https://github.com/m5stack/M5Bala.git)のソースをダウンロードします。Gitが使えない方は、[こちら](https://git-scm.com/download/win)からインストールしてください。
```shell
git clone --recursive https://github.com/m5stack/M5Bala.git
```
10. Arduino IDE上で新規ファイルを作成し、`M5Bala/src/Default_firmware.ino`の中身をコピーして貼り付けます。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_files.png" width="500">
</figure>

11. `Default_firmware.ino`の89行目の`M5.setPowerBoostKeepOn(false);`をコメントアウトします。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_comment_out.png" width="500">
</figure>

12. 新規タブを作成し、同様に`M5Bala/src/M5Bala.cpp`の中身をコピーして貼り付けます。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_newtab_01.png" width="500">
</figure>
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_newtab_02.png" width="500">
</figure>

13. 新規タブを作成し、同様に`M5Bala/src/M5Bala.h`の中身をコピーして貼り付けます。
14. 最後に書込みを実行します。
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_burn.png" width="500">
</figure>

<img src="assets/img/product_pics/app/bala_3.jpg" width="500" height="500">