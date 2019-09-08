from rest_framework import viewsets
from .serializers import UserSerializers,UserSimpleSerializers,UserRegSerializers,UserUpdateSerializers

from .models import UserProfile


class UserViewset(viewsets.ModelViewSet):
    '''
    处理api/userprofile
    '''
    queryset = UserProfile.objects.all()
    lookup_field = 'urltoken'

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return UserSerializers
        elif self.action == 'list':
            return  UserSimpleSerializers
        elif self.action == 'create':
            return  UserRegSerializers
        return UserUpdateSerializers
