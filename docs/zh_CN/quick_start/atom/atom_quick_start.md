# Atom UIFlow上手指南 {docsify-ignore-all}

## 目录

**[1. 菜单选项介绍](#菜单选项介绍)**

**[2. 灯光状态含义](#灯光状态含义)**

**[3. 菜单使用方法](#使用方法)**

**[4. UIFlow示例](#UIFlow示例)**


## 菜单选项介绍

>呼吸灯不同颜色状态代表不同菜单选项

<img src="assets/img/product_pics/core/minicore/atom/atom_00.jpg" width="50%">

- 绿灯  **UIFlow 在线编程模式**

- 蓝灯  **USB 模式**

- 黄灯  **配置 WIFI 模式**

- 紫灯  **APP 运行模式**

## 灯光状态含义

- 红灯闪烁表示WIFI网络正在连接

- 红灯常亮表示WIFI连接失败，按下中间按键可重新连接

- 绿灯闪烁表示UIFLow服务器连接正常

- 蓝灯常亮表示UIFlow服务器未正常连接

- 蓝灯闪烁表示已进入USB模式

- 黄灯常亮表示需要WEB网络配置 

## 使用方法

1. 烧录完UIFlow固件设备会自动连接M5Bunner中填入的WIFI信息，如果连接失败可尝试按下中间按键再次连接，如果仍然失败可尝试手动重新配网。

2. 设备通电默认进入最后一次选择的模式，如需改变模式，只需在上电的同时（或重启时）按住中间按键不要松开，菜单模式以呼吸灯形式变色，等到灯光变换为所需模式颜色时再松开。例如需要手动重新配置WIFI，设备上电或重启时按住中间按键不放，直到显示黄色呼吸灯时松开，此时黄灯常亮即进入WIFI配置模式。

<img src="assets/img/product_pics/core/minicore/atom/configure_wifi.jpg" width="60%" height="60%">

3. 在WIFI配置模式下，Atom会自动发出WIFI热点，比如M5Stack-XXXX，连接此WIFI并打开浏览器输入192.168.4.1进入web配置页面，输入SSID和密码进行网络连接，此时红灯闪烁，连接成功后蓝灯短暂常亮(UIFlow服务器未连接)待到绿灯闪烁时表示UIFlow服务器连接正常，此时可进行在线编程。

4.  通过Web配置页面和串口工具可以看到APIkey。

<img src="assets/img/product_pics/core/minicore/atom/apikey.png" width="50%" height="50%"><img src="assets/img/product_pics/core/minicore/atom/serialtool.png" width="50%" height="50%">

<br>

### UIFlow示例

- AtomMatrix

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_example.png" width="50%" height="50%">

- [Matrix Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Matrix)

<br>

- AtomLite

<img src="assets/img/product_pics/core/minicore/atom/atom_lite_example.png" width="50%" height="50%">

- [Lite Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Lite)



<!-- <div class="platform-box">
  <div class="platform-item">
    <img src="assets\img\arduino-card.jpg" width="300px">
    <a href="#zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_Windows">
      <h3>Arduino IDE</h3>
      <div class="platform-tag"></div>
    </a>
  </div>
  <div class="platform-item">
    <img src="assets\img\uiflow-card.jpg" width="300px">
    <a href="#/zh_CN/uiflow/introduction">
      <h3>UIFlow</h3>
      <div class="platform-tag"></div>
    </a>
  </div>
</div> -->