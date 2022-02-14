# LCD 画面表示

スクリーンの解像度は 横320 x 高さ240 で、左上が原点(0, 0)です。

色コードはあらかじめ定義があり、これらを利用することができます。

| 色定義        | 中身     | 説明        | R  | G  | B   |
| ---           | ---      | --          | -- | -- | --  |
|TFT_BLACK      | 0x0000   |黒           |   0|   0|   0 |
|TFT_NAVY       | 0x000F   |ネイビー     |   0|   0| 128 |
|TFT_DARKGREEN  | 0x03E0   |濃い緑       |   0| 128|   0 |
|TFT_MAROON     | 0x7800   |マロン       | 128|   0|   0 |
|TFT_PURPLE     | 0x780F   |パープル     | 128|   0| 128 |
|TFT_OLIVE      | 0x7BE0   |オリーブ     | 128| 128|   0 |
|TFT_LIGHTGREY  | 0xC618   |薄い灰色     | 192| 192| 192 |
|TFT_DARKGREY   | 0x7BEF   |濃い灰色     | 128| 128| 128 |
|TFT_BLUE       | 0x001F   |青           |   0|   0| 255 |
|TFT_GREENYELLOW| 0xB7E0   |黄緑         | 180| 255|   0 |
|TFT_GREEN      | 0x07E0   |緑           |   0| 255|   0 |
|TFT_YELLOW     | 0xFFE0   |黄色         | 255| 255|   0 |
|TFT_ORANGE     | 0xFDA0   |オレンジ     | 255| 180|   0 |
|TFT_PINK       | 0xFC9F   |ピンク       |255 | 255|  16 |
|TFT_CYAN       | 0x07FF   |シアン       |   0| 255| 255 |
|TFT_DARKCYAN   | 0x03EF   |濃いシアン   |   0| 128| 128 |
|TFT_RED        | 0xF800   |赤           | 255|   0|   0 |
|TFT_MAGENTA    | 0xF81F   |マゼンダ     | 255|   0| 255 |
|TFT_WHITE      | 0xFFFF   |白           | 255| 255| 255 |


## begin()

**機能:**

使用できるように初期化を行います。

**構文:**

<mark>begin();</mark>

**引数:**

なし

**戻り値:**

なし

**情報:**

1)M5.begin( )でLCDの初期化を行わない場合は、ディスプレイを使う前にこの関数を呼んでください。


## sleep()

**機能:**

ディスプレイを省エネモードに移行させます

**構文:**

<mark>sleep();</mark>

**引数:**

なし

**戻り値:**

なし

**情報:**

1)スリープを解除するには、wakeup()関数を呼んでください。

2)M5StackのLCDバックライトは別に制御しているため、必要に応じてsetBrightness( )関数で調整してください。

**使用例:**

```clike
#include <M5Stack.h>

M5.Lcd.sleep();
M5.Lcd.setBrightness(0);
```

## wakeup()

**機能:**

ディスプレイを省エネモードから復帰させます

**構文:**

<mark>wakeup();</mark>

**引数:**

なし

**戻り値:**

なし

**情報:**

1)M5StackのLCDバックライトは別に制御しているため、必要に応じてsetBrightness( )関数で調整してください。

**使用例:**

```clike
#include <M5Stack.h>

M5.Lcd.wakeup();
M5.Lcd.setBrightness(200);
```


## setBrightness()

**機能:**

ディスプレイのバックライトを調整します。

**構文:**

<mark>setBrightness(uint8_t brightness);</mark>

**引数:**


| 引数 | 型 | 説明 |  
| --- | --- | -- |
| brightness | uint8_t | 明るさ（0:消灯～255:全灯)  |

**戻り値:**

なし

**情報:**

1)バックライトはPWM（44.1KHz）で制御されています。

2)バックライトを多用するとバッテリー消費に直接的な影響があります。

**使用例:**

```clike
#include <M5Stack.h>

M5.Lcd.setBrightness(200);
```

## progressBar()

**機能:**

進捗を表すバーを表示します。

**構文:**

<mark>progressBar(int x, int y, int w, int h, uint8_t val);</mark>

**引数:**


