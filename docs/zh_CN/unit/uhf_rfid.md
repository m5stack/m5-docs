# UHF-RFID

<el-tag effect="plain">SKU:U107</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/uhf_rfid/uhf_rfid_01.webp"></div>

## 描述

**UHF-RFID** 是一款超高频(UHF)嵌入式无线射频读写模块。采用JRD-4035模块方案，内置陶瓷天线，完全免除普通UHF模块需要另配天线而给用户带来的技术的不确定性。优化RF设计实现模块的低耗电高性能，100MW的发射功率即可达到了1.5M以上的有效距离。使用串行通信接口，配合内置封装的AT指令集，实现即插即用，提供良好的开发与使用体验。适用仓储物流管理与智慧零售等应用场景，满足监控读取多个产品标签的应用需求。

## 产品特性

- 稳定识别距离1.5m-2m
- 工作频谱范围：840-960MHZ
- 空中接口协议: 
    * EPCglobal UHF Class 1 Gen 2
    * ISO 18000-6C
- UART通信接口(波特率:115200bps)
- 缓存区最大容纳200标签
- 标签识别灵敏，稳定

## 包含

- 1x UHF-RFID
- 1x HY2.0 连接线(5CM)

## 应用

- 仓储物流托盘管理
- 车辆管理
- 智慧零售

## 规格参数

<table class="table-1">
    <thead>
    <tr>
        <th>规格</th>
        <th>参数</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>测量范围</td>
            <td>Ethanol：0-1000ppm，H2：0-1000ppm，TVOC：0-60000 ppb，eCO2：400-60000 ppm</td>
        </tr>
        <tr>
            <td>工作区域支持</td>
            <td>
                US, Canada and other regions following U.S. 
                FCC。Europe and other regions following ETSI EN 302 208, 
                Mainland China, Japan, Korea, Malaysia, Taiwan
            </td>
        </tr>
        <tr>
            <td>TVOC与eCO2采样精度</td>
            <td>TVOC：1/6/32bbp，eCO2：1/3/9/31ppm</td>
        </tr>
        <tr>
            <td>通信协议</td>
            <td>UART(波特率:115200bps)</td>
        </tr>
        <tr>
            <td>净重</td>
            <td>4g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td>8g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>24*24*13mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>35*36*18mm</td>
        </tr>
        <tr>
            <td>外壳材质</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_TVOC_Unit.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_TVOC_eCO2_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/TVOC%20eCO2.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>显示TVOC和eCO2读数</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5Core(PORT A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TVOC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/envII_sch.webp">


## 相关链接

- **Datasheet** 

   - [SGP30](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/Sensirion_Gas_Sensors_SGP30_Datasheet.pdf)

## 案例程序

### 1. Arduino

- [点击此处获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TVOC)

### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TVOC/UIFlow)

<img src="assets/img/product_pics/unit/tvoc/TVOC_eCO2_Example.webp" width="80%" height="80%">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/tvoc-eco2-gas-unit-sgp30';

   anchor_search(purchase_link);
   scrollFunc();

</script>
