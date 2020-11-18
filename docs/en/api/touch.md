# TOUCH

>This is the M5Stack Core2 touchscreen library, and you can use the APIs in this library to get information about touch interactions. You can use the library's API to get information about touch interactions, as well as listen for touch and gesture events and specify the appropriate handlers. The actual size of the touch screen is `320x280`, which covers the remaining 40px height of the printed red circle on the panel, except for the part that covers the screen, which can be controlled by the program to simulate physical keys.

## TouchButton

>TouchButton inherits from the TouchZone class, and is used by creating an instance button instance and calling the methods contained in the instance before use.

**Constructor:**

`TouchButton(uint16_t x_, uint16_t y_, uint16_t w_, uint16_t h_, const char* name_ = "");`

**Function: Creates rectangular key area instances**.

**Get Status:**

- Setting Key Status
- `bool setState(bool);`

- button isPressed isPressed
- `bool isPressed();`

- button isPressed isReleased
- `bool isReleased();`

- button isPressed wasPressed
- `bool wasPressed();`

- button isPressed wasReleased
- `bool wasReleased();`

- button isPressed pressedFor
- `bool pressedFor(uint32_t ms);`

- button isPressed pressedFor
- `bool pressedFor(uint32_t ms, uint32_t continuous_time);`

- button isPressed releasedFor
- `bool releasedFor(uint32_t ms);`

- button isPressed wasReleasefor
- `bool wasReleasefor(uint32_t ms);`

**Get attributes:**

- `int32_t lastChange();`

- `uint8_t finger;`

- `bool changed;`

- `char name[16];`

**Event Listening:**

- Add key touch handling events and set the type of trigger event.
- `void addHandler(void (*fn)(TouchEvent&), uint16_t eventMask = TE_ALL);`

- Event Types

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

**Example**

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

## Gesture

>The Gesture class supports passing in two TouchButton regions to create touch gesture objects and gesture names. Create post-trigger handle functions with `addHandler`, which is triggered when moving from area 1 to area 2 and matching the gesture configuration.

**Constructor:**

`Gesture(TouchZone fromZone_, TouchZone toZone_, const char* name_ = "", uint16_t maxTime_ = GESTURE_MAXTIME, uint16_t minDistance_ = GESTURE_MINDIST);`

**Function: Creates rectangular key area instances**.

**Example**

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

>All touch state updates depend on `M5.update();`.

## TouchEvent Structures

>When the touch event is triggered, the handler function bound to the region using `addHandler` is automatically called, and the `TouchEvent construct` is passed in as a parameter.

```
struct TouchEvent {
	uint8_t finger;  //Touch point serial number, maximum support two points
	uint16_t type;  //Event Types
	TouchPoint from;  //Event initial touch point coordinates-->x,y
	TouchPoint to;   //End of event touch point coordinates-->x,y
	uint16_t duration; //Event Duration
	TouchButton* button; //Event Trigger Object
	Gesture* gesture; //Event Trigger Gestures
};

```

**Example**

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

## Touch

>With the initialization of `M5.begin();`, a Touch instance is generated, in which some information about the current screen's touch operations, such as coordinates, status, etc., can be retrieved.

## getPressPoint()

**Function: Get touch coordinates**

**Function prototype:**

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

**Function: Check if the screen is pressed**

**Function prototype:**

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

**Function: Create HotZone**

**Function prototype:**

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

**Function: Determine if in a hot zone**

**Function prototype:**

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