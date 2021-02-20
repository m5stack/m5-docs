# ATOM TF-CARD Kit

<el-tag effect="plain">SKU:K044</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomicTF/atomictf_01.webp" ><img src="assets/img/product_pics/atom_base/atomicTF/atomictf_02.webp"></div>

## 描述

**ATOM TF-CARD** 是一款基于Atomic的TF(MicroSD)卡读写模块，自弹式卡槽设计，可支持16G容量的TF卡，您可以将程序中重要的配置文件和用户数据保存至TF卡内，也可以在程序运行过程中随时调用这些文件。使用TF卡读写模块可以大大减少外部资源文件对宝贵Flash空间的占用。

## 产品特性

- 适配ATOM Matrix/ ATOM Lite
- 最高支持16G
- FAT/FAT32格式
- 自弹式卡槽

## 包含

- 1x ATOM TF-CARD
- 1x ATOM Lite
- 1x M2内六角扳手
- 1x M2*8mm杯头机械牙螺丝
- 1x M2*3mm杯头自攻螺丝
- 1x 18cm TYPE-C数据线

## 应用

- 数据保存
- 文件读写
- 日志记录

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>支持类型</td>
      <td>16G FAT/FAT32 MicroSD</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>23g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>33g</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atomic_TF.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_AtomicTF.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/AtomEcho.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>SD卡读写文件测试，串口输出查看</p>
        </div>
    </div>
</div>

### PinMap

<table class="table-1">
      <thead>
         <th>ATOM</th>
         <th>GPIO19</th>
         <th>GPIO23</th>
         <th>GPIO33</th>
      </thead>
      <tbody>
         <tr>
            <td>ATOM TF-CARD</td>
            <td>MOSI</td>
            <td>CLK</td>
            <td>MISO</td>
         </tr>
    </tbody>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/atomicTF/atomicTF_sch.webp">

## 案例程序

### 1. Arduino

- [请点击此处下载Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicTF)



<script>

   var purchase_link = 'https://m5stack.com/collections/m5-atom/products/atom-tf-card-kit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
