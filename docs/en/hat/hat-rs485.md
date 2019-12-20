# RS485 HAT {docsify-ignore-all}


<img src="assets\img\product_pics\hat\rs485_hat\rs485_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\rs485_hat\rs485_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\rs485_hat\rs485_hat_03.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo_min.png">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/m5stickc-rs485-hat-aoz1282ci)**

## Description

**RS485-HAT** is a TTL to RS485 converter for M5StickC. Among M5stack products we have 5 items that include TTL to RS485, they are RS485 unit, RS485 HAT, PLC, LAN, BASE26 they have different input voltage, vary from 5V - 12V.
<br><br>
In this RS485-HAT, it consists of a 485 automatic transceiver circuit and a DC-DC buck circuit which can drop an input 12V to 5V. 
<br><br>
RS485 is a standard defining the electrical characteristics of drivers and receivers for use in serial communications systems, widely used in the industrial field. multipoint systems are supported.
<br><br>
It is used to convert the TTL standard to the RS485 standard. If the outside serial device is  RS485 standard, you can attach this hat on top of stickc, therefore, to implement the communication with RS485 device by TTL protocol. 

<br>

## Product Features

- Built-in SP485EEN
- The built-in automatic transceiver circuit
- Built-in DC-DC buck circuit
- AOZ1282CI
- input DC 12 V
- BandRate up to 115200
- Program Platform: Arduino, UIFlow(Blockly, Python)

## Include

- 1x RS485 HAT
- 1x 4 Pin 3.96 Pitch Terminal

## Application

- RS485 multipoint systems
- Serial communication in industrial field.


## Links

-  **Datasheet** - [SP485EEN](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SP485EEN_en.pdf)
  
## Schematic

<img src="assets/img/product_pics/hat/rs485_hat/rs485_hat_04.jpg" width="80%" height="80%">


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/RS485/EasyLoader_RS485_HAT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/RS485).*

```arduino
#include <M5StickC.h>

/* This demo is for RS485 Hat uart write and read ,
AutoSend Hello M5! AutoReceive and diaplay on screen */

void setup() {

  M5.begin(true,true,true);
  Serial.begin(115200);
  // Serial2.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin, bool invert)
  Serial2.begin(115200, SERIAL_8N1, 26, 0);

  Serial.println("RS485");

}
void loop() {
  Serial2.print("Hello M5!");

 if(Serial2.available()) {
    char ch = Serial2.read();
    M5.Lcd.setTextSize(2);
 }
}
```

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT ADC</td><td>TX</td><td>RX</td><td>5V</td><td>GND</td></tr>
</table>


## Video
**Demo** 

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/RS485_HAT.mp4" type="video/mp4" >
</video>
