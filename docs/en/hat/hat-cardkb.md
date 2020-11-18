# CardKB HAT

<el-tag effect="plain">SKU:U077</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat_01.webp"><img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat_02.webp"></div>

## Description

**CardKB HAT** is an implementation of a full-featured QWERTY keyboard tailored as a HAT for the M5StickC. Consider that you want to make some cool stuff that require interaction through typing on a keyboard. But M5StickC itself just has 2 buttons. So, here comes the flexible and yet powerful “CardKB HAT” to solve the issue.

The CardKB HAT also offers support for several button combinations (Shift+Key, Fn+Key) adding virtually many different keys.  This comes with an RGB LED to indicate the keyboard state. IIC address is 0x5F.

**Button combination description:**

* **Single button is pressed**,once pressed button the led flashing blue.keyboard will output the first (normal) key value in its lower case. E.g. if "Q" is pressed, keyboard will output "q"(lower case).

* **Shift+Key**, After pressing the Shift key, led flashing red,if a letter button is pressed, it'll output the letter in its upper case or the second value.
 E.g. if "Shift" is pressed once, then "Q" is pressed, the keyboard will output "Q". If "Shift" is double clicked, then the keyboard will lock this function and all the letter keys pressed will give output in CAPITALS.

* **Fn+Key**(custom function key combination), led flashing green,keyboard will output the third key value, which you can customize based on the requirement.

* **Double-click Shift or fn** to lock Shift(red always on) or Fn(green always on) and output the second value or third value multiple times.

<img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat_04.webp">

## Product Features

- Full-function keyboard with multi-key combination support
- IIC Address : 0X5F(I2C)


## Include

- 1x CardKB HAT

## Applications

- Keyboard peripheral 

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>21g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>84.6*54.26.5mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>115*96*40mm</td>
   </tr>
 </table>

## Related Link

- **[CardKB HAT Firmware](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/CardKB_HAT/firmware_328p/cardKB_HAT)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/CardKB/EasyLoader_CardKB_HAT.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1. EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. This can be burned to the M5 device through simple steps, and a series of function verifications can be performed.

>After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to burn the program (**For M5StickC, set the baud rate to 115200 or 750000**)

?>3. Currently EasyLoader is only available for Windows operating system,  Before installing and using the Easyloader for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Pin Map

**ATMega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## Example

### 1. Arduino IDE

To get the code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/CardKB_HAT)

### 2. UIFLOW

<img src="assets/img/product_pics/hat/cardkb_hat/cardkb_hat.webp" width="30%" height="30%">

To get the uiflow code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/CardKB_HAT/UIFLOW)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/cardkb_hat';

   anchor_search(purchase_link);
   scrollFunc();

</script>