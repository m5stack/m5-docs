# Atom UIFlow Quick Start {docsify-ignore-all}

## Menu

**[1. Menu option introduction](#Menu-option-introduction)**

**[2. Meaning of light status](#Meaning-of-light-status)**

**[3. Menu Usage](#Menu-Usage)**

**[4. UIFlow Example](#UIFlow-Example)**


## Menu option introduction

The breathing light changes color every second in this state

- YELLOW Light

**Configure WIFI Mode**

<img src="assets/img/product_pics/core/minicore/atom/atom_01.jpg" width="30%">

- GREEN Light

**UIFlow Online Program Mode**

<img src="assets/img/product_pics/core/minicore/atom/atom_02.jpg" width="30%">

- PURPLE Light

**APP Run Mode**

<img src="assets/img/product_pics/core/minicore/atom/atom_03.jpg" width="30%">

- BLUE Light

**USB Mode**

<img src="assets/img/product_pics/core/minicore/atom/atom_04.jpg" width="30%">

## Meaning of light status

- Breathing  red-light means the WIFI network is connecting

- Steady red-light means WIFI connection failed, press the middle button to reconnect

- Breathing  green-light indicates that the UIFlow server is connected normally

- Steady blue-light means the UIFlow server is not connected properly

- Breathing  blue-light to indicate that USB mode has been entered

- Steady yellow-light indicates that WEB network configuration is required 

## Menu Usage

1.	After burning the UIFlow firmware, the device enters the WEB distribution mode by default (the yellow-light is always on). At this time, Atom will automatically issue a WIFI hotspot, such as M5Stack-XXXX. Connect to this WIFI and open the browser. Enter 192.168.4.1 to enter the web configuration page. Enter The SSID and password are used for network connection. At this time, the red light flashes. After the connection is successful, the blue light stays on briefly (UIFlow server is not connected). When the green light flashes, the UIFlow server is connected normally. At this time, online programming can be performed.
<br>

2.	The device enters the last selected mode by default upon power-on. If you need to change the mode, just press and hold the middle button during power-on (or restart). The menu mode will automatically scroll in the form of lights until the lights change to the desired mode Release the color. For example, you need to reconfigure WIFI. When the device is powered on or restarted, press and hold the middle button until it is released when the yellow-light  breathing is displayed, and then enter WIFI configuration mode.

3.  API key can be seen through web configuration page or serial port tool

<img src="assets/img/product_pics/core/minicore/atom/apikey.png" width="50%" height="50%"><img src="assets/img/product_pics/core/minicore/atom/serialtool.png" width="50%" height="50%">

<br>

### UIFlow Example

- AtomMatrix

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_example.png" width="50%" height="50%">

- [Matrix Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Matrix)

- AtomLite

<img src="assets/img/product_pics/core/minicore/atom/atom_lite_example.png" width="50%" height="50%">

- [Lite Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Lite)