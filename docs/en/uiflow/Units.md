## ENV

#### Feature Introduction

> One-Wire interface sensor for ambient temperature, humidity, and air pressure

><img src="/image/Units/ENV.webp" width="40%"> 

* __Get Pressure__
Get pressure in hundredpar

* __Get Temperature__
Get the temperature, display two decimal 

* __Get Humidity__
Get humidity


#### Usage

>Display air pressure, temperature, humidity on the screen

><img src="/image/Units/ENV_user.gif" width="50%"> 


## PIR

#### Feature Introduction

> I/O type sensor for detecting infrared signals from humans or animals

><img src="/image/Units/PIR.webp" width="40%"> 

#### Usage

>Check if someone is close, someone is near the red light

><img src="/image/Units/PIR_user.gif" width="50%"> 

## RGB LED

#### Feature Introduction

> Control a certain number of colored LEDs

><img src="/image/Units/RGB LED.webp" width="40%"> 

* __Set index RGB color__
Set the color of the specified number of lights

* __Set from to RGB color__
Set the color of the light within the specified range

* __Set from to R G B__
Set the color of the light in the specified range to a custom color

* __Set all RGB color__
Set the color of all RGB lights

* __Set brightness__
Set the brightness of the RGB

* __Set neopixel hexagon matrix in__
Set the pattern on HEX and specify the color

* __et neopixel hexagon matrix in red green blue__
Set the pattern on HEX and customize the color


#### Usage

> Draw a pattern use LED

><img src="/image/Units/RGB LED_user.gif" width="50%"> 


## Joystick

#### Feature Introduction

> The joystick is actually a potentiometer that can be automatically reset, sliding different displacements to output different voltage signals.

><img src="/image/Units/joystick.webp" width="40%"> 

* __Get X__
Return data on the X axis

* __Get Y__
Return data from the Y axis

* __Get is pressed__
Return the value of the button

* __Get Reverse X__
Return X-axis reverse data

* __Get Reverse Y__
Return Y-axis reverse data

#### Usage

> Control the color of the RGB LEDs by the joystick direction

><img src="/image/Units/joystick_user.gif" width="50%"> 

## MAKEY

#### Feature Introduction

> Simple touch application that emits different tones and lights by touching different pins

><img src="/image/Units/MAKEY.webp" width="40%"> 

* __Get value__
Return pin value

* __Get all value__
Return all value

#### Usage

> Touch different pins to get different values to display different colors

><img src="/image/Units/MAKEY_user.gif" width="50%"> 

## SERVO

#### Feature Introduction

> The servo is a common driving device whose rotation angle depends on pulse control

><img src="/image/Units/SERVO.webp" width="40%"> 

* __rotate to degree__
Set the rotation angle

* __write us__
Set pulse time

#### Usage

>Control the steering gear to rotate 90 degrees

><img src="/image/Units/SERVO_user.gif" width="50%"> 

## WEIGHT

#### Feature Introduction

> HX711 is a high-precision AD conversion chip designed for electronic scales, which is converted into the corresponding weight by reading the voltage value.

><img src="/image/Units/WEIGHT.webp" width="40%"> 

* __return to zero__
Reference to initial value as zero

* __Get weight__
Return weight

* __Get raw data__
Show rawdata

#### Usage

>Read the weight display to the screen, press the A key to return to zero

><img src="/image/Units/WEIGHT_user.gif" width="50%"> 

## TRACE

#### Feature Introduction

> TRACE is a commonly used sensor for auto-car toy. It is used to determine whether there are black lines by receiving reflected light.

><img src="/image/Units/TRACE.webp" width="40%"> 

* __Get analog value__
Return analog value

* __Get digital value__
Return analog digital value

* __set limit should value__
Set limit value

#### Usage

> The sensor receives white light from the reflected light and does not receive no light.

><img src="/image/Units/TRACE_user.gif" width="50%"> 


## BUTTON

#### Feature Introduction

> Detect different states of the button and perform corresponding operations

><img src="/image/Units/BUTTON.webp" width="40%"> 

* __Button wasPressed__
Press the button to execute the set function

* __obtain button wasPressed__
Check if the button is pressed, only once during execution

#### Usage

> Press the button to flash the light once

