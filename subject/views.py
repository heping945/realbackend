from .models import Topic,Chapter
from .serializers import ChapterSerializers,ChapterSimpleSerializers,TopicSerializers


from rest_framework import viewsets,mixins


class TopicViewset(viewsets.ModelViewSet):
    '''
    标签视图集 处理 api/tag get post api/tag/slug get delete put patch
    '''
    queryset = Topic.objects.all()
    serializer_class = TopicSerializers
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    lookup_field = 'slug'


class ChapterFileViewset(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()

    def get_serializer_class(self):
        if self.action in ['create','update']:
            return  ChapterSerializers
        return ChapterSimpleSerializers