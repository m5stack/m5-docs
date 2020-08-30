# TOUCH

## getPressPoint()

**功能**

获取触摸坐标

**函数原型：**

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

**功能**

检查屏幕是否按压

**函数原型：**

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

**功能**

创建一个触摸热区

**函数原型：**

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

**功能**

判断是否在热区内

**函数原型：**

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