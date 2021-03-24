## wifiCfg

>使用wifiCfg模块中的API, 配置设备WiFi连接。


```clike
import wifiCfg

//自动连接已经保存的WiFi,屏幕显示连接UI
wifiCfg.autoConnect(lcdShow=True)

//连接指定的WiFi
wifiCfg.doConnect(ssid, pwd)

//连接指定的WiFi,并指定连接超时时间
wifiCfg.connect(ssid, pwd, timeout, block=False)

//WiFi重连
wifiCfg.reconnect()

//是否已经连接
print(wifiCfg.wlan_sta.isconnected())

```

## M5mqtt

>使用M5mqtt模块中的API, 连接mqtt服务器与订阅发布消息内容。

- 连接mqtt服务器

```clike

from m5mqtt import M5mqtt

//创建连接实例
m5mqtt = M5mqtt(
    client_id,
    server, 
    port=0, 
    user=None, 
    password=None, 
    keepalive=0,
    ssl=False, 
    ssl_params=None
)

//开始连接
m5mqtt.start()

while True:


```

- 订阅与发布消息

```clike

//订阅消息
def callback(topic_data):
    print(topic_data)

m5mqtt.subscribe(topic, callback)


//发布消息
m5mqtt.publish(topic, data)

```

- 其他配置

```clike

//配置客户端遗嘱消息
m5mqtt.set_last_will(topic, msg)

//断开连接
m5mqtt.deinit()

```

## ESP-NOW

>使用ESP-NOW技术，无线传输数据到其他ESP32主控设备

```clike
import espnow

//初始化
espnow.init()

//设置信道

//获取本机mac_addr
espnow.get_mac_addr()

//广播
espnow.broadcast(data='Hello')

//设置peer列表
espnow.add_peer(slave_mac_addr, id)

//发送消息
espnow.send(id, data='World')

//发送消息回调
def send_cb(flag):
  if flag:
    print('succeed')
  else:
    print('Failed')

espnow.send_cb(send_cb)

//接收消息回调
def recv_cb():
    //获取数据
    sender_address, _, receive_data = espnow.recv_data(encoder='str')

espnow.recv_cb(recv_cb)

```
## HTTP

>使用HTTP模块中的API, 向服务器发送HTTP请求，获取数据。

```clike
import urequests

//GET请求
req = urequests.request(
    method='GET', 
    url='http://api.m5stack.com/v1',
    headers={'Content-Type':'text/html'}
    )

//POST请求
req = urequests.request(
    method='POST', 
    url='http://api.m5stack.com/v1',
    json={'KEY':'VALUE'}, 
    headers={'Content-Type':'text/html'}
    )

//获取响应体状态码
print(req.status_code)

//获取响应体Reason-Phrase
print(req.reason)

//获取原生响应体
print(req.content)

//获取响应体字符串
print(req.text)

//获取响应体JSON
print(req.json)

```

## NTP

>通过NTP服务器获取当前时间信息。

```clike

import ntptime


//设置NTP服务器
//eg:
//ntp = ntptime.client(host='jp.pool.ntp.org', timezone=8)
//ntp = ntptime.client(host='sg.pool.ntp.org', timezone=8)
//ntp = ntptime.client(host='tw.pool.ntp.org', timezone=8)
//ntp = ntptime.client(host='hk.pool.ntp.org', timezone=8)
//ntp = ntptime.client(host='tw.pool.ntp.org', timezone=8)
//ntp = ntptime.client(host='hk.pool.ntp.org', timezone=8)
//ntp = ntptime.client(host='us.pool.ntp.org', timezone=8)
//ntp = ntptime.client(host='de.pool.ntp.org', timezone=8)

ntp = ntptime.client(host='cn.pool.ntp.org', timezone=8)

//获取时间戳
ntp.getTimestamp()

//格式化日期
ntp.formatDate('-')

//格式化时间
ntp.formatTime('-')

//格式化日期&时间
ntp.formatDatetime('-', ':')

ntp.year()
ntp.month()
ntp.day()
ntp.hour()
ntp.minute()
ntp.second()
ntp.weekday()

```


## EEPROM

>通过EEPROM持久化保存数据。

```clike

import nvs

//写入数据
nvs.write_str(KEY, VALUE)

//读取数据
nvs.read_str(KEY)

```

## UART

>通过UART发送和接收数据。

```clike

//创建串口实例
uart1 = machine.UART(1, tx=1, rx=3)

//初始化串口
uart1.init(115200, bits=8, parity=None, stop=1)

//缓存区中是否有内容
uart1.any()

//读取缓存区中的内容
uart1.read()

//向串口写入内容
uart1.write('Hello')

//读/写案例
while True:
    if uart1.any():
        print(uart1.read())
        uart1.write('Hello')

```

## SD-Card

```clike

import os

//读文件
with open('/sd/FileName.*', 'r') as fs:
  print(fs.read())

//写文件
with open('/sd/test.txt', 'w+') as fs:
  fs.write('Hello World')

//文件读写模式
w 以写方式打开，
w+ 以读写模式打开
r 以读模式打开
r+ 以读写模式打开
a 以追加模式打开

//设置文件光标
fs.seek(0)

//查看目录
os.listdir('/sd/DirectoryPath')

//判断路径是否为文件
os.stat('/sd/FilePath')[0] == 0x8000)

//判断路径是否为目录
os.stat('/sd/DirectoryPath')[0] == 0x4000)

//判断文件是否存在于指定目录
'FileName.*' in os.listdir('/sd/DirectoryPath')

```
