from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse


class RefuseRequests(MiddlewareMixin):
    def process_request(self, request):
        http_user_agent = request.META.get('HTTP_USER_AGENT')
        if 'requests' in http_user_agent:
            d={'err':'权限出错'}
            return JsonResponse(d,)
        return None
