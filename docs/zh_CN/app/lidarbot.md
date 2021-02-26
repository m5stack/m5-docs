# LidarBot

<el-tag effect="plain">SKU:K017</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/app/lidarbot_01.webp"><img src="assets/img/product_pics/app/lidarbot_03.webp"></div>

## 描述

**LidarBot** 是一款激光雷达车.配备360°激光雷达传感器、M5Core主控、4个麦克纳姆轮、车轮控制底板（集成MEGA328）、RGB灯条、操纵杆控制器等硬件,此外额外附送一个TRACE寻迹模块套件用于黑白轨迹的识别.基于麦克纳姆轮技术的全方位运动小车可以实现前行、横移、斜行、旋转及其组合等运动方式.装配大容量锂电池为雷达小车提供长时间续航.

控制器与LidarBoT之间通过 ESP-NOW 进行实时通信，运行时你可以在控制器屏幕上查看由激光雷达传感器扫描的地图数据.我们在Github上提供了开源代码，基于官方源代码修改，你能够将雷达扫描等采集数据通过Wi-Fi或其他方式进行传输至其他节点.LidarBoT 能够应用在STEM教育领域用作编程学习、竞赛等活动.不仅如此，功能强大的它，同样适用于AGV开发领域的开发者进行项目开发.

## 产品特性

- 雷达: 8m @ 6Hz
- ESP-NOW遥控
- 具备寻迹功能
- 开发平台
   + Arduino
   + UIFlow
- 兼容 LEGO


## 包含

- 1x LidarBot
- 1x 远程控制手柄
- 1x 寻迹模块套件
- 2x 电池(1300mAh @ 11.1V)
- 1x 电池充电器
- 1x Type-C USB

<img src="assets/img/product_pics/app/lidarbot_02.webp" width="300" height="300">

## 应用

- 室内导航
- 自主走迷宫
- 路径规划
- 自动驾驶

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>1980g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>2140g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>142*117*120mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>208*208*167mm</td>
   </tr>
 </table>


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

<img src="assets/img/product_pics/app/lidarbot_04.webp" width=60% height=60%>

## 参数

- 通信参数
    - M5Core(车体主控) <-> 激光雷达 (<mark>U1RXD(GPIO16)</mark> <-> 激光雷达)
    串口配置参数: "230400bps, 8, n, 1"(8 位数据, 无奇偶校验, 1 位停止位)
    - M5Core(车体主控) <-> 控制底板 (<mark>U2TXD(GPIO17)</mark> <-> 控制底板)
    串口配置参数: "115200bps, 8, n, 1"(8 位数据, 无奇偶校验, 1 位停止位)
- 接口
    - 舵机 0 <-> A0(MEGA328)
    - 舵机 1 <-> A1(MEGA328)
    - RGB LED <-> 11(MEGA328)

<img src="assets/img/product_pics/app/lidarbot_05.webp" width="300" height="300">


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/LidarBOT/LidarBot_CarMain/EasyLoader_LidarBot_CarMain.exe"><el-button type="primary">点击下载EasyLoader/底座程序</el-button></a>

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/LidarBOT/LidarBot_RemoteController/LidarBot_RemoteController.exe"><el-button type="primary">点击下载EasyLoader/遥控程序</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

?>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython?id=%e9%a9%b1%e5%8a%a8%e5%ae%89%e8%a3%85)


## 连接与配对

案例程序提示：

### 控制和显示

在雷达车和手柄已经匹配的情况下，雷达车和手柄可以通过EspNow互发消息，雷达车的雷达信息可以显示到手柄上，手柄也可以通过EspNow控制小车的移动。

- 普通控制模式：移动手柄摇杆，小车将实现前进后退和转向。
- 全向控制模式：按住手柄A键即手柄屏幕三个按钮中最左边的按钮，再移动摇杆可以实现左右的横移，但是前后的方向是反过来的。

### 连接与匹配 

在未连接状态或者有一方没连接另外一方的情况下，显示或者控制都有可能出现问题，这时候我们都需要做一个重新的连接。
- 雷达车按住C键不放按一下M5Core的电源键，等待屏幕重启完松开C键即可进入广播模式，所有从机都会收到主机发来的信号。
- 在雷达车进入广播模式的情况下，我们按住手柄C键不放再按一下手柄的电源键，等待手柄重启完成再松开C键即可在屏幕上查看到当前广播的主机。我们通过A/C键向上向下选择，然后按B键确定想要连接的主机的Mac地址，主机的Mac地址可以通过手机或者电脑查看附近的Wi-Fi，以lidar开头后面紧接着的就是主机的Mac地址。
- 确认完主机之后，主机即雷达车屏幕将收到从机的确认信号，同样通过ABC键选择和确定从机即手柄的地址。当按下B键确定之后，雷达车和手柄就完成了通信的配置，双方可以互发消息，实现雷达图显示和手柄控制。

### 网页显示雷达图像

在雷达车启动完成之后，不需要雷达车和手柄完成匹配，便可以通过连接雷达车Wi-Fi，然后通过手机或者电脑浏览器访问192.168.4.1/map看到雷达图像信息。
   


## 案例程序

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/Applications-LidarBot/tree/master/LidarBot/Example)。*

**例程目录**

├─LidarBot_CarMain_V1.1 -  LidarBot主控程序

├─LidarBot_RemoteController_V1.0 - 控制器程序 V1.0

└─LidarBot_RemoteController_V1.2 - 控制器程序 V1.2(相比v1.0精度提高一倍)

#### 程序解析：

#### **1. LidarBot 主程序:**

```clike
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

      ```clike
      #include "lidarcar.h"
      LidarCar lidarcar;

      lidarcar.Init();
      GetData();//得到雷达保存到数组 distance[]
      ```

   * 循迹的使用

      ```clike
      #include "rprtrack.h"
      Rprtrack rprtrack;

      SensorStatus();// 巡线数值保存到数组 sensorValue[]
      CalTrackDev();// 处理数组 sensorValue[]，得出小车偏移情况，保存至变量OffsetLine
      ```

   * ESP_NOW的使用

      请参考此链接: https://github.com/m5stack/M5-espnow


#### **2. 遥控器主控程序：**

```clike
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

      ```clike
      #include "keyboard.h"
      KeyBoard keyboard;

      keyboard.Init();
      GetValue();//手柄读数保存在adX, adY，并控制赋值给数组keyData[]和手柄RGB灯
      ```

   * 与上位机通信的使用

      ```clike
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