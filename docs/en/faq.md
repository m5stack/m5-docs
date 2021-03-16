<div style="margin-top: 40px;">

<div class="search-tips" style="display:none">
    <h5>Did not search for related issues, you can<a href="https://github.com/m5stack/m5-docs/issues" target="view_window">click here</a> to submit an issue on Github.</h5>
</div>

<div class="faq-class">
    <h5>Common product purchase problems</h5>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q1: What is the difference between different M5 mainframes and camera units?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/Product_compared.pdf" role="button" style="text-decoration:none" target="view_window">View product comparison table</a>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q3: Where is the official information release platform? How to get first-hand news?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
      The official information release platforms are
        <a href="https://m5stack.com/pages/blog-page">Official website news page</a>
        <a href="https://www.youtube.com/c/m5stack">Youtubu</a>
        <a href="https://www.facebook.com/M5Stack/">FaceBook</a>
        <a href="https://www.instagram.com/m5stack/">Instagram</a>
        <a href="https://twitter.com/M5Stack">Twitter</a>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q4: What are the main controllers of M5Stack?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
The main controllers of M5Stack can be divided into 3 categories, Core series, Stick series and Atom series. Other series of controllers will be added in the future.
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q5: What is the difference between M5Stack's controller series?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
Core series controllers have screens are our main series; Stick series screens will become smaller, the overall size is much smaller, and cost-effective; Atom series do not have a screen, instead of RGB lights, its price is the most Inexpensive, you can use the crop network terminal to control the equipment; you can see it on the official website<a href="https://docs.m5stack.com/#/zh_CN/">details</a> contrast
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q6: What is the difference between COM series communication module and other old communication modules<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        The COM communication module mainly adopts SimCOM module, the main body of the module adopts the public version design, the main communication module can be replaced as required, and the physical pins of serial communication can be configured through the dial switch. The old module module is directly welded and cannot be disassembled. The pins need to be cut manually and cannot be modified again.
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q7: I don’t know how to program, can I use M5Stack products for applications?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        If you don’t understand programming, you can use UIFlow to program, but children should have basic programming thinking. The pin definition of M5Stack products should be known.(For example, which pins of ESP32 use ADC will cause WiFi to fail, and which pins can only be input but not output) The data processing flow should be clear. If you want to perform functions outside the scope of personal cognition, it is recommended to learn relevant knowledge by yourself (such as my To save the image as a JPEG picture, at least you have to know the JPEG file data format).
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q8: I want to do IoT applications, I don’t know which communication module to choose<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        Determine your project requirements, which IoT platform to use, what protocols need to be supported by AT, data throughput, signal coverage, network speed requirements, project cost, post-maintenance costs, etc. If you understand clearly these questions will naturally have answers .
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q9: What is the difference between LoRa and LoRaWAN modules?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
          LoRa module: using Ra-02 module, using serial communication protocol: SPI, supporting frequency range 410-525Hz.
          <br>
          LoRaWAN module: Adopt RHF76-052 module, built-in LoRaWAN protocol stack, use serial communication, control module by sending AT command, support communication with full-duplex LoRaWAN gateway, support dual-band 433-470MHz and 868-915MHz.
          <br>
          The LoRa module is generally used to build a small local area network, the LoRaWAN module is generally used to build a large wide area Internet of Things network data collection (usually used with LoRaWAN gateway services), the LoRaWAN module has a built-in LoRaWAN protocol stack, and users can easily control by sending AT commands The module supports communication with a full-duplex LoRaWAN gateway.
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q10: I just got the host, how to use it<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
If you have been in touch with Arduino before and understand the C/C++ language, please follow the steps below to configure. If you have not touched Arduino at all, please move to<a href="https://docs.m5stack.com/#/en/uiflow/uiflow_home_page">UIFlow</a>
or check<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/UIFlow-Book-zh_cn.pdf">UIFlow book</a>
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q11: How far can the M5 camera transmit images to the phone via WIFI?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
          After testing, using M5Camera indoors can transmit about 20 meters.
        </span>
      </div>
    </div>
