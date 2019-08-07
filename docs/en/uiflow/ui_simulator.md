# UI Elements
__________________________

#### Feature introduction

>UIFlow Designer allows you to create and manipulate various shapes and images on the M5Stack screen

><img src="/image/Display/UI.jpg" width="30%">

>* __Title__
Display a title bar at the top of the screen

>* __Label__
Display a text element wherever you place it on the screen

>* __Rect__
Display a square or rectangle (Parameters can be set by clicking on the element and changing the settings)

>* __Circle__
Display a circle (Parameters can be set by clicking on the element and changing the settings)

>* __image__
Display an image that has been uploaded to the M5 device


#### Adding and removing elements

>Add an element

><img src="/image/Display/UI_user1.gif" width="70%">

>Remove an element

><img src="/image/Display/UI_user2.gif" width="70%">

#### Programming UI elements

>Method 1：After placing an element on the screen, single press it to display the parameters window. From here you can adjust the elements color,size,position and layer

><img src="/image/Display/UI_user3.gif" width="70%">

>Method 2：After adding an element to the screen, its equivalent blocks will appear in the UI section of the blocks menu. Using blocks you can program all of the parameters of the element within your program.


><img src="/image/Display/UI_user4.gif" width="70%"> 

# Emoji
__________________________

#### Feature introduction

>UIFlow has a Block that makes the creation of simple images on the screen a walk in the park. By clicking the squares on the emoji grid we can draw a picture and use the color swatch to set the color of the pixels


><img src="/image/Display/Emoji.jpg" width="30%"> 

>* __Set emoji map in__
>Click on the squares of the grid to set which pixels will be filled with color on the pixel grid

>* __Set line x row x in__
>This block allows you to individually set the position and color of individual pixels on the grid

>* __Set background image x__
>Choose from a list of preset backgrounds for the backdrop of the grid

#### Usage

>When the grid has been filled and you have uploaded your code you will see the picture appear on the M5 screen

><img src="/image/Display/Emoji_user.gif" width="70%"> 


# Graphic
__________________________

#### Feature introduction

>Apart from the circle and rectangle provided in the UI designer, there are other shapes and elements we can program with the graphic blocks

><img src="/image/Display/Graphic_Block.jpg" width="70%"> 


>* __LCD clear__
>Clear the screen

>* __LCD fill__
Fill the screen with the color selected in the color swatch

>* __LCD print x,y__
Display text on the screen at the selected x/y coordinates

>* __Font__
Set the font of the text with a font from the list

>* __LCD pixel__
Draw a pixel at the selected x/y coordinate

>* __line__
Draw a line from origin point x/y to end point x/y

>* __rect__
Draw a rectangle of a desired width and height

>* __triangle__
Define the coordinates of the 3 points of a triangle and draw it in the color specified

>* __circle__
Draw a circle from the x/y origin and choose the radius and color

>* __ellipse__
Draw an ellipse from the x/y origin, set the radius with 2 parameters and choose the color

>* __polygon__
Draw a polygon at the x/y origin with a set radius and amount of sides

#### Attention
>The M5GO screen dimentions are 320X240


#### Example

>Create a triangle and set it's color to blue

><img src="/image/Display/Graphic_user.gif" width="70%"> 


# Displaying images
__________________________

#### Feature introduction

>Upload some photos from your computer and display them on your device（Attention：Images must be below 25k，in jpg or bmp format）

#### Upload image

>Connect to UIflow with your API key，Select the cloud file icon in the top right，select the image tab，click Add image and browse for an image，choose your image and upload, its name will appear in the list if it has successfully been uploaded.

><img src="/image/Display/image_user1.gif" width="70%"> 

#### Display the image

>In the UI designer grab an image placeholder and set it in the middle of the screen. Click on the image placeholder，choose your image name from the drop down list

><img src="/image/Display/image_user2.gif" width="70%"> 

#### Image manipulation

>After uploading an image and assigning it to the place holder, you can manipulate it with the image blocks in the UI blocks section. You can choose whether to show or hide the image and set its position on the screen.

><img src="/image/Display/image_user3.gif" width="70%"> 