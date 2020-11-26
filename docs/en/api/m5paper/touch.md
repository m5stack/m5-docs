# TOUCH-GT911

>This is the M5Stack Paper touchscreen library.

## GT911

>In the `M5.begin()` initialization, the instance `GT911 TP = GT911();` has been created and initialized. You can use the API in this instance to get the touch interaction information.

- **Functions: Initialize I2C bus**.
- `esp_err_t begin(uint8_t pin_sda, uint8_t pin_scl, uint8_t pin_int);`

- **Functions: if there is new screen touch data to be read**.
- `bool avaliable();`

- **Functions: screen refresh detection**
- `void update();`

- **Functions: Set screen rotation angle/usually set to 90°**.
- `void SetRotation(uint16_t rotate);`

- **Function: Read the X-coordinate of the touch finger**.
- `uint16_t readFingerX(uint8_t num);`

- **Function: read touch finger Y coordinate**
- `uint16_t readFingerY(uint8_t num);`

- **Function: Read the touch finger ID coordinates**.
- `uint16_t readFingerID(uint8_t num);`

- **Function: read the size of the rectangle in the area where the touch finger acts**.
- `uint16_t readFingerSize(uint8_t num);`

- **Functions: last read number of fingers touched**
- `uint8_t getFingerNum(void);`

- **Function: detect if the finger is raised**.
- `bool isFingerUp(void);`

- **Function: Clear the current touch state**
- `void flush(void);`

- **Function: Read touch finger information, return to structure instance**
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

**Example：**

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