| 引数 | 型 | 説明 |  
| --- | --- | -- |
| x | int | 座標X（左上)  |
| y | int | 座標Y（左上)  |
| w  | int | 幅 (px) |
| h  | int | 高さ(px)  |
| val  | uint8_t | 進捗(0-100%)  |


**戻り値:**

なし

**情報:**

1)色は青色（0x09F1)で表現されます。

2)追加分しか描画しないため、あらかじめ背景を消しておいてください。

**使用例:**

```clike
#include <M5Stack.h>

  M5.Lcd.fillRect(0,0,240,20,0);
  M5.Lcd.progressBar(0,0,240,20, 20);
```


## qrcode()

**機能:**

QRコードを生成します。

**構文:**

<mark>qrcode(const char *string, uint16_t x, uint16_t y, uint8_t width, uint8_t version);</mark>

<mark>qrcode(const String &string, uint16_t x, uint16_t y, uint8_t width, uint8_t version);</mark>

**引数:**


| 引数 | 型 | 説明 |  
| --- | --- | -- |
| val  | string / String& | QRに埋め込む文字列  |
| x | uint16_t | 座標X（左上)  |
| y | uint16_t | 座標Y（左上)  |
| width  | uint8_t | 幅 (px) |
| version  | uint8_t | QRコードバージョン  |


**戻り値:**

なし

**情報:**

1)文字数に合わせて適切なQRコードバージョンを指示してください。

**使用例:**

```clike
#include <M5Stack.h>

  M5.Lcd.qrcode("http://www.m5stack.com",50,10,220,6);

```

## drawBitmap()

**機能:**

ビットマップを描画します。

**構文:**

<mark>drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, const uint16_t *data);</mark>

<mark>drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, uint16_t *data);</mark>

<mark>drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, const uint16_t *data, uint16_t transparent);</mark>

<mark>drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, const uint8_t *data);</mark>

<mark>drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, uint8_t *data);</mark>

**引数:**


| 引数 | 型 | 説明 |  
| --- | --- | -- |
| x0 | int16_t | 座標X（左上)  |
| y0 | int16_t | 座標Y（左上)  |
| w  | int16_t | 幅 (px) |
| h  | int16_t | 高さ(px)  |
| data  | uint16_t* / uint8_t*| 画像データ  |
| transparent  | uint16_t | 透明色コード  |

**戻り値:**

なし

**情報:**

1)カラーコードは上位より赤5ビット、緑6ビット、青5ビットの計16ビットであらわされます。

**使用例:**

サンプルスケッチを参照：M5Stack->Advanced->drawXBitmap


## drawBmpFile()

**機能:**

ファイルからビットマップを読み込み、描画します。

**構文:**

<mark>drawBmpFile(fs::FS &fs, const char *path, uint16_t x, uint16_t y);</mark>


**引数:**


| 引数 | 型 | 説明 |  
| --- | --- | -- |
| fs | fs::FS | ファイルデバイス |
| path  | const char * | ファイル名  |
| x | int16_t | 座標X（左上)  |
| y | int16_t | 座標Y（左上)  |

**戻り値:**

なし

**情報:**

1)サイズ、ビット数によっては展開できないことがあります。

**使用例:**

```clike
#include <M5Stack.h>
  M5.Lcd.drawBmpFile(SD, "/p2.bmp",0,0);
```


## drawJpg()

**機能:**

メモリからJPEGデータを読み込み、描画します。

**構文:**

<mark>void drawJpg(const uint8_t *jpg_data, size_t jpg_len, uint16_t x = 0,
                  uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                  uint16_t offX = 0, uint16_t offY = 0,
                  jpeg_div_t scale = JPEG_DIV_NONE);</mark>


**引数:**


| 引数 | 型 | 説明 |  
| --- | --- | -- |
| jpg_data |uint8_t * | 格納場所の先頭 |
| jpg_len  | size_t | データ長  |
| x | uint16_t | 座標X（左上)  |
| y | uint16_t | 座標Y（左上)  |
|maxWidth | uint16_t | 最大幅 (px)  |
|maxHeight | uint16_t | 最大高さ (px)  |
| offX | uint16_t |オフセットX (px)  |
| offY | uint16_t | オフセットY (px)  |
| scale | jpeg_div_t | 座標Y（左上)  |


