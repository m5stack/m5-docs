# CardKB HAT

<el-tag effect="plain">SKU:U077</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat_01.webp"><img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat_02.webp"></div>

## 描述

**CardKB HAT** 是一款功能齐全的QWERTY键盘.如果你想要实现一些复杂的键盘输入交互,单纯依靠M5StickC上的按键实现起来很有难度，为了解决这一问题我们推出了CardKB HAT.

使用CardKB HAT不仅能够实现全键盘输入，还支持多种按键组合（Shift + Key，Fn + Key）输出更丰富的键值，一颗板载彩色LED能根据按键的输入模式会发出不同颜色的灯光提示，CardKB HAT的I2C地址为0x5F.

**按钮组合说明:**

* **按下单个按键**(蓝灯亮一次)，键盘将输出第一键值（字母键值则输出小写形式）. 例如，按下"Q"，键盘将输出"q"（小写形式）.

* **双击Shift或fn**，锁定Shift（红灯常亮）或Fn（绿灯常亮），方便多次输出第二或第三键值

* **Shift+key**(红灯闪烁)，键盘将输出字母的大写形式，复用按键将输出第二键值.例如，单击"Shift"后，按下"Q"，键盘将输出"Q"（大写形式）.双击"Shift"锁定功能，之后按下的任意字母按键都将输出大写形式，按下的数字和符号按键输出第二键值，再次单击"Shift"进行解锁.

* **Fn+key(自定义功能键组合)**(绿灯闪烁)，键盘将输出第三键值.你可以自定义按下的按键其对应的功能.

<img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat_04.webp">


## 产品特性

- 全键盘输入，多种按键组合.
- 小巧便携

## 包含

- 1x CardKB HAT

## 应用

- M5StickC键盘输入外设

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>通信协议</td>
      <td>I2C：0x5F</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>21g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>84.6*54.26.5mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>115*96*40mm</td>
   </tr>
 </table>

## 相关链接

- **[CardKB HAT固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/CardKB_HAT/firmware_328p/cardKB_HAT)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/CardKB/EasyLoader_CardKB_HAT.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp">

## 通讯协议

- 协议类型I2C
- I2C Address: **0x5F**     

```clike
/*--------------------------------------------------------------------------------------------------*/
| KEYBOARD REG       | 0x5F
| ------------------------------------------------------------------------------------------------
| keyboard_value_reg[0]        |  R |  KEYBOARD VALUE
/*----------------------------------------------------------------------------------------------------
```

## 案例程序

### 1. Arduino

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/CardKB_HAT)获取完整代码

### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/CardKB_HAT/UIFLOW)

<img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat.webp" width="70%" height="70%">

## 相关视频

**CardKB HAT 的使用演示**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/CardKB_HAT.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/cardkb-hat';


   anchor_search(purchase_link);
   scrollFunc();

</script>