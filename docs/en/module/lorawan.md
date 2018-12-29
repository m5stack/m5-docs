# LoRaWAN

<img src="assets/img/product_pics/module/module_lorawan_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lorawan_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-LoRaWAN-Module-433-470Mhz-868-915MHz-with-Internal-Antenna-and-MCX-External-Antenna-Port/3226069_32953098569.html?spm=a2g1y.12024536.productList_5885011.pic_2)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-LoRaWAN-Module-433-470Mhz-868-915MHz-with-Internal-Antenna-and-MCX-External-Antenna-Port/3226069_32953098569.html?spm=a2g1y.12024536.productList_5885011.pic_2)** -->

## Description

<mark>LoRaWAN</mark> is a small LoRa terminal module built-in LoRa chip(SX1276) and ST MCU that means this module has been built with complete LoRa protocal stack. So you can develop a LoRaWAN module through UART or simple AT command with M5Core.

By default, the UART configuration: "9600, 8, n, 1"(8 bits data, no parity, 1 stop bit)

?> **Notice** The 5 holes which are under the silk screen "LoRaWAN" are designed for upgrading the firmware of LoRaWAN module.

## Feature

-  Supports 433/470MHz and 868/915MHz
-  Supports DataRate: 0.018-38.4kbps
-  Output Power: 17 ± 0.5dbm
-  Supports ADR(Adaptive Data Rate)
-  Build-in Antenna

## Include

-  1x LoRa Module

## Applications

-  Automatic meter reading
-  Home building automation
-  Remote irrigation system

## PinMap

| *RHF76-052_UART* | *ESP32 Chip* |
| :----------: |:------------: |
| RXD       | GPIO17    |
| TXD      | GPIO16     |

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[LoRaWAN Info](http://wiki.ai-thinker.com/sx127x-052) (LoRaWAN)**

- **[AT command for LoRaWAN](http://wiki.ai-thinker.com/_media/rhf-ps01509_lorawan_class_ac_at_command_specification_-_v4.4.pdf)**

## Example

### Arduino IDE

This is a point-to-point communication example.

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORAWAN/Arduino).*

```arduino
/*
    Master.ino
*/

#include <M5Stack.h>

// entry test mode
String cmd_test_mode = "AT+Mode=Test";
// Configure the modem,like Freq, SF, BW, Preamble length, TX output power
String cmd_rfconf = "AT+TEST=RFCFG,472.3,8,250,8,8,20";
// send data as HEX format
String cmd_send_data = "AT+TEST=TXLRPKT,\"30 31 32 33 34 35\"";

void setup() {
  M5.begin();
  Serial.begin(9600);
  Serial2.begin(9600, SERIAL_8N1, 16, 17);

  delay(1000);// delay for lorawan power on
  /* LoRaWAN Init */
  Serial2.println(cmd_test_mode);
  delay(500);
  Serial2.println(cmd_rfconf);
  delay(500);
}

void loop() {
  if(M5.BtnA.wasPressed()) {
    Serial2.println(cmd_send_data);
    Serial.println(cmd_send_data);
  }
  M5.update();
}
```

```arduino
/*
    Slaver.ino
*/

#include <M5Stack.h>

// entry test mode
String cmd_test_mode = "AT+Mode=Test";
// Configure the modem,like Freq, SF, BW, Preamble length
String cmd_rfconf = "AT+TEST=RFCFG,472.3,8,250,8,8,20";
// allow to receive data
String cmd_receive_data = "AT+TEST=RXLRPKT";

void setup() {
  M5.begin();
  Serial.begin(9600);
  Serial2.begin(9600, SERIAL_8N1, 16, 17);
  delay(1000);// delay for lorawan power on
  /* LoRaWAN Init */
  Serial2.println(cmd_test_mode);
  delay(500);
  Serial2.println(cmd_rfconf);
  delay(500);
  Serial2.println(cmd_receive_data);
  delay(500);
}

void loop() {
  if(Serial2.available()) {
    int ch = Serial2.read();
    M5.Lcd.print((char)ch);
    Serial.write(ch);
  }
}
```

<!-- ## Schematic -->

<!-- <img src="assets/img/product_pics/module/gps_sch.png"> -->