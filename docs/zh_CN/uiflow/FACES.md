# Calculator
__________________________

#### 功能说明

> 数字输入

><img src="/image/FACES/Calculator.png" width="40%"> 

* __Get press string__
返回键盘字符

* __Get press button int value__
返回键盘ASIIC值

* __Clear press string__
清空输入字符

* __Delete press string last byte__
删除最后输入的字节

* __is new button pressed__
按键按下返回真

#### Usage

> 屏幕显示输入的数字

><img src="/image/FACES/Calculator_user.gif" width="50%"> 


# Encoder
__________________________

#### 功能说明

> 读取编码器数值

><img src="/image/FACES/Encoder.png" width="40%"> 

* __Set LED pos color__
设置指定的LED颜色

* __Clear encode value to zero__
编码器数值归零

* __Get encode value__
返回编码值

* __Get encode direction__
返回旋转方向

* __is encode pressed__
编码器旋钮被按下返回真

#### Usage

> 屏幕显示编码器数值,按下旋钮归零

><img src="/image/FACES/Encoder_user.gif" width="50%"> 


# FINGER
__________________________

#### 功能说明

> 读取指纹信息

><img src="/image/FACES/FINGER.png" width="40%"> 

* __get state__
返回传感器状态

* __get access__
返回用户权限

* __get id__
返回ID

* __remove All__
移除所有指纹信息

* __remove faces_finger id__
移除指定指纹ID

* __faces_finger add user id access__
添加指纹信息

* __faces_finger read user with id access__
验证指纹成功执行程序

* __faces_finger getUnknow__
读取未知指纹信息执行程序

#### Usage

> 读取指纹信息，匹配亮绿灯不来匹配亮红灯

><img src="/image/FACES/FINGER_user.gif" width="50%"> 


# GameBoy
__________________________

#### 功能说明

> 读取游戏键盘的键值

><img src="/image/FACES/GameBoy.png" width="40%"> 

* __Get is press__
返回按键状态，持续检测

* __Get was pressed__
返回按键状态，检测一次

#### Usage

> 如果上键按下亮绿灯，下键按下亮红灯

><img src="/image/FACES/GameBoy_user.gif" width="50%"> 


# Joystick
__________________________

#### 功能说明

> 返回摇杆数据

><img src="/image/FACES/Joystick.png" width="40%"> 

* __Get X value__
返回X轴方向数据

* __Get Y value__
返回Y轴方向数据

* __Is pressed__
按键按下返回真

* __Get reverse X value__
返回X轴反向数据

* __Get reverse Y value__
返回Y轴反向数据

* __Set LED pos color__
设置指定位置LED的颜色

#### Usage

> 屏幕显示摇杆数据

><img src="/image/FACES/Joystick_user.gif" width="50%"> 


# KeyBoard
__________________________

#### 功能说明

> 返回键盘按键数据

><img src="/image/FACES/KeyBoard.png" width="40%"> 

* __Get press string__
返回按键字符

* __Clear press string__
清除输入字符

* __Delete press string last byte__
删除最后输入的字节

* __Get press button int value__
返回按键ASIIC值

* __Is new button pressed__
如果按键按下返回真

#### Usage

> 屏幕显示输入的字符

><img src="/image/FACES/KeyBoard_user.gif" width="50%"> 


# RFID
__________________________

#### 功能说明

> 返回RFID卡数据

><img src="/image/FACES/RFID.png" width="40%"> 

* __read string from addr__
从指定地址读取数据

* __write to addr__
向地址写数据

* __card near__
发现RFID卡靠近返回真

* __card uid__
返回RFID卡UID

#### Usage

> 屏幕显示RFID卡数据

><img src="/image/FACES/RFID_user.gif" width="50%"> 