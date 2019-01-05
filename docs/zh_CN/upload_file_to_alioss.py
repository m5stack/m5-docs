# -*- coding: utf-8 -*-
import oss2
import time
import os
import sys
# 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录 https://ram.console.aliyun.com 创建RAM账号。
auth = oss2.Auth('LTAILysC4tiYYWJF', 'sh7D9Qjs0VRXl0fEkFESazMUCu3HU5')
# Endpoint以杭州为例，其它Region请按实际情况填写。
endpoint = 'http://oss-cn-shenzhen.aliyuncs.com'
# 设置连接超时时间设为30秒。
bucket = oss2.Bucket(auth, endpoint, 'm5-docs', connect_timeout=30)

def percentage(consumed_bytes, total_bytes):
    if total_bytes:
        rate = int(100 * (float(consumed_bytes) / float(total_bytes)))
        print('\r{0}% '.format(rate), end='')
        sys.stdout.flush()
def uploadFiles(bucket,tmp_file):
    """ uploadFiles
    Upload FLAGS.files to the oss
    """
    start_time = time.time()
    if not os.path.exists(tmp_file):
        print("File {0} is not exists!".format(tmp_file))
    else:
        print("Will upload {0} to the oss!".format(tmp_file))
        tmp_time = time.time()
        # cut the file name
        filename = tmp_file[tmp_file.rfind("\\") + 1: len(tmp_file)]
        ossFilename = 'docs/'+filename
        oss2.resumable_upload(
            bucket,
            ossFilename,
            tmp_file,
         progress_callback=percentage)
        print("URL:https://huannan-image.oss-cn-shenzhen.aliyuncs.com/docs/"+filename)

if __name__=='__main__':
    # file_name=input("please input a image filename>>")
    # uploadFiles(bucket,file_name)
    # print()

    for root, dirs, files in os.walk(os.getcwd()):
        for file in files:
            # if file == 'basic.md' or file == 'upload_file_to_alioss.py':
                # print(dirs)
                # pass
            # elif file == 'gray.md':
                filename = os.path.join(root, file)
                remote_filepath = 'zh_CN/'+os.path.relpath(filename).replace('\\','/')
                # print(remote_filepath)
                bucket.put_object_from_file(remote_filepath, filename)