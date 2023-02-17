from django.db import models

class Seo(models.Model):
    title = models.CharField(max_length=150, verbose_name='Для страницы')
    title_page = models.TextField(verbose_name='title')
    description = models.TextField(verbose_name='description')
    keywords = models.TextField(verbose_name='keywords')
    og_type = models.CharField(max_length=500, verbose_name='Facebook og:type')
    og_title = models.TextField(verbose_name='Facebook og:title')
    og_description = models.TextField(verbose_name='Facebook og:description')
    twitter_creator = models.CharField(max_length=500, verbose_name='twitter:creator')
    twitter_card = models.CharField(max_length=500, verbose_name='twitter:card')
    twitter_title = models.TextField(verbose_name='twitter:title')
    twitter_description = models.TextField(verbose_name='twitter:description')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата оптимизации')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    def get_absolute_url(self):
        return reverse('seo', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'SEO оптимизация'
        verbose_name_plural = 'SEO оптимизация'
