# ATOM GPS Kit

<el-tag effect="plain">SKU:K043</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomicGPS/atomicgps_01.webp" ><img src="assets/img/product_pics/atom_base/atomicGPS/atomicgps_02.webp"></div>

## 描述

**ATOM GPS** 是一款基于Atomic的GPS定位模组，定位导航芯片为M8030-KT，内置FLASH和纽扣电池，支持断电保存用户配置。采用NMEA-0183协议输出，支持GPS、GLONASS、GALILEO、BDS、SBAS和QZSS多种卫星系统，具备72搜索通道数，刷新速率可调，可广泛用于地理坐标查看、公交车报站、车船导航、轨迹追踪等应用。此外在GPS模块下方内置有TF(MicroSD)卡槽，您可以读写GPS或其他文件数据，例如以特定的格式导出GPS数据在地图软件中查看运动轨迹，或作为普通读卡器实现文件读写。

UART 参数设置:
- 波特率(**默认: 9600bps**)
- 起始位(1 bit)
- 停止位(1 bit)
- 校验位(无)

## 产品特性

- 适配ATOM Matrix/ATOM Lite
- 捕获灵敏度高
- 支持BDS / GPS / GLONASS / GALILEO / SBAS / QZSS 多种卫星导航系统的单系统定位，或任意组合的多系统联合定位
- 内置自弹式TF(MicroSD)卡槽
- 低功耗设计

## 包含

- 1x ATOM GPS
- 1x ATOM Lite
- 1x M2内六角扳手
- 1x M2*8mm杯头机械牙螺丝
- 1x M2*3mm杯头自攻螺丝
- 1x 18cm TYPE-C数据线

## 应用

- 车载、船载定位与导航
- 轨迹记录
- 文件读写

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>精频率度</td>
      <td>GPS L1, GLONASS L1, BDS B1, GALILEO E1, SBAS L1, QZSS L1</td>
   </tr>
   <tr>
      <td>精度</td>
      <td>水平:2米， 速度:0.1m/s， 时间:1us</td>
   </tr>
   <tr>
      <td>通道数</td>
      <td>72搜索通道</td>
   </tr>
   <tr>
      <td>更新频率</td>
      <td>1-10Hz</td>
   </tr>
   <tr>
      <td>最大高度</td>
      <td>50000米</td>
   </tr>
   <tr>
      <td>最大速度</td>
      <td>515米/秒</td>
   </tr>
   <tr>
      <td>工作最大加速度温度</td>
      <td> < 4g</td>
   </tr>
   <tr>
      <td>灵敏度</td>
      <td>跟踪: -167dBm，捕捉: -160dBm，冷启动: -148dBm， 热启动: -156dBm</td>
   </tr>
   <tr>
      <td>启动时间</td>
      <td>冷启动: 26 seconds，温启动: 25 seconds，热启动: 1 second</td>
   </tr>
   <tr>
      <td>波特率</td>
      <td>4800bps-921600bps</td>
   </tr>
   <tr>
      <td>输出协议</td>
      <td>NMEA-0193</td>
   </tr>
   <tr>
      <td>NMEA语句</td>
      <td>RMC, VTG, GGA, GSA, GSV, GLL</td>
   </tr>
   <tr>
      <td>FLASH</td>
      <td>4M FLASH</td>
   </tr>
   <tr>
      <td>指示灯</td>
      <td>TX:上电蓝灯闪烁，表示有数据输出， PPS:3D定位后闪烁，未定位不亮</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>-40°C - 85°C</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>28g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>38g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>24*48*18mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>54*54*20mm</td>
   </tr>
</table>


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atomic_GPS.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_AtomicGPS.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomGPS.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>连接手机蓝牙串口工具查看GPS信息</p>
        </div>
    </div>
</div>

### 管脚映射

<table class="table-1">
      <thead>
         <th>ATOM</th>
         <th>GPIO19</th>
         <th>GPIO22</th>
         <th>GPIO23</th>
         <th>GPIO33</th>
      </thead>
      <tbody>
         <tr>
            <td>ATOM GPS</td>
            <td>MOSI</td>
            <td>TX</td>
            <td>CLK</td>
            <td>MISO</td>
         </tr>
    </tbody>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/atomicGPS/atomicGPS_sch.webp">

## 相关链接

  - **[CASIC 多模卫星导航接收机协议规范](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/Multimode_satellite_navigation_receiver_cn.pdf)**

## 案例程序

### 1. Arduino IDE

- [请点击此处下载Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicGPS)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-atom/products/atom-gps-kit-m8030-kt';

   anchor_search(purchase_link);
   scrollFunc();

</script>
