from rest_framework import viewsets
from rest_framework import mixins

from .models import PostImg
from .serializers import PostImgSerializers



class PostImgViewset(mixins.RetrieveModelMixin,mixins.ListModelMixin,
                  mixins.CreateModelMixin,viewsets.GenericViewSet):
    queryset = PostImg.objects.all()
    serializer_class = PostImgSerializers