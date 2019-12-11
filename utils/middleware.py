from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse


class RefuseRequests(MiddlewareMixin):
    def process_request(self, request):
        http_user_agent = request.META.get('HTTP_USER_AGENT')
        if 'requests' in http_user_agent:
            d = {'err': '权限出错'}
            return JsonResponse(d, )
        return None




# class SetRemoteAddrFromForwardedFor(MiddlewareMixin):
#     def process_request(self, request):
#         try:
#             real_ip = request.META.get('HTTP_X_FORWARDED_FOR')
#             print((1,real_ip))
#         except KeyError:
#             pass
#         else:
#             real_ip = request.META.get('REMOTE_ADDR')
#             print(2,real_ip)