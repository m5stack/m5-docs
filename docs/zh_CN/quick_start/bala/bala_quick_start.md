# BALA 上手指南 {docsify-ignore-all}

!>为了使用M5Bala，需要M5Stack FIRE或M5GO（白色）。

<img src="assets/img/product_pics/app/bala_4.jpg" width="250" height="250">

## 准备

- 安装串行驱动程序 - [如何安装USB驱动并建立与PC的串口通讯](/zh_CN/related_documents/establish_serial_connection)

## 开发环境

1. [UIFlow编辑](#UIFlow编辑)
2. [Arduino IDE编辑](#Arduino-IDE编辑)

## UIFlow编辑

1. 烧录UIFlow的固件 - [如何通过M5Burner烧录固件](/zh_CN/related_documents/how_to_burn_firmware)
2. WiFi链接 - [如何使用M5Core连接可联网的WiFi热点](/zh_CN/related_documents/how_to_connect_wifi_using_core)
3. 检查弹簧针POGO Pin的位置，并将M5Core堆叠在M5Bala上
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_pogopin.jpg" width="500">
</figure>

4. 按M5Core旁边的红色按钮启动（连续点击两次时关闭电源）
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_power_switch.jpg" width="500">
</figure>

1. 按M5Bala旁边的按钮启动（连续点击两次时关闭电源）
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_bala_power_switch.jpg" width="500">
</figure>
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_indicator.jpg" width="500">
</figure>

6. 转到[UIFlow](http://flow.m5stack.com/)网站并将模式从Blockly切换到Python
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_uiflow_01.png" width="500">
</figure>

7. 粘贴以下代码并执行它以平衡

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

1. 搭建M5Stack的Arduino IDE开发环境 - [搭建M5Stack的开发环境](/zh_CN/related_documents/establish_serial_connection) - [Get Started with Ardino IDE](zh_CN/quick_start/m5core/m5stack_core_quick_start)

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_18.png">

2. 在Arduino IDE的库管理安装`m5stack`库

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_19.png">

3. 在Arduino IDE的库管理安装`NeoPixelBus`库

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_20.png">

4. 在Arduino IDE的库管理安装`MPU6050_tockn`库

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_21.png">

5. 确保M5Core连接到PC，然后从`工具 - >串行端口`中选择适当的串行端口
6. 同样选择`M5Stack-Core-ESP32`或`M5Stack-Fire`板

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_22.png">

7. 下载 **[M5Bala](https://github.com/m5stack/M5Bala.git)**，如果您不能使用Git，请从[这里](https://git-scm.com/download/win)安装

```shell
git clone --recursive https://github.com/m5stack/M5Bala.git
```

8. 点击 `Sketch` -> `Include Library` -> `Add .ZIP Library...`，然后选择刚刚clone下来的 `M5Bala`。

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_14.png">

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_15.png">

9. 打开 bala 的例程: 点击 `File` -> `Examples` -> `M5Bala` -> `Basic`，选择例程 `Basic`。（注意：example `Default_firmware` 存在BUG，暂时不可用。）

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_16.png">

10. 执行

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_23.png">

<img src="assets/img/product_pics/app/bala_3.jpg" width="500" height="500">