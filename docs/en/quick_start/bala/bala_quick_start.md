# BALA Quick Start

!>For building a M5Bala program, you need prepare M5Stack Fire or M5GO White as master.

<img src="assets/img/product_pics/app/bala_4.jpg" width="250" height="250">

## Prepare

- Install Serial Driver - [How to Establish Serial Connection](en/related_documents/establish_serial_connection)

## Development Environment

1. [UIFlow](#UIFlow)
2. [Arduino IDE](#Arduino-IDE)

## UIFlow

1. Burn [UIFlow](http://flow.m5stack.com) firmware - [How to Burn Firmware](en/related_documents/how_to_burn_firmware)
2. WiFi connection - [How to Connect wifi using Core](en/related_documents/how_to_connect_wifi_using_core)
3. Find the location of POGO Pin, and stack M5Core over M5Bala wheel.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_pogopin.jpg" width="50%" height="50%">

4. Click the Red button on the side of M5Core (double click for shutdown).

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_power_switch.jpg" width="50%" height="50%">

5. Click the button on the side of M5Bala Wheel for power on (double click for shutdown).

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_bala_power_switch.jpg" width="50%" height="50%">

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_indicator.jpg" width="50%" height="50%">

6. Open [UiFlow](http://flow.m5stack.com/) website, and switch programming language from `Blockly` to `Python`.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_uiflow_01.png">

7. Copy the following code to UIFlow and then click `Download` for running it.

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

## Arduino IDE

1. Setting Arduino development environment - [Establish Serail Connection](en/related_documents/establish_serial_connection) - [Get Started with Ardino IDE](en/quick_start/m5core/m5stack_core_quick_start)

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_18.png">

2. Install `m5stack` library in `Library Manager` of Arduino IDE.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_19.png">

3. Install `NeoPixelBus` library in `Library Manager` of Arduino IDE.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_20.png">

4. Install `MPU6050_tockn` library in `Library Manager` of Arduino IDE.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_21.png">

5. Confirm that M5Core has connected to PC successfully, then click `Tools` -> `Port` for selecting the corresponding serial port on Arduino IDE.

6. click `Tools` -> `Board: ` for selecting `M5Stack-Core-ESP32` or `M5Stack-Fire` on Arduino IDE.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_22.png">

7. Clone **[M5Bala](https://github.com/m5stack/M5Bala.git)**, If you has not installed Git yet, click [here](https://git-scm.com/download/win) for downloading please and install it.

```shell
git clone --recursive https://github.com/m5stack/M5Bala.git
```

8. Click `Sketch` -> `Include Library` -> `Add .ZIP Library...` for select `M5Bala` which has been cloned just now.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_14.png">

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_15.png">

9. Open a bala example: Click `File` -> `Examples` -> `M5Bala` -> `Basic`. (Be careful that example `Default_firmware` has bug.)

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_16.png">

10. Execute

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_23.png">

<img src="assets/img/product_pics/app/bala_3.jpg" width="500" height="500">