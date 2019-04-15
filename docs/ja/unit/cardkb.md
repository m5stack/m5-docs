# Unit CardKB {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_cardkb_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_cardkb_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-CardKB-Mini-Keyboard-Unit-MEGA328P-GROVE-I2C-USB-ISP-Programmer-for-ESP32-Arduino-Development/32963872643.html)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>CardKB</mark>** は、小型のQWERTYフルキーボードです。キーを組み合わせる(Sym+Key, Shift+Key, Fn+Key)ことで、よりたくさんの値を出力することが可能です。M5Coreとの通信にはGROVE A ポート(I2C)を利用します。 I2Cアドレスは**0x5F**です。

**1. ボタンコンビネーション概要**

* **どれかひとつのキー**を押すと1番目にキーに割り当てられた値を出力します。(文字ボタンはデフォルトでは小文字を出力します) 例えば"Q"キーを押すと、小文字の"q"が出力されます。

* **Sym+キー**を押すと、2番目に割り当てられた値を出力します。 例えば"Sym"キーを押した後に、"Q"キーを押すと"#"が出力されます。"Sym"キーを素早くダブルクリックすると、"Sym"キーの機能がロックされ、以降はすべてのキーの2番目に割り当てられた値が出力されます。

* **Shift+キー**を押すと、キーに割り当てられた大文字を出力します。 例えば"Shift"キーを押した後に、"Q"キーを押すと、大文字の"Q"が出力されます。"Shift"キーを素早くダブルクリックすると"Shift"キーの機能がロックされ、以降はすべてのキーが大文字で表示されるようになります。

* **Fn+key(カスタム機能キー)**を押すと3番目に割り当てられた値を出力します。Fnを押した時の反応をカスタマイズすることができます。

<img src="assets/img/product_pics/unit/unit_cardkb_03.png">

## 特徴

- GROVEインターフェース、I2C通信

- フルキーボード機能、複数キーコンビネーション

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[ATmega328pのファームウェア](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/firmware_328p/CardKeyBoard)**

## サンプルコード

### 1. Arduino IDE

*完全なサンプルコードが欲しい方は[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/Arduino)。*

```arduino
#include <Wire.h>
#include <M5Stack.h>

#define CARDKB_ADDR 0x5F

void setup()
{
  M5.begin();
  Serial.begin(115200);
  Wire.begin();
  pinMode(5, INPUT);
  digitalWrite(5, HIGH);
  M5.Lcd.fillScreen(BLACK);
  M5.Lcd.setCursor(1, 10);
  M5.Lcd.setTextColor(YELLOW);
  M5.Lcd.setTextSize(2);
  M5.Lcd.printf("I2C Address: 0x5F\n");
  M5.Lcd.printf(">>");
}
void loop()
{
  Wire.requestFrom(CARDKB_ADDR, 1);
  while (Wire.available())
  {
    char c = Wire.read(); // 受信データ1バイトを文字に
    if (c != 0)
    {
      M5.Lcd.printf("%c", c);
      Serial.println(c, HEX);
     // M5.Speaker.beep();
    }
  }
}
```

<img src="assets/img/product_pics/unit/unit_example/CARDKB/example_unit_cardkb_01.png" width="80%" height="80%">

### ピンマップ

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>CardKB</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 関連動画

- **CardKB デモ - 01**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20Cardkb.mp4" type="video/mp4">
</video>