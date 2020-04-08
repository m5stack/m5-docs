# Calculator

#### Feature introduction

>Input numbers 

><img src="/image/FACES/Calculator.webp" width="40%"> 

* __Get press string__
Return keyboard character

* __Get press button int value__
Return keyboard ASIIC value

* __Clear press string__
Clear input characters

* __Delete press string last byte__
Delete the last byte entered

* __is new button pressed__
Press the button to return true

#### Usage

> The screen displays the entered number

><img src="/image/FACES/Calculator_user.gif" width="50%"> 


# Encoder

#### Feature introduction

> Read encoder value

><img src="/image/FACES/Encoder.webp" width="40%"> 

* __Set LED pos color__
Set the specified LED color

* __Clear encode value to zero__
Encoder value becomes zero

* __Get encode value__
Return encode value

* __Get encode direction__
Return the direction of rotation

* __is encode pressed__
Return True when the encoder knob is pressed

#### Usage

> The screen displays the encoder value and press the knob to return to zero.

><img src="/image/FACES/Encoder_user.gif" width="50%"> 


# FINGER

#### Feature introduction

> Read fingerprint information

><img src="/image/FACES/FINGER.webp" width="40%"> 

* __get state__
Return sensor status

* __get access__
Return user rights

* __get id__
Return ID

* __remove All__
Remove all fingerprint information

* __remove faces_finger id__
Remove specified fingerprint ID

* __faces_finger add user id access__
Add fingerprint information

* __faces_finger read user with id access__
Verify fingerprint successfully executed program

* __faces_finger getUnknow__
Read unknown fingerprint information execution program

#### Usage

>Read the fingerprint information, the light turns green if it matches. Otherwise the light turns red. 

><img src="/image/FACES/FINGER_user.gif" width="50%"> 


# GameBoy

#### Feature introduction

> Read the key value of the gameboy

><img src="/image/FACES/GameBoy.webp" width="40%"> 

* __Get is press__
Return button status, continuous detection

* __Get was pressed__
Return button status, check once

#### Usage

>If the up button is pressed, light turns green. If the down button is pressed, light turns red.

><img src="/image/FACES/GameBoy_user.gif" width="50%"> 



# Joystick

#### Feature introduction

> Return  joystick data

><img src="/image/FACES/Joystick.webp" width="40%"> 

* __Get X value__
Return X-axis direction data

* __Get Y value__
Return Y-axis direction data

* __Is pressed__
Return True when the button is pressed

* __Get reverse X value__
Return X-axis reverse data

* __Get reverse Y value__
Return y-axis reverse data

* __Set LED pos color__
Set the color of the LED in specified place

#### Usage

> The screen displays the joystick data

><img src="/image/FACES/Joystick_user.gif" width="50%"> 


# KeyBoard

#### Feature introduction

> Return keyboard key data

><img src="/image/FACES/KeyBoard.webp" width="40%"> 

* __Get press string__
Return button character

* __Clear press string__
Clear input characters

* __Delete press string last byte__
Delete the last byte entered

* __Get press button int value__
Return button ASIIC value

* __Is new button pressed__
Return true if the button is pressed

#### Usage

> The screen displays the input number

><img src="/image/FACES/KeyBoard_user.gif" width="50%"> 


# RFID

#### Feature introduction

> Return RFID card data

><img src="/image/FACES/RFID.webp" width="40%"> 

* __read string from addr__
Read data from the specified address

* __write to addr__
Write data to address

* __card near__
Return true if the RFID card is close

* __card uid__
Return RFID card UID

#### Usage

> Screen displays RFID card data

><img src="/image/FACES/RFID_user.gif" width="50%"> 