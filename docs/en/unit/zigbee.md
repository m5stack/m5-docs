# Zigbee

<el-tag effect="plain">SKU:U110</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/zigbee/zigbee_01.webp"><img src="assets/img/product_pics/unit/zigbee/zigbee_02.webp"><img src="assets/img/product_pics/unit/zigbee/zigbee_03.webp"></div>

## Description

**Zigbee** is a Zigbee ad hoc network communication module launched by M5Stack. The module adopts the CC2630F128 solution, internally integrates the Zigbee protocol stack, and opens the serial communication interface. Integrated external antenna, single node stable communication distance up to 1km, 200-level router depth, through the MESH networking mode, you can extend your IoT application in a wide range, with both ultra-low power consumption and high sensitivity. The Zigbee network can support hundreds of nodes and has enhanced security features. Can provide complete and interoperable IoT solutions for home and building automation.

## Product Features

- CC2630F128 (dual ARM core-32 bit)
- Serial communication
- Low power consumption (module working current: 25mA, sleep 5uA)
- Dynamic routing maintenance, supporting 200-level routing depth
- Transmission speed 250Kbps
- Node communication distance 1km
- UART transparent transmission/broadcasting/P2P

## Include

- 1x Zigbee Unit
- 1x SMA antenna

## Applications

- Smart Home
- IoT collection node
- Building Automation

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>CC2630F128</td>
      <td>ARM Cortex-M3 32bit</td>
   </tr>
   <tr>
      <td>communication</td>
      <td>UART 38400bps 8N1(default)</td>
   </tr>
   <tr>
      <td>Communication distance</td>
      <td>1km (Open area)</td>
   </tr>
   <tr>
      <td>working frequency</td>
      <td>2.4GHZ (2405MHz-2480MHz, step:5MHz)</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>24g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>50g</td>
   </tr>
   <tr>
      <td>Product Size</td>               
      <td>71.5*24*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

## PinMap

<table>
 <tr><td>Core</td><td>TX(GPIO 17)</td><td>RX(GPIO 16)</td><td>5V</td><td>GND</td></tr>
 <tr><td>Zigbee Unit</td><td>RX</td><td>TX</td><td>VIN</td><td>GND</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/unit/zigbee/zigbee_sch_01.webp">

## Example

<el-card class="box-card" style="margin-bottom:20px">
   <div slot="header" class="clearfix">
   <span style="font-size: 22px; font-weight: bold;">Arduino</span>
   <i class="el-icon-s-management" style="float: right;"></i>
   </div>
   <div class="box-card-item">
   <a href='hhttps://github.com/m5stack/M5Stack/tree/master/examples/Unit/Zigbee_CC2630/P2P_TEST'><el-tag>Zigbee P2P CHAT ROOM</el-tag></a>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5Stack/tree/master/examples/Unit/Zigbee_CC2630/RSSI_TEST'><el-tag>Zigbee RSSI TEST</el-tag></a>
   </div>
</el-card>

## EasyLoader

- [Zigbee P2P CHAT ROOM](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_Zigbee_P2P_CHATROOM.exe)
- Zigbee RSSI TEST
   * [Coordinator](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_Zigbee_RSSI_Coordinator.exe)
   * [End Device](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_Zigbee_RSSI_EndDevice.exe)

## Related Link

- [CC2630 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/Zigbee_CC2630/cc2630_datasheet.pdf)
- [Module User Manual](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/Zigbee_CC2630/Zigbee_Module_Guide.pdf)
- [Instructions for use of the host computer](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/Zigbee_CC2630/Zigbee_PCTool_Guide.pdf)
- [PC debugging tool](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/Zigbee_CC2630/Zigbee%20PCTool.msi)

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/Zigbee_CC2630.mp4" type="video/mp4">
</video>

```clike
DRFZigbee.h - API

//Initialize the serial port of the module
void begin(HardwareSerial & uart){ _uartp = &uart;}

//Connect the module. After execution, the module will disconnect the wireless link and enter the configuration mode.
int linkMoudle();

//Read and write module configuration parameters
int readModuleparm(zigbee_arg_t *parm);

int setModuleparm(zigbee_arg_t &parm);

//Get network topology
int getNetworksTopology();

//After completing the configuration, you need to execute the program to restart the module and restore the wireless connection
int rebootModule();

//Get module signal quality
int8_t getModuleRSSI(nodeRSSI_t *nodeRSSIPtr = nullptr);

//Receive data
int reviceData(reviceData_t *revice,uint8_t type = kP2PCustomIDMode,size_t timeout = 1000);

//send data
void sendData(uint8_t cmd, const std::initializer_list<uint8_t> args);

int sendCMDAndWaitRevice(uint8_t cmd, byteArray &array, byteArray *reviceArray = nullptr, size_t timeout = 1000);

int sendCMDAndWaitRevice(uint8_t cmd, const std::initializer_list<uint8_t> args, byteArray *reviceArray = nullptr, size_t timeout = 1000);

int sendDataP2P(uint8_t mode,uint16_t addr,uint8_t *dataptr,size_t length);

int sendDataP2P(uint8_t mode,uint16_t addr,byteArray &array);

int sendDataP2P(uint8_t mode,uint16_t addr,const std::initializer_list<uint8_t> args);


--------------------------------------------------------------

//Module configuration parameter item

DRFZigbee::zigbee_arg_t *arg = new DRFZigbee::zigbee_arg_t;

uint8_t     main_pointType;
uint16_t    main_PANID;
uint8_t     main_channel;
uint8_t     main_transmissionMode;
uint16_t    main_customID;
uint16_t    main_res0;
uint8_t     main_uartBaud;
uint8_t     main_uartBit;
uint8_t     main_uatrtStop;
uint8_t     main_uartCheck;
uint16_t    main_res1;
uint8_t     main_ATN;
uint8_t     main_mac[8];


//Configure preset parameters-complete configuration preset parameters can be used to quickly access the network from the node without settings
uint8_t     preset_pointType;
uint16_t    preset_PANID;
uint8_t     preset_channel;
uint8_t     preset_transmissionMode;
uint16_t    preset_customID;

//reserved
uint16_t    preset_res0;


uint8_t     preset_uartBaud;
uint8_t     preset_uartBit;
uint8_t     preset_uatrtStop;
uint8_t     preset_uartCheck;

//reserved
uint16_t    preset_res1;


uint8_t     preset_ATN;
uint16_t    shortAddr;
uint8_t     res3;
uint8_t     encryption;
uint8_t     password[4];

```


<script>

   var purchase_link = 'https://m5stack-store.myshopify.com/products/zigbee-unit-cc2630f128-with-antenna';
   anchor_search(purchase_link);
   scrollFunc();

</script>

