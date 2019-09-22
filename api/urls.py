# api接口的urls文件
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token

from django.conf.urls import url, include

from blog.views import (PostViewset, TagViewset, CategoryViewset)
from accounts.views import UserViewset
from fileserver.views import PostImgViewset
from subject.views import TopicViewset,ChapterFileViewset

router = DefaultRouter()

router.register(r'user', UserViewset, base_name='user')
router.register(r'category', CategoryViewset, base_name='category')
router.register(r'tag', TagViewset, base_name='tag')
router.register(r'post', PostViewset, base_name='post')
router.register(r'topic', TopicViewset, base_name='topic')
router.register(r'postimg', PostImgViewset)
router.register(r'chapter', ChapterFileViewset)

urlpatterns = [
    url(r'^', include(router.urls)),
    # 登录接口
    url(r'^login/$', obtain_jwt_token),
    # jwt token刷新延长登录接口
    url(r'^refresh/$', refresh_jwt_token),
]