</div>



<div class="faq-item">
    <h5 class="faq-title">Q12: Can you connect to Wi-Fi in the 5G band?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
          The ESP32 chip does not support WiFi in the 5G band, and can only be connected to 2.4G.
        </span>
      </div>
    </div>
</div>



<div class="faq-class">
    <h5>Common product programming problems</h5>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q13: ESP-IDF、Arduino、UIFlow、Micropython, What is the difference between several programming environments<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>ESP-IDF belongs to the low-level development of Espressif’s proprietary SDK. It requires users to be proficient in C/C++ programming, understand ESP32 internal interface definitions and APIs, and be familiar with GCC, CMAKE and other compilation environments. It is mainly for product-level and consumer-level development. The entry barrier is high, mainly suitable for professional users in a single field.

Arduino programming is to encapsulate the interface on the basis of ESP-IDF, users do not need to care too much about the underlying implementation logic, mainly for amateur DIY enthusiasts, programming beginners, users only need to understand basic C/C++ knowledge to get started. There are more open source materials, and the code is universal, suitable for beginners.

MicroPython is a simplified version of the Python language, mainly used in single-chip microcomputers. The code is interpreted and executed in real time. Compared with the code writing of C/C++, MicroPython is easier to understand, suitable for scenarios that do not have strict requirements on running speed, and suitable for users who are familiar with the Python language. .

UIFlow is a visual programming platform launched by M5Stack. It integrates programming modules related to M5Stack products, supports offline and online programming, and supports MicroPython programming language. The threshold for visual operation users is further reduced. Users only need to build program logic and simple settings Parameters can complete the programming operation.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q14: How to build an Arduino environment?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>refer<a href="https://docs.m5stack.com/#/zh_CN/arduino/arduino_development">Arduino instructions</a> </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q15: What is the official github website?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>We will update the latest libraries or examples here as soon as possible <a href="https://github.com/m5stack">github</a></span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q16: Where to download the official routine?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>This is our main routine focus<a href="https://github.com/m5stack/M5-ProductExampleCodes">github</a>,Which lists the main peripheral routines, please refer to</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q17: How to build an ESP-IDF environment<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>refer<a href="https://esp-idf-zh.readthedocs.io/zh_CN/latest/get-started/index.html"> ESP-IDF tutorial</a> </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q18: Arduino upload is unsuccessful<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Confirm that the development board model, baud rate, and serial port configuration are correct, erase the Flash and upload again. If the upload still fails, please contact customer service.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q19: How to use Burner to burn firmware?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>There is a tutorial on how to download the firmware in the <a href="https://docs.m5stack.com/#/en/uiflow/uiflow_home_page">Tutorial</a> of our official website UIFlow</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q20: ESP-IDF API<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span><a href="https://esp-idf-zh.readthedocs.io/zh_CN/latest/api-reference/index.html">ESP-IDF API</a></span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q21:How to compile and burn firmware for ESP-IDF<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Use the'make flash' command directly in ESP-IDF or compile and burn in Eclipse IDE. If you burn the compiled bin file directly, you can use ESP Tools to burn according to the file memory address<br>
          <a href="https://github.com/m5stack/M5Stack-IDF">M5Stack IDF component</a><br>
          <a href="https://github.com/m5stack/M5StickC-IDF">M5StickC IDF component</a></span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q22: How to use Bluetooth in Arduino, how to use HTTP, how to use SD, how to use WebServer, how to use FreeRTOS, etc.<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Please find from the following 320 examples<a href="https://techtutorialsx.com/category/esp32/">TECHTUTORIALSX</a></span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q23: I don’t want to use UIFlow to receive the data sent by V-Function. Tell me how to get it.<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The functions integrated in UIFlow are for products in the UIFlow system. If you want to obtain data through Arduino or other platform products, please learn about the JSON format analysis of the relevant platform.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q24: Where to get information to learn<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Hardware is only the carrier of implementation. C/C++, Arduino, Python related websites can all be studied, and you can refer to the use of M5Stack product's own hardware.<a href="https://docs.m5stack.com/#/">docs</a> and <a href="https://github.com/m5stack/M5-ProductExampleCodes">example</a></span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q25: Are ATOM Echo, ATOM Lite, and ATOM Matrix programs common?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The internal pin definitions of the three hosts are different. Most programs of ATOM Lite and ATOM Matrix are common. ATOM Echo is a smart speaker, and the bottom pins are occupied by I2S. Theoretically, it cannot share the same program with other hosts.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q26: Why does my Arduino code compile an error<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
