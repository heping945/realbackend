from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

from .permission import IsAuthorOrReadOnly
from .serializers import (CategorySerializers,TagSerializers,PostDetailSerializers,
                          PostCreateUpdateSerializers,PostSimpleSerializers)
from .models import (Category,Tag,Post,)


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 1000


class CategoryViewset(viewsets.ReadOnlyModelViewSet):
    '''
    分类视图集 处理 api/category get    api/category/slug get
    '''
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
    lookup_field = 'slug'

class TagViewset(viewsets.ModelViewSet):
    '''
    标签视图集 处理 api/tag get post api/tag/slug get delete put patch
    '''
    queryset = Tag.objects.all()
    serializer_class = TagSerializers
    permission_classes = (IsAuthenticatedOrReadOnly,)
    lookup_field = 'slug'

class PostViewset(viewsets.ModelViewSet):
    '''
    文章视图集 处理 api/post get post api/post/id get delete put patch
    '''
    queryset = Post.objects.all()
    permission_classes = (IsAuthorOrReadOnly,IsAuthenticatedOrReadOnly)
    pagination_class = StandardResultsSetPagination
    filter_backends = (DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter)
    filter_fields = ('author','category','tags','create_date')
    search_fields = ('title',)
    ordering_fields = ('create_date','views_count',)


    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return PostCreateUpdateSerializers
        if self.action == 'list':
            return PostSimpleSerializers
        return PostDetailSerializers
    def perform_create(self, serializer):
        """
        重写 perform_create
        user 信息不在 request.data 中, 在保存时加入 user 信息
        """
        serializer.save(author=self.request.user)



