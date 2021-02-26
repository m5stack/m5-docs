# TF card

## begin()

**説明:**

TFカード機能が使用可能になります。

**構文:**

<mark>boolean begin(uint8_t cspin);</mark>

| 引数 | 説明 | 型 |
| --- | --- | -- |
| cspin | chip select line (defaults SS line of SPI bus) | uint8_t |

**使用例:**

```clike
#include <M5Stack.h>

void setup() {
  SD.begin();
}
```

## open()

**説明:**

ファイルを開きます。

**構文:**

<mark>File open(const char *filename, uint8_t mode = FILE_READ);</mark>

| 引数 | 説明 | 型 |
| --- | --- | -- |
| filepath | path to file | const char * |
| mode | read / write / rw (optional) | uint8_t |

**使用例:**

```clike
/*
M5にTFカードのhello.txtの中身を表示する。
*/
#include <M5Stack.h>

void setup() {
  M5.begin();
  if (!SD.begin()) {
    M5.Lcd.println("Card failed, or not present");
    while (1);
  }
  Serial.println("TF card initialized.");
  File f = SD.open("/hello.txt", FILE_READ);
  if (f) {
    M5.Lcd.print(f.read());
    f.close();
  } else {
    M5.Lcd.println("open error hello.txt");
  }
}

void loop() {
}
```
