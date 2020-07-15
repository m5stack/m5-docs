## RGB

#### Feature introduction

>Driving RGB bar to turn on or off and controlling the color of light shining out to change different colors.

><img src="/image/Hardwares/RGB.webp" width="50%">

* __Set Rgb Bar color__
Set all the LEDs on both sides to a specific color

* __Set left side Rgb Bar color__
Set only the LEDs on the left bar to a specific color(using the drop down list we can change this to right)

* __Set the 1st Rgb colr__
Set the 1st or other selected LED in the LED bar to a specific color

* __Set Rgb brightness__
Set the brightness of the LED bar

#### Usage

>The LED bar could be used as a meter for the input level of the microphone or to visualise the intensity of a sensor

><img src="/image/Hardwares/RGB_user.gif" width="50%">


## Speaker

#### Feature introduction

>The M5Stacks speaker can be controlled by the speaker blocks to produce sound of varying frequency, duration and volume

><img src="/image/Hardwares/Speaker.webp" width="50%">

* __Speaker.beep__
Output a sound of a set frequency and duration

* __Speaker.volume__
Control the speaker volume

* __play.tone__
Play a specific musical note for a set duration of beats

#### Attention

>The average human can only hear frequencies within the 20Hz~20KHz range，therefore frequencies set outside of this range will not be audible

#### Usage

>The Speaker can be used to output melodies or sounds for notification purposes

><img src="/image/Hardwares/Speaker_user.webp" width="50%">


## IMU (Internal Measurement Unit)

#### Feature introduction

>The IMU Blocks get data from the M5GOs accelerometer and magnetometer.The blocks are set to recieve force data in the X，Y and Z directions. These blocks can also sense what orientation the M5 device is in and its acceleration.


><img src="/image/Hardwares/IMU.webp" width="30%">

* __Get X__
Get data from x axis

* __Get Y__
Get data from y axis

* __Get X ACC__
Get accleration data from x axis

* __Get Y ACC__
Get accleration data from y axis

* __Get Z ACC__
Get accleration data from z axis

* __Get X Gyr__
Get the Angular velocity from x axis

* __Get Y Gyr__
Get the Angular velocity from y axis

* __Get Z Gyr__
Get the Angular velocity from z axis



#### Usage

>Use labels to show IMU data or data can also be used to do computing or logic judging.

><img src="/image/Hardwares/IMU_user.gif" width="50%">


# POWER (M5Stack)

#### Feature introduction

>Set device charging or get battery level.


><img src="/image/Hardwares/Power5306.webp" width="30%">

* __isCharging__
Return whether it is charging

* __isChargeFull__
Return whether full battery

* __setCharge__
Set charging

* __get Battery Level__
Return battery level


#### Usage

>If it’s charging，RGB turns RED. Otherwise it will be BLACK

><img src="/image/Hardwares/Power_user.gif" width="50%">


## POWER (M5StickC)

#### Feature introduction

>Set axp192 related parameters.

><img src="/image/Hardwares/PowerAXP.webp" width="30%">

* __Get charge state__
Return to charging state

* __Get battery voltage__
Return battery voltage

* __Get battery current__
Return battery current

* __Get Vin voltage__
Return VIN input voltage

* __Get Vin current__
Return VIN input current

* __Get VBus voltage__
Return VBUS voltage

* __Get VBus current__
Return VBUS current

* __Get AXP192 temperature__
Return AXP temperature

* __Power off__
Shutdown

* __Set battery charge current to__
Set charging current

* __Set LCD voltage to__
Set screen voltage

#### USAGE

>Display the battery voltage and charging current, and shut down after full charge


><img src="/image/Hardwares/PowerAXP_user.gif" width="50%">