# AC Socket {docsify-ignore-all}

<img src="assets\img\product_pics\app\ac_socket\ac_socket_01.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\app\ac_socket\ac_socket_02.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\app\ac_socket\ac_socket_03.jpg" width="30%" height="30%">


## Description

This is an upgrade of a normal AC socket outlet, which empowers the user to customize the AC outlet through RS485 series. Serial communication control can include multiple AC sockets, have them serial connected in the same RS485 main bus, can be applied to a typical industrial application scenario. 
Let's break it down a little bit, start with the bottom part. 
- The whole AC socket is consist of two parts. For people who are familiar with M5 industrial product series,  would recognize the base at the bottom is BASE26. we put a 3pin inlet socket at one customizable side of BASE26. This is where we power the AC socket from. 
<br>

<img src="assets\img\product_pics\app\ac_socket\p01.jpg" width="30%" height="30%">


- The top is where goes in the AC plug, and the relay control inside would switch on and off the power in here. 

<img src="assets\img\product_pics\app\ac_socket\p02.jpg" width="30%" height="30%">

- To get more AC socket connected in series, we would use an HT3.96 terminal connectors, as you can see the orange socket in the picture. 

<br>

<img src="assets\img\product_pics\app\ac_socket\p03.jpg" width="30%" height="30%">

- The bottom part is mainly in charge of converting the AC power 220V to DC 5V to power the microprocessor STM32F030F4 and  RS485 related circult. As you can see from the picture, two parts wire connected by M-Bus socket and a pair of power wire.  A red led indication is placed on top.

<img src="assets\img\product_pics\app\ac_socket\p04.jpg" width="30%" height="30%">


## Product Features

- RS485 OUTLET
- Serial communication protocol: ModBUS-RTU
- support Mutiple device Series connection 
- STM32F030F4
- Embedded 4x M3 Nut
- Build with BASE26
- INPUT : 100-240V
- OUTPUT: 10A
- Power Status indicator


## Weight and Size

- Product size:54mm x 54mm x 61mm
- Product weight:130g


## Include

- 1x AC Socket


## Applications

-  Smart AC Socket Outlet With wire control of RS485

## Example

*Use with Arduino, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/acSocketCtl).*

## ACSocket Modbus RTU Protocol

### Description:

- 1. Communication uses RS485, 1 bit start bit + 8 bit data bit + 1 bit end bit
- 2. Baud rate 9600
- 3.Device ID defaults to AAH
- 4. Address 00H is the broadcast address, the slave does not reply

### Instruction: (hexadecimal) (Modbus RTU format)

### 1. Write coil

The host sends:

`AA 05 00 00 FF 00 95 E1` (closed coil)

`AA 05 00 00 00 00 D4 11` (disconnect coil)


<table>
   <tr style="font-weight:bold;text-align:center" >
      <td>Send content</td>
      <td>bytes</td>
      <td>Send a message</td>
      <td>Remarks</td>
   </tr>
   <tr style="text-align:center">
      <td>module address</td>
      <td>1</td>
      <td>AAH</td>
      <td>00H is the broadcast address</td>
   </tr>
   <tr style="text-align:center">
      <td>Function code</td>
      <td>1</td>
      <td>05H</td>
      <td>Write a single coil</td>
   </tr>
   <tr style="text-align:center">
      <td>start register address</td>
      <td>2</td>
      <td>0000H</td>
      <td>Coil 0 Address</td>
   </tr>
   <tr style="text-align:center">
      <td>Write data</td>
      <td>2</td>
      <td>FF00H</td>
      <td>FF00H: indicates coil closure | 0000H: indicates coil disconnection</td>
   </tr>
   <tr style="text-align:center">
      <td>CRC check</td>
      <td>2</td>
      <td>XXXXH</td>
      <td>CRC code of all previous data (CRC16)</td>
   </tr>
</table>

Slave response:

The operation successfully returns the original data:

`AA 05 00 00 FF 00 95 E1`

Operation failed to return:

`AA 85 error code CRC_L CRC_H`


### 2. Reading the coil

The host sends:

`AA 01 00 00 00 01 E4 11`

