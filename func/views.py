from rest_framework import viewsets
from rest_framework.response import Response

from django_redis import get_redis_connection
from .utils import ShortUrl

coon = get_redis_connection("dwz")
s = ShortUrl(coon)


class DwzViewset(viewsets.ViewSet):
    def create(self, request, *args, **kwargs):
        long_url = request.data.get('lurl')
        ret = {}
        if long_url:
            short_url = s.shorten(long_url, 10000000)
            ret['data'] = short_url
            ret['code'] = 1
            ret['msg'] = 'success'
        else:
            ret = {
                'code': 0,
                'msg': '参数错误'
            }
        return Response(ret)

    def retrieve(self, request, *args, **kwargs):
        show_id = kwargs.get('pk')
        ret = {'code': 2, 'data': None,'msg':'未查询到信息'}
        try:
            res = s.restore(show_id)
            if res:
                ret = {'data': res, 'code': 1, 'msg': 'success'}
        except Exception as e:
            ret = {'code': 0, 'msg': '参数错误'}

        return Response(ret)
