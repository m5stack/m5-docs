# M5StickC Quick Start - UIFlow {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.png"><img src="assets/img/uiflow-logo.png">

**[1. Burn UIFlow Firmware](#_1-Burn-UIFlow-Firmware)**

**[2. Wi-Fi Setting](#_2-Wi-Fi-Setting)**

**[3. Program](#_3-Program)**

## 1. Burn UIFlow Firmware

#### (1) Download M5Burner

Access [M5Stack Official Website](http://www.m5stack.com/download), and download M5Burner

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner_02.png" alt="Screenshot of coverpage" title="Cover page">

#### (2) Burn the firmware

Connect M5StickC to the computer via the USB Type-C cable, unzip the M5Burner archive you just downloaded, and double-click the executable `M5Burner.exe`

Select the `COM`, `Baudrate` and the lastest `firmware`

* <font color="red">Select COM: COM31</font> (Now, my serial port which is connected with PC is `COM31`)

* <font color="red">Select Baudrate: 115200</font>

* <font color="red">Download and select Firmware: UIFlow-vx.x.x-StickC</font>

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_01.png">

Click `Burn` for downloading UIFlow firmware

The following figure indicates that the firmware is successfully burned.

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_02.png">

## 2. Wi-Fi Setting

#### (1) Select `SETUP`

After successfully burning the UIFlow firmware, click the `Power Switch` button in the lower left corner of the M5StickC.

M5StickC will display the AP name as the shown below

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_03.png">


#### (2) Connect to AP

Turn on Wi-Fi on your phone or computer, then connect to the M5StickC hotspot `AP` displayed on the screen ( For example, the M5-80f0 is now displayed ). After the connection is successful, open a browser and enter the URL `192.168.4.1`, then select Wi-Fi that can be connected to the network, enter the Wi-Fi password. ( Now, the networkable Wi-Fi is M5 )

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_04.png">

#### (3) Connect to Wi-Fi

After M5StickC successfully connects to a networkable Wi-Fi (here M5), the screen will display `APIKEY`.

*Description of APIKEY: APIKEY is the device unique identifier. As long as the current UIFlow is connected to which device's APIKEY, The programming code will be downloaded to that device.*

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_05.png">

The status of the network icon on the screen:

* Green means M5StickC successfully connected to UIFlow Server, that is online status

* Red means be offline status

## 3. Program

#### (1) Connect to UIFlow

Now If you are programming with a computer, enter the URL `flow.m5stack.com` on your computer's browser

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_06.png">

Every time before you upload the code to M5StickC through UIFlow, make sure that UIFlow is connected to the M5StickC you want to program.

So you need to click on the gear in the upper right corner of the UIFlow IDE page and enter APIKEY on your M5StickC screen in the pop-up dialog box. Click `Save`, then UIFlow will connect to M5StickC.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/click_for_apikey.png">

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_07.png">

Now you can start programming with UIFlow!

#### (2) Programming example

Drag and drop the `Lable` in the upper left corner of the UIFlow IDE to the UI interface of `M5StickC`, change their `text` and `font`

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_10.png">

From `Hardware` -> `LED`, drag a block named `LED ON` and another block named `LED OFF`

From `Timer`, drag a block named `Wait 1s`

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_13.png">

Click the `Run` button in the upper right corner of the page to execute the effect

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_16.png">

<mark>**The Result:**</mark>

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_14.png">


<!--
## Example

>Click and download [example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Stick/UIFlow). And open this example code in UIFlow, then run it. Program phenomenon: White squares will scroll back and forth on the screen.

<img src="assets/img/product_pics/core/minicore/m5stick/example/example_core_m5stick_02.png" width=50% height=50%><img src="assets/img/product_pics/core/minicore/m5stick/example/example_core_m5stick_03.png" width=50% height=50%>

### Note

>the resolution of stick screen is **64x128**, so if you want to drag a graph at [WebIDE](http://flow.m5stack.com/) to display on stick screen, it's better for you to drag it within a certain range shown as following figure.(Currently only supports the display of rectangular patterns, as well as labels.)

<img src="assets/img/product_pics/core/minicore/m5stick/example/example_core_m5stick_01.png" width=50% height=50%>

## Related Video

**UIFlow introduce**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%20Tutorial%201.mp4" type="video/mp4">
</video>

**UIFlow quick start (Mac & Linux)**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Getting%20started%20with%20UI%20flow%20(Mac_Linux).mp4" type="video/mp4">
</video> -->