スケール(jpeg_div_t)引数：

| 名前 |説明 |  
| --- | -- |
| JPEG_DIV_NONE|等倍|
| JPEG_DIV_2   |1/2|
| JPEG_DIV_4   |1/4|
| JPEG_DIV_8   |1/8|
| JPEG_DIV_MAX |最大|


**戻り値:**

なし

**情報:**

1)サイズ、ビット数、フォーマット(プログレッシブ等）によっては展開できないことがあります。

## drawJpgFile()

**機能:**

ファイルからJPEGデータを読み込み、描画します。

**構文:**

<mark>void drawJpgFile(fs::FS &fs, const char *path, uint16_t x = 0, uint16_t y = 0,
                    uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                    uint16_t offX = 0, uint16_t offY = 0,
                    jpeg_div_t scale = JPEG_DIV_NONE);</mark>


**引数:**

| 引数 | 型 | 説明 |  
| --- | --- | -- |
| fs |fs::FS &| ファイルデバイス |
| path  | const char * | ファイルがある場所  |
| x | uint16_t | 座標X（左上)  |
| y | uint16_t | 座標Y（左上)  |
|maxWidth | uint16_t | 最大幅 (px)  |
|maxHeight | uint16_t | 最大高さ (px)  |
| offX | uint16_t |オフセットX (px)  |
| offY | uint16_t | オフセットY (px)  |
| scale | jpeg_div_t |スケール  |


スケール(jpeg_div_t)引数：

| 名前 |説明 |  
| --- | -- |
| JPEG_DIV_NONE|等倍|
| JPEG_DIV_2   |1/2|
| JPEG_DIV_4   |1/4|
| JPEG_DIV_8   |1/8|
| JPEG_DIV_MAX |最大|


**戻り値:**

なし

**情報:**

1)サイズ、フォーマット(プログレッシブ等）によっては展開できないことがあります。


## fillScreen()

**機能:**

引数で指定した色で画面を塗りつぶします。

**構文:**

<mark>fillScreen(uint16_t color);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| color | 塗りつぶしの色 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillScreen(RED);
```

## setTextColor()

**機能:**

文字の色や文字の背景色を引数で指定した色に変更します。

**構文:**

<mark>setTextColor(uint16_t color, [uint16_t backgroundcolor]);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| color | テキストの色 | uint16_t |
| backgroundcolor| テキストの背景色。省略可能。 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.setTextColor(RED);
```

## setCursor()

**機能:**

カーソルの位置を設定します。

**構文:**

<mark>setCursor(uint16_t x, uint16_t y);</mark>

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | x位置 | uint16_t |
| y | y位置 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.setCursor(100, 100);
M5.Lcd.print("Hello");
```

## setTextSize()

**機能:**

描画する文字サイズを指定します

**構文:**

<mark>setTextSize(uint8_t size);</mark>

| 引数 | 説明 | 型 |
| --- | --- | -- |
	| size | 文字のサイズ(1-7) | uint8_t |


## drawPixel()

**機能:**

指定した位置に指定色のピクセルを描画します。

**構文:**

<mark>drawPixel(int16_t x, int16_t y, [uint16_t color]);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | x位置 | int16_t |
| y | y位置 | int16_t |
| color | ピクセルの色。省略可能。 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.drawPixel(22, 22, RED);
```

## drawChar()

**機能:**

指定した始点から終点まで指定色の直線を描画します。

**構文:**

<mark>drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size);</mark>

**引数:**

| 引数 | 型 | 説明 |  
| --- | --- | -- |
| x | int32_t | 座標X（左上)  |
| y | int32_t | 座標Y（左上)  |
| c | uint16_t | 文字コード  |
| color | uint32_t | 描画色  |
| bg | uint32_t | 背景色  |
| size | uint8_t | 文字サイズ  |

**使用例:**

```clike
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.drawChar(0,0,'A',TFT_GREEN,TFT_BLACK,3);
```


## drawFastVLine()

**機能:**

XからYまで垂直に線を引きます。

**構文:**

<mark>drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color);</mark>

