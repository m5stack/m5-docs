# E-Ink

?>Before using the E-Ink screen manipulation function, you need to create an instance and pass in the screen driver address.

```
#include "M5CoreInk.h"
Ink_Sprite InkPageSprite(&M5.M5Ink);
```

## creatSprite

**Syntax:**

`int creatSprite(uint16_t posX,
                 uint16_t posY,
                 uint16_t width = 200,
                 uint16_t height = 200,
                 bool copyFromMem = true);
`

**Description: create image area, configure whether to get image data buff from screen driver (default is to save true)**.

**Example:**

```arduino

if( InkPageSprite.creatSprite(0,0,200,200,true) != 0 )
{
    Serial.printf"Ink Sprite creat faild");
}

Serial.printf("Ink Sprite creat successful");

```

## clear

**Syntax:**

`void clear( int cleanFlag = CLEAR_DRAWBUFF );`

**Description: Clear the content of the image area, CLEAR_DRAWBUFF (clear the image data that has not yet been pushed) CLEAR_LASTBUFF (clear the cache area of ​​the image data refreshed last time, and refresh the screen completely when it is pushed again)**

**Example:**

```arduino

InkPageSprite.clear();

```


## deleteSprite

**Syntax:**

`int deleteSprite();`

**Description: Release the created image area**

**Example:**

```arduino

InkPageSprite.clear();

```

## pushSprite

**Syntax:**

`int pushSprite();`

**Description: Push the edited image data to the image area (after using the drawing API to operate, you need to push to refresh the screen)**

**Example:**

```arduino
InkPageSprite.drawString(10,50,"Hello World!",&AsciiFont8x16);
InkPageSprite.pushSprite();
```

## drawPix

**Syntax:**

`void drawPix(uint16_t posX,uint16_t posY,uint8_t pixBit);`

**Description: draw a single pixel(the parameter pixBit is black when 0 is passed in, and white when 1 is passed in)**

**Example:**

```arduino
InkPageSprite.drawPix(100,100,0);
InkPageSprite.pushSprite();
```


## FillRect

**Syntax:**

`void FillRect(uint16_t posX,
               uint16_t posY,
               uint16_t width,
               uint16_t height,
               uint8_t pixBit);`

**Description: draw a rectangle (the parameter pixBit is black when 0 is passed in, and white when 1 is passed in)**

**Example:**

```arduino
InkPageSprite.FillRect(0,0,100,100,0);
InkPageSprite.pushSprite();
```


## drawFullBuff

**Syntax:**

`void drawFullBuff(uint8_t* buff, bool bitMode = true);`

`    void drawBuff(uint16_t posX,
                  uint16_t posY,
                  uint16_t width,
                  uint16_t height,
                  uint8_t* imageDataptr);`


**Description: To draw the entire page, you need to pass in the complete page Buff**


## drawChar

**Syntax:**

`void drawChar(uint16_t posX,uint16_t posY,char charData,Ink_eSPI_font_t* fontPtr);`


**Description: draw characters**

**Example:**

```arduino
InkPageSprite.drawChar(35,50,'M');
InkPageSprite.pushSprite();
```

## drawString

**Syntax:**

`void drawString(uint16_t posX,uint16_t posY,const char* charData,Ink_eSPI_font_t* fontPtr = &AsciiFont8x16);`


**Description: draw string**

**Example:**

```arduino
InkPageSprite.drawString(35,50,"Hello World!");
InkPageSprite.pushSprite();
```

## getSpritePtr

**Syntax:**

**Description: Get image buff data**

`uint8_t* getSpritePtr(){ return _spriteBuff;}`

**Description: Get image width coordinate data**

`uint16_t width(){ return _width;}`

**Description: Get image height coordinate data**

`uint16_t height(){ return _height;}`

**Description: Get image X coordinate data**

`uint16_t posX(){ return _posX;}`

**Description: Get Y coordinate data of image area**

`uint16_t posY(){ return _posY;}`

