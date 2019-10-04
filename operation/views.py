from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated
from utils.permission import IsUserOrReadOnly

from .models import UserFav
from .serializers import UserFavSerializer


# Create your views here.

class UserFavViewset(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                     mixins.DestroyModelMixin, viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated,IsUserOrReadOnly)
    serializer_class = UserFavSerializer
    lookup_field = 'post_id'

    def get_queryset(self):
        return UserFav.objects.filter(user=self.request.user)