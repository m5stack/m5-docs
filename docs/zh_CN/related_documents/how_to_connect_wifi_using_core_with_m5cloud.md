# 如何连接WIFI (For M5Cloud) {docsify-ignore-all}

?> *如果您的M5Cloud还没预先烧录名为`M5Cloud`固件的话，请阅读这篇文章[如何烧录使用M5Burner烧录固件](zh_CN/related_documents/how_to_burn_firmware)*

**重启M5Core之后，您会看到M5Core出现下图界面。现在我们就开始连接WIFI吧**

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/m5stack_connet_wifi.png">
</figure>

## 目录

1. [连接M5Core的热点](#connect-to-m5Core-AP)

2. [选择可联网的WIFI热点](#select-networkable-ap)

3. [重启M5Core](#reset-your-device)

## 1. 连接M5Core的热点

**使用手机或者PC连接M5Core发出的热点AP(看，现在我的M5Core发出的热点名是`M5Stack-a67c`)**

## 2. 选择可联网的WIFI热点

**打开浏览器并输入网址`192.168.4.1`，然后选择可联网的WIFI，并输入其密码(如下图，我的WIFI名字是`MasterHax_2.4G`)**

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/wifisetup.png">
</figure>

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/wifi_connect_successfully.png">
</figure>

?> 如果您的M5Core没成功连接WIFI，请重试一次.

## 3. 重启M5Core

**在M5Core成功连接WIFI之后，重启您的Core**

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/check_code_on_m5stack.png">
</figure>

!> **Note** 可是如果您的Core之前绑定过M5Cloud账号(也就是之前有过将check code输入到[M5Cloud](http://cloud.m5stack.com))，这时M5Core屏幕会如下图所示。

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/connected_wifi_m5cloud_been_bound.png">
</figure>

## 最后

现在，您可以阅读这篇文章开始使用M5Cloud编程啦！[M5Cloud上手指南](zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython_m5cloud)
