# CardKB

<el-tag effect="plain">SKU:U035</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_cardkb_01.webp"></div>

## Description

**CardKB** is a unit with an implemented full-featured QWERTY keyboard. Consider that you want make some cool stuff that require keyboard typing and interaction, but M5 core by itself only has 3 buttons, what can you do? introducing CardKB, the flexible and powerful keyboard unit.

CardKB also can achieve button combination (Sym+Key, Shift+Key, Fn+Key) and output richer key value. This unit communicates with M5Core through GROVE A port (I2C interface). The default Address is 0x5F.

**1. Button combination description:**

* **Single button pressed**, keyboard will output the first key value (the letter button will output in a lower case form). E.g if "Q" was pressed, keyboard will output "q" (lower cased).

* **Sym+key**, keyboard will output the second key value. E.g if "Sym" was pressed and then "Q" was pressed, the keyboard will output "{". If "Sym" was double pressed, then the keyboard will lock this function, all key pressed will output it's second key value.

* **Shift+key**, if a letter button was pressed, it'll output upper case form. E.g if "Shift" was pressed and then "Q" was pressed, the keyboard will output "Q". If "Shift" was double pressed, then the keyboard will lock this function, all letter key pressed will output it's upper case form.

* **Fn+key(custom function key combination)**, keyboard will output the third key value. You can customize what function the key presses corresponds to.

<img src="assets/img/product_pics/unit/unit_cardkb_03.webp">

## Product Features

- Full-function keyboard, multi-key combination
- GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
- Two Lego compatible holes

## Include

- 1x CardKB unit
- 1x GROVE Cable

## Applications

- Keyboard peripherals for M5Stack Core

## Specification

<table class="table-1">
    <thead>
      <tr>
         <th>Resources</th>
         <th>Parameter</th>
      </tr>
    </thead>
    <tbody>
      <tr>
         <td>Numberofkeys</td>
         <td>50</td>
      </tr>
      <tr>
         <td>RGBLED</td>
         <td>x1</td>
      </tr>
      <tr>
         <td>Communicationmethod</td>
         <td>I2C</td>
      </tr>
      <tr>
         <td>Net weight</td>
         <td>17g</td>
      </tr>
      <tr>
         <td>Gross weight</td>
         <td>18g</td>
      </tr>
      <tr>
         <td>Product Size</td>
         <td>88*54*5mm</td>
      </tr>
      <tr>
         <td>Package Size</td>
         <td>88*58*5mm</td>
      </tr>
    </tbody>
</table>

## Related Link

- **[CardKB Firmware](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/firmware_328p/CardKeyBoard)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_CardKB.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

### PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>CardKB</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>


## Protocol

- Protocol type I2C
- I2C Address: **0x5F**     

```clike
/*--------------------------------------------------------------------------------------------------*/
| KEYBOARD REG       | 0x5F
| ------------------------------------------------------------------------------------------------
| keyboard_value_reg[0]        |  R |  KEYBOARD VALUE
/*----------------------------------------------------------------------------------------------------
```

## Example

### 1. Arduino

To get the code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/CardKB)

<img src="assets/img/product_pics/unit/unit_example/CARDKB/example_unit_cardkb_01.webp">

### 2. UIFlow

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/CARDKB/example_unit_cardkb_02.webp">

<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/cardkb-mini-keyboard';

   anchor_search(purchase_link);
   scrollFunc();

</script>
