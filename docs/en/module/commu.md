# COMMU {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_commu_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_commu_02.png" width="30%" height="30%">

***

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-COMMU-Module-Extend-RS485-TTL-CAN-I2C-Port-with-MCP2515-TJA1051-SP3485-Development-Board/3226069_32954475633.html?spm=a2g1y.12024536.productList_5885013.subject_2)** -->

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-COMMU-Module-Extend-RS485-TTL-CAN-I2C-Port-with-MCP2515-TJA1051-SP3485-Development-Board/3226069_32954475633.html?spm=a2g1y.12024536.productList_5885013.subject_2)**

## Description

<mark>COMMU</mark> is a communication interface converter which can meet most of the application design. Now, COMMU owns two I2C interfaces, one CAN interface and one RS485 interface. Simultaneously, COMMU also owns a TTL level interface. It means you just need to stack it underneath M5Core when you want to control a CAN device or RS485 device.

Be care about TTL Interface. It is a UART Interface actually by default. But you can switch it to connect with UART2 after changed those jumpers(J6, J7, J9, J10).

## Feature

-  2x I2C Interface
-  1x CAN Interface
-  1x RS485 Interface
-  1x TTL Interface

## Include

-  1x M5Stack COMMU Module

## PinMap

| *CAN*        | *ESP32 Chip*      |
| :----------: |:------------: |
| CAN_CS       | GPIO12         |
| CAN_INT      | GPIO15         |
| CAN_SCK      | GPIO18         |
| CAN_MISO     | GPIO19         |
| CAN_MOSI     | GPIO23         |


| *I2C Interface*   | *ESP32 Chip*      |
| :--------------:  |:------------: |
| IIC_SDA           | GPIO21         |
| IIC_SCL           | GPIO22         |


## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### Arduino IDE

#### CAN communication

This is a COMMU example for CAN communication.

<!-- 这是两个COMMU模块分别堆叠了M5Core之后，相互之间收发数据的例程。 -->

Copy [MCP_CAN_lib file](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/DependentLibrary/MCP_CAN_lib) to `C:\Users\<user_name>\Documents\Arduino\libraries`, then open `commu_can_transmitter.ino`, `commu_can_receiver.ino` and burn to two M5Cores.

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/CAN).*

```arduino
/*
    commu_can_transmitter.ino
*/
#include <M5Stack.h>
#include <mcp_can.h>
#include "m5_logo.h"

#define CAN0_INT 15 // Set INT to pin 2
MCP_CAN CAN0(12);   // Set CS to pin 10

// declaration
byte data[8] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07};

// initialization
M5.begin();
CAN0.begin(MCP_ANY, CAN_1000KBPS, MCP_8MHZ);
/* Change to normal mode to allow messages tobe transmitted */
CAN0.setMode(MCP_NORMAL);

// send data
CAN0.sendMsgBuf(0x100, 0, 8, data);
```

```arduino
/*
    commu_can_receiver.ino
*/
#include <M5Stack.h>
#include <mcp_can.h>
#include "m5_logo.h"

#define CAN0_INT 15 // Set INT to pin 2
MCP_CAN CAN0(12);   // Set CS to pin 10

// declaration
byte data[8] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07};

// initialization
M5.begin();
/* Initialize MCP2515 running at 16MHz with a baudrate of 500kb/s */
/* and the masks and filters disabled. */
CAN0.begin(MCP_ANY, CAN_1000KBPS, MCP_8MHZ);
/* Set operation mode to normal so theMCP2515 sends acks to received data. */
CAN0.setMode(MCP_NORMAL);
pinMode(CAN0_INT, INPUT);// Configuring pin for /INT input

// read data
CAN0.readMsgBuf(&rxId, &len, rxBuf);
```

<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_01.png" width="50%" height="50%">

#### RS485 communication

This is a COMMU example for RS485 communication.

<!-- 这是两个M5Core之间通过RS485相互收发数据的例程。 -->

Burn [example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/RS485) to two M5Cores. Then after pressed Button A, this two cores will send message to each other and receive data.

<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_02.png" width="50%" height="50%">

# Schematic

<img src="assets/img/product_pics/module/commu_sch.png">
