***********
Get Started
***********

This document is intended to help users set up the software environment for development of applications. Through a simple example we would like to illustrate how to develop M5Stack boards, firmware(`Arduino IDE`), Blockly or source files(`Micropython`) download to M5Stack boards.


Introduction
============


What You Need
=============

To develop applications for M5Stack Core you need:

* **PC** loaded with either Windows, Linux or Mac operating system
* a **M5Stack Core** with Type-C cable


Your boards
============

.. note::
    Make sure you have installed USB driver so that your board can establish serial connection with PC. If not, please view this article `establish_serial_connection`_ for connection.

.. _establish_serial_connection: establish_serial_connection.html


At the first time, you need to burn the specific firmware file(.bin) to your board following this article `How to burn firmware`_ befor developing it.

.. _how to burn firmware: how_to_burn_firmware_en.html

If you have one of ESP32 development boards listed below, click the corresponding one to start your development.

============================  ============================  ============================
|M5Stack Core|_                  |M5GO|_                            |M5CAMERA|_
----------------------------  ----------------------------  ----------------------------
`M5Stack Core`_                  `M5GO`_                            `M5CAMERA`_
----------------------------  ----------------------------  ----------------------------
|M5Bala|_                       |M5Stack STEPMOTOR|_                 |M5CAMERA|_
----------------------------  ----------------------------  ----------------------------
`M5Bala`_                       `M5Stack STEPMOTOR`_                 `M5CAMERA`_
============================  ============================  ============================


.. |M5Stack Core| image:: ../../_static/getting_started_pics/m5stack_core.png
.. _M5Stack Core: m5stack_core_get_started.html

.. |M5GO| image:: ../../_static/getting_started_pics/m5go.jpg
.. _M5GO: m5stack_core_get_started.html

.. |M5CAMERA| image::  ../../_static/getting_started_pics/m5camera.jpg
.. _M5CAMERA: get-started-ESP32CAM.html

.. |M5Stack STEPMOTOR| image::  ../../_static/pics/m5-stepmotor.jpg
.. _M5Stack STEPMOTOR: get-started-StepMotor.html

.. |M5Bala| image::  ../../_static/pics/M5Bala.jpg
.. _M5Bala: get-started-M5Bala.html


.. toctree::
    :maxdepth: 1
    :hidden:

    M5Stack Core <m5stack_core_get_started_MicroPython>
    M5GO <m5stack_core_get_started>
    ESP32CAM <get-started-ESP32CAM>
    STEPMOTOR Module <get-started-StepMotor>
    M5Bala <get-started-M5Bala>

Which programming mode you like
=================================

For being familiar with the programming mode you lik, We suggest you following the corresponding option to do more practices.

============================  ============================  ============================
|Arduino|_                          |Blockly|_                      |MicroPython|_
----------------------------  ----------------------------  ----------------------------
`Arduino`_                          `Blockly`_                      `MicroPython`_
============================  ============================  ============================

.. |Arduino| image:: ../../_static/getting_started_pics/programming_mode_arduino.png
.. |Blockly| image:: ../../_static/getting_started_pics/programming_mode_blockly.png
.. |MicroPython| image:: ../../_static/getting_started_pics/programming_mode_micropython.png

.. _Arduino: practices_arduino.html
.. _Blockly: practices_blockly.html
.. _MicroPython: practices_micropython.html



Related Documents
=================

.. toctree::
    :maxdepth: 1

    establish_serial_connection
    how_to_burn_firmware_en
    how_to_connect_wifi_using_core
    upgrade_m5stack_lib