# ENV
__________________________

#### 功能说明

>单总线接口传感器，获取周围的温度、湿度、气压

><img src="/image/Units/ENV.png" width="40%"> 

>* __Get Pressure__
获取气压,单位为百帕(hpa)

>* __Get Temperature__
获取温度，显示小数点后两位

>* __Get Humidity__
获取湿度


#### 使用方法

>在屏幕上显示气压、温度、湿度

><img src="/image/Units/ENV_user.gif" width="70%"> 


# PIR
__________________________

#### 功能说明

>I/O类传感器，检测人体或动物发出的红外线信号

><img src="/image/Units/PIR.png" width="40%"> 

#### 使用方法

>检查是否有人靠近，有人靠近亮红灯

><img src="/image/Units/PIR_user.gif" width="70%"> 

# RGB LED
__________________________

#### 功能说明

>控制一定数量的彩色LED发光

><img src="/image/Units/RGB LED.png" width="40%"> 

>* __Set index RGB color__
设置指定序号的灯的颜色

>* __Set from to RGB color__
设置指定范围内灯的颜色

>* __Set from to R G B__
将指定范围内灯的颜色设置为自定义颜色

>* __Set all RGB color__
设置全部RGB灯的颜色

>* __Set brightness__
设置灯的亮度

>* __Set neopixel hexagon matrix in__
在HEX上设置图案并指定颜色

>* __et neopixel hexagon matrix in red green blue__
在HEX上设置图案并自定义颜色


#### 使用方法

> 绘制一个图案

><img src="/image/Units/RGB LED_user.gif" width="70%"> 


# Joystick
__________________________

#### 功能说明

>摇杆其实是一个可以自动复位的电位器，滑动不同的位移输出不同的电压信号

><img src="/image/Units/joystick.png" width="40%"> 

>* __Get X__
返回X轴的数据

>* __Get Y__
返回Y轴的数据

>* __Get is pressed__
返回按键的值

>* __Get Reverse X__
返回X轴反向数据

>* __Get Reverse Y__
返回Y轴反向数据

#### 使用方法

>通过摇杆方向控制RGB LED的颜色

><img src="/image/Units/joystick_user.gif" width="70%"> 

# MAKEY
__________________________

#### 功能说明

>简单的触摸应用，通过触摸不同的引脚，可以发出不同的音调和灯光

><img src="/image/Units/MAKEY.png" width="40%"> 

>* __Get value__
返回引脚值

>* __Get all value__
返回所有引脚值

#### 使用方法

>触摸不同引脚得到不同的值显示不同颜色

><img src="/image/Units/MAKEY_user.gif" width="70%"> 

# SERVO
________________________

#### 功能说明

>舵机是一种常见的驱动装置，它的旋转角度依靠脉冲控制

><img src="/image/Units/SERVO.png" width="40%"> 

>* __rotate to degree__
设置旋转角度

>* __write us__
设置脉冲时间

#### 使用方法

>控制舵机旋转90度

><img src="/image/Units/SERVO_user.gif" width="70%"> 

# WEIGHT
________________________

#### 功能说明

>HX711是一种为电子秤设计的高精度的AD转换芯片，通过读取电压值转化为相应的重量

><img src="/image/Units/WEIGHT.png" width="40%"> 

>* __return to zero__
归零

>* __Get weight__
返回重量

>* __Get raw data__
返回原始数据

#### 使用方法

>读取重量显示到屏幕，按下A键归零

><img src="/image/Units/WEIGHT_user.gif" width="70%"> 

# TRACE
________________________

#### 功能说明

>TRACE是小车巡线的常用传感器，通过接收反射光判断是否有黑线

><img src="/image/Units/TRACE.png" width="40%"> 

>* __Get analog value__
返回模拟量

>* __Get digital value__
返回数字量

>* __set limit should value__
设置限定值

#### 使用方法

>传感器接受到反射光发白光，没有接受到不发光

><img src="/image/Units/TRACE_user.gif" width="70%"> 


# BUTTON
________________________

#### 功能说明

>检测按键不同状态，执行相应操作

><img src="/image/Units/BUTTON.png" width="40%"> 

>* __Button wasPressed__
按键按下执行设定的函数

>* __obtain button wasPressed__
检查按键是否按下，执行中只获取一次

#### 使用方法

> 按键按下闪一次灯

><img src="/image/Units/BUTTON_user.gif" width="70%"> 


