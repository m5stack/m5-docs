# ESP32Cam/M5Camera Quick Start {docsify-ignore-all}

:clapper: **[视频教程](#视频教程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[文本教程](#文本教程)**

## 文本教程

*这是一个开箱即用的例程，摄像头模块预置了这个例程。*

*如果你拿到摄像头模块之后，不需要写任何代码即可能看到摄像头拍摄的图像。*

1. 向 ESP32Cam/M5Camera 插入 USB 线以供电，然后打开电脑的串口终端。

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_unit/ESP32CAM_Terminal.png">
</figure>


2. 等待几秒之后，用电脑连接名为 `M5CAM` 的热点。

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_unit/ESP32CAM_M5CAM.png">
</figure>


3. 打开浏览器，访问网址`http://192.168.4.1`。 此时，即可看到 ESP32Cam/M5Camera 实时传输的图像。

<figure>
    <img src="assets/img/getting_started_pics/get_started_with_unit/ESP32CAM_Browser.png">
</figure>

*注意:*

ESP32Cam/M5Camera 的热点一次只能连接一台电脑

## 视频教程

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/M5stack%20ESP32cam%20VS%20M5Camera%20(PSram)%20%20%20Setup.mp4" type="video/mp4">
</video>

## 固件

ESP32Cam 固件地址：https://github.com/m5stack/m5stack-cam-psram/tree/NoPsram

M5Camera 固件地址 (A model)：https://github.com/m5stack/m5stack-cam-psram/tree/master

M5Camera 固件地址 (B model)：https://github.com/m5stack/m5stack-cam-psram/tree/master

M5CameraX 固件地址：https://github.com/m5stack/m5stack-cam-psram/tree/master

M5CameraF 固件地址：https://github.com/m5stack/m5stack-cam-psram/tree/FishEye