from rest_framework import serializers

from .models import PostImg
from .utils import getFileMd5,getFileSize,judgeFileType,rename




class PostImgSerializers(serializers.ModelSerializer):
    class Meta:
        model = PostImg
        fields = '__all__'
        read_only_fields = ('imgMd5','name')

    def validate(self, attrs):
        img = attrs['img']
        # 判断图片是否存在
        md5 = getFileMd5(img)
        imgobj = PostImg.objects.filter(imgMd5=md5)
        # 省略 暂时没用
        # if imgobj:
        #     raise serializers.ValidationError('文件已存在')
        # 重命名
        name = rename(img.name)
        # 判断图片大小
        file_size = getFileSize(img.size)
        if not file_size:
            raise serializers.ValidationError('图片太大')
        file_md = getFileMd5(img)
        print(md5)
        attrs['imgMd5'] = md5
        attrs['name'] = name
        print(attrs, 'hello')
        return attrs