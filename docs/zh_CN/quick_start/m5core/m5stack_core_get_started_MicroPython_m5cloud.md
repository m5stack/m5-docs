# M5Cloud 上手指南(MicroPython) {docsify-ignore-all}

?> 如果您的设备还没烧录M5Cloud固件的话，请参考这篇文档[如果使用M5Burner烧录固件](/zh_CN/related_documents/how_to_burn_firmware).

?> 如果您是第一次使用这个Core或者想Core连接其他可联网的热点AP的话，请参考这篇文档[如果使用Core连接WIFI和M5Cloud](/zh_CN/related_documents/how_to_connect_wifi_using_core_with_m5cloud).

如果您的Core已经连接了可联网WIFI热点之后，屏幕会如下图显示，出现check code(check code用于M5Core设备与M5Cloud绑定)，下面开始M5Cloud的编程

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/check_code_on_m5stack.png">
</figure>

## 目录

1. [连接到M5Cloud](#连接到M5Cloud)

2. [绑定设备](#绑定设备)

3. [编程Core](#编程Core)


## 1. 连接到M5Cloud

如果您想用PC连编程M5Core的话，请在浏览器页面输入M5Core屏幕上显示的网址`cloud.m5stack.com`

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/register_page_m5cloud.png">
</figure>

然后，注册一个M5Cloud账号

## 2. 绑定设备


点击M5Cloud上`Device`->`Add`按钮，并输入check code到对话框。(看，我的check code是`052879`)

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/webIDE_binding_device_interface.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/WebIDE_check_code.png">
</figure>

这时候，您可以按照下面的步骤使用Python编程Core啦！

## 3. 编程Core

### a. 新建工程

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/new_a_faces_prj.png">
</figure>

### a. 开始编程

*现在我们以使用FACES Kit为举例如何使用M5Cloud。*

在创建新工程之后，新建文件，并重命名为`faces.py`。

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/add_file.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/rename_file.png">
</figure>

然后分别拷贝如下的代码到`faces.py`和`main.py`，并保存。

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


现在点击M5Cloud界面上的`Upload`按钮，如下图所示的操作。

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/upload_it.png">
</figure>

## 最后

这个FACES Kits的例程功能是，当您按下FACES面板上的某个按键之后，屏幕上会显示对应按键的值。

现在我按下QWERTY键盘上第一行的按键。("q", "w", "e", "r", "t", "y", "u", "i", "o", "p")

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/result.png">
</figure>