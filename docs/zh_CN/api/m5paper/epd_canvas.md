## EPD Driver

>M5PAPER搭载了一块分辨率为540*960 @4.7"的电子墨水屏，支持16级灰度显示. 在`M5.begin()`初始化中，已经创建了实例`M5EPD_Driver EPD = M5EPD_Driver();`并进行了初始化.通过下面的屏幕驱动,你能够将内容绘制的数据推送至屏幕.


- `m5epd_err_t begin(int8_t sck, int8_t mosi, int8_t miso, int8_t cs, int8_t busy, int8_t rst = -1);`

- `m5epd_err_t Clear(bool init = false);`

- `m5epd_err_t WriteFullGram4bpp(const uint8_t *gram);`

- `m5epd_err_t WritePartGram4bpp(uint16_t x, uint16_t y, uint16_t w, uint16_t h, const uint8_t *gram);`

- `m5epd_err_t FillPartGram4bpp(uint16_t x, uint16_t y, uint16_t w, uint16_t h, uint16_t data);`

- `m5epd_err_t SetRotation(uint16_t rotate = IT8951_ROTATE_0);`

- `m5epd_err_t SetArea(uint16_t x, uint16_t y, uint16_t w, uint16_t h);`

- `m5epd_err_t UpdateFull(m5epd_update_mode_t mode);`

- `m5epd_err_t UpdateArea(uint16_t x, uint16_t y, uint16_t w, uint16_t h, m5epd_update_mode_t mode);`

- `uint16_t UpdateCount(void);`

- `uint8_t GetRotate(void) {return _rotate;};`

- `uint8_t GetDirection(void) {return _direction;};`

- `void ResetUpdateCount(void);`

- `m5epd_err_t CheckAFSR(void);`

- `SPIClass* GetSPI(void) {return _epd_spi;}`

- `void SetColorReverse(bool is_reverse);`

## Canvas

>该库使用`Canvas`类进行图案绘制，该类中提供了多种绘图API(其中包含绘制字符串，矩形，三角形，圆形，图片数据等). 使用前需要创建canvas实例并传入屏幕驱动，如下方代码所示。

```
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);
```

## 创建/删除Canvas

>在开始绘图前，我们需要使用Canvas实例创建一个绘制区域

- **功能：创建Canvas**
- `void *createCanvas(int16_t width, int16_t height, uint8_t frames = 1) { return TFT_eSprite::createSprite(width, height, frames); };`

- **功能：删除Canvas**
- `void deleteCanvas(void) { TFT_eSprite::deleteSprite(); }`

```
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);

M5.begin();
M5.EPD.SetRotation(90);
canvas.createCanvas(400, 300);

```

## 推送Canvas

>在使用绘图API完成内容绘制后，我们需要使用`push`API将绘制区域推送到屏幕。

// Re-implement functions

- `void *frameBuffer(int8_t f = 1);`

- `void pushCanvas(int32_t x, int32_t y, m5epd_update_mode_t mode);`

- `void pushCanvas(m5epd_update_mode_t mode);`

- `void pushToCanvas(int32_t x, int32_t y, M5EPD_Canvas* canvas);`

**例程：**

```
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);

void setup()
{
    M5.begin();
    M5.EPD.SetRotation(90);
    M5.EPD.Clear(true);
    canvas.createCanvas(540, 960);
    canvas.setTextSize(3);
    canvas.drawString("Hello World!", 50, 350);
    canvas.drawString("Hello M5Stack!", 45, 450);
    canvas.pushCanvas(0,0,UPDATE_MODE_DU4);
}

void loop()
{

}

```

## 刷新模式

>在使用`pushCanvas`时，我们需要传入一个刷新模式参数，在该库中的`m5epd_update_mode_t`已经枚举了几种不同的刷新模式，下面为你说明它们分别有什么样的特点。

```
typedef enum                  //             Typical
{                             //   Ghosting  Update Time  Usage
    UPDATE_MODE_INIT    = 0,  // * N/A       2000ms       Display initialization, 
    UPDATE_MODE_DU      = 1,  //   Low       260ms        Monochrome menu, text input, and touch screen input 1bit黑白，存在残影
    UPDATE_MODE_GC16    = 2,  // * Very Low  450ms        High quality images 
    UPDATE_MODE_GL16    = 3,  // * Medium    450ms        Text with white background 
    UPDATE_MODE_GLR16   = 4,  //   Low       450ms        Text with white background
    UPDATE_MODE_GLD16   = 5,  //   Low       450ms        Text and graphics with white background 
    UPDATE_MODE_DU4     = 6,  // * Medium    120ms        Fast page flipping at reduced contrast 1bit黑白 稍微比DU快一点，残影相对DU较大
    UPDATE_MODE_A2      = 7,  //   Medium    290ms        Anti-aliased text in menus / touch and screen input  2bit灰度，残影
    UPDATE_MODE_NONE    = 8     上传至8951缓存区 不刷新。 
} m5epd_update_mode_t;        // The ones marked with * are more commonly used



    UPDATE_MODE_GC16    = 2,  // * Very Low  450ms        High quality images 先黑闪后刷新
    UPDATE_MODE_GL16    = 3,  // * Medium    450ms        Text with white background 不黑闪
    UPDATE_MODE_GLR16   = 4,  //   Low       450ms        Text with white background 不黑闪
    UPDATE_MODE_GLD16   = 5,  //   Low       450ms        Text and graphics with white background 不黑闪

    刷新质量较好

```





