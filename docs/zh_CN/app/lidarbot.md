# LidarBot {docsify-ignore-all}

<img src="assets/img/product_pics/app/lidarbot_01.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/lidarbot_03.jpg" width="250" height="250">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.17fd425e0xq2aq&id=580401820385)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>LidarBot</mark>**是一款以室内导航为基础的四轮小车。车体装载了激光雷达、四个麦克纳姆轮、车轮控制低板(主控芯片是MEGA328)、前后RGB灯带(共16颗)、M5Core主控、多个LEGO孔。车与远程遥控手柄之间通过ESP-NOW实时通信，而小车主控接收到控制信号后，通过规定的协议格式实现控制车轮和RGB灯带等。除了能控制小车灵活地前后左右移动之外，还能在小车主控和手柄主控各自的显示屏上显示室内地形。

## 特性

- 雷达: 8m @ 6Hz
- 支持Arduino编程
- 兼容LEGO件

## 小车主控与底板之间的协议

*协议格式：帧头(命令类型)+数据帧+帧尾*

| 协议对象          | 协议格式                               | 举例                              |调用函数|
| :-------------:  |:------------------------------------: |:---:|:---:|
| 控制车轮          | 0xAA,SpeedX(-7 ~ 7),SpeedY,SpeedZ,SpeedA,0x55 | 0xAA, 5, 5, 5, 5, 0x55(前进，速度5)       |ControlWheel(5, 5, 5)|
| 控制单颗RGB       | 0xAB,LedIndex,R(0 ~ 254),G,B,0x55              | 0xAB, 3, 20, 50, 100, 0x55(第三颗灯亮指定颜色)|setLedColor(3, 20, 50, 100)|
| 控制前向RGB灯带    | 0xAC,R(0 ~ 254),G,B,0x55                       | 0xAC, 20, 50, 100, 0x55(前向灯带亮指定颜色)|setFrontLedBar(20, 50, 100)|
| 控制后向RGB灯带    | 0xAD,R(0 ~ 254),G,B,0x55                       |0xAD, 20, 50, 100, 0x55(后向灯带亮指定颜色)|setBackLedBar(20, 50, 100)|
| 控制全部RGB       | 0xAE,R(0 ~ 254),G,B,0x55                       |0xAE, 20, 50, 100, 0x55(全部灯亮指定颜色)|setLedAll(20, 50, 100)|
| 控制舵机0        | 0xAF,Angle(0 ~ 180),0x55                       |0xAF, 100, 0x55(舵机0转动100度)|setServo0Angle(100)|
| 控制舵机1        | 0xB0,Angle(0 ~ 180),0x55                       |0xB0, 100, 0x55(舵机1转动100度)|setServo1Angle(100)|

<img src="assets/img/product_pics/app/lidarbot_04.jpg" width="300" height="300">

## 参数

- 小车车身尺寸(长宽高)：142mm x 117mm x 120mm
- 通信参数
    - 车体的M5Core主控与激光雷达传感器（雷达TXD <-> U2RXD(GPIO16)）
    串口参数：230400bps，8位数据位，无奇偶校验，1位停止位
    - 车体的M5Core主控与车轮控制底板（底板RXD <-> U2TXD(GPIO17)）
    串口参数：115200bps，8位数据位，无奇偶校验，1位停止位

- 接口
    - 舵机0 <-> A0(MEGA328)
    - 舵机1 <-> A1(MEGA328)
    - RGB灯条 <-> 11(MEGA328)

<img src="assets/img/product_pics/app/lidarbot_05.jpg" width="300" height="300">

## 包含

- 1x 雷达车
- 1x 远程遥控手柄
- 2x 电池(1300mAh @ 11.1V)
- 1x 电池充电器
- 1x Type-C USB线

<img src="assets/img/product_pics/app/lidarbot_02.jpg" width="300" height="300">

## 应用

- 室内导航
- 自主走迷宫
- 路径规划
- 自动驾驶

## 例程

*如果需要完整例程请点击[这里](https://github.com/m5stack/Applications-LidarBot/tree/master/LidarBot/Example)。*

**Example目录树**

├─LidarBot_CarMain_V1.1 - 雷达车主控程序

├─LidarBot_RemoteController_V1.0 - 遥控手柄程序V1.0

└─LidarBot_RemoteController_V1.2 - 遥控手柄程序V1.2(相比V1.0精度提高一倍)

#### 程序解析：

#### **1. 雷达车主控程序：**

```arduino
/* 主循环 */
void loop()
{
  espnow.BotConnectUpdate();// ESPNOW断开重连/换设备重连
  lidarcar.MapDisplay();// 显示地图
  esp_now_send(espnow.peer_addr, lidarcar.mapdata, 180);// ESPNOW发送地图数据
}
```

* **单个功能解析：**

   * 读取雷达数据的使用

      ```arduino
      #include "lidarcar.h"
      LidarCar lidarcar;

      lidarcar.Init();
      GetData();//得到雷达保存到数组distance[]
      ```

   * 循迹的使用

      ```arduino
      #include "rprtrack.h"
      Rprtrack rprtrack;

      SensorStatus();// 巡线数值保存到数组sensorValue[]
      CalTrackDev();// 处理数组sensorValue[]，得出小车偏移情况，保存至变量OffsetLine
      ```

   * ESP_NOW的使用

      请参考此链接: https://github.com/m5stack/M5-espnow


#### **2. 手柄主控程序：**

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

**Lidar Bot 在迷宫中巡线**

<iframe height=498 width=510 src='https://player.youku.com/embed/XNDAyODEzMDQ2MA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
