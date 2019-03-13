# 常见问题解答 {docsify-ignore-all}

**[主控](#主控)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[单元](#单元)**

<!-- **[主控](#主控)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[模块](#模块)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[底座](#底座)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[单元](#单元)** -->

## 主控

- **Q1: 这些 M5Core 之间有什么区别？M5Stick 之间也有什么区别？**

    这些主控主要区别在内部硬件配置和套件搭配上，从基础版到升级版，分别是增加了姿态传感器 MPU9250和加大了 RAM 和 FLASH，具体区别请访问[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。

    <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_zh_CN.png">

    <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_zh_CN.png">

- **Q2: 如何关闭 M5Core 的喇叭功能？**

    在 Arduino 程序的 Setup(){} 中执行以下语句

    ```arduino
    dacWrite(M5STACKFIRE_SPEAKER_PIN, 0);
    ```

- **Q3: 有些模块与 M5Core 堆叠之后不能下载程序，比如 USB 模块与 M5Core 堆叠**

    可能是堆叠之后，M5-Bus 总线上的引脚 GPIO0 与 M5Core 接触不太好。这种情况下，在下载程序的时候，GPIO0 理应会一直保持低电平的，可是因为接触不好，GPIO0 不能一直保持低电平，所以下载失败。

    **解决方案：**在下载过程中，手动让 GPIO0 连接 GND，保证足够长时间拉低。

- **Q4: M5GO 底座堆叠了 M5Core 之后，M5Core 不能开机，可是测试了底座电池满电。**

    可能是堆叠之后，底座上的 M5-Bus 总线上的左下角的引脚 BATTERY 与 M5Core 接触不太好，这是生产时焊接位置偏了导致的。总线排针焊接位置稍微偏了一些之后，容易出现 BATTERY 引脚与 M5Core 接触不好。

    **解决方案：**重新焊接 M5-Bus 总线排针，排针位置必须严格与焊盘位置吻合。

- **Q5: 有的电脑虽然连接上了主控，可是仍然无法使用 Arduino IDE、ESPFlashDownloadTool 或 M5Burner 来烧录程序。例如下图使用 Arduino IDE 的时候的情况。**

    <img src="assets/img/faq/faq_03.png">

    <!-- 可能是堆叠之后，底座上的 M5-Bus 总线上的左下角的引脚 BATTERY 与 M5Core 接触不太好，这是生产时焊接位置偏了导致的。总线排针焊接位置稍微偏了一些之后，容易出现 BATTERY 引脚与 M5Core 接触不好。 -->

    **原因和解决方案：**可能是因为这些串口的供电电流不够大，需要在主控中的 RST 引脚和 GND 引脚之间接入电容 ( 电容值是比0.1uF大的 )。

    <img src="assets/img/faq/faq_05.png" width="80%" height="80%">

    <img src="assets/img/faq/faq_06.png" width="80%" height="80%">

- **Q6: ESP32 有哪些特殊的 GPIO 管脚需要注意？**

    ESP32 有 34 个 GPIO 管脚，其中 GPIO 34-39 仅用作输入，不能作为输出，其他的既可以作为输入又可以作为输出管脚。

- **Q7: 为什么带 MPU9250 的 Stick 烧录了出厂固件之后，按按键 A，结果显示 "No"，即 "不存在9250"。**

    重启这个 Stick，就可以显示。因为读取 MPU9250 的代码放置在出厂程序的 setup() 函数中，开机只执行一次，所以重启，让 Stick 再检测一次 MPU9250。

## 单元

- **Q1: M5Stack 的多款摄像头 Unit 之间有什么区别？**

    这些摄像头主要区别在于一些管脚 (OV2640-SIOD、OV2640-VSYNC、GROVE 接口)、镜头类型、有无 PSRAM，具体区别请访问[这里](https://shimo.im/sheets/gP96C8YTdyjGgKQC/e2041)。

    <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_zh_CN.png">

- **Q2: 摄像头通过 WIFI 传输图像给手机，能传输多远？**

    经过测试，在室内使用 M5Camera 能传输 20 米左右。

<!-- 可以多个电池堆叠在一起吗？ 可以 -->

<!-- ### Minicore

### 套件

## 功能模块Modules

#### 通信模块

#### 拓展模块

#### 驱动模块

## Units

### 通信类Unit

### 传感类Unit

### 驱动类Unit -->

<!-- ---


- Q. USB插入Core之后，识别不到串口号？
  - A. 这些Core主要区别在内部硬件配置和套件搭配上，从基础版到升级版，分别是增加了运动传感器和加大了RAM和FLASH，具体区别请访问这个链接

    https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores.md

- Q. 有些模块与Core堆叠之后不能下载程序，比如USB模块与Core堆叠
- A. 可能是堆叠之后，接触不好，M5-Bus总线有GPIO0，接触不好的时候，GPIO0的时序不对，下载的时候要手动GPIO0连接GND，保证足够长时间拉低

--- -->