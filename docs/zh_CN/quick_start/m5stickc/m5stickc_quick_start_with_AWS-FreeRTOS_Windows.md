# M5StickC Amazon FreeRTOS 上手指南 {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stickc/m5stickc_06.png">

## 1. 开发环境配置

### 1.1 Windows安装Toolchain 编译链工具

#### 1.1.1 下载Toolchain

- [点击此处下载 esp32_win32_msys2_environment_and_toolchain-20180110.zip](https://dl.espressif.com/dl/esp32_win32_msys2_environment_and_toolchain-20180110.zip)

####  1.1.2 安装MSYS2

- 解压 ‘esp32_win32_msys2_environment_and_toolchain-20180110.zip’ 到C盘根目录, 你将看到MSYS32文件夹

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws01.png">

#### 1.1.3 创建目录

- 打开C:\msys32\mingw32.exe, 进入shell command界面,并创建esp目录 mkdir -p ~/esp

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws02.png">

### 1.2 安装 ESP-IDF

#### 1.2.1 下载 ESP-IDF

- 输入cd ~/esp, 然后git clone -b v3.3 --recursive https://github.com/espressif/esp-idf.git,你将看到esp-idf的目录

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws03.png">

#### 1.2.2 设置Windows系统ESP-IDF环境变量

- 在C:\msys32\etc\profile.d创建脚本文件export_idf_path.sh, 并加入代码: export IDF_PATH="C:\msys32\home\Administrator\esp\esp-idf "


<img src="assets/img/getting_started_pics/m5stickc/stickc_aws04.png">


#### 1.2.3 确认路径

- 输入printenv IDF_PATH验证

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws05.png">

### 1.3 安装 Python Packages

- 输入python -m pip install --user -r $IDF_PATH/requirements.txt

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws06.png">

### 1.4 选择Demo测试环境

- 编译一个demo测试, 如hello_word

#### 1.4.1 Enter the esp directory

- 输入 ‘cd ~/esp’

#### 1.4.2 Copy the example of 'hello_world' to esp directory

- Input ‘cp -r $IDF_PATH/examples/get-started/hello_world ./’

#### 1.4.3 进入 ‘hello_world’ 示例

- 进入esp目录, 输入cd ~/esp

#### 1.4.4 将M5StickC连接电脑 开始配置

- 输入 ’make menuconfig’ 进入配置菜单

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws07.png">

- 如果你能看到该界面说明ESP-IDF环境配置完成

## 2. 下载和编译 Amazon FreeRTOS

### 2.1 安装 Amazon FreeRTOS

- 输入 ‘git clone https://github.com/aws/amazon-freertos.git --recurse-submodules’

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws08.png">

### 2.2 获取M5StickC的代码

#### 2.2.1 进入开发板文件目录

- 输入 ‘cd amazon-freertos/vendors/espressif/boards/’

#### 2.2.2 下载 M5StickC 代码

- 输入 ‘git clone http://gitlab.m5stack.com/sakabin/aws-stickc-idf m5stickc’

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws09.png">

#### 2.2.3 使用 'AWS CLI' 运行AWS IoT命令

- 输入 'easy_install awscli' 安装AWS CLI

#### 2.2.4 配置 AWS

* [AWS CLI 参考链接](https://docs.aws.amazon.com/freertos/latest/userguide/freertos-account-and-permissions.html)

- 访问 IAM 控制台 获取 IAM用户的AWS Access Key ID 和 AWS Secret Access Key 

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws10.png">

- 运行 ‘aws configure’ 配置参数

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws11.png">

- 在C:\msys32\home\user\.aws路径生成config和credentials两个文件

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws12.png">

#### 2.2.5 安装 boto3 Python 模块

- 输入 ‘easy_install boto3’

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws13.png">

#### 2.2.6 配置网络

- 打开 ‘demos\common\tools\aws_config_quick_start\configure.json’ 配置 ‘thing_name’, ‘wifi_ssid’, ‘wifi_password’, ‘wifi_security’等信息，如图

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws14.png">

- 进入 ‘demos/common/tools/aws_config_quick_start’ 目录，输入 ‘python SetupAWS.py setup’

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws15.png">

- 进入 ‘demos\espressif\esp32_devkitc_esp_wrover_kit\make’ 输入 ‘make menuconfig’

- 开始编译前, 你需要使用‘unset IDF_PATH’命令屏蔽掉之前配置的IDF_PATH路径

#### 2.2.7 进入 M5StickC 目录

- 输入 ‘cd m5stickc/aws_demos’

#### 2.2.8 Burn-in

- 输入 ‘make flash monitor’ 保持默认选项

<img src="assets/img/getting_started_pics/m5stickc/stickc_aws16.png">

#### 2.2.9 烧录成功

