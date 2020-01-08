# M5:bit {docsify-ignore-all}

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5bit_01.jpg" width="250" height="250"> <img src="assets/img/product_pics/unit/m5bit/unit_m5bit_02.jpg" width="250" height="250"><img src="assets/img/product_pics/unit/m5bit/unit_m5bit_03.jpg" width="250" height="250">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/m5-bit-iot-classroom-development-board)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## 描述

**M5:bit** 

是一款M5Core-Microbit串口通信转接板，

该转接板将Microbit的串口引脚连接至GROVE接口，用于与M5Core之间进行串口通信，或是其他应用.

并将其余IO接口拓展引出，使用杜邦线就能与各种各样的硬件进行连接.

**注意：**

**默认将Microbit引脚P8（TX）、P12（RX）连接至GROVE接口.** 

## 产品特性

-  串口通信
-  引脚拓展

## 套件清单

-  1x M5:bit

## 例程

- **MakeCode**

<img src="assets/img/product_pics/unit/m5bit/m5bit.png">

### Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/M5Bit/Arduino/M5BIT).*

```arduino
/*
    Connect to GRVOE C on M5Core
*/
#include <M5Stack.h>
#include <M5StackUpdater.h>

#define WIDTH 320
#define HEIGHT 240
#define BLOCK_SIZE  40
#define UNIT_WIDTH  5
#define UNIT_HEIGHT 5
#define UNIT_SIZE 25
#define GETX(i) ((i) % (5))
#define GETY(i) ((i) / (5))
int world[UNIT_SIZE];
int i;
  
void setup() {
  M5.begin();
  Wire.begin();
  if(digitalRead(BUTTON_A_PIN) == 0){
    Serial.println("Will load menu binary");
    updateFromFS(SD);
    ESP.restart();
  }
  Serial2.begin(115200, SERIAL_8N1, 16, 17);
  M5.Lcd.fillScreen(BLACK);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(35, 220);  
  M5.Lcd.println("  <       *       >");  
    for (i = 0; i < UNIT_SIZE; i++) {
    world[i] = 0;
  }
  i = UNIT_SIZE / 2;
}

void loop() {
      M5.update();
      int x = GETX(i) + 1;
      int y = GETY(i);
      if (world[i] > 0) M5.Lcd.fillRect(x * BLOCK_SIZE + 1, y * BLOCK_SIZE + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2, LIGHTGREY);
      else M5.Lcd.fillRect(x * BLOCK_SIZE + 1, y * BLOCK_SIZE + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2, BLUE);
      if (M5.BtnC.wasPressed()) {
         if (world[i] > 0) M5.Lcd.fillRect(x * BLOCK_SIZE + 1, y * BLOCK_SIZE + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2, WHITE);
         else M5.Lcd.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE, BLACK);
         ++i;
         if (i >= UNIT_SIZE) i=0;
      }
      if (M5.BtnA.wasPressed()) {
         if (world[i] > 0) M5.Lcd.fillRect(x * BLOCK_SIZE + 1, y * BLOCK_SIZE + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2, WHITE);
         else M5.Lcd.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE, BLACK);
         --i;
         if (i < 0 ) i=UNIT_SIZE -1;
      }
      if (M5.BtnB.wasPressed()) {
        if (world[i] > 0) world[i]=0;
        else world[i]=1;
        Serial2.print(world[i]);
        Serial2.print(GETX(i));
        Serial2.println(GETY(i));
      }
}
```


