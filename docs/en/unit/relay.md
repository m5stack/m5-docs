# Unit relay

[Example](#example)

## DESCRIPTION

The Unit relay is a unit that allows you to control large power loads with a light-current, safe, reliable power control system. the large power loads you can safely control is up to 24 VDC or 120 VAC.
Only a low electrial level is sent to this unit, the relay will be close and the large power loads you want to control will be working.


## FEATURES
-  A single input
-  Up to 3A @ 24 VDC or 120 VAC
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## APPLICATION

-  Be perfect for large inductive loads(like DC motors electrocircuit, intelligent interpolation...)
-  Control a standard wall outlet device

## DOCUMENTS

-  **Example** - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/Relay)
- **[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Units/UNIT_RELAY.pdf)**
-  **[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Relay-Unit-DC-3A-30V-AC-3A-220V-with-Triode-Driven-GROVE-Port/3226069_32922856211.html?spm=a2g1y.12024536.productList_5885013.subject_24)**


<span id = "example"></span>

*Example*

<!-- tabs:start -->

#### ** Arduino Code**

```c++
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextFont(4);
  M5.Lcd.setTextColor(YELLOW, BLACK);
  //disable the speak noise
  dacWrite(25, 0);
  pinMode(26, OUTPUT);
}

void loop(void) {
  digitalWrite(26, HIGH);
  delay(500);
  digitalWrite(26, LOW);
  delay(500);
}
```

#### ** MicroPython Code **

Coming soom...

#### ** UIFlow **

Coming soom...

<!-- tabs:end -->

<figure>
    <img src="assets/img/product_pics/units/M5GO_Unit_relay.png" height="300" width="300">
</figure>
