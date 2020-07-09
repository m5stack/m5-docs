# THERMAL HAT

<el-tag effect="plain">SKU:U062</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\thermal_hat\hat_thermal_01.webp"><img src="assets\img\product_pics\hat\thermal_hat\hat_thermal_02.webp" ></div>

## 描述

**THERMAL HAT**是一款兼容M5StickC的人体红外热成像.内置**MLX90640**热电堆传感器,能够测量物体表面温度.并通过由表面温度形成的温度梯度，生成热成像图片.(图片分辨率为**32 x 24**)
**MLX90640** 红外（IR）传感器阵列具备了高分辨率与在恶劣环境中可靠工作的能力.与昂贵的高端热像仪相比，Thermal HAT是一个高性价比的替代方案.相对一般的微测辐射热计，该传感器优势在于，不需要频繁重复校准,从而确保了检测的连续性并降低了系统维护成本.视场角提供广角版（110°×75°）

## 产品特性

- I2C地址:**0x33**(GOIO 0/26)
- 工作电压: 3V ~ 3.6V
- 工作电流: 23mA
- 视场角: 110°x75°
- 测温范围: -40°C ~ 300°C
- 精度: ±1.5°C
- 刷新频率: 0.5Hz-64Hz
- 工作温度: -40°C ~ 85°C

## 包含

- 1x THERMAL Hat

## 应用

-  高精度的非接触性测温器
-  生物移动检测
-  可视化红外成像

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>8g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>13g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>25*24*14m</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>40*42*30mm</td>
   </tr>
 </table>

## 原理图

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Hat/StickHat_THERMAL.pdf)**

<img src="assets\img\product_pics\hat\thermal_hat\hat_thermal_05.webp" width="50%" height="50%">

## 相关链接

- **[MLX90640 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/MLX90640-Datasheet-Melexis_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/THERMAL/EasyLoader_StickC_HAT_THERMAL.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>HAT Thermal</td><td>SDA</td><td>SCL-</td><td>3.3V</td><td>GND</td></tr>
</table>

## 案例程序

- **UIFlow**

[获取UIFlow示例点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/MLX90640/UIFlow)

<img src="assets/img/product_pics/hat/thermal_hat/thermal.webp">

- **Arduino**

[点击此处下载Arduino代码](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/MLX90640)

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/THERMAL-HAT.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-thermal-camera-hatmlx90640';


   anchor_search(purchase_link);
   scrollFunc();

</script>