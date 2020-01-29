class ShortUrl:
    ID_COUNTER = "ShortyUrl::id_counter"
    URL_HASH = "ShortyUrl::url_hash"
    CHARCHOICE = tuple('abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')

    def __init__(self, redisdb):
        self.redisdb = redisdb

    @classmethod
    def transto62(cls,num):
        res = []
        while num:
            num, b = divmod(num, 62)
            res.append(b)
        res.reverse()
        r = ''.join(list(map(lambda x: cls.CHARCHOICE[x], res)))
        return r

    def shorten(self, url,startnum=10):
        getdefault = self.redisdb.get(self.ID_COUNTER)
        if getdefault:
            new_id = self.redisdb.incr(self.ID_COUNTER)
        else:
            self.redisdb.set(self.ID_COUNTER,startnum)
            new_id = startnum
        short_id = self.transto62(new_id)
        self.redisdb.hset(self.URL_HASH, short_id,url)
        return short_id

    def restore(self, short_id):
        """
        根据给定的短网址 ID ，返回与之对应的目标网址。
        """
        return self.redisdb.hget(self.URL_HASH, short_id)