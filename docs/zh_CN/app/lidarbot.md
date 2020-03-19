# Application LidarBot

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K017</div>

<div class="product_pic"><img src="assets/img/product_pics/app/lidarbot_01.jpg"><img src="assets/img/product_pics/app/lidarbot_03.jpg"></div>

## 描述

**LidarBot** 是一款激光雷达车.配备360°激光雷达传感器、M5Core主控、4个麦克纳姆轮、车轮控制底板（集成MEGA328）、RGB灯条、操纵杆控制器等硬件.基于麦克纳姆轮技术的全方位运动小车可以实现前行、横移、斜行、旋转及其组合等运动方式.装配大容量锂电池为雷达小车提供长时间续航.

控制器与LidarBoT之间通过 ESP-NOW 进行实时通信，运行时你可以在控制器屏幕上查看由激光雷达传感器扫描的地图数据.我们在Github上提供了开源代码，基于官方源代码修改，你能够将雷达扫描等采集数据通过Wi-Fi或其他方式进行传输至其他节点.LidarBoT 能够应用在STEM教育领域用作编程学习、竞赛等活动.不仅如此，功能强大的它，同样适用于AGV开发领域的开发者进行项目开发.

## 产品特性

- 雷达: 8m @ 6Hz
- 开发平台
   + Arduino
   + UIFlow
- 兼容 LEGO

## 主控与底板之间的协议

*协议格式：帧头 ( 命令类型 ) + 数据帧 + 帧尾*

|协议对象| 协议格式         | 案例 |       调用函数               |
|:-------------:|:------------------------------------: |:---:|:---:|
|Wheels| 0xAA,SpeedX(-7 ~ 7),SpeedY,SpeedZ,SpeedA,0x55 |0xAA, 5, 5, 5, 5, 0x55(前进, 速度: 5)|ControlWheel(5, 5, 5)|
| One RGB| 0xAB,LedIndex,R(0 ~ 254),G,B,0x55| 0xAB, 3, 20, 50, 100, 0x55(3号灯点亮，显示指定颜色)|setLedColor(3, 20, 50, 100)|
| Front RGB Bar| 0xAC,R(0 ~ 254),G,B,0x55|0xAC, 20, 50, 100, 0x55(前向灯带点亮，显示指定颜色)|setFrontLedBar(20, 50, 100)|
| Back RGB Bar| 0xAD,R(0 ~ 254),G,B,0x55|0xAD, 20, 50, 100, 0x55(后向灯带点亮，显示指定颜色)|setBackLedBar(20, 50, 100)|
| All RGB| 0xAE,R(0 ~ 254),G,B,0x55|0xAE, 20, 50, 100, 0x55(全部灯带点亮，显示指定颜色)|setLedAll(20, 50, 100)|
| ServoMotor0 | 0xAF,Angle(0 ~ 180),0x55|0xAF, 100, 0x55(舵机 0 转动 100 °)|setServo0Angle(100)|
| ServoMotor1 | 0xB0,Angle(0 ~ 180),0x55|0xB0, 100, 0x55(舵机 1 转动 100 °)|setServo1Angle(100)|

<img src="assets/img/product_pics/app/lidarbot_04.jpg" width=60% height=60%>

## 参数

- 车身尺寸: 142mm x 117mm x 120mm
- 通信参数
    - M5Core(车体主控) <-> 激光雷达 (<mark>U1RXD(GPIO16)</mark> <-> 激光雷达)
    串口配置参数: "230400bps, 8, n, 1"(8 位数据, 无奇偶校验, 1 位停止位)
    - M5Core(车体主控) <-> 控制底板 (<mark>U2TXD(GPIO17)</mark> <-> 控制底板)
    串口配置参数: "115200bps, 8, n, 1"(8 位数据, 无奇偶校验, 1 位停止位)
- 接口
    - 舵机 0 <-> A0(MEGA328)
    - 舵机 1 <-> A1(MEGA328)
    - NeoPixelRGB <-> 11(MEGA328)

<img src="assets/img/product_pics/app/lidarbot_05.jpg" width="300" height="300">

## 产品比对

以下图片是 M5BOT 与 LidarBot 之间的比对表格。

<img src="assets/img/product_pics/app/CarComparison_zh_CN.png">

## 包含

- 1x LidarBot
- 1x 远程控制手柄
- 2x 电池(1300mAh @ 11.1V)
- 1x 电池充电器
- 1x Type-C USB

<img src="assets/img/product_pics/app/lidarbot_02.jpg" width="300" height="300">

## 应用

- 室内导航
- 自主走迷宫
- 路径规划
- 自动驾驶


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/LidarBOT/LidarBot_CarMain/EasyLoader_LidarBot_CarMain.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader/底座程序</button></a>

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/LidarBOT/LidarBot_RemoteController/LidarBot_RemoteController.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader/遥控程序</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 案例程序

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/Applications-LidarBot/tree/master/LidarBot/Example)。*

**例程目录**

├─LidarBot_CarMain_V1.1 - LidarBot主控程序

├─LidarBot_RemoteController_V1.0 - 控制器程序 V1.0

└─LidarBot_RemoteController_V1.2 - 控制器程序 V1.2(相比v1.0精度提高一倍)

#### 程序解析：

#### **1. LidarBot 主程序:**

```arduino
/* 主循环 */
void loop()
{
  espnow.BotConnectUpdate();// ESPNOW 断开重连/换设备重连
  lidarcar.MapDisplay();// 显示地图
  esp_now_send(espnow.peer_addr, lidarcar.mapdata, 180);// ESPNOW 发送地图数据
}
```

* **单个功能解析：**

   * 读取雷达数据的使用

      ```arduino
      #include "lidarcar.h"
      LidarCar lidarcar;

      lidarcar.Init();
      GetData();//得到雷达保存到数组 distance[]
      ```

   * 循迹的使用

      ```arduino
      #include "rprtrack.h"
      Rprtrack rprtrack;

      SensorStatus();// 巡线数值保存到数组 sensorValue[]
      CalTrackDev();// 处理数组 sensorValue[]，得出小车偏移情况，保存至变量OffsetLine
      ```

   * ESP_NOW的使用

      请参考此链接: https://github.com/m5stack/M5-espnow


#### **2. 遥控器主控程序：**

```arduino
/* 主循环 */
void loop()
{
  espnow.RemoteConnectUpdate();// ESPNOW断开重连/换设备重连
  keyboard.GetValue();//读取摇杆数据
  esp_now_send(espnow.peer_addr, keyboard.keyData, 3);// ESPNOW发送摇杆数据给小车主控
  MapDisplay();// 显示地图
  accessport.AnalzyCommand();// 发送地图数据给上位机
}
```

* **单个功能解析：**

   * JOYSTICK的使用

      ```arduino
      #include "keyboard.h"
      KeyBoard keyboard;

      keyboard.Init();
      GetValue();//手柄读数保存在adX, adY，并控制赋值给数组keyData[]和手柄RGB灯
      ```

   * 与上位机通信的使用

      ```arduino
      #include "accessport.h"
      AccessPort accessport;

      accessport.AnalzyCommand();// 发送地图数据给PC上位机
      ```

## 相关视频

**LidarBOT 案例**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/LidarBot.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-application/products/lidarbot-mecanum-wheels';


   anchor_search(purchase_link);
   scrollFunc();

</script>