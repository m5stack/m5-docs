# ATOM H-DRIVER

<el-tag effect="plain">SKU:K050</el-talg>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_01.webp"><img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_02.webp"></div>

## 描述

**ATOM HDriver** 是一款适配ATOM控制器的`H桥`电机驱动器。内置DRV8876电机驱动芯片，支持`9-24V/DC电源输入`(内嵌DC/DC电路为整机设备供电，ADC引脚G33直连分压电路可随时监测电源输入情况), 输出电流可达`1.5A`, `峰值2A`, 能够用于直流电机调速与正反转控制。驱动内部集成了N沟道H桥、充电泵稳压器、电流检测和调节、电流比例输出和保护电路(保护功能集成:电源欠压锁定 (UVLO)、充电泵欠压 (CPUV)、输出过流 (OCP) 和器件超温 (TSD), 故障情况并通过`FAULT`引脚指示)。

## 产品特性

- N沟道H桥电机驱动器
    * 驱动一台双向有刷直流电机
    * 其他阻性和感性负载
– DRV8876：700mΩ(高侧+低侧)
- 高输出电流能力
    * 实际输出1.5A, 峰值2A
– H桥控制模式
- 3.3V逻辑输入
- 扩频时钟可降低电磁干扰
- 集成保护功能
    * 欠压锁定(UVLO)
    * 电荷泵欠压(CPUV)
    * 过电流保护(OCP)
    * 自动重试或锁存输出(IMODE)
    * 热关机(TSD)
    * 自动故障恢复
    * 故障指示器引脚(nFAULT)

## 包含

- 1x ATOM Lite
- 1x ATOM H-driver
- 1x 3.96*4P 公头
- 1x M2内六角扳手
- 1x M2*8杯头机械牙螺丝
- 1x TYPE-C USB 连接线(20cm)

## 应用

- 直流电机控制

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
            <td>输入电压</td>
            <td>9-24V/DC</td>
        </tr>
        <tr>
            <td>输出电流</td>
            <td>实际输出1.5A, 峰值2A</td>
        </tr>
        <tr>
            <td>净重</td>
            <td>16g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td>36g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>24*48*18mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>54*54*20mm</td>
        </tr>
     </tbody>
</table>


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证。

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atom_Hdriver.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ATOM_Hdriver.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_HDRIVER.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>按下中间按键控制电机正反转，长按停止</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [DRV8876PWPR](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/atom_hdriver/C575551_DRV8876PWPR_2020-06-01.PDF)

## 管脚映射

<table>
 <tr><td>ATOM</td><td>G22</td><td>G19</td><td>G23</td><td>G33</td></tr>
 <tr><td>Hdriver</td><td>FAULT</td><td>IN1</td><td>IN2</td><td>VIN-1/10</td></tr>
</table>


<img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_03.webp" width="30%">


?>提示：当故障发生时，将触发FAULT(G22)引脚下拉，G33能够获取输入电压的1/10，能够用于检测当前的电源输入情况。

## 原理图

<img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_sch.webp">

## 案例程序

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_Hdriver)

<script>

   var purchase_link = 'https://m5stack.com/products/atom-h-bridge-driver-kit-drv8876';

   anchor_search(purchase_link);
   scrollFunc();

</script>