<table>
   <tr style="font-weight:bold;text-align:center" >
      <td>Send content</td>
      <td>bytes</td>
      <td>Send a message</td>
      <td>Remarks</td>
   </tr>
   <tr style="text-align:center">
      <td>module address</td>
      <td>1</td>
      <td>AAH</td>
      <td>00H is the broadcast address</td>
   </tr>
   <tr style="text-align:center">
      <td>Function code</td>
      <td>1</td>
      <td>01H</td>
      <td>read coil</td>
   </tr>
   <tr style="text-align:center">
      <td>start register address</td>
      <td>2</td>
      <td>0000H</td>
      <td>Coil 0 Address</td>
   </tr>
   <tr style="text-align:center">
      <td>Read quantity</td>
      <td>2</td>
      <td>0001H</td>
      <td> can only be 0001H</td>
   </tr>
   <tr style="text-align:center">
      <td>CRC check</td>
      <td>2</td>
      <td>XXXXH</td>
      <td>CRC code of all previous data (CRC16)</td>
   </tr>
</table>

Slave response:

The operation returns successfully:

<table>
   <tr style="font-weight:bold;text-align:center" >
      <td>Address</td>
      <td>Function code</td>
      <td>Return data length</td>
      <td>Coil Status</td>
      <td>CRC_L</td>
      <td>CRC_H</td>
   </tr>
   <tr style="text-align:center">
      <td>AA</td>
      <td>01</td>
      <td>01</td>
      <td>01</td>
      <td>B0</td>
      <td>6C</td>
   </tr>
</table>

Coil status: `01H -> coil closed ` \ `00H -> coil disconnected`

Operation failed to return: `AA 81 error code CRC_L CRC_H`


### 3. Write device address

The host sends:

`AA 41 00 00 00 12 A4 13`

<table>
   <tr style="font-weight:bold;text-align:center" >
      <td>Send content</td>
      <td>bytes</td>
      <td>Send a message</td>
      <td>Remarks</td>
   </tr>
   <tr style="text-align:center">
      <td>module address</td>
      <td>1</td>
      <td>AAH</td>
      <td>00H is the broadcast address</td>
   </tr>
   <tr style="text-align:center">
      <td>Function code</td>
      <td>1</td>
      <td>41H</td>
      <td>Set module address</td>
   </tr>
   <tr style="text-align:center">
      <td>start register address</td>
      <td>2</td>
      <td>0000H</td>
      <td>Address</td>
   </tr>
   <tr style="text-align:center">
      <td> module new address</td>
      <td>1</td>
      <td>12H</td>
      <td>1 byte</td>
   </tr>
   <tr style="text-align:center">
      <td>CRC check</td>
      <td>2</td>
      <td>XXXXH</td>
      <td>CRC code of all previous data (CRC16)</td>
   </tr>
</table>

Slave response:

The operation successfully returns the original data:

`AA 41 00 00 00 12 A4 13`

Operation failed to return:

`AA C1 error code CRC_L CRC_H`



### 4. Broadcast recovery device address

The host sends:

`00 42 00 00 A0 30 `

<table>
   <tr style="font-weight:bold;text-align:center" >
      <td>Send content</td>
      <td>bytes</td>
      <td>Send a message</td>
      <td>Remarks</td>
   </tr>
   <tr style="text-align:center">
      <td>broadcast address</td>
      <td>1</td>
      <td>00H</td>
      <td>00H is the broadcast address</td>
   </tr>
   <tr style="text-align:center">
      <td>Function code</td>
      <td>1</td>
      <td>42H</td>
      <td>Recovery address is AAH</td>
   </tr>
   <tr style="text-align:center">
      <td>start register address</td>
      <td>2</td>
      <td>0000H</td>
      <td>Address</td>
   </tr>
   <tr style="text-align:center">
      <td>CRC check</td>
      <td>2</td>
      <td>XXXXH</td>
      <td>CRC code of all previous data (CRC16)</td>
   </tr>
</table>

Slave response: `none`

<script>

   var purchase_link = 'https://m5stack.com/products/m5-ac-socket';

   anchor_search(purchase_link);
   scrollFunc();

</script>