from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import viewsets, mixins

from .models import Topic, Chapter
from .serializers import ChapterSerializers, ChapterSimpleSerializers, TopicSerializers


class TopicViewset(viewsets.ModelViewSet):
    '''
    标签视图集 处理 api/tag get post api/tag/slug get delete put patch
    '''
    queryset = Topic.objects.all()
    serializer_class = TopicSerializers
    lookup_field = 'slug'


class ChapterFileViewset(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    # permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_serializer_class(self):
        if self.action in ['create', 'update']:
            return ChapterSerializers
        return ChapterSimpleSerializers
