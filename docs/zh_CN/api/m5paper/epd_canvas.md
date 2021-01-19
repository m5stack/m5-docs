## EPD Driver

>M5PAPER搭载了一块分辨率为540*960 @4.7"的电子墨水屏，支持16级灰度显示. 在`M5.begin()`初始化中，已经创建了实例`M5EPD_Driver EPD = M5EPD_Driver();`并进行了初始化.通过下面的屏幕驱动,你能够将内容绘制的数据推送至屏幕.

- `m5epd_err_t begin(int8_t sck, int8_t mosi, int8_t miso, int8_t cs, int8_t busy, int8_t rst = -1);`

- **功能：清除屏幕内容/true则使用UPDATE_MODE_INIT模式初始化屏幕/false清除8951缓存区**
- `m5epd_err_t Clear(bool init = false);`

- **功能：写入完整一帧数据/ 每像素4bit**
- `m5epd_err_t WriteFullGram4bpp(const uint8_t *gram);`

- **功能：在指定区域写入局部数据/ 每像素4bit**
- `m5epd_err_t WritePartGram4bpp(uint16_t x, uint16_t y, uint16_t w, uint16_t h, const uint8_t *gram);`

- **功能：在指定区域填充指定数据**
- `m5epd_err_t FillPartGram4bpp(uint16_t x, uint16_t y, uint16_t w, uint16_t h, uint16_t data);`

- **功能：设置屏幕旋转角度/通常设置为90°**
- `m5epd_err_t SetRotation(uint16_t rotate = IT8951_ROTATE_0);`

- **功能：以指定模式将缓存区中的数据刷新至全屏幕**
- `m5epd_err_t UpdateFull(m5epd_update_mode_t mode);`

- **功能：以指定模式将缓存区中的数据刷新至屏幕指定区域**
- `m5epd_err_t UpdateArea(uint16_t x, uint16_t y, uint16_t w, uint16_t h, m5epd_update_mode_t mode);`

- **功能：获取刷新次数**
- `uint16_t UpdateCount(void);`

- **功能：读取屏幕旋转角度**
- `uint8_t GetRotate(void);`

- **功能：读取屏幕方向**
- `uint8_t GetDirection(void);`

- **功能：重置刷新次数**
- `void ResetUpdateCount(void);`

- **功能：检测8951是否忙碌**
- `m5epd_err_t CheckAFSR(void);`

- **功能：设置颜色反色**
- `void SetColorReverse(bool is_reverse);`

## Canvas

>该库使用`Canvas`类进行图案绘制，该类中提供了多种绘图API(其中包含绘制字符串，矩形，三角形，圆形，图片数据等). 使用前需要创建canvas实例并传入屏幕驱动，如下方代码所示。

```
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);
```

### 创建/删除Canvas

>在开始绘图前，我们需要使用Canvas实例创建一个绘制区域

- **功能：创建Canvas**
- `void *createCanvas(int16_t width, int16_t height, uint8_t frames = 1);`

- **功能：删除Canvas并释放内存**
- `void deleteCanvas(void)`

```
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);

M5.begin();
M5.EPD.SetRotation(90);
canvas.createCanvas(400, 300);

```

### 推送Canvas

>在使用绘图API完成内容绘制后，我们需要使用`push`API将绘制区域推送到屏幕。

// Re-implement functions

- **功能：获取Canvas缓存区指针**
- `void *frameBuffer(int8_t f = 1);`

- **功能：推送Canvas到屏幕指定区域，并指定刷新模式**
- `void pushCanvas(int32_t x, int32_t y, m5epd_update_mode_t mode);`

- **功能：推送Canvas到屏幕0，0位置，指定刷新模式**
- `void pushCanvas(m5epd_update_mode_t mode);`

- **功能：绘制到指定的Canvas**
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

### 刷新模式

>在使用`pushCanvas`时，我们需要传入一个刷新模式参数，在该库中的`m5epd_update_mode_t`已经枚举了几种不同的刷新模式，下面为你说明它们分别有什么样的特点。

