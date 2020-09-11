# BALA2 Quick Start {docsify-ignore-all}

?>M5Bala2 has been calibrated , if you need to recalibrate, follow the steps below.

1. Place BALA2 on a horizontal desktop and keep it turned off.

2. Press and hold the middle key (ButtonB) and the red button on the left at the same time, and let go immediately after the screen lights up. At this time, IMU data will be obtained. Please do not touch them during this time.

3. After the data acquisition is completed, it will automatically enter the calibration mode interface. Press the left/right(ButtonA/ButtonC) key to increase or decrease the correction value. When the value is adjusted to a satisfactory value, press the B key to save the parameter.

4. Restart, BALA2 will run the saved parameters.

## Development Environment

[Arduino IDE](#Arduino-IDE)

## Arduino IDE

1. [Mac]Refer to this tutorial to configure Arduino IDE(#/zh_CN/arduino/arduino_development.md)
   [Windows]Refer to this tutorial to configure Arduino IDE(#/zh_CN/arduino/arduino_development.md)

2. [Download the Example program](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Application/Bala2)

3. Open the example code in Arduino

4. Make sure that BALA2 has connected to PC, then click `Tools` -> `Port` for selecting the corresponding serial port on Arduino IDE..

5. click `Tools` -> `Board: ` to select `M5Stack-Core-ESP32`.

6. Compile and upload.

## Use of servo

**Bala::SetServoAngle(uint8_t pos, uint8_t angle)**

uint8_t pos servo number(1 - 8),Among them, No. 5 - 8 servos are inside the BALA2 base

uint8_t angle servo angle

**Bala::SetServoPulse(uint8_t pos, uint16_t width)**

uint8_t pos servo number(1 - 8)，Among them, No. 5 - 8 servos are inside the BALA2 base

uint16_t width pulse width

**For the use of M5Stack, please refer to [M5Stack GRAY](https://docs.m5stack.com/#/zh_CN/core/gray)**