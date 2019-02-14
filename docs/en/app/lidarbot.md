# LidarBot {docsify-ignore-all}

<img src="assets/img/product_pics/app/lidarbot_01.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/lidarbot_03.jpg" width="250" height="250">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Lidar-Bot-Mini-Car-Lidar-8m-6Hz-McNamm-Wheels-NeoPixel-LED-Bar-with-ESP32/3226069_32951134988.html?spm=a2g1y.12024536.productList_5885013.subject_7)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**<mark>LidarBot</mark>** is a four-wheeled car based on indoor navigation. The car body is loaded with lidar, four Mecanum wheels, control-wheel bottom board(based on MEGA328), two RGB bars, M5Core(CarMainController) and some LEGO holes.

Real-time communication via ESP-NOW between the car and the remote control handle. After receiving the control signal, the car master controlls the wheels and RGB bars through the specified protocol format.

And in addition to controlling the car's flexible front, rear, left and right movements, the indoor terrain can also be displayed on the display screens of the car master(M5Core) and the remote control handle.

## Feature

- Lidar: 8m @ 6Hz
- Programming Support
   + Arduino
- Compatible LEGO

## Protocol for CarBottomBoard

*Protocol Format：Data Header(command type) + Data Packet + Data Tail*

|Control Target| Protocol Format         | Example |       Function               |
|:-------------:|:------------------------------------: |:---:|:---:|
|Wheels| 0xAA,SpeedX(-7 ~ 7),SpeedY,SpeedZ,SpeedA,0x55 |0xAA, 5, 5, 5, 5, 0x55(Go ahead, speed: 5)|ControlWheel(5, 5, 5)|
| One RGB| 0xAB,LedIndex,R(0 ~ 254),G,B,0x55| 0xAB, 3, 20, 50, 100, 0x55(3th RGB displays specific color)|setLedColor(3, 20, 50, 100)|
| Front RGB Bar| 0xAC,R(0 ~ 254),G,B,0x55|0xAC, 20, 50, 100, 0x55(Front LED Bar displays specific color)|setFrontLedBar(20, 50, 100)|
| Back RGB Bar| 0xAD,R(0 ~ 254),G,B,0x55|0xAD, 20, 50, 100, 0x55(Back LED Bar displays specific color)|setBackLedBar(20, 50, 100)|
| All RGB| 0xAE,R(0 ~ 254),G,B,0x55|0xAE, 20, 50, 100, 0x55(All LED display specific color)|setLedAll(20, 50, 100)|
| ServoMotor0 | 0xAF,Angle(0 ~ 180),0x55|0xAF, 100, 0x55(Servo 0 turns angle 100 degree)|setServo0Angle(100)|
| ServoMotor1 | 0xB0,Angle(0 ~ 180),0x55|0xB0, 100, 0x55(Servo 1 turns angle 100 degree)|setServo1Angle(100)|

<img src="assets/img/product_pics/app/lidarbot_04.jpg" width="300" height="300">

## PARAMETER

- The size of LidarBot: 142mm x 117mm x 120mm
- Communication Parameter
    - M5Core(CarMain) <-> Lidar(GPIO16 <-> Lidar)
    Serial Configuration: "230400bps, 8, n, 1"(8 bits data, no parity, 1 stop bit)
    - M5Core(CarMain) <-> CarBottomBoard(GPIO17 <-> Lidar)
    Serial Configuration: "115200bps, 8, n, 1"(8 bits data, no parity, 1 stop bit)
- PinMap
    - ServoMotor0 <-> A0(MEGA328)
    - ServoMotor1 <-> A1(MEGA328)
    - NeoPixelRGB <-> 11(MEGA328)

<img src="assets/img/product_pics/app/lidarbot_05.jpg" width="300" height="300">

## Include

- 1x LidarBot
- 1x Remote Control Handle
- 2x Battery(1300mAh @ 11.1V)
- 1x Power Charger
- 1x Type-C USB Cable

<img src="assets/img/product_pics/app/lidarbot_02.jpg" width="300" height="300">

## APPLICATIONS

- Indoor Navigation
- Autonomous walking maze
- Route plan
- Autopilot

## Example

*If you want the complete code, please click [here](https://github.com/m5stack/Applications-LidarBot/tree/master/LidarBot/Example)。*

**Tree for Example Directory**

├─LidarBot_CarMain_V1.1 - Main program of LidarBot

├─LidarBot_RemoteController_V1.0 - Program of RemoteController V1.0

└─LidarBot_RemoteController_V1.2 - Program of RemoteController V1.2(higher precision)

#### Program analysis:

#### **1. Main program of LidarBot:**

```arduino
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

      ```arduino
      #include "lidarcar.h"
      LidarCar lidarcar;

      lidarcar.Init();
      GetData();//save radar data to array distance[]
      ```

   * Usage of line following

      ```arduino
      #include "rprtrack.h"
      Rprtrack rprtrack;

      SensorStatus();// save line following data to array sensorValue[]
      CalTrackDev();// handle array sensorValue[], get car offset and save it
      ```

   * Usage of ESP_NOW

      Please refer to https://github.com/m5stack/M5-espnow


#### **2. Program of RemoteController**

```arduino
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

      ```arduino
      #include "keyboard.h"
      KeyBoard keyboard;

      keyboard.Init();
      // get joystick data and save to adX, adY
      GetValue();
      ```

   * Usage of communication with PC software

      ```arduino
      #include "accessport.h"
      AccessPort accessport;

      accessport.AnalzyCommand();// send map data to PC software
      ```

## Related Video

**Lidar Bot patrols the maze**

<iframe width="560" height="315" src="https://www.youtube.com/embed/vwzqqE8cL4I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
