# Unit PbHUB {docsify-ignore-all}


<img src="assets/img/product_pics/unit/pbhub/pbhub_p1.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/pbhub/pbhub_p2.png" width="30%" height="30%">



:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/pb-hub)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**PbHUB**, is a expander for singel-bus GROVE PORTB(Black port on M5GO Base). 1-to-6. PortB can be used as GPIO and analog in two data lines connected to GPIO36 and GPIO26 on ESP32. Same as PaHUB, it provides a solution for mutiple device control by PORTB. With PbHUB each of the IO can be configurated to input, output and analog in as you like. Unfortunatly this Unit is unnested.
It is build with a MEGA328, with a simple driver firmware inside.



*Notice1: Please pay attention to the channel order while programing*
<br>
<img src="assets/img/product_pics/unit/pbhub/pbhub_p3.jpg" width="30%" height="30%">
<br>
*Notice2: Not all M5Units with PortB(Black) is able to extended by PbHUB. PbHUB can only apply to basic single-bus communication like digital read and write, analog read and write, which is implemented by I2C protocol(MEGA328 inside).<br>
The mechanism of PbHUB as an extension of PortB which inplement the single-bus data transfer, is using the resource on Mega328 include GPIO, AD, DA ports, to inplement the functionality of digital read and write , analog read and write. So there must be exceptions in which case a PbHUB is not a option. For example, PortB M5Unit like WEIGH (HX711 inside), whose communication protocol is applied more than just anglog read, instead with a timing sequence. In that case PbHUB can't be helpful dirving those device or sensor.*
See the below picture for timing sequence of HX711:
<br>
<img src="assets/img/product_pics/unit/pbhub/unit_pbhub_notice_01.jpg" width="60%" height="60%">



## Product Features

- Single-Bus GROVE PORTB Expander
- Two Lego-compatible holes
- 1-To-6
- Product Size：48.2mm x 24.2mm x 11mm
- Product weight：6.8g


### Kit includes
- 1x PbHUB Unit
- 1x Grove Cable

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_PbHUB.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">

## Schematic

<img src="assets/img/product_pics/unit/pbhub/pbhub_sch.jpg">

## 例程

### 1. Arduino IDE

*The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/PbHUB).*

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PbHUB/UIFlow)*

<img src="assets/img/product_pics/unit/pbhub/pbhub.png" width="50%" height="50%">

- protovol type - I2C     
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