# Dual-BUTTON
________________________

#### 功能说明

>检测按键不同状态，执行相应操作

><img src="/image/Units/Dual-BUTTON.png" width="40%"> 

>* __Dual_Button Red wasPressed__
红色按键按下执行设定的函数

>* __obtain dual button Red wasPressed__
检查红色按键是否按下，执行中只获取一次

#### 使用方法

> 红色按键按下亮红灯，蓝色按键按下灭灯

><img src="/image/Units/Dual-BUTTON_user.gif" width="70%"> 


# RGB
________________________

#### 功能说明

>RGB三色led指示灯

><img src="/image/Units/RGB.png" width="40%"> 

>* __Set index RGB color__
指定某个序号灯的颜色

>* __Set form to RGB color__
设置多个灯的颜色

>* __Set all RGB color__
设置所有RGB的颜色

>* __Set brightness__
设置RGB的亮度

#### 使用方法

> 设置灯的颜色

><img src="/image/Units/RGB_user.gif" width="70%"> 


# REALY
________________________

#### 功能说明

>通过控制继电器开合达到弱电控制强电的目的

><img src="/image/Units/RELAY.png" width="40%"> 

>* __set COM connect ON__
控制继电器闭合

>* __set COM connect OFF__
控制继电器断开

#### 使用方法

> 按下A按键继电器闭合，按下B按键继电器断开

><img src="/image/Units/RELAY_user.gif" width="70%"> 


# ADC
________________________

#### 功能说明

>直接读取AD数值

><img src="/image/Units/ADC.png" width="40%"> 

>* __read voltage__
读取电压

#### 使用方法

> 显示AD数值

><img src="/image/Units/ADC_user.gif" width="70%"> 


# DAC
________________________

#### 功能说明

>进行DA转换并输出电压，最大3.7V

><img src="/image/Units/DAC.png" width="40%"> 

>* __output voltage save__
输出电压0-3.3，并确认是否保存到EEPROM

>* __output voltage with raw data save__
输出电压0-4096，并确认是否保存到EEPROM

#### 使用方法

> 输出电压

><img src="/image/Units/DAC_user.gif" width="70%"> 


# NCIR
________________________

#### 功能说明

>非接触式温度测量，直接读取数据

><img src="/image/Units/NCIR.png" width="40%"> 

>* __ncir read__
读取温度

#### 使用方法

> 屏幕显示温度

><img src="/image/Units/NCIR_user.gif" width="70%"> 


# IR
________________________

#### 功能说明

>发射或者接受红外遥控信号

><img src="/image/Units/IR.png" width="40%"> 

>* __state__
接受到红外信号返回1

>* __set on__
发送红外信号

>* __set off__
停止发送

#### 使用方法

> 接收红外信号亮红灯

><img src="/image/Units/IR_user.gif" width="70%"> 


# EXT.IO
________________________

#### 功能说明

>通过I2C拓展IO接口，读写电平操作

><img src="/image/Units/EXT.IO.png" width="40%"> 

>* __set mode__
全部引脚设置为输入或输出模式

>* __set pin mode__
单独设置输入或输出

>* __digitWrite Port__
控制引脚状态,每个引脚对应1位

>* __digitWrite Pin__
单独控制引脚状态

>* __digitRead Pin__
读取指定引脚状态

>* __digitRead Port__
读取全部引脚状态

#### 使用方法

> 清除所有引脚状态，设置2引脚高电平

><img src="/image/Units/EXT.IO_user.gif" width="70%"> 


# ANGLE
________________________

#### 功能说明

>读取旋钮电位器的输出数值

><img src="/image/Units/ANGLE.png" width="40%"> 

>* __Get value__
返回电位器数值

#### 使用方法

> 控制RGB LED的亮度

><img src="/image/Units/ANGLE_user.gif" width="70%"> 

# LIGHT
________________________

#### 功能说明

> 返回光线测量值

><img src="/image/Units/LIGHT.png" width="40%"> 

>* __Get Analog value__
返回模拟值

>* __Get Digital value__
返回数字值

#### 使用方法

> 作为开关控制LED亮灭

><img src="/image/Units/LIGHT_user.gif" width="70%"> 


# EARTH
________________________

#### 功能说明

> 测量土壤湿度

><img src="/image/Units/EARTH.png" width="40%"> 

>* __Get Analog value__
返回模拟值

>* __Get Digital value__
返回数字值

