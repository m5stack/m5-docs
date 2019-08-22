# if condition
__________________________

#### Feature introduction

>The if block will run whatever code is inserted inside it, if the condition attached to the top of the block is fulfilled e.g. if button a pressed > set all rgb red


><img src="/image/Logic/IF.jpg" width="20%"> 

>* __if do__
The basic if block executes the code in the "do" position based on if the condition in the "if" position is met. The if section accepts the jigsaw puzzle shaped blocks such as button press event, maths and logic blocks or even sensor data from the units. 

>* __if else__
This if block allows us to run code if more than one condition is met. If the first condition is not met then it will default to whatever is placed in the "else" position. More conditions can be added by clicking the small cog on the if block and inserting "else if" blocks.

>* __true__
Values of true or false (A.K.A "Boolean") can be used in the if condition to determine whether some predefined condition has been met. For example if you created a variable called game over and gave it the value True and placed this block in setup before the loop, and then used the = block in your if condition to check whether gameover is equal to true then the code placed next to "do" would run. 


#### Usage

>The if condition is highly necessary for any program of reasonable complexity, it allows the program to go in multiple directions based on events input by the user or some other predefined variable

><img src="/image/Logic/IF_user.gif" width="70%"> 


# Logic Operator
__________________________

#### Feature Introduction

>This block is used in combination with the if conditions and takes two inputs and compares them against each other. They can be compared with the following operators = is equal to, < less than, > more than etc .. 

><img src="/image/Logic/LogicA.jpg" width="20%"> 

#### Usage

>Use the data to establish a relationship and connect to the if block as a judgment condition. For example, when the gyroscope X coordinate is greater than 90, the RGB bar is lit.

><img src="/image/Logic/LogicA_user.gif" width="70%"> 

# logic operation
__________________________

#### Function Description

>Perform logical operations on "and, or, not" for two logical relations

><img src="/image/Logic/LogicB.jpg" width="30%"> 

>* __and__
When the left and right logical relations __both hold__, the result of the logical operation is True, otherwise it is False.

>* __or__
When the left and right logical relations __have a__, the result of the logical operation is True, otherwise False

>* __not__
Invert the logical result of an expression, that is, notTrue=False, notFalse=True

#### Instructions

>Add the relationship that needs to be logically added to both sides, modify the operation type

><img src="/image/Logic/LogicB_user.gif" width="70%"> 


# Conditional loop
__________________________

#### Function Description

>As the name suggests, a conditional loop refers to a loop that needs to satisfy certain conditions. When it meets the conditions we set, it loops through the contents of the program in Block.


><img src="/image/Loops/Repeat.jpg" width="30%"> 

>* __repeat n time__
Set the number of cycles

>* __repeat while__
Determine whether the condition is true or not, and when inception, infinite loop

#### Instructions

>Add repaet to the program, set the number of loops (loop conditions), add the program that needs to loop

><img src="/image/Loops/Repeat_user.gif" width="70%"> 

# Data iteration
__________________________

#### Function Description

>Simply put, data iteration is to assign a number of numbers, one after the other, to the same variable, and once for each assignment, run the contents of do once.

><img src="/image/Loops/Range.jpg" width="40%"> 

>* __for each item i in list__
Iterate over the contents of an array onto the variable __i__ and run the contents of do once per iteration.

>* __count with i from a to b by c__
Increased from __a__ to __b__ , the number of each increment is __c__ , and the result of each increase is iterated to the variable __i__, and once per iteration, the content of do is run once.

>* __break out of loop__
You can choose to jump out of the entire loop, or jump out of this loop, and execute when you execute the block.

#### Instructions

>Add an iterative block to the program, set the iteration parameters, and the do program that runs after each iteration. Example: Iterate the brightness of the RGB bar from 0 to 100.

><img src="/image/Loops/Range_user.gif" width="70%"> 

# Functions
________________________

#### What is a function？

>Functions are a tool that help us wrap our code into one neat package that we can give a name, and then call that name anywhere in our program and it will run the code contained within it. Functions can help to keep our code neat and concise and avoid repeating the same things over and over.

><img src="/image/Functions/Functions.png" width="30%"> 

#### Create a function

>Select functions from the blocks menu and drag it to the coding area. Enter a new name for your function in the text box provided on the block.

><img src="/image/Functions/Functions_user1.gif" width="70%"> 

#### Using a function

>When we add a function to the coding area a new block will appear in the function blocks menu. We can add this block to other parts of our code and it will represent whatever code is put inside the main function block.

><img src="/image/Functions/Functions_user2.gif" width="70%"> 
