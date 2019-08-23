# Remote Control
__________________________

#### Function Description

>Remote control via device such as mobile phone or computer M5GO

><img src="/image/Remote/Remote.jpg" width="70%"> 

>* __Remote QRcode__
Generate a QR code that can access the control page and display it on the screen

>* __Remote Switch__
Remote switch control, please click the gear button on the block to add a variable X before use. When controlling, close X to pass 1 and disconnect X to pass 0.

>* __Remote Button__
Remote button control, each time the button is clicked, the program in Block is executed once.

>* __Remote Slider__
Slider control (click the gear button on the block to add a variable X before use, and pass the X to the integer from 0 to 100)

>* __Remote Label__
Display information, you can choose some built-in label types, or enter custom text

#### Instructions

>Add a QR code to generate a Block into the program, add a Remote Button, place the program to run into the block, and run the program.

><img src="/image/Remote/Remote_user1.gif" width="70%"> 

#### Control page

>Scan the QR code on the M5GO screen, or copy the link under the QR code option in the upper right corner of the UIFlow page to access the control page.


><img src="/image/Remote/Remote_Phone.png" width="30%"> 


# MQTT communication
__________________________

#### What is MQTT?

>MQTT (Message Queuing Telemetry Transport) is a "lightweight" communication protocol based on publish/subscribe (publish/subscribe) mode.

> The protocol was built on the TCP/IP protocol and was released by IBM in 1999.

>The biggest advantage of MQTT is that it can provide real-time and reliable message service for connecting remote devices with very little code and limited bandwidth.

>As a low-overhead, low-bandwidth instant messaging protocol, it has a wide range of applications in the Internet of Things, small devices, and mobile applications.

#### UIFlow and MQTT

>In UIFlow, we can use MQTT function to realize communication and interaction between two or more COREs, thus achieving powerful remote control functions.

><img src="/image/MQTT/MQTT.jpg" width="70%"> 


# MQTT server
_________________________________

* __Select MQTT Service__

> To use the MQTT protocol for data interaction, you need server support. There are many third-party server platforms to choose from. The platform we demonstrate here is CloudMQTT.

>When you have created service support on the platform, you will get some configuration information, such as server address, username, password, etc., which will be used in UIFlow's MQTT block.

><img src="/image/MQTT/info.jpg" width="70%"> 



* __MQTT fuction__

> In the advanced functions of UIFlow, you can find the MQTT function block. We can simply understand the MQTT protocol as two links, "Publish" and "Subscribe".

> When the publisher posts a message, the subscriber will get this information to enable communication between devices

><img src="/image/MQTT/UIFlow_MQTT.png" width="50%">



# Initialization procedure
__________________________

* __MQTT configuration block__

>Add an MQTT configuration block and connect to the Setup block

><img src="/image/MQTT/MQTT_Start1.jpg" width="70%"> 

* __information to fill in__

> Fill in the server information on your personal or third-party server platform to prepare for the next connection

# attention

* When you have multiple devices at the same time, the ID name (the ID below is "M5stack") is not allowed to be duplicated with other options in the configuration information, and it is not allowed to duplicate the IDs of other devices. At the same time, the same server In the device with the same ID name, only one online is allowed.

* MQTT program must be downloaded to use!

><img src="/image/MQTT/MQTT_Start2.jpg" width="70%"> 



* __MQTT Start__

>Add a Start block below the MQTT configuration block, which means that it will start running after the configuration information.

><img src="/image/MQTT/MQTT_Start3.jpg" width="70%"> 



# Publish
__________________________

#### Function Description

>Publish refers to the link in the communication to publish data, including two parts for the content of the publication "topic", "content" (msg)

><img src="/image/MQTT/Publish1.jpg" width="70%"> 

* __Publish "topic"__

>Set a publishing theme, when other devices want to get the content information under the theme, you need to subscribe to the matching theme name

* __Publish "Content" (msg)__

>Set content information to be published

#### Instructions

>When the program runs to the Publish release block, the message is released. example:

>When the A button is pressed, a message is posted (the subject is "RGB" and the content is "open")

>When the B button is pressed, a message is posted (the subject is "RGB" and the content is "close")

><img src="/image/MQTT/Publish2.jpg" width="70%"> 


# Subscribe
__________________________

#### Function Description

>Subscribe subscription refers to the process of receiving data in the communication. When the publisher publishes the information, the subscriber will automatically receive the subscribed topic (message), message content (msg)

* __Subscribe "topic"__

><img src="/image/MQTT/Subscribe1.jpg" width="70%"> 

>Set the topic to subscribe to

* __Get topic data "content" (msg)__

><img src="/image/MQTT/Subscribe2.jpg" width="70%"> 

>Get the message content under this subscription

#### Instructions

> Add a Subscribe block, fill in the topic to be subscribed, use the Get topic data block to get, and process the analysis, for example:

>When an "open" is obtained from Publish, the RGB bar is lit, and when "close" is obtained, the RGB bar is extinguished.

><img src="/image/MQTT/Subscribe3.jpg" width="70%"> 


# Use Cases
__________________________

#### Implementation function

> Use a CORE to program a simple use case to verify functionality, even if the publisher (Publish), is the subscriber (Subscribe)

* __complete program__

><img src="/image/MQTT/Example1.jpg" width="70%"> 

#### Instructions

