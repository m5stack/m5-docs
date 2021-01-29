# Module ENCODER

<el-tag effect="plain">SKU:A006</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/module_encoder_01.webp"><img src="assets/img/product_pics/module/module_encoder_02.webp"></div>

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.12b9425efVP5Y2&id=583870225775)** -->

## 描述

**ENCODER** 是一款兼容 FACE 套件的旋钮控制面板.专为旋转编码控制而设计,其内部集成Mega328微处理器，在旋钮的周围嵌入了由12个LED组成的LED灯环.
M5Core与ENCODER之间的串行通信协议是I2C（地址：0x5E）

## 产品特性

-  RGB Led显示
-  I2C 通讯
-  简洁的API接口
-  内置Mega328
-  编码器检测

## 包含

-  1x M5Stack ENCODER 模块

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>RGB LED</td>
      <td>x12</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>27g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>47g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>58.2*54.2*28mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>95*65*25mm</td>
   </tr>
   <tr>
      <td>材质</td>
      <td>Plastic(PC)</td>
   </tr>
</table>


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_FACES_Encoder.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_FACES_Encoder_0x1000.dmg">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/FACES_ENCODER.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>显示编码器计数和按键状态，左转减少右转增加.</p>
        </div>
    </div>
</div>


## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## 相关链接

- **[ENCODER 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/ENCODER/firmware_328p/FacesEncoder328)**

## 功能函数

**控制RGB灯圈**

```arduino
/*
    Parameter:
        led_index: 0 ~ 11
        r, g, b: 0 ~ 254
*/
void Led(int led_index, int r, int g, int b){
    // I2C send data
    Wire.beginTransmission(Faces_Encoder_I2C_ADDR);
    Wire.write(led_index);
    Wire.write(r);
    Wire.write(g);
    Wire.write(b);
    Wire.endTransmission();
}
```

**读取编码器增量**

```arduino
void get_encoder_increment(void){
    int temp_encoder_increment;

    // I2C read data
    Wire.requestFrom(Faces_Encoder_I2C_ADDR, 3);
    if(Wire.available()){
       temp_encoder_increment = Wire.read();// get increment
       button_state = Wire.read();// get button value
    }
    if(temp_encoder_increment > 127){//anti-clockwise
        direction = 1;// flag for encoder direction
        encoder_increment = 256 - temp_encoder_increment;
    }
    else{// clockwise
        direction = 0;
        encoder_increment = temp_encoder_increment;
    }
}
```

## 案例程序

### 1.Arduino IDE

  - [点击此处下载Arduino代码](https://github.com/m5stack/M5Stack/tree/master/examples/Face/ENCODER)

### 2.UIFlow

<img src="assets/img/product_pics/module/module_example/ENCODER/encoder.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/encoder-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>