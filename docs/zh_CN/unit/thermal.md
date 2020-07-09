# THERMAL {docsify-ignore-all}

<el-tag effect="plain">SKU:U016</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal.webp"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal_02.webp"></div>

## 描述

**THERMAL** 是一款人体红外成像 Unit.内置**MLX90640**热电堆传感器,能够测量物体表面温度.并通过由表面温度形成的温度梯度，生成热成像图片.(图片分辨率为**32 x 24**)

**MLX90640** 红外（IR）传感器阵列具备了高分辨率与在恶劣环境中可靠工作的能力.与昂贵的高端热像仪相比，该 Unit 是一个高性价比的替代方案.相对一般的微测辐射热计，该传感器优势在于，不需要频繁重复校准,从而确保了检测的连续性并降低了系统维护成本.视场角提供广角版（110°×75°)，I2C 地址为**0x33**.

<img src="assets/img/product_pics/unit/thermal/unit_thermal_05.webp">

## 产品特性

- 工作电压: 3V ~ 3.6V
- 工作电流: 23mA
- 视场角: 110°×75°
- 测温范围: -40°C ~ 300°C
- 精度: ±1.5°C
- 刷新频率: 0.5Hz-64Hz
- 工作温度: -40°C ~ 85°C
- 2x LEGO 兼容孔

## 包含

- 1x THERMAL Unit
- 1x Grove 线

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
      <td>5g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>18g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>32*24*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
 </table>

## 相关链接

- **[MLX90640 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/MLX90640-Datasheet-Melexis_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_THERMAL.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino IDE

[请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/THERMAL_MLX90640)

<img src="assets/img/product_pics/unit/M5GO_Unit_thermal_03.webp" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal_04.webp" width="30%" height="30%">


### 2. UIFlow

[请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/THERMAL/UIFlow)

<img src="assets/img/product_pics/unit/thermal.webp">

## 原理图

<img src="assets/img/product_pics/unit/thermal_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core (GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>THERMAL Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**THERMAL 的演示**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/Infrared%20Thermal%20Imaging.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/thermal-camera';

   anchor_search(purchase_link);
   scrollFunc();

</script>