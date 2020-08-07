# Servo Kit 180°/360°

<el-tag effect="plain">SKU:A076-B&A076-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/accessory/servo_kit/servo_kit_180.webp"><img src="assets/img/product_pics/accessory/servo_kit/servo_kit_360.webp"></div>

## 描述

**Servo Kit 180°/360°** 是一款带有乐高固定支架的9g舵机，有180°与360°两种规格.独立设计的固定支架可以方便的拆装，产品完全按照乐高标准单位设计，使得您可以轻易的与乐高系列产品进行结合，发挥无限的创造力。舵盘重新开模设计，可以直接用乐高零件进行连接。无论180°还是360°舵机，对于初学者来说非常容易使用，即使你不懂得代码也可以用UIFlow轻松的驱动它。舵机上黄色为信号线，棕色为地线，红色为5V。180°舵机仅能控制角度；360°舵机无法控制角度但你可以通过控制PWM对它进行调速并修改转向。舵机使用时注意供电电流和电压防止被烧毁。

## 产品特性

- 微型伺服系统
- 兼容乐高
- 控制简单
- 支持Arduino、UIFlow

## 包含

- 2x SG90 Servo 180° 或 360°可选
- 2x GROVE2SERVO转接器
- 2x 橡皮筋
- 2x 舵机固定连接件
- 2x 定制带孔舵盘
- 2x 十字轴连接器
- 4x 黑销
- 1x 5x7方形框梁
- 2x 舵机配件包
- 2x M2*4mm自攻螺丝
- 2x 舵机延长线30CM(仅180舵机包含)


<img src="assets\img\product_pics\accessory\servo_kit\servo_kit_180_02.webp" width="50%"><img src="assets\img\product_pics\accessory\servo_kit\servo_kit_360_02.webp" width="50%">


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>齿轮材质</td>
      <td>金属马达齿、塑料齿轮箱</td>
   </tr>
   <tr>
      <td>PWM频率</td>
      <td>50Hz/0.5~2.5MS</td>
   </tr>
   <tr>
      <td>舵机重量</td>
      <td>9g</td>
   </tr>
   <tr>
      <td>扭力</td>
      <td>1.6kg•cm/4.8V;1.8kg•cm/6.0V</td>
   </tr>
   <tr>
      <td>180舵机速度</td>
      <td>0.1sec/60°/4.8V;0.09sec/60°/6.0V</td>
   </tr>
   <tr>
      <td>堵转电流</td>
      <td>750mA</td>
   </tr>
   <tr>
      <td>空载电流</td>
      <td>60mA</td>
   </tr>
   <tr>
      <td>齿轮材质</td>
      <td>金属马达齿、塑料齿轮箱</td>
   </tr>
   <tr>
      <td>线长</td>
      <td>3cm</td>
   </tr>
   <tr>
      <td>死区</td>
      <td>8μm</td>
   </tr>
   <tr>
      <td>花键</td>
      <td>20T</td>
   </tr>
   <tr>
      <td>电压</td>
      <td>4.8-6.0V</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>44g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>49g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>40*12*36mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>73*45*23mm</td>
   </tr>
 </table>


## 示例

### 1. Arduino

- 此代码连接360舵机将控制速度和方向，连接180舵机将控制角度（360舵机占空比在0-7.075之间为顺时针，占空比大于7.625为逆时针，转速与占空比接近线性关系）
   - [点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Accessory/ServoKit180_360/Arduino/ServoKit180_360)获取完整代码

### 2. UIFlow

- 这是一个模拟雷达的示例，您需要安装ToF Unit
   - [点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Accessory/ServoKit180_360/UIFlow)获取完整代码

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/ServoKit.mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-accessory/products/SG90-servo-kit';

   anchor_search(purchase_link);
   scrollFunc();

</script>