# BALA2

<el-tag effect="plain">SKU:K014-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/app/Bala2/bala2.webp"></div>

## 描述

**BALA2** 是一款平衡车应用.该产品是由[M5Stack Gray](/zh_CN/core/gray) 与 BALA2电机底座组合而成的一款自平衡机器人，底座采用STM32F030C8T6作为主控，由两路N20编码减速电机提供动力，内置1200mAh电池，其"BALA"名称的由来出自"Balance"一词的缩写，目前为第二代产品。BALA2底座包含了丰富的接口，除了常规的PortB、PortC外还支持8路舵机，其中4路接口可直接连接，其余4路需从底座内部引出。您可以通过编程控制它自由行走，也可以结合WiFi和蓝牙开发遥控功能。即使您从来没有接触过平衡车程序，您也可以通过UIFlow快速完成编程对它进行控制。

出厂默认预装平衡车应用程序，在运行时使用PID闭环算法保持垂直平衡，利用加速度计与陀螺仪姿态数据来校正其方向和位置。

底座通过I2C总线与M5Stack Gray通信.I2C地址为**0x3A**

## 产品特性

- 9轴姿态传感器
- 双轮驱动，PID控制平衡
- Grove扩展接口（PORTB/PORTC)
- 8路舵机驱动，4路外接，4路内置
- 支持WiFi蓝牙，可编程
- 内置扬声器
- 支持TF卡拓展
- 兼容LEGO
- 开发平台
   + MicroPython
   + UIFlow
   + Arduino

## 包含

- 1x M5Stack Gray + BALA2
- 2x HY2.0-4P 连接线(20cm)
- 4x 轮毂连接器
- 2x 乐高臂
- 1x 内六角扳手
- 1x Type-C USB 数据线(120cm)

## 应用

- Balancing car

## 使用和校准

注意：出厂时BALA2已经进行校准，开机即可自动保持平衡，如需手动进行校准请参考[快速上手](zh_CN/quick_start/bala2/bala2_quick_start)

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz双核，600 DMIPS，520KB SRAM，Wi-Fi，双模蓝牙</td>
   </tr>
   <tr>
      <td>Flash/RAM</td>
      <td>16MB Flash</td>
   </tr>
   <tr>
      <td>LCD</td>
      <td>2 英寸, 320x240 彩色 TFT LCD, ILI9342C</td>
   </tr>
   <tr>
      <td>扬声器</td>
      <td>1W-0928</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>BMM150+MPU6886</td>
   </tr>
   <tr>
      <td>电机驱动</td>
      <td>HR8833</td>
   </tr>
   <tr>
      <td>底座主控</td>
      <td>STM32F030</td>
   </tr>
   <tr>
      <td>接口</td>
      <td>GROVE I2C*1/UART*1/GPIO*1/SERVO*4(+4 Extendable Channel)</td>
   </tr>
   <tr>
      <td>电池容量</td>
      <td>1200mAh</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>157g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>337g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*54*65mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>100*100*100mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/APPLICATION/EasyLoader_BALA2_APPICATION.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/APPLICATION/EasyLoader_BALA2.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/App/BALA2.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>开机运行，按住ButtonB+左侧开机键进入校准模式，A/C调整，B键保存</p>
        </div>
    </div>
</div>

## 原理图

<div class="product_pic"><img src="assets/img/product_pics/app/Bala2/Bala2_sch.webp"></div>

## 管脚映射

**GROVE Port A & B & C**

<table class="table-1">
      <thead>
         <th>ESP32 Chip</th>
         <th>GPIO22</th>
         <th>GPIO21</th>
         <th>GPIO26</th>
         <th>GPIO36</th>
         <th>GPIO16</th>
         <th>GPIO17</th>
      </thead>
      <tbody>
         <tr>
            <td>PORT A</td>
            <td>SCL</td>
            <td>SDA</td>
         </tr>
         <tr>
            <td>PORT B</td>
            <td></td>
            <td></td>
            <td>DAC</td>
            <td>ADC</td>
            <td></td>
            <td></td>
         </tr>
         <tr>
            <td>PORT C</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>RX</td>
            <td>TX</td>
         </tr>
    </tbody>
</table>

## 案例程序

### 1. Arduino IDE

**下载完整代码 [点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Application/Bala2)**

- **[教程&快速上手](en/quick_start/bala2/bala2_quick_start)**

<script>

   var purchase_link = 'https://m5stack.com/products/bala2-esp32-self-balancing-robot-kit?_pos=2&_sid=17e4ad51b&_ss=r&variant=36137100345508';
   
   var quickstart_link = '#/zh_CN/quick_start/bala2/bala2_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>
