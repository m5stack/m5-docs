# TOUCH

> TOUGH integrates a 2-inch resistive touch screen on the front side of the product with an internal NS2009 driver chip. In the M5Tough library, we provide a series of APIs that can be used for touch interaction detection.

## Touch Class

>In the initialization of `M5.begin()`, an instance of `touch` has been created and initialized. You can use the API in this instance to obtain touch interaction information.


- **Function: Initialize the touch screen, this function will be called by default in M5.begin to initialize the touch screen**

- `void begin(bool EEPROMEnabled = true);`

- **Function: Perform screen touch calibration (calibration data will be saved to EEPROM), return to True if it has been calibrated, otherwise enter the calibration page, the user needs to touch the specified location according to the screen prompts**

- `bool calibrationTouch(TFT_eSPI *fb);`

**Routine:**

```
#include <M5Tough.h>

void setup()
{
    M5.begin(true, true, true, true);
    while (!M5.touch.calibrationTouch(&M5.Lcd));
    M5.Lcd.fillScreen(TFT_BLACK);
    M5.Lcd.print("Calibration Successfully");
}

void loop()
{

}

```

- **Function: Read touch data**
- `void read();`

- **Function: Read the X coordinate of the touch finger**
- `int GetTouchX();`

- **Function: Read Y coordinate of touch finger**
- `int GetTouchY();`

- **Function: Detect touch finger pressing**
- `bool isPressed();`

- **Function: Detection of touch finger release**
- `bool isRelease();`

- **Function: Detect the movement of the touch finger**
- `bool isMoving();`

- **Function: Wait for the touch finger to release**
- `bool WaitRelease();`

- **Function: Wait for the touch finger to be released and set the timeout period**
- `bool WaitRelease(uint64_t AutoReleseTime);`

- **Function: Read the touch point information, return a TouchPoint structure, which contains X, Y coordinate information, and implement operator overloading internally, support direct assignment and comparison of TouchPoint type structures**
- `TouchPoint getPoint();`

## TouchPoint

>By calling the getPoint method, a TouchPoint structure type data can be obtained. Its internal members and methods are as follows.

```
class TouchPoint
{
public:
    TouchPoint(int16_t x_ = -1, int16_t y_ = -1);
    bool operator==(const TouchPoint &p);
    bool operator!=(const TouchPoint &p);
    bool operator=(const TouchPoint &p);

    bool Equals(const TouchPoint &p);

    void set(int16_t x_ = -1, int16_t y_ = -1);
    bool vaild();

    int16_t x, y;
};

```

>Users can create a screen area by creating an instance of the TouchZone structure, using the built-in `contains` method to determine whether TouchPoint is contained in the area.

## TouchZone

```
typedef struct TouchZone
{
    uint16_t x;
    uint16_t y;
    uint16_t w;
    uint16_t h;
    TouchZone(): x(-1), y(-1), w(0), h(0) {}
    TouchZone(uint16_t _x, uint16_t _y, uint16_t _w, uint16_t _h): x(_x), y(_y), w(_w), h(_h)();
    bool contains(const TouchPoint &p)
    {
        if ((this->x == -1) || (this->y == -1) || (this->w == 0) || (this->h == 0))
            return false;
        if ((p.x ​​>= this->x) && (p.x <= (this->x + this->w)) &&
            (p.y >= this->y) && (p.y <= (this->y + this->h)))
        {
            return true;
        }
        return false;
    }
} TouchZone_t;

```


> When dynamically reading touch data, you need to add `void update();` to the loop to refresh the touch data.


**Routine:**

```arduino
#include <M5Tough.h>

TouchZone clearBtn(0,0,50,50);

void setup()
{
    M5.begin(true, true, true, true);
    while (!M5.touch.calibrationTouch(&M5.Lcd));
    M5.lcd.drawString("CLEAR",5,5,3);
}

void loop()
{
    M5.update();
    if(M5.touch.isPressed()){
        TouchPoint Point = M5.touch.getPoint();
        if(M5.touch.isMoving()){
            char buffer[24];
            sprintf(buffer, "X: %3d, Y: %3d", Point.x, Point.y);
            M5.Lcd.drawPixel(Point.x, Point.y ,TFT_GREEN);
            Serial.println(buffer);
        }
        if(clearBtn.contains(Point)){
            M5.lcd.fillScreen(TFT_BLACK);
            M5.lcd.drawString("CLEAR",5,5,3);
        }
    }
}



```

- For more information about Touch API, please refer to [M5Tough-Github source code](https://github.com/m5stack/M5Tough/tree/master/src)
