# Butterfly Launcher

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A041-B</div>

<div class="product_pic"><img src="assets\img\product_pics\app\butterfly\butterfly_01.webp"><img src="assets\img\product_pics\app\butterfly\butterfly_02.webp"></div>

## 描述

**Butterfly Launcher** 是一个酷炫的蝴蝶模型发射器，相比旧版本的发射器，新版配备了MEGA328微处理器、锂电池组件、18个彩色LED灯，以及提供了两个拓展端口（分别用于电源，串口通信）. 实际使用时能够同时串联多个设备，并独立控制它们.
<br>
串行通信机制：将多个设备进行串联，为了准确的向某个设备发送指令，我们在代码中附加"id"变量，当指令通过控制器串行传输到设备时，每经过一个设备，变量都将进行减一操作，读取到变量为0的设备则执行命令.
<br>
因此，1，我们能够独立控制串行设备中的任意一个，并单独设置它们的LED颜色，闪烁模式，亮度和伺服状态.
2,如同下方视频所示，在LED灯演示时，存在着一定的延迟，假设每个设备有100ms的延迟，并且我们总共有10个，则最后一个设备将有1s的延迟时间.为了优化这种延迟，我们可以对第一个设备进行编程以等待最后一个设备（由于协议的特性，延迟的产生是无法避免的）

## 产品特性

- 可串接拓展
- RGB LED
- 支持 [UIFlow](http://flow.m5stack.com)（Blockly/图形化语言）

<img src="assets\img\product_pics\app\butterfly\butterfly_03.webp" width="30%" height="30%"> <img src="assets\img\product_pics\app\butterfly\butterfly_04.webp" width="30%" height="30%">


## 包含

- BUTTERFLY发射器
- 纸蝴蝶模型
- CONNEXT连接线
- 橡皮筋

## 应用

- 时尚科技
- STEM教育

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>电池容量</td>
      <td>120mA</td>
   </tr>
   <tr>
      <td>RGB LED</td>
      <td>x 18</td>
   </tr>
   <tr>
      <td>通讯方式</td>
      <td>UART</td>
   </tr>
</table>


## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## 装配步骤

### 按钮功能（正面）
 - 右：单击打开电源，双击打开电源。
 - 左：长按直到led cricle变为另一种颜色，松开按钮。然后短按它将调整伺服臂。重复上述过程以获得正确的位置。

### 装配蝴蝶模型

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/App/Butterfly/butterfly_assembly_steps.mp4" type="video/mp4" >
</video>

### 外接电源（在设备连接超过10个的情况下，会需要外接电源使其稳定）

<br><br>
<img src="assets/img/product_pics/app/butterfly/6.webp" width="30%" height="30%">

注意：
1）在线路末端添加电源，或者使用（GROVE-usbA连接线+充电宝）或（GROVE-usbA连接线 + 5V充电头）
2）grove 2 usbA连接线
3）带GROVE公端口的墙上插头

## 推荐步骤

1）使用m5go连接设备，在末端连接额外的电源。
2）使用uiflow测试代码测试线路，确保每个设备正常工作。
3）使用设备上的按钮加载蝴蝶.
4）编程M5GO上的按钮启动发射蝴蝶
 
<img src="assets/img/product_pics/app/butterfly/1.webp" width="30%" height="30%">
<img src="assets/img/product_pics/app/butterfly/2.webp" width="30%" height="30%">
<img src="assets/img/product_pics/app/butterfly/3.webp" width="30%" height="30%">
<img src="assets/img/product_pics/app/butterfly/4.webp" width="30%" height="30%">

## 案例程序

下载[UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Application/butterfly)示例

关于控制程序，我们在UIFLow上封装了一个特别的程序块, 这使得您能够简单地编写控制程序.下面将向您展示如何在UIFlow上添加程序块.

>1，导航到"自定义"，单击"打开"* m5d

<img src="assets\img\product_pics\app\butterfly\1.webp">

>2，选择butterfly.m5d

<img src="assets\img\product_pics\app\butterfly\2.webp">

>3，展开Custom选项，选择蝴蝶程序块.

<img src="assets\img\product_pics\app\butterfly\3.webp">

<img src="assets/img/product_pics/app/butterfly/4.webp">

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/App/Butterfly/butterfly.mp4" type="video/mp4" >
</video>



<script>

   var purchase_link = 'https://m5stack.com/collections/m5-application/products/butterfly-launcher';


   anchor_search(purchase_link);
   scrollFunc();

</script>