**引数:**

| 引数 |  型 |説明 |
| --- | --- | -- |
| x | int16_t | 始点のx位置 |
| y | int16_t | 始点のy位置 | 
| h |  int16_t |線の長さ |
| color |  uint32_t |線の色（省略可能) |

**使用例:**

```clike
#include <M5Stack.h>

M5.Lcd.drawFastHLine(0, 0, 12, TFT_GREEN);
```

## drawFastHLine()

**機能:**

XからYまで水平に線を引きます。

**構文:**

<mark>drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color);</mark>

**引数:**

| 引数 |  型 |説明 |
| --- | --- | -- |
| x | int16_t | 始点のx位置 |
| y | int16_t | 始点のy位置 | 
| w |  int16_t |線の長さ |
| color |  uint32_t |線の色（省略可能) |

**使用例:**

```clike
#include <M5Stack.h>

M5.Lcd.drawFastHLine(0, 0, 12, TFT_GREEN);
```

## drawLine()

**機能:**

指定した始点から終点まで指定色の直線を描画します。

**構文:**

<mark>drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, [uint16_t color]);</mark>

**引数:**

| 引数 |  型 |説明 |
| --- | --- | -- |
| x0 | int16_t | 始点のx位置 |
| y0 | int16_t |始点のy位置 | 
| x1 |  int16_t |終点のx位置 |
| y1 |  int16_t |終点のy位置 |
| color |  uint16_t |線の色（省略可能) |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.drawLine(0, 0, 12, 12, WHITE);
```

## drawTriangle()

**機能:**

指定した3点を結ぶ三角形を指定色で描画します。

**構文:**

<mark>drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, [uint16_t color]);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x0 | 点0のx位置 | int16_t |
| y0 | 点0のy位置 | int16_t |
| x1 | 点1のx位置 | int16_t |
| y1 | 点1のy位置 | int16_t |
| x2 | 点2のx位置 | int16_t |
| y2 | 点2のy位置 | int16_t |
| color | 線の色。省略可能。 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.drawTriangle(22, 22, 69, 98, 51, 22, RED);
```

## fillTriangle()

**機能:**

指定した3点を結ぶ三角形を指定色で塗りつぶして描画します。

**構文:**

<mark>fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, [uint16_t color]);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x0 | 点0のx位置 | int16_t |
| y0 | 点0のy位置 | int16_t |
| x1 | 点1のx位置 | int16_t |
| y1 | 点1のy位置 | int16_t |
| x2 | 点2のx位置 | int16_t |
| y2 | 点2のy位置 | int16_t |
| color | 塗りつぶしの色。省略可能。 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillTriangle(22, 22, 69, 98, 51, 22, RED);
```

## drawRect()

**機能:**

指定の点から指定の幅と高さの四角形を指定色で描画します。

**構文:**

<mark>drawRect(int16_t x, int16_t y, int16_t w, int16_t h, [uint16_t color]);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | 点のx位置 | int16_t |
| y | 点のy位置 | int16_t |
| w | 四角形の幅 | int16_t |
| h | 四角形の高さ | int16_t |
| color | 線の色。省略可能。 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.drawRect(180, 12, 122, 10, BLUE);
```

## fillRect()

**機能:**

指定の左上の点(x,y)と幅と高さの四角形を指定色で塗りつぶして描画します。

**構文:**

<mark>fillRect(int16_t x, int16_t y, int16_t w, int16_t h, [uint16_t color]);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | 点のx位置 | int16_t |
| y | 点のy位置 | int16_t |
| w | 四角形の幅 | int16_t |
| h | 四角形の高さ | int16_t |
| color | 塗りつぶしの色。省略可能。 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillRect(180, 12, 122, 10, BLUE);
```

## drawRoundRect()

**機能:**

左上の点(x,y)と幅と高さを指定して、かど丸の四角形を描画します。

**構文:**

<mark>drawRoundRect(int16_t x, int16_t y, int16_t w, int16_t h, int16_t r, [uint16_t color]);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | 四角形の左上の頂点のx座標 | int16_t |
| y | 四角形の左上の頂点のy座標 | int16_t |
| w | 四角形の幅 | int16_t |
| h | 四角形の高さ | int16_t |
| r | コーナー半径 | int16_t |
| color | 四角形の線の色。省略可能。 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillRoundRect(180, 70, 122, 10, 4, BLUE);
```
## fillRoundRect()

