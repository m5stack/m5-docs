How to Burn Firmware
====================

This article will guide you how to burn a right firmware to your board.

For MacOS
~~~~~~~~~

***(Coming soon...)***

For Windows
~~~~~~~~~~~

1. Download M5Burner
^^^^^^^^^^^^^^^^^^^^

For downloading M5Burner, visit the `offical
website <http://www.m5stack.com>`__ please.

.. figure:: ../../_static/getting_started_pics/download_M5Burner.png
   :alt: image

   image
2. Burn the firmware
^^^^^^^^^^^^^^^^^^^^

Unpack the M5Burner tool which you donwloaded for official website just
now in any folder, then execute the executable file ``M5Burner.exe``.

.. figure:: ../../_static/getting_started_pics/burn_firmware_01.png
   :alt: image

   image
**Then choice the ``serial port`` which is connected with your board and
the ``Baud`` which is 921600 following below steps.**

.. figure:: ../../_static/getting_started_pics/burn_firmware_02.png
   :alt: image

   image
**1. Choice a right firmware**

a. select ``M5Flow-vx.x`` option, if you want to program with
   `M5Flow <http://flow.m5stack.com>`__

b. select ``M5Cam-vx.x (/M5Cam-psram)`` option, if you own a ESP32CAM (/
   M5CAMERA)

**2. Click ``Erase``**

.. figure:: ../../_static/getting_started_pics/burn_firmware_06.png
   :alt: image

   image
*If M5Burner shows the information ``Hard resetting via RTS pin...``
below, it means chip has been erased successfully.*

.. figure:: ../../_static/getting_started_pics/burn_firmware_04.png
   :alt: image

   image
**3. Click ``Burn``**

.. figure:: ../../_static/getting_started_pics/burn_firmware_03.png
   :alt: image

   image
*If M5Burner shows the information ``Leaving... Staying in bootloader.``
below, it means chip has been burnt successfully.*

.. figure:: ../../_static/getting_started_pics/burn_firmware_05.png
   :alt: image

   image
***Note:***
^^^^^^^^^^^

***1. If M5Burner means be busy after clicking ``Burn``, please wait for
a few minutes. It'll be normal after the firmware has been burnt
successfully.***

***2. If the burning procedure has been interrupted(like M5Burner has
been closed suddenly...), it's better to burn your board again.***
