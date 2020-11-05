# E-Ink

?>使用E-Ink屏幕操作函数前，需要创建实例并传入屏幕驱动地址.

```
#include "M5CoreInk.h"
Ink_Sprite InkPageSprite(&M5.M5Ink);
```

## creatSprite

**函数原型：**

`int creatSprite(uint16_t posX,
                 uint16_t posY,
                 uint16_t width = 200,
                 uint16_t height = 200,
                 bool copyFromMem = true);
`

**功能：创建图像区域，配置是否从屏幕驱动获取图像数据buff(默认为保存true)**

**例程**

```arduino

if( InkPageSprite.creatSprite(0,0,200,200,true) != 0 )
{
    Serial.printf"Ink Sprite creat faild");
}

Serial.printf("Ink Sprite creat successful");

```

## clear

**函数原型：**

`void clear( int cleanFlag = CLEAR_DRAWBUFF );`

**功能：清除图像区域内容，CLEAR_DRAWBUFF(清除尚未Push的图像数据) CLEAR_LASTBUFF(清除上一次刷新的图像数据的缓存区，当再次push时将完整刷新屏幕)**


**例程**

```arduino

InkPageSprite.clear();

```


## deleteSprite

**函数原型：**

`int deleteSprite();`

**功能：释放已经创建的图像区域**

**例程**

```arduino

InkPageSprite.clear();

```

## pushSprite

**函数原型：**

`int pushSprite();`

**功能：推送已经编辑的图像数据到图像区域（使用绘图API进行操作后，都需要进行Push刷新屏幕）**

**例程**

```arduino
InkPageSprite.drawString(10,50,"Hello World!",&AsciiFont8x16);
InkPageSprite.pushSprite();
```

## drawPix

**函数原型：**

`void drawPix(uint16_t posX,uint16_t posY,uint8_t pixBit);`

**功能：绘制单个像素点 （参数pixBit传入0时为黑色，传入1时为白色）**

**例程**

```arduino
InkPageSprite.drawPix(100,100,0);
InkPageSprite.pushSprite();
```


## FillRect

**函数原型：**

`void FillRect(uint16_t posX,
               uint16_t posY,
               uint16_t width,
               uint16_t height,
               uint8_t pixBit);`

**功能：绘制矩形 （参数pixBit传入0时为黑色，传入1时为白色）**

**例程**

```arduino
InkPageSprite.FillRect(0,0,100,100,0);
InkPageSprite.pushSprite();
```


## drawFullBuff

**函数原型：**

`void drawFullBuff(uint8_t* buff, bool bitMode = true);`

`    void drawBuff(uint16_t posX,
                  uint16_t posY,
                  uint16_t width,
                  uint16_t height,
                  uint8_t* imageDataptr);`


**功能：绘制整个页面, 需要传入完整页面Buff**


## drawChar

**函数原型：**

`void drawChar(uint16_t posX,uint16_t posY,char charData,Ink_eSPI_font_t* fontPtr);`


**功能：绘制字符**

**例程**

```arduino
InkPageSprite.drawChar(35,50,'M');
InkPageSprite.pushSprite();
```

## drawString

**函数原型：**

`void drawString(uint16_t posX,uint16_t posY,const char* charData,Ink_eSPI_font_t* fontPtr = &AsciiFont8x16);`


**功能：绘制字符串**

**例程**

```arduino
InkPageSprite.drawString(35,50,"Hello World!");
InkPageSprite.pushSprite();
```

## getSpritePtr

**函数原型：**

**功能：获取图像Buff数据**

`uint8_t* getSpritePtr(){ return _spriteBuff;}`

**功能：获取图像宽度度坐标数据**

`uint16_t width(){ return _width;}`

**功能：获取图像高度坐标数据**

`uint16_t height(){ return _height;}`

**功能：获取图像X坐标数据**

`uint16_t posX(){ return _posX;}`

**功能：获取图像区域Y坐标数据**

`uint16_t posY(){ return _posY;}`

