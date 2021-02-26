# LidarBot

<el-tag effect="plain">SKU:K017</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/app/lidarbot_01.webp"><img src="assets/img/product_pics/app/lidarbot_03.webp"></div>

## Description

**LidarBot** is a powerful development kit for Automated Guided Vehicles(AGVs). Comes with a 360 Lidar sensor, 4 Mecanum wheels, M5 Core, RGB Bars and a remote conroller with Joystick panel and more。In addition, a trace kit is attached for the identification of black or white track line.
With 4 Mecanum wheels, you can make it move to any direction, forward, backward, to left and to right. The Lipo Batteries enpower the Robot to run long-hours. You can display the map data, that obtained from the lidar sensor, on the screen or upload somewhere else thru Wi-Fi and program it into any format.
We have implemented Real-time communication via ESP-NOW between robot and remote, Mazing-runing , self-tracing and more.
If you are interest in AGV development, We especially encourage you to modify the open source code we have offered on github and enhance it yourself.

## Product Features

- Lidar: 8m @ 6Hz
- Programming Support
- ESP-NOW Remote
- With tracking function
   + Arduino
   + UIFlow (Blockly)
   + Python
- ESP-NOW communication
- Mecanum wheels
- Compatible LEGO

## Include

- 1x LidarBot
- 1x TRACE Kit
- 1x Remote Control Handle
- 2x Battery(1300mAh @ 11.1V)
- 1x Power Charger
- 1x Type-C USB Cable

<img src="assets/img/product_pics/app/lidarbot_02.webp" width="300" height="300">

## Applications

- Indoor Navigation
- Autonomous walking maze
- Route plan
- Autopilot

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>1980g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>2140g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>142*117*120mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>208*208*167mm</td>
   </tr>
 </table>

 
## Protocol for CarBottomBoard

*Protocol Format: Data Header ( command type ) + Data Packet + Data Tail*

|Control Target| Protocol Format         | Example |       Function               |
|:-------------:|:------------------------------------: |:---:|:---:|
|Wheels| 0xAA,SpeedX(-7 ~ 7),SpeedY,SpeedZ,SpeedA,0x55 |0xAA, 5, 5, 5, 5, 0x55(Go ahead, speed: 5)|ControlWheel(5, 5, 5)|
| One RGB| 0xAB,LedIndex,R(0 ~ 254),G,B,0x55| 0xAB, 3, 20, 50, 100, 0x55(3th RGB displays specific color)|setLedColor(3, 20, 50, 100)|
| Front RGB Bar| 0xAC,R(0 ~ 254),G,B,0x55|0xAC, 20, 50, 100, 0x55(Front LED Bar displays specific color)|setFrontLedBar(20, 50, 100)|
| Back RGB Bar| 0xAD,R(0 ~ 254),G,B,0x55|0xAD, 20, 50, 100, 0x55(Back LED Bar displays specific color)|setBackLedBar(20, 50, 100)|
| All RGB| 0xAE,R(0 ~ 254),G,B,0x55|0xAE, 20, 50, 100, 0x55(All LED display specific color)|setLedAll(20, 50, 100)|
| ServoMotor0 | 0xAF,Angle(0 ~ 180),0x55|0xAF, 100, 0x55(Servo 0 turns angle 100 degree)|setServo0Angle(100)|
| ServoMotor1 | 0xB0,Angle(0 ~ 180),0x55|0xB0, 100, 0x55(Servo 1 turns angle 100 degree)|setServo1Angle(100)|

<img src="assets/img/product_pics/app/lidarbot_04.webp" width=60% height=60%>

## PARAMETER

- The size of LidarBot: 142mm x 117mm x 120mm
- Communication Parameter
    - M5Core <-> Lidar
   (<mark>U1RXD(GPIO16)</mark> <-> Lidar sensor)
    Serial Configuration: "230400bps, 8, n, 1"(8 bits data, no parity, 1 stop bit)
    - M5Core <-> Bottom Board
   (<mark>U2TXD(GPIO17)</mark> <-> Bottom Board)
    Serial Configuration: "115200bps, 8, n, 1"(8 bits data, no parity, 1 stop bit)
- PinMap
    - ServoMotor0 <-> A0(MEGA328)
    - ServoMotor1 <-> A1(MEGA328)
    - RGB LED <-> 11(MEGA328)