If it is an official program, it has been compiled and verified before uploading. If the official program used is compiled with an error, it may be caused by conflicts caused by library version or board management. You can submit an issue on GitHub or contact customer service. If it is a self-written program, please carefully check the function declaration and class reference for duplicate definitions or type mismatch.
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q27: I don’t want to use UIFlow to receive the data sent by V-Function. Tell me how to get it.<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The functions integrated in UIFlow are for products in the UIFlow system. If you want to obtain data through Arduino or other platform products, please learn about the JSON format analysis of the relevant platform.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q28: Picth, Roll, Yaw obtained using MPU6886 are not accurate<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span></span>Pitch, Roll, and Yaw are calculated in real time through the acceleration and angular velocity obtained by the IMU, which have a lot to do with the accuracy of the algorithm. The program provided at this stage does not optimize the algorithm.
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q29: The project in this video is very interesting, can you give the source code<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>All the material sources come from the users. Some users use it to teach in class, some users use it to produce peripheral products, and some users use it to publish tutorials. What you see is not that users will provide code for free, and the code that can be provided is all It can be found by searching and filtering in GitHub. Some items are already provided in M5Burner and can be burned directly.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q14:  Are Core2 and Core sample programs common?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>As the interface pin definition has been changed, the program cannot be used directly, and the corresponding pins need to be modified in the program.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q30: The key is used in the written program, but it doesn’t work after pressing it once<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Use buttons and speakers need to add M5.update() after execution</span>
          <pre v-pre="" data-lang="">
            <code class="lang-clike">
              M5.update();
            </code>
         </pre>
      </div>
    </div>
</div>



<div class="faq-item">
    <h5 class="faq-title">Q31: Does M5Stack device support Chinese display?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Support GB2312 code display in Arduino environment, refer to the hzk16 example in Display, it can be displayed directly in UIFlow.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q32: How to get more API?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The official reference API provided by M5 is limited to the functions of the M5 hardware package. Software application libraries such as WIFI, HTTP, etc. are not included in the scope of provision. You can refer to other ESP32 and Arduino libraries.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q33: How to use and modify the third-party firmware in Burner?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>In addition to providing UiFlow firmware, our Burner will also search for some interesting firmware on github. Most of these firmwares can be made without or with little hardware dependency, and can be provided for everyone to download and entertain. If you want to download the modified content yourself, you can click the github LOGO next to the firmware version to jump to the corresponding github homepage, where you can download</span>
      </div>
    </div>
</div>


<div class="faq-class">
    <h5>Common hardware problems</h5>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q34: How many I2C can M5Stack use at the same time?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>There are two I2C buses inside ESP32, each I2C bus theoretically supports up to 127 external devices, of which the host already occupies an I2C bus, so there is another I2C bus for users to customize.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q35: How to eliminate the speaker noise of M5Core?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Execute the following statements in the Setup() of the Arduino program</span>
          <pre v-pre="" data-lang="">
            <code class="lang-clike">
              dacWrite(M5STACKFIRE_SPEAKER_PIN, 0);
            </code>
         </pre>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q36: Is Core2 compatible with other modules<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The depth of Core2's M-Bus terminal is different from standard Cores. For modules which odered AFTER Core2 release are all compatible; For those earlier than the date (Sep 1st, 2020), need to consult with us before applying.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q37: DC Motor Module How to connect Lego Motor<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The DC Motor Module supports Lego NXT and EV3 series servo motors, but does not support Lego PF motors. Because Lego servo motors use RJ12 interfaces, they need to be connected with a special M5Stack cable.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q38: StickC and Atom HY2.0-4P interface input digital signal does not respond<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>When StickC and Atom use the HY2.0-4P interface, the corresponding pins need to be pulled up, otherwise there is no signal output.</span>
      </div>
    </div>
