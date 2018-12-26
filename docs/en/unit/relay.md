<<<<<<< HEAD
# Unit RELAY

<img src="assets/img/product_pics/unit/M5GO_Unit_relay.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_relay_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Relay-Unit-DC-3A-30V-AC-3A-220V-with-Triode-Driven-GROVE-Port/3226069_32922856211.html?spm=a2g1y.12024536.productList_5885013.subject_24)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

The Unit relay is a unit that allows you to control large power loads with a light-current, safe, reliable power control system. the large power loads you can safely control is up to 24 VDC or 120 VAC.
Only a low electrial level is sent to this unit, the relay will be close and the large power loads you want to control will be working.


## Feature
-  A single input
-  Up to 3A @ 24 VDC or 120 VAC
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## APPLICATION

-  Be perfect for large inductive loads(like DC motors electrocircuit, intelligent interpolation...)
-  Control a standard wall outlet device

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### 1. Arduino IDE

```arduino
// RELAY is connected to GROVE B
pinMode(26, OUTPUT);

digitalWrite(26, 0);//relay opened
delay(1000);
digitalWrite(26, 1);//relay closed
delay(1000);
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/Arduino) for Specific example.

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/RELAY/example_unit_relay_01.png">

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/UIFlow) for Specific example.

## Schematic

<img src="assets/img/product_pics/unit/relay_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RELAY Unit</td><td> </td><td>RELAY Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzg5MjA2MDQxNg==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
=======
# Unit RELAY

<img src="assets/img/product_pics/unit/M5GO_Unit_relay.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_relay_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Relay-Unit-DC-3A-30V-AC-3A-220V-with-Triode-Driven-GROVE-Port/3226069_32922856211.html?spm=a2g1y.12024536.productList_5885013.subject_24)**:clapper:**[Related Video](#Related-Video)**

## Description

The Unit relay is a unit that allows you to control large power loads with a light-current, safe, reliable power control system. the large power loads you can safely control is up to 24 VDC or 120 VAC.
Only a low electrial level is sent to this unit, the relay will be close and the large power loads you want to control will be working.


## Feature
-  A single input
-  Up to 3A @ 24 VDC or 120 VAC
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## APPLICATION

-  Be perfect for large inductive loads(like DC motors electrocircuit, intelligent interpolation...)
-  Control a standard wall outlet device

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### 1. Arduino IDE

```arduino
// RELAY is connected to GROVE B
pinMode(26, OUTPUT);

digitalWrite(26, 0);//relay opened
delay(1000);
digitalWrite(26, 1);//relay closed
delay(1000);
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/Arduino) for Specific example.

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/RELAY/example_unit_relay_01.png">

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/UIFlow) for Specific example.

## Schematic

<img src="assets/img/product_pics/unit/relay_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RELAY Unit</td><td> </td><td>RELAY Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzg5MjA2MDQxNg==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
>>>>>>> a510811d6b730443e6048277dfa387894101c476
