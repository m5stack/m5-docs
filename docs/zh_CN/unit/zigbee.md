# Zigbee

<el-tag effect="plain">SKU:U110</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/zigbee/zigbee_01.webp"><img src="assets/img/product_pics/unit/zigbee/zigbee_02.webp"><img src="assets/img/product_pics/unit/zigbee/zigbee_03.webp"></div>

## 描述

**Zigbee** 是M5Stack推出的一款Zigbee自组网通讯模块。模块采用CC2630F128方案，内部集成Zigbee协议栈，开放串口通信接口。集成外部天线，单节点稳定通信距离可达1km，200级router深度，通过MESH组网方式能够将你的物联网应用进行广范围的延展，兼具超低功耗与高灵敏度特性。Zigbee网络可以支持数以百计的节点，并具有增强的安全特性。可为家庭和楼宇自动化提供完整且可互操作的物联网解决方案

## 产品特性

- CC2630F128(双ARM核-32位)
- 串口通信
- 低功耗(模组工作电流:25mA，休眠5uA)
- 动态路由维护，支持200级路由深度
- 传输速度250Kbps
- 节点通信距离1km
- UART透明传输/广播/P2P

## 包含

- 1x Zigbee Unit
- 1x SMA天线

# 应用

- 智能家居
- 物联网采集节点
- 楼宇自动化

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>CC2630F128</td>
      <td>ARM Cortex-M3 32bit</td>
   </tr>
   <tr>
      <td>通讯方式</td>
      <td>UART 38400bps 8N1(default)</td>
   </tr>
   <tr>
      <td>通信距离</td>
      <td>1km (空旷地区)</td>
   </tr>
   <tr>
      <td>工作频率</td>
      <td>2.4GHZ (2405MHz-2480MHz, 步长为5MHz)</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>24g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>50g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>                 
      <td>71.5*24*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

## 管脚映射

<table>
 <tr><td>Core</td><td>TX(GPIO 17)</td><td>RX(GPIO 16)</td><td>5V</td><td>GND</td></tr>
 <tr><td>Zigbee Unit</td><td>RX</td><td>TX</td><td>VIN</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/zigbee/zigbee_sch_01.webp">

## 案例程序

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

## 相关链接

- [CC2630 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/Zigbee_CC2630/cc2630_datasheet.pdf)
- [模块使用手册](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/Zigbee_CC2630/Zigbee_Module_Guide.pdf)
- [上位机使用说明](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/Zigbee_CC2630/Zigbee_PCTool_Guide.pdf)
- [上位机调试工具](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/Zigbee_CC2630/Zigbee%20PCTool.msi)

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/Zigbee_CC2630.mp4" type="video/mp4">
</video>


```clike
DRFZigbee.h - API

//初始化模块
void begin(HardwareSerial & uart){ _uartp = &uart;}

//发送数据
void sendData(uint8_t cmd, const std::initializer_list<uint8_t> args);

int sendCMDAndWaitRevice(uint8_t cmd, byteArray &array, byteArray *reviceArray = nullptr, size_t timeout = 1000);

int sendCMDAndWaitRevice(uint8_t cmd, const std::initializer_list<uint8_t> args, byteArray *reviceArray = nullptr, size_t timeout = 1000);

int sendDataP2P(uint8_t mode,uint16_t addr,uint8_t *dataptr,size_t length);

int sendDataP2P(uint8_t mode,uint16_t addr,byteArray &array);

int sendDataP2P(uint8_t mode,uint16_t addr,const std::initializer_list<uint8_t> args);

//获取网络拓扑结构
int getNetworksTopology();

//连接模块，执行后模块将断开无线链接，进入配置模式。
int linkMoudle();

//读写模块配置参数
int readModuleparm(zigbee_arg_t *parm);

int setModuleparm(zigbee_arg_t &parm);

//完成配置后，需要执行该程序，使模块重启并恢复无线连接
int rebootModule();

//获取模块信号质量
int8_t getModuleRSSI(nodeRSSI_t *nodeRSSIPtr = nullptr);

//接收数据
int reviceData(reviceData_t *revice,uint8_t type = kP2PCustomIDMode,size_t timeout = 1000);

--------------------------------------------------------------

//模块配置参数项

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


//配置预设参数 - 完整配置预设参数可用于从节点的免设置快速入网
uint8_t     preset_pointType;
uint16_t    preset_PANID;
uint8_t     preset_channel;
uint8_t     preset_transmissionMode;
uint16_t    preset_customID;

//保留字段
uint16_t    preset_res0;

uint8_t     preset_uartBaud;
uint8_t     preset_uartBit;
uint8_t     preset_uatrtStop;
uint8_t     preset_uartCheck;

//保留字段
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
