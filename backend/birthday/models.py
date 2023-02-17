from django.db import models

class Birthday(models.Model):
    title = models.CharField(max_length=150, verbose_name='Для страницы')
    price = models.CharField(max_length=150, verbose_name='Стоимость мероприятия')
    akciya1_title = models.CharField(max_length=150, verbose_name='Название акции_1')
    akciya2_title = models.CharField(max_length=150, verbose_name='Название акции_2')
    akciya3_title = models.CharField(max_length=150, verbose_name='Название акции_3')
    akciya1_desc = models.CharField(max_length=150, verbose_name='Описание акции_1')
    akciya2_desc = models.CharField(max_length=150, verbose_name='Описание акции_2')
    akciya3_desc = models.CharField(max_length=150, verbose_name='Описание акции_3')
    happy_package_quota = models.CharField(max_length=150, verbose_name='для скольки человек')
    happy_package_price = models.CharField(max_length=150, verbose_name='Стоимость предложения')
    happy_package = models.TextField(blank=True, verbose_name='Предложение ресторана')

    def get_absolute_url(self):
        return reverse('birthday', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'
