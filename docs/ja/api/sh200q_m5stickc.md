# IMU(SH200Q）

*SH200Qは6自由度のIMUです。3軸(x, y, z)の角速度と加速度を取得することができます。*

## Init()

**説明**

SH200Qを初期化します。  

**構文：**

<mark>void Init();</mark>

**使用例：**

```arduino
#include <M5StickC.h>

void setup() {
  uint8_t c;
  M5.begin();
  M5.IMU.Init();
  M5.IMU.I2C_Read_NBytes(SH200I_ADDRESS, SH200I_WHOAMI, 1, &c);
  M5.Lcd.print("SH200Q I AM "); M5.Lcd.println(c, HEX);
}
void loop() {}
```

## getGyroData()

**説明：**

SH200Qのジャイロデータを取得します。  

**構文：**

<mark>void getGyroData(int16_t* gx, int16_t* gy, int16_t* gz);</mark>

**使用例：**

```arduino
#include <M5StickC.h>

int16_t gyroX, gyroY, gyroZ;

void setup() {
  M5.begin();
  M5.IMU.Init();
}
void loop() {
  M5.IMU.getGyroData(&gyroX, &gyroY, &gyroZ);
  M5.Lcd.setCursor(0, 30);
  M5.Lcd.printf("X:%7.2f\nY:%7.2f\nZ:%7.2f mg",
                ((float)gyroX) * M5.IMU.gRes,
                ((float)gyroY) * M5.IMU.gRes,
                ((float)gyroZ) * M5.IMU.gRes);
  delay(500);
}
```

## getAccelData()

**説明：**

SH200Qの加速度データを取得します。  

**構文：**

<mark>void getAccelData(int16_t* ax, int16_t* ay, int16_t* az);</mark>

**使用例：**

```arduino
#include <M5StickC.h>

int16_t accX, accY, accZ;

void setup() {
  M5.begin();
  M5.IMU.Init();
}
void loop() {
  M5.IMU.getAccelData(&accX, &accY, &accZ);
  M5.Lcd.setCursor(0, 45);
  M5.Lcd.printf("X:%5.2f\nY:%5.2f\nZ:%5.2f o/s",
                ((float)accX) * M5.IMU.aRes,
                ((float)accY) * M5.IMU.aRes,
                ((float)accZ) * M5.IMU.aRes);
  delay(500);
}
```