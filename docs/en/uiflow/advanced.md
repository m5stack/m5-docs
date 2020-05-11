# Remote Control

#### Function Description

>Remote control M5GO via devices such as mobile phone or computer

><img src="/image/Remote/Remote.webp" width="50%"> 

* __Remote QRcode__
Generate a QR code that can access the control page and display it on the screen

* __Remote Switch__
Remote switch control, please click the gear button on the block to add a variable X before use. When controlling, close X to pass 1 and disconnect X to pass 0.

* __Remote Button__
Remote button control, each time the button is clicked, the program in Block is executed once.

* __Remote Slider__
Slider control (click the gear button on the block to add a variable X before use, and pass the X to the integer from 0 to 100)

* __Remote Label__
Display information, you can choose some built-in label types, or enter custom text

#### Instructions

>Add a QR code to generate a Block into the program, add a Remote Button, place the program to run into the block, and run the program.

><img src="/image/Remote/Remote_user1.gif" width="50%"> 

#### Control page

>Scan the QR code on the M5GO screen, or copy the link under the QR code option in the upper right corner of the UIFlow page to access the control page.


><img src="/image/Remote/Remote_Phone.webp" width="30%"> 


# Dashboard

#### Function Description

> In addition to the remote control features that are consistent with Remote, Remote-Beta provides a more powerful data panel function. Currently it supports two data chart styles of polyline/column, the layout style of the page can be freely adjusted, and will be based on the user API Key to save and achieve the persistence of the layout style.

><img src="image\Remote_beta\remote_beta_01.webp" width="60%">

* __Create Chart__
A data chart program that generates data for the specified chart style.

* __Remote Button__
Remote button control, each time the button is clicked, the program in Block is executed once.

* __Remote Slider__
Slider control (click the gear button on the block to add a variable X before use, and pass the X to the integer from 0 to 100)

* __Remote Switch__
Remote switch control, please click the gear button on the block to add a variable X before use. When controlling, close X to pass 1 and disconnect X to pass 0.

<mark>Note: When naming blocks, avoid spaces and special symbols</mark>

#### Instructions

> Drag the data chart program to the programming area and fill in the relevant information of the chart in the option box. (Name: chart name, ChartType: polyline/column, DataType: data type of the chart, temporarily only support the number, key: the key of the data Word, Value: Data Source, Interval: Interval Refresh Time)

__Note: A table can only use one data source. If multiple tables with the same name appear, the data source will use the last data in the order in which the program is executed.

><img src="image\Remote_beta\remote_beta_02.webp" width="60%">

>The buttons, sliders, and switches are used in the same way as the Remote function. For details, see the function description of the upper block. After editing, click Run Program. Click the QR code option on the right side of the page to scan or copy the data page. Link, use a browser to access.

><img src="image\Remote_beta\remote_beta_03.webp" width="60%">


> After entering the control page, keep the M5 device running normally, you can see the data in the chart is refreshed according to the interval we configured. Drag the arrow in the lower right corner of the chart to zoom the entire chart. Click the upper left corner to open the side navigation, providing shades of theme color switching and layout switches. (After opening the layout switch, the user is free to modify the position of the chart and other elements placed on the page)

><img src="image\Remote_beta\remote_beta_04.webp" width="60%">
><img src="image\Remote_beta\remote_beta_05.webp" width="60%">



# ESP-NOW

#### Function Description

>ESP-NOW is a short-range, low-power communication protocol that enables multiple devices to communicate without Wi-Fi. This protocol is similar to the low-power 2.4GHz wireless connection found in wireless mice—devices are paired before communicating. After pairing, the connections between devices are continuous, peer-to-peer, and do not require a handshake protocol.

><img src="image\ESP_now\esp_now_01.webp" width="60%">

* __Get mac addr__
Get the mac address of this machine.

* __Add peer ff as id__
Add the specified mac address and set it to id

* __Set pmk__
Set the pairing key

* __Broadcast data__
Broadcast specified data

* __Receive mac_addr data__
Receive data, get the sender's mac address and the data content carried

* __After send message flag__
Send a callback function, automatically execute the callback function after executing the send message, and return whether the flag bit flag is successfully sent. The success is True and the failure is False.

* __Send message id with data__
Send data to the device with the specified id.


#### Instructions

<h3><mark>Receiver</mark></h3>

