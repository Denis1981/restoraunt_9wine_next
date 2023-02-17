from django.db import models

class Degustation(models.Model):
    title = models.CharField(max_length=150, verbose_name='Для страницы')
    date = models.CharField(max_length=150, verbose_name='Дата и время')
    price = models.CharField(max_length=150, verbose_name='Стоимость мероприятия')
    content = models.TextField(blank=True, verbose_name='Описание мероприятия')

    def get_absolute_url(self):
        return reverse('wineevening', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'

