# UIFlow Block Custom{docsify-ignore-all}


1. [Create block](#Create-block)

2. [Code-Parameter](#Code-Parameter)

3. [Save and Changes](#Save-and-Changes)

4. [Using program block](#Using-program-block)


## Create block


Create a custom block by clicking on the `Custom` option > `Create` in the block list.

<img src="assets/img/related_documents/blockly_custom/custom_01.jpg">

To create a new block, we need to provide:

`1: group name`: the name of the group in which the custom block is placed

`2: Block color`: Appearance color of the block

`3: Block label`: Only letters, numbers, underscores are allowed

`4: Block type`: Define the type of the block as `Value` (value), or `Execute` (execute)

`5: Number of blocks`: Ability to add multiple blocks at the same time and save them to a `.m5b` file at the same time

<img src="assets/img/related_documents/blockly_custom/custom_02.jpg">


## Code-Parameter


Click the `Add` option under `Parameter`, add a program property, enter the name displayed in the block, and select the property type. Enter the code contained in the custom block in the `Block Code` option box.

[Click here to visit Github for more program API](https://github.com/m5stack/UIFlow-Code/wiki)

<img src="assets/img/related_documents/blockly_custom/custom_03.jpg">

When the attribute type of a custom block has constant or variable input, we can get these values in the code and perform further processing and operations.

Example: Select the attribute type as `String` (string input). In this case, if we want to get the string input when using, just use `${Parameter name}` in the code. It is `${show_word}`. It should be noted that when there is a space in the block name, use ${} to get the space that needs to be replaced with the `_` underscore.

<img src="assets/img/related_documents/blockly_custom/custom_04.jpg">

## Save and Changes

After editing the program, click `Download` to save.

Click on `Open .m5b` to open the saved custom program for modification.

<img src="assets/img/related_documents/blockly_custom/custom_05.jpg">


## Using program block

Open a custom block by clicking on the`Custom`option > `Open` ，in the block list.

<img src="assets/img/related_documents/blockly_custom/custom_06.jpg">
<br></br>
<img src="assets/img/related_documents/blockly_custom/custom_07.jpg">