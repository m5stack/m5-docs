# V-function

?>This tutorial applies to M5StickV/UnitV

<el-steps :active="5" simple>
  <el-step onclick="page_move('description')" title="Description" icon="el-icon-guide"></el-step>
  <el-step onclick="page_move('burn-firmware')" title="Burn firmware" icon="el-icon-download"></el-step>
  <el-step onclick="page_move('uiflow-usage')" title="UIFlow Usage" icon="el-icon-monitor"></el-step>
  <el-step onclick="page_move('example')" title="Example" icon="el-icon-s-promotion"></el-step>
  <el-step onclick="page_move('protocol')" title="Protocol" icon="el-icon-tickets"></el-step>
</el-steps>


## Description

V-Function is a series of **visual recognition** functional firmware developed by the M5Stack team for V series devices. Based on different functional firmware (target trace, motion detection, etc.), users can quickly build visual recognition functions. This tutorial will show you how to burn firmware into your device and call it through UIFlow graphical programming.

<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>Firmware List</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('motion-detect')">Motion detect</el-tag>
        <el-tag onclick="page_move('target-trace')">Target Trace</el-tag>
        <el-tag onclick="page_move('color-trace')">Color Trace</el-tag>
    </div>
</el-card>


## Burn firmware

>Please download the corresponding M5Burner firmware burning tool according to the operating system you are using. Unzip and open the application.

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>


<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.webp">

?>Note: After the installation of MacOS users, please put the application into the Application folder, as shown below.

><img src="/image/base/application.webp" width="70%"> 

?>Note: For Linux users, please switch to the decompressed file path and run `./M5Burner` in the terminal to run the application.


>Select the device as M5StickV/UnitV in the device bar on the left, and select the corresponding function firmware according to the usage requirements to download. Connect the device to the computer through the data cable, select the corresponding port, and click Burn to start burning.

<img src="assets\img\quick_start\v_function\v_function01.webp" width="80%"> 

> When the burning log prompts `Burn Successfully`, it means that the firmware has been burned.

<img src="assets\img\quick_start\v_function\v_function02.webp" width="80%"> 


## UIFlow Usage

### Usage

> The M5StickV/UnitV with the function firmware burned will be used as a slave device in the form of Unit, so users need to use other M5 host devices to interact with it. For the basic usage and operation of UIFlow of other master products, please visit the corresponding product documentation page to obtain it.

>Visit https://flow.m5stack.com/ to enter UIFlow. Click the Unit add button in the function panel on the right and select UnitV extension to add it. When adding, please configure according to the actual port used. Click ok to add.

<img src="assets\img\quick_start\v_function\v_function03.webp" width="100%"> 

>After the addition is complete, you can find the included function block in the Unit option in the function block menu. Drag and drop it to the programming area on the right to use it. For more details, please see the case program below.

<img src="assets\img\quick_start\v_function\v_function04.webp" width="80%"> 

### Precautions

>After using the slave device (M5StickV/UnitV) to connect to the main control, if there is a situation where the main control end cannot obtain data, please restart M5StickV/UnitV. Wait for the firmware to start successfully and try to connect again.

## Example


### Motion detect

>Detect the change of the picture on the view, and judge whether there is motion of the target in the detection area.

<img src="assets\img\quick_start\v_function\motion_detect.webp" width="50%"> 

>Program block introduction

- `init`
   + initialization

- `Set detect threshold`
   + Set the change rate threshold: When the pixel whose change is less than this value is not considered to have changed, its change is not included in the total rate of difference.

- `Set detect mode`
   + dynamic： Dynamic detection mode, after configuration will continuous to take pictures, compare the changes between the two frames before and after
   + static：In static detection mode, a reference picture will be taken and saved after execution, and subsequent pictures will be continuously compared with this picture. If you need to take a new reference picture, you need to switch back to the motion detection mode first, and then perform the static detection mode setting again.

