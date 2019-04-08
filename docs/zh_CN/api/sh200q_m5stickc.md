# SH200Q

*SH200Q 是一款 6 轴 IMU 芯片，包括测量 X, Y, Z 三个方向角速度值的陀螺仪和测量 X, Y, Z 三个方向加速度的加速度计。*

## Init()

**函数原型：**

<mark>void Init();</mark>

**功能：初始化 SH200Q 芯片。**

**例程：**
```arduino
#include <M5StackC.h>

void setup(){
    uint8_t c;

    M5.begin();
    Serial.begin(115200);

    M5.IMU.Init();
    IMU.readByte(SH200I_ADDRESS, SH200I_WHOAMI, 1, c);
    Serial.print("SH200Q "); Serial.print("I AM "); Serial.print(c, HEX);
}
```

## getGyroData()

**函数原型：**

<mark>void getGyroData(int16_t* gx, int16_t* gy, int16_t* gz);</mark>

**功能：获取 SH200Q 芯片的三轴陀螺仪数据。**

**例程：**
```arduino
#include <M5StackC.h>

int16_t gyroX, gyroY, gyroZ;

void setup(){
    uint8_t c;

    M5.begin();
    Serial.begin(115200);

    M5.IMU.Init();
}

void loop(){
    M5.IMU.getGyroData(&gyroX,&gyroY,&gyroZ);
    
    M5.Lcd.setCursor(0, 30);
    M5.Lcd.printf("%.2f   %.2f   %.2f   ", ((float) gyroX) * M5.IMU.gRes, ((float) gyroY) * M5.IMU.gRes,((float)   gyroZ) * M5.IMU.gRes);
    M5.Lcd.setCursor(140, 30);
    M5.Lcd.print("mg");
    delay(500);
}
```

## getAccelData()

**函数原型：**

<mark>void getAccelData(int16_t* ax, int16_t* ay, int16_t* az);</mark>

**功能：获取 SH200Q 芯片的三轴加速度计数据。**

**例程：**
```arduino
#include <M5StackC.h>

int16_t accX, accY, accZ;

void setup(){
    uint8_t c;

    M5.begin();
    Serial.begin(115200);

    M5.IMU.Init();
}

void loop(){
    M5.IMU.getAccelData(&accX,&accY,&accZ);
    
    M5.Lcd.setCursor(0, 45);
    M5.Lcd.printf("%.2f   %.2f   %.2f   ",((float) accX) * M5.IMU.aRes,((float) accY) * M5.IMU.aRes, ((float) accZ) * M5.IMU.aRes);
    M5.Lcd.setCursor(140, 45);
    M5.Lcd.print("o/s");
    delay(500);
}
```