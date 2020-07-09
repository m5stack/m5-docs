# BALA2 上手指南 {docsify-ignore-all}

!>为了使用M5Bala2，需要M5Stack Gray。

<img src="assets/img/product_pics/app/bala_4.webp" width="250" height="250">

## 开发环境

1. [UIFlow编辑](#UIFlow编辑)
2. [Arduino IDE编辑](#Arduino-IDE编辑)

## UIFlow编辑

1. [安装驱动并烧录 UIFlow 固件](https://docs.m5stack.com/#/en/quick_start/m5core/m5stack_core_get_started_MicroPython)参考此教程烧录固件

<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_pogopin.webp" width="500">
</figure>

2. 单击M5Core侧边的红色按键开机（快速双击为关机）.

<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_power_switch.webp" width="500">
</figure>

3. 访问 [UIFlow](http://flow.m5stack.com/) , 将编程模式`Blockly` 切换至 `Python`.

<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_uiflow_01.webp" width="500">
</figure>

4. 复制粘贴以下代码，并执行程序.

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

## Arduino IDE编辑

1. [Mac用户]参考此教程配置Arduino IDE(#/zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS.md)
   [Windows用户]参考此教程配置Arduino IDE(#/en/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS.md)

2. 在Arduino中

7. 使用Shell命令下载 **[M5Bala案例程序](https://github.com/m5stack/M5Bala.git)** . *如果你还未安装Git, [请点击此处](https://git-scm.com/download/win) 进行下载.*

```shell
git clone --recursive https://github.com/m5stack/M5Bala.git
```

8. 点击 `Sketch` -> `Include Library` -> `Add .ZIP Library...` . 选择下载好的 `M5Bala` 的文件

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_14.webp">

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_15.webp">

9. 打开 BALA 程序案例: 点击 `File` -> `Examples` -> `M5Bala` -> `Basic`.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_16.webp">

10. 编译并上传程序.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_23.webp">

<img src="assets/img/product_pics/app/bala_3.webp" width="500" height="500">