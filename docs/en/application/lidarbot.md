# LidarBot

<img src="assets/img/product_pics/application/lidarbot_01.jpg" width="250" height="250"> <img src="assets/img/product_pics/application/lidarbot_02.jpg" width="250" height="250"> <img src="assets/img/product_pics/application/lidarbot_03.jpg" width="250" height="250"> <img src="assets/img/product_pics/application/lidarbot_04.jpg" width="250" height="250"> <img src="assets/img/product_pics/application/lidarbot_05.jpg" width="250" height="250">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/Applications-LidarBot/tree/master/LidarBot/Example)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Lidar-Bot-Mini-Car-Lidar-8m-6Hz-McNamm-Wheels-NeoPixel-LED-Bar-with-ESP32/3226069_32951134988.html?spm=a2g1y.12024536.productList_5885013.subject_7)**

## Description

<mark>LidarBot</mark> is a four-wheeled car based on indoor navigation. The car body is loaded with lidar, four Mecanum wheels, control-wheel bottom board(based on MEGA328), two RGB bars, M5Core(CarMainController) and some LEGO holes.

Real-time communication via ESP-NOW between the car and the remote control handle. After receiving the control signal, the car master controlls the wheels and RGB bars through the specified protocol format.

And in addition to controlling the car's flexible front, rear, left and right movements, the indoor terrain can also be displayed on the display screens of the car master(M5Core) and the remote control handle.

## Feature

- Lidar: 8m @ 6Hz
- Programming Support
   + Arduino
- Compatible LEGO

## Protocol for CarBottomBoard

*Protocol Format：Data Header(command type) + Data Packet + Data Tail*

| Control Target          | Protocol Format                               |
| :-------------:  |:------------------------------------: |
| Wheels          | 0xAA,SpeedX,SpeedY,SpeedZ,SpeedA,0x55 |
| One RGB       | 0xAB,LedIndex,R,G,B,0x55              |
| Front RGB Bar    | 0xAC,R,G,B,0x55                       |
| Back RGB Bar    | 0xAD,R,G,B,0x55                       |
| All RGB       | 0xAE,R,G,B,0x55                       |
| ServoMotor0        | 0xAF,Angle,0x55                       |
| ServoMotor1        | 0xB0,Angle,0x55                       |

## PARAMETER

- Communication Parameter
    - M5Core(CarMain) <-> Lidar(GPIO16 <-> Lidar)
    Serial Configuration: "230400bps, 8, n, 1"(8 bits data, no parity, 1 stop bit)
    - M5Core(CarMain) <-> CarBottomBoard(GPIO17 <-> Lidar)
    Serial Configuration: "115200bps, 8, n, 1"(8 bits data, no parity, 1 stop bit)
- PinMap
    - ServoMotor0 <-> A0(MEGA328)
    - ServoMotor1 <-> A1(MEGA328)
    - NeoPixelRGB <-> 11(MEGA328)

## Include

- 1x LidarBot
- 1x Remote Control Handle
- 2x Battery(1300mAh @ 11.1V)
- 1x Power Charger
- 1x Type-C USB Cable

## APPLICATIONS

- Indoor Navigation
- Autonomous walking maze
- Route plan
- Autopilot