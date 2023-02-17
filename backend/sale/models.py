from django.db import models

class Sale(models.Model):
    title = models.CharField(max_length=150, verbose_name='Название распродажи')
    contentSale = models.TextField(blank=True, verbose_name='Описание акции')
    contentPopup = models.TextField(blank=True, verbose_name='Описание подробностей акции')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    is_published = models.BooleanField(default=True, verbose_name='Размещено да/нет')
    itemSale1 = models.CharField(max_length=150, verbose_name='Верхнее описание')
    itemSale2 = models.CharField(max_length=150, verbose_name='Нижнее описание')
    discount = models.CharField(max_length=150, verbose_name='Описание скидки')
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='Баннер', blank=True)

    def get_absolute_url(self):
        return reverse('sale', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Акция'
        verbose_name_plural = 'Акции'




