# Generated by Django 4.1.6 on 2023-02-10 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='is_published',
            field=models.BooleanField(default=True, verbose_name='Опубликовано да/нет'),
        ),
    ]