> Display the local mac address on the screen, use the data receiving block and create two variables for receiving the sender's address and data content. The data is processed inside the receiving block function for display or judgment and other operations. For example, the following program controls the LED light switch by judging whether the received data is "1".

__Note: The created variable name is not allowed to be consistent with the parameter name, ie variables with the names "addr" and "data" are not allowed to be used for data acquisition __

><img src="image\ESP_now\esp_now_02.webp" width="40%">

<h3><mark>Sender</mark></h3>

> Add the mac address of the receiving device, fill in the sent data content in the sending program, select the id of the receiving device. Use the button program to control the data transmission. Using the callback function can help us determine whether the data is successfully sent from the machine. We need to use a variable to get its return result.

__Note: The created variable name is not allowed to be consistent with the parameter name, ie variables with the name "flag" are not allowed to be used for data acquisition __

><img src="image\ESP_now\esp_now_03.webp" width="40%">

>Complete the program editing, respectively run the receiver and transmitter programs, you can achieve ESP-NOW short-range wireless communication.


# MQTT communication

#### What is MQTT?

>MQTT (Message Queuing Telemetry Transport) is a "lightweight" communication protocol based on publish/subscribe (publish/subscribe) mode.

> The protocol was built on the TCP/IP protocol and was released by IBM in 1999.

>The biggest advantage of MQTT is that it can provide real-time and reliable message service for connecting remote devices with very little code and limited bandwidth.

>As a low-overhead, low-bandwidth instant messaging protocol, it has a wide range of applications in the Internet of Things, small devices, and mobile applications.

#### UIFlow and MQTT

>In UIFlow, we can use MQTT function to realize communication and interaction between two or more COREs, thus achieving powerful remote control functions.

><img src="/image/MQTT/MQTT.webp" width="50%"> 


# MQTT server

* __Select MQTT Service__

> To use the MQTT protocol for data interaction, you need server support. There are many third-party server platforms to choose from. The platform we demonstrate here is CloudMQTT.

>When you have created service support on the platform, you will get some configuration information, such as server address, username, password, etc., which will be used in UIFlow's MQTT block.

><img src="/image/MQTT/info.webp" width="50%"> 



* __MQTT fuction__

> In the advanced functions of UIFlow, you can find the MQTT function block. We can simply understand the MQTT protocol as two links, "Publish" and "Subscribe".

> When the publisher posts a message, the subscriber will get this information to enable communication between devices

><img src="/image/MQTT/UIFlow_MQTT.webp" width="50%">



# Initialization procedure

* __MQTT configuration block__

>Add an MQTT configuration block and connect to the Setup block

><img src="/image/MQTT/MQTT_Start1.webp" width="50%"> 

* __information to fill in__

> Fill in the server information on your personal or third-party server platform to prepare for the next connection

# attention

* When you have multiple devices at the same time, the ID name (the ID below is "M5stack") is not allowed to be duplicated with other options in the configuration information, and it is not allowed to duplicate the IDs of other devices. At the same time, the same server In the device with the same ID name, only one online is allowed.

* MQTT program must be downloaded to use!

><img src="/image/MQTT/MQTT_Start2.webp" width="50%"> 

* __MQTT Start__

>Add a Start block below the MQTT configuration block, which means that it will start running after the configuration information.

><img src="/image/MQTT/MQTT_Start3.webp" width="50%"> 



# Publish

#### Function Description

>Publish refers to the link in the communication to publish data, including two parts for the content of the publication "topic", "content" (msg)

><img src="/image/MQTT/Publish1.webp" width="50%"> 

* __Publish "topic"__

>Set a publishing theme, when other devices want to get the content information under the theme, you need to subscribe to the matching theme name

* __Publish "Content" (msg)__

>Set content information to be published

#### Instructions

>When the program runs to the Publish release block, the message is released. example:

>When the A button is pressed, a message is posted (the subject is "RGB" and the content is "open")

>When the B button is pressed, a message is posted (the subject is "RGB" and the content is "close")

><img src="/image/MQTT/Publish2.webp" width="50%"> 


# Subscribe

#### Function Description

>Subscribe subscription refers to the process of receiving data in the communication. When the publisher publishes the information, the subscriber will automatically receive the subscribed topic (message), message content (msg)

* __Subscribe "topic"__

><img src="/image/MQTT/Subscribe1.webp" width="50%"> 

>Set the topic to subscribe to

* __Get topic data "content" (msg)__

><img src="/image/MQTT/Subscribe2.webp" width="50%"> 

>Get the message content under this subscription

