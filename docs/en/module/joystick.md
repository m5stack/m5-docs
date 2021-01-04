# Module JOYSTICK
<el-tag effect="plain">SKU:A007</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/module_joystick_01.webp"></div>

## Description

**JOYSTICK** is a joystick control panel compatible with the FACE kit. By pushing the joystick on the panel, you can input angle, direction and other data. Using the I2C communication protocol. It's possible to get the offset data of the joystick (X, Y coordinate) and the state of the middle button. An LED bar composed of 12 LEDs is embedded around the joystick. You can customize the luminous form of the LED light according to your needs.

JOYSTICK IIC address is 0x5E by default.

## Product Features

-  4 RGB Led
-  IIC communication
-  Simple API for programming

## Include

-  1x M5Stack JOYSTICK Module board
-  1x Joystick Bar


## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>22g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>50g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>58*54*10mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

## Related Link

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/firmware_328p/FaceJoystick328)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_joystick.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## Example

### 1. Arduino IDE

To the complete code `faces_joystick.ino`, click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Face/JOYSTICK)

### 2. UIFLOW

<img src="assets/img/product_pics/base/JOYSTICK.webp" >

- **[UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/UIFlow)**

## Function

**Control single RGB**

```arduino
/*
    Parameter:
        indexOfLED: 0 ~ 11
        r, g, b: 0 ~ 254
*/
void Led(int indexOfLED, int r, int g, int b){
  Wire.beginTransmission(FACE_JOY_ADDR);
  Wire.write(indexOfLED);
  Wire.write(r);
  Wire.write(g);
  Wire.write(b);
  Wire.endTransmission();
}
```

**Read the offset of each direction**

```arduino
void get_joystick_offset(void){
  Wire.requestFrom(FACE_JOY_ADDR, 5);
  if (Wire.available()) {

    y_data_L = Wire.read();
    y_data_H = Wire.read();
    x_data_L = Wire.read();
    x_data_H = Wire.read();

    button_data = Wire.read();// Z(0: released 1: pressed)
}
```

<img src="assets/img/product_pics/module/module_joystick_02.webp" width="60%" height="60%">

<el-divider content-position="right">Last updated: 2020-12-28</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/joystick-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>