**機能:**

左上の点(x,y)と幅と高さを指定して、塗りつぶされた かど丸の四角形を描画します。

**構文:**

<mark>fillRoundRect(int16_t x, int16_t y, int16_t w, int16_t h, int16_t r, [uint16_t color]);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | 四角形の左上の頂点のx座標 | int16_t |
| y | 四角形の左上の頂点のy座標 | int16_t |
| w | 四角形の幅 | int16_t |
| h | 四角形の高さ | int16_t |
| r | コーナー半径 | int16_t |
| color | 四角形の線の色。省略可能。 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillRoundRect(180, 70, 122, 10, 4, BLUE);
```


## drawEllipse()

**機能:**

左上の点(x,y)と幅と高さを指定して、楕円を描画します。

**構文:**

<mark>drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x0 | 楕円の中心X座標 | int16_t |
| y0 | 楕円の中心Y座標 | int16_t |
| rx | 円の横幅 | int16_t |
| ry | 円の縦幅 | int16_t |
| color | 円の色 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.Lcd.drawEllipse(100,100,20,30, TFT_GREEN);
```

## fillEllipse()

**機能:**

左上の点(x,y)と幅と高さを指定して、塗りつぶされた楕円を描画します。

**構文:**

<mark>fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);</mark>

**引数:**

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x0 | 楕円の中心X座標 | int16_t |
| y0 | 楕円の中心Y座標 | int16_t |
| rx | 円の横幅 | int16_t |
| ry | 円の縦幅 | int16_t |
| color | 円の色 | uint16_t |

**使用例:**

```clike
#include <M5Stack.h>

M5.Lcd.drawEllipse(100,100,20,30, TFT_GREEN);
```


## color565()

**機能:**

関数で使用する色コード(rgb565)に変更します。

**構文:**

<mark>color565(uint8_t red, uint8_t green, uint8_t blue);</mark>

**引数:**

| 引数  | 説明 | 型      |
| ---   | ---  | --      |
| red   | 赤   | int8_t |
| green | 緑   | int8_t |
| blue  | 青   | int8_t |


**戻り値:**

なし

**使用例:**

```clike
#include <M5Stack.h>

    uint16_t colorvalue=0;
    colorvalue=color565(255,255,255);

```

## setRotation()

**機能:**

画面を回転させます。

**構文:**

<mark>setRotation(uint8_t r);</mark>

**引数:**

| 引数 |  型 | 説明 | 
| --- | --- | -- |
| r | uint8_t | 回転角 r (x 90°)|


**使用例:**

```clike
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.setRotation(1);
```
**情報:**

1)M5Stackのディスプレイ制御は90°回転された制御になっており、M5.Lcd.begin()の中で setRotation(1)が実行されています。

2)0～3 は回転、4～7 は画面反転し、回転します。

## invertDisplay()

**機能:**

画面をネガポジ反転させます。

**構文:**

<mark>invertDisplay(boolean i);</mark>

**引数:**

| 引数 |  型 | 説明 | 
| --- | --- | -- |
|  i|boolean | 反転するなら true|


**使用例:**

```clike
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.invertDisplay(true);
```


## loadFont()

**機能:**

独自のフォントを読み込みます

**構文:**

<mark>loadFont(String fontName, fs::FS &ffs);</mark>

**引数:**

| 引数 | 型 || 説明 
| --- | --- | -- |
| fontName | String | フォントファイル名 |
| ffs | fs::FS | ファイルデバイス |

**使用例:**

```clike
#include <M5Stack.h>

M5.Lcd.loadFont("filename", SD);
```

## unloadFont()

**機能:**

独自のフォントの使用を終えます

**構文:**

<mark>unloadFont();</mark>

**引数:**

なし

**使用例:**

```clike
#include <M5Stack.h>

M5.Lcd.unloadFont();
```

## fontsLoaded()

**機能:**

独自のフォントを読み込んでいるかを返します

**構文:**

