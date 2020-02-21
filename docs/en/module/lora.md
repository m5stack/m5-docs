# Module LoRa (433MHz) {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lora_01.jpg" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_02.jpg" width="30%" height="30%">


## Description

**LoRa (433MHz)** integrated LoRa (433MHz) Module Ra-02, designed and produced by Ai-Thinker. On the board has some extra space left over, so we give you a prototyping area, it's great for adding on your customized circuit working with the LoRa (433MHz) Module.

LoRa (433MHz) enables long-range transmissions (more than 10 km in rural areas) with low power consumption，The technology is presented in two parts: LoRa (433MHz), the physical layer and LoRaWAN (Long Range Wide Area Network), the upper layers.

LoRa (433MHz) and LoRaWAN permit long-range connectivity for Internet of Things (IoT) devices in different types of industries.

## Product Features

-  LoRa (433MHz) Module:  Ra-02 (by Ai-Thinker)
-  Series Communication Protocol: SPI
-  Universal Perboard
-  Working Frequency: 433 MHz
-  Supports FSK, GFSK, MSK, GMSK, LoRa ™ and OOK modulation modes
-  Receive sensitivity: lowest to -141 dBm
-  Programmable bit rate up to 300Kbps
-  Build-in PCB Antenna
-  External Antenna port
-  Program platform: Arduino, Micropython, UIFlow(Blockly)
- Product Size：54.2mm x 54.2mm x 12.8mm
- Product weight：14.5g

## Include

-  1x M5Stack LoRa Module

## Applications

-  Automatic meter reading
-  Home building automation
-  Remote irrigation system

## Related Link

- **[LoRa Info](https://wiki.ai-thinker.com/_media/lora/docs/c047ps01a1_ra-01_product_specification_v1.1.pdf) (LoRa)**

- **[LoRaWAN Regional Parameters](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LORA_Duplex.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### Arduino IDE

These are the point-to-point communication examples between two LORA modules. The LoRa nodes send and receive messages.

* Blue string indicates sending succeed.

* Yellow string display the received messages.

* Red string indicates initialization failed.

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORA/Arduino)*

```arduino
#include <M5Stack.h>
#include <M5LoRa.h>

//declaration
String outgoing;                     // outgoing message
byte msgCount = 0;                   // count of outgoing messages
byte localAddress = 0xBB;            // address of this device
byte destination = 0xFF;             // destination to send to

//initialization
M5.begin();
LoRa.setPins();                      // set CS, reset, IRQ pin
LoRa.begin(433E6);                   // initialize ratio at 915 MHz

//send message
void sendMessage(String outgoing) {
  LoRa.beginPacket();                // start packet
  LoRa.write(destination);           // add destination address
  LoRa.write(localAddress);          // add sender address
  LoRa.write(msgCount);              // add message ID
  LoRa.write(outgoing.length());     // add payload length
  LoRa.print(outgoing);              // add payload
  LoRa.endPacket();                  // finish packet and send it
  msgCount++;                        // increment message ID
}

//receive message
void onReceive(int packetSize) {
  if (packetSize == 0) return;       // if there's no packet, return
  int recipient = LoRa.read();       // recipient address
  byte sender = LoRa.read();         // sender address
  byte incomingMsgId = LoRa.read();  // incoming msg ID
  byte incomingLength = LoRa.read(); // incoming msg length

  String incoming = "";

  while (LoRa.available()) {
    incoming += (char)LoRa.read();
  }
}

onReceive(LoRa.parsePacket());
```

<img src="assets/img/product_pics/module/module_example/LORA/example_module_02.png">

## Schematic

<img src="assets/img/product_pics/module/lora_sch.png">


<script>

   var purchase_link = 'https://m5stack.com/products/lora-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>

