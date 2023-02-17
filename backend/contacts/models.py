from django.db import models

class Contacts(models.Model):
    title = models.CharField(max_length=150, verbose_name='Для страницы')
    address = models.CharField(max_length=150, verbose_name='Адрес')
    phone = models.CharField(max_length=150, verbose_name='Телефон')
    mail = models.CharField(max_length=150, verbose_name='Электронная почта')
    time1 = models.CharField(max_length=150, verbose_name='Время1')
    time2 = models.CharField(max_length=150, verbose_name='Время2')
    time3 = models.CharField(max_length=150, verbose_name='Время3')
    vk = models.CharField(max_length=150, verbose_name='Ссылка на VK')
    telegram = models.CharField(max_length=150, verbose_name='Ссылка на Telegram')
    content = models.TextField(verbose_name='Описание')

    def get_absolute_url(self):
        return reverse('contacts', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'
