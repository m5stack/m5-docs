#-*-coding:utf-8-*-

"""
1. 将模板env文件拷贝到新建文件夹中
2. 拷贝旧文件的中间部分内容（描述，特性...），插入到新建文件夹中的模板文件env
3. 替换模板文件env中的unit名字为旧文件的，替换“购买链接”为速卖通，删除多余旧文件拷贝过来的“原理图”“购买链接”
4. 把改好的文件重命名，再拷贝到上一层目录中替换旧文件
"""

import os
import sys
import re
import shutil

cur_path = os.getcwd()
# newFolderName = 'newFolder'
target_path = ""
files_list = []# 保存所有文件到这个列表中
flag_find_desc = 0
flag_find_picture = 0
flag_file_exit_picture = 0
pattern_desc = re.compile(r'^\[中文\]\([(/zh_CN)(zh_CN)]')
pos_example = 0
count = 0
count_example = 0
data_to_write = []
link_list = []
add_related_links = ["- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**", "\n", "\n", "- **[Forum](http://forum.m5stack.com/)**", "\n"]

def delet_line(path):
    # filename = os.path.split(path)[1]
    # print("path: %s, filename: %s"%(path, filename))
    content_list = []
    with open(path,"r",encoding="utf-8") as f_r:
        for line in f_r.readlines():
            # print(line)
            match_desc = pattern_desc.match(line)
            if match_desc:
                # print(line)
                content_list.append("\n")
                continue
            content_list.append(line)
        f_r.close()
        # print(content_list)
    with open(path,"w",encoding="utf-8") as f_w:
        for content in content_list:
            f_w.write(content)
        f_w.close()
    print(path)

def make_dir(path, new_folder):
    global target_path
    target_path = cur_path+os.path.sep+new_folder
    if not os.path.exists(target_path):
        os.makedirs(target_path)
    else:
        print('路径已经存在')
# file_list = os.listdir(cur_path)
# print(file_list)
# print("length of file_list: %d"%(len(file_list)))

def get_filepath_shotname_extension(filename):
    (filepath, tempfilename) = os.path.split(filename)
    (shotname, extension) = os.path.splitext(tempfilename)
    # print("filepath: %s, shotname: %s, extension: %s"%(filepath, shotname, extension))
    return (shotname, extension)

def get_all_files(path):
    files_list = []
    for i in os.listdir(path):
        if os.path.isdir(path+'\\'+i):
            # recurseDir(path+'\\'+i) # 注释这条语句，不处理目录
            print("dir: %s"%(path+'\\'+i))
        else:
            p=path+'\\'+i
            # print(p)
            extension = get_filepath_shotname_extension(p)[1]
            if extension == ".md":
                files_list.append(os.path.split(p)[1])# 把所有文件都放进这个列表中保存
                # print(os.path.split(p)[1])
    return files_list

def extract_content(filename):
    global flag_find_desc
    global flag_find_picture
    global flag_file_exit_picture
    global data_to_write

    # filename = get_filepath_shotname_extension(filename)
    with open(filename,"r",encoding="utf-8") as f_r:
        for line in f_r.readlines():
            match_desc = pattern_desc.match(line)
            match_picture = pattern_picture.match(line)
            if match_desc or match_picture:
                if match_desc:
                    flag_find_desc = 1 # get a flag
                if match_picture:
                    flag_find_picture = 1
            if flag_find_picture: # end
                flag_file_exit_picture = 1
                flag_find_picture = 0
                flag_find_desc = 0
                print(count)
                f_r.close()
            if flag_find_desc:
                data_to_write.append(line) # add data to a list
            # count+=1
        if flag_file_exit_picture:
            flag_file_exit_picture = 0
        else: # this file doesn't have pictures
            # print("this file doesn't have pictures:  %s"%filename)
            flag_find_desc = 0
            f_r.close()
    # print(data_to_write)
    os.chdir(target_path) # 切换到临时文件夹，并把列表写入到临时文件中（如果文件不存在，则创建）
    with open("temp.md","w",encoding="utf-8") as temp_f_w:
        for i in data_to_write:
            temp_f_w.write(i)# 保存要拷贝的内容到临时文件中
    temp_f_w.close()

def add_data_to_file(des_file, src_file):# 插入到中文文件
    fp = open(des_file, "r", encoding="utf-8")
    fp_add = open(src_file,"r", encoding="utf-8")
    content = fp.read()
    content_add = fp_add.read()
    fp.close()
    fp_add.close()
    post = content.find("## Example")# 寻找待插入位置所在的字符串
    if post != 1:
        content = content[:post] + content_add + content[post:]
        # print(content)
        fp = open(des_file, "w", encoding="utf-8")
        fp.write(content)
        fp.close()

def get_device_name(filename):
    shotname = get_filepath_shotname_extension(filename)[0]
    dev_name = shotname
    # print(dev_name)
    return dev_name

def delect_replace_content(filename):
    """
    先通过正则表达式匹配出两个网址，然后将第一个匹配到的网址替换成第二个网址
    替换文件中的内容为对应unit名字
    删除多余的内容
    """
    global link_list
    # filename = get_filepath_shotname_extension(filename)
    with open(filename,"r",encoding="utf-8") as fp:
        lines = fp.readlines()
        for line in lines:
            match_purchase = pattern_purchase.search(line)
            if match_purchase:
                link_list.append(match_purchase.group(2))# 找到两个购买链接，以备后面替换
        print(link_list)
    with open(filename,"w",encoding="utf-8") as f_w:
        for line in lines:
            if "ENV" in line:
                line = line.replace("ENV", get_device_name(filename).upper())
            if "env" in line:
                line = line.replace("env", get_device_name(filename))
            if link_list[0] in line:
                line = line.replace(link_list[0], link_list[1])
                print(line)
            # if ("-  **Example**" or "- **Example**" or "-  **[Purchase]" or "- **[Purchase]") in line:
            #     # print(line)
            #     continue # 删除多余的
            f_w.write(line)
    fp.close()
    f_w.close()
    with open(filename,"r+",encoding="utf-8") as fp:
        global add_related_links
        links_index = 0
        count = 0
        lines = fp.readlines()
        for line in lines:
            if ("## Related Link") in line:
                links_index = count
                print(links_index)
            count = count + 1
        fp.seek(0)
        for i in range(len(add_related_links)):
            lines.insert(links_index+i+2, add_related_links[i])
        for line in lines:
            fp.write(line)
    fp.close()

def recursive_exect_file(path):
    # files_list = os.listdir(path)
    for root, dirs, files in os.walk(path):
        for file in files:
            # print(old_path)
            old_path = os.path.join(root, file)
            filetype = get_filepath_shotname_extension(old_path)[1]
            if filetype == '.md':
                delet_line(old_path)
                # print(file)
            # if os.path.isfile(old_path):
            #     filetype = get_filepath_shotname_extension(old_path)[1]
            #     if filetype == '.md':
            #         # delet_line(file)
            #         print(file)
            # else:
            #     recursive_exect_file(old_path)

if __name__ == "__main__":
    # make_dir(cur_path, "temp_folder")
    # files_list = get_all_files(cur_path)
    # for filename in files_list:
    #     if not filename == "env_template.md":
    #         print(filename)
    #         shutil.copyfile(cur_path+"\\env_template.md", target_path+"\\"+filename)
    #         extract_content(filename)# make a temp file at cur_path
    #         add_data_to_file(filename, "temp.md")
    #         delect_replace_content(filename)
    #         data_to_write.clear()# 清空列表
    #         link_list.clear()
    #         # print(data_to_write)
    #         os.chdir(cur_path)

    recursive_exect_file('.')