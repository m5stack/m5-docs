Speaker API
************

-----------------------------

Function
---------

volume(volume)
>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Set the volume of sound

| **Parament:**
|   **volume:** sound volume 

| **Example:**
.. code:: python

    from m5stack import *

    speaker.volume(2)
    speaker.tone(freq=1800)

tone(freq [, duration])
>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Speak a sound with `frequency` and `duration`

| **Parament:**
|   **frequency:** the frequency of sound 
|   **duration:** the duration of sound continued


| **Return:**
|   None

| **Example:**
.. code:: python

    from m5stack import *

    speaker.volume(2)
    speaker.tone(freq=1800)
    speaker.tone(freq=1800, duration=200) # Non-blocking

---------------------

Usage
------

.. code:: python

    from m5stack import *

    speaker.volume(2)
    speaker.tone(freq=1800)
    speaker.tone(freq=1800, duration=200) # Non-blocking