# QWERTY Keyboard {docsify-ignore-all}

<el-tag effect="plain">SKU:K005</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/core/faces_kit/face_01.webp"><img src="assets/img/product_pics/core/faces_kit/face_02.webp"></div>

## 描述

**QWERTY Keyboard** 是适配FACE_BOTTOM的全功能键盘面板，共有35个按键，每个按键都可通过组合键复用，输出不同字符.内部集成**MEGA328**处理器，通过I2C通信协议（0x08）工作在从机模式下."sym"与"Fn"功能键用于上档切换，"aA"功能键用于大小写切换，单击相应功能键指示灯常亮激活单字符输入，双击指示灯闪烁，可激活连续输入，再次单击恢复。

## 产品特性

- I2C通讯(0X08)
- 多功能按键复用
- 输入状态指示灯
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## 包含

- 1x QWERTY Keyboard面板

## 应用

- 数据录入
- 人机交互

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>通讯方式</td>
      <td>I2C(0X08)</td>
   </tr>
   <tr>
      <td>按键布局</td>
      <td>QWERTY全键盘</td>
   </tr>
   <tr>
      <td>输入状态指示灯</td>
      <td>蓝色LED *2</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>21g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>41g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>58.2mm x 54.2mm x 10.4mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>95mm x 65mm x 25mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_FACES_FactoryTest.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_FACES_FactoryTest.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/FACES.mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>该案例将默认运行FACES键盘输入测试程序，重启选择程序列表可以切换不同的面板测试项.</p>
        </div>
    </div>
</div>

## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## 相关链接

- **Datasheet**

## 原理图

### 键盘

<img src="assets\img\product_pics\core\faces_kit\Faces_keyboard_sch.webp" width="70%">

### 计算器

<img src="assets\img\product_pics\core\faces_kit\Faces_calculator_sch.webp" width="70%">

### 游戏面板

<img src="assets\img\product_pics\core\faces_kit\Faces_gameboy_sch.webp" width="70%">


## 案例程序

### ArduinoIDE

- 点击[这里](https://github.com/m5stack/M5Stack/tree/master/examples/Face/KEYBOARD)获取Arduino示例

### GameBoy Keyboard

如果你想用 M5Core 玩一些经典小游戏，那么使用GameBoy面板和 M5Core 会是完美的方案.你需要做的就是将游戏模拟器程序上传到 M5Core 上，并连接好 GameBoy 面板.连接图如下:

ESPTool烧录游戏教程：https://docs.m5stack.com/#/zh_CN/quick_start/faces/gameboy_burn_a_nes_game

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/Faces_kit/Faces_GameBoy_BladeBuster.exe">点击此处一键烧录示例游戏</a>


另外两个面板是计算器键盘和输入全键盘，你可以将它们运用在那些需要输入信息以及复杂控制的应用场景中.
<mark>拆卸更换面板时，为降低拆卸难度，建议先拆卸M5Core，然后拆解面板.</mark>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/m5go-iot-starter-kit-stem-education';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/m5core/m5stack_core_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>