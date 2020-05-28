# Module JOYSTICK

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A007</div>

<div class="product_pic"><img src="assets/img/product_pics/module/module_joystick_01.webp"></div>

## 描述

**JOYSTICK** 是一款兼容 FACE 套件的摇杆控制面板.通过推动面板上的摇杆能够进行角度、方向等数据的输入.使用I2C协议通讯，能够获取摇杆的偏移数据(X,Y坐标)，以及中间按钮的状态.在摇杆的周围嵌入了由12个LED组成的LED bar，你可以根据你的需求自定义LED灯的发光形式.

<img src="assets/img/product_pics/module/module_joystick_03.webp" width="60%" height="60%">

## 产品特性

-  12 RGB Led
-  I2C 通讯(0x5E)
-  简洁的API接口

## 功能函数

**控制RGB灯圈**

```arduino
/*
    Parameter:
        indexOfLED: 0 ~ 11
        r, g, b: 0 ~ 254
*/
void Led(int indexOfLED, int r, int g, int b){
  Wire.beginTransmission(FACE_JOY_ADDR);
  Wire.write(indexOfLED);
  Wire.write(r);
  Wire.write(g);
  Wire.write(b);
  Wire.endTransmission();
}
```

**读取摇杆各个方向的偏移量**

```arduino
void get_joystick_offset(void){
  Wire.requestFrom(FACE_JOY_ADDR, 5);
  if (Wire.available()) {

    y_data_L = Wire.read();
    y_data_H = Wire.read();
    x_data_L = Wire.read();
    x_data_H = Wire.read();

    button_data = Wire.read();// Z(0: released 1: pressed)
}
```

<img src="assets/img/product_pics/module/module_joystick_02.webp" width="60%" height="60%">

## 包含

-  1x M5Stack JOYSTICK 模块
-  1x Joystick 摇杆


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>22g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>50g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>58*54*10mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>95*65*25mm</td>
   </tr>
 </table>


## 相关链接

- **[JOYSTICK 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/firmware_328p/FaceJoystick328)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_joystick.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## 案例程序

### Arduino IDE

[请点击此处下载Arduino完整代码](https://github.com/m5stack/M5Stack/tree/master/examples/Face/JOYSTICK)

### UIFLOW

- **[UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/UIFlow)**

<img src="assets/img/product_pics/base/JOYSTICK.webp" >

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/joystick-module';
   
   anchor_search(purchase_link);
   scrollFunc();

</script>