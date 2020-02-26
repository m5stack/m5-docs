# Atom UIFlow上手指南 {docsify-ignore-all}

## 目录

**[1. 菜单选项介绍](#菜单选项介绍)**

**[2. 灯光状态含义](#灯光状态含义)**

**[3. 菜单使用方法](#使用方法)**

**[4. UIFlow示例](#UIFlow示例)**


## 菜单选项介绍

- 黄灯

**配置WIFI模式**

<img src="assets/img/product_pics/core/minicore/atom/atom_01.jpg" width="30%">




- 绿灯

**UIFlow在线模式**

<img src="assets/img/product_pics/core/minicore/atom/atom_02.jpg" width="30%">



- 紫灯

**APP运行模式**

<img src="assets/img/product_pics/core/minicore/atom/atom_03.jpg" width="30%">



- 蓝灯

**USB模式**

<img src="assets/img/product_pics/core/minicore/atom/atom_04.jpg" width="30%">




## 灯光状态含义

- 红灯闪烁表示WIFI网络正在连接

- 红灯常亮表示WIFI连接失败，按下中间按键可重新连接

- 绿灯闪烁表示UIFLow服务器连接正常

- 蓝灯常亮表示UIFlow服务器未正常连接

- 蓝灯闪烁表示已进入USB模式

- 黄灯常亮表示需要WEB网络配置 

## 使用方法

1.	烧录完UIFlow固件设备默认进入WEB配网模式（黄灯常亮），此时Atom会自动发出WIFI热点，比如M5Stack-XXXX，连接此WIFI并打开浏览器输入192.168.4.1进入web配置页面，输入SSID和密码进行网络连接，此时红灯闪烁，连接成功后蓝灯短暂常亮(UIFlow服务器未连接)待到绿灯闪烁时表示UIFlow服务器连接正常，此时可进行在线编程。
<br>

2.	设备通电默认进入最后一次选择的模式，如需改变模式，只需在上电时（或重启时）按住中间按键不要松开，菜单模式以灯光的形式自动滚动，等到灯光变换为所需模式颜色时再松开。例如需要重新配置WIFI，设备上电或重启时按住中间按键不放，直到显示黄色呼吸灯时松开，此时即进入WIFI配置模式。
<br>

### UIFlow示例




