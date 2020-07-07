# IMU

*IMU automatically call different IMU models according to different configurations*

## Init()

**Syntax:**

<mark>int Init(void);</mark>

**Description：initialize IMU**

**Example：**
```arduino
#include <M5StickC.h>

void setup() {
  M5.begin();
  int x = M5.IMU.Init(); //return 0 is ok, return -1 is unknow
  Serial.println(x); 
}
void loop() {}
```

## getGyroData()

**Syntax:**

<mark>void getGyroData(float *gx, float *gy, float *gz);</mark>

**Description：Obtain the three-axis gyroscope data of the IMU chip.**

**Example：**
```arduino
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

**Syntax:**

<mark>void getAccelData(float *ax, float *ay, float *az);</mark>

**Description：Obtain the three-axis accelerometer data of the IMU chip.**

**Example：**
```arduino
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

**Syntax：**

<mark>void getAhrsData(float *pitch, float *roll, float *yaw);</mark>

**Description：Get the attitude of the IMU chip.**

**Example：**
```arduino
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

**Syntax：**

<mark>void getTempData(float *t);</mark>

**Description：Get the temperature of the IMU chip.**

**Example：**
```arduino
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