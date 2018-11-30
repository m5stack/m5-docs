# M5Cloud Quick Start(MicroPython)

[中文](zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython_m5cloud) | [English](en/quick_start/m5core/m5stack_core_get_started_MicroPython_m5cloud) | 日本語

?> **Note** *If it's first time to use M5Core or you want to change the networkable AP that means the Core can't access [http://cloud.m5stack.com](http://cloud.m5stack.com), you need visit this article for setting wifi [How to connect wifi using Core with M5Cloud](/en/related_documents/how_to_connect_wifi_using_core_with_m5cloud).*

*By default, we consider your M5Core has been connected with the networkable AP successfully. And the screen shows like this figure below.*

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/check_code_on_m5stack.png">
</figure>

## CONTENT

1. [Connect to M5Cloud](#connect-to-m5cloud)

2. [Binding device](#binding-device)

3. [Program with Core](#program-with-Core)


## 1. Connect to M5Cloud

Now If you want to program the M5 from your computer, enter the url shown at the top of the screen `cloud.m5stack.com`

It will show as following figure.

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/register_page_m5cloud.png">
</figure>

Now, register a account.

## 2. Binding device

Press `Device`->`Add` buttom on M5Cloud IDE for binding M5Stack board to your account.(Now, my check code is `052879`)

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/webIDE_binding_device_interface.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/WebIDE_check_code.png">
</figure>

At the moment, you can program it through Python as shown below.

## 2. Program with Core

### a. New a Project

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/new_a_faces_prj.png">
</figure>

### a. Code it

*Now, let's get started with FACES Kit.*

After creating a new project, add a file named `faces.py` as a python module.

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/add_file.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/rename_file.png">
</figure>

Then copy following code into faces.py and main.py, and save they.

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


Now, upload and run it!

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/upload_it.png">
</figure>

## Complete

The function of This demostration is that screen and serial terminal will display the value of the key you pressed.

Now, I press the first line of QWERTY Keyboard. ("q", "w", "e", "r", "t", "y", "u", "i", "o", "p")

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_m5cloud/result.png">
</figure>