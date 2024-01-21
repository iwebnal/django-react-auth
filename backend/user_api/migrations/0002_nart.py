# Generated by Django 4.1.5 on 2024-01-21 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Nart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_ru', models.TextField(blank=True, verbose_name='Название (ru)')),
                ('content_kb', models.TextField(blank=True, verbose_name='Название (kb)')),
                ('description_ru', models.TextField(blank=True, verbose_name='Описание (ru)')),
                ('description_kb', models.TextField(blank=True, verbose_name='Описание (kb)')),
                ('photo', models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='Фото')),
                ('time_create', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
                ('time_update', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования')),
                ('is_published', models.BooleanField(default=True, verbose_name='Опубликовано')),
            ],
            options={
                'verbose_name': 'Русско-Кабардинский словарь',
                'verbose_name_plural': 'Русско-Кабардинский словарь',
                'ordering': ['time_create', 'content_ru'],
            },
        ),
    ]