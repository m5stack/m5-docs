# BeetleC {docsify-ignore-all}

<img src="assets\img\product_pics\hat\beetlec_hat\beetlec_hat_01.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\hat\beetlec_hat\beetlec_hat_02.jpg" width="30%" height="30%">


:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo_min.pngw">**[EasyLoader](#EasyLoader)**&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/products/beetlec-w-o-m5stickc)**


## Description

Ever wanted to build your robotic car with tiny body and smooth control? Here comes the BeatleC, features a dual-driver and 7 RGB LEDs, extreme concise design and together with M5StickC (features ESP32-Based Wi-Fi control), makes it the handiest and full-function small robotic car ever. 

BeatleC works together with  M5StickC controller. On the base, we have two DC geared motor driven by STM32F030.  The two parts are connected through the top slot on StickC. 
The body of the robotic car is inclined because the wheels we put on front and back are different sizes as you can see from the pictures. 
Besides, a power switch is placed at the front.


<img src="assets\img\product_pics\hat\beetlec_hat\beetlec_hat_03.jpg" width="30%" height="30%">

## Product Feature

- Small Robotic Car
- remote control
- Dual-Driver
- 7x RGB LEDs 
- Built-in battery: base (80ma).
- Concise design
- Smooth control


## Weight and Size

- Size: 70mm * 50mm * 25mm
- Front-wheel diameter:⌀25mm 
- Back-wheel diameter:⌀14mm
- Package weight:102g


## Applications

- Remote Motor control 
- Wireless Robotic control


## Package Includes

- 1x BeetleC bottom

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/BeetleC/EasyLoader_BeetleC.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)


## Operation Steps

### How to set up beetlec
- Connect M5StickC to the beetlec Base by Pin header.
- Press reset button to turn on M5StickC.
- Check the hardware reflection: 
  - 7 leds at Base will light up in turns for 3 times.
  - Press button A, the Front wheel will rotate forward and backward for 500ms.
- Use your phone or computer to Wi-Fi Scan, search and connect the ssid name start with "beetle",the password is "12345678", plus mac address displayed on the screen.  
- Then open a Browser and type in ```192.168.4.1/ctl```. Control page should show up after the page was loaded.

### Control Page

<img src="assets\img\product_pics\hat\beetlec_hat\beetlec_hat_04.jpg" width="40%">

- Push upwards the control bar to speed up the wheel and push down to slow down.
- There are four color bolcks at the bottom. The colorful blocks are used to turn on all RGB LEDs at the bottom to the specified color. Block with black will turn off the light.


## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/beetleC/stickC/beetleC).*


## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/BeetleC_01.mp4" type="video/mp4">
</video>

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/BeetleC_02.mp4" type="video/mp4">
</video>