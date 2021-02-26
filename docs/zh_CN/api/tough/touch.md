# TOUCH

>TOUGH正面集成一块2英寸的电阻式触摸屏，驱动芯片为NS2009，在M5Tough库中，我们提供了一系列的API能够用于触摸交互检测，详情如下。

## Touch类

>在`M5.begin()`初始化中，已经创建了实例`touch`并进行了初始化. 你可以用该实例中的API获取触摸交互信息。


- **功能：初始化触摸屏，在M5.begin中将默认调用该函数初始化触摸屏**

- `void begin(bool EEPROMEnabled = true);`

- **功能：进行屏幕触摸校准（校准数据将保存至EEPROM），已经校准则返回True, 否则进入校准页面，用户需要根据屏幕提示依次触摸指定位置**

- `bool calibrationTouch(TFT_eSPI *fb);`

**例程：**

```clike
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

- **功能：读取触摸数据**
- `void read();`

- **功能：读取触摸手指X坐标**
- `int GetTouchX();`

- **功能：读取触摸手指Y坐标**
- `int GetTouchY();`

- **功能：检测触摸手指按压**
- `bool isPressed();`

- **功能：检测触摸手指释放**
- `bool isRelease();`

- **功能：检测触摸手指移动**
- `bool isMoving();`

- **功能：等待触摸手指释放**
- `bool WaitRelease();`

- **功能：等待触摸手指释放，并设置超时时间**
- `bool WaitRelease(uint64_t AutoReleseTime);`

- **功能：读取触摸点信息，返回一个TouchPoint结构体，其中包含X,Y坐标信息，并且内部实现运算符重载，支持对TouchPoint类型的结构进行直接赋值与比较**
- `TouchPoint getPoint();`

## TouchPoint

>通过调用getPoint方法，能够获取到一个TouchPoint结构体类型的数据。其内部包含的成员与方法如下。

```clike
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

>用户可以通过创建TouchZoon结构体实例的方式，创建了一个屏幕区域，使用内置的`contains`方法，能够判断TouchPoint是否包含在该区域中。

## TouchZone

```clike
typedef struct TouchZone
{
    uint16_t x;
    uint16_t y;
    uint16_t w;
    uint16_t h;
    TouchZone() : x(-1), y(-1), w(0), h(0) {}
    TouchZone(uint16_t _x, uint16_t _y, uint16_t _w, uint16_t _h) : x(_x), y(_y), w(_w), h(_h){};
    bool contains(const TouchPoint &p)
    {
        if ((this->x == -1) || (this->y == -1) || (this->w == 0) || (this->h == 0))
            return false;
        if ((p.x >= this->x) && (p.x <= (this->x + this->w)) &&
            (p.y >= this->y) && (p.y <= (this->y + this->h)))
        {
            return true;
        }
        return false;
    }
} TouchZone_t;

```


?>动态读取触摸数据时，需要将`void update();`添加至循环中用于刷新触摸数据。


**例程：**

```clike
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

- 更多有关Touch API内容，请参考[M5Tough-Github源码](https://github.com/m5stack/M5Tough/tree/master/src)