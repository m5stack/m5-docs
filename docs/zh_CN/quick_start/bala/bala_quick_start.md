# BALA 上手指南 {docsify-ignore-all}

!>为了使用M5Bala，需要M5Stack FIRE或M5GO（白色）。

<img src="assets/img/product_pics/app/bala_4.jpg" width="250" height="250">

## 准备

- [安装USB驱动并建立与PC的串口通讯](https://docs.m5stack.com/#/zh_CN/related_documents/establish_serial_connection)

## 开发环境

1. [UIFlow编辑](#UIFlow编辑)
2. [Arduino IDE编辑](#Arduino-IDE编辑)

## UIFlow编辑

1. [烧录 UIFlow 固件](zh_CN/related_documents/M5Burner)
2. [配置 Wi-Fi 连接](zh_CN/related_documents/Setting_WIFI)
3. 将 POGO Pin 弹簧针堆叠放置在 M5Bala 底座上.

<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_pogopin.jpg" width="500">
</figure>

4. 单击M5Core侧边的红色按键开机（快速双击为关机）.

<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_power_switch.jpg" width="500">
</figure>

5. 单击M5Bala底座的按键启动电源（连续点击两次时关闭电源）.

<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_bala_power_switch.jpg" width="500">
</figure>
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_indicator.jpg" width="500">
</figure>

6. 访问 [UIFlow](http://flow.m5stack.com/) , 将编程模式`Blockly` 切换至 `Python`.

<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_uiflow_01.png" width="500">
</figure>

7. 复制粘贴以下代码，并执行程序.

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

1. -[建立串口连接](https://docs.m5stack.com/#/zh_CN/related_documents/establish_serial_connection) - [安装 Arduino IDE](https://docs.m5stack.com/#/zh_CN/quick_start/m5core/m5stack_core_quick_start)

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_18.png">

2. 在Arduino IDE的库管理安装`m5stack`库

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_19.png">

3. 在Arduino IDE的库管理安装`NeoPixelBus`库

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_20.png">

4. 在Arduino IDE的库管理安装`MPU6050_tockn`库

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_21.png">

5. 将M5Core连接至电脑.点击`Tools`->`Port`中选择设备使用的串行端口.

6. 开发板`Board`选项选择`M5Stack-Core-ESP32`或`M5Stack-Fire`.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_22.png">

7. 使用Shell命令下载 **[M5Bala案例程序](https://github.com/m5stack/M5Bala.git)** . *如果你还未安装Git, [请点击此处](https://git-scm.com/download/win) 进行下载.*

```shell
git clone --recursive https://github.com/m5stack/M5Bala.git
```

8. 点击 `Sketch` -> `Include Library` -> `Add .ZIP Library...` . 选择下载好的 `M5Bala` 的文件

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_14.png">

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_15.png">

9. 打开 BALA 程序案例: 点击 `File` -> `Examples` -> `M5Bala` -> `Basic`.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_16.png">

10. 编译并上传程序.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_23.png">

<img src="assets/img/product_pics/app/bala_3.jpg" width="500" height="500">