<img src="assets/img/product_pics/app/lidarbot_05.webp" width="300" height="300">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/LidarBOT/LidarBot_CarMain/EasyLoader_LidarBot_CarMain.exe"><el-button type="primary">click to download EasyLoader/Bottom</el-button></a>

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/LidarBOT/LidarBot_RemoteController/LidarBot_RemoteController.exe"><el-button type="primary">click to download EasyLoader/Remote</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

?>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/quick_start/m5core/m5stack_core_get_started_MicroPython?id=driver-installation)


## Connect And Pair

If you have no map on the screen of your remote, reconnect it.

### Control and Display 

where the radar cart and handle have matched, Radar car and handle can send messages to each other through EspNow, radar information of radar car can be displayed to handle, handle can also control the trolley movement through EpNow.

- Normal control mode: move the handle rocker, the trolley will realize forward backward and steering.

- Omnidirectional Control Mode: Press and hold the handle A key that is the most left on in the handle screen three ons, and then move the rocker to achieve the right and left sideways, but the front and back direction is the other way around.

### Connection and Matching 

In the unconnected state or if one party is not connected to the other party, there may be problems with the display or control, and we all need to make a new connection.

- Radar car hold down the C key without putting down the M5Core power on, wait for the screen to restart the end release C on to enter the broadcast mode, all the slave will receive a signal from the host.

- In the case of the radar vehicle into broadcast mode, we hold down the handle C key and then press the handle power on, wait for the handle restart complete and then release C on to view the current broadcast host on the screen. We select up and down through the A / C key, then press B to determine the Mac address of the host we want to connect to, The host's Mac address can be accessed from your phone or computer to view nearby Wi-Fi, beginning with lidar followed by the host Mac's address.

- After confirming the host, the host that is the radar car screen will receive the confirmation signal from the slave, also through the ABC key to select and determine the address of the slave. When the B key is pressed, the communication configuration between the radar vehicle and the handle is completed. The two sides can send messages to each other to realize the display of radar map and control of the handle.

### Web page display

radar image After the radar vehicle is started up, it doesn't need to match the radar cart and handle, it can be connected to the Radar Car Wi-Fi, Then visit 192.168.4.1 / map through your mobile phone or computer browser to see the radar image information.

## Example

*To get complete code, please click [here](https://github.com/m5stack/Applications-LidarBot/tree/master/LidarBot/Example)。*

**Tree for Example Directory**

├─LidarBot_CarMain_V1.1 - Main program of LidarBot

├─LidarBot_RemoteController_V1.0 - Program of RemoteController V1.0

└─LidarBot_RemoteController_V1.2 - Program of RemoteController V1.2(higher precision)

#### Program analysis:

#### **1. Main program of LidarBot:**

```clike
/* Main program */
void loop()
{
  espnow.BotConnectUpdate();// ESPNOW reconnect
  lidarcar.MapDisplay();// display map
  esp_now_send(espnow.peer_addr, lidarcar.mapdata, 180);// ESPNOW sends map data
}
```

* **Single function resolution:**

   * Usage of reading radar data

      ```clike
      #include "lidarcar.h"
      LidarCar lidarcar;

      lidarcar.Init();
      GetData();//save radar data to array distance[]
      ```

   * Usage of line following

      ```clike
      #include "rprtrack.h"
      Rprtrack rprtrack;

      SensorStatus();// save line following data to array sensorValue[]
      CalTrackDev();// handle array sensorValue[], get car offset and save it
      ```

   * Usage of ESP_NOW

      Please refer to https://github.com/m5stack/M5-espnow


#### **2. Program of RemoteController**

```clike
/* Main program */
void loop()
{
  espnow.RemoteConnectUpdate();// ESPNOW reconnect
  keyboard.GetValue();// read data of joystick
  // ESPNOW sends joystick data to car
  esp_now_send(espnow.peer_addr, keyboard.keyData, 3);
  MapDisplay();// display map
  accessport.AnalzyCommand();// send map data to PC software
}
```

* **Single function resolution:**

   * Usage of JOYSTICK

      ```clike
      #include "keyboard.h"
      KeyBoard keyboard;

      keyboard.Init();
      // get joystick data and save to adX, adY
      GetValue();
      ```

   * Usage of communication with PC software

      ```clike
      #include "accessport.h"
      AccessPort accessport;

      accessport.AnalzyCommand();// send map data to PC software
      ```

## Video

**LidarBOT Case**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/LidarBot.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-application/products/lidarbot-mecanum-wheels';

   anchor_search(purchase_link);
   scrollFunc();

</script>