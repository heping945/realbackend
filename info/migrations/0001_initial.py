# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2020-02-07 22:13
from __future__ import unicode_literals

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Info',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='标题', max_length=200, unique=True, verbose_name='标题')),
                ('body', ckeditor.fields.RichTextField(blank=True, help_text='正文', null=True, verbose_name='正文')),
                ('body_md', models.TextField(blank=True, help_text='正文.md', null=True, verbose_name='正文.md')),
                ('create_date', models.DateTimeField(auto_now_add=True, help_text='创建时间', verbose_name='创建时间')),
                ('mod_date', models.DateTimeField(auto_now=True, help_text='修改时间', verbose_name='修改时间')),
            ],
            options={
                'verbose_name': '信息',
                'verbose_name_plural': '信息',
                'ordering': ['-create_date'],
            },
        ),
    ]
