# V-Training {docsify-ignore-all}


<img src="assets\img\related_documents\v-training\v_training.webp" width="100%">

At present, V-Training provides two model training modes "Classification" (recognize objects and return their corresponding classification) "Detection (using Yolov3 algorithm, recognize the object is located in the image and draw a wireframe)", the user can according to their own use The scenes can be freely selected and used, and the model training methods of these two modes will be introduced below.

## Burner Firmware

### EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5StickV_v5.1.2.exe"><el-button type="primary">click to download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.For users who don't need to customize the firmware or perform other operations, using EasyLoader to burn firmware for M5StickV is the simplest solution.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.


### Kflash_GUI

> Users who use an operating system other than Windows or who need to specify a burning file can use **Kflash** for firmware burning. Click the link below to download the firmware.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickV_Firmware_v5.1.2.kfpkg"><el-button type="primary">click to download firmware</el-button></a>


>1. Flash tool Kflash_GUI.

<div class="files_download">
   <p class="item">
      <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.3/kflash_gui_v1.5.3_windows.7z">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.2/kflash_gui_v1.5.2_macOS.dmg">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.3/kflash_gui_v1.5.3_linux.tar.xz">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

>2. Connect the device to the computer through the Tpye-C data cable, double-click to open the burning tool**Kflash_GUI** application, select the corresponding device port, development board type (M5StickV), firmware program, baud rate. Click to download , start burning.

<img src="assets\img\getting_started_pics\m5stickv\kflash_gui_01.webp">

### Kflash

