# TOUCH-GT911

>这是M5Stack Paper触摸屏库。

## GT911类

>在`M5.begin()`初始化中，已经创建了实例`GT911 TP = GT911();`并进行了初始化. 你可以用该实例中的API获取触摸交互信息。

- 初始化I2C总线
- `esp_err_t begin(uint8_t pin_sda, uint8_t pin_scl, uint8_t pin_int);`

- 是否有新的屏幕触摸数据待读取
- `bool avaliable();`

- 刷新屏幕检测
- `void update();`

- 设置屏幕旋转角度
- `void SetRotation(uint16_t rotate);`

- 读取触摸手指X坐标
- `uint16_t readFingerX(uint8_t num);`

- 读取触摸手指Y坐标
- `uint16_t readFingerY(uint8_t num);`

- 读取触摸手指ID坐标
- `uint16_t readFingerID(uint8_t num);`

- 读取触摸手指作用区域矩形大小
- `uint16_t readFingerSize(uint8_t num);`

- 最后一次读取触摸手指数量
- `uint8_t getFingerNum(void);`

- 检测手指是否抬起
- `bool isFingerUp(void);`

- 将当前触摸状态清空
- `void flush(void);`

- 读取触摸手指信息,返回结构体实例
- `tp_finger_t readFinger(uint8_t num);`

```
typedef struct
{
    uint16_t x;
    uint16_t y;
    uint16_t id;
    uint16_t size;
}tp_finger_t;

```

**例程：**

```arduino
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);

int point[2][2];

void setup()
{
    M5.begin();
    M5.EPD.SetRotation(90);
    M5.TP.SetRotation(90);
    M5.EPD.Clear(true);
    canvas.createCanvas(540, 960);
    canvas.setTextSize(5);
    canvas.drawString("Touch The Screen!", 20, 400);
    canvas.pushCanvas(0,0,UPDATE_MODE_DU4);
}

void loop()
{

    if(M5.TP.avaliable()){
        if(!M5.TP.isFingerUp()){
            M5.TP.update();
            canvas.fillCanvas(0);
            bool is_upadte = false;
            for(int i=0;i<2; i++){
                tp_finger_t FingerItem = M5.TP.readFinger(i);
                if((point[i][0]!=FingerItem.x)||(point[i][1]!=FingerItem.y)){
                    is_upadte = true;
                    point[i][0] = FingerItem.x;
                    point[i][1] = FingerItem.y;
                    canvas.fillRect(FingerItem.x-50, FingerItem.y-50, 100, 100, 15);
                    Serial.printf("Finger ID:%d-->X: %d*C  Y: %d  Size: %d\r\n", FingerItem.id, FingerItem.x, FingerItem.y , FingerItem.size);
                }
            }
            if(is_upadte)
            {
                canvas.pushCanvas(0,0,UPDATE_MODE_DU4);
            }
        }
    }
}

```
