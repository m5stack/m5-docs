# Atom UIFlow Quick Start {docsify-ignore-all}

1.	Download and Setup [M5Bunner](https://m5stack.com/pages/download) and flash UIFlow firmware referring to this instruction [UIFlow introduction](https://docs.m5stack.com/#/en/uiflow/introduction).

?> In the uiflow configuration, light represents two meanings: one is used for the display of menu options, and the other is used for the prompt of current working status.

2. If you have finished burning, the device will automatically connect to your WiFi information filled in M5Bunner. If the connection fails（steady red-light）, you can try to short press the middle button to connect again. If it still fails, you can try to manually redistribute the network(Refer to [reconfigure WiFi](#reconfigure-WiFi).If the WiFi connection is successful, the LED will turn into a breathing green-light,and enter the uiflow online programming mode.

?> Meaning of light working status

- Breathing  red-light means the WIFI network is connecting

- Steady red-light means WIFI connection failed, short press the middle button to reconnect

- Breathing  green-light indicates that the UIFlow server is connected normally

- Steady blue-light means the UIFlow server is not connected properly

- Breathing  blue-light to indicate that USB mode has been entered

- Steady yellow-light indicates that WEB network configuration is required


3. Refer to [this page](https://docs.m5stack.com/#/en/uiflow/introduction) to configure APIKey of uiflow ,APIKey can be seen through web configuration page or serial port tool.

<img src="assets/img/product_pics/core/minicore/atom/apikey.png" width="50%" height="50%"><img src="assets/img/product_pics/core/minicore/atom/serialtool.png" width="50%" height="50%">

4. Now you can use UIFlow online programming mode

> Refer to [this page](https://docs.m5stack.com/#/en/uiflow/uiflow_home_page) for detailed use of uiflow

?>if you want to enter other modes, please refer to the following instructions:
 When the device is powered on, it will enter the last selected mode by default. If you want to change the mode, just press and hold the middle button while powering on (or when restarting), and do not release it. The menu mode will change color in the form of breathing light, and then release it when the light changes to the required mode color.For example, if you want to enter UIFlow's USB mode(__BLUE Light__), press and hold the middle button, wait until the LED color changes to blue, and then release it. At this time, the LED is breathing, and now it enters USB mode.

Menu option introduction(Press and hold the middle key to turn on the power will enter the menu mode. In this mode, the light will cycle to change the color. The menu options represented by different colors):

<img src="assets/img/product_pics/core/minicore/atom/atom_00.jpg" width="50%">

- GREEN Light  **UIFlow Online Program Mode**

- BLUE Light  **USB Mode**

- YELLOW Light  **Configure WIFI Mode**

- PURPLE Light  **APP Run Mode**

### reconfigure WiFi

If you want to manually **reconfigure WiFi**(__YELLOW Light__). When the device is powered on or restarted, press and hold the middle button until the Yellow breathing light is displayed and released. At this time, the yellow light is always on and the WiFi configuration mode is entered.

<img src="assets/img/product_pics/core/minicore/atom/configure_wifi.jpg" width="60%" height="60%">

In WiFi configuration mode, atom will automatically send out WiFi hotspot, such as M5Stack-XXXX. Connect to this WiFi and open the browser and enter 192.168.4.1 to enter the web configuration page. Enter SSID and password to connect to the network. At this time, the red light flashes. After the connection is successful, the blue light stays on (the uiflow server is not connected) for a short time. When the green light flashes, it indicates that the uiflow server is connected normally. At this time, you can go online Programming.

### UIFlow Example

- AtomMatrix

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_example.png" width="50%" height="50%">

- [Matrix Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Matrix)

- AtomLite

<img src="assets/img/product_pics/core/minicore/atom/atom_lite_example.png" width="50%" height="50%">

- [Lite Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Lite)