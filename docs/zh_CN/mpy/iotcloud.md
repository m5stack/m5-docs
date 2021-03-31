## Blynk

>连接Blynk服务，实现通过手机App进行控制，与数据采集。

```clike
from IoTcloud import blynk

//断开连接
blynk1.disconnect()

//发送邮件
blynk1.email('', '', '')

//发送通知
blynk1.tweet('')

//发送通知
blynk1.notify('')

//配置组件属性参数
blynk1.set_property(0, '', '')

//同步虚拟引脚状态
blynk1.virtual_sync(0)

//初始化连接
blynk1 = blynk.Blynk(token='xxxxxxxxxxxxxxxxxxxxxxxxxx')

//响应callback
def blynk_read_v3(v_pin,value):
  print(value)
  //响应数据到指定VPIN
  blynk1.virtual_write(v_pin, "Hello!")

//绑定虚拟引脚响应callback
blynk1.handle_event('read v3', blynk_read_v3)

while True:
  blynk1.run()

```

## Azure

>连接Azure IoT云服务平台。

```clike

from IoTcloud.Azure import Azure

def azure_fun(msg_data):
  global msg_count, temp, humid, up_msg, up_msg_str
  c2d_msg.set_text(str(msg_data))
  pass

azure = Azure(connection_string='xxxxxxx', sas_token='xxxxxxx')
azure.subscribe(azure_fun)
azure.start()

up_msg = {'messageId':msg_count,'deviceId':'UIFlow-Azure-Core2-Temp-Humid','Temperature':temp,'Humidity':humid}
up_msg_str = json.dumps(up_msg)
azure.publish(str(up_msg_str))

```

## Tencent

>连接Tencent IoT云服务平台。

```clike

from IoTcloud.Tencent import Tencent

//初始化连接
tencent = Tencent(
	product_id='XXXXXXXXXXX', 
	device_name='XXXXXXX', 
	username='XXXXXXXXXXXXXXXXXX;12010126;B335D;1702277766',
	password='e822dc0027a1b363f9ed1a23fb77860c0b707d7d;hmacsha1',
	port=1883,
	keepalive=30
)

//上传数据
tencent.publish_property_msg(temperature=temp,humidity=humid)


//下行数据回调
def tencent_fun(property_data):
  print(property_data)

//订阅平台下发消息
tencent.subscribe_property_msg(tencent_fun)


```