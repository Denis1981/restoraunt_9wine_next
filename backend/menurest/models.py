from django.db import models

class Menurest(models.Model):
    title = models.CharField(max_length=150, verbose_name='для страницы')
    wine = models.TextField(blank=True, verbose_name='wine')
    wine_bar = models.TextField(blank=True, verbose_name='wine_bar')
    bar = models.TextField(blank=True, verbose_name='bar')
    menu = models.TextField(blank=True, verbose_name='menu')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    def get_absolute_url(self):
        return reverse('menurest', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Опции меню ресторана'
        verbose_name_plural = 'Опции меню ресторана'