> 3. For users who are used to command line operation, [can also choose Kflash as the firmware burning tool.](https://github.com/kendryte/kflash.py)


## Classification mode

?>a lot of training material images are required for model training. Due to the different hardware of M5StickV and UnitV, the material shooting methods are also different. Please refer to the instructions below for shooting according to the actual hardware used.

### For M5StickV

> Material Training requires SD cards, users could downloade boot-M5StickV zip files, unzip the files to SD card.(M5StickC only recognized certain type of SD card , [click to see the supported type](en/core/m5stickv?id=sd-card-test))

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/VTraining-Client-VerA02B01.zip"><el-button type="primary">Click here download boot-M5StickV</el-button></a>

<img src="assets\img\related_documents\v-training\1.webp" width="60%">

> Load the SD card before power on the device. SD card is used for saving the footage. Long press left button to power on, if the screen show a display  Training like below, means it entered shooting program. 

<img src="assets\img\related_documents\v-training\2.webp" width="60%">

<mark>Note: In order to ensure the accuracy of recognition, the number of materials taken by each class must exceed 35, otherwise it will not be passed during cloud training. The more the number of materials, the better the recognition training effect, and the recognition rate Higher</mark>

>Navigate bar on top of the screen would display instant Class number and picture amount. Press HOME button to start  shooting, right side button is to switch between Classes.

<img src="assets\img\related_documents\v-training\3.webp" width="60%">

### For UnitV

>The boot-UnitV program is a picture material shooting program suitable for UnitV, which is used for material collection in the early stage of model training.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/UnitV_boot_v1220.py"><el-button type="primary">Click to download boot-UnitV</el-button></a>

>The training materials will be saved to the SD card by default, so please insert the SD card into the UnitV card slot before running the boot program. (Note: UnitV has requirements for the selection of SD cards, [click here to see the type of support](en/unit/unitv?id=sd-card-test)）

>Run the MaixPy IDE and connect to the UnitV device. Click the "Open File" option, open the downloaded boot.py file, and click the Run button. After running successfully, the camera image will be monitored in real time in the upper right corner of MaixPy IDE

>Match the camera screen on the IDE for shooting operations. Press the A button to take a picture. The B button is used to switch the class number. The output log will correspond to the class number of each operation and the number of pictures taken. Click "Serial Port Monitor" below to see the log output.

<img src="assets\img\getting_started_pics\unitv\unitv_qs1.webp" width="60%">

>At present, the program provides a total of 10 groups of classes for users to shoot training materials, each group represents a kind of recognition object. <mark> In order to obtain better training results, users must shoot more than 3 groups of Class Recognition object). In order to ensure the accuracy of recognition, the number of Class shooting materials in each group needs to exceed 35, otherwise it will not be passed during cloud training. The greater the number of materials, the better the recognition training effect and the higher the recognition rate high</mark>

<img src="assets\img\getting_started_pics\unitv\unitv_qs2.webp" width="60%">

>When shooting training materials, please try to keep the ambient light conditions of the material shooting consistent with the actual recognition application scene. The shooting distance is recommended to fill the screen with the recognition object completely and there is no other debris in the background.

<img src="assets\img\related_documents\v-training\4.webp" width="100%">

<mark>Note: In order to ensure the accuracy of recognition, the number of materials taken by each class must exceed 35, otherwise it will not be passed during cloud training. The more the number of materials, the better the recognition training effect, and the recognition rate Higher</mark>

### Material inspection and suppression

>After shooting the materials, click the disconnect option in the IDE, remove the SD card, and copy the image materials ("train" and "vaild" folders) in the SD to the computer through a card reader.

<img src="assets\img\getting_started_pics\unitv\unitv_qs3.webp" width="60%">

>The "Class" and "vaild" folders have the same Class number folder directory. When you switch between Classes and shoot material, the program will create files with the same Class number in "train" and "vaild" at the same time. Folder, and store the captured pictures into the Class folder under the respective directories of "train" and "vaild" according to the storage rules.

><mark>In addition to checking the correctness of the picture content before suppressing the packaging, you must ensure that the sum of the material pictures in the same Class serial number directory in the two folders of "train" and "vaild" is greater than 35. The class serial number catalog when the total number is less than 35 please Delete or backup. </mark> After completing the inspection, the next thing to do is to suppress the material files. Press the "train" and "vaild" folders into a "zip" format compressed package.


### Upload Data to Cloud

>[Click to visit upload page](http://v-training.m5stack.com/)，type in your personal information（upload file should under 200MB, and had to be ZIP format）

<img src="assets\img\related_documents\v-training\6.webp" width="60%">

> After the Upload is done, file will enter request queue. At bottom left corner will show the current queue status.

<img src="assets\img\related_documents\v-training\7.webp" width="60%">

### Download Model

>After training accomplished, code file will sent to your personal e-mail, copy the download link to download the file to your computer.Unzip the file, copy it to SD card, keep the SD card in the M5StickV

<img src="assets\img\related_documents\v-training\8.webp" width="60%">

<img src="assets\img\related_documents\v-training\9.webp" width="60%">

### Run Recognition Program

>power on to run the progarm automatically.

<img src="assets\img\related_documents\v-training\10.webp" width="60%">

>Default program will do the recognition according to the order of the Class, and will display on the screen. Users can change the boot.py file to modify the display information.

<img src="assets\img\related_documents\v-training\11.webp" width="60%">


### Program modification

>Since UnitV does not integrate screens, users can modify them based on existing programs according to their needs. Realize the output of identification data, or the corresponding execution function after successful identification. For example, print the identification information through the serial port.

**The following is the boot program with serial port printing program added. It is only a partial comment and is not a complete program. Please use the boot program file returned by training to modify it.**

```clike
    ...
    
    task = kpu.load("/sd/c33723fb62faf1be_mbnet10_quant.kmodel")//载入模型文件

    labels=["1","2","3","4","5","6"] #The list corresponds to the Class order of the training material, and corresponds to each identifier. You can also modify the elements in the list into other string fields.


    while(True):
        img = sensor.snapshot()
        fmap = kpu.forward(task, img)
        plist=fmap[:]
        pmax=max(plist)
        max_index=plist.index(pmax)
        a = lcd.display(img)
        if pmax > 0.95://Determine whether the recognition rate of the object is greater than 95%
            lcd.draw_string(40, 60, "Accu:%.2f Type:%s"%(pmax, labels[max_index].strip()))
            print(labels[max_index])//Print the identified object name through the serial port.
    
    ....
```

>After the UnitV is powered, it will run the boot program in SD by default to automatically recognize it. After adding the serial printing program, you can use the serial debugging tool to check the identification information.

<img src="assets\img\getting_started_pics\unitv\unitv_qs4.webp" width="60%">


## Detection mode(Yolov3)

### Footage shooting

> Similar to the training method of the classification mode above, in the detection mode (Yolov3) we still need to use the camera to shoot the material (here you can continue to use the shooting program in the classification mode). The difference is that in this training mode, multiple recognition objects are allowed in the same image frame. Therefore, when shooting multiple objects, there is no need to group shooting. <mark> The total amount of material shot must be greater than 100. </mark>

### LabelIMG material label

> After the shooting is completed, we use the labeling tool LabelIMG to mark the identified objects in the material and generate a mark file. Users can install the Python environment by themselves, run the following command on the command line, and install LabelIMG through its own pip package management tool。

```clike
pip install LabelIMG
```

> After the installation is complete, run the "LabelIMG" command line to open the labeling tool.

```clike
LabelIMG
```

> 1. Switch the marking tool to Yolo mode ---> 2. Open the picture storage directory ---> 3. Select the mark file storage directory ---> set the automatic saving mode.

<img src="assets\img\related_documents\v-training\yolov3_01.webp">

> Press the "W" key to start drawing the object border and name the object. (After adding the naming, add the record to the list, you can directly use it in the subsequent mark, without repeated input), click the next button, switch pictures, until all the materials are marked.

<img src="assets\img\related_documents\v-training\yolov3_02.webp">

> In addition to adding the tag file, we also need to manually add a v-training.config configuration file to tell the training service how many recognition objects we included in this training. (If two recognition objects are marked in the pattern example above, we need to fill in the number of categories in the configuration file as 2, the format is as follows)

```clike
{
    "classes":2
}
```
> Complete the above operations, place all the materials in the same folder, refer to the directory structure below. All files are selected and compressed into a compressed package in zip format for upload training.

```clike
folder----------------------
        |--v-training.config
        |--1.jpg
        |--1.txt
        |--2.jpg
        |--2.txt
        .....
```

> Complete the above operations, place all the materials in the same folder, refer to the directory structure below. All files are selected and compressed into a compressed package in zip format for upload training.

> For the upload method of material compression package and the model download mode, please refer to the training operation in the classification mode above. After the detection mode is trained, it will return `boot.py`, and` xxxx.model` files. Copy it to the SD card, and then insert the SD card into the device, you can run the identification program at boot.


## Good Practice

>1.  If your Loss line looks like below, there is something wrong with your dataset, you need to either clear it up or add more pictures. If everything is OK, and adding more pictures does not help, our network structure may not good for solve your problem.

<img src="assets\img\related_documents\v-training\12.webp" >


<img src="assets\img\related_documents\v-training\13.webp" >

>2. If your Loss line looks like below, it seems the Convolutional Neural Network does not converge at all. There might be some serious problems in your data-set, check your data-set. If everything is OK, and adding more pictures does not help, our network structure may not good for solve your problem.

<img src="assets\img\related_documents\v-training\14.webp" >

>3.  If your Loss line looks like below, but recognition results are still not good, you might need to add more pictures and try again;
If everything is OK, and adding more pictures does not help, our network structure may not good for solve your problem.


<img src="assets\img\related_documents\v-training\15.webp" >

>4. If the results you get is not very ideal, you might want to try to add few more pictures and train again. Network may converge better this time.

### Common Errors(FAQ):

>1. “CONTENT: Number of Classes presented in Train and Vaild dataset is not equal.”
Or
“CONTENT: Train or Valid folder not found. If you are using the M5StickV software, make sure you reach enough image counts of 35 per class.”
Or
“CONTENT: Number of Classes presented in Train and Vaild dataset is not equal.”

Answer: Your zip file should looks like this:
Inside your zip file, you have two folder named train and valid(or vaild, is also ok)

<img src="assets\img\related_documents\v-training\16.webp" >

Inside each of the folder, You have several folders start named by class (class should only be a number from 1 to 10). The number of folders in your train and valid folder should be the same. And the name of the folder should follow each other and starting at 1. 

<img src="assets\img\related_documents\v-training\17.webp" >

>2. “CONTENT: Lake of Enough Valid Dataset, Only 16 pictures found, but you need 20 in total.”
Or
“CNTENT: Lake of Enough Train Dataset, Only 43 pictures found, but you need 45 in total.”

Answer: You don’t have enough pictures in your train or valid folder. You need to add more photos to them. Or you accidentally add an extra class.

>3. “CONTENT: Number of Classes should larger or equal to two.”

Answer: Sorry, we don’t support single class, you need to at least have two or more class folders in your valid and train folder. 

>4. “CONTENT: Unexpected error happened during checking dataset, cannot identify image file 'dataset_tmp/xxxxxxxx_dataset/train/2/1.webp'”

Answer: The system cannot read the image while processing it. You might need to replace this picture. 


<script>
   anchor_search();
   scrollFunc();
</script>