# wifiCfg

>Use the API in the wifiCfg module to configure the device WiFi connection.


```clike
import wifiCfg

//Automatically connect to the saved WiFi, the screen displays the connection UI
wifiCfg.autoConnect(lcdShow=True)

//Connect to the specified WiFi
wifiCfg.doConnect(ssid, pwd)

//Connect to the specified WiFi and specify the connection timeout period
wifiCfg.connect(ssid, pwd, timeout, block=False)

//WiFi reconnect
wifiCfg.reconnect()

//Is it connected
print(wifiCfg.wlan_sta.isconnected())

```

# M5mqtt

>Use the API in the M5mqtt module to connect to the mqtt server and subscribe to publish message content.

-Connect to mqtt server

```clike

from m5mqtt import M5mqtt

//Create connection instance
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

//Start connection
m5mqtt.start()

while True:


```

-Subscribe and publish news

```clike

//Subscribe news
def callback(topic_data):
    print(topic_data)

m5mqtt.subscribe(topic, callback)


//release the news
m5mqtt.publish(topic, data)

```

-Other configurations

```clike

//Configure the client will message
m5mqtt.set_last_will(topic, msg)

//Disconnect
m5mqtt.deinit()

```

# ESP-NOW

>Using ESP-NOW technology to wirelessly transmit data to other ESP32 master control devices

```clike
import espnow

//initialization
espnow.init()

//Set the channel

//Get the local mac_addr
espnow.get_mac_addr()

//broadcast
espnow.broadcast(data='Hello')

//Set the peer list
espnow.add_peer(slave_mac_addr, id)

//send messages
espnow.send(id, data='World')

//Send message callback
def send_cb(flag):
  if flag:
    print('succeed')
  else:
    print('Failed')

espnow.send_cb(send_cb)

//Receive message callback
def recv_cb():
    //retrieve data
    sender_address, _, receive_data = espnow.recv_data(encoder='str')

espnow.recv_cb(recv_cb)

```
# HTTP

>Use the API in the HTTP module to send HTTP requests to the server to obtain data.

```clike
import urequests

//GET request
req = urequests.request(
    method='GET',
    url='http://api.m5stack.com/v1',
    headers={'Content-Type':'text/html'}
    )

//POST request
req = urequests.request(
    method='POST',
    url='http://api.m5stack.com/v1',
    json={'KEY':'VALUE'},
    headers={'Content-Type':'text/html'}
    )

//Get the response body status code
print(req.status_code)

//Get the response body Reason-Phrase
print(req.reason)

//Get the native response body
print(req.content)

//Get response body string
print(req.text)

//Get response body JSON
print(req.json)

```

# NTP

>Get current time information through NTP server.

```clike

import ntptime


//Set up NTP server
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

//Get the timestamp
ntp.getTimestamp()

//Format the date
ntp.formatDate('-')

//Format the time
ntp.formatTime('-')

//Format date & time
ntp.formatDatetime('-',':')

ntp.year()
ntp.month()
ntp.day()
ntp.hour()
ntp.minute()
ntp.second()
ntp.weekday()

```


# EEPROM

>Save data persistently through EEPROM.

```clike

import nvs

//data input
nvs.write_str(KEY, VALUE)

//Read data
nvs.read_str(KEY)

```

# UART

>Send and receive data via UART.

```clike

//Create a serial port instance
uart1 = machine.UART(1, tx=1, rx=3)

//Initialize the serial port
uart1.init(115200, bits=8, parity=None, stop=1)

//Is there any content in the cache?
uart1.any()

//Read the content in the buffer area
uart1.read()

//Write content to the serial port
uart1.write('Hello')

//Read/write case
while True:
    if uart1.any():
        print(uart1.read())
        uart1.write('Hello')

```

# SD-Card

```clike

import os

//Read file
with open('/sd/FileName.*','r') as fs:
  print(fs.read())

//Write file
with open('/sd/test.txt','w+') as fs:
  fs.write('Hello World')

//File read and write mode
w is opened for writing,
w+ open in read-write mode
r open in read mode
r+ open in read-write mode
a Open in append mode

//Set the file cursor
fs.seek(0)

//View catalog
os.listdir('/sd/DirectoryPath')

//Determine whether the path is a file
os.stat('/sd/FilePath')[0] == 0x8000)

//Determine whether the path is a directory
os.stat('/sd/DirectoryPath')[0] == 0x4000)

//Determine whether the file exists in the specified directory
'FileName.*' in os.listdir('/sd/DirectoryPath')

```
