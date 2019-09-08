from django.apps import AppConfig


class AccountsConfig(AppConfig):
    name = 'accounts'
    verbose_name = '用户管理'

    def ready(self):
        import accounts.signals