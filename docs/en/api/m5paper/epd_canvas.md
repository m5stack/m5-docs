## EPD Driver

>The M5PAPER is equipped with an e-ink screen with a resolution of 540*960 @ 4.7" and supports 16 levels of grayscale display. In the `M5.begin()` initialization, the instance `M5EPD_Driver EPD = M5EPD_Driver();` has been created and initialized. With the following screen driver, you can push the content-drawn data to the screen.

- `m5epd_err_t begin(int8_t sck, int8_t mosi, int8_t miso, int8_t cs, int8_t busy, int8_t rst = -1);`

- **Function: Clear screen content/true initializes screen with UPDATE_MODE_INIT mode/false Clear 8951 buffer**
- `m5epd_err_t Clear(bool init = false);`

- **Functions: Write full frame data / 4 bit per pixel**.
- `m5epd_err_t WriteFullGram4bpp(const uint8_t *gram);`

- **Function: Write local data in specified area / 4 bit per pixel**.
- `m5epd_err_t WritePartGram4bpp(uint16_t x, uint16_t y, uint16_t w, uint16_t h, const uint8_t *gram);`

- **Function: Fill specified data in specified area**.
- `m5epd_err_t FillPartGram4bpp(uint16_t x, uint16_t y, uint16_t w, uint16_t h, uint16_t data);`

- **Functions: Set screen rotation angle/usually set to 90°**.
- `m5epd_err_t SetRotation(uint16_t rotate = IT8951_ROTATE_0);`

- **Function: flushes the data in the buffer to full screen in the specified mode**.
- `m5epd_err_t UpdateFull(m5epd_update_mode_t mode);`

- **Function: flushes the data in the buffer to the specified area of the screen in the specified mode**.
- `m5epd_err_t UpdateArea(uint16_t x, uint16_t y, uint16_t w, uint16_t h, m5epd_update_mode_t mode);`

- **Functions: get refresh times**
- `uint16_t UpdateCount(void);`

- **Function: Read the screen rotation angle**.
- `uint8_t GetRotate(void) {return _rotate;};`

- **Function: Read screen orientation**
- `uint8_t GetDirection(void) {return _direction;};`

- **Functions: reset refresh times**
- `void ResetUpdateCount(void);`

- **Function: detects if 8951 is busy**.
- `m5epd_err_t CheckAFSR(void);`

- **Function: set color inverse color**
- `void SetColorReverse(bool is_reverse);`

## Canvas

>The library uses the `Canvas` class for drawing patterns, which provides a variety of drawing APIs (including drawing strings, rectangles, triangles, circles, image data, etc.). To use it, you need to create a canvas instance and pass it to the screen driver, as shown in the following code.

```clike
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);
```

### Create/delete Canvas

>Before we can start drawing, we need to create a drawing area using the Canvas instance.

- **Function: Create Canvas**
- `void *createCanvas(int16_t width, int16_t height, uint8_t frames = 1)`

- **Function: Deleting Canvas and Freeing Memory**
- `void deleteCanvas(void)`

```clike
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);

M5.begin();
M5.EPD.SetRotation(90);
canvas.createCanvas(400, 300);

```

### Push Canvas

>After drawing the content using the Draw API, we need to use the `push` API to push the drawn area to the screen.

// Re-implement functions

- **Function: Get pointer to the Canvas buffer**.
- `void *frameBuffer(int8_t f = 1);`

- **Function: Push the Canvas to the specified area of the screen, and specify the refresh mode**.
- `void pushCanvas(int32_t x, int32_t y, m5epd_update_mode_t mode);`

- **Functions: Push Canvas to screen position 0, 0, assign refresh mode**.
- `void pushCanvas(m5epd_update_mode_t mode);`

- **Function: Draw to the specified Canvas**.
- `void pushToCanvas(int32_t x, int32_t y, M5EPD_Canvas* canvas);`

**Example：**

```clike
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

### Update Mode

>To use `pushCanvas`, we need to pass a refresh mode parameter. The library `m5epd_update_mode_t` already enumerates several different update modes.

```clike
typedef enum                  //             Typical
{                             //   Ghosting  Update Time  Usage
    UPDATE_MODE_INIT    = 0,  // * N/A       2000ms       Display initialization, 
    UPDATE_MODE_DU      = 1,  //   Low       260ms        Monochrome menu, text input, and touch screen input 1bit Gray level
    UPDATE_MODE_GC16    = 2,  // * Very Low  450ms        High quality images 
    UPDATE_MODE_GL16    = 3,  // * Medium    450ms        Text with white background 
    UPDATE_MODE_GLR16   = 4,  //   Low       450ms        Text with white background
    UPDATE_MODE_GLD16   = 5,  //   Low       450ms        Text and graphics with white background 
    UPDATE_MODE_DU4     = 6,  // * Medium    120ms        Fast page flipping at reduced contrast 1bit Gray level Slightly faster than DU, larger afterimage relative to DU
    UPDATE_MODE_A2      = 7,  //   Medium    290ms        Anti-aliased text in menus / touch and screen input 2bit Gray level
    UPDATE_MODE_NONE    = 8                               Uploading to the 8951 cache without refreshing allows you to accumulate multiple uploads and then refresh all content at once.
} m5epd_update_mode_t;        // The ones marked with * are more commonly used

