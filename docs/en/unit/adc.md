# ADC

<el-tag effect="plain">SKU:U013</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/adc/unit_adc_01.webp"></div>

## Description

**ADC** unit is an integrated ADS1100 device which is a fully differential, 16-bit, self-calibrating, delta-sigma A/D converter.

It communicates through the I2C interface, which means you can collect AD data through PortA on the M5Core device in order to enhance your A/D capabilities and performance.

The default I2C address is 0x48 unless changed manually.

## Product Features

- COMPLETE DATA ACQUISITION SYSTEM IN A TINY SOT23-6 PACKAGE
- 16-BITS NO MISSING CODES
- INL: 0.0125% of FSR MAX
- CONTINUOUS SELF-CALIBRATION
- SINGLE-CYCLE CONVERSION
- PROGRAMMABLE GAIN AMPLIFIER with gain range of 1, 2, 4, OR 8
- LOW NOISE: 4µVp-p
- PROGRAMMABLE DATA RATE: 8SPS to 128SPS
- INTERNAL SYSTEM CLOCK
- I2CTM INTERFACE
- POWER SUPPLY: 2.7V to 5.5V
- LOW CURRENT CONSUMPTION: 90µA
- AVAILABLE IN EIGHT DIFFERENT ADDRESSES
- Two LEGO-compatible holes


## Include

- 1x ADC unit
- 1x GROVE Cable
- 1x HT3.96 Male Socket(2 pins)

## Applications

-  ECG signal acquisition
-  Blood pressure measurement
-  Dynamometer


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
            <td> INL </td>
            <td> The full scale is 0.0125% of the range (maximum value) </td>
        </tr>
        <tr>
            <td> Gain multiple </td>
            <td> 1, 2, 4, 8 </td>
        </tr>
        <tr>
            <td> Programming rate </td>
            <td> 8SPS to 128SPS </td>
        </tr>
        <tr>
            <td> Working voltage range </td>
            <td> 2.7 V to 5.5 V </td>
        </tr>
        <tr>
            <td> Current </td>
            <td> 90µA </td>
        </tr>
        <tr>
            <td> Noise </td>
            <td> 4μVp-p </td>
        </tr>
        <tr>
            <td>Net weight</td>
            <td>4g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>19g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td>32*24*10mm</td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>67*53*12mm</td>
        </tr>
    </tbody>
</table>



## Related Link

-  **Datasheet**
   - [ADS1100](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/ADS1100_en.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_ADC.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

> 3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/unit/adc_sch.JPG">

## PinMap

<table>
 <tr><td>M5Core (GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ADC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ADC_ADS1100)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ADC/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/ADC/example_unit_adc_01.webp">

<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/adc-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
