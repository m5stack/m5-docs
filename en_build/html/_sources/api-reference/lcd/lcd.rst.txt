LCD API
********

-----------------------------

Function
---------

lcd.setbrightness(uint8_t brightness)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

lcd.setRotation(degree)
>>>>>>>>>>>>>>>>>>>>>>>

| **Description:**
|  set the angle of rotation of the entire screen

| **Parament:**
|  **degree:** the angle of rotation

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.setRotation(90)

lcd.setColor(color [, background\_color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|  Set the default foreground/background color

| **Parament:**
|   **color:** the color of text
|   **background\_color:** the fill color of text

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.setColor(lcd.RED)
    lcd.setColor(lcd.ORANGE, LCD.DARKCYAN)

lcd.setTextColor(color [,background\_color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   This function is as same as *setColor(color [, background\_color])*

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.setTextColor(lcd.PINK)
    lcd.setTextColor(lcd.ORANGE, LCD.DARKCYAN)

lcd.fillScreen(color)
>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Fill the entire screen with the given color

| **Parament:**
|   **color:** color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillScreen(lcd.RED)

lcd.drawPixel(x, y [,color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Draw the pixel at position **(x,y)**
| *Note:*
|   *If color is not given, current foreground color is used*

| **Parament:**
|   **color：** color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawPixel(22,22,lcd.RED)  

lcd.drawLine(x, y, x1, y1 [,color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Draw the line from point **(x,y)** to point **(x1,y1)**
| *Note:*
|   *If color is not given, current foreground color is used*

| **Parament:**
|   **color：** color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawLine(0,0,12,12,lcd.WHITE) 

lcd.drawTriangle(x, y, x1, y1, x2, y2 [,color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Draw the triangel between points **(x,y)**, **(x1,y1)** and **(x2,y2)**
| *Note:* 　　
|   If color is not given, current foreground color is used
　
| **Parament:**
|   **color:** color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawTriangle(22,22,69,98,51,22,lcd.RED)

lcd.fillTriangle(x, y, x1, y1, x2, y2 [,color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Fill the triangel between points **(x,y)**, **(x1,y1)** and **(x2,y2)**
| *Note:* 　　
|   *If color is not given, triangle will be filled in current foreground color*

| **Parament:**
|   **color：** color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillTriangle(122, 122, 169, 198, 151, 182, lcd.RED)

lcd.drawCircle(x, y, r [,color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
| **Description:*** 　　
|   Draw the circle with center at **(x,y)** and radius **r**
| *Note:* 　　
|  *If color is not given, current foreground color is used*

| **Parament:**
|   **r:** the radius of circle
|   **color:** color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawCircle(180, 180, 10, lcd.BLUE) 

lcd.fillCircle(x, y, r [,color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Fill the circle with center at **(x,y)** and radius **r**
| *Note:* 　　
|   *If color is not given, current foregroundcolor will be used*

| **Parament:**
|   **r:** the radius of circle
|   **color:** color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillcircle(100, 100, 10, lcd.BLUE) 

lcd.drawRect(x, y, w, h, [,color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Draw the rectangle from the upper left point at **(x,y)** and **width** and **height**
| *Note:* 　　
|   *If color is not given, rectangle will be drawn in current foreground color*

| **Parament:**
|   **w:** display phisical width in pixels (display's smaller dimension)
|   **h:** display phisical height in pixels (display's larger dimension)
|   **color:** optional, color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawRect(180, 12, 122, 10, lcd.BLUE)

lcd.fillRect(x, y, w, h, [,color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Fill the rectangle from the upper left point at **(x,y)** and **width** and **height**
| *Note:* 　　
|   *If fillcolor is not given, rectangle will be filled in current foreground color*

| **Parament:**
|   **w:** display phisical width in pixels (display's smaller dimension)
|   **h:** display phisical height in pixels (display's larger dimension)
|   **color:** optional, color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillRect(180,30,122,10,lcd.BLUE)

lcd.drawRoundRect(x, y, w, h, r [,color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Draw the rectangle with rounded corners from the upper left point at **(x,y)** and **width** and **height**. Corner radius is given by **r** argument
| *Note:* 　　
|   *If *color* is not given, current foreground color will be used*

| **Parament:**
|   **w:** display phisical width in pixels (display's smaller dimension)
|   **h:** display phisical height in pixels (display's larger dimension)
|   **r:** the radius of circle
|   **color:** optional, color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawRoundRect(180,50,122,10,4,lcd.BLUE) 

lcd.fillRoundRect(x, y, w, h, r [,color])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Fill the rectangle with rounded corners from the upper left point at **(x,y)** and **width** and **height**. Corner radius is given by **r** argument
| *Note:* 　　
|   If **color** is not given, current foreground color will be used

| **Parament:**
|   **w:** display phisical width in pixel (display's smaller dimension)
|   **h:** display phisical height in pixels (display's larger dimension)
|   **r:** the radius of circle
|   **color:** optional, color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillRoundRect(180,70,122,10,4,lcd.BLUE) 

lcd.print('text', [x, y])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Print the **text** at position **(x,y)**

| **Parament:**
|   **text:** the string need to print

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.print('this is a print text function', 80, 80)

lcd.clear([color])
>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Clear the screen with default background color orspecific color if given

| **Parament:**
|   **color:** optional, color values

| **Example:**

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.clear()

---------------------

Usage
------

.. code:: python

    from machine import SPI, Pin
    from display import LCD

    spi = SPI(1, baudrate=32000000, mosi=Pin(23), miso=Pin(19), sck=Pin(18))

    lcd = LCD(spi = spi) #lcd init
    lcd.fillScreen(lcd.BLACK) #set the default background color

    lcd.drawLine(0, 0, lcd.WHITE)
    lcd.drawTriangle(22, 22, 69, 98, 51, 22, lcd.RED)
    lcd.fillTriangle(122, 122, 169, 198, 151, 182, lcd.RED)
    lcd.drawCircle(180, 180, 10, lcd.BLUE)
    lcd.fillcircle(100, 100, 10, lcd.BLUE)
    lcd.drawRect(180, 12, 122, 10, lcd.BLUE)
    lcd.fillRect(180, 30, 122, 10, lcd.BLUE)
    lcd.drawRoundRect(180, 50, 122, 10, 4, lcd.BLUE)
    lcd.fillRoundRect(180, 70, 122, 10, 4, lcd.BLUE)
    lcd.print('this is a print text function', 80, 80)
