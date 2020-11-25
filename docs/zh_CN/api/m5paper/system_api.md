# System & Button & SHT30 & POWER & RTC

## begin()

**函数原型：**

`void begin(bool touchEnable = true, bool SDEnable = true, bool SerialEnable = true, bool BatteryADCEnable = true, bool I2CEnable = false);`

**功能：初始化触摸屏 ，TF Card , UART , 电池ADC读取 ，I2C**

**例程**

```arduino
#include <M5EPD.h>

void setup() {
  M5.begin(true,true,true,true,true);
}
```

## Button类

**功能：检测设备按键状态**

```
    Button(uint8_t pin, uint8_t invert, uint32_t dbTime);
    uint8_t read();
    uint8_t isPressed();
    uint8_t isReleased();
    uint8_t wasPressed();
    uint8_t wasReleased();
    uint8_t pressedFor(uint32_t ms);
    uint8_t releasedFor(uint32_t ms);
    uint8_t wasReleasefor(uint32_t ms);
    uint32_t lastChange();

```

## update()

**函数原型：**

`void update();`

**功能：刷新设备按键状态**


**例程：**

```arduino

if( M5.BtnL.wasPressed())
{
  Serial.printf("BtnL wasPressed!");
}
M5.update();

```

## SHT30

**功能：读取SHT30检测到的温湿度**

```
    float GetTemperature(TemperatureScale Degree = Cel);
    float GetRelHumidity();
    float GetAbsHumidity(AbsHumidityScale Scale = Torr);
```

**刷新检测数据(需要调用该API后才能获取新的检测数值)**

`void UpdateData();`

**例程：**

```arduino
#include <M5EPD.h>

char temStr[10];
char humStr[10];

float tem;
float hum;

M5EPD_Canvas canvas(&M5.EPD);
void setup()
{
    M5.begin();
    M5.SHT30.Begin();
    M5.EPD.SetRotation(90);
    M5.EPD.Clear(true);
    canvas.createCanvas(400, 300);
    canvas.setTextSize(2);
}

void loop()
{
    
    M5.SHT30.UpdateData();
    tem = M5.SHT30.GetTemperature();
    hum = M5.SHT30.GetRelHumidity();
    Serial.printf("Temperatura: %2.2f*C  Humedad: %0.2f%%\r\n", tem, hum);
    dtostrf(tem, 2, 2 , temStr);
    dtostrf(hum, 2, 2 , humStr);
    canvas.drawString("Temperatura:" + String(temStr) + "*C", 100, 100);
    canvas.drawString("Humedad:" + String(humStr) , 100, 200);
    canvas.pushCanvas(0,300,UPDATE_MODE_A2);
    delay(1000);
}

```

## 相关引脚定义

```
#define M5EPD_MAIN_PWR_PIN 2
#define M5EPD_CS_PIN 15
#define M5EPD_SCK_PIN 14
#define M5EPD_MOSI_PIN 12
#define M5EPD_BUSY_PIN 27
#define M5EPD_MISO_PIN 13
#define M5EPD_EXT_PWR_EN_PIN 5
#define M5EPD_EPD_PWR_EN_PIN 23
#define M5EPD_KEY_RIGHT_PIN 39
#define M5EPD_KEY_PUSH_PIN 38
#define M5EPD_KEY_LEFT_PIN 37
#define M5EPD_BAT_VOL_PIN 35
#define M5EPD_PORTC_W_PIN 19
#define M5EPD_PORTC_Y_PIN 18
#define M5EPD_PORTB_W_PIN 33
#define M5EPD_PORTB_Y_PIN 26
#define M5EPD_PORTA_W_PIN 32
#define M5EPD_PORTA_Y_PIN 25
```

## Power

- **功能：启用拓展端口电源**
- `void enableEXTPower() { digitalWrite(M5EPD_EXT_PWR_EN_PIN, 1); }`

- **功能：关闭拓展端口电源**
- `void disableEXTPower() { digitalWrite(M5EPD_EXT_PWR_EN_PIN, 0); }`

- **功能：启用墨水屏电源**
- `void enableEPDPower() { digitalWrite(M5EPD_EPD_PWR_EN_PIN, 1); }`

- **功能：关闭墨水屏电源**
- `void disableEPDPower() { digitalWrite(M5EPD_EPD_PWR_EN_PIN, 0); }`

- **功能：启用主电源**
- `void enableMainPower() { digitalWrite(M5EPD_MAIN_PWR_PIN, 1); }`

- **功能：关闭主电源**
- `void disableMainPower() { digitalWrite(M5EPD_MAIN_PWR_PIN, 0); }`