```

>The refresh quality is relatively good for `UPDATE_MODE_GC16`, `UPDATE_MODE_GL16` , `UPDATE_MODE_GLR16` , `UPDATE_MODE_GLD16`.

?>The ink screen adopted by M5Paper supports 16-level grayscale display. The effective input range of the `color` parameter in the API below is `0~15`

- [image2gray tool](https://github.com/m5stack/M5EPD/tree/main/tools)

## Canvas API

- **Function: Fill Draw Area**
- `void fillCanvas(uint32_t color);`

- **Function: Push Buffer Data**
- `void pushImage(int32_t x, int32_t y, int32_t w, int32_t h, const uint8_t *data);`
- `void pushImage(int32_t x, int32_t y, int32_t w, int32_t h, uint8_t transp, const uint8_t *data);`

- **Function: Read pixel color**
- `uint16_t readPixel(int32_t x, int32_t y);`

- **Function: Draw pixels**
- `void drawPixel(int32_t x, int32_t y, uint32_t color);`

- **Function: Draw QR code**
- `void qrcode(const char *string, uint16_t x = 50, uint16_t y = 10, uint16_t width = 220, uint8_t version = 6);`
- `void qrcode(const String &string, uint16_t x = 50, uint16_t y = 10, uint16_t width = 220, uint8_t version = 6);`

- **Functions: draw squares with center points**
- `void fillCenterSquare(int32_t cx, int32_t cy, uint16_t w, uint8_t color);`

- **Function: Read the buffer size of the current Canvas image**.
- `uint32_t getBufferSize(void)`

- **Functions: set inverse color**
- `void ReverseColor(void);`

- **Function: set local inverse color**
- `void ReversePartColor(int32_t x, int32_t y, int32_t w, int32_t h);`

- **Function: Canvas Copy**
- `void operator=(const M5EPD_Canvas &src);`

- **Function: Set screen driver**
- `void setDriver(M5EPD_Driver *driver);`

## JPG/BMP/PNG

- **Function: Drawing images with Bmp file data**

```clike
bool drawBmpFile(fs::FS &fs, const char *path, uint16_t x, uint16_t y);
bool drawBmpFile(fs::FS &fs, String path, uint16_t x, uint16_t y);
```


- **Function: Draw images using Jpg file data**.

```clike
bool drawJpgFile(fs::FS &fs, const char *path, uint16_t x = 0,
                uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                jpeg_div_t scale = JPEG_DIV_NONE);

bool drawJpgFile(fs::FS &fs, String path, uint16_t x = 0,
                uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                jpeg_div_t scale = JPEG_DIV_NONE);
```

- **Function: Draw images using Png file data**.


```clike
bool drawPngFile(fs::FS &fs, const char *path, uint16_t x = 0, uint16_t y = 0,
                uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                double scale = 1.0, uint8_t alphaThreshold = 127);

bool drawPngFile(fs::FS &fs, String path, uint16_t x = 0, uint16_t y = 0,
                uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                double scale = 1.0, uint8_t alphaThreshold = 127);
```

- **Function: Draw images using memory Jpg data**.

```clike
bool drawJpg(const uint8_t *jpg_data, size_t jpg_len, uint16_t x = 0,
                uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                uint16_t offX = 0, uint16_t offY = 0,
                jpeg_div_t scale = JPEG_DIV_NONE);
```

- **Function: Draw images using Jpg's Url/Network resource data**.

```clike
bool drawJpgUrl(String url, uint16_t x = 0,
                        uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                        uint16_t offX = 0, uint16_t offY = 0, jpeg_div_t scale = JPEG_DIV_NONE);
```


- **Functions: Draw images using Png's Url/Network resource data**.

```clike
bool drawPngUrl(const char *url, uint16_t x = 0, uint16_t y = 0,
            uint16_t maxWidth = 0, uint16_t maxHeight = 0,
            uint16_t offX = 0, uint16_t offY = 0,
            double scale = 1.0, uint8_t alphaThreshold = 127);
```


**Example：**

```clike
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

>Here are some common text drawing APIs.

- **Function: set font color**
- `void setTextColor(uint16_t color)`
- `void setTextColor(uint16_t fgcolor, uint16_t bgcolor)`

- **Function: set font size**
- `void setTextSize(uint8_t size)`

- **Function: set text line wrap**
- `void setTextWrap(boolean wrapX, boolean wrapY = false)`

- **Functions: Setting Text Baseline**
- `void setTextDatum(uint8_t datum)`

- **Functions: set text Padding**
- `void setTextPadding(uint16_t x_width)`

