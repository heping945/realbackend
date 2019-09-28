from rest_framework import serializers
from django.contrib.auth import get_user_model

from  .models import Category,Tag,Post
from  accounts.serializers import UserSimpleSerializers

User = get_user_model()


class ParentsSerialzisers(serializers.ModelSerializer):
    '''
    父分类序列
    '''
    slug = serializers.CharField(help_text="slug", label="slug",read_only=True)
    class Meta:
        model = Category
        fields = '__all__'

class CategorySubSerializers(serializers.HyperlinkedModelSerializer):
    slug = serializers.CharField(help_text="slug", label="slug",read_only=True)
    parent_category = ParentsSerialzisers()
    get_post_count = serializers.CharField(read_only=True)
    class Meta:
        model = Category
        fields = ('url','id','name','slug','parent_category','get_post_count')
        extra_kwargs = {
            'url': {'view_name': 'category-detail', 'lookup_field': 'slug'},
        }

class SimplePostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','title')

class CategorySerializers(serializers.HyperlinkedModelSerializer):
    slug = serializers.CharField(help_text="slug", label="slug",read_only=True)
    parent_category = ParentsSerialzisers()
    get_post_count = serializers.CharField(read_only=True)
    sub_cat = CategorySubSerializers(many=True)
    # cat_post = serializers.CharField(source='cat_post.id')
    cat_post = SimplePostSerializers(many=True)
    class Meta:
        model = Category
        fields = ('url','id','name','slug','parent_category','get_post_count','sub_cat','cat_post')
        extra_kwargs = {
            'url': {'view_name': 'category-detail', 'lookup_field': 'slug'},
        }


class TagSerializers(serializers.HyperlinkedModelSerializer):
    slug = serializers.CharField(help_text="slug", label="slug",read_only=True)
    get_post_count = serializers.CharField(read_only=True)
    class Meta:
        model = Tag
        fields = ('url','id','slug','name','get_post_count')
        extra_kwargs = {
            'url': {'view_name': 'tag-detail','lookup_field':'slug'},
        }
    def validate_name(self,name):
        if len(name) == 1:
            raise serializers.ValidationError('太短了')
        return name

class PostDetailSerializers(serializers.HyperlinkedModelSerializer):
    # category = serializers.CharField(source='category.get_absolute_url')
    category = CategorySerializers()
    tags = TagSerializers(many=True)
    author = UserSimpleSerializers()
    class Meta:
        model = Post
        fields = ('url', 'id','title', 'body','body_md', 'can_comment','excerpt','codestyle',
                  'views_count', 'comment_count', 'upvote_count','create_date','mod_date',
                  'reproduce_source','reproduce','author','category', 'tags')


class PostCreateUpdateSerializers(serializers.HyperlinkedModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    tags = serializers.PrimaryKeyRelatedField(queryset=Tag.objects.all(),many=True)
    class Meta:
        model = Post
        fields = ('url','id','title','body','body_md','reproduce','codestyle','reproduce_source','can_comment','category','tags')

class PostSimpleSerializers(serializers.HyperlinkedModelSerializer):
    category = serializers.CharField(source="category.name")
    category_slug = serializers.CharField(source='category.slug')
    category_url = serializers.CharField(source='category.get_absolute_url')
    author = serializers.CharField(source='author.username')
    class Meta:
        model = Post
        fields = ('url','id','title','excerpt','create_date','mod_date','views_count','comment_count','upvote_count',
                  'author','category','category_slug','category_url')