- **功能：初始化电池ADC检测**
- `void BatteryADCBegin();`

- **功能：读取电池电压原生ADC值**
- `uint32_t getBatteryRaw();`

- **功能：读取电池电压**
- `uint32_t getBatteryVoltage();`

## RTC

?>RTC相关函数使用前请使用`M5.RTC.begin();`进行初始化

```
typedef struct RTC_Time
{
    int8_t hour;
    int8_t min;
    int8_t sec;
    RTC_Time() : hour(), min(), sec() {}
    RTC_Time(int8_t h, int8_t m, int8_t s) : hour(h), min(m), sec(s) {}
} rtc_time_t;

typedef struct RTC_Date
{
    int8_t week;
    int8_t mon;
    int8_t day;
    int16_t year;
    RTC_Date() : week(), mon(), day(), year() {}
    RTC_Date(int8_t w, int8_t m, int8_t d, int16_t y) : week(w), mon(m), day(d), year(y) {}
} rtc_date_t;

```

## setTime()

**函数原型:**

`void setTime(rtc_time_t *time);`

**函数参数:**

设置结构体变量时间

## getTime()

**函数原型:**

`void getTime(rtc_time_t *time);`

**函数参数:**

获取结构体时间

## setDate()

**函数原型:**

`void setDate(rtc_date_t *date);`

**函数参数:**

设置结构体变量日期

## getDate()

**函数原型:**

`void getDate(rtc_date_t *date);`

**函数参数:**

获取结构体变量日期

**使用示例:**


```
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);

rtc_time_t RTCtime;
rtc_date_t RTCDate;

char timeStrbuff[64];

void flushTime(){
    M5.RTC.getTime(&RTCtime);
    M5.RTC.getDate(&RTCDate);
    
    sprintf(timeStrbuff,"%d/%02d/%02d %02d:%02d:%02d",
                        RTCDate.year,RTCDate.mon,RTCDate.day,
                        RTCtime.hour,RTCtime.min,RTCtime.sec);
                                         
    canvas.drawString(timeStrbuff, 0, 0);
    canvas.pushCanvas(100,200,UPDATE_MODE_DU4);
}

void setupTime(){
  
  RTCtime.hour = 23;
  RTCtime.min = 33;
  RTCtime.sec = 33;
  M5.RTC.setTime(&RTCtime);
  
  RTCDate.year = 2020;
  RTCDate.mon = 11;
  RTCDate.day = 27;
  M5.RTC.setDate(&RTCDate);
}

void setup() {

    M5.begin();
    M5.EPD.SetRotation(90);
    M5.EPD.Clear(true);
    M5.RTC.begin();
    canvas.createCanvas(400, 300);
    canvas.setTextSize(3);
    setupTime();
}

void loop() {
  flushTime();
  delay(1000);
}
```


## shutdown()

### 函数重载1:

关闭电源，再次启动需要通过PWR按键唤醒

`void shutdown();`

### 函数重载2:

关闭电源，根据传入的延时秒数，在延时结束后通过RTC唤醒设备。

`int shutdown( int seconds );`

### 函数重载3:

关闭电源，传入指定了某个时间点的RTC时间结构体，当符合该时间的`时`,`分`,`秒`的时候通过RTC唤醒设备。

`int shutdown( const rtc_time_t &RTC_TimeStruct);`

### 函数重载4:

关闭电源，传入指定了某个时间点的RTC时间结构体，当同时符合该时间点的`周数`,`天数`,`时间`的时通过RTC唤醒设备。

`int shutdown( const rtc_date_t &RTC_DateStruct, const rtc_time_t &RTC_TimeStruct);`


**使用示例:**

```
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);

void setup()
{
    M5.begin();
    M5.EPD.SetRotation(90);
    M5.TP.SetRotation(90);
    M5.EPD.Clear(true);
    M5.RTC.begin();
    canvas.createCanvas(540, 960);
    canvas.setTextSize(3);
    canvas.drawString("Press PWR Btn for sleep!", 45, 350);
    canvas.drawString("after 5 sec wakeup!", 70, 450);
    canvas.pushCanvas(0,0,UPDATE_MODE_DU4);
    
    
}

void loop()
{
    if(M5.BtnP.wasPressed()){
        
        canvas.drawString("I'm going to sleep.zzzZZZ~", 45, 550);
        canvas.pushCanvas(0,0,UPDATE_MODE_DU4);
        delay(1000);
        M5.shutdown(5);
    }
    M5.update();
    delay(100);
}
```