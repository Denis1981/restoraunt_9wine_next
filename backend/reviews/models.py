from django.db import models

class Reviews(models.Model):
    title = models.CharField(max_length=150, verbose_name='Имя клиента')
    content = models.TextField(blank=True, verbose_name='Содержание отзыва')
    dateReview = models.CharField(max_length=150, verbose_name='Дата отзыва')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    is_published = models.BooleanField(default=True, verbose_name='Размещено да/нет')
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='Фото клиента', blank=True)

    def get_absolute_url(self):
        return reverse('reviews', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'
