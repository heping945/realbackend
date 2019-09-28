import django_filters

from .models import Post, Tag, Category


class PostFilter(django_filters.rest_framework.FilterSet):
    '''
    标签的过滤类
    '''
    title = django_filters.CharFilter(field_name='title', lookup_expr='icontains')
    body  = django_filters.CharFilter(field_name='body', lookup_expr='icontains')
    min_id = django_filters.NumberFilter(field_name='id',lookup_expr='gt')
    max_id = django_filters.NumberFilter(field_name='id',lookup_expr='lt')

    class Meta:
        model = Post
        fields = ['title', 'body','min_id','max_id']