#### Instructions

> Add a Subscribe block, fill in the topic to be subscribed, use the Get topic data block to get, and process the analysis, for example:

>When an "open" is obtained from Publish, the RGB bar is lit, and when "close" is obtained, the RGB bar is extinguished.

><img src="/image/MQTT/Subscribe3.webp" width="50%"> 


# Use Cases

#### Implementation function

> Use a CORE to program a simple use case to verify functionality, it’s not inly a publisher (Publish), but a subscriber (Subscribe) as well

* __complete program__

><img src="/image/MQTT/Example1.webp" width="50%"> 

#### Instructions

>When the A button is pressed, a message is posted (the subject is "RGB", the content is "open"), and the RGB bar lights up.

>When the B button is pressed, a message is posted (the subject is "RGB", the content is "close"), and the RGB bar is extinguished.


# WiFi

#### Function Description

>Wifi network settings.

><img src="/image/Network/network.webp" width="50%"> 

* __wifi connect__
Establish a wifi connection.

* __wifi reconnect__
If wifi is not connected, reconnect the connection.

* __wifi is connect__
If wifi access returns true else ruturns false.

* __Connect to Wi-Fi SSID PASSWORD__
Connect with ssid and password.

### Instructions

>Establish a wifi connection with ssid and password.

><img src="/image/Network/wifi_user.gif" width="50%"> 


# P2P

* __P2P Send To APIKey Msg__
Establish a point-to-point connection based on mqtt,Remote with other M5Stack and you should input the APIkey and Message to send.

* __P2P Read__
Establish a point-to-point connection,Read the Message from other M5Stacks

#### Instructions

>Establish a point-to-point connection to the remote host and send a message from other M5Stacks.

><img src="/image/Network/P2PSend_user.gif" width="50%"> 


# Easy I/O

#### Function Description

>I/O pin configuration.

><img src="/image/Advanced module/EasyIO.webp" width="50%"> 

* __analog read pin__
Read pin analog value

* __analog write pin duty__
Set duty cycle to the specified pin

* __digital read Value__
Read pin digital value

* __digital toggle pin__
Toggle pin value

* __map from low from high to low to high__
Map values to a range proportionally


#### Instructions

>Get the temperature value of the sensor to map the temperature to 0-100.

><img src="/image/Advanced module/EasyIO_user.gif" width="50%"> 


# PIN

#### Function Description

>Pin custom configuration

><img src="/image/Advanced module/PIN.webp" width="50%"> 

* __Init Pin mode Pull__
Set pin mode

* __set HIGH__
Set the pin high level

* __set LOW__
Set the pin low level

* __Get Value__
Get the value of pin

* __Set Value__
Set the value of pin



#### Instructions

>Set pin 5 pull-up output high level

><img src="/image/Advanced module/PIN_user.gif" width="50%"> 



# PWM

#### Function Description

>PWM function setting

><img src="/image/Advanced module/PWM.webp" width="50%"> 

* __Init in Pin freq duty use timer__
Set channel pin frequency, duty cycle, and timer

* __set freq to__
Change frequency

* __set duty to__
Change duty cycle

* __Pause__
Disable PWM function

* __Resume__
Re-enable PWM function



#### Instructions

>Use the zero timer to set the PWM0 pin 25 frequency 500 duty cycle 50
><img src="/image/Advanced module/PWM_user.gif" width="50%"> 



# ADC

#### Function Description

>Analog to digital conversion

><img src="/image/Advanced module/ADC.webp" width="50%"> 

* __Init in Pin__
Set the sampling channel pin

* __set width__
Set the sampling width

* __set atten__
Set gain

* __read value__
read ADC


#### Instructions

>Sampling at 36 pins using the adc0 channel, reading the value

><img src="/image/Advanced module/ADC_user.gif" width="50%"> 


# DAC

#### Function Description

>Digital to analog conversion

><img src="/image/Advanced module/DAC.webp" width="50%"> 

* __Init in Pin__
Set conversion channel

* __write value__
Write da value

* __beep with freq duration scale__
Set the buzzer frequency, time and range

* __waveform with freq type duration scale offset invert__
Set the output waveform frequency amplitude offset

* __stop wave__
stop output

* __set freq__
set frequency

#### Instructions

>Output waveform on 25-pin using dac0 channel

><img src="/image/Advanced module/DAC_user.gif" width="50%"> 



# UART

#### Function Description

>Serial data transmission and reception

