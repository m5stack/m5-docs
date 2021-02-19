# ATOM PoE

<el-tag effect="plain">SKU:K052</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_poe/atom_poe_01.webp"></div>

## 描述

**ATOM PoE** 是一款适配ATOM主控的以太网控制器底座，支持PoE(有源以太网)技术，通过内置的PoE模块可以直接通过PoE集线器/交换机为设备整机供电而无需单独配备电源，有效降低线路搭建成本。内置W5500嵌入式以太网控制器，集成了 TCP/IP 协议栈，具备8路独立硬件socket，10/100M 以太网数据链路层（MAC）及物理层（PHY）为嵌入式系统提供更加便捷的互联网连接方案。能够满足实际生产环境中的有线网络接入需求。

## 产品特性

- 支持PoE IEEE802.3 AF
- 有线以太网接入
- 支持8路独立硬件Socket同时通信
- 支持TCP、UDP、ICMP、IPv4、ARP、IGMP、PPPoE协议
- 集成 10BaseT / 100Base-T 以太网 PHY

## 包含

- 1x ATOM PoE
- 1x ATOM LITE
- 1x TYPE-C USB 线缆（20cm)

## 应用

- 远程控制
- 有线网络接入

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>以太网芯片</td>
      <td>W5500</td>
   </tr>
   <tr>
      <td>支持协议</td>
      <td>TCP、UDP、ICMP、IPv4、ARP、IGMP、PPPoE</td>
   </tr>
   <tr>
      <td>PoE供电方式</td>
      <td>空闲引脚供电(10M/100M Ethernet)，J4&J5(VC-),J7&J8(VC+)</td>
   </tr>
   <tr>
      <td>PoE规范</td>
      <td>IEEE802.3 AF</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>22g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>44g</td>
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

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证。

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atom_PoE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ATOM_PoE.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_PoE.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>连接以太网，访问通过IP访问控制页面，控制RGB LED改变颜色</p>
        </div>
    </div>
</div>


 ## 相关链接

- **Datasheet** 
    - [W5500](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/base/W5500_datasheet_v1.0.2_1_en.pdf)

### 管脚映射

<table class="table-1">
      <thead>
         <th>ATOM</th>
         <th>GPIO22</th>
         <th>GPIO19</th>
         <th>GPIO23</th>
         <th>GPIO33</th>
      </thead>
      <tbody>
         <tr>
            <td>ATOM PoE</td>
            <td>CLK</td>
            <td>CS</td>
            <td>MISO</td>
            <td>MOSI</td>
         </tr>
    </tbody>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/atom_poe/atom_poe_sch.webp">

## 案例程序

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_PoE)

<script>

   var purchase_link = 'https://m5stack.com/products/atom-poe-kit-with-w5500-hy601742e';


   anchor_search(purchase_link);
   scrollFunc();

</script>