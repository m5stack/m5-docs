# ATOM HDriver

<el-tag effect="plain">SKU:K039</el-talg>

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
- 1x ATOM Hdriver
- 1x 3.96*4P 公头
- 1x M2内六角扳手
- 1x M2*8杯头机械牙螺丝
- 1x TYPE-C USB Cable（20cm)

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

## 相关链接

-  **Datasheet** 
    - [DRV8876PWPR](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/atom_hdriver/C575551_DRV8876PWPR_2020-06-01.PDF)

## 管脚映射

<table>
 <tr><td>ATOM</td><td>G22</td><td>G19</td><td>G23</td><td>G33</td></tr>
 <tr><td>Hdriver</td><td>FAULT</td><td>IN1</td><td>IN2</td><td>VIN-1/10</td></tr>
</table>

?>提示：当故障发生时，将触发FAULT(G22)引脚下拉，G33能够获取输入电压的1/10，能够用于检测当前的电源输入情况。

## 案例程序

- [Arduino代码示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomFLY)

## 原理图

<img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_sch.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/atomic-proto-kit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
