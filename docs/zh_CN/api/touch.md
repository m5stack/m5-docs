# TOUCH

>这是M5Stack Core2触摸屏库，你可以用该库中的API获取触摸交互信息。以及监听一些触控，手势事件并指定相应的处理程序.触摸屏幕的实际尺寸为`320x280`, 除去覆盖屏幕部分，剩余的40px高度覆盖到了面板上印有红色圆圈的位置，用户可以通过程序控制来模拟实体按键。

## TouchButton类

>TouchButton继承至TouchZone类, 使用前通过创建实例按键实例，调用实例中包含的方法，进行使用

**构造函数：**

`TouchButton(uint16_t x_, uint16_t y_, uint16_t w_, uint16_t h_, const char* name_ = "");`

**功能：创建矩形按键区域实例**

**获取状态：**

- 设置按键状态
- `bool setState(bool);`

- 按键是否按下
- `bool isPressed();`

- 按键是否释放
- `bool isReleased();`

- 按键按下触发单次
- `bool wasPressed();`

- 按键释放触发单次
- `bool wasReleased();`

- 按键长按-指定时间
- `bool pressedFor(uint32_t ms);`

- 按键长按-指定时间
- `bool pressedFor(uint32_t ms, uint32_t continuous_time);`

- 按键释放-指定时间
- `bool releasedFor(uint32_t ms);`

- 按键按下-指定时间
- `bool wasReleasefor(uint32_t ms);`

**获取属性：**

- `int32_t lastChange();`

- `uint8_t finger;`

- `bool changed;`

- `char name[16];`

**事件监听：**

- 添加按键触摸处理事件,设置触发事件的类型
- `void addHandler(void (*fn)(TouchEvent&), uint16_t eventMask = TE_ALL);`

- 事件类型

```
#define NUM_EVENTS	8
#define TE_TOUCH	0x0001
#define TE_RELEASE	0x0002
#define TE_MOVE     0x0004
#define TE_GESTURE	0x0008
#define TE_TAP		0x0010
#define TE_DBLTAP	0x0020
#define TE_DRAGGED	0x0040
#define TE_PRESSED	0x0080
#define TE_ALL		0x0FFF
#define TE_BTNONLY	0x1000

```

**例程**

```arduino
  #include <M5Core2.h>

  TouchButton lt = TouchButton(0, 0, 160, 120, "left-top");
  TouchButton lb = TouchButton(0, 120, 160, 120, "left-bottom");
  TouchButton rt = TouchButton(160, 0, 160, 120, "right-top");
  TouchButton rb = TouchButton(160, 120, 160, 120, "right-bottom");

  void colorButtons(TouchEvent& e) {
    TouchButton& b = *e.button;
    M5.Lcd.fillRect(b.x, b.y, b.w, b.h, b.isPressed() ? WHITE : BLACK);
  }

  void dblTapped(TouchEvent& e) {
    Serial.println("--- TOP RIGHT BUTTON WAS DOUBLETAPPED ---");
  }

  void setup() {
    M5.begin();
    M5.Touch.addHandler(colorButtons, TE_BTNONLY + TE_TOUCH + TE_RELEASE);
    rt.addHandler(dblTapped, TE_DBLTAP);
  }

  void loop() {
    M5.update();
  }
```

## Gesture类

>Gesture类支持传入两个TouchButton区域，创建触摸手势对象与手势名称。通过`addHandler`创建手势触发后的处理函数，当由区域1移动至区域2且符合手势配置时将触发处理函数。

**构造函数：**

`Gesture(TouchZone fromZone_, TouchZone toZone_, const char* name_ = "", uint16_t maxTime_ = GESTURE_MAXTIME, uint16_t minDistance_ = GESTURE_MINDIST);`

**功能：创建矩形按键区域实例**

**例程**

```arduino
#include <M5Core2.h>

TouchZone topHalf(0,0,320,120);
TouchZone bottomHalf(0,120,320,160);
Gesture swipeDown(topHalf, bottomHalf, "Swipe Down");

void yayWeSwiped(TouchEvent& e) {
  Serial.println("--- SWIPE DOWN DETECTED ---");
}


void setup() {
  M5.begin();
  swipeDown.addHandler(yayWeSwiped);
}

void loop() {
  M5.update();
}
```

## update

>所有触摸状态的更新，都依赖于`M5.update();`

## TouchEvent结构体

>当触摸事件被触发时候，将会自动调用该区域使用`addHandler`所绑定的处理函数，同时将`TouchEvent结构体`作为参数进行传入。

```
struct TouchEvent {
	uint8_t finger;  //触摸点序号，最大支持两点
	uint16_t type;  //事件类型
	TouchPoint from;  //事件初始触摸点坐标-->x,y
	TouchPoint to;   //事件结束触摸点坐标-->x,y
	uint16_t duration; //事件持续时间
	TouchButton* button; //事件触发对象
	Gesture* gesture; //事件触发手势
};

```

**例程**

```
#include <M5Core2.h>

TouchButton lt = TouchButton(0, 0, 160, 120, "left-top");
TouchButton lb = TouchButton(0, 120, 160, 120, "left-bottom");
TouchButton rt = TouchButton(160, 0, 160, 120, "right-top");
TouchButton rb = TouchButton(160, 120, 160, 120, "right-bottom");


void eventDisplay(TouchEvent& e) {
  Serial.printf("%-12s finger%d  %-18s (%3d, %3d)", M5.Touch.eventTypeName(e), e.finger, M5.Touch.eventObjName(e),  e.from.x, e.from.y);
  if (e.type != TE_TOUCH && e.type != TE_TAP && e.type != TE_DBLTAP) {
    Serial.printf("--> (%3d, %3d)  %5d ms", e.to.x, e.to.y, e.duration);
  }
  Serial.println();
}

void setup() {
  M5.begin();
  M5.Touch.addHandler(eventDisplay);
}

void loop() {
  M5.update();
}
```

## Touch对象

>随着`M5.begin();`初始化，将会生成一个Touch实例，该实例中可以获取到当前屏幕的一些触摸操作信息，如坐标，状态等。

## getPressPoint()

**功能**

获取触摸坐标

**函数原型：**

`TouchPoint_t getPressPoint();`

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

`bool ispressed();`

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

`HotZone_t* creatHotZone(uint16_t x0, uint16_t y0, uint16_t w, uint16_t h, void (*fun)() = nullptr );`

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

`bool inHotZone(TouchPoint_t point);`

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