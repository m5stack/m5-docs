# Catch Unit

<el-tag effect="plain">SKU:U102</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/catch/catch_01.webp"><img src="assets/img/product_pics/unit/catch/catch_02.webp"><img src="assets/img/product_pics/unit/catch/catch_03.webp"></div>

## 描述

**Catch** 是一款由使用SG92R舵机作为动力源的夹爪，该舵机使用PWM信号驱动夹爪齿轮旋转，控制夹爪进行夹持和释放操作。结构上采用了兼容乐高8mm圆孔的设计。你可以将它结合到其他的乐高组件中，搭建出创意十足的控制结构，如机械臂，夹爪车等。

?>由于夹爪的开合角为`90°`，驱动舵机旋转角度请控制在`0-45°`(PWM: 频率50Hz, 0°-45°(pulse:0.5ms-1ms)), 防止阻转导致舵机烧毁。

## 产品特性

- SG92R舵机
- PWM信号驱动
- 乐高孔兼容
- 夹爪开合角度90°
- 兼容RoverC
- 支持输入电压: 4.2-6V
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## 包含

- 1x Catch Unit(包含Servo-SG92R)
- 1x HY2.0-4转接头
- 1x RoverC.Pro 连接件

## 应用

- 夹爪机器人
- 舵机机械臂夹爪

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>主控资源</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>舵机型号</td>
      <td>SG92R</td>
   </tr>
   <tr>
      <td>驱动信号</td>
      <td>PWM: 频率50Hz, 0°-45°(pulse:0.5ms-1ms)°</td>
   </tr>
   <tr>
      <td>工作频率</td>
      <td>50Hz</td>
   </tr>
   <tr>
      <td>夹爪开合角度</td>
      <td>90°</td>
   </tr>
   <tr>
      <td>输入电压范围</td>
      <td>4.2-6V</td>
   </tr>
   <tr>
      <td>工作死区</td>
      <td>10us</td>
   </tr>
   <tr>
      <td>输出扭力</td>
      <td>2.5kg/cm at 4.8V</td>
   </tr>
   <tr>
      <td>输出速度</td>
      <td>0.1sec/60° at 4.8V</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>0°C to 55°C</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>21.5g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>50g</td>
   </tr>
   <tr>
      <td>产品尺寸(夹爪展开)</td>
      <td>72 x 56 x 37 mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>147 x 90 x 40 mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>


## 管脚映射

**当将Catch Unit连接至PortB时，管脚映射如下**

<table>
 <tr><td>M5Core(PORT B)</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>Catch Unit</td><td>SIGNAL</td><td>5V</td><td>GND</td></tr>
</table>

## 案例程序


?>该案例控制Catch Unit夹爪循环执行夹持和释放。

<el-card class="box-card" style="margin-bottom:20px">
   <div slot="header" class="clearfix">
   <span style="font-size: 22px; font-weight: bold;">Arduino</span>
   <i class="el-icon-s-management" style="float: right;"></i>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5Stack/tree/master/examples/Unit/CATCH'><el-tag>For BASIC/M5GO/FIRE</el-tag></a>
   </div>
</el-card>

```clike

/*
    Description: Control Catch Unit through PWM.
*/

#include <M5Stack.h>

//设置控制引脚
const int servoPin = 26;
//设置频率
int freq = 50;
//设置PWM通道
int ledChannel = 0;
//设置脉冲分辨率
int resolution = 10;
void setup() {
  // put your setup code here, to run once:
  M5.begin();
  M5.Power.begin();
  M5.Lcd.setCursor(100, 50, 4);
  M5.Lcd.println("Catch Unit");
  M5.Lcd.setCursor(40, 120, 4);
  ledcSetup(ledChannel, freq, resolution);
  ledcAttachPin(servoPin, ledChannel);
}

void loop() {
  // High level 0.5ms is angle 0°
  // duty = 0.5/20ms = 0.025, 0.025*1023≈25
    ledcWrite(ledChannel, 25);
    delay(2000);
  // High level 1ms is angle 45°
  // duty = 1/20ms = 0.05, 0.05*1023≈50
    ledcWrite(ledChannel, 50);
    delay(2000);
}

```


## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/CATCH.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack-store.myshopify.com/products/catch-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>