- **Functions: set the font output area, you can use printf to output text in the area, the text will be automatically newline**.
- `void setTextArea(uint16_t x, uint16_t y, uint16_t w, uint16_t h)`

- **Function: Set the fill margin of the string background color**.
- `void setTextFillMargin(uint16_t left, uint16_t right, int16_t top, int16_t bottom)`

- **Functions: Set the line spacing when printf is used to output a string**.
- `void setTextLineSpace(uint8_t space)`

- **Function: load TTF font file from file system, support SPIFFS and SD***.
- `esp_err_t loadFont(String path, fs::FS &ffs)`

- **Function: load TTF file from binary array pointed to by pointer, larger TTF files are not supported**.
- `esp_err_t loadFont(const uint8_t *memory_ptr, uint32_t length)`

- **Function: Uninstall font file**
- `esp_err_t unloadFont()`

- **Function: Creates TTF renderers with a given font size, selectable cache size. Larger cache can cache more rendered fonts, significantly improving performance when rendering large amounts of text. cache will automatically prioritize glyph storage based on how often the glyphs are used.**
- `esp_err_t createRender(uint16_t size, uint16_t cache_size = 1)`

- **Function: destroys TTF renderer with specified font size**.
- `esp_err_t destoryRender(uint16_t size)`

- **Functions: advance rendering of specified characters and storing them in the buffer**
- `esp_err_t preRender(uint16_t code)`

- **Functions: determine if the specified size renderer exists**.
- `bool isRenderExist(uint16_t size)`

- **Functions: get the number of existing renderers**
- `uint32_t getNumOfRender(void)`

- **Function: set whether to use TTF renderer**
- `void useFreetypeFont(bool isuse = true)`

- **Functions: plotting integers**
- `int16_t drawNumber(long long_num, int32_t poX, int32_t poY, uint8_t font)`
- `int16_t drawNumber(long long_num, int32_t poX, int32_t poY)`

- **Functions: plot floating point number**
- `int16_t drawFloat(float floatNumber, uint8_t decimal, int32_t poX, int32_t poY, uint8_t font)`
- `int16_t drawFloat(float floatNumber, uint8_t decimal, int32_t poX, int32_t poY)`

- **Function: Draw string**
- `int16_t drawString(const char *string, int32_t poX, int32_t poY, uint8_t font)`
- `int16_t drawString(const char *string, int32_t poX, int32_t poY)`
- `int16_t drawString(const String &string, int32_t poX, int32_t poY, uint8_t font)`
- `int16_t drawString(const String &string, int32_t poX, int32_t poY)`

- **Functions: decode UTF8 string/return Unicode value**.
- `uint16_t decodeUTF8(uint8_t *buf, uint16_t *index, uint16_t remaining)`
- `uint16_t decodeUTF8(uint8_t *buf, uint16_t *index, uint16_t remaining, uint8_t *length)`

- **Functions: draw characters**
- `int16_t drawChar(uint16_t uniCode, int32_t x, int32_t y)`
- `int16_t drawChar(uint16_t uniCode, int32_t x, int32_t y, uint8_t font)`
- `void drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)`

- **Function: get text width**
- `int16_t textWidth(const char *string, uint8_t font)`
- `int16_t textWidth(const char *string)`
- `int16_t textWidth(const String& string, uint8_t font)`
- `int16_t textWidth(const String& string)`

## Drawing

>Here are some common drawing APIs.

// Parent functions - drawing

- **Function: Draw circles**
- `void drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color)`

- **Function: Draw circles helper**
- `void drawCircleHelper(int32_t x0, int32_t y0, int32_t r, uint8_t cornername, uint32_t color)`

- **Function：draw filled circles**
- `void fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color)`

- **Function：draw filled circles helper**
- `void fillCircleHelper(int32_t x0, int32_t y0, int32_t r, uint8_t cornername, int32_t delta, uint32_t color)`

- **Function: Draw a line**
- `void drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color)`
- `void drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint8_t thickness, uint8_t color);`

- **Function: Quickly draw vertical lines**.
- `void drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color)`
- `void drawFastVLine(int32_t x, int32_t y, int32_t h, uint8_t thickness, uint8_t color);`

- **Function: Draw ellipse**
- `void drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color)`

- **Function: Draw filled ellipse**.
- `void fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color)`

- **Function: Draw rect**
- `void drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)`

- **Function: Draw filled rect**
- `void fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);`

- **Functions: draw rounded rectangles**
- `void drawRoundRect(int32_t x0, int32_t y0, int32_t w, int32_t h, int32_t radius, uint32_t color)`

- **Function: Draw filled rounded rectangles**.
- `void fillRoundRect(int32_t x0, int32_t y0, int32_t w, int32_t h, int32_t radius, uint32_t color)`

- **Functions: Drawing triangles**
- `void drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color)`

- **Functions: Draw filled triangles**
- `void fillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color)`

## print

>Here are some function overrides for print formatted output.

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