# Unit RELAY {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_relay.png" width="30%" height="30%">


## Description

**RELAY**, as its namesake, is a M5Unit that implenments a Relay functions. Relay can be used as an electrically operated switch, uses an electromagnet to mechanically operate a switch,to where it is necessary to control a large power load circuit by a separate low-power signal, like a digital signal output from a mircoprocessor. Up to 30V DC and 220V AC.

There are 3 pins named: ON, OFF, COM. You can program to make COM connect to ON or OFF, just by high and low out put of a digital GPIO.

## Product Features

-  Single-BUS control
-  Up to 3A @ 30 V DC or 220 V AC
- Software Development Platform: Arduino, UIFlow(Blockly,Python)
- Two Lego-compatible holes
- Product Size：48.2mm x 24.2mm x 21.4mm
- Product weight：11.7g

## Include

- 1x RELAY Unit
- 1x Grove Cable
- 1x 3.96 soket

## Application

- Remote control of high-power appliances, such as refrigerators, air conditioners, TVs, etc.

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

### EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Relay.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

*The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/Arduino).*

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextFont(4);
  M5.Lcd.setTextColor(YELLOW, BLACK);
  //disable the speak noise
  dacWrite(25, 0);
  pinMode(26, OUTPUT);// RELAY Pin setting
}

void loop(void) {
  digitalWrite(26, HIGH);// RELAY Unit work
  delay(500);
  digitalWrite(26, LOW);// RELAY Unit stop work
  delay(500);
}
```

### 2. UIFlow

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/RELAY/example_unit_relay_01.png">

## Schematic

<img src="assets/img/product_pics/unit/relay_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RELAY Unit</td><td> </td><td>RELAY Controlling Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Video

**Program with UIFlow**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Blinking%20a%20bulb%20with%20the%20M5%20Relay%20unit..mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-3a-relay-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>