# Getting Started with the M5StickC and FreeRTOS {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.png">

## 1. Setup Development Environment

### 1.1 Setting Up the Toolchain on Windows

#### 1.1.1 Download Toolchain

- [click here to download esp32_win32_msys2_environment_and_toolchain-20180110.zip](https://dl.espressif.com/dl/esp32_win32_msys2_environment_and_toolchain-20180110.zip)

####  1.1.2 Install MSYS2

- Unzip the file ‘esp32_win32_msys2_environment_and_toolchain-20180110.zip’ to the root directory of ‘Drive C:’, you will find ‘msys32’ folder

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws01.png">

#### 1.1.3 Creat folder

- Run ‘C:\msys32\mingw32.exe’, enter command menu, and create esp directory by inputting ‘mkdir -p ~/esp’

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws02.png">

### 1.2 Install ESP-IDF

#### 1.2.1 Clone ESP-IDF

- Input ‘cd ~/esp’, then ‘git clone -b v3.3 --recursive https://github.com/espressif/esp-idf.git’  You will see the directory of esp-idf

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws03.png">

#### 1.2.2 Set ESP-IDF environment variables on Windows

- Create a script file ‘export_idf_path.sh’ in ‘C:\msys32\etc\profile.d’, and add the code: export IDF_PATH="C:/msys32/home/terryyao/esp/esp-idf" 
Please refer to the actual path of ESP-IDF in your PC

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws04.png">


#### 1.2.3 Verify environment

- Enter ‘printenv IDF_PATH’ to verify

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws05.png">

### 1.3 Install Python Packages

- Input ‘python -m pip install --user -r $IDF_PATH/requirements.txt’

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws06.png">

### 1.4 Test Demo

- Program a demo to test, for example ‘hello_world’

#### 1.4.1 Enter the esp directory

- Enter the esp directory and input ‘cd ~/esp’

#### 1.4.2 Copy the example of 'hello_world' to esp directory

- Input ‘cp -r $IDF_PATH/examples/get-started/hello_world ./’

#### 1.4.3 Enter ‘hello_world’ example

- input ‘cd ~/esp/hello_world’

#### 1.4.4 Connect M5StickC with PC, start to configure

- Input ’make menuconfig’, enter Configuration menu:

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws07.png">

- Once you see above screen, means ESP-IDF set up well. Exit

## 2. Download and Configure FreeRTOS

### 2.1 Install FreeRTOS

- Input ‘git clone https://github.com/aws/amazon-freertos.git --recurse-submodules’

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws08.png">

### 2.2 Get M5StickC code

#### 2.2.1 Enter Development Board Menu

- Input ‘cd amazon-freertos/vendors/espressif/boards/’

#### 2.2.2 Download M5StickC code

- Input ‘git clone http://gitlab.m5stack.com/sakabin/aws-stickc-idf m5stickc’

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws09.png">

#### 2.2.3 Use 'AWS CLI' to run AWS IoT commands

- Input 'easy_install awscli' to install the AWS CLI

#### 2.2.4 Configure AWS CLI

* [Setting Up Your AWS Account and Permissions](https://docs.aws.amazon.com/freertos/latest/userguide/freertos-account-and-permissions.html)

- Visit IAM console to get AWS Access Key ID, and AWS Secret Access Key for an IAM user

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws10.png">

- Run ‘aws configure’ to set parameters

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws11.png">

- Create two files, ‘config’ and ‘credentials’, in C:\msys32\home\user\.aws

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws12.png">

#### 2.2.5 Install boto3 Python module

- Input ‘easy_install boto3’

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws13.png">

#### 2.2.6 Configure network

- Open ‘demos\common\tools\aws_config_quick_start\configure.json’ to configure ‘thing_name’, ‘wifi_ssid’, ‘wifi_password’, ‘wifi_security’, as below

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws14.png">

- Enter ‘demos/common/tools/aws_config_quick_start’ folder, input ‘python SetupAWS.py setup’

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws15.png">

- Enter ‘demos\espressif\esp32_devkitc_esp_wrover_kit\make’, input ‘make menuconfig’

- To start compiling, you need to block IDF_PATH by inputting ‘unset IDF_PATH’

#### 2.2.7 Enter M5StickC Menu

- Input ‘cd m5stickc/aws_demos’

#### 2.2.8 Burn-in

- Input ‘make flash monitor’, then select default

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws16.png">

#### 2.2.9 Succeed!

