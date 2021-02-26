# System & Speaker & AXP192 & RTC

## begin()

**函数原型：**

`void begin(bool LCDEnable = true, bool SDEnable = true, bool SerialEnable = true, bool I2CEnable = false);`

**功能：初始化触摸屏 ，TF Card , UART ，I2C**

**例程**

```clike
#include <M5Tough.h>

void setup() {
  M5.begin(true,true,true,true);
}
```

## Speaker类

**功能：驱动I2S扬声器**

**函数原型：**

`int playMidi(const uint8_t *data);`

**功能：播放Midi文件**


**函数原型：**

`size_t playRAW( const uint8_t* __audioPtr, size_t __size, bool __modal = false, bool freeFlag = true,TickType_t __ticksToWait = portMAX_DELAY );`

**功能：播放PCM数据**

**函数原型：**

`size_t playBeep( int __freq = 2000, int __timems = 1000,int __maxval = 10000, bool __modal = false );`

**功能：播放指定频率声音**

  modal 是否异步
  freeFlag 是否释放内存
  __ticksToWait 允许阻塞播放最大时长

## update()

**函数原型：**

`void update();`

**功能：刷新设备触屏状态**


## RTC

>在`M5.begin()`初始化中，默认调用`Rtc.begin();`对RTC进行了初始化. 你可以用该实例中的API设置和读取RTC时钟数据。

```clike
typedef struct
{
  uint8_t Hours;
  uint8_t Minutes;
  uint8_t Seconds;
}RTC_TimeTypeDef;


typedef struct
{
  uint8_t WeekDay;
  uint8_t Month;
  uint8_t Date;
  uint16_t Year;
}RTC_DateTypeDef;

```

## SetTime()

**函数原型:**

`void SetTime(RTC_TimeTypeDef* RTC_TimeStruct);`

**函数参数:**

设置结构体变量时间

## GetTime()

**函数原型:**

`void GetTime(RTC_TimeTypeDef* RTC_TimeStruct);`

**函数参数:**

获取结构体时间

## SetData()

**函数原型:**

`void SetData(RTC_DateTypeDef* RTC_DateStruct);`

**函数参数:**

设置结构体变量日期

## GetData()

**函数原型:**

`vvoid GetData(RTC_DateTypeDef* RTC_DateStruct); `

**函数参数:**

获取结构体变量日期

**使用示例:**


```clike
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

