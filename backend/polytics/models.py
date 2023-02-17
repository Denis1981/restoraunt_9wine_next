from django.db import models

class Polytics(models.Model):
    title = models.CharField(max_length=150, verbose_name='Для страницы')
    content = models.TextField(verbose_name='Описание')

    def get_absolute_url(self):
        return reverse('polytics', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'