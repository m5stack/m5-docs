Timer API
**********

-----------------------------

Description
------------

The ESP32 chip contains two hardware timer groups. Each group has two general-purpose hardware timers. They are all 64-bit generic timers based on 16-bit prescalers and 64-bit auto-reload-capable up / down counters. 

*Note: Due to MicroPython callback latency, some callbacks may not be executed if the timer period is less than 15 ms.
The number of events and executed callbacks can be checked using tm.events() method.*

-----------------------------

Function
---------

machine.Timer(timer_no)
>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Create the Timer instance object

| **Parament:**
|   **timer_no:** the timer number to be used for the timer

| **Example:**
.. code:: python

    import machine

    p1 = machine.Pin(27)

init(period, mode, callback, dbgpin)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   initialize paraments of the timer 

| **Parament:**
|   **period:**   Timer period(Default: 10 ms)
|                 *Note: Timer period in ms, only used for PERIODIC and ONE_SHOT timers*
|   **mode:**     Timer mode of operation(Default: PERIODIC)
|   **callback:** The Python callback function to be executed on timer event(Default: None)
|   **dbgpin:**   GPIO pin to be used as debug output(Default: -1 (not used))
|                 *Note: If used, the gpio level will toggle on each timer event*   

| **Return:**
|   None

| **Example:**
.. code:: python

    from machine import SPI, Pin

    spi = SPI(
        spihost=SPI.HSPI, 
        baudrate=2600000
        sck=Pin(18), 
        mosi=Pin(23), 
        miso=Pin(19), 
        cs=Pin(4)
    )

    spi.write(buf) #NOHEAP


value()
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　

| **Return:**
|   Returns the current timer counter value in **µs** if timer mode is CHRONO or in **ms** for other modes

| **Example:**
.. code:: python

    import machine

    p1 = machine.Pin(27)
    p1.init(p1.OUT)
    p1.value(1)


---------------------

Usage
------

.. code:: python

    import machine

    tcounter = 0

    p1 = machine.Pin(27)
    p1.init(p1.OUT)
    p1.value(1)

    def tcb(timer):
        global tcounter
        if tcounter & 1:
            p1.value(0)
        else:
            p1.value(1)
        tcounter += 1
        if (tcounter % 10000) == 0:
            print("[tcb] timer: {} counter: {}".format(timer.timernum(), tcounter))

    t1 = machine.Timer(2)
    t1.init(period=20, mode=t1.PERIODIC, callback=tcb)