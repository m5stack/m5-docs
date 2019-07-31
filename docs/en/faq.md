# FAQ {docsify-ignore-all}

**[M5CORE](#M5CORE-Question)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[UNIT](#UNIT-Question)**


## M5CORE Question

- **Q1: What's the difference between those Cores?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q1">answer</button>
  <div id="Q1" class="collapse">
    The main difference between these Cores is the internal hardware configuration and kit matching. From the basic version to the upgraded version, the attitude sensor MPU9250 is added and the RAM and FLASH are increased. For details, please visit <a href="https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_en.md">here</a>

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_en.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_en.png">
  </div>
</div>


- **Q2: How to turn off the speaker function of M5Core？**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q2">answer</button>
  <div id="Q2" class="collapse">
    Add the following statement to function Setup( ){ }

    ```arduino
    dacWrite(M5STACKFIRE_SPEAKER_PIN, 0);
    ```
  </div>
</div>


- **Q3: Some modules cannot be downloaded after stacking with M5Core, such as USB module and M5Core stacking.**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q3">answer</button>
  <div id="Q3" class="collapse">
    Probably after the stack, the pins GPIO0 and M5Core on the M5-Bus bus are not very well connected.

    In this case, when downloading the program, GPIO0 should always remain low, but because the contact is not good, GPIO0 can not remain low all the time, so the download fails.

    Solution: Manually let GPIO0 connect to GND during the download process to ensure that it is pulled low enough。
  </div>
</div>


- **Q4: After the [M5GO bottom](en/base/m5go_bottom) is stacked with the M5Core, the M5Core cannot be turned on, but the base battery in this M5GO bottom is fully charged.**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q4">answer</button>
  <div id="Q4" class="collapse">
    It may be that after the stacking, the BATTERY of the lower left corner of the M5-Bus bus on the base is not well connected to the M5Core. This is
     caused by the deviation of the welding position during production. After **the bus pin welding position is slightly biased**, it is easy to see that the BATTERY pin is not in good contact with the M5Core.

    Solution: Re-soldering the M5-Bus bus header, the pin header must be strictly aligned with the pad position.
  </div>
</div>


- **Q5: Some computers are connected to the main control, but still can't use Arduino IDE、 ESPFlashDownloadTool or M5Burner to burn the program. For example, the following figure using Arduino IDE.**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q5">answer</button>
  <div id="Q5" class="collapse">
    <img src="assets/img/faq/faq_03.png">


    Solution: you need to connect the capacitor between RST pin and GND pin in your Core (Capacitance value is more than 0.1 uF) or connect GPIO 0 with GND when downloading your firmware so that GPIO 0 keeps low level for an enough time as the third following picture shows.

<img src="assets/img/faq/faq_05.png" width="80%" height="80%">

<img src="assets/img/faq/faq_06.png" width="80%" height="80%">

<img src="assets/img/faq/faq_07.png" width="100%" height="100%">
  </div>
</div>


- **Q6: What special GPIO pins do you need to pay attention to in ESP32?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q6">answer</button>
  <div id="Q6" class="collapse">
    The ESP32 has 34 GPIO pins, of which GPIO 34-39 is only used as an input and cannot be used as an output. Others can be used as both an input and an output pin.
  </div>
</div>


- **Q7: Why does the Stick with MPU9250 burn the factory firmware and press button A, the result shows "No", which means "No 9250"?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q7">answer</button>
  <div id="Q7" class="collapse">
    Restart this Stick and then it can display correctly. Because the code to read the MPU9250 is placed in the setup() function which only was executed once when booting. So reboot and let the Stick detect MPU9250 again.
  </div>
</div>


- **Q8: After getting the FACES Kit or downloading the factory program of the FACES Kit, the following error is displayed on the screen. What happened?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q8">answer</button>
  <div id="Q8" class="collapse">
    <img src="assets/img/faq/faq_08_01.png" width="100%" height="100%">
    This is normal, because there is no main.py file in the program, so this warning is available.
    
  </div>
</div>

- **Q9: I can't power on my M5stickC**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q9">answer</button>
  <div id="Q9" class="collapse">
    <img src="assets/img/faq/m5stickc_05.jpg" width="50%" height="50%">


  One issue commonly exists on M5Stick-C, which happens when the battery is at a low level. In this case, some of the devices will have problem powering on, this is probably caused by a chaos timing sequence of power-on of ESP32, some component is involved, such as AXP192, 552, ESP32

  There is one way to bring the device back to live: 1, Connect G0 to 3V3.  2. Plug in the USB cable. 3, The screen will light up and leave the USB to charge the device.  

  </div>
</div>


- **Q10: M5stickC does not recognize the port (COM)**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q10">answer</button>
  <div id="Q10" class="collapse">
  M5StickC only supports WIN10 & Linux & MAC free drive, the rest of the operating system requires users to install the driver.

  Installation steps: 1. Click the link below to download the driver installation package. 2. Connect the device and open the Computer Device Manager port option. 3. Right click on the unrecognized device and perform a manual update.

  <a href="https://www.ftdichip.com/Drivers/VCP.htm">Driver download Link</a>
  </div>
</div>


## UNIT Question

- **Q1: What is the difference between the various cameras of M5Stack?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q1">answer</button>
  <div id="U-Q1" class="collapse">
    The main difference between these cameras is that some pins (OV2640-SIOD, OV2640-VSYNC, GROVE interface), lens type, and whether or not there is PSRAM. For specific differences, please visit<a href="https://shimo.im/sheets/gP96C8YTdyjGgKQC/e2041">here</a>

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_zh_CN.png">
  </div>
</div>


- **Q2: The camera transmits images to the mobile phone via WIFI, how far can it be transmitted?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q2">answer</button>
  <div id="U-Q2" class="collapse">
    After testing, using M5Camera indoors can transmit about 20 meters.
  </div>
</div>