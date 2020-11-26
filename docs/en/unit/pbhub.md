# PbHUB

<el-tag effect="plain">SKU:U041</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/pbhub/pbhub_p1.webp"><img src="assets/img/product_pics/unit/pbhub/pbhub_p2.webp"></div>

## Description

**PbHub** Expander unit is a single-bus board which is controlled using GROVE PortB connector (The black port on the M5Go Base).
The expander unit contains 6 ports all in 1 unit. PortB can be used as GPIO and Analog in (the two data lines are connected to GPIO36 and GPIO26 on the ESP32 module).

Similar to the PaHub Unit, the PbHub provides solution for multiple devices control using a single port - PortB. With PbHub each of the IO can be configured as input and output, it has a built-in MEGA328 MCU with a simple driver firmware installed.

*Notice: Please pay attention to the order of the channels while programing the PbHub*

<br>
<img src="assets/img/product_pics/unit/pbhub/pbhub_p3.webp" width="30%" height="30%">
<br>

*Notice2: Not all M5 Units with PortB (Black) are able to be extended by PbHUB. PbHUB can only apply to basic single-bus communication like digital read and write, analog read and write, which is implemented by I2C protocol (controlled by the MEGA328 MCU).<br>

The PbHub extension mechanism that allows it to control IO using a single-bus data transfer wires is embedded inside the Mega328 with pre-programmed functionalities such as: GPIO, AD and DA to enable digital read and write and analog read and write features. In this case, the PbHub is sometimes not necessary for applications that doesn't require such specific features or require features outside of the scope of the IO pins both for analog and digital IO. For example, if some project requires PWM functionalities - the PbHub won't be useful for such application as there is no support for PWM.*

See the below picture for timing sequence of HX711:
<br>
<img src="assets/img/product_pics/unit/pbhub/unit_pbhub_notice_01.webp" width="60%" height="60%">

## Product Features

- Single-Bus GROVE PORTB Expander
- Two Lego-compatible holes
- 1-To-6

## Include

- 1x PbHUB Unit
- 1x Grove Cable

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>7g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>19g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>48*24*12mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
 </table>


## Change I2C Address

The Default I2C address of the unit is 0x40 (which can be changed by using solder resistors A0 ~ A2, the address range is 0x40~0x47).

<img src="assets/img/product_pics/unit/pbhub/pbhub_i2c_addr.webp" width="300px">

<table>
   <tr style="font-weight:bold">
      <td>A0</td>
      <td>A1</td>
      <td>A2</td>
      <td>I2C Address</td>
   </tr>
   <tr>
      <td>/</td>
      <td>/</td>
      <td>/</td>
      <td>0x40</td>
   </tr>
   <tr>
      <td>Resistors</td>
      <td>/</td>
      <td>/</td>
      <td>0x41</td>
   </tr>
   <tr>
      <td>/</td>
      <td>Resistors</td>
      <td>/</td>
      <td>0x42</td>
   </tr>
   <tr>
      <td>Resistors</td>
      <td>Resistors</td>
      <td>/</td>
      <td>0x43</td>
   </tr>
   <tr>
      <td>/</td>
      <td>/</td>
      <td>Resistors</td>
      <td>0x44</td>
   </tr>
   <tr>
      <td>Resistors</td>
      <td>/</td>
      <td>Resistors</td>
      <td>0x45</td>
   </tr>
   <tr>
      <td>/</td>
      <td>Resistors</td>
      <td>Resistors</td>
      <td>0x46</td>
   </tr>
   <tr>
      <td>Resistors</td>
      <td>Resistors</td>
      <td>Resistors</td>
      <td>0x47</td>
   </tr>
 </table>


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_PbHUB.exe"><el-button type="primary">download EasyLoader</el-button></a>

>EasyLoader is a precise and fast program writer which has a built-in functionalities related to the 4-Relay unit. The Easyloader program can burn the firmware to the main controller board by simple easy to follow steps.

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

>3. Currently EasyLoader is only suitable for Windows operating system, Please install the corresponding driver according to the device type. [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

## PinMap

**Mega328 ISP** footprint definition

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## Schematic

<img src="assets/img/product_pics/unit/pbhub/pbhub_sch.webp">

## Example

### 1. Arduino IDE

For the complete Arduino IDE code please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/PbHUB)

### 2. UIFlow

For the Complete UIFlow example code please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PbHUB/UIFlow)

<img src="assets/img/product_pics/unit/pbhub/pbhub.webp" width="50%" height="50%">

- protocol type - I2C     
- address - 0x61
- Set oneLED Color : LED address(2bytes) + RGB value(3bytes)
- Set moreLED Color : LED start address(2bytes) + LED end address(2bytes) + RGB value(3bytes)


<table>
    <tr>
        <td>state</td><td>IO0 Digital Write</td><td>IO1 Digital Write</td><td>IO0 Analog Write</td><td>IO1 Analog Write</td><td>IO0 Digital Read</td><td>IO1 Digital Read</td><td>IO0 Analog Read</td><td>reserve</td><td>Set RGB LED Num</td><td>Set oneLED Color*</td><td>Set moreLED Color*</td><td>Set Brightness</td>
    </tr>
    <tr>
        <td>r/w</td></td></td><td>w</td><td>w</td><td>w</td><td>w</td><td>r</td><td>r</td><td>r</td><td>r</td><td>w</td><td>w</td><td>w</td><td>w</td></tr>
    <tr>
        <td>data length (Byte)</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>2</td><td>/</td><td>2</td><td>5</td><td>7</td><td>1</td>
    </tr>
    <tr>
        <td>ch0 cmd</td></td><td>40</td><td>41</td><td>42</td><td>43</td><td>44</td><td>45</td><td>46</td><td>47</td><td>48</td><td>49</td><td>4A</td><td>4B</td>
    </tr>
    <tr>
        <td>ch1 cmd</td></td><td>50</td><td>51</td><td>52</td><td>53</td><td>54</td><td>55</td><td>56</td><td>57</td><td>58</td><td>59</td><td>5A</td><td>5B</td>
    </tr>
    <tr>
        <td>ch2 cmd</td></td><td>60</td><td>61</td><td>62</td><td>63</td><td>64</td><td>65</td><td>46</td><td>67</td><td>68</td><td>69</td><td>6A</td><td>6B</td>
    </tr>
    <tr>
       <td>ch3 cmd</td></td><td>70</td><td>71</td><td>72</td><td>73</td><td>74</td><td>75</td><td>76</td><td>77</td><td>78</td><td>79</td><td>7A</td><td>7B</td>
    </tr>
    <tr>
        <td>ch4 cmd</td></td><td>80</td><td>81</td><td>82</td><td>83</td><td>84</td><td>85</td><td>86</td><td>87</td><td>88</td><td>89</td><td>8A</td><td>8B</td>
    </tr>
    <tr>
       <td>ch5 cmd</td></td><td>A0</td><td>A1</td><td>A2</td><td>A3</td><td>A4</td><td>A5</td><td>A6</td><td>A7</td><td>A8</td><td>A9</td><td>AA</td><td>AB</td>
    </tr>

</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/pb-hub';


   anchor_search(purchase_link);
   scrollFunc();

</script>
