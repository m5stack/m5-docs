# M5StickC PLUS Arduino IDE 环境搭建{docsify-ignore-all}


1. [安装Arduino-IDE](#安装Arduino-IDE)

2. [安装ESP32的板管理](#安装ESP32的板管理)

3. [安装M5Stack的库](#安装M5Stack的库)

4. [安装串口驱动](#安装串口驱动)

5. [ArduinoAPI](#ArduinoAPI)

## 安装Arduino-IDE


>[点击此处访问 Arduino 官网](https://www.arduino.cc/en/Main/Software),选择对应自己操作系统的安装包进行下载.


<img src="assets/img/related_documents/Arduino_IDE/Arduino_install.webp">


## 安装ESP32的板管理

>1.打开 Arduino IDE，选择 `文件`->`首选项`->`设置`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_1.webp">

>2.复制下方的 ESP32 板管理网址到 `附加开发板管理器:` 中

**https://dl.espressif.com/dl/package_esp32_index.json**

<img src="assets/img/related_documents/Arduino_IDE/Arduino_2.webp">

>3.选择 `工具`->`开发板:`->`开发板管理器...`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_3.webp">

>4.在新弹出的对话框中，输入并搜索 `ESP32`，点击`安装`（若出现搜索失败的情况，可以尝试重启Arduino程序）

<img src="assets/img/related_documents/Arduino_IDE/Arduino_4.webp">

>5.选择 `工具`->`开发板:`->`M5Stick-C`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_11.webp">

## 安装M5StickC-Plus的库

>到此页面下载M5StickCPlus的库[M5StickCPlus](https://github.com/m5stack/M5StickC-Plus) ，添加 "M5StickC-Plus.zip"到库管理器中

<img src="assets/img/related_documents/Arduino_IDE/Arduino_55.webp">

<img src="assets/img/related_documents/Arduino_IDE/Arduino_22.webp">

<img src="assets/img/related_documents/Arduino_IDE/Arduino_33.webp">

>从例程中找到M5StickCPlus

<img src="assets/img/related_documents/Arduino_IDE/Arduino_44.webp">

## ArduinoAPI

|||
|:---:|:---:|
|**[System](zh_CN/api/system_m5stickc)** | **[AXP192](zh_CN/api/axp192_m5stickc)** |
|**[TFT 屏](zh_CN/api/lcd_m5stickc)** | **[IMU](zh_CN/api/imu)** |
|**[RTC](zh_CN/api/rtc)**             |**[PWM](zh_CN/api/pwm)**|