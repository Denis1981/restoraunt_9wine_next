from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=150, db_index=True, verbose_name='Наименование категории')
    slug = models.SlugField(max_length=50, verbose_name='Url', unique=True)

    def get_absolute_url(self):
        return reverse('slug', kwargs={"slug": self.slug})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Категория меню'
        verbose_name_plural = 'Категории меню'
        ordering = ['title']

class Tag(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, verbose_name='Url', unique=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('slug', kwargs={"slug": self.pk})

    class Meta:
        verbose_name = 'Подкатегория меню'
        verbose_name_plural = 'Подкатегории меню'
        ordering = ['title']

class Menus(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT, verbose_name='Категория')
    tags = models.ManyToManyField(Tag, blank=True, related_name='Тег')
    title = models.CharField(max_length=150, verbose_name='Название опции')
    itemPrice = models.CharField(max_length=150, blank=True, verbose_name='Цена позиции')
    itemPriceTotal = models.CharField(max_length=150, verbose_name='Общая цена позиции')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')
    is_published = models.BooleanField(default=True, verbose_name='Актуально да/нет')

    def get_absolute_url(self):
        return reverse('menus', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Опция меню'
        verbose_name_plural = 'Опции меню'
        ordering = ['-created_at']




