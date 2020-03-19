# Module LoRa868 {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lora868_01.jpg" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora868_02.jpg" width="30%" height="30%">


## Description

**LoRa868** is integrated with the LoRa Module Ra-01H which is designed and produced by Ai-Thinker.The board has some extra space left over, so we give you a prototyping area great for adding on your own customized circuit working with the LoRa868 Module.

LoRa enables long-range transmissions (more than 10 km in some areas) with low power consumption.The technology is presented in two parts: LoRa, the physical layer and LoRaWAN (Long Range Wide Area Network), the communication layers simillar to the OSI model.

LoRa and LoRaWAN permit long-range connectivity for Internet of Things (IoT) devices in various industrial applications.

## Product Features

-  LoRa Module:  Ra-01H (by Ai-Thinker)
-  Communication Protocol: SPI
-  Universal Perfboard
-  Working Frequency: 803~930 MHz
-  Supports FSK, GFSK, MSK, GMSK, LoRa ™ and OOK modulation modes
-  Receive sensitivity: lowest to -141 dBm
-  Programmable bit rate up to 300Kbps
-  Built-in FPC Antenna
-  External IPX Antenna connector
-  Program platform: Arduino
-  Product Size：54.2mm x 54.2mm x 12.8mm
-  Product weight：14.5g

## Include

-  1x M5Stack LoRa868 Module

## Applications

-  Remote electricity meter reading
-  Home automation
-  Remote irrigation system

## Related Link

- **[LoRa Info](https://wiki.ai-thinker.com/_media/lora/docs/c047ps01a1_ra-01_product_specification_v1.1.pdf) (LoRa)**

- **[LoRaWAN Regional Parameters](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LORA868_Duplex.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### Arduino IDE

These are the point-to-point communication examples between two LORA868 modules. The LoRa nodes send and receive messages.

* Blue string indicates sending succeed.

* Yellow string display the received messages.

* Red string indicates initialization failed.

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORA868/Arduino)*

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
LoRa.begin(868E6);                   // initialize ratio at 868 MHz

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

## Videos

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/LoRa868.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/lora-module-868mhz';

   anchor_search(purchase_link);
   scrollFunc();

</script>