from django.db import models

class FormsReserve(models.Model):
    title = models.CharField(max_length=150, verbose_name='Имя клиента')
    phone = models.CharField(max_length=150, verbose_name='Телефон')
    comment = models.CharField(max_length=150, verbose_name='Комментарии к заказу')
    dateReserve = models.CharField(max_length=150, verbose_name='Желаемая дата')
    timeReserve = models.CharField(max_length=150, verbose_name='Желаемое время')
    quantity = models.CharField(max_length=150, verbose_name='Количество гостей')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата заказа')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления заказа')

    def get_absolute_url(self):
        return reverse('reserve', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Резервирование столика'
        verbose_name_plural = 'Резервирование столиков'

class FormsCall(models.Model):
    title = models.CharField(max_length=150, verbose_name='Имя клиента')
    phone = models.CharField(max_length=150, verbose_name='Телефон')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата заказа')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления заказа')

    def get_absolute_url(self):
        return reverse('call', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Заявка на звонок'
        verbose_name_plural = 'Заявки на звонки'

class FormsReserveDegustation(models.Model):
    title = models.CharField(max_length=150, verbose_name='Имя клиента')
    phone = models.CharField(max_length=150, verbose_name='Телефон')
    dateReserve = models.CharField(max_length=150, verbose_name='Желаемая дата')
    timeReserve = models.CharField(max_length=150, verbose_name='Желаемое время')
    quantity = models.CharField(max_length=150, verbose_name='Количество гостей')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата заказа')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления заказа')

    def get_absolute_url(self):
        return reverse('degustation', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Заявка на дегустацию'
        verbose_name_plural = 'Заявки на дегустации'

class FormsReserveHappy(models.Model):
    title = models.CharField(max_length=150, verbose_name='Имя клиента')
    phone = models.CharField(max_length=150, verbose_name='Телефон')
    dateReserve = models.CharField(max_length=150, verbose_name='Желаемая дата')
    timeReserve = models.CharField(max_length=150, verbose_name='Желаемое время')
    quantity = models.CharField(max_length=150, verbose_name='Количество гостей')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата заказа')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления заказа')

    def get_absolute_url(self):
        return reverse('happy', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Заявка на празднование дня рождения'
        verbose_name_plural = 'Заявки на празднование дня рождения'

