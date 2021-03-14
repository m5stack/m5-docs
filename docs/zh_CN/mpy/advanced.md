# wifiCfg

>使用wifiCfg模块中的API, 配置设备WiFi连接。


```
import wifiCfg

//自动连接已经保存的WiFi
wifiCfg.autoConnect(lcdShow=True)

```

# M5mqtt

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

# ESP-NOW

>使用ESP-NOW技术，无线传输数据到其他ESP32主控设备

```
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
# HTTP

>使用HTTP模块中的API, 向服务器发送HTTP请求，获取数据。

```
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