- `Get rate of difference`
   + rate of difference : Detect the change amount of changed pixels between two frames before and after comparison. Assuming that 2 pixels have changed, pixel A has changed by 27, and pixel B has changed by 10, then the change value is 27+10=37. The sum of the differences of the R.G.B components of the two pixels is the amount of change.

- `Get max difference`
   + max difference: the amount of change in the pixel that changes most drastically. 

>Program case: Enable the dynamic detection mode, and determine whether there is movement of the target in the screen by reading the maximum change rate value of the screen. When the change rate value is greater than the expected value, "Moved" is displayed, otherwise "Not Move" is displayed. The screen displays the current maximum rate of change value.

<img src="assets\img\quick_start\v_function\motion_detect_example_01.webp" width="100%">

<img src="assets\img\quick_start\v_function\motion_detect_example_02.webp" width="100%">



### Target Trace

>Set the tracking target to obtain the position information of the target target in the screen in real time.

<img src="assets\img\quick_start\v_function\target_detect.webp" width="50%">

>Program block introduction

- `init`
   + initialization

- `Set trace area`
   + Set the frame selection target, the parameter is the position of the current target on the image (select as far as possible the target with significant color characteristics)

- `Get trace area coordinate`
   + Read the coordinates of the image on which the marquee selection target is located, the return value is a list, which contains the coordinates of the upper left corner of the marquee x, y and the width and height of the marquee

- `Get trace area center coordinate`
   + Read the center coordinates of the image where the frame selection target is located, and the return value is in the form of a list, which contains the center coordinates x, y of the frame selection.

>Program case: Set the frame selection target by pressing button A, read the target coordinate value, used to control the movement of rectangular elements on the screen, and simulate the display of the target's trajectory

<img src="assets\img\quick_start\v_function\target_detect_example_01.webp" width="100%">

<img src="assets\img\quick_start\v_function\target_detect_example_02.webp" width="100%">


### Color Trace

>Set the LAB color threshold, track the target that meets the threshold in the screen, and obtain the position information of the target object in the screen in real time.

<img src="assets\img\quick_start\v_function\color_trace.webp" width="50%">

>Program block introduction

- `init`
   + initialization

- `Set color by L-min L-max A-min A-max B-min B-max`
   + Set the LAB threshold for tracking

- `Get area pixel number`
   + Read the number of pixels that meet the LAB threshold in the frame target

- `Get area x coordinate`
   + Read the coordinate x of the upper left corner of the frame target

- `Get area Y coordinate`
   + Read the coordinate y of the upper left corner of the target
   
- `Get area width`
   + Read the width of the target object

- `Get area height`
   + Read the height of the target object


#### Set LAB threshold

> Click the button below to download the LAB color picking tool. (Currently only supports windows system)

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/LAB-Color-Tool.exe"><el-button type="primary">下载LAB取色工具</el-button></a>

>Use a mobile phone or other device to take a sample picture, double-click to open the application, and click `open`-->`image` to import the image.

<img src="assets\img\quick_start\v_function\lab_color_tool_01.webp" width="50%">


> Click the object you want to use for color recognition, record the LAB value generated below, and configure it for use in UIFlow. Supplement: Drag the interval bar of the LAB value, which can be used to customize the LAB value.


<img src="assets\img\quick_start\v_function\lab_color_tool_02.webp" width="50%">


>Program case: Set the LAB threshold for recognition, realize the color tracking effect, and obtain the coordinate data of the tracked object in the screen, and the number of pixels that meet the threshold.

<img src="assets\img\quick_start\v_function\color_trace_example_01.webp" width="100%">

<img src="assets\img\quick_start\v_function\color_trace_example_02.webp" width="100%">


## Protocol

>Click the button below to download the Protocol format table. The user can use it to analyze the data format and connect the V-function to other programming platforms.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/V-Function%20Data%20Packet%20%20format.xlsx"><el-button type="primary">Download Protocol table</el-button></a>
