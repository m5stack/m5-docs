# Application PIANO {docsify-ignore-all}

<img src="assets/img/product_pics/app/app_piano_01.png" width="30%" height="30%">


## Description

**PIANO** is a application base related to music or sound performing. Comes with two touch sensors(TS20) which communicate with M5 core via I2C protocol.

I2C address is 0x6A and 0x7A.

<img src="assets/img/product_pics/app/app_piano_02.png">

## Include

- 1x PIANO

## Package dimensions
- Package size:250mm x 55mm x 6mm
- Package weight:115g

## Example

- [Github](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/App/PIANO/Arduino/M5PIANO/M5PIANO.ino)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/PIANO/EasyLoader_APP_PIANO.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## PinMap

**Touch Sensor (TS20) & LED**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO7</td><td>GPIO6</td><td>GPIO5</td><td>GPIO26</td><td>GPIO2</td></tr>
 <tr><td>TS20</td><td>RESET</td><td>EN</td><td>SCL</td><td>SDA</td></tr>
 <tr><td>RGB LED</td><td> </td><td> </td><td> </td><td> </td><td>Signal Pin</td></tr>
</table>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-application/products/acrylic-piano-board-with-rgb-led';

   anchor_search(purchase_link);
   scrollFunc();

</script>