```

typedef enum                  //             Typical
{                             //   Ghosting  Update Time  Usage
    UPDATE_MODE_INIT    = 0,  // * N/A       2000ms       Display initialization, 
    UPDATE_MODE_DU      = 1,  //   Low       260ms        适合单色菜单，文本输入, 触摸反馈 1bit黑白，存在残影。
    UPDATE_MODE_GC16    = 2,  // * Very Low  450ms        适合高质量图像显示 先黑闪后刷新
    UPDATE_MODE_GL16    = 3,  // * Medium    450ms        适合白色背景的文本显示 不黑闪
    UPDATE_MODE_GLR16   = 4,  //   Low       450ms        适合白色背景的文本显示 不黑闪
    UPDATE_MODE_GLD16   = 5,  //   Low       450ms        适合白色背景的文本和图形显示 不黑闪
    UPDATE_MODE_DU4     = 6,  // * Medium    120ms        降低对比度，适合需要快速翻页切换的情况 1bit黑白 稍微比DU快一点，残影相对DU较大
    UPDATE_MODE_A2      = 7,  //   Medium    290ms        适合菜单，触摸反馈，抗锯齿文字 2bit灰度，存在残影
    UPDATE_MODE_NONE    = 8                               上传至8951缓存区 不刷新，可以积累上传多次，然后一次刷新所有内容。
} m5epd_update_mode_t;        // 以上标注了`*`符号的为较为常用的刷新模式

```

>刷新质量较为好的几种分别为`UPDATE_MODE_GC16`,`UPDATE_MODE_GL16` , `UPDATE_MODE_GLR16` , `UPDATE_MODE_GLD16`

?>M5Paper采用的墨水屏，支持16级灰度显示，在下方API中`color`参数的有效传入范围为`0~15`