</div>




<div class="faq-item">
    <h5 class="faq-title">Q39: What is the farthest IR emission distance of StickC / StickC Plus<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>According to the test, the farthest distance is 80cm</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q40: Why does Atom GPS Kit GPS only have TX but not RX<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Atom pins are limited. In order to be compatible with the use of Atom Matrix, GPIO21/25 pins are not connected, and RX is usually rarely used to configure GPS. If there are special needs, the GPS module can be configured separately, if only used on AtomLite , Users can fly RX to GPIO21/25 pins by themselves.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q41: How to use the 3 dots at the bottom of the Core2 screen<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The dots at the bottom of the screen are just laser patterns. The reason is the same as the three buttons at the bottom of the Android phone screen. It is a part of the touch screen. You only need to set the touch hot zone to map to virtual buttons. Any position on the entire screen can be mapped to For virtual keys, refer to the Touch example in Core2 Example for specific use.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q42:  How to light up the LED Bar of the FACE II base<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The LED Bar of the FACE II base is used in the same way as the M5GO base. The pin is GPIO15. Please refer to the M5Stack Fire program.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q43:  Does RS485 have to connect 4 wires when using it?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>RS485 only needs to be connected to 3 (GND, TX, RX), and the 12/24V pin only provides power for the M5Stack device, eliminating the need for USB power supply wiring. If you connect non-M5Stack devices, please confirm the device voltage to prevent burnout. Generally, it is recommended to connect only 3 wires.
</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q44:  Can multiple batteries be stacked<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Multiple stacks can be used. The total capacity of the batteries in parallel increases, and the voltage remains the same. However, because each battery is not discharged evenly during use, there is a voltage difference between the batteries, which may cause the battery to be reversed, and it will be reduced after long-term use Battery life, so long-term stacking is not recommended.
</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q45:  Some products use STM32 chips, can you program it?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The product has calibrated the burning test point, and the user can program it by himself. The STM32 firmware does not initialize. Self-programming means that the user has given up the warranty. Therefore, it is not recommended that the user program by himself.
</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q46:  Some StickC HATs have batteries, how to charge the batteries<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Just plug the StickC into the HAT and power the StickC to power the HAT battery
</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q47: ESP32 has several serial ports<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>ESP32 has a total of 3 hardware serial ports. By initializing the serial port (RX/TX), the designated GPIO pins can be mapped to serial pins. One of the hardware serial ports (GPIO1/GPIO3) has been occupied by the USB interface (UART0), and the remaining two It is available for users to connect serial peripherals. UART1 is set as (GPIO16/GPIO17) by default by the system. UART2 is not specified in the system, and users can map it freely.</span>
      </div>
    </div>
</div>


<div class="faq-class">
    <h5>UIFlow FAQ</h5>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q48: How to use UIFlow?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
