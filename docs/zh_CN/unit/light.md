# LIGHT

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_light.png"></div>

## 描述

**LIGHT** 是一款光强度检测传感器.集成光敏电阻与 10K 可调电阻，能够对光照强度进行检测并设定光强门槛值.光敏电阻的阻值会随着入射光强度的增加而降低，依此检测其电压的变化，通过AD转换得到光强数据信息.

为获得更精准的光强度检测数据，该 Unit 还采用**LM393**双差分比较器,用作比较光敏电阻和压敏电阻之间的差分电压.

## 产品特性

- 10K 可调电阻
- 模拟数字输出
- 开发平台: Arduino, UIFlow(Blocky,Python)
- 2x LEGO 兼容孔

## 包含

- 1x LIGHT Unit
- 1x Grove 线

## 应用

- 光控开关
- 太阳能庭院灯
- 红外监控摄像头

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Light.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino IDE

[请点击此处下载Arduino示例代码](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/Arduino)

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_04.png">

### 2. UIFlow

[请点击此处下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_03.png">

## 原理图

<img src="assets/img/product_pics/unit/light_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>LIGHT Unit</td><td>AnalogSignal Pin</td><td>DigitalSignal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**LIGHT 的教程**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%20iot%20lighting%20part%202%20-%20light%20sensor%20control.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/light-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>