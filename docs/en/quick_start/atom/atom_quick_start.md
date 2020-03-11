# Atom UIFlow Quick Start {docsify-ignore-all}

## Menu

**[1. Menu option introduction](#Menu-option-introduction)**

**[2. Meaning of light status](#Meaning-of-light-status)**

**[3. Menu Usage](#Menu-Usage)**

**[4. UIFlow Example](#UIFlow-Example)**


## Menu option introduction

>The breathing light changes color every second in this state

<img src="assets/img/product_pics/core/minicore/atom/atom_00.jpg" width="50%">

- GREEN Light  **UIFlow Online Program Mode**

- BLUE Light  **USB Mode**

- YELLOW Light  **Configure WIFI Mode**

- PURPLE Light  **APP Run Mode**

## Meaning of light status

- Breathing  red-light means the WIFI network is connecting

- Steady red-light means WIFI connection failed, press the middle button to reconnect

- Breathing  green-light indicates that the UIFlow server is connected normally

- Steady blue-light means the UIFlow server is not connected properly

- Breathing  blue-light to indicate that USB mode has been entered

- Steady yellow-light indicates that WEB network configuration is required 

## Menu Usage

1.	After the uiflow firmware is burned, the device will automatically connect to the WiFi information filled in m5bunner. If the connection fails, you can try to press the middle button to connect again. If it still fails, you can try to manually redistribute the network.

2.	When the device is powered on, it will enter the last selected mode by default. If you want to change the mode, just press and hold the middle button while powering on (or when restarting), and do not release it. The menu mode will change color in the form of breathing light, and then release it when the light changes to the required mode color. For example, it is necessary to manually reconfigure WiFi. When the device is powered on or restarted, press and hold the middle button until the Yellow breathing light is displayed and released. At this time, the yellow light is always on and the WiFi configuration mode is entered.

<img src="assets/img/product_pics/core/minicore/atom/configure_wifi.jpg" width="60%" height="60%">

3. In WiFi configuration mode, atom will automatically send out WiFi hotspot, such as M5Stack-XXXX. Connect to this WiFi and open the browser and enter 192.168.4.1 to enter the web configuration page. Enter SSID and password to connect to the network. At this time, the red light flashes. After the connection is successful, the blue light stays on (the uiflow server is not connected) for a short time. When the green light flashes, it indicates that the uiflow server is connected normally. At this time, you can go online Programming.

4.  API key can be seen through web configuration page or serial port tool.

<img src="assets/img/product_pics/core/minicore/atom/apikey.png" width="50%" height="50%"><img src="assets/img/product_pics/core/minicore/atom/serialtool.png" width="50%" height="50%">

<br>

### UIFlow Example

- AtomMatrix

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_example.png" width="50%" height="50%">

- [Matrix Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Matrix)

- AtomLite

<img src="assets/img/product_pics/core/minicore/atom/atom_lite_example.png" width="50%" height="50%">

- [Lite Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Lite)