# Atom UIFlow上手指南 {docsify-ignore-all}

## UIFlow 在线编程模式

1. 下载[M5Bunner_Beta](https://m5stack.com/pages/download)，并按照[该页面](https://docs.m5stack.com/#/en/uiflow/introduction_atom)烧录UIFlow固件.

2. (如果你已经在烧录时已经输入了SSID和密码可跳过该WIFI配置步骤)设备上电或重启的同时按住中间按键不放，直到显示黄色呼吸灯时松开，此时黄灯常亮即进入WIFI配置模式.

<img src="assets/img/product_pics/core/minicore/atom/configure_wifi.webp" width="60%" height="60%">

在WIFI配置模式下，Atom会自动发出WIFI热点，比如M5Stack-XXXX，连接此WIFI并打开浏览器输入192.168.4.1进入WiFi配置页面，输入SSID和密码进行网络连接（此步骤记下M5FLOW-**XXXXXXXX**稍后会用到），此时红灯闪烁，连接成功后蓝灯短暂常亮(UIFlow服务器未连接)待到绿灯闪烁时表示UIFlow服务器连接正常，此时可进行在线编程。

<img src="assets/img/product_pics/core/minicore/atom/01light.webp" width="60%" height="60%">

如果WiFi已经连接入网但是没有连接上UIFlow服务器（蓝灯常亮）

<img src="assets/img/product_pics/core/minicore/atom/02light.webp" width="60%" height="60%">

或者如果WiFi连接网络失败（红灯常亮），则尝试按下中间按键重新连接网络或重启设备.

<img src="assets/img/product_pics/core/minicore/atom/04light.webp" width="60%" height="60%">


<!--
?> 灯光状态含义

- 红色呼吸灯表示WIFI网络正在连接

- 红灯常亮表示WIFI连接失败，按下中间按键可重新连接

- 绿色呼吸灯表示UIFLow服务器连接正常

- 蓝灯常亮表示UIFlow服务器未正常连接

- 蓝色呼吸灯表示已进入USB模式

- 黄灯常亮表示需要WEB网络配置 

-->

3 . 根据[此页面](https://docs.m5stack.com/#/zh_CN/uiflow/introduction_atom)教程通过M5Burn查看APIKey.

<img src="/image/base/APIKEY.webp " width="50%">

4 . 完成上述配置你已经可以正常使用[UIFlow在线编程模式](http://flow.m5stack.com). UIFlow的详细使用参考[此页面](https://docs.m5stack.com/#/zh_CN/uiflow/uiflow_home_page).


## UIFlow离线编程模式

1. 下载[M5Bunner](https://m5stack.com/pages/download)，并按照此教程烧录完UIFlow固件[UIFlow introduction](https://docs.m5stack.com/#/en/uiflow/introduction).

2. 设备上电或重启的同时按住中间按键不放，直到显示蓝色呼吸灯时松开，此时蓝色灯常亮即进入UIFlow离线编程模式.

<img src="assets/img/product_pics/core/minicore/atom/03light.webp" width="60%" height="60%">


## 菜单选项介绍

设备上电或重启时按住中间按键不放可进入不同模式，LED灯不同颜色代表进入不同的模式，松开按键即进入相应模式.

<img src="assets/img/product_pics/core/minicore/atom/atom_00.webp" width="50%">


- 绿灯  **UIFlow 在线编程模式**

- 蓝灯  **UIFlow 离线编程模式**

- 黄灯  **配置 WIFI 模式**

- 紫灯  **运行最后一次下载的程序**

<br>

### UIFlow示例

- AtomMatrix

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_example.webp" width="50%" height="50%">

- [Matrix Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Matrix)

<br>

- AtomLite

<img src="assets/img/product_pics/core/minicore/atom/atom_lite_example.webp" width="50%" height="50%">

- [Lite Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Lite)


<script>

   anchor_search();
   scrollFunc();

</script>