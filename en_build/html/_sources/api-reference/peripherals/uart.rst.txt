UART API
*********

-----------------------------

Description
------------

An Universal Asynchronous Receiver/Transmitter (UART) is a component known to handle the timing requirements for a variety of widely-adapted protocols (RS232, RS485, RS422, …).
An UART provides a widely adopted and cheap method to realize full-duplex data exchange among different devices.
There are three UART controllers available on the ESP32 chip. They are compatible with UART-enabled devices from various manufacturers. All UART controllers integrated in the ESP32 feature an identical set of registers for ease of programming and flexibility. In this documentation, these controllers are referred to as UART0, UART1, and UART2.


-----------------------------

Function
---------

machine.UART(uart_num, tx=pin, rx=pin [,args])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Create the uart instance object

| **Parament:**
|   **uart_num:** The hardware SPI host. machine-SPI.HSPI (1) or machine.SPI.VSPI (2) can be used. Default: 1
|   **tx:** the gpio used for tx
|   **rx:** the gpio used for rx


| **Example:**
.. code:: python

    from machine import UART
    
    uart2 = UART(2, tx=17, rx=16)
    uart2.init(115200, bits=8, parity=None, stop=1)

write(buf [, len [, off]])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Write bytes from buffer object ḃuf to UART

| **Parament:**
|   **buf:** data buffer to be write
|   **len:** writes `ŀen` bytes
|   **off:** starts writting from `off` position in `buf`

| **Example:**
.. code:: python

    from machine import UART

    uart2 = UART(2, tx=17, rx=16)
    uart2.init(115200, bits=8, parity=None, stop=1)
    uart2.write('abc')   # write the 3 characters

read()
>>>>>>>

| **Description:** 　　
|   read all available characters

| **Example:**
.. code:: python

    from machine import UART

    uart2 = UART(2, tx=17, rx=16)
    uart2.init(115200, bits=8, parity=None, stop=1)
    uart2.read()         # read all available characters

readline([max_len])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Reads all bytes from the receive buffer up to the line end character **\n**

| **Parament:**
|   **max_len:** maximum length to be read

| **Example:**
.. code:: python

    from machine import UART

    uart2 = UART(2, tx=17, rx=16)
    uart2.init(115200, bits=8, parity=None, stop=1)
    uart2.readline()     # read a line


---------------------

Usage
------

.. code:: python

    from machine import UART

    uart2 = UART(2, tx=17, rx=16)
    uart2.init(115200, bits=8, parity=None, stop=1)
    uart2.read(10)       # read 10 characters, returns a bytes object
    uart2.read()         # read all available characters
    uart2.readline()     # read a line
    uart2.readinto(buf)  # read and store into the given buffer
    uart2.write('abc')   # write the 3 characters