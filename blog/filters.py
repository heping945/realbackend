import django_filters

from .models import Post,Tag,Category

class PostFilter(django_filters.rest_framework.FilterSet):
    '''
    标签的过滤类
    '''
    price_min = django_filters.NumberFilter(name='xxx',lookup_expr='gte')
    price_max = django_filters.NumberFilter(name='xxx',lookup_expr='lte')

    class Meta:
        model = Post
        fields = ['price_min','price_max']
