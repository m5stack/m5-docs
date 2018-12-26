# Unit BUTTON

<img src="assets/img/product_pics/unit/M5GO_Unit_button.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_button_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Button-Unit-for-ESP32-Arduino-Micropython-Development-Kit-with-GROVE-GPIO-Port-Blockly/3226069_32921805637.html?spm=a2g1x.12024536.productList_2187621.8)**

## Description

The Unit BUTTON is a sigle-button unit that can be detected whether the button pressed or not

## Feature

-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

```arduino
#include <M5Stack.h>

int last_value = 0;
int cur_value = 0;

void setup() {
  M5.begin();// init
  Serial.begin(115200);
  pinMode(36, INPUT);
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextColor(YELLOW);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(80, 0); M5.Lcd.println("Button example");
  Serial.println("Button example: ");
  M5.Lcd.setTextColor(WHITE);
}

void loop() {
  cur_value = digitalRead(36);// read the value of BUTTON
  M5.Lcd.setCursor(0,25); M5.Lcd.print("Status: ");
  M5.Lcd.setCursor(0,45); M5.Lcd.print("Value: ");
  if(cur_value != last_value){
    M5.Lcd.fillRect(95,25,100,25,BLACK);
    M5.Lcd.fillRect(95,45,100,25,BLACK);
    if(cur_value==0){
      M5.Lcd.setCursor(95,25); M5.Lcd.print("pressed");// display the status
      M5.Lcd.setCursor(95,45); M5.Lcd.print("0");
      Serial.println("Button Status: pressed");
      Serial.println("       value:  0");
    }
    else{
      M5.Lcd.setCursor(95,25); M5.Lcd.print("released");// display the status
      M5.Lcd.setCursor(95,45); M5.Lcd.print("1");
      Serial.println("Button Status: released");
      Serial.println("       value:  1");
    }
    last_value = cur_value;
  }
  M5.update();
}
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/Arduino)for Specific example.

## Schematic

<img src="assets/img/product_pics/unit/button_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>BUTTON Unit</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>