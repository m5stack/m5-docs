# LidarBOT
__________________________

#### Feature introduction

> Radar scan navigation car, control walking and lighting, display map

><img src="/image/Modules/LidarBOT.png" width="20%"> 

>* __Lidarbot set with neopixel__
Set the radar car led color

>* __Lidarbot set number with neopixel__
Set the led color separately

>* __Lidarbot Seed(0±7)__
Set walking direction and speed

>* __Lidarbot set Motor Speed X(-7~7) Y(-7~7) Z(-7~7) A(-7~7)__
Set the motor speed and direction in the X and Y directions

>* __Lidarbot set Servo angle__
Set the steering angle

>* __Lidarbot X axis speed(0±7）Y axis speed (0±7)__
Set the X and Y axis directions

>* __Lidarbot Draw Map__
Drawing a radar map

>* __Lidarbot Get Distance__
Read the specified angle obstacle distance

#### Usage

> The car goes forward at 3 speeds for 5 seconds.

><img src="/image/Modules/LidarBOT_user.gif" width="70%"> 


# STEPMOTOR
__________________________

#### Feature introduction

> Stepper motor control

><img src="/image/Modules/STEPMOTOR.png" width="20%"> 

>* __Motor Address__
Module's I2C address

>* __Motor X Y Z Speed__
Set the stepping motor X-axis Y-axis Z-axis rotation steps and speed

>* __Put g code__
Run G code

>* __Set mode__
Set the motor operating mode, distance mode or relative value mode

>* __lock motor__
Lock motor

>* __unlock motor__
Unlock motor


#### Usage

> Motor is running alternately in reverse

><img src="/image/Units/STEPMOTOR_user.gif" width="70%"> 


# SERVO
__________________________

#### Feature introduction

> Steering gear control

><img src="/image/Modules/SERVO.png" width="20%"> 

>* __Set servo rotate__
Set the specified servo angle

>* __Set servo write us__
Set the servo pulse time

#### Usage

> Control the 0-5 steering gear to rotate 90 degrees

><img src="/image/Units/SERVO_user.gif" width="70%"> 


# Bala Motor
__________________________

#### Feature introduction

> Control Bala coded motor operation

><img src="/image/Modules/Bala Motor.png" width="20%"> 

>* __set rotate speed__
Set the motor rotation direction and speed

>* __Run Speed__
Set a certain number of pulses to travel in a running direction at a certain speed

>* __Go To Position MaxSpeed__
Run 500 pulses at the set speed

>* __Stop__
Motor stop

>* __Read encode__
Read encoder value


#### Usage

> A button presses forward 500 pulses at a speed of 255

><img src="/image/Modules/Bala Motor_user.gif" width="70%"> 


# LEGO+
__________________________

#### Feature introduction

> Control lego code motor operation

><img src="/image/Modules/LEGO+.png" width="20%"> 

>* __Set rotate pwm__
Set motor direction and speed

>* __Stop__
Motor stop

>* __Clear encode__
Encoder clear

>* __Read encode__
Read encoder data


#### Usage

> 

><img src="/image/Modules/LEGO+.gif" width="70%"> 


# PM2.5
__________________________

#### Feature introduction

> Dust particle detection, output concentration or quantity

><img src="/image/Modules/PM2.5.png" width="20%"> 

>* __PM2.5 get value in__
Set the detection particle diameter and detection mode, return the detection result SPM is the standard particle concentration value APM is the atmospheric environment particle concentration value

>* __PM2.5 get particles above um number__
Returns the amount of particulate matter in the specified diameter


#### Usage

> The screen shows the amount of PM2.5 particles

><img src="/image/Modules/PM2.5_user.gif" width="70%"> 


