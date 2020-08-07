## LidarBOT

#### Feature introduction

> Radar scan navigation car，which can control light，walking and display map

><img src="/image/Modules/LidarBOT.webp" width="50%"> 

* __Lidarbot set with neopixel__
Set the radar car led color

* __Lidarbot set number with neopixel__
Set the led color separately

* __Lidarbot Seed(0 ± 7)__
Set walking direction and speed

* __Lidarbot set Motor Speed X(-7 ~ 7) Y(-7 ~ 7) Z(-7 ~ 7) A(-7 ~ 7)__
Set the motor speed and direction in the X and Y directions

* __Lidarbot set Servo angle__
Set the steering angle

* __Lidarbot X axis speed(0±7）Y axis speed (0±7)__
Set the X and Y axis directions

* __Lidarbot Draw Map__
Drawing a radar map

* __Lidarbot Get Distance__
Read the specified angle obstacle distance

#### Usage

> The car goes forward at 3 speeds for 5 seconds.

><img src="/image/Modules/LidarBOT_user.webp" width="70%"> 


## STEPMOTOR

#### Feature introduction

> Stepper motor control

><img src="/image/Modules/STEPMOTOR.webp" width="50%"> 

* __Motor Address__
Module's I2C address

* __Motor X Y Z Speed__
Set the stepping motor X-axis Y-axis Z-axis rotation steps and speed

* __Put g code__
Run G code

* __Set mode__
Set the motor into operating mode, distance mode or relative value mode

* __lock motor__
Lock motor

* __unlock motor__
Unlock motor


#### Usage

> Motor is running alternately in reverse

><img src="/image/Modules/STEPMOTOR_user.webp" width="70%"> 


## SERVO

#### Feature introduction

> Steering gear control

><img src="/image/Modules/SERVO.webp" width="40%"> 

* __Set servo rotate__
Set the specified servo angle

* __Set servo write us__
Set the servo pulse time

#### Usage

> Control the 0-5 steering gear to rotate 90 degrees

><img src="/image/Modules/SERVO_user.webp" width="70%"> 


## Bala Motor

#### Feature introduction

> Control the operation of Bala coded motor

><img src="/image/Modules/Bala Motor.webp" width="40%"> 

* __set rotate speed__
Set the motor rotation direction and speed

* __Run Speed__
Set a certain number of pulses to travel in a running direction at a certain speed

* __Go To Position MaxSpeed__
Run 500 pulses at the set speed

* __Stop__
Motor stop

* __Read encode__
Read encoder value


#### Usage

> Press button A and it will move forward 500 pulses at a speed of 255

><img src="/image/Modules/Bala Motor_user.webp" width="70%"> 


## Bala

#### Feature introduction

> Control the operation of Bala

><img src="/image/Modules/BALA.webp" width="40%"> 

* __Move__
Set the motor rotation direction and speed

* __Turn__
Set the number of turning pulses

* __Rotate to__
Set the turning degree

* __get angle__
Return current angle

* __set angle offset__
Set the angular offset

* __balance loop__
Auto balance

#### Feature introduction

>Bala will turn 45 degree in advancing every 500 pulses

><img src="/image/Modules/BALA_user.webp" width="70%"> 


## LEGO+

#### Feature introduction

>Control the operation of lego code motor

><img src="/image/Modules/LEGO+.webp" width="40%"> 

* __Set rotate pwm__
Set motor direction and speed

* __Stop__
Motor stop

* __Clear encode__
Encoder clear

* __Read encode__
Read encoder data

#### Usage

>Set the motor to stop after running for 5 seconds

><img src="/image/Modules/LEGO+_user.webp" width="70%"> 


## PM2.5

#### Feature introduction

> Dust particle detection, output concentration or quantity

><img src="/image/Modules/PM2.5.webp" width="40%"> 

* __PM2.5 get value in__
Set the mode into particle diameter detecting and  checking, return the detection result - SPM is the standard particle concentration value while APM is the atmospheric environment particle concentration value


* __PM2.5 get particles above um number__
Return the amount of particulate matter in the specified diameter


#### Usage

> The screen shows the amount of PM2.5 particles

><img src="/image/Modules/PM2.5_user.webp" width="70%"> 

# BaseX

#### Feature introduction

> Control LEGO motors and servos

><img src="/image/Modules/BaseX.webp" width="40%"> 

* __Set to Mode__
Set motor mode (normal / position / speed)

* __Get encoder value__
Get the value of the encoder

* __Set encoder__
Set the value of the encoder

* __Set speed__
Set motor speed

* __Get speed in 20ms__
Get the speed of the motor in 20ms

* __Set position point to__
Set the motor position

* __Set position PID max speed to__
Set position mode motor speed

* __Set speed point to__
Set motor speed（speed mode）

* __Run ahead__
Go forward to the specified position

* __Set Servo angle to__
Set the servo angle

* __Set Servo pulse to__
Set the number of servo pulses

#### USAGE

> Set the motor to 1000 at a speed of 50

><img src="/image/Modules/BaseX_user.webp" width="50%"> 

## PLUS

#### Feature introduction

> Read encoder

><img src="/image/Modules/PLUS.webp" width="40%"> 

* __Get encode__
Get encoder value

* __Get press__
Get encoder button value

* __Clean encode__
Clear encoder

#### Usage

> Show encoder status

><img src="/image/Modules/PLUS_user.webp" width="70%"> 

## GoPlus

#### Feature introduction

> Read encoder

><img src="/image/Modules/GoPlus.webp" width="40%"> 

* __Get encode__
Read encoder value

* __Clean encode__
clear encoder

* __Get press__
read encoder button

#### Usage

> display encoder status

><img src="/image/Modules/GoPlus_user.webp" width="70%"> 

## GPS

#### Feature Introduction

>Get GPS information

><img src="/image/Units/GPS.webp" width="30%"> 

* __get time__
Get local time

* __get latitude__
Get latitude

* __get longitude__
Get longitude

* __get satellite num__
Number of satellites acquired

* __get positioning quality__
Get positioning quality

* __get speed__
Obtain relative ground speed

* __get course__
Get geographic north pole location

* __set time zone__
Set local time zone

#### Usage

> Display GPS related information on the screen

><img src="/image/Units/GPS_user.webp" width="80%"> 