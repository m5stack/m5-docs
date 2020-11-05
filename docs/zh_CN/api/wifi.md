## WiFi.softAP()

**函数原型:**

`bool WiFi.softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection)`

**功能:**

使用前加载 <WiFi.h> 

开启AP模式,开启成功返回真

**函数参数**

| 参数 | 描述 | 类型 |
| --- | --- | -- |
| ssid | AP名称 0-32个字节 | const char* |
| passphrase | 密码8-63个字节或NULL| const char* |
| ssid_hidden | 是否隐藏SSID 1:隐藏 0:不隐藏 | int |
| max_conncetion | 最大连接数量1-4 | int |

## WiFi.softAPConfig()

**函数原型:**

`bool softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet)`

**功能:**

设置AP的IP地址

**函数参数**

| 参数 | 描述 | 类型 |
| --- | --- | -- |
| local_ip | 默认本地IP 192.168.4.1 | IPAddress |
| gateway | 默认网关 192.168.4.1 | IPAddress |
| subnet | 默认子网掩码 255.255.255.0 | IPAddress |

## WiFi.softAPdisconnect()

**函数原型:**

`bool softAPdisconnect(bool wifioff = false)`

**功能:**

关闭当前AP,wifioff设置为true则还原网络设置

**函数参数**

| 参数 | 描述 | 类型 |
| --- | --- | -- |
| wifioff | 还原设置 | bool |

## WiFi.softAPgetStationNum()

**函数原型:**

`uint8_t softAPgetStationNum()`

**功能:**

返回连接到AP的客户端数量

**函数参数**

None

## WiFi.softAPIP()

**函数原型:**

`IPAddress softAPIP()`

**功能:**

返回当前AP的IP地址

**函数参数**

None

## WiFi.softAPsetHostname()

**函数原型:**

`bool softAPsetHostname(const char * hostname)`

**功能:**

设置主机名称,成功返回真

**函数参数**

| 参数 | 描述 | 类型 |
| --- | --- | -- |
| hostname | 主机名称 | const char* |

## WiFi.softAPgetHostname()

**函数原型:**

`const char * softAPgetHostname()`

**功能:**

获得主机名称

**函数参数**

None

## WiFi.softAPmacAddress()

**函数原型:**

`String softAPmacAddress(void)`

**功能:**

返回主机MAC

**函数参数**

None

## WiFi.begin()

**函数原型:**

`wl_status_t begin(const char* ssid, const char *passphrase = NULL, int32_t channel = 0, const uint8_t* bssid = NULL, bool connect = true)`

**功能:**

使用这个方法来接入网络.如果connect参数为真则接入网络,如果参数为假则只保存设置,返回wifi状态

**函数参数**

| 参数 | 描述 | 类型 |
| --- | --- | -- |
| ssid | 网络热点名称 | const char* |
| passphrase | 密码 | const char* |
| channel | 热点通道号 | int32_t |
| bssid | 热点的mac地址 可选 | const uint8_t* |
| connect | 建立连接 | bool |

## WiFi.config()

**函数原型:**

`bool config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1 = (uint32_t)0x00000000, IPAddress dns2 = (uint32_t)0x00000000)`

**功能:**

配置网络地址

**函数参数**

| 参数 | 描述 | 类型 |
| --- | --- | -- |
| local_ip | 设置IP| IPAddress |
| gateway | 设置网关 | IPAddress |
| subnet | 设置子网掩码 | IPAddress |
| dns1 | 设置DNS1  | IPAddress |
| dns2 | 设置DNS2  | IPAddress |


## WiFi.disconnect()

**函数原型:**

`bool disconnect(bool wifioff = false, bool eraseap = false)`

**功能:**

断开网络连接，若wifioff为true则还将还原网络设置，若eraseap为true则将清除保存于flash中的网络参数.

**函数参数**

| 参数 | 描述 | 类型 |
| --- | --- | -- |
| wifioff | 还原设置 | bool |
| eraseap | flash清除AP设置 | bool |

