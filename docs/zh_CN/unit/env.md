# ENV

<el-tag effect="plain">SKU:U001</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/env/unit_env_01.webp"></div>


## 描述


**ENV** 是一款环境传感器,内部集成DHT12和BMP280，用于检测温度、湿度、大气压值数据.DHT12是DHT11湿度温度传感器的升级版本，完全向下兼容，测量数值更精确,并添加了I2C接口.BMP280是一款专为移动应用而设计的绝对气压传感器，具有较高的精准度.适合应用在一些小型低功耗终端上.对于需要对环境数据进行快速采集检测的项目来说, ENV Unit是一个兼顾性能与性价比的不错选择.


## 产品特性

- GROVE 接口, 支持平台 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔

## 包含

- 1x ENV Unit
- 1x Grove 线

## 应用

- 气象站
- 储谷仓环境监控

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>温度测量范围/误差</td>
      <td>-20 ~ 60 ℃ / ±0.2℃</td>
   </tr>
   <tr>
      <td>湿度测量范围/误差</td>
      <td>20 ~ 95 %RH / ±0.1%</td>
   </tr>
   <tr>
      <td>大气压测量范围/误差</td>
      <td>300 ~ 1100hPa / ±1hPa</td>
   </tr>
   <tr>
      <td>通信协议</td>
      <td>I2C：DHT12(0x5C),BMP280(0x76)</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>4g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>24.2*32.2*8.1mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_ENV_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_ENV_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/ENV_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>显示温湿度与大气压数据.</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/env_sch.JPG">


## 相关链接

- **Datasheet** 
   - [BMP280](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)
   - [DHT12](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)


## 案例程序

### 1. Arduino IDE

该案例将使用 ENV Unit ，实现温度、湿度、大气压数据的读取.
1, 在进行程序编译前，请安装`Adafruit BMP280 Library`
2, 并将`Adafruit_Sensor.h`复制至`C:\Users\<user_name>\Documents\Arduino\libraries\Adafruit_BMP280_Library`

[请点击此处下载Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ENV_DHT12_BMP280)

### 2. UIFlow

[请点击此处UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_05.webp" width="60%">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-env-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>