<span> <a href="https://docs.m5stack.com/#/en/uiflow/uiflow_home_page">Using tutorial</a> about UIFlow is organized on our official website, and we are still <a href ="https://space.bilibili.com/443675010?from=search&seid=16642945198622497488">B station</a> publishes related video tutorials</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q49: How to add pictures in UIFlow?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span> Our UIFlow currently supports pictures in jpg format, and we will add png pictures in subsequent updates. We can provide software that converts the format or jpg picture making software to get a picture (below 50KB) that you want to display. When our controller is connected to the network and connected to the server, then by running the manage icon on the left, click to add a picture and select the jpg picture, and then wait for upload to the controller. Drag to the screen through the Image in the left column and click on it to select the image we uploaded.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q50: What is the difference between UIFlow's Micropython and the official mainline Micropython<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>UIFlow is a secondary package based on the mainline Micropython and integrates a large number of official M5Stack libraries. UIFlow is easier to understand in use, and it is also compatible with most of the mainline API writing.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q51:  How does UIFlow build its own block?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
<span>The beta version of our UIFlow has a function for players to build their own modules. When we first started using it, we need to click <a href="https://docs.m5stack.com/#/en/related_documents/blockly_custom">User Manual</a> to read the manual carefully. Then open <a href="http://block-maker.m5stack.com/">Create *.m5b file</a> to make the module, and click Download to download it, and then click Open *.m5b to use </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q52:  How does Core enter wifi mode quickly?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Press and hold the middle button when booting to quickly enter the wifi mode</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q53:  Where will the files run by UIFlow be saved?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>The micropython file running and saved under UIFlow will be saved in temp.py of the controller. The difference is that the running file is run directly without switching modes, while the downloaded file is changed to App mode and restarted. Our App mode is also to run the temp.py file at boot. The offline m5f file will be saved in the download location of your browser</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q54:  Does UIFlow support multi-threading?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
<span>For UIFlow, it is based on multi-threading. In order to prevent users from using multi-threading in principle to prevent UIFlow from working properly in principle, the multi-threading part is not open to users. Users who want to DIY can use<a href="http://docs.micropython.org/en/latest/library/_thread.html">micropython official multi-threaded document</a> written by yourself</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q55:  <p class="faq-Can UIFlow variables have the same name?button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Due to the technical problem of graphical conversion to micropython, so far our variables are global variables, so the names of variables cannot be duplicated, and there may be adjustments in the future</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q56: I used UiFlow to write the Core2 drawing board program. Why did the drawing trace disappear after releasing the hand?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>Core2 has used LVGL and normal GUI drawing so far. Your drawing may use normal GUI API, but touch uses LVGL API, so LVGL touch triggers redraw and will overwrite the previous drawing traces. Use * *Advanced**->**Additional code** Add the code "lv.obj.set_click(lv.scr_act(), False)" in the module to close the redraw event</span>
      </div>
    </div>
</div>

<div class="faq-class">
    <h5>Common product after-sales problems</h5>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q57: M5stickC cannot recognize the port (COM)<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>
            M5StickC only supports WIN10&Linux&MAC driver-free, other operating systems require users to install their own drivers.
            <br>
            Installation steps: 1. Click the link below to download the driver installation package. 2. Connect the device, and open the computer device manager port option. 3. Right-click the unrecognized device to update it manually.
          </span>
          <br>
          <a href="https://www.ftdichip.com/Drivers/VCP.htm">Driver download connection</a>
      </div>
    </div>
</div>



<div class="faq-item">
    <h5 class="faq-title">Q58:<p class="faq-button"></p></h5>Some modules cannot be downloaded after stacking with M5Core, such as USB module stacking with M5Core
    <div class="faq-answer">
      <div><span> It may be that after stacking, the pin GPIO0 on the M5-Bus bus is not in good contact with the M5Core. In this case, when downloading the program, GPIO0 should always remain low, but because the contact is not good, GPIO0 cannot always remain low, so the download fails.
        Solution: During the download process, manually connect GPIO0 to GND to ensure that it is pulled down for a long time.</span>
      </div>
    </div>
</div>




