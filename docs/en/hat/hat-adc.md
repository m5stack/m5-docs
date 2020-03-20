# ADC HAT

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U069</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\adc_hat\adc_hat_01.jpg"><img src="assets\img\product_pics\hat\adc_hat\adc_hat_02.jpg"></div>

## Description

**ADC HAT**  is another type of C-HAT specifically design for M5StickC controller. Same as ADC unit, this is an ADC converter component for stickc. Packed with an ADC converter chip ADS1100, which is a fully differential, 16-bit, self-calibrating, delta-sigma A/D converter. Extremely easy to design with and configure, the ADS1100 allows you to obtain precise measurements with a minimum of effort.
<br>
The ADS1100 consists of a delta-sigma A/D converter core with adjustable gain, a clock generator, and an I2C interface.
<br>
ADS1100 itself is able to accept a differential input from -5 ~ +5 V, but we have limited the input to 0~12V by adding on the peripheral circuit design of this IC.

### Product Features

- Input: 0-12V
- Software Development Platform: Arduino, UIFlow(Blockly, Python)
- ADS1100
    - 16-bits Resolution    
    - CONTINUOUS SELF-CALIBRATION
    - SINGLE-CYCLE CONVERSION
    - PROGRAMMABLE GAIN AMPLIFIER GAIN = 1, 2, 4, OR 8
    - LOW NOISE: 4μVp-p
    - PROGRAMMABLE DATA RATE: 8SPS to 128SPS
    - INTERNAL SYSTEM CLOCK
    - I2C INTERFACE: address 0x48

## Include

- 1x ADC HAT
- 1x 2 Pin 3.96 Pitch Terminal

## Applications

-  Analog Signal Capture

## Links

-  **Datasheet** - [ADS1100](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/ads1100_en.pdf)

## Schematic

<img src="assets/img/product_pics/hat/adc_hat/adc_hat_04.jpg" width="80%" height="80%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/ADC/EasyLoader_ADC_HAT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

## Example

### UIFlow

Open http://flow.m5stack.com and Load Demo

<img src="assets/img/product_pics/hat/adc_hat/adc.png">

### Arduino IDE

To get complete code, please click [here](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/ADC)

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT ADC</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-adc-hat-ads1100';

   anchor_search(purchase_link);
   scrollFunc();

</script>