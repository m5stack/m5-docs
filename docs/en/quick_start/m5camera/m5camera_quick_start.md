# ESP32Cam/M5Camera Quick Start {docsify-ignore-all}

:clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Text-Tutorial)**

## Text Tutorial

With preloaded firmware, your ESP32Cam/M5Camera would run right after power on.
1. Power on the cable into ESP32Cam/M5Camera by USB cable.

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_unit/ESP32CAM_Terminal.webp">
</figure>


1. After waitting for a few seconds,  Wi-Fi scan a AP named "`M5CAM`" with your computer(or mobile phone), and connect it. 

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_unit/ESP32CAM_M5CAM.webp">
</figure>


1.  Open up the browser on the computer(or mobile phone), visit the URL `http://192.168.4.1`. At the moment, your can see the real-time transmission of video by ESP32Cam/M5Camera on the browser.

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_unit/ESP32CAM_Browser.webp">
</figure>


*Note:*

ESP32Cam/M5Camera AP can only connect with one device at a time.

## Video Tutorial

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/M5stack%20ESP32cam%20VS%20M5Camera%20(PSram)%20%20%20Setup.mp4" type="video/mp4">
</video>

## Example

### Firmware

- **[M5Camera](https://github.com/m5stack/M5Stack-Camera/tree/master/wifi/wifi_ap/firmware/M5Camera)**


### Code

 - **[Face recognition](https://github.com/m5stack/M5Stack-Camera/tree/master/face_recognize/firmware/M5Camera)**
 
 - **[Serial communication-M5Camera](https://github.com/m5stack/M5Stack-Camera/tree/master/uart/firmware/M5Camera)**

 - **[Serial communication-M5Core](https://github.com/m5stack/M5Stack-Camera/tree/master/uart/arduino)**（The serial communication routine is the communication between the camera and the M5Core.）

 - **[QRcode](https://github.com/m5stack/M5Stack-Camera/tree/master/qr)**

 - **[MPU6050](https://github.com/m5stack/M5Stack-Camera/tree/master/mpu6050/firmware/M5Camera)**（Gyro Example after soldering **MPU6050**）
 
### Source Code
 - **[M5Camera](https://github.com/m5stack/M5Stack-Camera)**