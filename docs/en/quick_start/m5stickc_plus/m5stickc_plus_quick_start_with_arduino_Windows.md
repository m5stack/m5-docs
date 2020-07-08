# M5StickC PLUS Arduino IDE Development{docsify-ignore-all}


1. [Install Arduino-IDE](#Install-Arduino-IDE)

2. [Install ESP32 Board](#Install-ESP32-Board)

3. [Install M5StickC Library](#Install-M5Stack-Library)

4. [Install USB Driver](#Install-USB-Driver)

5. [ArduinoAPI](#ArduinoAPI)

## Install Arduino-IDE


>[Click here to visit Arduino's official website](https://www.arduino.cc/en/Main/Software),Select the installation package for your own operating system to download.


<img src="assets/img/related_documents/Arduino_IDE/Arduino_install.webp">


## Install ESP32 Board

>1.Open up Arduino IDE, navigate to `File`->`Peferences`->`Settings`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_1.webp">

>2.Copy the following ESP32 Boards Manager url to `Additional Boards Manager URLs:`

**https://dl.espressif.com/dl/package_esp32_index.json**

<img src="assets/img/related_documents/Arduino_IDE/Arduino_2.webp">

>3.Navigate to `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_3.webp">

>4.Search `ESP32` in the pop-up window, find it and  click `Install`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_4.webp">

>5.select `Tools`->`Board:`->`ESP32`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_11.webp">

## Install M5StickC Library

>Different hardware devices, with different case libraries, please choose to download according to the device you use..Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_6.webp">

?>Search `M5StickC` , find it and click `Install`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_8.webp">

# ArduinoAPI


|||
|:---:|:---:|
|**[System](en/api/system_m5stickc)** | **[Power Management(AXP192)](en/api/axp192_m5stickc)** |
|**[TFT Screen](en/api/lcd_m5stickc)** | **[IMU](en/api/imu)** |
|**[RTC](en/api/rtc)**|**[PWM](en/api/pwm)**|