<div class="faq-item">
    <h5 class="faq-title">Q59: After stacking M5Core on the M5GO base, the M5Core cannot be turned on. The base battery is fully charged.<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> It may be that after stacking, the pin BATTERY on the lower left corner of the M5-Bus on the base does not make good contact with the M5Core. This is caused by the deviation of the welding position during production. After the soldering position of the bus header is slightly offset, the BATTERY pin may not contact M5Core easily. Solution: re-solder the M5-Bus bus pin header, the pin header position must be strictly consistent with the pad position。</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q60: Although some computers are connected to the main control, they still cannot use Arduino IDE, ESPFlashDownloadTool or M5Burner to burn programs。<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> Reason and solution: It may be because the power supply current of these serial ports is not large enough, and a capacitor needs to be connected between the RST pin and the GND pin in the main control (the capacitor value is larger than 0.1uF), or when downloading the program ，Connect GPIO 0 to GND so that GPIO 0 can continue to be low enough。</span>
        <img class="faq-img" src="assets/img/faq/faq_03.webp">
        <img class="faq-img" src="assets/img/faq/faq_05.webp">
        <img class="faq-img" src="assets/img/faq/faq_06.webp">
        <img class="faq-img" src="assets/img/faq/faq_07.webp">
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q61: What are the special GPIO pins of ESP32 that need attention?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> ESP32 has 34 GPIO pins, of which GPIO 34-39 are only used as input and cannot be used as output. The others can be used as both input and output pins.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q62: Why is the Stick with MPU9250 burned with the factory firmware, press button A, the result shows "No", that is, "9250 does not exist"<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>Restart this Stick to display it. Because the code to read the MPU9250 is placed in the setup() function of the factory program, it is only executed once at boot, so reboot and let Stick detect the MPU9250 again.</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q63: M5stickC Can not boot<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>The following operations can restore the device to normal: 1. Short-circuit BAT to GND, and disconnect the short-circuit after 2 seconds. 2. Insert the USB cable. 3. After the screen lights up, the USB continues to charge the device.</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q64: M5StickV Cannot load SD card<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>First of all, confirm whether the format of the SD card is FAT32, and partitions are not allowed. Some large-capacity SD cards are usually formatted as NTFS. The compatibility of the SD card is tested as follows. 
        <br>
        <a href="https://docs.m5stack.com/#/zh_CN/core/m5stickv">SD card compatibility list</a>
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q65: Send photos to V-Training but the received email does not contain model files<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>Check the contents of the email carefully. Training errors will be pointed out in the email. Only the two specified folders are allowed in the sent photos. The minimum number and classification of photos are required. If there are hidden files, the training will fail. 
        <br>
       <a href="https://docs.m5stack.com/#/zh_CN/related_documents/v-training"> V-Training detailed tutorial </a>
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q66: MD5 file error occurred while burning the program<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>Firstly check your program carefully to confirm that there is no problem. Secondly, use M5Burner to erase and check whether it can be cleaned successfully. Burn FactoryTest again to check whether it can be burned. If the operation is successful, there is no problem. If MD5 file error occurs repeatedly There is a high probability that FLASH has been damaged.
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q67: M5Stack BASIC has been in normal use, but suddenly it can’t be turned on, even if USB is connected<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>Remove the BASIC base and try to boot it up. It is most likely caused by poor contact between the base and M-BUS
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q68: BeetleC connected to mobile phone remote control sometimes fails to respond<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>Most of it is caused by low battery power. If the battery power is low, the signal quality will be seriously degraded.
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q69: How to change GPS settings<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>Generally speaking, GPS can use the replacement settings. If you have special needs to change the settings, you can use a TTL to USB converter to directly connect to the GPS via <a href="https://www.u-blox.com/ en/product/u-center"> U-Blox Center</a> for configuration, specific software instructions, refer to U-Blox official website U-center user guide.
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q70: When using HAT-Thermal, the screen display has image ripple interference<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
        The old 100Nf capacitor can not provide enough decoupling capacity for MLx90640, it can be solved by adding a 10Uf (106) capacitor.
        <br>
        Solution: Parallel capacitors (10uF 10V 0603) at the position shown in the figure.
        </span>
        <img class="faq-img" src="assets/img/faq/hat_thermal/01.webp">
        <img class="faq-img" src="assets/img/faq/hat_thermal/02.webp">
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q71: After upgrading the MacOS version to the higher version, M5StickC cannot burn the program normally.<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
        After upgrading the MacOS Catalina version on some Mac computers, M5StickC cannot burn programs normally.
        <br>
        Solution1: When programming, use DuPont cable to short-circuit G0 to GND.
        Solution2: <a href="https://forum.m5stack.com/topic/1591/m5stickc-atom-on-macos-catalina-can-t-upload-esp32-timed-out-waiting-for-packet-header-solution-solved">Use the update tool to update the device USB driver chip firmware</a>
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q72: Can multiple modules with different functions be stacked at the same time?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>When stacking multiple modules with different functions at the same time, you need to pay attention to whether there is a pin conflict on the MBUS, and the I2C that shares a pin needs to check whether there is an address conflict
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q73: How to expand multiple Unit devices for the same Grove port<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>M5Stack has designed Hub (dedicated for expanding I2C devices with different I2C addresses) / Pahub (dedicated for expanding I2C devices) / Pbhub (dedicated for expanding IO reading and writing devices without timing requirements). For detailed usage information, please refer to 