><img src="/image/Advanced module/UART.webp" width="50%"> 

* __set tx rx baud use uart__
Set serial port pin and baud rate

* __read all__
Read all data of serial port at one time

* __read characters__
Read the specified amount of data

* __read line__
Read data before \n

* __remain cache__
Read buffer remaining data

* __write number in__
Write numbers to the serial port

* __write a line in__
Write a line to the serial port

* __write in__
Write a string to the serial port


#### Instructions

>Read serial data and send data to serial port

><img src="/image/Advanced module/UART_user.gif" width="50%"> 



# I2C

#### Function Description

>set I2C port

><img src="/image/Advanced module/I2C.webp" width="50%"> 

* __Master slave addr__
Set the host interface and slave address

* __Set at sda scl slave addr__
Custom SDA SCL and slave address

* __Write reg one byte__
Write 1 byte of data to the register address

* __Write reg one short With encode__
Big endian mode writes two bytes to the register address

* __Read reg one byte__
Read a byte from the register address

* __Read reg one short with decode__
Big endian mode reads two bytes from the register address

* __Read reg Read byte__
Read several bytes from the register address

* __Read byte__
Read byte

* __Available I2C address in list__
Check if the I2C address is available

* __Scan I2C device__
Scanning I2C devices


#### Instructions

>Read data from I2C

><img src="/image/Advanced module/I2C_user.gif" width="50%"> 

><img src="/image/Advanced module/I2C_02.webp" width="50%">

* __Write mem data reg date type__
Writes the specified data type to the register address

* __Write data type__
Write specified data to bus

* __Read mem data reg date type__
Writes the specified data type to the register address

* __Read data num type__
Write specified data from bus

* __In data get index__
Extract a data from a list

>Write data to I2C

><img src="/image/Advanced module/I2C_Write.gif" width="50%">

>Read date from I2C

><img src="/image/Advanced module/I2C_Read.webp" width="80%">

# Execute

#### Function Description

>Execution of external programs

><img src="/image/Advanced module/Execute.webp" width="50%"> 


#### Instructions

>import Library

><img src="/image/Advanced module/Execute_user.gif" width="50%"> 


# SDCard

#### Function Description

>SD card read and write operations

><img src="/image/Advanced module/SDCard.webp" width="40%"> 

* __open sdcard file mode__
Open the specified file and perform a read or write operation. This file must exist in the r and r+ states, otherwise an error is reported. The a, w, and w+ modes are automatically created if no files exist.

* __file read all__
Read all the bytes of the file

* __file read bytes__
Read the given number of bytes

* __file read line__
Read a line of content

* __file write__
Write bytes to the file

* __file set seek__
Set the offset position of the read

* __file get seek__
Get the current offset position

* __sdcard listdir__
List the specified catalog file

* __file mkdir__
Set the offset position of the read

* __sdcard remove__
Delete specified file

* __sdcard rmdir__
Delete the specified directory

* __sdcard rename__
File rename

#### Instructions

>Create a test folder, create a file named TEST.text, write helloM5Stack, and read M5Stack

><img src="/image/Advanced module/SDCard_user.gif" width="50%"> 


# Http

#### Function Description

>Send HTTP protocol

><img src="/image/Advanced module/Http.webp" width="40%"> 

* __Http Request__
Create an Http access request by GET, POST, DELET, PUT, PATCH, the URL is the full HTTP connection address, create the header Headers, Data data in the form of a dictionary, send successfully to execute Success, and send failure to execute Fail.

* __Get Status Code__
Return status code

* __Get Data__
Return request data

#### Instructions

>Send a GET request to Baidu, return data and print

><img src="/image/Advanced module/Http_user.gif" width="50%"> 

# EEPROM

#### Function Description

>Save the important data in the form of key-value pairs to the NVS partition to prevent data loss after shutdown (to prevent program processing from being blocked, the data is actually written in 5 seconds later), please do not write the data to the NVS partition repeatedly, otherwise it will affect the flash life and cause damage

><img src="/image/Advanced module/EEPROM.webp" width="40%">

* __EEPROM write key value__
Create a key-value pair to save data to EEPROM.

* __EEPROM read key__
Read out the data content corresponding to the keyword.

* __EEPROM read key to int__ 
Read out the data content corresponding to the keyword and convert Str to the Int.

#### Instructions

>Create key-value to write to NVS partition and read data.

><img src="/image/Advanced module/EEPROM_user.webp" width="70%">