><img src="/image/Units/BUTTON_user.gif" width="50%"> 


## Dual-BUTTON

#### Feature Introduction

> Detect different states of the button and perform corresponding operations

><img src="/image/Units/Dual-BUTTON.webp" width="40%"> 

* __Dual_Button Red wasPressed__
Red button press to execute the set function

* __obtain dual button Red wasPressed__
Check if the red button is pressed, only one time during execution

#### Usage

> Red button presses red light, blue button presses light

><img src="/image/Units/Dual-BUTTON_user.gif" width="50%"> 


## RGB

#### Feature Introduction

> Three  indicator  led

><img src="/image/Units/RGB.webp" width="40%"> 

* __Set index RGB color__
Specify the color of a serial number light

* __Set form to RGB color__
Set the color of multiple RGB LEDs

* __Set all RGB color__
Set all of RGB color

* __Set brightness__
Set brightness of LED

#### Usage

> Set the color of the light

><img src="/image/Units/RGB_user.gif" width="50%"> 


## REALY

#### Feature Introduction

> By controlling the opening and closing of the relay to achieve the purpose of weak current control of strong electricity

><img src="/image/Units/RELAY.webp" width="40%"> 

* __set COM connect ON__
Control relay closure

* __set COM connect OFF__
Control relay disconnect

#### Usage

> Press the A button to close the relay and press the B button to turn the relay off.

><img src="/image/Units/RELAY_user.gif" width="50%"> 


## ADC

#### Feature Introduction

> Read AD values directly

><img src="/image/Units/ADC.webp" width="40%"> 

* __read voltage__
Read voltage

#### Usage

> Display AD value

><img src="/image/Units/ADC_user.gif" width="50%"> 


## DAC

#### Feature Introduction

> Perform DA conversion and output voltage, up to 3.7V

><img src="/image/Units/DAC.webp" width="40%"> 

* __output voltage save__
Output voltage 0-3.3, and confirm whether to save to EEPROM

* __output voltage with raw data save__
Output voltage 0-4096, and confirm whether to save to EEPROM

#### Usage

> The output voltage

><img src="/image/Units/DAC_user.gif" width="50%"> 


## NCIR

#### Feature Introduction

> Non-contact temperature measurement, direct reading data

><img src="/image/Units/NCIR.webp" width="40%"> 

* __ncir read__
Reading temperature

#### Usage

> Screen display temperature

><img src="/image/Units/NCIR_user.gif" width="50%"> 


## IR

#### Feature Introduction

> Launch or accept infrared remote control signals

><img src="/image/Units/IR.webp" width="40%"> 

* __state__
Received infrared signal returned 1

* __set on__
Send infrared signal

* __set off__
Stop sending

#### Usage

> Receive infrared signal to light red light

><img src="/image/Units/IR_user.gif" width="50%"> 


## EXT.IO

#### Feature Introduction

> Expand IO interface through I2C, read and write level operation.

><img src="/image/Units/EXT.IO.webp" width="40%"> 

* __set mode__
All pins are set to input or output mode

* __set pin mode__
Set input or output separately

* __digitWrite Port__
Control pin status, 1 bit per pin

* __digitWrite Pin__
Individual control of pin status

* __digitRead Pin__
Read the specified pin status

* __digitRead Port__
Read all pin states

#### Usage

> Clear all pin states, set 2 pin high

><img src="/image/Units/EXT.IO_user.gif" width="50%"> 


## ANGLE

#### Feature Introduction

> Read the output value of the knob potentiometer

><img src="/image/Units/ANGLE.webp" width="40%"> 

* __Get value__
Return potentiometer value

#### Usage

> Control the brightness of RGB LEDs

><img src="/image/Units/ANGLE_user.gif" width="50%"> 

## LIGHT

#### Feature Introduction

> Return light measurement

><img src="/image/Units/LIGHT.webp" width="40%"> 

* __Get Analog value__
Return analog value

* __Get Digital value__
Return numeric value

#### Usage

> As the switch control LED lights up

><img src="/image/Units/LIGHT_user.gif" width="50%"> 


## EARTH

#### Feature Introduction

> Measuring soil moisture

><img src="/image/Units/EARTH.webp" width="40%"> 

