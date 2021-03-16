<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>Contents</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('remote')">Remote</el-tag>
        <el-tag onclick="page_move('esp-now')">ESP-NOW</el-tag>
        <el-tag onclick="page_move('mqtt-communication')">MQTT</el-tag>
        <el-tag onclick="page_move('wifi')">WiFi</el-tag>
        <el-tag onclick="page_move('p2p')">P2P</el-tag>
        <el-tag onclick="page_move('easy-io')">Easy-IO</el-tag>
        <el-tag onclick="page_move('pwm')">PWM</el-tag>
        <el-tag onclick="page_move('adc')">ADC</el-tag>
        <el-tag onclick="page_move('dac')">DAC</el-tag>
        <el-tag onclick="page_move('uart')">UART</el-tag>
        <el-tag onclick="page_move('i2c')">I2C</el-tag>
        <el-tag onclick="page_move('execute')">Execute</el-tag>
        <el-tag onclick="page_move('sdcard')">SDCard</el-tag>
        <el-tag onclick="page_move('http')">Http</el-tag>
        <el-tag onclick="page_move('eeprom')">EEPROM</el-tag>
        <el-tag onclick="page_move('modbus-master')">Modbus-Master</el-tag>
        <el-tag onclick="page_move('modbus-slave')">Modbus-Slave</el-tag>
        <el-tag onclick="page_move('ble-uartsupport-m5stack-fire-only')">BLE UART</el-tag>
        <el-tag onclick="page_move('blynksupport-m5Stack-fire-only')">Blynk</el-tag>
        <el-tag onclick="page_move('echo-stt')">Echo STT</el-tag>
        <el-tag onclick="page_move('pin-servo')">Pin Servo</el-tag>
        <el-tag onclick="page_move('ntp')">NTP</el-tag>
    </div>
</el-card>

## Remote

#### Function Description

>Remote control M5Stack via devices such as mobile phone or computer.

><img src="/image/Remote/Remote.webp" width="50%"> 

* __Set Title__
Set a title name of the control page.

* __Remote qrcode show in x y size__
Set the location and size of the local QR code display.

* __Add Remote Switch Button index__
Remote switch button control (0 or 1), each time the button is clicked, the program in Block is executed once.

* __Add Remote Button index__
Remote  button control, each time the button is clicked, the program in Block is executed once.