[Product docs](https://docs.m5stack.com/#/)
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q74: M5Core Standby time<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>The battery life of the controller is affected by many factors such as battery capacity, operating status, and load, so there will be no fixed value. Reducing the load and adopting the sleep strategy can effectively increase the battery life.
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q75: What is the difference between the main development methods of M5StickV/UnitV series products?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
      <span>
        V-Function is a multiple visual recognition function firmware developed by the M5Stack team for V series devices. Based on different functional firmware (object tracking, motion detection, etc.), users can quickly build visual recognition applications, supporting UIFlow or serial ports Direct data call.
        <br>
        Maixpy ​​firmware is based on MicroPython and is mainly used in single-chip microcomputers. The code is interpreted and executed in real time. Compared with C/C++ code writing, MicroPython is easier to understand, suitable for scenarios that do not have strict requirements on running speed, and suitable for users who are familiar with the Python language.
        <br>
        K210 dedicated SDK, mainly for low-level development, requires users to be proficient in C/C++ programming, understand ESP32 internal interface definitions and APIs, familiar with GCC, CMAKE and other compilation environments, mainly for product-level and consumer-level development, and has a relatively low entry threshold for basic users High, mainly suitable for professional users in a single field.
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q76: How to read the firmware that has been burned?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
        Use esptool to read the flash content of esp and export the bin file. Detailed operation reference

[esptool github](https://github.com/espressif/esptool)
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q77: How to use Arduino's file system to partition and read and write files?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>

[Arduino ESP32 FS](https://github.com/me-no-dev/arduino-esp32fs-plugin)

[Image resource case for calling Arduino file system partition](https://github.com/m5stack/M5Stack/tree/master/examples/Advanced/Display/Bmp_Jpg_SPIFFS_draw)
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q78: How to read and write files in the UIFlow file system?<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
        
UIFlow is based on mpy firmware and supports many file system operation tools. Here are two more commonly used tools：

[AMPY](https://github.com/scientifichackers/ampy)

[uPyloader](https://github.com/BetaRavener/uPyLoader)
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q79: Several solutions to download failure of esp32 board in Arduino board management
<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
        Restart the Arduino IDE, the computer uses the mobile phone AP mobile network to download.

[Github manual installation, refer to esp32-arduino warehouse README](https://github.com/espressif/arduino-esp32)

[Board management offline installation](https://www.arduino.cn/thread-92660-1-2.html)

Use the official M5Stack board management address, search for m5stack in the board manager to download：[https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/arduino/package_m5stack_index.json](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/arduino/package_m5stack_index.json)
        </span>
      </div>
    </div>
</div>

</div>

<script>
  $(".faq-item .faq-title").toggleClass('open');
  $(document).ready(function() {
    $(".faq-item .faq-title").on('click', function() {
      $(this).toggleClass('open');
    });
  });
</script>