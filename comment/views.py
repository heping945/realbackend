from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import mixins
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from utils.permission import IsAuthorOrReadOnly
from .models import Comment,Message
from .filters import MessageFilter
from .serializers import CommentSerialziser,CommentCreateSerializer,MessageSerializer


# Create your views here.


class CommentViewSet(mixins.RetrieveModelMixin,mixins.CreateModelMixin, mixins.DestroyModelMixin,
                     viewsets.GenericViewSet):
    queryset = Comment.objects.all()
    permission_classes = (IsAuthorOrReadOnly,IsAuthenticatedOrReadOnly)
    lookup_field = 'post_id'

    def get_serializer_class(self):
        if self.action =='create':
            return CommentCreateSerializer
        return CommentSerialziser

    def retrieve(self, request, *args, **kwargs):
        post_id = kwargs['post_id']
        comment_list = Comment.objects.all().filter(post_id=post_id, parent_comment=None)
        res = self.get_serializer(comment_list,many=True)
        return Response(res.data)

    def perform_create(self, serializer):
        """
        重写 perform_create
        user 信息不在 request.data 中, 在保存时加入 user 信息
        """
        serializer.save(author=self.request.user)


class MessageViewset(mixins.ListModelMixin, mixins.DestroyModelMixin, mixins.CreateModelMixin,
                            viewsets.GenericViewSet):

    permission_classes = (IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly)
    filter_backends = (DjangoFilterBackend,)
    filter_class =MessageFilter

    serializer_class = MessageSerializer
    queryset = Message.objects.all()
