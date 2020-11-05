## WiFi.softAP()

**Syntax:**

`bool WiFi.softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection)`

**Description:**

Load <WiFi.h> before use

Use this method to open AP mode and return true after successful opening

**Function argument**

| Argument | Description | Type |
| --- | --- | -- |
| ssid |The name of an AP network 0-32 bytes | const char* |
| passphrase | password NULL or 8-63 bytes| const char* |
| ssid_hidden | Whether to hide SSID 1:hidden 0:not| int |
| max_conncetion | Maximum Accessibility Number 1-4 | int |

## WiFi.softAPConfig()

**Syntax:**

`bool softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet)`

**Description:**

set AP IP address

**Function argument**

| Argument | Description | Type |
| --- | --- | -- |
| local_ip | local_ip defult 192.168.4.1 | IPAddress |
| gateway | gateway defult 192.168.4.1 | IPAddress |
| subnet | subnet mask defult 255.255.255.0 | IPAddress |

## WiFi.softAPdisconnect()

**Syntax:**

`bool softAPdisconnect(bool wifioff = false)`

**Description:**

Turn off the current AP and restore the network settings if wifioff is true

**Function argument**

| Argument | Description | Type |
| --- | --- | -- |
| wifioff | Restore settings | bool |

## WiFi.softAPgetStationNum()

**Syntax:**

`uint8_t softAPgetStationNum()`

**Description:**

Returns the number of clients connected to AP

**Function argument**

None

## WiFi.softAPIP()

**Syntax:**

`IPAddress softAPIP()`

**Description:**

Returns current IP of AP

**Function argument**

None

## WiFi.softAPsetHostname()

**Syntax:**

`bool softAPsetHostname(const char * hostname)`

**Description:**

Set Hostname if success return true

**Function argument**

| Argument | Description | Type |
| --- | --- | -- |
| hostname | set Hostname | const char* |

## WiFi.softAPgetHostname()

**Syntax:**

`const char * softAPgetHostname()`

**Description:**

Get Hostname if success return true

**Function argument**

None

## WiFi.softAPmacAddress()

**Syntax:**

`String softAPmacAddress(void)`

**Description:**

return MAC address

**Function argument**

None

## WiFi.begin()

**Syntax:**

`wl_status_t begin(const char* ssid, const char *passphrase = NULL, int32_t channel = 0, const uint8_t* bssid = NULL, bool connect = true)`

**Description:**

This method is used to access the network .If connect equals true, it will connect to ssid's WiFi hotspot,If connect equals false, WiFi hotspots that are not connected to SSID will be created to save the above parameters.

**Function argument**

| Argument | Description | Type |
| --- | --- | -- |
| ssid | WiFi hospot name | const char* |
| passphrase | password  | const char* |
| channel | channel number | int32_t |
| bssid | MAC address of WiFi hotspot, optional parameters | const uint8_t* |
| connect | Establish a connection | bool |

## WiFi.config()

**Syntax:**

`bool config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1 = (uint32_t)0x00000000, IPAddress dns2 = (uint32_t)0x00000000)`

**Description:**

set network addresses.

**Function argument**

| Argument | Description | Type |
| --- | --- | -- |
| local_ip | local_ip address | IPAddress |
| gateway | gateway address | IPAddress |
| subnet | subnet mask address | IPAddress |
| dns1 | DNS address  | IPAddress |
| dns2 | DNS address  | IPAddress |


## WiFi.disconnect()

**Syntax:**

`bool disconnect(bool wifioff = false, bool eraseap = false)`

**Description:**

If wifioff is true, the network settings will be restored. If eraseap is true, the network parameters saved in flash will be cleared.

**Function argument**

| Argument | Description | Type |
| --- | --- | -- |
| wifioff | Restore settings | bool |
| eraseap | erase ap from flash | bool |

## WiFi.isConnected()

**Syntax:**

`bool isConnected()`

**Description:**

Returns whether the network has been accessed or not.

**Function argument**

None

## WiFi.setAutoReconnect()

**Syntax:**

`bool setAutoReconnect(bool autoReconnect)`

**Description:**

Setting up automatic reconnection after disconnection.

**Function argument**

None

## WiFi.getAutoReconnect()

**Syntax:**

`bool getAutoReconnect()`

**Description:**

Returns whether automatic reconnection occurs.

**Function argument**

None

## WiFi.localIP()

**Syntax:**

`IPAddress localIP()`

**Description:**

Return local IP address.

**Function argument**

None

## WiFi.subnetMask()

**Syntax:**

`IPAddress subnetMask()`

**Description:**

Return subnet mask.

**Function argument**

None

## WiFi.gatewayIP()

**Syntax:**

`IPAddress gatewayIP()`

**Description:**

Return gateway IP address.

**Function argument**

None

## WiFi.dnsIP()

**Syntax:**

`IPAddress dnsIP(uint8_t dns_no = 0)`

**Description:**

Return DNS address.

**Function argument**

None

## WiFi.macAddress()

**Syntax:**

`String macAddress()`

**Description:**

Return MAC address.

**Function argument**

None

## WiFi.getHostname()

**Syntax:**

`const char * getHostname()`

**Description:**

Return Hostname.

**Function argument**

None

## WiFi.status()

**Syntax:**

`wl_status_t status()`

**Description:**

Return WIFI status.

**Function return value**

| value |Description |
| --- | --- |
| 255 | WL_NO_SHIELD |
| 0 | WL_IDLE_STATUS |
| 1 | WL_NO_SSID_AVAIL |
| 2 | WL_SCAN_COMPLETED |
| 3 | WL_CONNECTED |
| 4 | WL_CONNECT_FAILED |
| 5 | WL_CONNECTION_LOST |
| 6 | WL_DISCONNECTED |


## WiFi.scanNetworks()

**Syntax:**

`int16_t scanNetworks(bool async = false, bool show_hidden = false, bool passive = false, uint32_t max_ms_per_chan = 300)`

**Description:**

scan wifi networks.

**Function argument**
	
None

## WiFi.scanComplete()

**Syntax:**

`int16_t scanComplete()`

**Description:**

Asynchronous mode is used to obtain the number of scanned networks. If the return value is - 1, it means that the scan is still in progress. If the return value is - 2, it means that the scan has not been done or failed.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| async | false | Asynchronous scanning,the value is true, will not block |
| show_hidden | false | Whether to scan non-broadcast networks |
| passive | bool | boost scan |
| max_ms_per_chan | uint32_t | Scanning time per channel |

## WiFi.scanDelete()

**Syntax:**

`void scanDelete()`

**Description:**

Delete scan results in memory.

**Function argument**
	
None

## WiFi.SSID()

**Syntax:**

`String SSID(uint8_t networkItem)`

**Description:**

Returns the scanned network name.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| networkItem | uint8_t | SSID item |


## WiFi.encryptionType()

**Syntax:**

`wifi_auth_mode_t encryptionType(uint8_t networkItem)`

**Description:**

Returns the type of network encryption scanned.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| networkItem | uint8_t | SSID item |

## WiFi.RSSI()

**Syntax:**

`int32_t RSSI(uint8_t networkItem)`

**Description:**

Return the scanned network signal strength.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| networkItem | uint8_t | RSSI item |

## WiFi.channel()

**Syntax:**

`int32_t channel(uint8_t networkItem)`

**Description:**

Return the scanned network channel number.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| networkItem | uint8_t | channel item |