- [image2gray tool](https://github.com/m5stack/M5EPD/tree/main/tools)

## 常用API

- **功能：填充绘制区域**
- `void fillCanvas(uint32_t color);`

- **功能：推送Buffer数据**
- `void pushImage(int32_t x, int32_t y, int32_t w, int32_t h, const uint8_t *data);`
- `void pushImage(int32_t x, int32_t y, int32_t w, int32_t h, uint8_t transp, const uint8_t *data);`

- **功能：读取像素点颜色**
- `uint16_t readPixel(int32_t x, int32_t y);`

- **功能：绘制像素点**
- `void drawPixel(int32_t x, int32_t y, uint32_t color);`

- **功能：绘制二维码**
- `void qrcode(const char *string, uint16_t x = 50, uint16_t y = 10, uint16_t width = 220, uint8_t version = 6);`
- `void qrcode(const String &string, uint16_t x = 50, uint16_t y = 10, uint16_t width = 220, uint8_t version = 6);`

- **功能：以中心点绘制方块**
- `void fillCenterSquare(int32_t cx, int32_t cy, uint16_t w, uint8_t color);`

- **功能：读取当前Canvas图像的Buffer大小**
- `uint32_t getBufferSize(void)`

- **功能：设置反色**
- `void ReverseColor(void);`

- **功能：设置局部反色**
- `void ReversePartColor(int32_t x, int32_t y, int32_t w, int32_t h);`

- **功能：Canvas复制**
- `void operator=(const M5EPD_Canvas &src);`

- **功能：设置屏幕驱动**
- `void setDriver(M5EPD_Driver *driver);`

## JPG/BMP/PNG

- **功能：使用Bmp文件数据绘制图像**

```
bool drawBmpFile(fs::FS &fs, const char *path, uint16_t x, uint16_t y);
bool drawBmpFile(fs::FS &fs, String path, uint16_t x, uint16_t y);
```


- **功能：使用Jpg文件数据绘制图像**

```
bool drawJpgFile(fs::FS &fs, const char *path, uint16_t x = 0,
                uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                jpeg_div_t scale = JPEG_DIV_NONE);

bool drawJpgFile(fs::FS &fs, String path, uint16_t x = 0,
                uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                jpeg_div_t scale = JPEG_DIV_NONE);
```

- **功能：使用Png文件数据绘制图像**

```
bool drawPngFile(fs::FS &fs, const char *path, uint16_t x = 0, uint16_t y = 0,
                uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                double scale = 1.0, uint8_t alphaThreshold = 127);

bool drawPngFile(fs::FS &fs, String path, uint16_t x = 0, uint16_t y = 0,
                uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                double scale = 1.0, uint8_t alphaThreshold = 127);
```

- **功能：使用内存Jpg数据绘制图像**

```
bool drawJpg(const uint8_t *jpg_data, size_t jpg_len, uint16_t x = 0,
                uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                jpeg_div_t scale = JPEG_DIV_NONE);
```

- **功能：使用Jpg的Url/网络资源数据绘制图像**

```
bool drawJpgUrl(String url, uint16_t x = 0,
                        uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                        uint16_t offX = 0, uint16_t offY = 0, jpeg_div_t scale = JPEG_DIV_NONE);
```


- **功能：使用Png的Url/网络资源数据绘制图像**

```
bool drawPngUrl(const char *url, uint16_t x = 0, uint16_t y = 0,
            uint16_t maxWidth = 0, uint16_t maxHeight = 0,
            uint16_t offX = 0, uint16_t offY = 0,
            double scale = 1.0, uint8_t alphaThreshold = 127);
```

**例程：**

```
#include <M5EPD.h>
#include <WiFi.h>

M5EPD_Canvas canvas(&M5.EPD);

void setup()
{
    M5.begin();
    M5.EPD.SetRotation(90);
    M5.EPD.Clear(true);
    WiFi.begin("WIFI-SSID", "WIFI-PASSWORD");

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    canvas.createCanvas(540, 960);
    canvas.setTextSize(3);
    canvas.drawJpgUrl("https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/example_pic/flower.jpg");
    canvas.pushCanvas(0,0,UPDATE_MODE_GC16);
}

void loop()
{

}


```

## Text

>下面是一些常用的文本绘制API。

- **功能：设置字体颜色**
- `void setTextColor(uint16_t color)`
- `void setTextColor(uint16_t fgcolor, uint16_t bgcolor)`

- **功能：设置字体大小**
- `void setTextSize(uint8_t size)`

- **功能：设置文本换行**
- `void setTextWrap(boolean wrapX, boolean wrapY = false)`

- **功能：设置文本基准**
- `void setTextDatum(uint8_t datum)`

- **功能：设置文本边距**
- `void setTextPadding(uint16_t x_width)`

- **功能：设定字体输出区域，可使用printf在该区域内输出文字，文字将自动换行**
- `void setTextArea(uint16_t x, uint16_t y, uint16_t w, uint16_t h)`

- **功能：设置字符串背景色的填充边距**
- `void setTextFillMargin(uint16_t left, uint16_t right, int16_t top, int16_t bottom)`

- **功能：设置使用printf输出字符串时自动换行的行间距**
- `void setTextLineSpace(uint8_t space)`

- **功能：从文件系统加载TTF字体文件，支持SPIFFS与SD**
- `esp_err_t loadFont(String path, fs::FS &ffs)`

- **功能：从指针指向的二进制数组加载TTF文件，不支持较大的TTF文件**
- `esp_err_t loadFont(const uint8_t *memory_ptr, uint32_t length)`

- **功能：卸载字体文件**
- `esp_err_t unloadFont()`

- **功能：创建指定字号的TTF渲染器，可选cache大小。较大的cache可以缓存更多渲染好的字体，显著提升渲染大量文字时的性能。cache将以字形使用的频率为优先级自动安排字形存储。**
- `esp_err_t createRender(uint16_t size, uint16_t cache_size = 1)`

- **功能：销毁指定字号的TTF渲染器**
- `esp_err_t destoryRender(uint16_t size)`

- **功能：提前渲染指定的字符并存入缓存区**
- `esp_err_t preRender(uint16_t code)`

- **功能：判断指定大小的渲染器是否存在**
- `bool isRenderExist(uint16_t size)`

- **功能：获取已有的渲染器数量**
- `uint32_t getNumOfRender(void)`

- **功能：设定是否使用TTF渲染器**
- `void useFreetypeFont(bool isuse = true)`

- **功能：绘制整数**
- `int16_t drawNumber(long long_num, int32_t poX, int32_t poY, uint8_t font)`
- `int16_t drawNumber(long long_num, int32_t poX, int32_t poY)`

- **功能：绘制浮点数**
- `int16_t drawFloat(float floatNumber, uint8_t decimal, int32_t poX, int32_t poY, uint8_t font)`
- `int16_t drawFloat(float floatNumber, uint8_t decimal, int32_t poX, int32_t poY)`

- **功能：绘制字符串**
- `int16_t drawString(const char *string, int32_t poX, int32_t poY, uint8_t font)`
- `int16_t drawString(const char *string, int32_t poX, int32_t poY)`
- `int16_t drawString(const String &string, int32_t poX, int32_t poY, uint8_t font)`
- `int16_t drawString(const String &string, int32_t poX, int32_t poY)`

- **功能：解码UTF8字符串/返回Unicode值**
- `uint16_t decodeUTF8(uint8_t *buf, uint16_t *index, uint16_t remaining);`
- `uint16_t decodeUTF8(uint8_t *buf, uint16_t *index, uint16_t remaining, uint8_t *length);`

- **功能：绘制字符**
- `int16_t drawChar(uint16_t uniCode, int32_t x, int32_t y)`
- `int16_t drawChar(uint16_t uniCode, int32_t x, int32_t y, uint8_t font)`
- `void drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)`

- **功能：获取文本宽度**
- `int16_t textWidth(const char *string, uint8_t font)`
- `int16_t textWidth(const char *string)`
- `int16_t textWidth(const String& string, uint8_t font)`
- `int16_t textWidth(const String& string)`

## Drawing

>下面是一些常用的绘图API。

// Parent functions - drawing

- **功能：绘制圆形**
- `void drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color)`

- **功能：绘制圆形助手**
- `void drawCircleHelper(int32_t x0, int32_t y0, int32_t r, uint8_t cornername, uint32_t color)`

- **功能：绘制填充圆形**
- `void fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color)`

- **功能：绘制填充圆形助手**
- `void fillCircleHelper(int32_t x0, int32_t y0, int32_t r, uint8_t cornername, int32_t delta, uint32_t color)`

- **功能：绘制直线**
- `void drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color)`
- `void drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint8_t thickness, uint8_t color);`

- **功能：快速绘制垂直直线**
- `void drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color)`
- `void drawFastVLine(int32_t x, int32_t y, int32_t h, uint8_t thickness, uint8_t color);`

- **功能：绘制椭圆**
- `void drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color)`

- **功能：绘制填充椭圆**
- `void fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color)`

- **功能：绘制矩形**
- `void drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)`

- **功能：绘制填充矩形**
- `void fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);`

- **功能：绘制圆角矩形**
- `void drawRoundRect(int32_t x0, int32_t y0, int32_t w, int32_t h, int32_t radius, uint32_t color)`

- **功能：绘制填充圆角矩形**
- `void fillRoundRect(int32_t x0, int32_t y0, int32_t w, int32_t h, int32_t radius, uint32_t color)`

- **功能：绘制三角形**
- `void drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color)`

- **功能：绘制填充三角形**
- `void fillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color)`


## print

>下面是一些关于print格式化输出的一些函数重载。

// Parent functions - Print
- `size_t printf(const char * format, ...)  __attribute__ ((format (printf, 2, 3)));`

- `size_t print(const __FlashStringHelper *x)`

- `size_t print(const String &x)`

- `size_t print(const char x[])`

- `size_t print(char x)`

- `size_t print(unsigned char x, int y = DEC)`

- `size_t print(int x, int y = DEC)`

- `size_t print(unsigned int x, int y = DEC)`

- `size_t print(long x, int y = DEC)`

- `size_t print(unsigned long x, int y = DEC)`

- `size_t print(double x, int y = 2)`

- `size_t print(const Printable& x)`

- `size_t print(struct tm * timeinfo, const char * format = NULL)`

- `size_t println(const __FlashStringHelper *x)`

- `size_t println(const String &x)`

- `size_t println(const char x[])`

- `size_t println(char x)`

- `size_t println(unsigned char x, int y = DEC)`

- `size_t println(int x, int y = DEC)`

- `size_t println(unsigned int x, int y = DEC)`

- `size_t println(long x, int y = DEC)`

- `size_t println(unsigned long x, int y = DEC)`

- `size_t println(double x, int y = 2)`

- `size_t println(const Printable& x)`

- `size_t println(struct tm * timeinfo, const char * format = NULL)`

- `size_t println(void)`