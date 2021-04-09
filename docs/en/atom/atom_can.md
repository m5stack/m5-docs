# ATOM CAN

<el-tag effect="plain">SKU:K057</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_can/atom_can_01.webp"><img src="assets/img/product_pics/atom_base/atom_can/atom_can_02.webp"><img src="assets/img/product_pics/atom_base/atom_can/atom_can_03.webp"></div>

## Description

**ATOM CAN** is a CAN bus communication unit that uses the CA-IS3050G transceiver solution (the built-in DC-DC isolation power chip can effectively isolate interference and prevent damage to sensitive circuits). The communication bus can support up to 110 nodes, the signal transmission rate can reach 1Mbps, and it has a variety of electrical line protection functions. It is very suitable for application scenarios such as in-vehicle transportation and security systems.


## Product Features

- Adapt to ATOM Matrix/ATOM Lite
- CAN bus multi-point communication
- Built-in isolated DC-DC
- Signal rate up to 1Mbps
- The common mode voltage range is –12V to 12V
- Protective function:
    * Signal isolation
    * Limiting
    * Overvoltage protection
    * Thermal shutdown
    * Ground loss protection (-40V～40V)

## Includes

- 1x ATOMIC CAN
- 1x 3.96-4P terminal
- 1x 120Ω terminal resistor


## Application

- CAN bus communication
- Vehicle equipment control
- Industrial field control

## Specifications

<table class="table-1">
    <thead>
    <tr>
        <th>Specifications</th>
        <th>Parameters</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>External port</td>
            <td>VH-3.96-4P</td>
        </tr>
        <tr>
            <td>CAN transceiver model</td>
            <td>CA-IS3050G</td>
        </tr>
        <tr>
            <td>Maximum rate</td>
            <td>1Mbps</td>
        </tr>
        <tr>
            <td>Number of supported nodes</td>
            <td>110</td>
        </tr>
        <tr>
            <td>Low loop delay</td>
            <td>-150ns</td>
        </tr>
        <tr>
            <td>Common mode voltage</td>
            <td>-12V ~ 12V</td>
        </tr>
        <tr>
            <td>Protection function</td>
            <td>Current limit, overvoltage, main dynamic timeout, thermal shutdown</td>
        </tr>
        <tr>
            <td>Working temperature</td>
            <td>–55°C-125°C</td>
        </tr>
        <tr>
            <td>Net weight</td>
            <td>14g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>33g</td>
        </tr>
        <tr>
            <td>Product size</td>
            <td>24*48*18mm</td>
        </tr>
        <tr>
            <td>Package size</td>
            <td>54*54*20mm</td>
        </tr>
        <tr>
            <td>Shell material</td>
            <td>Plastic (PC )</td>
        </tr>
     </tbody>
</table>

## EasyLoader

- **Windows** 
   - [ATOM_CAN_RECEIVE](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ATOM_CAN_RECEIVE.exe)
   - [ATOM_CAN_SENDER](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ATOM_CAN_SENDER.exe)

## Related Links

- **Datasheet**
   - [CA-IS3050G](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/CA-IS3050G.pdf)

### Pin mapping

<table>
 <tr><td>ATOM</td><td>GPIO22</td><td>GPIO19</td><td>5V</td><td>GND</td></tr>
 <tr><td>ATOM CAN</td><td>CAN_TX</td><td>CAN_RX</td><td>5V</td><td>GND</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atom_can/atom_can_sch.webp">

## Example

### 1. Arduino

[Use ATOM CAN for transceiver test](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_CAN)

## Video

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_CAN_VIDEO.mp4" type="video/mp4">
</video>


<script>

   var purchase_link ='https://m5stack-store.myshopify.com/products/atom-canbus-kit-ca-is3050g';

   anchor_search(purchase_link);
   scrollFunc();

</script>
