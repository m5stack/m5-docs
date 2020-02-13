# RFID {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_rfid_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_02.png" width="30%" height="30%">


## Description

**RFID** has an RFID chip **MFRC522** inside.

The MFRC522 operates in the 13.56MHz frequency band and uses the modulation and demodulation principle to interact with the proximity RF card.  This unit can realize the function of the card reading and writing device, to identify and record multiple card information, to encode and authority a RF card.

It is able tp establish applications such as access control system, punching system, warehouse goods storage and community vehicle access registration.

Connect this Unit to GROVE PORTA on M5Core, IIC adress is 0x28.
<br><br><br>

## Product Features

- Operating frequency: 13.56 MHz
- I2C data rate: Fast mode: up to 400 Kbit/s; High-speed mode: up to 3400 Kbit/s
- RC522 Transceiver Buffer: 64 bytes
- Supported protocol: ISO14443A, MIFARE and NTAG
- Operate temperature: -20℃-85℃
- How long data be saved for: > 10 years
- Reading and writing distance: < 8 cm
- Program Platform: Arduino, UIFlow(Blockly, Python)
- Two Lego installation holes
- Product Size：48.2mm x 24.2mm x 8.3mm
- Product weight：5.9g

## Include

- 1x RFID unit
- 1x GROVE Cable

## Applications

- Smart home access control system
- Vehicle management
- Smart transportation
- Smart bookshelf

## Related Link

- Datasheet **[MFRC522](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MFRC522_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_RFID.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

*The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/Arduino).*

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

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_01.png" width="50%">

### 2. UIFlow

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/UIFlow).*

After opening and burning this example using [UIFlow](flow.m5stack.com), place the proximity card on the Unit surface and the screen displays “True” and the UID number of the card.

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_02.png">

## Schematic

<img src="assets/img/product_pics/unit/rfid_sch.JPG">

### PinMap

<table>
<tr><td>M5Core ( GROVE A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>RFID Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/rfid-sensor-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>