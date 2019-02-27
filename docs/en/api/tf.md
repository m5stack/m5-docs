# TF 卡

## begin()

**函数原型：**

<mark>begin(cspin);</mark>

**功能：TF 卡初始化。**

| 参数 | 描述 |
| --- | --- |
| cspin | TF 的片选引脚 (默认是 SPI 的 SS 引脚)，可选 |

**例程**
```arduino
#include <M5Stack.h>

M5.begin();

SD.begin();
```

## open()

**函数原型：**

<mark>File open(const char *filepath, uint8_t mode;</mark>

**功能：以指定模式打开指定文件。返回值：文件句柄。**

| 参数 | 描述 |
| --- | --- |
| filepath | 文件路径 |
| mode | 打开模式 |

**例程**
```arduino
/*
    提前通过 PC 将 datalog.txt 文件拷贝到 TF 卡内
*/
#include <M5Stack.h>

void setup(){
    M5.begin();
    Serial.begin(115200);
    if (!SD.begin(chipSelect)) {
        Serial.println("Card failed, or not present");
        while(1);
    }
    Serial.println("card initialized.");
    File dataFile = SD.open("/datalog.txt", FILE_WRITE);
    if (dataFile)
        Serial.println("open datalog.txt successfully");
    else
        Serial.println("error opening datalog.txt");
}

void loop(){

}
```
