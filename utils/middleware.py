import logging

from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse

logger = logging.getLogger('django')


class RefuseRequests(MiddlewareMixin):
    def process_request(self, request):
        http_user_agent = request.META.get('HTTP_USER_AGENT',' ')
        if 'requests' in http_user_agent:
            d = {'err': '权限出错'}
            return JsonResponse(d, )
        return None




# class SetRemoteAddrFromForwardedFor(MiddlewareMixin):
#     def process_request(self, request):
#         if 'HTTP_X_FORWARDED_FOR' in request.META:  # 获取ip
#             client_ip = request.META['HTTP_X_FORWARDED_FOR']
#             client_ip = client_ip.split(",")[0]  # 所以这里是真实的ip
#         else:
#             client_ip = request.META['REMOTE_ADDR']  # 这里获得代理ip
#         logger.info(f'client_ip-->{client_ip}')