<mark>fontsLoaded();</mark>

**引数:**

なし

**戻り値:**

|値   |説明        |
|--   |--          |
|true |読み込み済み|
|false|未読み込み  |

**使用例:**

```clike
#include <M5Stack.h>

if(M5.Lcd.unloadFont()){
	M5.Lcd.unloadFont();
}
```


## drawString()

**機能:**

文字を描画します。

**構文:**

<mark>drawString(const char *string, int32_t poX, int32_t poY, uint8_t font);</mark>

<mark>drawString(const char *string, int32_t poX, int32_t poY);</mark>

<mark>drawString(const String& string, int32_t poX, int32_t poY, uint8_t font);</mark>

<mark>drawString(const String& string, int32_t poX, int32_t poY);</mark>


**引数:**


| 引数 | 型 | 説明 |  
| --- | --- | -- |
| poX | int32_t | 座標X（左上)  |
| poY | int32_t | 座標Y（左上)  |
| string | const char * /  String &| 文字列 |
| font  | uint8_t | 読み込んだフォントを使うなら 1   |

**戻り値:**

なし



## printf()

**機能:**

指定の文字列を描画します。

**構文:**

<mark>printf("書式指定",arg1...);</mark>

**情報:**

書式指定は通常のC言語フォーマットに沿った指定ができます。

**使用例:**

```clike
#include <M5Stack.h>

int a=1;
M5.begin();
M5.Lcd.printf("A=%d",a);
```

## print()

**機能:**

指定の文字列を描画します。

**構文:**

<mark>print("表示する文字列");</mark>

**使用例:**

```clike
#include <M5Stack.h>

M5.begin();
M5.Lcd.print("this is a print text function");
```

## 使用例 {docsify-ignore}

```clike
#include <M5Stack.h>

M5.begin();

M5.Lcd.fillScreen(BLACK) #set the default background color
M5.Lcd.drawLine(0, 0, WHITE);
M5.Lcd.drawTriangle(22, 22, 69, 98, 51, 22, RED);
M5.Lcd.fillTriangle(122, 122, 169, 198, 151, 182, RED);
M5.Lcd.drawRect(180, 12, 122, 10, BLUE);
M5.Lcd.fillRect(180, 30, 122, 10, BLUE);
M5.Lcd.drawRoundRect(180, 50, 122, 10, 4, BLUE);
M5.Lcd.fillRoundRect(180, 70, 122, 10, 4, BLUE);
M5.Lcd.print("this is a print text function");
```

<!-- ## <mark>lcd.setRotation(degree)</mark>

**画面全体の回転角度を設定します。**

| パラメータ | 説明 |
|:---|:---|
| degree   | 回転角度 |

**使用例**

```clike
lcd.setRotation(90)
```

---

## <mark>lcd.setColor(color [, background_color])</mark>

**テキストの色と背景色を設定します。**

| パラメータ | 説明 |
| :--- | :--- |
| color | テキストの色 |
| background_color| テキストの背景色 |

**使用例**

```clike
lcd.setColor(lcd.RED)
lcd.setColor(lcd.ORANGE, lcd.DARKCYAN)
```

---

## <mark>lcd.fillScreen(color)</mark>

**画面全体を指定した色で塗りつぶします。**

| パラメータ | 説明 |
|:--- | :--- |
| color | 塗りつぶしの色 |

**使用例**

```clike
lcd.fillScreen(lcd.RED)
```

---

## <mark>lcd.drawPixel(x, y [,color])</mark>

**(x,y)の位置に点（ピクセル）を描画します。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x | 点のx座標 |
| y | 点のy座標 |
| color | 点の色 |

**使用例**

```clike
lcd.drawPixel(22, 22, lcd.RED)
```

---

## <mark>lcd.drawLine(x, y, x1, y1 [,color])</mark>

**点(x,y) から 点(x1,y1) へ直線を描画します。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x | 線の始点のx座標 |
| y | 線の始点のy座標 |
| x1 | 線の終点のx1座標 |
| y1 | 線の終点のy1座標 |
| color | 線の色 |

**使用例**

```clike
lcd.drawLine(0, 0, 12, 12, lcd.WHITE)
```

---

