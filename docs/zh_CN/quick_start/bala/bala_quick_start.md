# BALA 上手指南

中文 | [English](en/quick_start/bala/bala_quick_start) | [日本語](ja/quick_start/bala/bala_quick_start)

!>为了使用M5Bala，需要M5Stack FIRE或M5GO（白色）。

## 准备

- 安装串行驱动程序 - [如何安装USB驱动并建立与PC的串口通讯](/zh_CN/related_documents/establish_serial_connection)

## 开发环境

1. [UiFlow编辑](#UiFlow编辑)
2. [Arduino IDE编辑](#Arduino-IDE编辑)

## UIFlow编辑

1. 烧录UiFlow的固件 - [如何通过M5Burner烧录固件](/zh_CN/related_documents/how_to_burn_firmware)
2. WiFi链接 - [如何使用M5Core连接可联网的WiFi热点](/zh_CN/related_documents/how_to_connect_wifi_using_core)
3. 检查弹簧针的位置，并将M5Core堆叠在M5Bala上
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

6. 转到[UiFlow](http://flow.m5stack.com/)网站并将模式从Blockly切换到Python
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

1. 安装Arduino IDE
2. 在Arduino IDE的设置board manager附加网址加`https://dl.espressif.com/dl/package_esp32_index.json`
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_add_board_manager_01.png" width="500">
</figure>
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_add_board_manager_02.png" width="500">
</figure>

1. 在Arduino IDE的板管理安装`esp32`库
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_search_esp32.png" width="500">
</figure>

1. 在Arduino IDE的库管理安装`m5stack`库
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_search_m5stack.png" width="500">
</figure>

5. 在Arduino IDE的库管理安装`NeoPixelBus`库
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_search_neopixelbus.png" width="500">
</figure>

1. 在Arduino IDE的库管理安装`MPU6050_tockn`库
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_search_mpu6050_tockn.png" width="500">
</figure>

7. 确保M5Core连接到PC，然后从`工具 - >串行端口`中选择适当的串行端口
8. 同样选择`M5Stack-Core-ESP32`或`M5Stack-Fire`板
9. 下载[M5Bala](https://github.com/m5stack/M5Bala.git)如果你不能使用Git，请从[这里](https://git-scm.com/download/win)安装
```shell
git clone --recursive https://github.com/m5stack/M5Bala.git
```
10. 在Arduino IDE上创建一个新文件，然后复制并粘贴`M5Bala/src/Default_firmware.ino`的内容
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_files.png" width="500">
</figure>

11. 在`Default_firmware.ino`的第89行注释掉`M5.setPowerBoostKeepOn(false);`
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_comment_out.png" width="500">
</figure>

12. 创建一个新选项卡，并以相同的方式复制和粘贴`M5Bala/src/M5Bala.cpp`的内容
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_newtab_01.png" width="500">
</figure>
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_newtab_02.png" width="500">
</figure>

13. 创建一个新选项卡，并以相同的方式复制和粘贴`M5Bala/src/M5Bala.h`的内容
14. 最后执行
<figure>
    <img src="assets/img/getting_started_pics/m5bala/bala_quick_start_burn.png" width="500">
</figure>