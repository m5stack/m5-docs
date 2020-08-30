# TOUCH

## getPressPoint()

**Description**

Get touch coordinates

**Syntax**

<mark>TouchPoint_t getPressPoint();</mark>

```arduino
#include <M5Core2.h>

void setep() {
    M5.begin();
}

void loop() {
    TouchPoint_t coordinate;
    coordinate = M5.Touch.getPressPoint();
    Serial.printf("x:%d, y:%d \r\n", coordinate.x, coordinate.y);
}
```
## ispressed()

**Description**

Check that the screen is pressed

**Syntax**

<mark>bool ispressed();</mark>

**Example**

```arduino
#include <M5Core2.h>

void setup() {
    M5.begin();
}

void loop() {
    if(M5.Touch.ispressed()) {
        Serial.println("Pressed");
    }
}
```

## HotZone_t* createHotZone()

**Description**

Create a touch hotzone

**Syntax**

<mark>HotZone_t* creatHotZone(uint16_t x0, uint16_t y0, uint16_t w, uint16_t h, void (*fun)() = nullptr );</mark>

**Example**

```arduino
#include <M5Core2.h>

void doFunc(void){
  Serial.println("executed doFunc()");
}

HotZone Btn(0, 0, 320, 240, &doFunc));



void setup(){
    M5.begin();
}
void loop() {

}

```

## inHotZone()

**Description**

Determine if it is in the hot zone

**Syntax**

<mark>bool inHotZone(TouchPoint_t point);</mark>

**Example**

```arduino
#include<M5Core2.h>

HotZone Btn(140, 100, 200, 160);

void setup() {
    M5.begin();
}

void loop() {
    TouchPoint_t pos = M5.Touch.getPressPoint();
    if(Btn.inHotZone(pos)) {
        Serial.printf("%d, %d\r\n", pos.x, pos.y);
    }

}
```