* __Get Analog value__
Return analog value

* __Get Digital value__
Return numeric value

#### Usage

> LED alarm when the soil is dry

><img src="/image/Units/EARTH_user.gif" width="50%"> 


## ToF

#### Feature Introduction

> Measuring distance up to 2 meters

><img src="/image/Units/ToF.webp" width="40%"> 

* __Get distance__
Return distance mm

#### Usage

> Display distance

><img src="/image/Units/ToF_user.gif" width="50%"> 


## COLOR

#### Feature Introduction

> Identify colors and return RGB values

><img src="/image/Units/COLOR.webp" width="40%"> 

* __Get rawData__
Return original data

* __Get red__
Return red value

* __Get green__
Return green value

* __Get blue__
Return blue value

#### Usage

> Detecting color display RGB lights of corresponding colors

><img src="/image/Units/COLOR_user.gif" width="50%"> 


## RFID

#### Feature Introduction

> Identify RFID chip information

><img src="/image/Units/RFID.webp" width="40%"> 

* __read string from addr__
Read data from address

* __write to addr__
Write data to address

* __card near__
RFID card close to return 1

* __card uid__
Returns the UID of the RFID card

#### Usage

> Identify RFID card information

><img src="/image/Units/RFID_user.gif" width="50%"> 


## FINGER

#### Feature Introduction

> Identify fingerprint information

><img src="/image/Units/FINGER.webp" width="40%"> 

* __get state__
Read sensor status

* __get access__
Return access

* __get id__
Return ID

* __removeAll__
Remove all fingerprint information

* __remove id__
Remove fingerprint ID

* __add user id access__
Add ID and access rights

* __read user with id access__
The id and permission match do the following

* __getUnknown__
Unknown id and permission to perform the following operations

#### Usage

> Record fingerprint and identify it, recognize successful green light

><img src="/image/Units/FINGER_user.gif" width="50%"> 


## CardKB

#### Feature Introduction

> Enter information via the keyboard

><img src="/image/Units/CardKB.webp" width="40%"> 

* __Get key__
Return ASIIC value

* __Get string__
Return character

* __Get pressed__
Detect button, press to return true

#### Usage

> Screen displays input characters

><img src="/image/Units/CardKB_user.gif" width="50%"> 


## Pb.HUB

#### Feature Introduction

> Extended IO interface

><img src="/image/Units/Pb.HUB.webp" width="40%"> 

* __pos digitalRead__
Read pin digital value

* __pos digitalWrite value__
Write a digital value to the pin

* __analogRead__
Read analog value

* __Set pos RGB number to__
Set the number of specified pins RGB 

* __Set pos num RGB pos color__
Set the color of the specified serial number RGB 

* __Set pos num RGB begin count color__
Set the RGB  color within the specified range

* __Set pos RGB brightness__
Set the specified pin RGB  brightness

#### Usage

> Control 10 RGB lights via Pb.HUB

><img src="/image/Units/Pb.HUB_user.gif" width="50%"> 


## Pa.HUB

#### Feature Introduction

> Extended I2C interface

><img src="/image/Units/Pa.HUB.webp" width="40%"> 

* __set pos state__
Set the specified port I2C

* __set pos open__
Set port to open I2C

* __set port value__
Set port I2C

#### Usage

> Scan the I2C device through Pa.HUB control, A key to open the expansion, B key to close the expansion

><img src="/image/Units/Pa.HUB_user.gif" width="50%"> 


## THERMAL

#### Feature Introduction

> Infrared temperature measurement matrix, return to thermal imaging picture

><img src="/image/Units/Thermal.webp" width="60%"> 

* __getTmp X Y__
Get the temperature at (X, Y) position

* __getCenterTemp__
Return to intermediate temperature

* __getMaxTmp__
Return to the highest temperature

* __getMinTmp__
Return to the lowest temperature

* __setColorMaxTmp tmp__
The highest temperature expressed in the color map

* __setColorMinTmp tmp__
The lowest temperature indicated in the color map

* __update X Y show Center__
Update the temperature inside the XY matrix and display the center temperature

#### Usage

> The screen displays the highest temperature minimum temperature and image center temperature

><img src="/image/Units/THERMAL_user.gif" width="50%"> 

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