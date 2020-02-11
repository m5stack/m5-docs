# Unit RGB {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_rgb.png" width="30%" height="30%">


## Description

**RGB** is LED Unit include 3 individual LEDs. It is also one of the Unit from M5GO Kit. Each one can display anycolor based on RGB value. One feature of this Unit is extension, which means you can have mutiple of them wired together.

This is a very useful piece on STEM class, students can program it to realize some of cool applications, for example a traffic light.

## Product Features

- Program Platform: Arduino, UIFlow(Blockly, Python)
- Two Lego-compatible holes
- Product Size：32.2mm x 24.2mm x 8.2mm
- Product weight：4.3g

## Include

- 1x RGB Unit
- 1x Grove Cable

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_RGB.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

*The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/Arduino).*

```arduino
/*
    Install the AdaFruit NeoPixel library first
 */
#include <Adafruit_NeoPixel.h>

#define RGB_PIN 26
#define NUMPIXELS   3

// new a object
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB+NEO_KHZ800);

int delayval = 150;// delay for half a second

// initialization
pixels.begin(); // This initializes the NeoPixel library.

// display rgb
pixels.setPixelColor(0, pixels.Color(100,0,0));//parameter = (rgb index, color)
pixels.setPixelColor(1, pixels.Color(0,100,0));
pixels.setPixelColor(2, pixels.Color(0,0,100));
pixels.show(); // This sends the updated pixel color to the hardware.
```

### 2. UIFlow

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/RGB/example_unit_rgb_01.png">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RGB Unit</td><td> </td><td>Signal Pin</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/rgb-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>