- `uint16_t readPixel(int32_t x, int32_t y);`

- `void pushImage(int32_t x, int32_t y, int32_t w, int32_t h, const uint8_t *data);`

- `void pushImage(int32_t x, int32_t y, int32_t w, int32_t h, uint8_t transp, const uint8_t *data);`



- `void fillCanvas(uint32_t color);`


- `void drawPixel(int32_t x, int32_t y, uint32_t color);`


- `uint16_t alphaBlend16(uint8_t alpha, uint8_t fgc, uint8_t bgc);`


- `void drawFreetypeBitmap(int32_t cx, int32_t cy, uint16_t bw, uint16_t bh, uint8_t *bitmap);`



**例程：**










- `void setDriver(M5EPD_Driver *driver);`

- `void qrcode(const char *string, uint16_t x = 50, uint16_t y = 10, uint16_t width = 220, uint8_t version = 6);`

- `void qrcode(const String &string, uint16_t x = 50, uint16_t y = 10, uint16_t width = 220, uint8_t version = 6);`

- `void fillCenterSquare(int32_t cx, int32_t cy, uint16_t w, uint8_t color);`

- `void drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint8_t thickness, uint8_t color);`

- `void drawFastVLine(int32_t x, int32_t y, int32_t h, uint8_t thickness, uint8_t color);`

- `void drawFastHLine(int32_t x, int32_t y, int32_t w, uint8_t thickness, uint8_t color);`

- `void fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);`

- `uint32_t getBufferSize(void) {return _buffer_size;}`

- `void ReverseColor(void);`

- `void ReversePartColor(int32_t x, int32_t y, int32_t w, int32_t h);`

- `void operator=(const M5EPD_Canvas &src);`




## JPG/BMP/PNG