## <mark>lcd.drawTriangle(x, y, x1, y1, x2, y2 [,color])</mark>

**3つの頂点 (x,y), (x1,y1), (x2,y2) を持つ三角形を描画します。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x  | 三角形の頂点0のx座標 |
| y  | 三角形の頂点0のy座標 |
| x1 | 三角形の頂点1のx座標 |
| y1 | 三角形の頂点1のy座標 |
| x2 | 三角形の頂点2のx座標 |
| y2 | 三角形の頂点2のy座標 |
| color | 三角形の線の色 |

**使用例**

```clike
lcd.drawTriangle(22, 22, 69, 98, 51, 22, lcd.RED)
```

---

## <mark>lcd.fillTriangle(x, y, x1, y1, x2, y2 [,color])</mark>

**3つの頂点 (x,y), (x1,y1), (x2,y2) を持つ三角形を塗りつぶします。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x  | 三角形の頂点0のx座標 |
| y  | 三角形の頂点0のy座標 |
| x1 | 三角形の頂点1のx座標 |
| y1 | 三角形の頂点1のy座標 |
| x2 | 三角形の頂点2のx座標 |
| y2 | 三角形の頂点2のy座標 |
| color | 三角形の色 |

**使用例**

```clike
lcd.fillTriangle(122, 122, 169, 198, 151, 182, lcd.RED)
```

---

## <mark>lcd.drawRect(x, y, w, h, [,color])</mark>

**左上の点(x,y)と幅と高さを指定して、四角形を描画します。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x  | 四角形の左上の頂点のx座標 |
| y  | 四角形の左上の頂点のy座標 |
| w | 四角形の幅 |
| h | 四角形の高さ |
| color | 四角形の線の色 |

**使用例**

```clike
lcd.drawRect(180, 12, 122, 10, lcd.BLUE)
```

---

## <mark>lcd.drawRoundRect(x, y, w, h, r [,color])</mark>

**左上の点(x,y)と幅と高さを指定して、かど丸の四角形を描画します。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x | 四角形の左上の頂点のx座標 |
| y | 四角形の左上の頂点のy座標 |
| w | 四角形の幅 |
| h | 四角形の高さ |
| r | コーナー半径 |
| color | 四角形の線の色 |

**使用例**

```clike
lcd.fillRoundRect(180, 70, 122, 10, 4, lcd.BLUE)
```

---

## <mark>lcd.print(‘text’, [x, y])</mark>

**位置(x,y)にテキストを表示します。**

| パラメータ | 説明 |
| :--- | :--- |
| text | 表示するテキスト |
| x | テキストを表示する位置のx座標 |
| y | テキストを表示する位置のy座標 |

**使用例**

```clike
lcd.print('this is a print text function', 80, 80)
```

---

## <mark>lcd.clear([color])</mark>

**デフォルトの背景色、または指定の色で画面を塗りつぶします。**

| パラメータ | 説明 |
| :--- | :--- |
| color | 塗りつぶしの色 |

**使用例**

```clike
lcd.clear(lcd.WHITE)
```

---

## 使い方

```clike
from machine import SPI, Pin
from display import LCD

spi = SPI(1, baudrate=32000000, mosi=Pin(23), miso=Pin(19), sck=Pin(18))

lcd = LCD(spi = spi)  # lcd 初期化
lcd.fillScreen(lcd.BLACK)  # デフォルトの背景色を設定

lcd.drawLine(0, 0, lcd.WHITE)
lcd.drawTriangle(22, 22, 69, 98, 51, 22, lcd.RED)
lcd.fillTriangle(122, 122, 169, 198, 151, 182, lcd.RED)
lcd.drawCircle(180, 180, 10, lcd.BLUE)
lcd.fillcircle(100, 100, 10, lcd.BLUE)
lcd.drawRect(180, 12, 122, 10, lcd.BLUE)
lcd.fillRect(180, 30, 122, 10, lcd.BLUE)
lcd.drawRoundRect(180, 50, 122, 10, 4, lcd.BLUE)
lcd.fillRoundRect(180, 70, 122, 10, 4, lcd.BLUE)
lcd.print('this is a print text function', 80, 80)
``` -->
