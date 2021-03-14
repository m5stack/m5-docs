# ATOM Socket Kit (HLW8023) - JP&US

<el-tag effect="plain">SKU:K055</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_socket/atom_socket_01.webp"><img src="assets/img/product_pics/atom_base/atom_socket/atom_socket_02.webp"><img src="assets/img/product_pics/atom_base/atom_socket/atom_socket_03.webp"></div>

## 描述

**ATOM Socket** 是一款适配ATOM主控的智能电源插座。内嵌HLW8032高精度电能计量IC，通过串口通信能够读取插座进电的相关电气参数(线电压，电流，有功功率，视在功率和功率因数)。外部插孔采用日标规格，内部集成单路继电器(AC-100~120V@10A)用于控制插座电源通断，搭配集成WIFI&蓝牙模块的ATOM主控，该电源插座能够轻松接入网络，实现远程控制与电能计量。额外插座集成HY2.0-4P接口，能够与外部设备进行交互(继电器信号输入，按键信号输出)。

## 产品特性

- 单路继电器控制插座电源通断(100~120V@10A)
- HLW8032高精度电能计量IC
- 支持电压电流检测功率计算,1000：1的动态范围内：
    - 有功功率的测量误差达到0.2%
    - 有效电流的测量误差达到0.5%
    - 有效电压的测量误差达到0.5%
- UART通讯(baud:4800)
- ∑-Δ型ADC,高精度的电能计量内核
- 日标/美标插孔-PSE认证
- HY2.0-4P外部控制接口

## 包含

- 1x ATOM Socket
- 1x ATOM LITE

## 应用

- 计量插座
- 智能WIFI插座
- 智能家电控制

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>HLW8032串口通信波特率</td>
      <td>4800</td>
   </tr>
   <tr>
      <td>建议负载功率</td>
      <td><=1000W</td>
   </tr>
   <tr>
      <td>继电器参数</td>
      <td>AC-100~120V@10A</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>104g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>116.6g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>90*42*55mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>92*62*42mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证。

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atom_Socket.exe">Windows</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_Socket.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>远程控制ATOM Socket通断电源，并且监测电源状态</p>
        </div>
    </div>
</div>


## 相关链接

- **Datasheet** 
    - [HLW8032](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/atom_socket/DS_HLW8032_CN.pdf)

### 管脚映射

<table>
 <tr><td>ATOM</td><td>G22</td><td>G23</td></tr>
 <tr><td>ATOM Socket</td><td>RX</td><td>Relay</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/atom_socket/atom_socket_sch_01.webp">
<img src="assets/img/product_pics/atom_base/atom_socket/atom_socket_sch_02.webp">

## 案例程序

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_Socket)

<script>

   var purchase_link = 'https://m5stack.com/products/atom-socket-kit-hlw8023-jp-us';

   anchor_search();
   scrollFunc();

</script>