- **功能：使用Bmp文件数据绘制图像**
- `bool drawBmpFile(fs::FS &fs, const char *path, uint16_t x, uint16_t y);
- `bool drawBmpFile(fs::FS &fs, String path, uint16_t x, uint16_t y);`


- **功能：使用Jpg文件数据绘制图像**
- `bool drawJpgFile(fs::FS &fs, const char *path, uint16_t x = 0,
                uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                jpeg_div_t scale = JPEG_DIV_NONE);`
    
- `bool drawJpgFile(fs::FS &fs, String path, uint16_t x = 0,
                uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                jpeg_div_t scale = JPEG_DIV_NONE);`

- **功能：使用Png文件数据绘制图像**
- `bool drawPngFile(fs::FS &fs, const char *path, uint16_t x = 0, uint16_t y = 0,
                uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                double scale = 1.0, uint8_t alphaThreshold = 127);`
                
- `bool drawPngFile(fs::FS &fs, String path, uint16_t x = 0, uint16_t y = 0,
                uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                double scale = 1.0, uint8_t alphaThreshold = 127);`

- **功能：使用内存Jpg数据绘制图像**
- `bool drawJpg(const uint8_t *jpg_data, size_t jpg_len, uint16_t x = 0,
                uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                jpeg_div_t scale = JPEG_DIV_NONE);`

- **功能：使用Jpg的Url/网络资源数据绘制图像**
- `bool drawJpgUrl(String url, uint16_t x = 0,
                        uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                        uint16_t offX = 0, uint16_t offY = 0, jpeg_div_t scale = JPEG_DIV_NONE);`


- **功能：使用Png的Url/网络资源数据绘制图像**
- `bool drawPngUrl(const char *url, uint16_t x = 0, uint16_t y = 0,
            uint16_t maxWidth = 0, uint16_t maxHeight = 0,
            uint16_t offX = 0, uint16_t offY = 0,
            double scale = 1.0, uint8_t alphaThreshold = 127);`







- `uint32_t getExceedOffset(void) {return TFT_eSPI::getExceedOffset();}`

- `void setTextArea(uint16_t x, uint16_t y, uint16_t w, uint16_t h) {TFT_eSprite::setTextArea(x,y,w,h);}`

- `size_t write(uint8_t utf8){return TFT_eSprite::write(utf8);}`

- `void *createCanvas(int16_t width, int16_t height, uint8_t frames = 1) { return TFT_eSprite::createSprite(width, height, frames); };`

- `void deleteCanvas(void) { TFT_eSprite::deleteSprite(); }`




- `void setPivot(int16_t x, int16_t y) { TFT_eSprite::setPivot(x, y); }`

- `int16_t getPivotX(void) { return _xpivot; }`

- `int16_t getPivotY(void) { return _ypivot; }`

- `int16_t width(void) { return _dwidth; }`

- `int16_t height(void) { return _dheight; }`

- `void setCursor(int16_t x, int16_t y) { TFT_eSPI::setCursor(x, y); }`

- `void setCursor(int16_t x, int16_t y, uint8_t font) { TFT_eSPI::setCursor(x, y, font); }`

- `int16_t getCursorX(void) { return TFT_eSPI::getCursorX(); }`

- `int16_t getCursorY(void) { return TFT_eSPI::getCursorY(); }`

- `uint16_t fontsLoaded(void) { return TFT_eSPI::fontsLoaded(); }`









- `int16_t textWidth(const char *string, uint8_t font) {return TFT_eSPI::textWidth(string, font);}`

- `int16_t textWidth(const char *string) {return TFT_eSPI::textWidth(string);}`

- `int16_t textWidth(const String& string, uint8_t font) {return TFT_eSPI::textWidth(string, font);}`

- `int16_t textWidth(const String& string) {return TFT_eSPI::textWidth(string);}`




## Drawing

    // Parent functions - drawing

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color) { TFT_eSPI::drawCircle(x0, y0, r, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawCircleHelper(int32_t x0, int32_t y0, int32_t r, uint8_t cornername, uint32_t color) { TFT_eSPI::drawCircleHelper(x0, y0, r, cornername, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color) { TFT_eSPI::fillCircle(x0, y0, r, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void fillCircleHelper(int32_t x0, int32_t y0, int32_t r, uint8_t cornername, int32_t delta, uint32_t color) { TFT_eSPI::fillCircleHelper(x0, y0, r, cornername, delta, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void setWindow(int32_t x0, int32_t y0, int32_t x1, int32_t y1) { TFT_eSprite::setWindow(x0, y0, x1, y1); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void pushColor(uint32_t color) { TFT_eSprite::pushColor(color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void pushColor(uint32_t color, uint16_t len) { TFT_eSprite::pushColor(color, len); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void writeColor(uint16_t color) { TFT_eSprite::writeColor(color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color) { TFT_eSprite::drawLine(x0, y0, x1, y1, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color) { TFT_eSprite::drawFastVLine(x, y, h, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color) { TFT_eSprite::drawFastHLine(x, y, w, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size) { TFT_eSprite::drawChar(x, y, c, color, bg, size); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawChar(uint16_t uniCode, int32_t x, int32_t y) { return TFT_eSprite::drawChar(uniCode, x, y); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawChar(uint16_t uniCode, int32_t x, int32_t y, uint8_t font) { return TFT_eSprite::drawChar(uniCode, x, y, font); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawGlyph(uint16_t code) { TFT_eSprite::drawGlyph(code); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void printToSprite(String string) { TFT_eSprite::printToSprite(string); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void printToSprite(char *cbuffer, uint16_t len) { TFT_eSprite::printToSprite(cbuffer, len); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t printToSprite(int16_t x, int16_t y, uint16_t index) { return TFT_eSprite::printToSprite(x, y, index); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color) { TFT_eSPI::drawEllipse(x0, y0, rx, ry, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color) { TFT_eSPI::fillEllipse(x0, y0, rx, ry, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color) { TFT_eSPI::drawRect(x, y, w, h, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawRoundRect(int32_t x0, int32_t y0, int32_t w, int32_t h, int32_t radius, uint32_t color) { TFT_eSPI::drawRoundRect(x0, y0, w, h, radius, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void fillRoundRect(int32_t x0, int32_t y0, int32_t w, int32_t h, int32_t radius, uint32_t color) { TFT_eSPI::fillRoundRect(x0, y0, w, h, radius, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color) { TFT_eSPI::drawTriangle(x0, y0, x1, y1, x2, y2, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void fillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color) { TFT_eSPI::fillTriangle(x0, y0, x1, y1, x2, y2, color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void setTextColor(uint16_t color) { TFT_eSPI::setTextColor(color); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void setTextColor(uint16_t fgcolor, uint16_t bgcolor) { TFT_eSPI::setTextColor(fgcolor, bgcolor); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void setTextSize(uint8_t size) { TFT_eSPI::setTextSize(size); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void setTextWrap(boolean wrapX, boolean wrapY = false) { TFT_eSPI::setTextWrap(wrapX, wrapY); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void setTextDatum(uint8_t datum) { TFT_eSPI::setTextDatum(datum); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `void setTextPadding(uint16_t x_width) { TFT_eSPI::setTextPadding(x_width); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawNumber(long long_num, int32_t poX, int32_t poY, uint8_t font) { return TFT_eSPI::drawNumber(long_num, poX, poY, font); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawNumber(long long_num, int32_t poX, int32_t poY) { return TFT_eSPI::drawNumber(long_num, poX, poY); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawFloat(float floatNumber, uint8_t decimal, int32_t poX, int32_t poY, uint8_t font) { return TFT_eSPI::drawFloat(floatNumber, decimal, poX, poY, font); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawFloat(float floatNumber, uint8_t decimal, int32_t poX, int32_t poY) { return TFT_eSPI::drawFloat(floatNumber, decimal, poX, poY); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawString(const char *string, int32_t poX, int32_t poY, uint8_t font) { return TFT_eSPI::drawString(string, poX, poY, font); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawString(const char *string, int32_t poX, int32_t poY) { return TFT_eSPI::drawString(string, poX, poY); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawCentreString(const char *string, int32_t dX, int32_t poY, uint8_t font) { return TFT_eSPI::drawCentreString(string, dX, poY, font); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawRightString(const char *string, int32_t dX, int32_t poY, uint8_t font) { return TFT_eSPI::drawRightString(string, dX, poY, font); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawString(const String &string, int32_t poX, int32_t poY, uint8_t font) { return TFT_eSPI::drawString(string, poX, poY, font); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawString(const String &string, int32_t poX, int32_t poY) { return TFT_eSPI::drawString(string, poX, poY); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawCentreString(const String &string, int32_t dX, int32_t poY, uint8_t font) { return TFT_eSPI::drawCentreString(string, dX, poY, font); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `int16_t drawRightString(const String &string, int32_t dX, int32_t poY, uint8_t font) { return TFT_eSPI::drawRightString(string, dX, poY, font); }`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `uint16_t decodeUTF8(uint8_t *buf, uint16_t *index, uint16_t remaining) { return TFT_eSPI::decodeUTF8(buf, index, remaining); };`

- **功能：使用Png的Url/网络资源数据绘制图像**
- `uint16_t decodeUTF8(uint8_t *buf, uint16_t *index, uint16_t remaining, uint8_t *length) { return TFT_eSPI::decodeUTF8(buf, index, remaining, length); };`



// Parent functions - Print
- `size_t printf(const char * format, ...)  __attribute__ ((format (printf, 2, 3)));`

- `size_t print(const __FlashStringHelper *x){return Print::print(x);}`

- `size_t print(const String &x){return Print::print(x);}`

- `size_t print(const char x[]){return Print::print(x);}`

- `size_t print(char x){return Print::print(x);}`

- `size_t print(unsigned char x, int y = DEC){return Print::print(x, y);}`

- `size_t print(int x, int y = DEC){return Print::print(x, y);}`

- `size_t print(unsigned int x, int y = DEC){return Print::print(x, y);}`

- `size_t print(long x, int y = DEC){return Print::print(x, y);}`

- `size_t print(unsigned long x, int y = DEC){return Print::print(x, y);}`

- `size_t print(double x, int y = 2){return Print::print(x, y);}`

- `size_t print(const Printable& x){return Print::print(x);}`

- `size_t print(struct tm * timeinfo, const char * format = NULL){return Print::print(timeinfo, format);}`


- `size_t println(const __FlashStringHelper *x){return Print::println(x);}`

- `size_t println(const String &x){return Print::println(x);}`

- `size_t println(const char x[]){return Print::println(x);}`

- `size_t println(char x){return Print::println(x);}`

- `size_t println(unsigned char x, int y = DEC){return Print::println(x, y);}`

- `size_t println(int x, int y = DEC){return Print::println(x, y);}`

- `size_t println(unsigned int x, int y = DEC){return Print::println(x, y);}`

- `size_t println(long x, int y = DEC){return Print::println(x, y);}`

- `size_t println(unsigned long x, int y = DEC){return Print::println(x, y);}`

- `size_t println(double x, int y = 2){return Print::println(x, y);}`

- `size_t println(const Printable& x){return Print::println(x);}`

- `size_t println(struct tm * timeinfo, const char * format = NULL){return Print::println(timeinfo, format);}`

- `size_t println(void){return Print::println();}`













