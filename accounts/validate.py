import re

from rest_framework.exceptions import ValidationError


def validate_mobile(value):
    r = re.compile(
        r'^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$')
    if not r.match(str(value)):
        raise ValidationError('手机号不合法')
