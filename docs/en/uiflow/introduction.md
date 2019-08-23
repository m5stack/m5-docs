# Update firmware
_________________________________


><img src="/image/base/windows_logo.png" width="100" height="100">
### For Windows

* __Downloading the driver__

>Go to[m5stack.com](http://m5stack.com/)and download the driver for your OS[CP210X driver](http://m5stack.com/download/Driver/CP210x_VCP_Windows.zip)

><img src="/image/base/CP210X_DL.gif" width="70%">


* __Installing the driver__

> Extract the zip file and run the install package in the extracted folder

><img src="/image/base/CP210X_install.gif " width="70%">

—————————————————————————————————

* __Download M5Burner__

>Go to[flow.m5stack.com](http://flow.m5stack.com/)and click the gear in the top right corner. From the settings panel choose the M5burner for your system[M5Burner](https://m5stack.com/pages/download)

><img src="/image/base/Burner_DL.png" width="70%">

* __Burning process__

> Extract the burner package and double click on the M5 Burner icon. Connect your M5Stack device and select its COM port from the list (Check Windows device manager if you are unsure of your COM port).Select the recommended baud rate 921600 and then select the firmware you wish to flash. Now press the burn button, your firmware will have flashed successfully once you see the message "leaving staying in bootloader". Reset your device to see the new firmware.

><img src="/image/base/Burner_user.gif " width="70%">



# WIFI Setup
____________________________________

__UIFlow and M5GO are two seperate concepts，UiFlow is the platform we use to program M5GO and we need to connect the two before this is possible__
#### Initiate device and setup WIFI

>Single press the red start button on the side of the M5GO, When the logo appears press the setup button     quickly to enter the wi-fi setup menu. Select change wi-fi connect and then connect to the M5GO's access          point with your computer or mobile device (The access point will look something like "M5Stack-xxxx")

><img src="/image/base/1.png" width="70%">


#### Input your wi-fi credentials

>Once you have connected to your M5GO's access point you can enter the wifi settings page by scanning the QR code or by entering  __192.168.4.1__ into your browser. Once you have arrived at the page choose your home wifi network from the list, enter your password and click configure


><img src="/image/base/2.png" width="70%">


# API Key
______________________

#### Entering Code Upload Mode

>After turning on the M5stack, select the Upload mode by pressing the left face button. Assuming you have already setup wifi on your device, the M5stack will connect to your network and once it is connected will display a QR code and a unique API Key. We can now start to program the device by scanning the M5stack with a mobile device or entering the url displayed at the top of the screen into your browser [flow.m5stack.com](http://flow.m5stack.com/)


><img src="/image/base/APIkey_user.png"/>

#### Connecting your device with API Key

>Once you have opened the UIflow website you can to connect to the web platform by clicking the gear icon in the top right corner, enter your API key and select your device and preferred language. Once you have entered the API Key click OK to confirm****  

><img src="/image/base/APIkey_userpair2.png" width="70%">

# Run，Download program
______________________

#### Running a program

>After you've finished programming press the play button in the top right corner to run your code

><img src="/image/base/Run_program.gif" width="70%">

#### Downloading a program

>Whats the difference between running and downloading a program? The play button puts our code into the volatile memory of your M5stack. Which means it will be lost once you turn off the M5stack. The download function however will store your program in the flash memory of your device which will not be erased on reboot. Each time you turn on the M5stack after downloading a program, that program will run automatically, and you can also select it from the app list which is accessed by pressing the center button on boot up.


><img src="/image/base/DL_program.png" width="70%">

# UIFlow interface
_______________________________________

### UIFlow's interface is seperated into 5 main sections


><img src="/image/base/UIFLOW_interface.png" width="70%">

* __Coding area__
>Drag code blocks from the blocks list into the coding area and connect them together to create a program

* __Menu Bar__
>The menu bar contains most of the important functions of the interface such as（Example，Undo and redo，upload，run code，download code，save code etc...）

* __Blockly</>Python__
>All the code we create in blocks can be converted to python by pressing this switch

* __UI Designer__
>Drag the UI elements (Title, Lable etc..) down to the M5GO screen to design an avatar or UI interface (note: You must press the run code button to see the changes on the M5's screen)

* __Units__
>Units are sensors and actuators that can be plugged into the M5GO, and here is where we configure them



# Program structure
____________________________________

#### Setup

>When you open UIFlow, you will find that there is already a Setup block at the beginning. Each program must have a Setup block. The program runs from the Setup block and will only run once. You can think of it as a Initialization block of the program

><img src="/image/Program_structure/Setup.png" width="20%">


#### Loop

>Loop is an infinite loop block. When it is executed, it will execute the program contained in the block indefinitely until some event occurs to stop it. For example, M5GO shuts down, it does not have to exist in the program, but in order to let the program continue You can add it when running, or when implementing certain features.

><img src="/image/Program_structure/Loop.png" width="20%">


#### Program connection

>Blocks can be connected between the blocks by means of a snap on the block, just like a jigsaw

><img src="/image/Program_structure/Block_connect.gif" width="70%">

#### Program execution order

>The program is executed from top to bottom. When the program starts running, first enter the Setup single execution initialization program, and then enter the Loop to continuously cycle the main program.


><img src="/image/Program_structure/Process.png">

# Button
_____________________________

#### Function Description

>M5GO provides three panel buttons (A, B, C), through the Button Block, we can use these three buttons to achieve control

><img src="/image/Program_structure/Button.png" width="40%">


>* __initiative Button__
Directly controlled by physical buttons on the M5GO panel

>* __passive Button__
The button can be triggered by the program, and more functions can be realized with the active Button.

>* __obtain Button__
The button can be triggered by the program only once, if you keep pressing it, it won’t happen unless released.

#### Instructions

>Put the program that needs to be run after pressing the button, put it in the Button Block, and modify the corresponding button position.

><img src="/image/Program_structure/Button_connect.gif" width="70%">

# Wait
_____________________________

#### Function Description

>Wait is a delay block in the Timer option, you can set the time of Wait execution, and add to the program according to requirements.


><img src="/image/Program_structure/Wait.png" width="20%">

>* __Wait__
Modify the number in the data frame to change the time of the Wait delay.

>* __Get ticks ms__
Get current system run time.



#### Instructions

>Add the Wait Block to the program that needs to be delayed and set the time. When the program executes to it, it will play a delay.

><img src="/image/Program_structure/Wait_user.gif" width="70%">