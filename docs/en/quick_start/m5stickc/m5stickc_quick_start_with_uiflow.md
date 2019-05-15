# M5StickC Quick Start - UIFlow {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.png"><img src="assets/img/uiflow-logo.png">

**[1. Burn UIFlow Firmware](#_1-Burn-UIFlow-Firmware)**

**[2. Wi-Fi Setting](#_2-Wi-Fi-Setting)**

**[3. Program](#_3-Program)**

## 1. Burn UIFlow Firmware

### (1) Download M5Burner

Go to [M5Stack Official Website](http://www.m5stack.com/download), and download M5Burner

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner_02.png" alt="Screenshot of coverpage" title="Cover page">

### (2) Flash the firmware

- Connect M5StickC to your computer via the USB Type-C cable, unzip the M5Burner pakage,here appears a folder, open the folder and double-click the executable `M5Burner.exe`
<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_folder_01.jpg">

- Select the `serial number` and `115200 baud rate` that the board is connected to the computer, and select the latest version of UIFlow firmware.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_com_bandrate_02.jpg">

- Download UIFlow firmware from the cloud.
- 
<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5burner_firmware_download_process_01.jpg"><img src="assets/img/getting_started_pics/how_to_burn_firmware/m5buner_choose_firmware_stickc_01.jpg">


- Before Click `Burn` make sure you erase it first, and then make sure you choose the right firmware on the left list.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_choose_firmware_01.jpg">

-  Click `Burn` 


- If you see the following message, means the firmware has flash onto your M5Core.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_flash_finish_01.jpg">

## 2. Wi-Fi Setting

#### (1) Select `SETUP`

After flash the UIFlow firmware, press and hold the `Power` button (bottom left side)for 2 seconds until the screen light up.

The screen will display the AP name as shown below.

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_03.png">


#### (2) Connect to AP

- Now the device is in Wi-Fi AP mode, use your phone to connect this AP. The AP name would start with "M5-". 
- After connected to the AP, your phone and the device has established a Wi-Fi connection.
- Open up a broswer on your phone and type in `192.168.4.1` in the address bar. Here you will enter the Wi-Fi Config page.
- Choose the local Wi-Fi and type in the password to tell the device use that Wi-Fi to get access to the internet.

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_04.png">

#### (3) Connect to Wi-Fi

- After the M5Core connected to the internet, the device will restart and display the UIFlow version number, the `APIKEY` ,and a global icon for indication of connection status with UIFlow server.
  
* Green: Connected
* Red : Disconnected

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_05.png">

## 3. Program

### (1) Connect to UIFlow

- To get access to UIFlow program paltform, you can either scan the QR code on the M5Core with your tablet,or just visit `flow.m5stack.com` on your PC browser.

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_06.png">

- At top right coner, navigate to `setting`,here you will need to type in the `APIKEY` displayed on the screen, choose your `Language` and `Device`(core). Click `OK`. 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/click_for_apikey.png">

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_07.png">

- The device will trying to connect with the UIFlow server. Once it connected, the small dot on the screen will turn green.

Now you can start programming with UIFlow!

#### (2) Programming example

- Drag and drop the icons on the top left corner to place a UI element onto the M5Core simmulator, Let's try with a `Lable` .
- Click the `Lable` to change its properties.

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_10.png">

- From `Event`, drag in `Event` into the programming area. and attach it underneath `Setup` 

- From `Hardware` -> `LED`, drag in some blocks `LED ON` and `LED OFF` , place then inside `Loop` 

- From `Timer`, drag in block `Wait 1s`

<img src="assets/img/getting_started_pics/m5stickc/qs_uiflow/qs_uiflow_13.png">

- hit `Run`

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