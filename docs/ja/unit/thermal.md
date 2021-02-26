# THERMAL ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_thermal.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_thermal_grove_a.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-New-Thermal-Camera-MLX90640-with-GROVE-I2C-Compatible-M5GO-FIRE-ESP32-Kit-Mini-Development/32918177644.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>THERMAL</mark>**ユニットはサーモパイルセンサー**MLX90640**を備えたサーモグラフィックカメラユニットです。出力解像度は32x24ピクセルです。遠くの物体の表面温度を±1.5°Cの精度で計測する事が可能です。

MLX90640赤外線(IR)センサーアレイは、高解像度と過酷な環境での使用に耐える信頼性を兼ね備え、高価なハイエンドサーマルイメージングカメラに代わる費用対効果の高い代替手段を提供します。マイクロボロメータの場合とは異なり、センサが頻繁な再較正を必要とせず、継続的なモニターが保証され、システムコストを削減することができます。

視野（FoV）オプションには、標準の55°x35°バージョンと最大7mまでの110°x75°の広角バージョンがあります。THERMALはBAAパッケージとも呼ばれる**110°×75°FoV**のバージョンを使用します。

Grove Aポートを介して、I2Cで値を取得できます。I2Cアドレスは**0x33**です。

<img src="assets/img/product_pics/unit/thermal/unit_thermal_05.png">

## 特徴

- 動作電圧: 3V ~ 3.6V
- 消費電流: 23mA
- 視野角: 55°x35°
- 測定可能範囲: -40°C ÷ 300°C （±1.5°C）
- 解像度: 32x24 pixels
- 動作温度: -40°C ~ 85°C
- LEGO 互換ホール

## パッケージ内容

- 1x THERMALユニット
- 1x Groveケーブル

## アプリケーション

- 高精度非接触温度測定器
- 侵入 / 移動検知
- サーモグラフィ

## 関連リンク

- [公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)
- [公式フォーラム](http://forum.m5stack.com/)
- Datasheet
  - [MLX90640](https://www.melexis.com/-/media/files/documents/datasheets/mlx90640-datasheet-melexis.pdf)

## サンプルコード

### 1. Arduino

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/THERMAL/Arduino)。*

```clike
/*
    MLX90640.ino
*/
#include <M5Stack.h>
#include <Wire.h>
#include "MLX90640_API.h"
#include "MLX90640_I2C_Driver.h"

// declaration
uint16_t eeMLX90640[832];//32 * 24 = 768
int SetRefreshRate;

// initialization
/* load system parameter */
MLX90640_DumpEE(MLX90640_address, eeMLX90640);
/* load extraction parameter */
MLX90640_ExtractParameters(eeMLX90640, &mlx90640);
SetRefreshRate = MLX90640_SetRefreshRate(0x33, 0x05);
M5.Lcd.fillScreen(TFT_BLACK);
infodisplay();

// display heat map
M5.update();
infodisplay();
interpolate_image(reversePixels,ROWS,COLS,dest_2d,\
                    INTERPOLATED_ROWS,INTERPOLATED_COLS);
```

<img src="assets/img/product_pics/unit/M5GO_Unit_thermal_03.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal_04.png" width="30%" height="30%">

## 回路図

<img src="assets/img/product_pics/unit/thermal_sch.JPG">

### ピンマップ

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>THERMAL Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 関連動画

**THERMALの作品**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/Infrared%20Thermal%20Imaging.mp4" type="video/mp4">
</video>