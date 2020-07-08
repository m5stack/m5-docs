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

>5.选择 `工具`->`开发板:`->`ESP32`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_11.webp">

## 安装M5StickC的库

>不同的硬件设备，有着不同的案例程序库，请根据你所使用的设备选择下载.打开 Arduino IDE, 然后选择 `项目`->`加载库`->`库管理...`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_6.webp">

?>搜索 `M5StickC` 并安装，如下图所示

<img src="assets/img/related_documents/Arduino_IDE/Arduino_8.webp">

## ArduinoAPI

|||
|:---:|:---:|
|**[System](zh_CN/api/system_m5stickc)** | **[AXP192](zh_CN/api/axp192_m5stickc)** |
|**[TFT 屏](zh_CN/api/lcd_m5stickc)** | **[IMU](zh_CN/api/imu)** |
|**[RTC](zh_CN/api/rtc)**             |**[PWM](zh_CN/api/pwm)**|