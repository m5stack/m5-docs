# Unit LASER.TX {docsify-ignore-all}

<img src="assets\img\product_pics\unit\laser_tx\unit_laser_tx_01.jpg" width="30%" height="30%">
<img src="assets\img\product_pics\unit\laser_tx\unit_laser_tx_02.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/laser-tx-unit)**

## Description

This is one of the communication devices among  M5Units, a Laser emitter with adjustable focal length. It is mainly built with a laser diode
<br><br>
Laser communications devices are wireless connections through the atmosphere. They work similarly to fiber-optic links, except the beam is transmitted through free space. While the transmitter and receiver must require line-of-sight conditions, they have the benefit of eliminating the need for broadcast rights and buried cables. Laser communications systems can be easily deployed since they are inexpensive, small, low power and do not require any radio interference studies. 
Two parallel beams are needed, one for transmission and one for reception. Therefore we have a LASER.RX parallelly.  
<br>
Port type of this unit is PORTB.
<br><br>
*warning!!! laser is dangerous for human being, Don’t aim a laser pointer towards a person’s head. This is to prevent the beam from getting in their eyes, possibly causing eye damage. Remember that people can move unexpectedly, so keeping away from their heads is a good idea*

## Product Features

- Laser transmitter
- adjustable focal length
- Work voltage: 5V
- Pair with LASER.RX 
- Two Lego-compatible holes
- Program Platform: Arduino, UIFlow(Blockly, Python)


## Include

- 1x LASER.TX unit
- 1x GROVE cable

## Application

- Laser communication system on space. 


## Links


## Schematic

<img src="assets/img/product_pics/unit/laser_tx/unit_laser_tx_04.jpg" width="50%" height="50%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/LASER/EasyLoader_LASER_TX.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/LASER).*

```arduino
/* This demo is for LASER.TX and LASER.RX, utilized UART for transmittion and reception of
 laser signals. In order to get the result of this demo, you will need to connect LASER.TX 
 and LASER.RX with PORTC(blue) respectively onto two different M5Cores with M5GO bases on
  bottom. Then flash the demo into both M5Core device. 
  When testing the demo, you need to point the TX unit to RX, and press the button TX connected 
  device. RX connected device will reponse with a display,and will show what is received . 
  See this link for more detals: https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/LASER/EasyLoader_LASER_RX.exe
 */

#include <M5Stack.h>

char ch;
// serial 2 write and read
//#define RX 
void setup() {
  M5.begin();
  Serial.begin(115200);
  // Serial2.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin, bool invert)
  Serial2.begin(9600, SERIAL_8N1, 16, 17);

}

void loop() {
M5.update();

  if (M5.BtnA.wasReleased()) {
    ch = 'A';
    Serial2.write(ch);
  } else if (M5.BtnB.wasReleased()) {
    ch = 'B';
    Serial2.write(ch);
  } else if (M5.BtnC.wasReleased()) {
    ch = 'C';
    Serial2.write(ch);
  }
  M5.update();
 if(Serial2.available()) {
    char ch = Serial2.read();
    M5.Lcd.print(ch);
 }
}
```

### Pin Map

<table>
 <tr><td>M5 PORTB</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>LASER_TX</td><td>/</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>


## Video
**Demo** 

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/LASER-TX-RX.mp4" type="video/mp4" >
</video>




















