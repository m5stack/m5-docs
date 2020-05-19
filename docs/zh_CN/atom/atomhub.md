# ATOMHUB

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A077</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomic/atomhub_01.webp"></div>

## 描述

**ATOMHUB** 是一款适配ATOM系列的DIY扩展板套件，用户可以根据自身需要搭建硬件电路或连接外设，满足特定场景下的功能与需求。考虑到用户连接的多种可能性，ATOMHUB提供了丰富的接口，包括VH3.96接口,DC5V电源接口,GROVE接口，同时在外壳上预留各种开孔，方便用户布线。在机身背面设计了多种安装孔，除了传统挂孔与螺丝固定孔外还支持滑轨夹具固定。内置Proto电路板，主要电路空间布局45x35x20mm。使用ATOMHUB你可以随意发挥创意，制作自己的硬件设备，比如自行接入电池，或者集成微型气泵+空气压力传感器做一个血压仪，甚至内置GPS+NBIOT模块做一个定位追踪系统。

## 产品特性

- 兼容Atom Matrix/Atom Lite
- 机身小巧
- 工业应用设计
- 多路接口输出
- 预留多种安装孔
- 创意DIY

## 包含

-  1x Proto 成品板(含GROVE接口)
-  1x 3.96*4P 公头&母头
-  6x 3.96*3P 公头&母头
-  1x ATOMHUB 外壳
-  1x DC 5V电源接口
-  4x 橡胶塞
-  1x 轨道夹具
-  2x 背板装饰片
-  4x 3M防滑垫
-  4x 强力磁铁 
-  4x M2*6mm 内六角杯头自攻螺丝
-  1x M2*20mm 内六角杯头机械牙螺丝
-  2x M4*10mm 内六角沉头螺丝
-  1x M2内六角扳手
-  1x M4内六角扳手

## 应用

- Atom扩展板
- 工业控制器节点
- 外设连接

<img src="assets/img/product_pics/atom_base/atomic/ATOMHUB.gif" width = 30%>

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
            <td>1x VH-3.96 4P 6x VH-3.96 3P 1x DC5V Input 1x GROVE </td>
        </tr>
        <tr>
            <td>机身尺寸</td>
            <td>72 x 40 x 30mm</td>
        </tr>
        <tr>
            <td>净重</td>
            <td></td>
        </tr>
        <tr>
            <td>毛重</td>
            <td></td>
        </tr>
        <tr>
            <td>外壳材质</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

## 使用方法

根据自身需求搭建电路原型，焊接相应元器件，通过VH-3.96接口连接外部电气设备。您也可以选择自行购买圆形防水接头连接线缆。如需通过外部电源供电，您可以选择通过USB直接给ATOM供电；或焊接DC 5V接头，并将正负极接至ATOM对应引脚，若输入电压高于5V，您需要自行搭建稳压电路。如果您需要使用GROVE,请将您确定使用的引脚号对应的焊盘断点进行连接。

## 案例程序

### 1. Arduino

在AtomHUB内使用降压电路和继电器搭建一个远程控制电路，继电器控制引脚为GPIO21，外接电源进行供电，通过WIFI连接苹果公司的HomeKit应用进行远程控制，打开HomeKit手动进行连接，默认密码11111111，使用Siri语音遥控或手动按键进行遥控。

[点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHub/Arduino_LED_Hap)获取完整代码

## 相关视频

**Demo**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/.mp4" type="video/mp4" >
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/atomhub-proto-kit';

   var quickstart_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>

