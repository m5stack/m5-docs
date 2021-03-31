## Blynk

>Connect to the Blynk service to realize control and data collection through the mobile App.

```clike
from IoTcloud import blynk

blynk1.disconnect()

blynk1.email('', '', '')

blynk1.tweet('')

blynk1.notify('')

blynk1.set_property(0, '', '')

blynk1.virtual_sync(0)

blynk1 = blynk.Blynk(token='xxxxxxxxxxxxxxxxxxxxxxxxxx')

def blynk_read_v3(v_pin,value):
  print(value)
  blynk1.virtual_write(v_pin, "Hello!")

blynk1.handle_event('read v3', blynk_read_v3)

while True:
  blynk1.run()

```

## Azure

>Connect to the Azure IoT cloud service platform.

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

>Connect to the Tencent IoT cloud service platform.

```clike

from IoTcloud.Tencent import Tencent

tencent = Tencent(
	product_id='XXXXXXXXXXX', 
	device_name='XXXXXXX', 
	username='XXXXXXXXXXXXXXXXXX;12010126;B335D;1702277766',
	password='e822dc0027a1b363f9ed1a23fb77860c0b707d7d;hmacsha1',
	port=1883,
	keepalive=30
)

tencent.publish_property_msg(temperature=temp,humidity=humid)

def tencent_fun(property_data):
  print(property_data)

tencent.subscribe_property_msg(tencent_fun)


```