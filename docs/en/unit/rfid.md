# RFID

<img src="assets/img/product_pics/unit/unit_rfid_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_grove_a.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Newest-Mini-RFID-Unit-RC522-Module-Sensor-for-Arduino-SPI-Writer-Reader-IC-Card-with/3226069_32963407976.html?spm=a2g03.12010615.8148356.2.29057436VJRuWu)**

## Description

<mark>RFID</mark> is a unit integrated **MFRC522**(which hightly integrates reader/writer IC for contactless communication at 13.56MHz). The unit can realize the function of the card reading device, can identify and record multiple card information, and establish applications such as access control system, punching system, warehouse goods storage and community vehicle access registration.

The Unit is connected to the M5Core's GROVE A interface via the GROVE line and communicates via IIC with an IIC address of 0x28.

## Feature

-  IIC data rate: 400 ~ 3400Kbit/s
-  Supported protocol: ISO14443A, MIFARE and NTAG
-  Operate temperature: -20℃-85℃
-  How long data be saved for: > 10 years
-  GROVE interface, support [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **Datasheet** - [MFRC522](https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf)

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/Arduino).*

After programming the RFID.ino, the IC card or the mobile phone NFC, close to the unit, moves back and forth around the unit, and the UID of the IC card or the RFID chip in the mobile phone will be printed on the screen of the M5Core.

```arduino
/*
    RFID.ino
*/
#include <Wire.h>
#include "MFRC522_I2C.h"
#include <M5Stack.h>

// 0x28 is i2c address on SDA. Check your address with i2cscanner if not match.
MFRC522 mfrc522(0x28);   // Create MFRC522 instance.

// initialization
M5.begin(); Serial.begin(115200); Wire.begin();
/* Init MFRC522 */
mfrc522.PCD_Init();
/* Show details of PCD - MFRC522 Card Reader details */
ShowReaderDetails();

// get the uid of available card
mfrc522.PICC_IsNewCardPresent();// scan for a new card
mfrc522.PICC_ReadCardSerial();// read data
// a new card is selected. The UID and SAK is saved at mfrc522.uid structor.
for (byte i = 0; i < mfrc522.uid.size; i++) {
  Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
  Serial.print(mfrc522.uid.uidByte[i], HEX);
}

// other function
void ShowReaderDetails() {
  /* Get the MFRC522 software version */
  byte v = mfrc522.PCD_ReadRegister(mfrc522.VersionReg);
  if (v == 0x91) Serial.print(F(" = v1.0"));
  else if (v == 0x92) Serial.print(F(" = v2.0"));
  else Serial.print(F(" (unknown)"));
}
```

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_01.png" width="55%" height="55%">

<!-- ### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_02.png" width="58%" height="58%"> -->

## Schematic

<img src="assets/img/product_pics/unit/rfid_sch.JPG">

### PinMap

<table>
<tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>RFID Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>