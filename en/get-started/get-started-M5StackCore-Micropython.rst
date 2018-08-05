M5Stack-Core-MicroPython —— Getting Started
============================================

Burn Firmware
-------------

1. Download Firmware
^^^^^^^^^^^^^^^^^^^^

https://github.com/m5stack/M5Cloud/tree/master/firmwares

Now, the M5Cloud firmware I downloaded named
``m5cloud-20180516-v0.4.0.bin`` and it saved at ``~/smbshare``

2. Burn to M5Stack
^^^^^^^^^^^^^^^^^^

+--------------+--------------+--------------+
| |windows|    | |linux|      | |macos|      |
+--------------+--------------+--------------+
| Windows      |  Linux       |  Mac OS      |
+--------------+--------------+--------------+

.. |windows| image:: ../../_static/windows-logo.png

.. |Linux| image:: ../../_static/linux-logo.png
    
.. |MacOS| image:: ../../_static/macos-logo.png


**Windows**

open Flash Download
Tools(\ `点击下载 <https://www.espressif.com/sites/default/files/tools/flash_download_tools_v3.6.4.rar>`__)
apply by Espressif, choose ``ESP32 DownloadTool`` option and execute
three steps ( *choose firmware file, your serial port, erase and program
flash* ) as shown below

.. image:: ../../_static/M5Stack_MicroPython_UserGuidePictures/windows_download_firmware.png

**MacOS/Linux**

*Comfire which serial port connected with*
TODO: linked to `Establish **serial** connection`

*Download M5Cloud firmware to M5Stack board* - Installing esptool：
``pip install esptool`` - Erase flash on M5Stack:
``esptool.py --chip esp32 --port /dev/ttyUSB0 erase_flash`` - Download
firmware to M5Stack
``esptool.py --chip esp32 --port /dev/ttyUSB0 write_flash --flash_mode dio -z 0x1000 m5cloud-20180516-v0.4.0.bin``

Connect Wi-Fi
-------------

Mobile Phone or PC connect to M5Stack AP(like ``M5Stack-a67c``), and
then open brower to login 192.168.4.1 setting your LAN SSID and Password

.. figure:: ../../_static/M5Stack_MicroPython_UserGuidePictures/m5stack_connet_wifi.png
    :align: center  
    :alt: m5stack_connet_wifi
    :figclass: align-center
   
    m5stack_connet_wifi

Binding device
---------------

*1.login http://io.m5stack.com and register your own account(or login
your account)*

*2. press ``Device->Add`` buttom on M5Cloud IDE for binding M5Stack
board to your account*

*3. Input the Check Code for the M5Stack screen display，Check Code is
random, after 60s will refresh*

.. figure:: ../../_static/M5Stack_MicroPython_UserGuidePictures/WebIDE_check_code.png
   :align: center  
   :alt: image

Coding MicroPython
-------------------

*1. create a new python project*

.. figure:: ../../_static/M5Stack_MicroPython_UserGuidePictures/create_a_new_project.png
   :align: center  
   :alt: image

*2. write your own code and press ``Upload & Run`` buttom on the M5Cloud
IDE*

copy below code to ``main.py`` file and press ``Upload & Run``

.. code:: python

    from m5stack import lcd

    lcd.clear()
    lcd.setCursor(0, 0)
    lcd.setColor(lcd.WHITE)

    lcd.print("Hello World!")

.. figure:: ../../_static/M5Stack_MicroPython_UserGuidePictures/display_hello_world.png
   :align: center  
   :alt: image



