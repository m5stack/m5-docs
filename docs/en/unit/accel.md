# ACCEL

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U056</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/accel/accel_01.webp"><img src="assets/img/product_pics/unit/accel/accel_02.webp"></div>

## Description

**ACCEL** is a motion sensor Unit. Integrated with ADXL 345, ACC is able to obtain 3- axis of Acceleration. ADXL 345 is a small, thin, ultralow power, 3-axis accelerometer with high resolution (13-bit) measurement at up to ±16 g. Digital output data is formatted as 16-bit twos complement and is accessible through I2C digital interface. In this Unit, we used I2C series interface. 
<br>

*What is an accelerometer?*<br>
An accelerometer is an electromechanical device that will measure acceleration forces. These forces may be static, like the constant force of gravity pulling at your feet, or they could be dynamic - caused by moving or vibrating the accelerometer.
<br>
*What are accelerometers useful for?*<br>
By measuring the amount of static acceleration due to gravity, you can find out the angle the device is tilted at with respect to the earth. By sensing the amount of dynamic acceleration, you can analyze the way the device is moving. At first, measuring tilt and acceleration doesn't seem all that exciting. However, engineers have come up with many ways to make really useful products with them.
<br><br><br>
<img src="assets/img/product_pics/unit/accel/accel_03.webp" width="30%" height="30%">

## Product Features

- Ultralow power
- Single tap/double tap detection 
- Activity/inactivity monitoring 
- Free-fall detection
- I2C digital interfaces 
- Wide temperature range


## Include

- 1x ACC unit
- 1x GROVE Cable

## Applications

- Building and structural monitoring
- Navigation
- Orientation sensing

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
            <td> Measurement range </td>
            <td> ± 16g </td>
        </tr>
        <tr>
            <td> Resolution </td>
            <td> The resolution of 10-bit fixed resolution increases with the increase of g range, up to 13 bits at ± 16 g </td>
        </tr>
        <tr>
            <td> Power consumption </td>
            <td> When VS = 2.5 V (typical), as low as 23 µA in measurement mode and 0.1 µA in standby mode </td>
        </tr>
        <tr>
            <td> I / O voltage range </td>
            <td> 1.7 V to VS </td>
        </tr>
        <tr>
            <td> Working temperature </td>
            <td> −40 ° C to + 85 ° C </td>
        </tr>
        <tr>
            <td>net weight</td>
            <td>4g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>16g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td>32*24*8mm</td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>68*52*12mm</td>
        </tr>
    </tbody>
</table>

## Related Link

- Datasheet - **[ADXL345](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/ADXL345_en.pdf)** 
  
## Schematic

<img src="assets/img/product_pics/unit/accel/accel_04.webp">

### PinMap

<table>
 <tr><td>M5Core ( GROVE A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ACC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_ACCEL.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?> 3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

To get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ACCEL_ADXL345)(Download library ADXL345 before compile)

### 2. UIFlow

- [Click here to get UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ACCEL/UIFLOW)

<img src="assets/img/product_pics/unit/accel/ACCEL_05.webp">

<script>

   var purchase_link = 'https://m5stack.com/products/3-axis-digital-accelerometer-unit-adxl345';

   anchor_search(purchase_link);
   scrollFunc();

</script>