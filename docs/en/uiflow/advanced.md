# remote control
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



* __MQTT function __

> In the advanced functions of UIFlow, you can find the MQTT function block. We can simply understand the MQTT protocol as two links, "Publish" and "Subscribe".

> When the publisher posts a message, the subscriber will get this information to enable communication between devices

><img src="/image/MQTT/UIFlow_MQTT1.jpg" width="365" />  <img src="/image/MQTT/UIFlow_MQTT2.jpg" width="365"/>



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



