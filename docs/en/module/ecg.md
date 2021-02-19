# ECG Module13.2 (AD8232)

<el-tag effect="plain">SKU:M034</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/ecg/ecg_01.webp"></div>

## Description

**ECG** is a heart rate monitor (electrocardiogram) unit，it can detect the heart rate and output a cardiogram signal. Electrocardiogram (ECG) is a technology that uses an electrocardiograph to record the changes in the electrical activity of the heart during each cardiac cycle.

At the signal acquisition end, this ECG module integrates the AD8232 single-lead heart rate monitoring at the front end, the collected ECG signal is processed by the AD8603 low-pass filter, and the 10bit-ADC (AD7476) performs analog/digital signal input to STM32 (built-in heart rate statistics) Algorithm) for signal analysis.

Finally, the processing results are output in the form of serial communication to facilitate the acquisition and display of the main control device. In terms of signal output, it adopts front-end/digital full isolation design to enhance equipment stability and safety.

>Caution: This product only allows the use of `5V` power input. Please strictly abide by the power input standard when using this product to avoid damage to the equipment or injury.

<img src="assets/img/product_pics/module/ecg/ecg_02.webp" width="300px">

## Product Features

- ADI front end integration (high signal gain G=100, with DC blocking capability)
- Serial Data input
- Heart Rate Statistics monitoring
- Front end/digital fully isolated design
- Ultra Precision Op Amp

## Include

- 1x ECG Module
- 3x ECG electrodes
- 6x Adhesive Pads

## Applications

- Bioelectric signal acquisition
- Portable ECG
- Exercise Tracker

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Commuincation Method</td>
      <td>UART 115200bps</td>
   </tr>
   <tr>
      <td>AD8232</td>
      <td>High signal gain G=100 | With DC blocking capability | Common mode rejection ratio: 80 dB (DC to 60 Hz)</td>
   </tr>
   <tr>
      <td>AD7476</td>
      <td>10bit-ADC | SPI Interface | Fast throughput rate: 1 MSPS | vref 2.8v</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>18g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>101g</td>
   </tr>
   <tr>
      <td>Product Dimension</td>
      <td>54*54*13.2mm</td>
   </tr>
   <tr>
      <td>Package Dimension</td>
      <td>105*65*40mm</td>
   </tr>
 </table>


 ## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_ECG.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_ECG_Module.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/ECG.mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Statistic heart rate, display ECG curve</p>
        </div>
    </div>
</div>


## Related Link

- **Datasheet**
   - [AD8232](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/AD8232_datasheet_en.pdf)
   - [AD8603](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/AD8603_datasheet_en.pdf)
   - [AD7476](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/AD7476_datasheet_en.pdf)

- **Tool**
   - [RawDisplay-PC](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/RawDisplay.zip)
   - [UART Pass Through Firmware](https://github.com/m5stack/M5Stack/tree/master/examples/Advanced/Serial2)

>When using the PC-side heart rate reading tool, the device needs to burn the serial port transparent transmission firmware(Before uploading, please change the serial port initialization pin to the actually connected pin) and forward the data to the PC.

## Schematic

<img src = "assets/img/product_pics/module/ecg/ecg_sch.webp">

## Example

### 1. Arduino

[Download Arduino Code](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/ECG)

## Pin Map

<table>
 <tr><td>M5Stack</td><td>TX/G13</td><td>RX/G5</td><td>5V</td><td>GND</td></tr>
 <tr><td>ECG</td><td>RX</td><td>TX</td><td>VIN</td><td>GND</td></tr>
</table>

<el-divider content-position="right">Last updated: 2020-12-24</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/products/ecg-module13-2-ad8232-with-cables-and-pads';

   anchor_search(purchase_link);
   scrollFunc();

</script>
