# ATOM CAN

<el-tag effect="plain">SKU:K057</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_can/atom_can_01.webp"><img src="assets/img/product_pics/atom_base/atom_can/atom_can_02.webp"><img src="assets/img/product_pics/atom_base/atom_can/atom_can_03.webp"></div>

## 描述

**ATOM CAN** 是一款CAN总线通信单元，采用CA-IS3050G收发器方案(内置的DC-DC隔离电源芯片能够有效隔离干扰，防止损坏敏感电路)。通信总线可支持多达110个节点，信号传输速率可达1Mbps且具备多种电气线路保护功能。非常适合于车载运输与安防系统等应用场景。


## 产品特性

- 适配ATOM Matrix/ATOM Lite
- CAN总线多点通讯
- 内置隔离DC-DC
- 信号速率高达1Mbps
- 共模电压范围为–12V至12V
- 保护功能：
    * 信号隔离
    * 限流
    * 过压保护
    * 热关断
    * 接地损耗保护(-40V～40V)

## 包含

- 1x ATOMIC CAN
- 1x 3.96-4P端子
- 1x 120Ω终端电阻


## 应用

- CAN总线通信
- 车载设备控制
- 工业现场控制

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
            <td>外接端口</td>
            <td>VH-3.96-4P</td>
        </tr>
        <tr>
            <td>CAN收发器型号</td>
            <td>CA-IS3050G</td>
        </tr>
        <tr>
            <td>最高速率</td>
            <td>1Mbps</td>
        </tr>
        <tr>
            <td>支持节点数</td>
            <td>110</td>
        </tr>
        <tr>
            <td>低环路延迟</td>
            <td>-150ns</td>
        </tr>
        <tr>
            <td>共模电压</td>
            <td>-12V ~ 12V</td>
        </tr>
        <tr>
            <td>保护功能</td>
            <td>限流, 过压, 主动态超时, 热关断</td>
        </tr>
        <tr>
            <td>工作温度</td>
            <td>–55°C - 125°C</td>
        </tr>
        <tr>
            <td>净重</td>
            <td>14g</td>
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
        <tr>
            <td>外壳材质</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

## EasyLoader

- **Windows** 
   - [ATOM_CAN_RECEIVE](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ATOM_CAN_RECEIVE.exe)
   - [ATOM_CAN_SENDER](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ATOM_CAN_SENDER.exe)


## 相关链接

-  **Datasheet** 
   - [CA-IS3050G](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/CA-IS3050G.pdf)

### 管脚映射

<table>
 <tr><td>ATOM</td><td>GPIO22</td><td>GPIO19</td><td>5V</td><td>GND</td></tr>
 <tr><td>ATOM CAN</td><td>CAN_TX</td><td>CAN_RX</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/atom_can/atom_can_sch.webp">

## 案例程序

### 1. Arduino

[使用ATOM CAN进行收发测试](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_CAN)

## 相关视频

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_CAN_VIDEO.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack-store.myshopify.com/products/atom-canbus-kit-ca-is3050g';

   anchor_search(purchase_link);
   scrollFunc();

</script>
