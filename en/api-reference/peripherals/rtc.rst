RTC API
********

-----------------------------

Description
------------

The content of the RTC memory is preserved during the deep sleep.

Up to 64 32-bit integers can be saved in RTC memory.

One string of up to 2048 characters can be saved in RTC memory.
The string can be, for example, json string containing the parameters which has to be restored after deep sleep wake-up.

Integers and string saved in RTC memory are protected by 16-bit CRC


-----------------------------

Function
---------

machine.RTC()
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Create the RTC instance object

init(date)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Set the system time and date

| **Parament:**
|   **date:** it's a tuple containing the time and date information
|             *Note: the tuple is equal to (year, month, day [,hour [,minute [, second ]]])*

now()
>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   get the current time

| **Parament:**
|   **None** 

| **Return:**
|   Return the current time as tuple: `(year, month, day, hour, minute, second)`

ntp_sync(server [,update_period] [,tz])
>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Write bytes from buffer object buf to the RTC device

| **Parament:**
|   **server :**       the NTP server domain name or IP, for example "pool.ntp.org"
|   **update_period:** optional, time update interval in seconds; default: 3600
|   **tz:**            optional, time zone string; default: the one set in menuconfig


| **Return:**
|   Returns `True` on success, `False` ion error

| **Example:**
.. code:: python

    import machine
    import utime

    rtc = machine.RTC()
    rtc.ntp_sync(server="hr.pool.ntp.org", tz="CET-1CEST")


synced()
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Sync the system time from NTP server

| **Parament:**
|   **None:** 

| **Return:**
|   Return `True` if the system time was synced from NTP server, `False` if not


---------------------

Usage
------

.. code:: python

    import machine
    import utime

    rtc = machine.RTC()
    rtc.ntp_sync(server="hr.pool.ntp.org", tz="CET-1CEST")
    rtc.synced()
    True
    utime.gmtime()
    (2018, 1, 29, 16, 3, 18, 2, 29)
    utime.localtime()
    (2018, 1, 29, 17, 3, 30, 2, 29)