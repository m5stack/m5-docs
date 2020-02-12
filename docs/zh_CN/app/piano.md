# Application PIANO {docsify-ignore-all}

<img src="assets/img/product_pics/app/app_piano_01.png" width="30%" height="30%">


## 描述

**PIANO** 是一款触摸板钢琴.配备两个触摸传感器**TS20**，通过I2C协议与M5Core进行通信.通过触摸控制钢琴的发声，适合应用在STEM教育与音乐表演场景.

I2C 地址分别为0x6A和0x7A.

<img src="assets/img/product_pics/app/app_piano_02.png">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/PIANO/EasyLoader_APP_PIANO.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)



## 案例程序

- [Github](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/App/PIANO/Arduino/M5PIANO/M5PIANO.ino)

## 管脚映射

**触摸芯片 TS20 & LED灯**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO7</td><td>GPIO6</td><td>GPIO5</td><td>GPIO26</td><td>GPIO2</td></tr>
 <tr><td>TS20</td><td>RESET</td><td>EN</td><td>SCL</td><td>SDA</td><td>/</td></tr>
 <tr><td>RGB LED</td><td>/</td><td>/</td><td>/</td><td>/</td><td>Signal Pin</td></tr>
</table>


<script>

   var purchase_link = 'ttps://m5stack.com/collections/m5-application/products/acrylic-piano-board-with-rgb-led';


   anchor_search(purchase_link);
   scrollFunc();

</script>