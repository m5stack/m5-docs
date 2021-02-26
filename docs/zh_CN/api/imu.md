# IMU

*IMU根据主机配置不同自动调用不同的IMU型号*

## Init()

**函数原型：**

`int Init(void);`

**功能：初始化 IMU 芯片。**

**例程：**
```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
  int x = M5.IMU.Init(); //return 0 is ok, return -1 is unknow
  Serial.println(x); 
}
void loop() {}
```

## getGyroData()

**函数原型：**

`void getGyroData(float *gx, float *gy, float *gz);`

**功能：获取 IMU 芯片的三轴陀螺仪数据。**

**例程：**
```clike
#include <M5StickC.h>

float gyroX, gyroY, gyroZ;

void setup() {
  M5.begin();
  M5.IMU.Init();
}
void loop() {
  M5.IMU.getGyroData(&gyroX, &gyroY, &gyroZ);
  M5.Lcd.setCursor(0, 30);
  M5.Lcd.printf("X:%7.2f\nY:%7.2f\nZ:%7.2f ", gyroX, gyroY, gyroZ);
  delay(500);
}
```

## getAccelData()

**函数原型：**

`void getAccelData(float *ax, float *ay, float *az);`

**功能：获取 IMU 芯片的三轴加速度计数据。**

**例程：**
```clike
#include <M5StickC.h>

float accX, accY, accZ;

void setup() {
  M5.begin();
  M5.IMU.Init();
}
void loop() {
  M5.IMU.getAccelData(&accX, &accY, &accZ);
  M5.Lcd.setCursor(0, 45);
  M5.Lcd.printf("X:%5.2f\nY:%5.2f\nZ:%5.2f ", accX, accY, accZ);
  delay(500);
}
```

## getAhrsData()

**函数原型：**

`void getAccelData(float *pitch, float *roll, float *yaw);`

**功能：获取 IMU 芯片的姿态。**

**例程：**
```clike
#include <M5StickC.h>

float pitch, roll, yaw;

void setup() {
  M5.begin();
  M5.IMU.Init();
}
void loop() {
  M5.IMU.getAhrsData(&pitch, &roll, &yaw);
  M5.Lcd.setCursor(0, 45);
  M5.Lcd.printf("X:%5.2f\nY:%5.2f\nZ:%5.2f ", pitch, roll, yaw);
  delay(500);
}
```

## getTempData()

**函数原型：**

`void getTempData(float *t);`

**功能：获取 IMU 芯片的温度。**

**例程：**
```clike
#include <M5StickC.h>

float temp;

void setup() {
  M5.begin();
  M5.IMU.Init();
}
void loop() {
  M5.IMU.getTempData(&temp);
  M5.Lcd.setCursor(0, 45);
  M5.Lcd.printf("Temperature : %.2f C", temp);
  delay(500);
}
```