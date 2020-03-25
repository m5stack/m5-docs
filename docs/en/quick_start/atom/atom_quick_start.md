# Atom UIFlow Quick Start {docsify-ignore-all}

1. Download and Setup [M5Bunner](https://m5stack.com/pages/download) and flash UIFlow firmware referring to this instruction [UIFlow introduction](https://docs.m5stack.com/#/en/uiflow/introduction).

2. If you have finished burning, the device will automatically connect to your WiFi information filled in M5Bunner,if the UIFlow connection is successful, the LED will turn into a breathing green-light,and enter the uiflow online programming mode,you can follow step 3. If connected WiFi and not connected to UIFlow server, the blue light is always on. If the WiFi connection fails（steady red-light）, you can try to short press the middle button to connect again. If it still fails, you can try to manually reconfigure WiFi. If you want to manually reconfigure WiFi. When the device is powered on or restarted, press and hold the middle button until the Yellow breathing light is displayed and released. At this time, the yellow light is always on and the WiFi configuration mode is entered.

<img src="assets/img/product_pics/core/minicore/atom/configure_wifi.jpg" width="60%" height="60%">

In WiFi configuration mode, atom will automatically send out WiFi hotspot, such as M5Stack-XXXX. Connect to this WiFi and open the browser and enter 192.168.4.1 to enter the web configuration page.You You need to record the content in the title such as M5FLOW-XXXXXXXX, which will be used in the next step.Enter SSID and password to connect to the network. At this time, the red light flashes. After the connection is successful, the green light flashes, it indicates that the uiflow server is connected normally. At this time, you can go online Programming.

3. Refer to [this page](https://docs.m5stack.com/#/en/uiflow/introduction) to configure APIKey of uiflow ,APIKey can be seen through web configuration page or serial port tool.

<img src="assets/img/product_pics/core/minicore/atom/apikey.png" width="50%" height="50%"><img src="assets/img/product_pics/core/minicore/atom/serialtool.png" width="50%" height="50%">

4. Now you can use UIFlow online programming mode.Refer to [this page](https://docs.m5stack.com/#/en/uiflow/uiflow_home_page) for detailed use of uiflow

<!-- ?> Meaning of light working status

- Breathing  red-light means the WIFI network is connecting

- Steady red-light means WIFI connection failed, short press the middle button to reconnect

- Breathing  green-light indicates that the UIFlow server is connected normally

- Steady blue-light means the UIFlow server is not connected properly

- Breathing  blue-light to indicate that USB mode has been entered

- Steady yellow-light indicates that WEB network configuration is required
-->

?>How to use UIFlow desktop IDE version modes, please refer to the following instructions:
Just press and hold the middle button while powering on (or when restarting), and do not release it. The menu mode will change color in the form of breathing light,wait until the LED color changes to blue, and then release it. At this time, the LED is breathing, and now it enters UIFlow desktop version to use USB connection.Refer to [this page](https://docs.m5stack.com/#/en/uiflow/introduction) to use UIFlow desktop IDE version.

?>Menu option introduction(Press and hold the middle key to turn on the power will enter the menu mode. In this mode, the light will cycle to change the color. The menu options represented by different colors):

<img src="assets/img/product_pics/core/minicore/atom/atom_00.jpg" width="50%">

- GREEN Light  **UIFlow Online Program**
- BLUE Light  **UIFlow desktop IDE Program**
- YELLOW Light  **Configure WIFI**
- PURPLE Light  **Run the Last Downloaded Program**

### UIFlow Example

- [Atom Matrix Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Matrix)

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_example.png" width="50%" height="50%">

- [Atom Lite Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Lite)

<img src="assets/img/product_pics/core/minicore/atom/atom_lite_example.png" width="50%" height="50%">