#### 使用方法

> 土壤干燥时LED报警

><img src="/image/Units/EARTH_user.gif" width="70%"> 


# ToF
________________________

#### 功能说明

> 测量距离最大量程2米

><img src="/image/Units/ToF.png" width="40%"> 

>* __Get distance__
返回距离mm

#### 使用方法

> 显示距离

><img src="/image/Units/ToF_user.gif" width="70%"> 


# COLOR
________________________

#### 功能说明

> 识别颜色，返回RGB数值

><img src="/image/Units/COLOR.png" width="40%"> 

>* __Get rawData__
返回原始数据

>* __Get red__
返回红色值

>* __Get green__
返回绿色值

>* __Get blue__
返回蓝色值

#### 使用方法

> 检测颜色显示对应颜色的RGB灯

><img src="/image/Units/COLOR_user.gif" width="70%"> 


# RFID
________________________

#### 功能说明

> 识别RFID芯片信息

><img src="/image/Units/RFID.png" width="40%"> 

>* __read string from addr__
从地址读取数据

>* __write to addr__
向地址写入数据

>* __card near__
RFID卡片靠近返回1

>* __card uid__
返回RFID卡片的UID

#### 使用方法

> 识别RFID卡片信息

><img src="/image/Units/RFID_user.gif" width="70%"> 


# FINGER
________________________

#### 功能说明

> 识别指纹信息

><img src="/image/Units/FINGER.png" width="40%"> 

>* __get state__
读取传感器状态

>* __get access__
返回访问权限

>* __get id__
返回ID

>* __removeAll__
移除所有指纹信息

>* __remove id__
移出指纹ID

>* __add user id access__
添加ID和访问权限

>* __read user with id access__
id及权限匹配则执行以下操作

>* __getUnknown__
未知的id及权限执行以下操作

#### 使用方法

> 录制指纹并进行识别，识别成功亮绿灯

><img src="/image/Units/FINGER_user.gif" width="70%"> 


# CardKB
________________________

#### 功能说明

> 通过键盘输入信息

><img src="/image/Units/CardKB.png" width="40%"> 

>* __Get key__
返回ASIIC数值

>* __Get string__
返回字符

>* __Get pressed__
检测按键，按下返回真

#### 使用方法

> 屏幕显示输入字符

><img src="/image/Units/CardKB_user.gif" width="70%"> 


# Pb.HUB
________________________

#### 功能说明

> 扩展IO接口

><img src="/image/Units/Pb.HUB.png" width="60%"> 

>* __pos digitalRead__
读取引脚数字值

>* __pos digitalWrite value__
向引脚写入数字值

>* __analogRead__
读取模拟值

>* __Set pos RGB number to__
设置引脚RGB灯珠数量

>* __Set pos num RGB pos color__
设置指定序号RGB灯珠的颜色

>* __Set pos num RGB begin count color__
设置指定范围内RGB灯珠颜色

>* __Set pos RGB brightness__
设置指定引脚RGB灯珠亮度

#### 使用方法

> 通过Pb.HUB控制10个RGB灯

><img src="/image/Units/Pb.HUB_user.gif" width="70%"> 


# Pa.HUB
________________________

#### 功能说明

> 扩展I2C接口

><img src="/image/Units/Pa.HUB.png" width="40%"> 

>* __set pos state__
设置指定端口I2C

>* __set pos open__
设置端口开启I2C

>* __set port value__
设置端口I2C

#### 使用方法

> 通过Pa.HUB控制扫描I2C设备,A键开启扩展，B键关闭扩展

><img src="/image/Units/Pa.HUB_user.gif" width="70%"> 


# THERMAL
________________________

#### 功能说明

> 红外测温矩阵，返回热成像图片

><img src="/image/Units/THERMAL.png" width="60%"> 

>* __getTmp X Y__
获取(X,Y)位置的温度

>* __getCenterTemp__
返回中间温度

>* __getMaxTmp__
返回最高温度

>* __getMinTmp__
返回最低温度

>* __setColorMaxTmp tmp__
颜色图谱中表示的最高温度

>* __setColorMinTmp tmp__
颜色图谱中表示的最低温度

>* __update X Y show Center__
更新XY矩阵内的温度并显示中心温度

#### 使用方法

> 屏幕显示最高温度最低温度和图像中心温度

><img src="/image/Units/THERMAL_user.gif" width="70%"> 