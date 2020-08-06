# BALA2 Quick Start {docsify-ignore-all}

?>To program M5Bala2, you will need M5Stack Gray as main controller.

<img src="assets/img/product_pics/app/bala_4.webp" width="250" height="250">

## Prepare Install serial port driver

### For Windows

>Unzip the downloaded CP210X driver compression package, select the installation program corresponding to your operating system, and double-click to install.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/CP210X_WIN.webp">

### For Mac

>Unzip the downloaded CP210X driver compression package, install the program, and double-click the image file to start the installation.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/CP210X_MAC.webp">

## Development Environment

1. [UIFlow](#UIFlow)
2. [Arduino IDE](#Arduino-IDE)

## UIFlow

1. 

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_pogopin.webp" width="50%" height="50%">

1. Press the Red button on side of M5Core (double click for shutdown).

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_power_switch.webp" width="50%" height="50%">

1. Press the button on side of M5Bala bottom to power on (double click for shutdown).

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_bala_power_switch.webp" width="50%" height="50%">

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_indicator.webp" width="50%" height="50%">

6. Open [UIFlow](http://flow.m5stack.com/) website, and switch programming language from `Blockly` to `Python`.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_uiflow_01.webp">

7. Copy the following code to UIFlow and then click `Download`.

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

1. Setting Arduino development environment - [Establish Serail Connection](https://docs.m5stack.com/#/en/related_documents/establish_serial_connection) - [Get Started with Ardino IDE](https://docs.m5stack.com/#/en/quick_start/m5core/m5stack_core_quick_start)

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_18.webp">

2. Install `m5stack` library in `Library Manager`.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_19.webp">

3. Install `NeoPixelBus` library in `Library Manager`.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_20.webp">

4. Install `MPU6050_tockn` library in `Library Manager`.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_21.webp">

5. Make sure that M5Core has connected to PC, then click `Tools` -> `Port` for selecting the corresponding serial port on Arduino IDE.

6. click `Tools` -> `Board: ` to select `M5Stack-Core-ESP32` or `M5Stack-Fire`.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_22.webp">

7. Clone **[M5Bala](https://github.com/m5stack/M5Bala.git)** by shell command. *If you dont't have Git installed  yet, click [here](https://git-scm.com/download/win)  and install it.*

```shell
git clone --recursive https://github.com/m5stack/M5Bala.git
```

8. Click `Sketch` -> `Include Library` -> `Add .ZIP Library...` . select `M5Bala` you just cloned from github.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_14.webp">

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_15.webp">

9. Open a bala example: Click `File` -> `Examples` -> `M5Bala` -> `Basic`.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_16.webp">

10. Compile and upload.

<img src="assets/img/getting_started_pics/m5bala/bala_quick_start_23.webp">

<img src="assets/img/product_pics/app/bala_3.webp" width="500" height="500">