## WiFi.isConnected()

**函数原型:**

`bool isConnected()`

**功能:**

返回网络连接状态

**函数参数**

None

## WiFi.setAutoReconnect()

**函数原型:**

`bool setAutoReconnect(bool autoReconnect)`

**功能:**

设置自动重连.

**函数参数**

None

## WiFi.getAutoReconnect()

**函数原型:**

`bool getAutoReconnect()`

**功能:**

返回是否重新连接

**函数参数**

None

## WiFi.localIP()

**函数原型:**

`IPAddress localIP()`

**功能:**

返回本地IP地址

**函数参数**

None

## WiFi.subnetMask()

**函数原型:**

`IPAddress subnetMask()`

**功能:**

返回子网掩码

**函数参数**

None

## WiFi.gatewayIP()

**函数原型:**

`IPAddress gatewayIP()`

**功能:**

返回网关地址

**函数参数**

None

## WiFi.dnsIP()

**函数原型:**

`IPAddress dnsIP(uint8_t dns_no = 0)`

**功能:**

返回DNS地址

**函数参数**

None

## WiFi.macAddress()

**函数原型:**

`String macAddress()`

**功能:**

返回mac地址

**函数参数**

None

## WiFi.getHostname()

**函数原型:**

`const char * getHostname()`

**功能:**

主机名称

**函数参数**

None

## WiFi.status()

**函数原型:**

`wl_status_t status()`

**功能:**

返回WiFi状态

**返回值**

| 值 | 描述 |
| --- | --- |
| 255 | WL_NO_SHIELD 检查WiFi Shield |
| 0 | WL_IDLE_STATUS 正在WiFi工作模式间切换 |
| 1 | WL_NO_SSID_AVAIL 无法访问设置的SSID网络 |
| 2 | WL_SCAN_COMPLETED 扫描完成 |
| 3 | WL_CONNECTED 连接成功 |
| 4 | WL_CONNECT_FAILED 连接失败 |
| 5 | WL_CONNECTION_LOST 丢失连接 |
| 6 | WL_DISCONNECTED 断开连接 |


## WiFi.scanNetworks()

**函数原型:**

`int16_t scanNetworks(bool async = false, bool show_hidden = false, bool passive = false, uint32_t max_ms_per_chan = 300)`

**功能:**

异步扫描WiFi网络,非阻塞模式

**函数参数**
	
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| async | false | 异步扫描,值为true时启动 |
| show_hidden | false | 是否扫描隐藏网络 |
| passive | bool | 快速扫描 |
| max_ms_per_chan | uint32_t | 通道扫描时间 |

## WiFi.scanComplete()

**函数原型:**

`int16_t scanComplete()`

**功能:**

异步模式下获取扫描网络.返回值-1表示扫描未完成.返回值为-2表示扫描失败.

**函数参数**
	
None

## WiFi.scanDelete()

**函数原型:**

`void scanDelete()`

**功能:**

从内存中删除扫描结果

**函数参数**
	
None

## WiFi.SSID()

**函数原型:**

`String SSID(uint8_t networkItem)`

**功能:**

返回扫描到的网络.

**函数参数**
	
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| networkItem | uint8_t | SSID名称 |


## WiFi.encryptionType()

**函数原型:**

`wifi_auth_mode_t encryptionType(uint8_t networkItem)`

**功能:**

返回扫描到的加密网络

**函数参数**
	
| 函数参数 | 类型 | 描述 |
| --- | --- | --- |
| networkItem | uint8_t | SSID名称 |

## WiFi.RSSI()

**函数原型:**

`int32_t RSSI(uint8_t networkItem)`

**功能:**

返回扫描到的RSSI强度

**函数参数**
	
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| networkItem | uint8_t | RSSI item |

## WiFi.channel()

**函数原型:**

`int32_t channel(uint8_t networkItem)`

**功能:**

返回扫描到的网络通道号

**函数参数**
	
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| networkItem | uint8_t | channel item |