>When the A button is pressed, a message is posted (the subject is "RGB", the content is "open"), and the RGB bar lights up.

>When the B button is pressed, a message is posted (the subject is "RGB", the content is "close"), and the RGB bar is extinguished.


# WiFi
__________________________

#### Function Description

>Wifi network settings.

><img src="/image/Network/network.png" width="70%"> 

>* __wifi connect__
Establish a wifi connection.

>* __wifi reconnect__
If wifi is not connected, reconnect the connection.

>* __wifi is connect__
If wifi access returns true else ruturns false.

>* __Connect to Wi-Fi SSID PASSWORD__
Connect with ssid and password.

### Instructions

>Establish a wifi connection with ssid and password.

><img src="/image/Network/wifi_user.gif" width="70%"> 


# P2P

>* __P2P Send To APIKey Msg__
Establish a point-to-point connection based on mqtt,Remote with other M5Stack and you should input the APIkey and Message to send.

>* __P2P Read__
Establish a point-to-point connection,Read the Message form other M5Stack

#### Instructions

>Establish a point-to-point connection to the remote host and send a message,the other M5Stack.

><img src="/image/Network/P2PSend_user.gif" width="70%"> 


# Easy I/O
__________________________

#### Function Description

>I/O pin configuration.

><img src="/image/Advanced module/EasyIO.png" width="70%"> 

>* __analog read pin__
Read pin analog value

>* __analog write pin duty__
Set duty cycle to the specified pin

>* __digital read Value__
Read pin digital value

>* __digital toggle pin__
Toggle pin value

>* __map from low from high to low to high__
Map values to a range proportionally


#### Instructions

>Get the temperature value of the sensor to map the temperature to 0-100.

><img src="/image/Advanced module/EasyIO_user.gif" width="70%"> 


# PIN
__________________________

#### Function Description

>Pin custom configuration

><img src="/image/Advanced module/PIN.png" width="70%"> 

>* __Init Pin mode Pull__
Set pin mode

>* __set HIGH__
Set the pin high level

>* __set LOW__
Set the pin low level

>* __Get Value__
Get the value of pin

>* __Set Value__
Set the value of pin



#### Instructions

>Set pin 5 pull-up output high level

><img src="/image/Advanced module/PIN_user.gif" width="70%"> 



# PWM
__________________________

#### Function Description

>PWM function setting

><img src="/image/Advanced module/PWM.png" width="70%"> 

>* __Init in Pin freq duty use timer__
Set channel pin frequency, duty cycle, and timer

>* __set freq to__
Change frequency

>* __set duty to__
Change duty cycle

>* __Pause__
Disable PWM function

>* __Resume__
Re-enable PWM function



#### Instructions

>Use the zero timer to set the PWM0 pin 25 frequency 500 duty cycle 50
><img src="/image/Advanced module/PWM_user.gif" width="70%"> 



# ADC
__________________________

#### Function Description

>Analog to digital conversion

><img src="/image/Advanced module/ADC.png" width="70%"> 

>* __Init in Pin__
Set the sampling channel pin

>* __set width__
Set the sampling width

>* __set atten__
Set gain

>* __read value__
read ADC


#### Instructions

>Sampling at 36 pins using the adc0 channel, reading the value

><img src="/image/Advanced module/ADC_user.gif" width="70%"> 


# DAC
__________________________

#### Function Description

>Digital to analog conversion

><img src="/image/Advanced module/DAC.png" width="70%"> 

>* __Init in Pin__
Set conversion channel

>* __write value__
Write da value

>* __beep with freq duration scale__
Set the buzzer frequency, time and range

>* __waveform with freq type duration scale offset invert__
Set the output waveform frequency amplitude offset

>* __stop wave__
stop output

>* __set freq__
set frequency

#### Instructions

>Output waveform on 25-pin using dac0 channel

><img src="/image/Advanced module/DAC_user.gif" width="70%"> 



# UART
__________________________

#### Function Description

>Serial data transmission and reception

><img src="/image/Advanced module/UART.png" width="70%"> 

>* __set tx rx baud use uart__
Set serial port pin and baud rate

>* __read all__
Read all data of serial port at one time

>* __read characters__
Read the specified amount of data

>* __read line__
Read data before \n

>* __remain cache__
Read buffer remaining data

>* __write number in__
Write numbers to the serial port

>* __write a line in__
Write a line to the serial port

>* __write in__
Write a string to the serial port


#### Instructions

>Read serial data and send data to serial port

><img src="/image/Advanced module/UART_user.gif" width="70%"> 



# I2C
__________________________

#### Function Description

>set I2C port

><img src="/image/Advanced module/I2C.png" width="70%"> 

>* __Master slave addr__
Set the host interface and slave address

>* __Set at sda scl slave addr__
Custom SDA SCL and slave address

>* __Write reg one byte__
Write 1 byte of data to the register address

>* __Write reg one short With encode__
Big endian mode writes two bytes to the register address

>* __Read reg one byte__
Read a byte from the register address

>* __Read reg one short with decode__
Big endian mode reads two bytes from the register address

>* __Read reg Read byte__
Read several bytes from the register address

>* __Read byte__
Read byte

>* __Available I2C address in list__
Check if the I2C address is available

>* __Scan I2C device__
Scanning I2C devices


#### Instructions

>Read data from I2C

><img src="/image/Advanced module/I2C_user.gif" width="70%"> 