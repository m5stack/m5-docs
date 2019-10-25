# CardKB HAT{docsify-ignore-all}

<img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat_01.jpg" width="30%" height="30%"><img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat_02.jpg" width="30%" height="30%"><img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat_03.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/cardkb_hat)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**CardKB HAT** is an implementation of a full-featured QWERTY keyboard tailored as a HAT for the M5StickC. Consider that you want to make some cool stuff that require interaction through typing on a keyboard. But M5StickC itself just has 2 buttons. So, here comes the flexible and yet powerful “CardKB HAT” to solve the issue.

The CardKB HAT also offers support for several button combinations (Shift+Key, Fn+Key) adding virtually many different keys.  This comes with an RGB LED to indicate the keyboard state. IIC address is 0x5F.

**Button combination description:**

* **Single button is pressed**,once pressed button the led flashing blue.keyboard will output the first (normal) key value in its lower case. E.g. if "Q" is pressed, keyboard will output "q"(lower case).

* **Shift+Key**, After pressing the Shift key, led flashing red,if a letter button is pressed, it'll output the letter in its upper case or the second value.
 E.g. if "Shift" is pressed once, then "Q" is pressed, the keyboard will output "Q". If "Shift" is double clicked, then the keyboard will lock this function and all the letter keys pressed will give output in CAPITALS.

* **Fn+Key**(custom function key combination), led flashing green,keyboard will output the third key value, which you can customize based on the requirement.


* **Double-click Shift or fn** to lock Shift(red always on) or Fn(green always on) and output the second value or third value multiple times.

<img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat_04.jpg">

## Product Features

- Full-function keyboard with multi-key combination support
- IIC Address : 0X5F(I2C)
- Product Size：84.6mm x 54.2mm x 6.5mm

## Include

- 1x CardKB HAT

## Application

- Keyboard peripheral 


## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[CardKB HAT Firmware](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/CardKB_HAT/firmware_328p/cardKB_HAT)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/CardKB/EasyLoader_CardKB_HAT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1. EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. This can be burned to the M5 device through simple steps, and a series of function verifications can be performed.

>After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to burn the program (**For M5StickC, set the baud rate to 115200 or 750000**)

?>3. Currently EasyLoader is only available for Windows operating system,  Before installing and using the Easyloader for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## PinMap

**ATMega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">


## Example

### Arduino IDE

*To get the code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/CardKB_HAT/Arduino)。*

```arduino
#include <M5StickC.h>
#include <Wire.h>

#define CARDKB_ADDR 0x5F

void setup()
{
  M5.begin();
  Wire.begin(0, 26);
  M5.Lcd.setRotation(3);
  M5.Lcd.fillScreen(BLACK);
  M5.Lcd.setCursor(0, 0, 2 );
  M5.Lcd.setTextColor(YELLOW);

  M5.Lcd.println("IIC Address: 0x5F\n");
  M5.Lcd.println(">>");
}
void loop()
{
  Wire.requestFrom(CARDKB_ADDR, 1);
  while(Wire.available())
  {
    char c = Wire.read(); // receive a byte as characterif
    if (c != 0)
    {
      M5.Lcd.printf("%c", c);
      Serial.println(c, HEX);
      Serial.println(char(c));
    }
  }
  // delay(10);
}
```

## Related Video

- **CardKB HAT**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/CardKB_HAT.mp4" type="video/mp4">
</video>
