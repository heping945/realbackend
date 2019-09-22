import xadmin

from .models import Topic, Chapter


class TopicAdmin:
    list_display = ['title', 'slug', 'reproduce', 'reproduce_source', 'create_date']


xadmin.site.register(Topic, TopicAdmin)


class ChapterAdmin:
    list_display = ['title', 'topic', 'md5' ,'md_body', 'md_File', 'create_date']


xadmin.site.register(Chapter, ChapterAdmin)

