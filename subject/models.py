from unidecode import unidecode
import os

from django.db import models
from django.template.defaultfilters import slugify


# Create your models here.


class Topic(models.Model):
    title = models.CharField('标题', help_text='标题', max_length=32, unique=True)
    slug = models.SlugField('slug', max_length=40, blank=True)
    reproduce = models.BooleanField('是否转载', default=False, help_text='是否转载')
    reproduce_source = models.URLField('转载来源地址', max_length=512, null=True, blank=True, help_text='转载来源地址')
    create_date = models.DateTimeField('创建时间', auto_now_add=True, help_text='创建时间')

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.id or not self.slug:
            # Newly created object, so set slug
            self.slug = slugify(unidecode(self.title))
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "主题"
        verbose_name_plural = verbose_name


# 定义md文件上传路径
def subject_directory_path(instance, filename):
    return os.path.join('subject', instance.topic.title, filename)


class Chapter(models.Model):
    title = models.CharField('标题', help_text='标题', max_length=32)
    topic = models.ForeignKey(Topic, verbose_name='主题', help_text='所属主题')
    md5 = models.CharField(max_length=128, verbose_name="MD5值")
    md_body = models.TextField('md正文', help_text='正文.md')
    md_File = models.FileField('正文md文件', help_text='md文件',upload_to=subject_directory_path)
    create_date = models.DateTimeField('创建时间', auto_now_add=True, help_text='创建时间')

    # order = models.PositiveIntegerField('顺序',default=0)

    def __str__(self):
        return self.title

    class Meta:
        unique_together = ('title', 'topic')
        verbose_name = '章节'
        verbose_name_plural = verbose_name
