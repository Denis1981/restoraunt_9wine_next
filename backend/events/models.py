from django.db import models

class Events(models.Model):
    title = models.CharField(max_length=150, verbose_name='Название страницы')
    content = models.TextField(blank=True, verbose_name='Содержание страницы')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='Изображение', blank=True)
    is_published = models.BooleanField(default=True, verbose_name='Опубликовано да/нет')
    keywords = models.CharField(max_length=350, verbose_name='Ключи для SEO')
    description = models.TextField(max_length=350, verbose_name='Описание для SEO')

    def get_absolute_url(self):
        return reverse('events', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'

