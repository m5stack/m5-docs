# TF 卡

## begin()

**函数原型：**

`begin(cspin);`

**功能：TF 卡初始化。**

| 参数 | 描述 |
| --- | --- |
| cspin | TF 的片选引脚 (默认是 SPI 的 SS 引脚)，可选 |

**例程**
```clike
#include <M5Stack.h>

void setup() {
  SD.begin();
}
```

## open()

**函数原型：**

`File open(const char *filepath, uint8_t mode;`

**功能：以指定模式打开指定文件。返回值：文件句柄。**

| 参数 | 描述 |
| --- | --- |
| filepath | 文件路径 |
| mode | 打开模式 |

**例程**
```clike
/*
    提前通过 PC 将 datalog.txt 文件拷贝到 TF 卡内
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
