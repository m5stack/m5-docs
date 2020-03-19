# GPS

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U032</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_gps_01.png" ><img src="assets/img/product_pics/unit/unit_gps_02.png"></div>

## 描述

**GPS** 是一款卫星定位 Unit . 内部集成科微北斗导航芯片 AT6558 和信号放大芯片 MAX2659,能够提供优质的卫星定位服务.

**AT6558** 是一款高性能的导航芯片,支持多种卫星导航系统，以 56 通道接收卫星信号，同时接收6个卫星导航系统的 GNSS 信号，并且实现联合定位、导航和授时，获得准确的全球位置信息.AT6558 能够在城市、峡谷、高架下面等弱信号的地方，以及汽车内部任何位置可以快速、准确地定位.此模块可广泛用于车载监控、公交车报站、车载导航、船载导航、笔记本导航等产品上.

**使用时，请将该 Unit 连接到 PORT C ，它将通过UART协议与M5Core进行通信**

UART 参数设置:
- 波特率(**默认: 9600bps**)
- 起始位(1 bit)
- 停止位(1 bit)
- 校验位(无)

## 产品特性

- 功能
  - 定位精度：2.5米（CEP50，空旷地区）
  - 通道: 56
  - 支持BDS / GPS / GLONASS卫星导航系统的单系统定位，或任意组合的多系统联合定位
  - 支持 D-GNSS 差分定位
  - 定位更新频率: 1-10Hz
  - 最大高度: 1800 m
  - 最大速度: 515 m/s
  - 最大加速度: <= 4 G
- 低功耗
  - BDS/GPS 双模连续操作: <23mA (@3.3V)
  - 待机: <10uA (@3.3V)
- 灵敏度
  - 跟踪: -162dBm
  - 捕捉: -148dBm
  - 冷启动: -146dBm
- 启动时间
  - 冷启动: 35 seconds
  - 温启动: 32 seconds
  - 热启动: 1 second
- 工作温度: -40~85°C
- 2x LEGO 兼容孔

## 包含

- 1x GPS Unit
- 1x Grove 线

## 应用

- 车载、船载定位与导航
- 智能执法定位

## 相关链接

- **数据手册** - [AT6558](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/AT6558_en.pdf) - [MAX2659](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/MAX2659_en.pdf)

- **[TinyGPS++ library](http://arduiniana.org/libraries/tinygpsplus/)**

- **[CASIC 多模卫星导航接收机协议规范](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/Multimode_satellite_navigation_receiver_cn.pdf)**

- **[上位机软件 GnssToolKit3(Windows Version)](http://www.icofchina.com/d/file/xiazai/2018-05-23/2b29a8da746eec0ef1dcd9deae895298.zip)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_GPSRaw.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino IDE

[请点击此处下载Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/GPS/Arduino)

烧录例程 GPSRaw.ino 后，当设备启动时，M5Core屏幕和PC端串口调试工具将会打印显示如下的信息.

```
$GNGGA,063012.000,2234.87140,N,11357.22414,E,1,06,4.2,7.3,M,0.0,M,,*7D
$GNGLL,2234.87140,N,11357.22414,E,063012.000,A,A*4C
$GPGSA,A,3,01,09,11,18,23,,,,,,,,6.3,4.2,4.7*32
$BDGSA,A,3,13,,,,,,,,,,,,6.3,4.2,4.7*21
$GPGSV,3,1,10,01,54,164,33,04,,,22,08,46,019,,09,23,230,24*40
$GPGSV,3,2,10,11,81,200,12,18,65,110,26,23,14,195,25,27,18,041,*78
$GPGSV,3,3,10,28,10,300,15,30,33,319,*7C
$BDGSV,1,1,01,13,43,195,29*5A
$GNRMC,063012.000,A,2234.87140,N,11357.22414,E,0.69,171.74,240419,,,A*7A
$GNVTG,171.74,T,,M,0.69,N,1.27,K,A*2C
$GNZDA,063012.000,24,04,2019,00,00*46
$GPTXT,01,01,01,ANTENNA OPEN*25
```

### 2. UIFlow

[点击这里下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/GPS)

<img src="assets/img/product_pics/unit/gps/gps.png">

**分析：**

**$GNRMC,063012.000,A,2234.87140,N,11357.22414,E,0.69,171.74,240419,,,A*7A**

表示定位信息为：
  UTC时间是06 :30 :12，北纬22.58119°，东经113。95357°，2019年4月24日

<img src="assets/img/product_pics/unit/gps/unit_gps_06.png">

<img src="assets/img/product_pics/unit/gps/unit_gps_05.png">

## 原理图

<img src="assets/img/product_pics/unit/gps_sch.png">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE C)</td><td>U2RXD(GPIO16)</td><td>U2TXD(GPIO17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>GPS Unit</td><td>Signal Transmitter (TXD)</td><td>Signal Receiver (RXD)</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-gps-bds-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>