* __Add Remote Slider__
Slider control (click the gear button on the block to add a variable  before use, and pass the variable to the integer (from 0 to 100).

* __Add Remote Label index interval__
Display information, you can choose some built-in label types, or enter custom text.

#### Instructions

>Add a QR code to generate a Block into the program, add a Remote Button and Slider to control RGB Bar,at the same time, display the temperature through ENV Unit.

<img src="/image/Remote/Remote_user1.webp" width="50%"> 

## ESP-NOW

#### Function Description

>ESP-NOW is a short-range, low-power communication protocol that enables multiple devices to communicate without Wi-Fi. This protocol is similar to the low-power 2.4GHz wireless connection found in wireless mice—devices are paired before communicating. After pairing, the connections between devices are continuous, peer-to-peer, and do not require a handshake protocol.

><img src="image\ESP_now\esp_now_01.webp" width="50%">

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

?>Note: When running ESP-NOW, if the communication devices are connected to the same WiFi network, there is no need to configure the communication channel, and the communication can be normal. Otherwise, please configure the communication channel in the program and download the program to the device for runinng.

## MQTT communication

#### What is MQTT?

>MQTT (Message Queuing Telemetry Transport) is a "lightweight" communication protocol based on publish/subscribe (publish/subscribe) mode.

> The protocol was built on the TCP/IP protocol and was released by IBM in 1999.

>The biggest advantage of MQTT is that it can provide real-time and reliable message service for connecting remote devices with very little code and limited bandwidth.

>As a low-overhead, low-bandwidth instant messaging protocol, it has a wide range of applications in the Internet of Things, small devices, and mobile applications.

#### UIFlow and MQTT

>In UIFlow, we can use MQTT function to realize communication and interaction between two or more COREs, thus achieving powerful remote control functions.

><img src="/image/MQTT/MQTT.webp" width="50%"> 


## MQTT server

* __Select MQTT Service__

> To use the MQTT protocol for data interaction, you need server support. There are many third-party server platforms to choose from. The platform we demonstrate here is CloudMQTT.

>When you have created service support on the platform, you will get some configuration information, such as server address, username, password, etc., which will be used in UIFlow's MQTT block.

><img src="/image/MQTT/info.webp" width="50%"> 



* __MQTT fuction__

> In the advanced functions of UIFlow, you can find the MQTT function block. We can simply understand the MQTT protocol as two links, "Publish" and "Subscribe".

> When the publisher posts a message, the subscriber will get this information to enable communication between devices

><img src="/image/MQTT/UIFlow_MQTT.webp" width="50%">


## Initialization procedure

* __MQTT configuration block__

>Add an MQTT configuration block and connect to the Setup block

><img src="/image/MQTT/MQTT_Start1.webp" width="50%"> 

* __information to fill in__

> Fill in the server information on your personal or third-party server platform to prepare for the next connection

## attention

* When you have multiple devices at the same time, the ID name (the ID below is "M5stack") is not allowed to be duplicated with other options in the configuration information, and it is not allowed to duplicate the IDs of other devices. At the same time, the same server In the device with the same ID name, only one online is allowed.

><img src="/image/MQTT/MQTT_Start2.webp" width="50%"> 

* __MQTT Start__

>Add a Start block below the MQTT configuration block, which means that it will start running after the configuration information.

><img src="/image/MQTT/MQTT_Start3.webp" width="50%"> 



## Publish

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


## Subscribe

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


## Use Cases

#### Implementation function

> Use a CORE to program a simple use case to verify functionality, it’s not inly a publisher (Publish), but a subscriber (Subscribe) as well

* __complete program__

><img src="/image/MQTT/Example1.webp" width="50%"> 

#### Instructions

>When the A button is pressed, a message is posted (the subject is "RGB", the content is "open"), and the RGB bar lights up.

>When the B button is pressed, a message is posted (the subject is "RGB", the content is "close"), and the RGB bar is extinguished.


## WiFi

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

><img src="/image/Network/wifi_user.webp" width="50%"> 


## P2P

* __P2P Send To APIKey Msg__
Establish a point-to-point connection based on mqtt,Remote with other M5Stack and you should input the APIkey and Message to send.

* __P2P Read__
Establish a point-to-point connection,Read the Message from other M5Stacks

#### Instructions

>Establish a point-to-point connection to the remote host and send a message from other M5Stacks.

><img src="/image/Network/P2PSend_user.webp" width="50%"> 


## Easy IO

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

><img src="/image/Advanced module/EasyIO_user.webp" width="50%"> 


## PIN

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

><img src="/image/Advanced module/PIN_user.webp" width="50%"> 



## PWM

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

><img src="/image/Advanced module/PWM_user.webp" width="50%"> 



## ADC

#### Function Description

>Analog to digital conversion

><img src="/image/Advanced module/ADC.webp" width="50%"> 

* __Init in Pin__
Set the sampling channel pin

* __set width__
Set the sampling width

* __set atten__
Set attenuation on the input of the ADC
    * ADC.ATTN_0DB: 0dB attenuation, gives a maximum input voltage of 1.00v - this is the default configuration
    * ADC.ATTN_2_5DB: 2.5dB attenuation, gives a maximum input voltage of approximately 1.34v
    * ADC.ATTN_6DB: 6dB attenuation, gives a maximum input voltage of approximately 2.00v
    * ADC.ATTN_11DB: 11dB attenuation, gives a maximum input voltage of approximately 3.6v

* __read value__
read ADC


#### Instructions

>Sampling at 36 pins using the adc0 channel, reading the value

><img src="/image/Advanced module/ADC_user.webp" width="50%"> 


## DAC

#### Function Description

>Digital to analog conversion

><img src="/image/Advanced module/DAC.webp" width="50%"> 

* __Init in Pin__
Set conversion channel

* __write value__
Write DA value

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

><img src="/image/Advanced module/DAC_user.webp" width="50%"> 



## UART

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

* __write raw date in__
Write raw string data(E.g **b"\xff\xab"**) to the serial port

#### Instructions

>Read serial data and send data to serial port

><img src="/image/Advanced module/UART_user.webp" width="50%">



## I2C

#### Function Description

>set I2C port

><img src="/image/Advanced module/I2C.webp" width="50%"> 

* __Master slave addr__
Set the Master interface and slave address

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

><img src="/image/Advanced module/I2C_user.webp" width="50%"> 

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

><img src="/image/Advanced module/I2C_Write.webp" width="50%">

>Read date from I2C

><img src="/image/Advanced module/I2C_Read.webp" width="80%">

## Execute

#### Function Description

>Execution of external programs

><img src="/image/Advanced module/Execute.webp" width="50%"> 


#### Instructions

>import Library

><img src="/image/Advanced module/Execute_user.webp" width="50%"> 


## SDCard

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

><img src="/image/Advanced module/SDCard_user.webp" width="50%"> 


## Http

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

><img src="/image/Advanced module/Http_user.webp" width="50%"> 

## EEPROM

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


## Modbus Master

#### Function Description

>Create a Modbus Master, encapsulate the data with Modbus protocol, send the data to the Slave through serial communication, and the data value range is 0-65535.

><img src="/image/Advanced module/modbus_master.webp" width="40%">

* __Init baud tx rx in uart crc__
Initialize the communication interface, and specify the Baudrate, TX, RX, Serial-port and CRC check with BIG or LITTLE mode

* __Send addr function reg addr value__
Send the packet to the specified Slave address. addr is the Slave address, function is the function number, reg_addr is the register address, and value is the user data.

* __Rx buffer cache number__ 
Number of bytes read from buffer

* __Read rx data__ 
Read the received packets, suitable for custom processing

* __Get rx addr function data__ 
Receive packets by callback, receive parameters by variables, and update parameters automatically

#### Instructions

>Main functions: (used together with the following Slave code) connect two M5Stack Fire, establish the Master and Slave through Modbus, the Master press the A / B button to send data, and receive the data packet returned from the Slave (receive function code 2). There are two ways to process the data packet:

>1.The data package returned from the Slave is processed by loop-cycle and displayed on the screen.

According to the definition of Modbus protocol, the data package returned from the Slave contains at least 3 valid data (address, function code, data), so more than 3 bytes is regarded as valid data, and the data is parsed through the List-block.

><img src="/image/Advanced module/modbus_loop_master_user.webp" width="100%">

>2. Handle the returned packets through the callback. When using the callback function, do not use loop-cycle, otherwise the callback will be blocked.

Set three variables to receive the address, function number and data returned from the Slave.

><img src="/image/Advanced module/modbus_callback_master_user.webp" width="100%">

## Modbus Slave

#### Function Description

>Create a Modbus Slave, receive the data package encapsulated by Modbus, communicate with the Master through the serial interface, and the data value range is 0-65535.

><img src="/image/Advanced module/modbus_slave.webp" width="40%">

* __Init addr baud tx rx in uart__
Initialize the communication interface, specify the Slave address, Baudrate, TX, RX and Serial-port,CRC is verified as BIG mode.

* __Init function reg addr value method__
Define Modbus data operation format, function is function number, reg_addr is register address, value is initial default value, method is read or write operation mode

* __Update function reg addr value__ 
Update the data in the specified register address according to the function number.

* __Get rx buffer data__ 
Read buffer data

* __Get reg write function reg addr value__ 
Obtain the data packets (function number, register address, data) sent by the Master by callback, and receive them by variables.


* __Get function reg addr value__ 
Get the content of the specified Master data package, and specify it by function number and register address.

* __send addr function reg addr value__ 
Respond to the content of the packet sent to the Master after receiving the Master packet.

#### Instructions

>Main functions: (used together with the Master code above) connect two M5Stack Fire, and establish the Master and Slave through Modbus. The Slave receives the data package of address code 1, function number 1 and register address 1, and then parses the data. if the data is 1 to light the LED bar, and if the data is 2 to turn off the LED Bar, at the same time, the Slave updates its own corresponding data in real time and responds to the Master (through function code 2). The Slave will also report the data to theMaster in real time through pressed A / B button. There are two ways to achieve this:

>1.Process the data package returned from the Slave through loop-cycle, update the data on the screen in time and respond.

Receive the specified packet and analyze the data, judge the data to respond and report to the Master (via function number 2), press A / B button to respond to itself, and send the packet report status to the Master (via function number 2)

><img src="/image/Advanced module/modbus_loop_slave_user.webp" width="100%">

>2. Through the callback to process the returned data, specify that the packet should add judgment processing to "fun" and "reg_addr". When using the callback function, loop should not be used, otherwise the callback will be blocked.

Set three variables to receive the address, function number and data sent by the Master, use the List-block to obtain data, judge and process the data, and report the status to the Master through (function number 2). Press the A / B button manually to report to the Master (via function number 2) while responding.

><img src="/image/Advanced module/modbus_callback_slave_user.webp" width="100%">

## BLE UART(support M5Stack Fire only)

#### Function Description

>Establish Bluetooth connection and enable Bluetooth passthrough service.

><img src="/image/Advanced module/ble_uart.webp" width="40%"> 

* __Init ble uart name__
Initialize settings, configure Bluetooth device name.

* __BLE UART Writre__
Send data using BLE UART.

* __BLE UART remain cache__
Check the number of bytes of BLE UART data.

* __BLE UART read all__
Read all data in BLE UART cache.

* __BLE UART read characters__
Read n data in BLE UART cache.

#### Instructions

>Establish Bluetooth passthrough connection and send on / off control LED.

><img src="/image/Advanced module/ble_uart_user.webp" width="70%">

## Blynk(support M5Stack Fire only)

>Connect with Blynk server, use BLE to connect Blynk App, and realize M5Stack Fire control on mobilephone

><img src="/image/Advanced module/blynk.webp" width="40%"> 

* __Init blynk name token type BLE__
Initialize Blynk configuration, input device name and token of App.

* __Virtual write number data__
Write data to Virtual port number

* __Notify message__
Send system message notification to App

* __Tweet message__
Send message notifications to twitter client

* __On event write get number message__
Receive the data of the specified virtual port to be written from the app, if not specified, set to V*

* __On event read get number__
Read the virtual port number specified by the App

* __On event__
Callback function when Bluetooth is connected / disconnected

#### Instructions

>Use Blynk to control the color and brightness of the RGB light bar of M5StackFire and display it on the screen in real-time

1.Download the blynk App and register your account. You can choose to use the official blynk server or build your own server. Here we provide a free server(120.24.58.30:9443) for you to test.

2.Use the email to register the blynk account, and log in with the account after successful registration.

3.Create a new project, select ESP32 Dev board, select BLE mode, and record the Auth Token.

4.Follow the steps below to add components, BLE connections are required.

><img src="/image/Advanced module/blynk_app_user1.webp" width="20%"><img src="/image/Advanced module/blynk_app_user2.webp" width="20%"><img src="/image/Advanced module/blynk_app_user3.webp" width="20%"><img src="/image/Advanced module/blynk_app_user4.webp" width="20%"><img src="/image/Advanced module/blynk_app_user5.webp" width="20%">

><img src="/image/Advanced module/blynk_user.webp" width="100%">

## Echo STT

>Send speech through ATOM Echo to obtain the converted text

><img src="/image/Advanced module/echo_stt.webp" width="50%"> 

* __Init echo speech recognition token__
Input token and initialize speech service.

* __Recv echo data__
Callback function receives data returned by speech recognition.

* __Get recv text__
Receive data from speech recognition.

#### USAGE

>ATOM Echo flash related ECHO STT firmware and controls led through speech recognition by M5StackFire.

><img src="/image/Advanced module/EchoSTT.webp" width="50%">

## Pin Servo

>Control Servo

><img src="image/Advanced module/pin_servo.webp" width="50%"> 

* __Init Pin, freq, min, max,angle range__
Initial setting of the servo, Pin=servo pin, freq=frequency of the servo signal, min=minimum pulse width, max=maximum pulse width, angle angle=angle range of the servo

* __rotate to degree__
Servo rotation angle

* __write us__
High level time

#### USAGE

>Control the servo to switch between 0° and 90°

><img src="/image/Advanced module/pin_servo_user.webp" width="50%">

## NTP

>Get time via NTP web server

><img src="image/Advanced module/NTP.webp" width="50%"> 

* __Init ntptime with host and timezone__
Set NTP server and time zone

* __Get timestamp__
Get Unix timestamp

* __Get date format with -__
Get the date, the display format is separator "-"

* __Get time format with -__
Get time, the display format is separator "-"

* __Get date format with - and time format with :__
Display date and time, date format is separator "-", time format is separator ":"

* __Get year__
Get Year

* __Get month__
Get Month

* __Get day__
Get Day

* __Get weekday__
Get Weekday

* __Get hour__
Get Hour


* __Get minute__
Get Minute

* __Get second__
Get Second

#### USAGE

>Display the Unix timestamp and the current time and date (Note: When the download program runs offline, you need to add a WiFi connection program before the NTP initialization program to make the device connect to the network.)

><img src="/image/Advanced module/NTP_user.webp" width="50%">