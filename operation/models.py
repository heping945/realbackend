from django.db import models

from accounts.models import UserProfile
from blog.models import Post
# Create your models here.

class UserFav(models.Model):
    """
    用户收藏
    """
    user = models.ForeignKey(UserProfile, verbose_name="用户")
    post = models.ForeignKey(Post, verbose_name="文章", help_text="文章id")
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="添加时间")

    class Meta:
        verbose_name = '用户收藏'
        verbose_name_plural = verbose_name
        unique_together = ("user", "post")

    def __str__(self):
        return self.user.username

    def if_fav(self):
        return UserFav.objects.filter(tags__slug=self.slug).count()
