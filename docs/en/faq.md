<div style="margin-top: 40px;">

<div class="search-tips" style="display:none">
    <h5>No issues were found. You can <a href="https://github.com/m5stack/m5-docs/issues" target="view_window">click here</a> to submit a question to Github.</h5>
</div>

<div class="faq-class">
    <h5>Common product purchase issues</h5>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q1：What is the difference between different M5 hosts and camera units?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/Product_compared.pdf" role="button" style="text-decoration:none" target="view_window">View product comparison form</a>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q2: What is the difference between LoRa and LoRaWAN modules?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
          LoRa module: Ra-02 module, serial communication protocol: SPI, support frequency range 410-525Hz.
          <br>
          LoRaWAN module: RHF76-052 module, built-in LoRaWAN protocol stack, serial communication, sending AT command control module, support communication with full-duplex LoRaWAN gateway, support dual-band 433-470MHz and 868-915MHz.
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q3: The M5 camera transmits images to the mobile phone via WIFI. How far can the transmission be?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
          After testing, the M5Camera can be used indoors for about 20 meters.
        </span>
      </div>
    </div>
</div>



<div class="faq-item">
    <h5 class="faq-title">Q4: Can I connect Wi-Fi in the 5G band?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
          The ESP32 chip does not support WiFi in the 5G band and can only connect to 2.4G.
        </span>
      </div>
    </div>
</div>



<div class="faq-class">
    <h5>Common product programming issues</h5>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q1: How to eliminate the speaker noise of M5Core?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Execute the following statement in the Setup() of the Arduino program</span>
          <pre v-pre="" data-lang="">
            <code class="lang-c">
              dacWrite(M5STACKFIRE_SPEAKER_PIN, 0);
            </code>
         </pre>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q2: The button is used in the programmed program, but it will not work after pressing it once.<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Using buttons and speakers requires M5.update() to be re-responsive after execution.</span>
          <pre v-pre="" data-lang="">
            <code class="lang-c">
              M5.update();
            </code>
         </pre>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q3: What is the difference between UIFlow's Micropython and the official mainline Micropython?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>UIFlow is based on the secondary package of the mainline Micropython, integrating a large number of M5Stack official libraries, UIFlow is easier to understand and easy to use, and most of them are compatible with the mainline API.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q4: Does the M5Stack device support Chinese display?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Support for GB2312 code display in Arduino environment, refer to the hzk16 example in Display, which is limited by the execution speed and UTF-8 file size in Micropython environment.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q5: How to get more APIs<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The reference API provided by M5 official is limited to the function of M5 hardware package. Software application libraries such as WIFI, HTTP, etc. are not included in the scope of supply. Please refer to other ESP32 and Arduino libraries, which are common in use.</span>
      </div>
    </div>
</div>


<div class="faq-class">
    <h5>Common product after-sales problems</h5>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q1: M5stickC does not recognize the port (COM)<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>
            M5StickC only supports WIN10&Linux&MAC drive-free, and other operating systems require users to install drivers themselves.。
            <br>
            Installation steps: 1. Click the link below to download the driver installation package. 2. Connect the device and open the Computer Device Manager port option. 3. Right click on the unrecognized device and perform a manual update.
          </span>
          <br>
          <a href="https://www.ftdichip.com/Drivers/VCP.htm">Driver download connection</a>
      </div>
    </div>
</div>



<div class="faq-item">
    <h5 class="faq-title">Q2: Some modules cannot be downloaded after stacking with M5Core, such as USB module and M5Core stacking<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> It may be that after stacking, the pins GPIO0 on the M5-Bus bus are not well connected to the M5Core. In this case, when downloading the program, GPIO0 should always remain low, but because the contact is not good, GPIO0 can not remain low all the time, so the download fails.
         Solution: Manually connect GPIO0 to GND during the download process to ensure that it is pulled low enough.</span>
      </div>
    </div>
</div>




