# M5Cloud クイックスタート(MicroPython) {docsify-ignore-all}



?> **Note** *初めてM5Stackを使う場合、あらかじめ指定のファームウェアを書き込む必要があります。[ファームウェアの更新方法](ja/related_documents/how_to_burn_firmware)を参照してください。また、Wi-Fi接続先を変更したい場合は、このページを参照してください。 [M5StackのWi-Fi接続方法 (M5Cloud向け)](/ja/related_documents/how_to_connect_wifi_using_core_with_m5cloud)*

*デフォルトではM5CoreがWi-Fi接続に成功した場合、以下のような画面が表示されるはずです。*

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/check_code_on_m5stack.png">
</figure>

## コンテンツ

1. [M5Cloudへ接続](#M5Cloudへ接続)

2. [デバイスのバインド](#デバイスのバインド)

3. [プログラムする](#プログラムする)

## 1. M5Cloudへ接続

PCからM5Cloudでプログミングしたい場合は `cloud.m5stack.com` へブラウザでアクセスします。

次のように表示されるのでアカウントの登録を行います。

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/register_page_m5cloud.png">
</figure>

## 2. デバイスのバインド

`Device`->`Add` とクリックし、 チェックコードを入力して、M5StackをM5Cloud IDEのあなたのアカウントに紐付けます。(写真の場合はチェックコードが`052879`です)

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/webIDE_binding_device_interface.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/WebIDE_check_code.png">
</figure>

うまくいけば、プログラムができるようになるはずです。次のステップへ進みましょう。

## 3. プログラムする

### a. 新しいプロジェクトを作成する

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/new_a_faces_prj.png">
</figure>

### b. 新しいファイルを作成する

*FACES Kit向けのプログラムを書いてみましょう*

プロジェクトを作成したら、`faces.py`という名前のファイルを追加します。

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/add_file.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/rename_file.png">
</figure>

それから次のコードを`faces.py`に貼り付けて保存します。

```Python
"""
File name: faces.py

M5Stack MicroPython FACES keyboard I2C driver
"""

class Faces:
  def __init__(self, i2c=None):
    if i2c == None:
      from machine import I2C, Pin
      self.i2c = I2C(sda=21, scl=22)
    else:
      self.i2c = i2c
    self.addr = 0x08
    self.cb = None

  def read(self):
    return self.i2c.readfrom(self.addr, 1)

  def _callback(self, pin):
    from machine import Pin
    if pin == Pin(5):
      self.cb(self.read())

  def callback(self, cb):
    from machine import Pin
    self.pin = Pin(5)
    self.pin.init(Pin.IN)
    self.pin.irq(trigger=Pin.IRQ_FALLING, handler=self._callback)
    self.cb = cb
```

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/faces_py_file.png">
</figure>

さらに以下のファイルを`main.py`に貼り付けて保存します。

```Python
"""
File name: main.py
"""

from m5stack import *
from faces import Faces

keyboard = Faces()

# read once
print("Key value:", end='')
print(keyboard.read())

# callback
def keyboard_cb(value):
  print("Key value:", end='')
  print(value)
  lcd.print(value)

keyboard.callback(keyboard_cb)
```

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/final_result.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/save_file.png">
</figure>

実行してみましょう！

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/upload_it.png">
</figure>

## 完成

このデモプログラムは、FACESキーボードで押された文字をM5Stackの画面に表示します。

下図は、QWERTY キーボードで ("q", "w", "e", "r", "t", "y", "u", "i", "o", "p") と押した様子です。

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/result.png">
</figure>