<div class="faq-item">
    <h5 class="faq-title">Q2: After the M5GO base is stacked with the M5Core, the M5Core cannot be turned on, and the base battery is fully charged.<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> It may be that after stacking, the BATTERY pin on the lower left corner of the M5-Bus bus on the base is not well contacted with the M5Core, which is caused by the misalignment of the soldering position during production. After the bus pin welding position is slightly biased, it is prone to poor contact between the BATTERY pin and the M5Core. Solution: Re-solder the M5-Bus bus header, the pin header must be strictly aligned with the pad position.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q3: Some computers are connected to the main control, but still can't use Arduino IDE, ESPFlashDownloadTool or M5Burner to burn the program.<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div><span> Causes and solutions: It may be because the supply current of these serial ports is not large enough. It is necessary to connect the capacitor between the RST pin and the GND pin in the main control (the capacitance value is larger than 0.1uF), or download When programming, connect GPIO 0 to GND so that GPIO 0 can continue low enough.</span>
        <img class="faq-img" src="assets/img/faq/faq_03.png">
        <img class="faq-img" src="assets/img/faq/faq_05.png">
        <img class="faq-img" src="assets/img/faq/faq_06.png">
        <img class="faq-img" src="assets/img/faq/faq_07.png">
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q4: What special GPIO pins do you need to pay attention to in ESP32?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> The ESP32 has 34 GPIO pins, of which GPIO 34-39 is only used as an input and cannot be used as an output. Others can be used as both an input and an output pin.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q5: Why does the Stick with MPU9250 burn the factory firmware and press button A, the result shows "No", which means "No 9250"<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>Restart this Stick and it will be displayed. Because the code to read the MPU9250 is placed in the setup() function of the factory program, the boot is only executed once, so restart and let the Stick detect the MPU9250 again.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q6: M5stickC can't boot<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> The following operations can restore the device to normal: 1. Short the BAT to GND. 2. Insert the USB cable. 3. After the screen is lit, stop shorting and USB continues to charge the device. </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q7: M5StickV can't load SD card<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>First, make sure that the format of the SD card is FAT32. There is no partition. Some large-capacity SD cards are usually formatted as NTFS. The following tests are performed on the compatibility of the SD card.
        <br>
        <a href="https://docs.m5stack.com/#/en/core/m5stickv">SD card compatibility list</a>
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q8: Send a photo to V-Training but the received message does not contain a model file<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>Carefully check the contents of the email. The training error will be indicated in the email. Only the specified two folders are allowed in the sent photos. The minimum number of photos and the classification are required. If there is a hidden file, the training will fail. 
        <br>
       <a href="https://docs.m5stack.com/#/en/related_documents/v-training"> V-Training detailed tutorial </a>
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q9: MD5 file error occurred while burning program<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>First check your program carefully, confirm that there is no problem, then use M5Burner to erase, check whether it can be successfully cleared, and then burn FactoryTest to check whether it can be burned. If it can be successfully operated, there is no problem, if MD5 file error occurs repeatedly. Then the probability of FLASH has been damaged.
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q10: M5Stack BASIC has been in normal use and suddenly cannot be turned on even if USB is connected.<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>Remove the BASIC base and try to start it up. It is most likely caused by poor contact between the base and the M-BUS.
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q11: BeetleC connected to the phone remote control sometimes fails to respond<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>Most of them are caused by low battery power. If the battery is low, the signal quality will be seriously degraded.
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q12: Screen display with image ripple interference when using HAT-Thermal<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
        The old 100nF capacitor can't give enough decoupling for MLX90640, add a 10uF(106) capacitor to resolve it
        <br>
        Solution: Parallel capacitor in the position shown (10uF 10V 0603)
        </span>
        <img class="faq-img" src="assets/img/faq/hat_thermal/01.webp">
        <img class="faq-img" src="assets/img/faq/hat_thermal/02.webp">
      </div>
    </div>
</div>

</div>


<script>

$(".faq-item").on('click', function() {
                $(this).toggleClass('open');
            });
</script>